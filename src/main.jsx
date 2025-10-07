import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./component/App";
import "./styles/Common.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="quiz-application">
    <App />
  </BrowserRouter>
);
