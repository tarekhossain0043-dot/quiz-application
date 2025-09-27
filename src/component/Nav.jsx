import img from "../assets/images/logo-bg.png";
import Classes from "../styles/Nav.module.css";
export default function Nav() {
  return (
    <nav className={Classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={Classes.brand}>
            <img src={img} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <div className={Classes.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
      </div>
    </nav>
  );
}
