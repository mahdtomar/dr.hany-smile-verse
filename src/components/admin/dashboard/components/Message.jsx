import "./scss/stylesdash.css";
import { useRecoilState } from "recoil";
import textState from "./user-atom";
import send_icons from "../assets/icons/send_icon.svg";
import { useContext, useState } from "react";
import SidebarDash from "./SidebarDash";
import AuthContext from "../../../../context/AuthContext";
function Message(props) {
  const [msg, setMsg] = useState("");
  // console.log(
  // document.querySelector(".table-mgs td tr").classList.add("active");
  // );

  const [data] = useRecoilState(textState);
  // const data = useContext(AuthContext);
  console.log(data);
  // console.log(props.props);
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
    <div className="d-flex mgs-parent" style={{ gap: 0 }}>
      <SidebarDash />
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
                {/* <h2>{data.currentuser.displayName}</h2> */}
                <h2>{data[0].name}</h2>
              </div>
            </tr>
            <td className="inbox" style={{flex: "1"
    ,maxHeight: "50vh"
    ,overflowY: "scroll"}}>
              <div >
                <div className="user" >
                  <div className="msg">
                    <p >hello</p>
                  <img src={data[0].src} alt="" />

                  </div>
                </div>
                <br />
                <div className="another-user">
                <div className="msg">
                    <p >hello</p>
                  <img src={data[1].src} alt="" />

                  </div>
                  
                </div>
                <div className="user" >
                  <div className="msg">
                    <p >hello</p>
                  <img src={data[0].src} alt="" />

                  </div>
                  </div>
                  <div className="another-user">
                <div className="msg">
                    <p >hello ahmed , i wanna book live advisory can you help me in theid ddjs;jfsdjflksdjfsdjklsdfl</p>
                  <img src={data[1].src} alt="" />

                  </div>
                  
                </div>
                <div className="another-user">
                <div className="msg">
                    <p >hello ahmed , i wanna book live advisory can you help me in theid ddjs;jfsdjflksdjfsdjklsdfl</p>
                  <img src={data[1].src} alt="" />

                  </div>
                  
                </div><div className="another-user">
                <div className="msg">
                    <p >hello ahmed , i wanna book live advisory can you help me in theid ddjs;jfsdjflksdjfsdjklsdfl</p>
                  <img src={data[1].src} alt="" />

                  </div>
                  
                </div>
              </div>
            </td>
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
    </div>
  );
}
export default Message;
