import "./Navbar.scss";
import { BsFillPersonFill, BsEnvelopeFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MXH
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>+ 351 900 900 900</span>
          </div>
          <div className="itemContainer">
            <BsEnvelopeFill className="icon" />
            <span>mymail@mymail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburguer">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
