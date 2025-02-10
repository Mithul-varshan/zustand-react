import useStore from "../store/Store";
import { useNavigate } from "react-router-dom";

function Login() {
  const { username, handleChangeUsername, toggleLoggedIn} =
    useStore();
  const navigate = useNavigate();

  function Submit() {
    if (username == "Mithul") {
      navigate("/");
      toggleLoggedIn();
    }
  }

  return (
    <div className="tag">
      <h1>User Login</h1>
      <h3>Username</h3>
      <input
        placeholder="Enter the user name"
        onChange={handleChangeUsername}
      ></input>
      <button onClick={Submit}>Login</button>
    </div>
  );
}
export default Login;
