import React from "react";
import Classes from "../styles/navbar.module.css";
import AccountClas from "../styles/account.module.css";
import Logo from "../assets/images/logo-bg.png";

export default function Navbar() {
  return (
    <div>
      <nav className={Classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={Classes.brand}>
              <img src={Logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </a>
          </li>
        </ul>
        <div className={AccountClas.account}>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <a href="signup.html">Signup</a>
          {/* <!-- <span class="material-icons-outlined" title="Logout"> logout </span> --> */}
        </div>
      </nav>
    </div>
  );
}
