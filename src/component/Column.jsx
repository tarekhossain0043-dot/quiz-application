import React from "react";
import Classes from "../styles/column.module.css";
import Illustration from "./Illustration";
import Login from "./pages/Login";
export default function Column() {
  return (
    <>
      <h1 style={{textAlign:'center',marginBottom:'40px'}}>Login to your account</h1>
      <div className={Classes.column}>
        <Illustration />
        <Login />
      </div>
    </>
  );
}
