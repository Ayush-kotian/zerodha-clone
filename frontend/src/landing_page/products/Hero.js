import React from 'react';
function Hero() {
    return (  <div className="container p-5 mb-5 border-bottom">
      <div className="row text-center  mb-5 p-5">
        <h1 className="mt-5 fs-2">Technology</h1>
        <h3 className="mt-3 text-muted" style={{fontWeight:"450",fontSize:"1.3rem"}}>
          Sleek,modern and intuituve trading platforms
        </h3>
        <p className='mt-2'>Check out our {" "}
             <a href="/" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
        </div>
        </div>
        );
}

export default Hero;