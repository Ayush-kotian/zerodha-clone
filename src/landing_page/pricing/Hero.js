import React from "react";
function Hero() {
  return (
    <div className="container p-4">
      <div className="row text-center mb-2">
        <div className="border-bottom">
          <h1 className="mt-5">Pricing</h1>
          <p className="mt-3 mb-5">
            Free equity investments and flat ₹ 20 traday and F&O trades
          </p>
        </div>
        <div className="row mt-5 p-5">
          <div className="col p-4">
            <div>
              <img
                src="media\images\pricingMF.svg"
                style={{ width: "80%", height: "100%" }}
              />
            </div>
            <div>
              <h3>Free equity delivery</h3>
              <p className="mt-3 text-muted">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
          </div>
          <div className="col p-4">
            <div>
              <img
                src="media\images\intradayTrades.svg"
                style={{ width: "80%", height: "100%" }}
              />
            </div>
            <div>
              <h3>Intraday and F&O trade</h3>
              <p className="mt-3 text-muted">
                Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
              </p>
            </div>
          </div>
          <div className="col p-4">
            <div>
              <img
                src="media\images\pricingEquity.svg"
                style={{ width: "80%", height: "100%" }}
              />
            </div>
            <div>
              <h3>Free direct MF</h3>
              <p className="mt-3 text-muted">
                {" "}
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
