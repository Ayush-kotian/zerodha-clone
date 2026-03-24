import React from "react";
function RightSection({ imageURL, productName, productDescription,learnMore}) {
  return (
    <div className="container" style={{marginTop:"8rem",marginBottom:""}}>
      <div className="row text-center g-5" style={{marginTop:"",marginBottom:""}}>
        <div className="col-lg-5 col-12 right-section-copy">
          <h1 style={{ textAlign: "justify" }}>{productName}</h1>
          <p
            className="text-muted  mt-4 mb-4"
            style={{
              textAlign: "justify",
              fontSize: "1.2rem",
              fontWeight: "450",
            }}
          >
            {productDescription}
          </p>
          <div style={{ textAlign: "justify" }} className="mt-2 ">
            <a href="" style={{ textDecoration: "none"}}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-2 d-none d-lg-block"></div>
        <div className="col-lg col-12 mt-5">
          <img src={imageURL} width="100%" height="100%" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
