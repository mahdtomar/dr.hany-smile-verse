import { useRecoilState } from "recoil";
import { end } from "./end-atom";
import thanks_img from "../assets/imgs/thanks.png";
function EndLive() {
  const [instructions] = useRecoilState(end);
  const handleAccord = (e) => {
    e.currentTarget.nextElementSibling.classList.toggle("active-accord");
  };
  return (
    <div
      className="d-flex container-faq end-live"
      style={{ flexDirection: "column", margin: "20px", textAlign: "center" }}
    >
      <h1>Here are a few important reminders for your Live Advisory:</h1>
      <div className="parent-accord" style={{ width: "100%" }}>
        {instructions.map((e) => (
          <div key={e.id}>
            <div
              key={e.id}
              className="accordion d-flex justify-between"
              onClick={handleAccord}
            >
              <p key={e.id} className="accordion-heading">
                {e.title}
              </p>
              <button key={e.id}>+</button>
            </div>
            <div
              key={e.id}
              className={`panel ${e.id === 1 ? "active-accord" : ""}`}
            >
              {e.question}
            </div>
          </div>
        ))}
      </div>
      <div className="thank-comp d-flex">
        <img src={thanks_img} alt="thanks" />
        <p>
          Thank you for choosing our dentist clinic for your dental care needs.
          We look forward to serving you and helping you achieve optimal oral
          health! If you have any questions or concerns, please don't hesitate
          to reach out to our friendly staff.
        </p>
      </div>
    </div>
  );
}
export default EndLive;
