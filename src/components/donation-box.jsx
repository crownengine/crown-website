import React, { useState } from "react";

const DonationBox = () => {
  const [frequency, setFrequency] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState({ "one-time": 100, monthly: 25 });
  const [customAmount, setCustomAmount] = useState("100");
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
    GBP: "£",
  };

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
    const isValid =
      !isNaN(numericValue) && numericValue >= 1 && numericValue <= 10000 && Number.isInteger(numericValue);

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
    const prefix = "https://donate.stripe.com";

    if (frequency === "monthly") {
      switch (amount) {
        case 5:
          if (currency === "GBP")
            window.location.href = prefix + "/9AQdU78dqgi90sU3cn";
          else if (currency === "USD")
            window.location.href = prefix + "/14kdU78dq8PH8Zq3co";
          else
            window.location.href = prefix + "/cN22bpbpC3vn6Ri6oy";
          break;
        case 10:
          if (currency === "GBP")
            window.location.href = prefix + "/9AQaHVdxKaXPdfGbIX";
          else if (currency === "USD")
            window.location.href = prefix + "/cN2aHV65i3vncbCcN0";
          else
            window.location.href = prefix + "/bIYaHVgJW9TLcbCeV7";
          break;
        case 25:
          if (currency === "GBP")
            window.location.href = prefix + "/00gg2fctG5Dva3u00i";
          else if (currency === "USD")
            window.location.href = prefix + "/28o6rFfFS1nfcbCfZf";
          else
            window.location.href = prefix + "/5kA8zNbpC8PH1wYcN2";
          break;
        case 50:
          if (currency === "GBP")
            window.location.href = prefix + "/14k2bp0KY9TL8Zq9AV";
          else if (currency === "USD")
            window.location.href = prefix + "/fZe7vJdxK9TL3F64gA";
          else
            window.location.href = prefix + "/9AQ6rFbpCaXPa3u6oH";
          break;
        case 100:
          if (currency === "GBP")
            window.location.href = prefix + "/28o03hctG6HzejKfZm";
          else if (currency === "USD")
            window.location.href = prefix + "/7sI2bp0KY9TLgrS00n";
          else
            window.location.href = prefix + "/bIYbLZ8dq2rjdfGdRc";
          break;
        case 250:
          if (currency === "GBP")
            window.location.href = prefix + "/cN23ft79m0jb8Zq9B1";
          else if (currency === "USD")
            window.location.href = prefix + "/6oEdU7fFSc1T8Zq5kK";
          else
            window.location.href = prefix + "/14k9DRgJWea12B24gF";
          break;
        default:
          break;
      }
    } else if (frequency === "one-time") {
      const amountTimes100 = amount * 100;
      if (currency === "GBP")
        window.location.href = `${prefix}/28o03h1P2fe54Ja008?__prefilled_amount=${amountTimes100}`;
      else if (currency === "USD")
        window.location.href = `${prefix}/3cs4jx65id5Xb7y14b?__prefilled_amount=${amountTimes100}`;
      else
        window.location.href = `${prefix}/dR67vJ2T62rj3F69AG?__prefilled_amount=${amountTimes100}`;
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Frequency Toggle */}
      <div className="flex justify-center mb-6">
        <button
          className={`w-1/2 py-2 font-semibold ${
            frequency === "monthly" ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-700"
          } rounded-l-lg`}
          onClick={() => setFrequency("monthly")}
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
              className={`w-full px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 ${
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
              className="w-full px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600"
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
          <option value="GBP">GBP</option>
        </select>
      </div>
    </div>
  );
};

export default DonationBox;

