import img from "../assets/images/3.jpg";
import Classes from "../styles/Video.module.css";
export default function Video(props) {
  const { altTxt, text, text2, text3 } = props.videoProps;
  return (
    <>
      <a href="quiz.html">
        <div className={Classes.video}>
          <img src={img} alt={altTxt} />
          <p>{text}</p>
          <div className={Classes.qmeta}>
            <p>{text2}</p>
            <p>{text3}</p>
          </div>
        </div>
      </a>
    </>
  );
}
