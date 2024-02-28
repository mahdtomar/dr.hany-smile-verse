// import plus_icon from "./assets/icons/plus_icon.svg";
// import minus_icon from "./assets/icons/minus_icon.svg";

function Faqquestions() {
  return (
    <div className="faq-questions container-faq d-flex justify-between">
      <div className="faq-content">
        <span>Support</span>
        <h1>FAQs</h1>
        <p>
          Every thing you need to know about us. Can't find the answer you're
          looking for ? please write your questions in feedback questions .
        </p>
      </div>
      <ul>
        <li>
          <details open>
            <summary className="d-flex">
              How will we conduct IEP and 504 meetings?
            </summary>
            <div>
              <p>All meetings will be held remotely.</p>
            </div>
          </details>{" "}
        </li>
        <li></li>
      </ul>
    </div>
  );
}
export default Faqquestions;
