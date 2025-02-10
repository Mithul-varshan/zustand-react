import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { Button } from "./components/button.jsx";
import  App  from "./App.jsx";
import "./App.css"
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App></App>
    </StrictMode>
  </BrowserRouter>
);
