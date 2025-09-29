import { Link } from "react-router-dom";
import img from "../assets/images/logo-bg.png";
import Classes from "../styles/Nav.module.css";
export default function Nav() {
  return (
    <nav className={Classes.nav}>
      <ul>
        <li>
          <Link to="/" className={Classes.brand}>
            <img src={img} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <div className={Classes.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
