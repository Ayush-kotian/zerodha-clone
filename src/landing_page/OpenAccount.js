import React from "react";
function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center mb-5">
        <h1 className="mt-5">Open a Zerodha Account</h1>
        <p className="mt-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary fs-5 mt-3"
          style={{
            width: "20%",
            margin: "auto",
            padding: "0.5rem 1rem 0.5rem 1rem",
          }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
