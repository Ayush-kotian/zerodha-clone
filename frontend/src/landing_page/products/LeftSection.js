import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-lg col-12 mt-4">
          <img src={imageURL} width="100%" className="img-fluid" />
        </div>
        <div className="col-lg col-12 mt-5 left-section-copy">
          <h1 style={{ textAlign: "justify" }}>{productName}</h1>
          <p
            className="text-muted mt-4 mb-4 "
            style={{
              textAlign: "justify",
              fontSize: "1.1rem",
              fontWeight: "450",
            }}
          >
            {productDescription}
          </p>

          <div style={{ textAlign: "justify" }} className="mt-3 mb-4">
            <a href="" style={{ textDecoration: "none"}}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none",marginLeft: "2.8rem" }}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-1" style={{ textAlign: "justify" }}>
            <a
              href={googlePlay}
              style={{ textDecoration: "none", marginRight: "1rem" }}
              target="_blank"
            >
              <img src="media/images/googlePlayBadge.svg" className="img-fluid" />
            </a>
            <a
              href={appStore}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <img src="media/images/appstoreBadge.svg" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
