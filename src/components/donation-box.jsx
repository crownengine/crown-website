import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router";

const DonationBox = ({ frequency: propFreq, initialAmount }) => {
  const [frequency, setFrequency] = useState(propFreq || "one-time");
  const [selectedAmount, setSelectedAmount] = useState({
    "one-time": propFreq === "one-time" ? initialAmount : 100,
    monthly: propFreq === "monthly" ? initialAmount : 25,
  });
  const [customAmount, setCustomAmount] = useState(
    propFreq === "one-time" ? initialAmount.toString() : "100"
  );
  const [currency, setCurrency] = useState("EUR");
  const [isCustomAmountValid, setIsCustomAmountValid] = useState(true);

  // Define amounts for each frequency
  const amounts = {
    monthly: [5, 10, 25, 50, 100, 250],
    "one-time": [25, 50, 100, 150, 250, 500],
  };

  // Currency symbol map
  const currencySymbols = {
    EUR: "€",
    USD: "$",
    BTC: "$",
  };

  const membershipTiers = {
    5: { level: "bronze", badge: "Bronze membership badge/discord role.", benefit: null },
    10: { level: "silver", badge: "Silver membership badge/discord role.", benefit: "Name on website." },
    25: { level: "gold", badge: "Gold membership badge/discord role.", benefit: "Larger name on website." },
    50: { level: "titanium", badge: "Titanium membership badge/discord role.", benefit: "Link on website." },
    100: { level: "platinum", badge: "Platinum membership badge/discord role.", benefit: "Logo on website." },
    250: { level: "diamond", badge: "Diamond membership badge/discord role.", benefit: "Larger logo on website." },
  };

  // Whenever parent props change, override internal state.
  useEffect(() => {
    if (propFreq) {
      setFrequency(propFreq);

      setSelectedAmount((prev) => ({
        ...prev,
        [propFreq]: initialAmount,
      }));

      if (propFreq === "one-time") {
        setCustomAmount(initialAmount.toString());
        setIsCustomAmountValid(true);
      }
    }
  }, [propFreq, initialAmount]);

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const freq = params.get("frequency");
    const amt = params.get("amount");

    if (freq === "monthly" || freq === "one-time") {
      setFrequency(freq);
    }

    if (amt) {
      const numAmt = parseInt(amt, 10);
      if (!isNaN(numAmt)) {
        setSelectedAmount((prev) => ({
          ...prev,
          [freq || frequency]: numAmt,
        }));
        if ((freq || frequency) === "one-time") {
          setCustomAmount(numAmt.toString());
          setIsCustomAmountValid(true);
        }
      }
    }
  }, [location.search, frequency]);

  // When BTC is selected, monthly subscriptions are not supported.
  useEffect(() => {
    if (currency === "BTC" && frequency === "monthly") {
      setFrequency("one-time");
      setSelectedAmount((prev) => ({ ...prev, ["one-time"]: amounts["one-time"][0] }));
      setCustomAmount(amounts["one-time"][0].toString());
      setIsCustomAmountValid(true);
    }
  }, [currency]);

  const handlePresetClick = (amount) => {
    setSelectedAmount((prev) => ({
      ...prev,
      [frequency]: amount,
    }));
    if (frequency === "one-time") {
      setCustomAmount(amount); // Fill custom amount in One-time mode
      setIsCustomAmountValid(true); // Ensure button is enabled
    }
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);

    // Validate the custom amount
    const numericValue = parseFloat(value);
    const isValid = !isNaN(numericValue) && numericValue >= 1 && numericValue <= 10000 && Number.isInteger(numericValue);
    setIsCustomAmountValid(isValid);
    setSelectedAmount((prev) => ({
      ...prev,
      [frequency]: null, // Deselect preset button when custom value is entered
    }));
  };

  // Redirection logic for donation
  const handleDonate = () => {
    const amount = selectedAmount[frequency] || customAmount;
    // const prefix = "https://donate.crownengine.org/b";

    if (currency === "BTC") {
      const usdAmount = typeof amount === "number" ? amount : parseInt(amount, 10);
      window.location.href = `/fund/donate-btc?amount_usd=${usdAmount}`;
      return;
    }

    const prefix = "https://donate.stripe.com";

    if (frequency === "monthly") {
      switch (amount) {
        case 5:
          if (currency === "USD")
            window.location.href = prefix + "/14kdU78dq8PH8Zq3co";
          else
            window.location.href = prefix + "/cN22bpbpC3vn6Ri6oy";
          break;
        case 10:
          if (currency === "USD")
            window.location.href = prefix + "/cN2aHV65i3vncbCcN0";
          else
            window.location.href = prefix + "/bIYaHVgJW9TLcbCeV7";
          break;
        case 25:
          if (currency === "USD")
            window.location.href = prefix + "/28o6rFfFS1nfcbCfZf";
          else
            window.location.href = prefix + "/5kA8zNbpC8PH1wYcN2";
          break;
        case 50:
          if (currency === "USD")
            window.location.href = prefix + "/fZe7vJdxK9TL3F64gA";
          else
            window.location.href = prefix + "/9AQ6rFbpCaXPa3u6oH";
          break;
        case 100:
          if (currency === "USD")
            window.location.href = prefix + "/7sI2bp0KY9TLgrS00n";
          else
            window.location.href = prefix + "/bIYbLZ8dq2rjdfGdRc";
          break;
        case 250:
          if (currency === "USD")
            window.location.href = prefix + "/6oEdU7fFSc1T8Zq5kK";
          else
            window.location.href = prefix + "/14k9DRgJWea12B24gF";
          break;
        default:
          break;
      }
    } else if (frequency === "one-time") {
      const amountTimes100 = amount * 100;
      if (currency === "USD")
        window.location.href = `${prefix}/3cs4jx65id5Xb7y14b?__prefilled_amount=${amountTimes100}`;
      else
        window.location.href = `${prefix}/dR67vJ2T62rj3F69AG?__prefilled_amount=${amountTimes100}`;
    }
  };

  return (
    <div className="w-full p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Frequency Toggle */}
      <div className="flex justify-center mb-6">
        <button
          className={`w-1/2 py-2 font-semibold ${
            frequency === "monthly" ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-700"
          } rounded-l-lg`}
          onClick={() => setFrequency("monthly")}
          disabled={currency === "BTC"}
        >
          Monthly
        </button>
        <button
          className={`w-1/2 py-2 font-semibold ${
            frequency === "one-time" ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-700"
          } rounded-r-lg`}
          onClick={() => setFrequency("one-time")}
        >
          One-time
        </button>
      </div>

      {currency === "BTC" && (
        <div className="mb-4 text-sm text-yellow-700 bg-yellow-100 p-2 rounded">
          Bitcoin donations: amounts are displayed in <strong>USD</strong>. Monthly subscriptions are not supported for BTC.
        </div>
      )}

      {/* Preset Amount Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {amounts[frequency].map((amount) => (
          <button
            key={amount}
            className={`py-2 rounded-lg font-semibold border-2 text-center ${
              selectedAmount[frequency] === amount
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => handlePresetClick(amount)}
          >
            {currencySymbols[currency]} {amount}
          </button>
        ))}
      </div>

      {frequency === "monthly" && membershipTiers[selectedAmount.monthly] && (
        <div className="mb-4">
          {/* Title */}
          <h3 className="text-2xl text-gray-700 mb-3">
            Become a <span className="font-bold capitalize">{membershipTiers[selectedAmount.monthly].level}</span> member
          </h3>

          {/* Icon + Benefits */}
          <div className="flex items-start">
            {/* Icon */}
            <img
              src={`/membership-logos/crown-${membershipTiers[selectedAmount.monthly].level}.png`}
              alt={`${membershipTiers[selectedAmount.monthly].level} badge`}
              className="w-20 h-20 flex-shrink-0"
            />

            {/* Benefits List */}
            <ul className="ml-4 text-gray-600 font-medium space-y-1">
              <li>✓ {membershipTiers[selectedAmount.monthly].badge}</li>
              {membershipTiers[selectedAmount.monthly].benefit && (
                <li>✓ {membershipTiers[selectedAmount.monthly].benefit}</li>
              )}
            </ul>
          </div>
        </div>
      )}

      {frequency === "one-time" && membershipTiers[selectedAmount.monthly] && (
        <div className="mb-6">
          {/* Title */}
          <h3 className="text-2xl text-gray-700 mb-3">
            Donate <span className="font-bold">once</span> today
          </h3>
        </div>
      )}

      {/* Custom Amount and Donate Button for One-time */}
      {frequency === "one-time" && (
        <div className="mb-6 grid grid-cols-3 gap-4">
          {/* Custom Amount Field */}
          <div className="col-span-1 relative">
            <span className="absolute left-4 top-2/4 transform -translate-y-2/4 font-semibold text-gray-500">
              {currencySymbols[currency]}
            </span>
            <input
              type="text" // Use text to allow any input
              className={`w-full pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:outline-none font-semibold text-center text-indigo-600 ${
                isCustomAmountValid ? "focus:ring-indigo-500" : "border-red-500"
              }`}
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
            {!isCustomAmountValid && (
              <div className="absolute top-12 left-0 w-full text-sm text-red-500">
                <span className="inline-block p-2 bg-black text-white rounded-lg">
                  Please enter a value between 1 and 10000.
                </span>
              </div>
            )}
          </div>

          {/* Donate Button */}
          <div className="col-span-2">
            <button
              className={`w-full px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 ${
                !isCustomAmountValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isCustomAmountValid}
              onClick={handleDonate}
            >
              Donate <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      )}

      {/* Donate Button for Monthly */}
      {frequency === "monthly" && (
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <button
              className="w-full px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500"
              onClick={handleDonate}
            >
              Donate Monthly <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      )}

      {/* Currency Selector */}
      <div className="flex justify-end">
        <select
          className="px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="BTC">BTC</option>
        </select>
      </div>
    </div>
  );
};

export default DonationBox;
