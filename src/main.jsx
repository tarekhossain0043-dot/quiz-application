import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./component/App";
import "./styles/Common.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
