import React from "react";
import Classes from '../../styles/login.module.css';
import FormClasses from '../../styles/form.module.css';
import BtnClasses from '../../styles/button.module.css'
export default function Login() {
  return (
    <>
      <form className={`${Classes.login} form`} action="#">
        <div className={FormClasses.textInput}>
          <input type="text" placeholder="Enter email" />
          <span className="material-icons-outlined"> alternate_email </span>
        </div>

        <div className={FormClasses.textInput}>
          <input type="password" placeholder="Enter password" />
          <span className="material-icons-outlined"> lock </span>
        </div>

        <button className={BtnClasses.button}>
          <span>Submit now</span>
        </button>

        <div className="info">
          Don't have an account? <a href="signup.html">Signup</a> instead.
        </div>
      </form>
    </>
  );
}
