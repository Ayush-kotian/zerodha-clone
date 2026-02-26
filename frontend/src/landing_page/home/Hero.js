import React from "react";
function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center mb-5">
        <img src="media\images\homeHero.png" alt="homeHero" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="mt-2">
          Online platform to invest in stocks,derivatives,mutual funds,and more
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

export default Hero;
