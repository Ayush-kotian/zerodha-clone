import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container mt-5 mb-5 border-top">
      <div className="row mt-5">
        <h1 className="text-center mb-5">People</h1>
      </div>
      <div className="row mt-5">
        <div className="col-5">
          <div>
            <img
              src="media\images\myphoto.jpeg"
              style={{ borderRadius: "50%", height: "20rem", width: "20rem" }}
            />
            <div className="mt-4" style={{ marginLeft: "6.8rem" }}>
              <h3 style={{ color: "gray" }}>Ayush</h3>
            </div>
            <div>
              <p
                style={{ marginLeft: "5rem", fontSize: "1.2rem" }}
                className="text-muted"
              >
                Full-Stack Developer
              </p>
            </div>
          </div>
        </div>
        <div
          className="team-p col-7 mt-3 text-muted "
          style={{ marginRight: "0rem" }}
        >
          <p>
            Ayush bootstrapped and designed Zerodha-clone to improve Full stack
            Skill using React in 2026
          </p>
          <p className="mt-2 mb-2">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Interested in doing websites like this.</p>
          <p>
            Connect on <Link to="/">Homepage</Link> / <a href="">TradingQnA</a>{" "}
            / <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
