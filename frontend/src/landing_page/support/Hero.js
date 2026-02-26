import React, { useState } from "react";
import '../../index.css'

function Hero() {

  return (
    <section className="container-fluid p-3" id="supportHero">
      <div className="supportWrapper">
       <h4 className="fs-5">Suport portal</h4>
        <a href="" className="p-4"style={{
   marginRight:"25rem",
  color:"white",textDecoration:"none"}}>Track Tickets</a>
      </div>
      <div className="row" style={{paddingLeft:"19rem"}}>
        <div className="col-6 mb-5">
          <h4 style={{fontWeight:"400"}}>Search for an answer or browser help topics <br/>
          to create a ticket
          </h4>
          <input type="text" placeholder="Eg.how do i activate F&Q why is my order getting rejected" className="mt-3 mb-3"/>
          <br/>
       <a href="" style={{color:"white"}}>Track account opening </a>
         <a href="" style={{color:"white",marginLeft:"0.6rem"}} >Track segment activation</a>
         <a href="" style={{color:"white",marginLeft:"0.6rem"}} >Intraday</a>
         <br/>
         <a href="" style={{color:"white"}}>Kite user manual</a>
        </div>
        <div className="col-6">
          <h4 style={{fontWeight:"400"}}>Featured</h4>
          <ol style={{lineHeight:"28px"}} className="mt-3">
            <li>Current Takeovers and Delivery-January,2024</li>
            <li>Latest intraday leverages-MIS & CO</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
// import React, { useState } from "react";
// import "../../index.css";

// function Hero() {
//   const [input, setInput] = useState("");

  // return (
  //   <section className="container-fluid p-3" id="supportHero">

  //     {/* HEADER */}
  //     <div className="d-flex justify-content-between align-items-center px-5">
  //       <h4 className="fs-5 m-0">Support portal</h4>

  //       <a
  //         href="#"
  //         onClick={(e) => e.preventDefault()}
  //         style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
  //       >
  //         Track Tickets
  //       </a>
  //     </div>

      {/* MAIN CONTENT */}
      {/* <div className="container mt-4">
        <div className="row">

          {/* LEFT SIDE */}
          {/* <div className="col-md-6 mb-5">
            <h4 style={{ fontWeight: "400" }}>
              Search for an answer or browse help topics <br />
              to create a ticket
            </h4>

            <input
              type="text"
              placeholder="Eg. how do I activate F&O, why is my order getting rejected"
              className="mt-3 mb-3"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />  */}

            {/* LINKS */}
            {/* <div className="d-flex gap-2 flex-wrap">
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "white" }}>
                Track account opening
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "white" }}>
                Track segment activation
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "white" }}>
                Intraday
              </a>
            </div>

            <br />

            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "white" }}>
              Kite user manual
            </a>
          </div>

          {/* RIGHT SIDE */}
          {/* <div className="col-md-6">
            <h4 style={{ fontWeight: "400" }}>Featured</h4>

            <ol className="mt-3">
              <li>Current Takeovers and Delivery - January, 2024</li>
              <li>Latest intraday leverages - MIS & CO</li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;  */}