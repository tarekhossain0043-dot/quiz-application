import { Link } from "react-router-dom";
import Classes from "../styles/Button.module.css";
export default function Button({ text }) {
  return (
    <Link to="/quiz" className={Classes.button}>
      <span>{text}</span>
    </Link>
  );
}
