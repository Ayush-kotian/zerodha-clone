import React from "react";
function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-5">
        <div className="col-4 ">
          <h1>Unbeatable pricing</h1>
          <p>
            {" "}
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2 "></div>
        <div className="col-6 ">
          <div className="container">
            <div className="row">
              <div className="col border" style={{ padding: "1rem 3rem" }}>
                <h1>₹0</h1>
                <p className="mt-3">
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>
              </div>
              <div className="col border " style={{ padding: "0.5rem 1.5rem" }}>
                <h1>₹20</h1>
                <p className="mt-3">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
