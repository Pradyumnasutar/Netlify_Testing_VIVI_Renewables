import React from "react"; // Import React
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "animate.css"; // Import animate.css for animations (optional)
import "font-awesome/css/font-awesome.min.css"; // Import FontAwesome for icons
//import howithelpdig from "../assets/images/how-it-helps-diagram.jpg";
import '../assets/CSS/OpenPowerAccess.css';

// const OpenPowerAccessService = () => {
function OpenPowerAccessService (){
  return (
    <div className="container">
      {/* Introduction Area */}
      <div
        className="tm-section services-area tm-padding-section bg-white wow fadeInUp"
        style={{ paddingBottom: "0px", visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tm-section-title text-center">
                <h2 style={{ fontWeight: 100 }}>WHY/WHO MIGHT NEED IT?</h2>
                <hr />
                <p>
                  If you are a heavy user of power, then this service will make your pocket thank you. Open Access enables heavy users to buy cheap power from the open market.
                  The concept is to allow customers to choose from several competitive power companies, rather than being forced to buy power from the local utility monopoly.
                  It helps industrial and commercial consumers by ensuring a regular electricity supply at competitive rates, enhances the business of power markets, and
                  helps reduce costs. Additionally, it helps consumers meet their Renewable Purchase Obligations (RPOs).
                </p>
                <p>
                  A consumer with a bulk load can benefit from cheap and green solar power by either purchasing through rooftop solar installation or
                  buying from an offsite solar farm/Wind farm under open access. While open access eliminates limitations of rooftop solar like scalability and high
                  capital expenditure, it may be exposed to unpredictable grid risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT HELPS Area */}
      <div className="tm-section funfact-area tm-padding-section open-power-bg-image" data-white-overlay="1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tm-section-title text-center" style={{ color: "#fff" }}>
                <h2 style={{ fontWeight: 500, color: "#fff" }}>HOW IT HELPS</h2>
                
                <p >
                  Open Access will ease the power shortage since several power producers like Solar & Wind energy companies can now transmit power from their solar or wind
                  parks to different load centers. Open Access rights in India are governed by the Electricity Act 2003, which has laid down regulations for competition in
                  the power market. Based on the location of the purchasing and selling entities, Open Access can be classified as follows:
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-end">
              <h3 style={{ background: "#ffff", color: "#4679c7", display: "inline-block", padding: "2px 10px", borderRadius: "10px" }}>
                INTER-STATE OPEN ACCESS
              </h3>
              <p >
                In this, the purchasing and selling entities belong to different states and they must follow Central Electricity Regulatory Commission (CERC) regulations.
                The purchase rights under inter-state open access can be:
                {/* <ul>
                  <li>Short Term: Less than a month</li>
                  <li>Medium Term: 3 months to 3 years</li>
                  <li>Long Term: 12 to 25 years</li>
                </ul> */}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-start">
              <h3 style={{ background: "#ffff", color: "#4679c7", display: "inline-block", padding: "2px 10px", borderRadius: "10px" }}>
                INTRA-STATE OPEN ACCESS
              </h3>
              <p >
                Here, the purchasing and selling entities belong to the same state and must follow State Electricity Regulatory Commission (SERC) regulations.
                It can be classified as:
                {/* <ul>
                  <li>Short Term</li>
                  <li>Medium Term</li>
                  <li>Long Term (Duration varies by state regulations)</li>
                </ul> */}
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-lg-12">
              <div className="" id="custom-margin">
              
                {/* <img
                  className="wow fadeInLeft"
                  src={howithelpdig}
                  alt="How it helps diagram"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                /> */}
              </div>
            </div>
            <div className="col-lg-12">
              <p style={{ color: "#ffffff" }}>
                The buyer and seller of electricity can opt for either collective or bilateral transactions. In collective transactions, electricity trading
                is facilitated through exchanges with a small margin fixed towards exchange members. In bilateral transactions, a Power Purchase
                Agreement is signed between the seller and consumer to buy power at an agreed tariff for a predetermined period.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scope Of Services Section */}
<div
  className="tm-section services-area tm-padding-section bg-white wow fadeInUp"
  style={{ paddingBottom: "0px", visibility: "visible", animationName: "fadeInUp" }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12 col-md-12 col-12">
        <div className="tm-section-title text-center">
          <h2 style={{ fontWeight: 100, color: "#5cb85c" }}>SCOPE OF SERVICES</h2>
          <hr style={{ width: "60px", border: "2px solid #5cb85c", margin: "auto" }} />
        </div>
      </div>
    </div>
  </div>
</div>

{/* Scope of Services Content */}
<div className="tm-section about-us-area tm-padding-section" style={{ paddingTop: "0px", paddingBottom: "0px" }}>
  <div className="container">
    <div className="row" style={{ width: "80%", margin: "0 auto" }}>
      {/* Left Column */}
      <div className="col-lg-6 col-md-6 col-sm-12">
        <ul className="list-unstyled">
          <li>✅ We identify the best buyers/sellers to sell/purchase solar or wind power under a third-party or group captive mechanism.</li>
          <li>✅ Loading the profile analysis of identified buyers and suggesting the required quantum of power as per DOA regulation.</li>
          <li>✅ Preparing the cost-benefit analysis sheet for both buyers and sellers to understand the actual tariff.</li>
          <li>✅ Preparation and submission of power sale proposals and finalization of power sales to buyers in consent with sellers, including bilateral agreements.</li>
        </ul>
      </div>

      {/* Right Column */}
      <div className="col-lg-6 col-md-6 col-sm-12">
        <ul className="list-unstyled">
          <li>✅ Licensing for obtaining approval at all nodal agencies for the sale of power under Open Access.</li>
          <li>✅ Coordination with MSEDCL H.O, Circle Office, for Open Access NOCs and related work.</li>
          <li>✅ Power sale billing, collection, and depositing at owners/sellers' accounts.</li>
          <li>✅ Coordination with consumers for compliance with ABT meters and assistance in obtaining Open Access eligibility.</li>
        </ul>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}
export default OpenPowerAccessService;
