import React from 'react';
import '../../index.css';
function Universe() {
    return ( <div className="container mb-5">
      <div className="row text-center">
        <h1 className='mt-2 mb-2'>The Zerodha Universe</h1>
        <p className='mt-4 className="mt-3"'>Extend your trading and investment experience even further with our
          partner platforms</p>
          <div className='col-4 mt-5'>
            <img src="media/images/smallcaseLogo.png" style={{ height:"auto",width:"38%"}}/>
            <p className="mt-3 text-muted" style={{fontSize:"12px"}}>Thematic investment platform</p>
          </div>
           <div className='col-4 mt-5'>
            <img src="media/images/streakLogo.png" style={{ height:"auto",width:"30%"}} />
            <p className="mt-3 text-muted" style={{fontSize:"12px"}}>Algo & stratergy platform</p>
          </div>
           <div className='col-4 mt-5'>
            <img src="media/images/sensibullLogo.svg" style={{ height:"auto",width:"38%"}}/>
            <p className="mt-3 text-muted" style={{fontSize:"12px"}}>Options trading platform</p>
          </div>
           <div className='col-4  mt-5 mb-3'>
            <img src="media/images/zerodhaFundhouse.png" style={{ height:"auto",width:"38%"}}/>
            <p className='mt-3 text-muted' style={{fontSize:"12px"}}>Asset management</p>
          </div>
          <div className='col-4 mt-5 mb-3'>
            <img src="media/images/goldenpiLogo.png" style={{ height:"auto",width:"38%"}}/>
            <p className="mt-3 text-muted" style={{fontSize:"12px"}}>Bonds trading platform</p>
          </div>
          <div className='col-4 mt-5 mb-3'>
            <img src="media/images/dittoLogo.png" style={{ height:"auto",width:"30%"}}/>
            <p className="mt-3 text-muted" style={{fontSize:"12px"}}>Insurance review and comparision</p>
          </div>
            <button
          className="btn btn-primary fs-5 mt-5 mb-5"
          style={{
            width: "15%",
            margin: "auto",
            padding: "0.5rem 1rem 0.5rem 1rem",
          }}
        >
          Signup now
        </button>
        </div>
        </div> );
}

export default Universe;