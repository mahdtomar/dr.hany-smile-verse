// import plus_icon from "./assets/icons/plus_icon.svg";
// import minus_icon from "./assets/icons/minus_icon.svg";

import { useRecoilState } from "recoil";
import questions from "./accord-questions";

function Faqquestions() {
  const [ques] = useRecoilState(questions);
  const handleAccord = (e) => {
    e.currentTarget.nextElementSibling.classList.toggle("active-accord");
  };

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
      <div className="parent-accord">
        {ques.map((e) => (
          <div key={e.id}>
            <div
              key={e.id}
              className="accordion d-flex justify-between"
              onClick={handleAccord}
            >
              <p key={e.id} className="accordion-heading">
                {e.title_question}
              </p>
              <button key={e.id}>+</button>
            </div>
            <div
              key={e.id}
              className={`panel ${e.id === 0 ? "active-accord" : ""}`}
            >
              {e.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Faqquestions;
