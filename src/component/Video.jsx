import img from "../assets/images/3.jpg";
import Classes from "../styles/Video.module.css";
export default function Video() {
  //   const { altTxt, text, text2, text3 } = props.videoProps;
  return (
    <a href="quiz.html">
      <div className={Classes.video}>
        <img src={img} alt="single video" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={Classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
