import React from "react";
function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-12 ">
          <img src="media\images\largestBroker.svg" alt="largestBroker" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-12 mt-5">
          <h1>Largest stock broker in India</h1>
          <p style={{ fontSize: "1.3rem" }}>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-5">
            <div className="col-sm-6 col-12 fs-5">
              <ul>
                <li>Future and Options</li>
                <li>Commodity derivaties</li>
                <li>Currency derivaties</li>
              </ul>
            </div>
            <div className="col-sm-6 col-12 fs-5">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Growth</li>
              </ul>
            </div>
          </div>
          <img
            src="media\images\pressLogos.png"
            alt="presslogo"
            style={{ width: "90%" }}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
