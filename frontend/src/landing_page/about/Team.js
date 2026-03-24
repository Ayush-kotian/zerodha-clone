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
        <div className="col-lg-5 col-12">
          <div>
            <img
              src="media\images\myphoto.jpeg"
              className="team-photo"
            />
            <div className="mt-4 team-name-wrap">
              <h3 style={{ color: "gray" }}>Ayush</h3>
            </div>
            <div>
              <p
                className="team-role text-muted"
              >
                Full-Stack Developer
              </p>
            </div>
          </div>
        </div>
        <div
          className="team-p col-lg-7 col-12 mt-3 text-muted "
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
