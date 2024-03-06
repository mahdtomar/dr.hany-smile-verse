import header_live from "../assets/imgs/header-live.png";
import "../advisory.css";
import { Link } from "react-scroll";
function HeaderLive() {
  return (
    <div className="container-faq header-live d-flex justify-between">
      <div className="content">
        <h1>Live Advisory</h1>
        <p>
          Welcome to our dentist clinic! We prioritize your dental health and
          safety above all else.
        </p>
        <button>
          <Link
            className="btn-text"
            to="book"
            spy={true}
            smooth={true}
            offset={-45}
            duration={500}
          >
            Book Now
          </Link>
        </button>
      </div>
      <img src={header_live} alt="header" />
    </div>
  );
}
export default HeaderLive;
