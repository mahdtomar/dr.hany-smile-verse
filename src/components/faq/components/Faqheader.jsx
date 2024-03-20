import "./faq.css";
import header_faq from "./assets/imgs/header-faq.svg";
import FAQs from "./assets/imgs/FAQs.gif"
function Faqheader() {
  return (
    <div className="faq-header container-faq d-flex justify-between">
      <div className="content">
        <p>the FAQS</p>
        <h1>Help Center</h1>
        <span>Every you need to know About us.</span>
      </div>
      {/* <img src={header_faq} alt="header" /> */}
      <img src={FAQs} alt="faq" />
    </div>
  );
}
export default Faqheader;
