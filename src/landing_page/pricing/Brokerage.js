import React from 'react';
function Brokerage() {
    return ( <div className="container mt-5 mb-1">
      <div className="row text-center mb-3">
        <div className='col-8'>
                <h1 className='fs-5' style={{color:"#387ED1",fontWeight:"500",marginRight:"6.5rem "}}>Brokerage calculator</h1>
            <ul style={{textAlign:"justify"}} className='mt-4'>
            <li className="mt-3 text-muted">
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mt-3 text-muted">Digital contract notes will be sent via e-mail.</li>
            <li className="mt-3 text-muted">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mt-3 text-muted">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mt-3 text-muted">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mt-3 text-muted">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>   
            </ul> 
        </div>
        <div className='col-4' style={{textAlign:"right"}}>
            <h1 className='fs-5' style={{color:"#387ED1",fontWeight:"500",marginRight:"6.5rem "}}>List of Charges</h1>
            </div> 
      </div>
      </div>);
}

export default Brokerage;