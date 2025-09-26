import React from "react";
import VideoCss from '../styles/video.module.css';
import Img3 from '../assets/images/3.jpg'
export default function Video() {
  return (
    <div>
      <a href="quiz.html">
        <div className={VideoCss.video}>
          <img src={Img3} alt="Video" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={VideoCss.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>
    </div>
  );
}
