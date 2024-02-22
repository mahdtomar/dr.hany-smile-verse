import man_user from "../assets/icons/man_user_logo.svg";
import woman_user from "../assets/icons/women_user_logo.svg";
function Message() {
  const handleClickMsg = (e) => {
    document
      .querySelectorAll(".table-mgs td tr")
      .forEach((e) => e.classList.remove("active"));
    e.currentTarget.classList.toggle("active");
  };
  return (
    <div className="bodydash flex-1">
      <h1 className="heading-dash" style={{ paddingLeft: "39px" }}>
        Messages
      </h1>
      <table className="table-mgs" style={{ display: "flex" }}>
        <td className="home">
          <tr className="side active" onClick={handleClickMsg}>
            <img src={man_user} alt="man" />
            <div className="head">
              <h3>Ahmed Mohamed</h3>
              <p>Hello, How mush does it cost?</p>
            </div>
          </tr>
          <tr className="side" onClick={handleClickMsg}>
            <img src={woman_user} alt="woman" />
            <div className="head">
              <h3>Samar Mohmoud</h3>
              <p>Hello, How mush does it cost?</p>
            </div>
          </tr>
          <tr className="side" onClick={handleClickMsg}>
            <img src={man_user} alt="man" />
            <div className="head"></div>
            <h3>Ahmed Mohamed</h3>
            <p>Hello, How mush does it cost?</p>
          </tr>
          <tr className="side" onClick={handleClickMsg}>
            <img src={woman_user} alt="woman" />
            <div className="head"></div>
            <h3>Samar Mohmoud</h3>
            <p>Hello, How mush does it cost?</p>
          </tr>
          <tr className="side" onClick={handleClickMsg}>
            <img src={man_user} alt="man" />
            <div className="head"></div>
            <h3>Ahmed Mohamed</h3>
            <p>Hello, How mush does it cost?</p>
          </tr>
        </td>
        <td className="msg-body">
          <tr>
            <td>
              <tr className="home-inbox">
                <h1>Name</h1>
                <hr />
              </tr>
            </td>
          </tr>
        </td>
      </table>
    </div>
  );
}
export default Message;
