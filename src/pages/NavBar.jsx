import Img from "D:/react-workshop/loginpage/zustand/src/assets/vite.svg";
import { useNavigate } from "react-router-dom";
import "../styles/index.css";
import useStore from "../store/Store";

export default function NavBar() {
  const navigate = useNavigate();
  const { isLoggedIn, username } = useStore();
  return (
    <div className="main-container">
      <img src={Img} />
      <div className="sub-container">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          {!isLoggedIn && <li onClick={() => navigate("/login")}>Login</li>}
          {isLoggedIn && <li>{username}</li>}
        </ul>
      </div>
      <div className="signup-btn">
        <button>SignUp</button>
      </div>
    </div>
  );
}
