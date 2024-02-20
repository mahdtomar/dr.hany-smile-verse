function Message() {
  const handleClickMsg = (e) => {
    document
      .querySelectorAll(".table-msg td tr")
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
          <tr className="active" onClick={handleClickMsg}>
            <h2>Ahmed Mohamed</h2>
            <p>Hello, How mush does it cost?</p>{" "}
          </tr>
          <tr onClick={handleClickMsg}>
            <h2>Samar Mohmoud</h2>
            <p>Hello, How mush does it cost?</p>{" "}
          </tr>
          <tr onClick={handleClickMsg}>
            Ali Fawzy
            <p>Hello, How mush does it cost?</p>{" "}
          </tr>
          <tr onClick={handleClickMsg}>
            Sara Emam
            <p>Hello, How mush does it cost?</p>{" "}
          </tr>
          <tr onClick={handleClickMsg}>
            Ali Fawzy
            <p>Hello, How mush does it cost?</p>{" "}
          </tr>
          <tr onClick={handleClickMsg}>
            Sara Emam
            <p>Hello, How mush does it cost?</p>{" "}
          </tr>
          <tr onClick={handleClickMsg}>
            Khaled Younis
            <p>Hello, How mush does it cost?</p>{" "}
          </tr>
          <tr onClick={handleClickMsg}>
            Sara Emam
            <p>Hello, How mush does it cost?</p>{" "}
          </tr>
          <tr onClick={handleClickMsg}>
            Samar Mohmoud
            <p>Hello, How mush does it cost?</p>{" "}
          </tr>
        </td>
        <td className="msg-body ">
          <tr>
            <td>
              <tr>
                <img src="" alt="" />
                <h1>user</h1>
              </tr>
              <tr style={{ height: "100%" }}></tr>
              <tr>
                <input type="type" />
              </tr>
            </td>
          </tr>
        </td>
      </table>
    </div>
  );
}
export default Message;
