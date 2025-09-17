import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

const bitcoinAddress = "bc1qhqqka8uj4wk5kn6c2675tggdgykwrr96szg8v2";
const RECEIVER = "The Crown Foundation";
const MIN_SATS = 25000;
const RELATIVE_TOLERANCE = 0.01;

function satsToBtc(sats) {
  const n = Number(sats) || 0;
  const btc = n / 1e8;
  return btc.toFixed(8).replace(/(?:\.0+|(?<=\.[0-9]*?)0+)$/, "");
}

export default function DonateBTC({ location }) {
  const query = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams(location?.search || "");
  const amountUsdParam = query.get("amount_usd");
  const amountSatsParam = query.get("amount"); // legacy support: user may pass sats directly as `amount`

  // Sats is null until we determine the final value.
  const [sats, setSats] = useState(null);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  // Convert using blockchain.info simple API (returns BTC as plain text).
  async function fetchFromBlockchainInfo(usd) {
    const url = `https://blockchain.info/tobtc?currency=USD&value=${encodeURIComponent(usd)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`blockchain.info returned ${res.status}`);
    const text = await res.text();
    const btc = parseFloat(text);
    if (!isFinite(btc) || btc <= 0) throw new Error("invalid btc from blockchain.info");
    return Math.round(btc * 1e8);
  }

  // Fetch BTC price from CoinGecko and compute sats.
  async function fetchFromCoinGecko(usd) {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`coingecko returned ${res.status}`);
    const json = await res.json();
    const priceUsd = json?.bitcoin?.usd;
    if (!isFinite(priceUsd) || priceUsd <= 0) throw new Error("invalid price from coingecko");
    const btc = usd / priceUsd;
    return Math.round(btc * 1e8);
  }

  // Fetch BTC spot price from Coinbase and compute sats.
  async function fetchFromCoinbase(usd) {
    const url = `https://api.coinbase.com/v2/prices/BTC-USD/spot`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`coinbase returned ${res.status}`);
    const json = await res.json();
    const priceUsd = parseFloat(json?.data?.amount);
    if (!isFinite(priceUsd) || priceUsd <= 0) throw new Error("invalid price from coinbase");
    const btc = usd / priceUsd;
    return Math.round(btc * 1e8);
  }

  // Find at least two sats conversions that are within tolerance.
  function findConsensus(values) {
    if (values.length < 2) return null;

    for (let i = 0; i < values.length; i++) {
      for (let j = i + 1; j < values.length; j++) {
        const a = values[i];
        const b = values[j];
        const rel = Math.abs(a - b) / ((a + b) / 2);

        if (rel <= RELATIVE_TOLERANCE) {
          const others = values.filter((_, idx) => idx !== i && idx !== j);
          if (others.length === 1) {
            const c = others[0];
            const relAC = Math.abs(a - c) / ((a + c) / 2);
            const relBC = Math.abs(b - c) / ((b + c) / 2);
            if (relAC <= RELATIVE_TOLERANCE && relBC <= RELATIVE_TOLERANCE) {
              return Math.round((a + b + c) / 3);
            }
          }
          return Math.round((a + b) / 2);
        }
      }
    }

    return null;
  }

  useEffect(() => {
    let mounted = true;
    async function determineSats() {
      // If amount_usd is absent, fall back to using amount param or default.
      if (!amountUsdParam) {
        const fallback = Number(amountSatsParam);
        const safe = !isNaN(fallback) && fallback >= MIN_SATS ? Math.round(fallback) : MIN_SATS;
        if (mounted) setSats(safe);
        return;
      }

      const usd = parseInt(amountUsdParam, 10);
      if (isNaN(usd) || usd <= 0) {
        if (mounted) setSats(MIN_SATS);
        return;
      }

      setLoading(true);

      // Try APIs in parallel and wait for results.
      const promises = [
        fetchFromBlockchainInfo(usd),
        fetchFromCoinGecko(usd),
        fetchFromCoinbase(usd),
      ];

      const results = await Promise.allSettled(promises);

      const successes = results
        .map((r) => (r.status === "fulfilled" ? r.value : null))
        .filter((v) => Number.isFinite(v) && v > 0);

      let finalSats;

      if (successes.length >= 2) {
        // Try to find a consensus (pair or all three within tolerance)
        const consensus = findConsensus(successes);
        if (consensus !== null) {
          finalSats = Math.max(MIN_SATS, consensus);
        } else {
          // No pair within tolerance. Prefer the primary API if it succeeded.
          const primary = results[0].status === "fulfilled" ? results[0].value : null;
          if (primary && Number.isFinite(primary) && primary > 0) {
            finalSats = Math.max(MIN_SATS, primary);
            console.warn("No consensus between price sources. Using primary API value." );
          } else {
            // Pick the first successful as fallback.
            finalSats = Math.max(MIN_SATS, successes[0]);
            console.warn("No consensus and primary API failed. Using first successful source.");
          }
        }
      } else if (successes.length === 1) {
        finalSats = Math.max(MIN_SATS, successes[0]);
      } else {
        // All failed.
        finalSats = MIN_SATS;
        console.error("All conversion APIs failed. Falling back to minimum sats.");
      }

      if (mounted) {
        setSats(finalSats);
        setLoading(false);
      }
    }

    determineSats().catch((err) => {
      console.error("Error while determining sats:", err);
      if (mounted) {
        setSats(MIN_SATS);
        setLoading(false);
      }
    });

    return () => { mounted = false; };
  }, [amountUsdParam, amountSatsParam]);

  // Only generate QR once sats is known (non-null).
  useEffect(() => {
    if (sats === null) return; // not ready yet

    const btc = satsToBtc(sats);
    const bip21 = `bitcoin:${bitcoinAddress}?amount=${encodeURIComponent(btc)}&label=${encodeURIComponent(RECEIVER)}&message=${encodeURIComponent("One-time donation")}`;

    let mounted = true;
    QRCode.toDataURL(bip21, { errorCorrectionLevel: "L", margin: 2, scale: 12 })
      .then((url) => mounted && setQrDataUrl(url))
      .catch((err) => {
        console.error("Failed to generate QR code:", err);
      });

    return () => { mounted = false; };
  }, [sats]);

  const btc = sats === null ? "0" : satsToBtc(sats);
  const bip21 = sats === null ? "" : `bitcoin:${bitcoinAddress}?amount=${encodeURIComponent(btc)}&label=${encodeURIComponent(RECEIVER)}&message=${encodeURIComponent("One-time donation")}`;

  const copyUri = async () => {
    if (!bip21) return;
    try {
      await navigator.clipboard.writeText(bip21);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background halves */}
      <div className="absolute left-0 top-0 w-full h-1/2 md:w-1/2 md:h-full bg-gray-800" aria-hidden="true" />
      <div className="absolute right-0 bottom-0 w-full h-1/2 md:right-0 md:top-0 md:w-1/2 md:h-full bg-white" aria-hidden="true" />

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left column */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center mb-6">
                <div className="header-logo w-28 h-28 bg-gray-700 rounded-md flex items-center justify-center text-sm text-gray-400"/>
            </div>

            <h1 className="text-3xl font-extrabold text-gray-200">One-time donation</h1>

            <div className="mt-6">
              <div className="text-xs text-gray-400">Receiver</div>
              <div className="mt-1 text-lg font-semibold text-gray-200">{RECEIVER}</div>
            </div>

            <div className="mt-6">
              <div className="text-xs text-gray-400">Amount</div>
              <div className="mt-1 text-2xl font-extrabold text-gray-100">{sats === null ? "—" : `${sats} sats`}</div>
              <div className="text-sm text-gray-400 mt-1">(~{btc} BTC)</div>
              {loading && <div className="text-xs text-gray-400 mt-2">Calculating amount from USD...</div>}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="max-w-md w-full text-center">
            {/* Bubble */}
            <div className="mb-4 flex justify-center">
              <div className="relative inline-block">
                <div className="px-4 py-2 rounded-full shadow-md text-white font-semibold text-sm" style={{ backgroundColor: '#f7931a' }}>
                  Scan Me!
                </div>
                <div style={{
                  width: 0,
                  height: 0,
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: '8px solid #f7931a',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: '100%'
                }} />
              </div>
            </div>

            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt="QR code for bitcoin payment"
                title={bip21}
                className="w-72 h-72 object-contain bg-white mx-auto"
              />
            ) : (
              <div className="w-72 h-72 flex items-center justify-center text-sm text-gray-400 mx-auto">
                {sats === null ? 'Waiting for USD -> BTC conversion...' : 'Generating QR...'}
              </div>
            )}

            <div className="mt-6 flex gap-2 justify-center">
              <button
                onClick={copyUri}
                disabled={!bip21}
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm shadow-sm ${bip21 ? 'bg-blue-600 text-white hover:opacity-95' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
              >
                {copied ? "Copied!" : "Copy URI"}
              </button>

              <a
                href={bip21 || '#'}
                onClick={(e) => { if (!bip21) e.preventDefault(); }}
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm ${bip21 ? 'bg-gray-100 text-gray-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
              >
                Open in wallet
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
