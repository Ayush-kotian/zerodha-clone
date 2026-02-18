import React from "react";
import "../index.css";
function Footer() {
  return (
    <footer className="border-top  mt-5" style={{ background: "#F5F5F5" }}>
      <div className="container-fluid mt-5">
        <div className="row text-center mt-5">
          <div className="col">
            <img src="media\images\logo.svg" style={{ width: "30%" }} />
            <p className="mt-4" style={{ fontSize: "1.2rem" }}>
              &copy; 2010-2024,Not Zerodha Broking Ltd. <br />
              All rights are reserved
              {/* <div className='icons-demo'> */}
              <br />
              <span className="icons-demo">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-telegram"></i>
              </span>
            </p>
          </div>
          <div className="foot-a col">
            <p href="">Company</p>
            <a href="">About</a>
            <br />
            <br />
            <a href="">Products</a>
            <br />
            <br />
            <a href="">Pricing</a>
            <br />
            <br />
            <a href="">Referal programme</a>
            <br />
            <br />
            <a href="">Zerodha.tech</a>
            <br />
            <br />
            <a href="">Press & media</a>
            <br />
            <br />
            <a href="">Zerodha cares(CSR)</a>
          </div>
          <div className="foot-a col">
            <p>Support</p>
            <a href="">Contact</a>
            <br />
            <br />
            <a href="">Support portal</a>
            <br />
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <br />
            <a href="">List of charges</a>
            <br />
            <br />
            <a href="">Downloads & resources</a>
            <br />
            <br />
          </div>
          <div className="foot-a col">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <br />
            <a href="">Fund transfer</a>
            <br />
            <br />
            <a href="">60 day challenge</a>
            <br />
            <br />
          </div>
        </div>
        <div
          className="row footer-end text-muted mt-5"
          style={{
            paddingLeft: "10rem",
            paddingRight: "10rem",
            fontSize: "1rem",
            lineHeight: "2rem",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p className="mt-2">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances Investments in
            securities market are subject to market risks; read all the related
            documents carefully before investing.
          </p>

          <p className="mt-2 mb-5">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
