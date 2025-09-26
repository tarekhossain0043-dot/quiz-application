import React from 'react'
import Classes from '../styles/illastration.module.css';
import img from '../assets/images/login.svg'
export default function Illustration() {
  return (
    <div className={Classes.illustration}>
        <img src={img} alt="Login" />
    </div>
  )
}
