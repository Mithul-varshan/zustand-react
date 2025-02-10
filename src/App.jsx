import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import "./App.css"
function App() {
  return <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/NavBar" element={<NavBar/>}></Route>
    </Routes>
  </>;
}

export default App;
