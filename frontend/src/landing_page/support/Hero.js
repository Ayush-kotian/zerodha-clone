import React from "react";
import '../../index.css'

function Hero() {
  return (
    <section className="container-fluid p-3" id="supportHero">
      <div className="supportWrapper">
       <h4 className="fs-5">Suport portal</h4>
        <a href="" className="p-4 support-track-link" style={{
   marginRight:"25rem",
  color:"white",textDecoration:"none"}}>Track Tickets</a>
      </div>
      <div className="row support-main-row" style={{paddingLeft:"19rem"}}>
        <div className="col-lg-6 col-12 mb-5">
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
        <div className="col-lg-6 col-12">
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
