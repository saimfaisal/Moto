import React, { useState } from "react";

function PaymentMethod() {
  const [selected, setSelected] = useState("");

  // form states
  const [userName, setUserName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // error states
  const [errors, setErrors] = useState({});

  // validate field
  const validateField = (field, value) => {
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: "This field is required" }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // enable/disable conditions
  const isJazzCashValid =
    selected === "jazzcash" && userName.trim() !== "" && accountNumber.trim() !== "";
  const isCashValid = selected === "cash";
  const isDebitValid =
    selected === "debit" && cardNumber.trim() !== "" && expiry.trim() !== "" && cvv.trim() !== "";

  const handleBooking = () => {
    window.location.href = "/booking.html";
  };

  return (
    <div className="max-w-md mx-auto mt-2 p-6 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Select Payment Method</h2>

      {/* Radio Buttons */}
      <div className="space-y-3">
        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
          <input
            type="radio"
            name="payment"
            value="jazzcash"
            checked={selected === "jazzcash"}
            onChange={(e) => setSelected(e.target.value)}
            className="mr-3 accent-blue-600"
          />
          JazzCash / Easypaisa
        </label>

        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
          <input
            type="radio"
            name="payment"
            value="cash"
            checked={selected === "cash"}
            onChange={(e) => setSelected(e.target.value)}
            className="mr-3 accent-green-600"
          />
          Cash on Delivery
        </label>

        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
          <input
            type="radio"
            name="payment"
            value="debit"
            checked={selected === "debit"}
            onChange={(e) => setSelected(e.target.value)}
            className="mr-3 accent-purple-600"
          />
          Debit Card (Visa / Platinum)
        </label>
      </div>

      {/* Display Info */}
      <div className="mt-6 p-4 border rounded-lg bg-gray-50 min-h-[100px]">
        {selected === "jazzcash" && (
          <div>
            <h3 className="font-semibold">JazzCash / Easypaisa</h3>
            <div className="mt-3 space-y-2">
              <div>
                <input
                  type="text"
                  placeholder="User Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onBlur={() => validateField("userName", userName)}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.userName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.userName && (
                  <p className="text-red-500 text-sm mt-1">{errors.userName}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Account Number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  onBlur={() => validateField("accountNumber", accountNumber)}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.accountNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.accountNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>
                )}
              </div>
            </div>

            <div className="flex justify-center items-center m-5">
              <button
                onClick={handleBooking}
                disabled={!isJazzCashValid}
                className={`px-6 py-2 border-2 rounded-xl ${
                  isJazzCashValid
                    ? "border-blue-600 bg-blue-500 text-white hover:bg-blue-600"
                    : "border-gray-300 bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        )}

        {selected === "cash" && (
          <div>
            <h3 className="font-semibold">Cash on Delivery</h3>
            <p className="text-sm text-gray-600">
              Pay cash when your order is delivered at your doorstep.
            </p>
            <div className="flex justify-center items-center m-5">
              <button
                onClick={handleBooking}
                disabled={!isCashValid}
                className={`px-6 py-2 border-2 rounded-xl ${
                  isCashValid
                    ? "border-green-600 bg-green-500 text-white hover:bg-green-600"
                    : "border-gray-300 bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        )}

        {selected === "debit" && (
          <div>
            <h3 className="font-semibold">Debit Card (Visa / Platinum)</h3>
            <p className="text-sm text-gray-600">
              Secure payment through your Visa or Platinum debit card.
            </p>
            <div className="mt-3 space-y-2">
              <div>
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  onBlur={() => validateField("cardNumber", cardNumber)}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.cardNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                )}
              </div>

              <div className="flex gap-2">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onBlur={() => validateField("expiry", expiry)}
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.expiry ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.expiry && (
                    <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
                  )}
                </div>

                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    onBlur={() => validateField("cvv", cvv)}
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.cvv ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center m-5">
              <button
                onClick={handleBooking}
                disabled={!isDebitValid}
                className={`px-6 py-2 border-2 rounded-xl ${
                  isDebitValid
                    ? "border-purple-600 bg-purple-500 text-white hover:bg-purple-600"
                    : "border-gray-300 bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        )}

        {!selected && (
          <p className="text-sm text-gray-500 text-center">
            Please select a payment method above.
          </p>
        )}
      </div>
    </div>
  );
}

export default PaymentMethod;
