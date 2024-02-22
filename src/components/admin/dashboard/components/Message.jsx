import "./stylesdash.css";
import { useRecoilState } from "recoil";
import textState from "./user-atom";
import send_icons from "../assets/icons/send_icon.svg";
import video_call from "../assets/icons/video_call.svg";
import phone_call from "../assets/icons/phone_call.svg";
import { useState } from "react";
function Message() {
  const [msg, setMsg] = useState("");
  // console.log(
  // document.querySelector(".table-mgs td tr").classList.add("active");
  // );

  const [data] = useRecoilState(textState);

  const handleClickMsg = (e) => {
    document
      .querySelectorAll(".table-mgs td tr")
      .forEach((e) => e.classList.remove("active"));
    e.currentTarget.classList.toggle("active");
  };

  // Send Msg
  const handleSendMsg = (msg) => {
    const element = document.createElement("div");
    element.innerHTML = msg.currentTarget;
    console.log(element);
    // document.querySelector(".send-mgs").before(element);
  };

  return (
    <div className="bodydash flex-1">
      <h1 className="heading-dash" style={{ paddingLeft: "39px" }}>
        Messages
      </h1>
      <table className="table-mgs" style={{ display: "flex" }}>
        <td className="home">
          {data.map((e) => (
            <tr key={e.id} className="side " onClick={handleClickMsg}>
              <img src={e.src} alt={e.alt} />
              <div className="head">
                <h3>{e.name}</h3>
                <p>{e.description}</p>
              </div>
            </tr>
          ))}
        </td>
        <td className="msg-body flex-1">
          <tr className="home-inbox">
            <div className="inbox-head">
              <img src={data[0].src} alt={data[0].alt} />
              <h2>{data[0].name}</h2>
            </div>
            <div className="icons-mgs">
              <img src={video_call} alt="video" />
              <img src={phone_call} alt="video" />
            </div>
          </tr>
          <hr />
          <div className="send-mgs">
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setMsg(e.target.value)}
            />
            <button
              style={{ backgroundColor: "transparent" }}
              onClick={handleSendMsg(msg)}
            >
              <img src={send_icons} alt="send" />
            </button>
          </div>
        </td>
      </table>
    </div>
  );
}
export default Message;
