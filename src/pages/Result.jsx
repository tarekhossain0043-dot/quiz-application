import img from "../assets/images/success.png";
import Analysis from "../component/result/Analysis";
import Questions from "../component/result/Questions";
import Classes from "../styles/result/Summary.module.css";
export default function Result() {
  return (
    <>
      <div className={Classes.summary}>
        <div className={Classes.point}>
          {/* <!-- progress bar will be placed here --> */}
          <p className={Classes.score}>
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className={Classes.badge}>
          <img src={img} alt="Success" />
        </div>
      </div>
      {/* analysis,question */}
      <Analysis />
      <Questions />
    </>
  );
}
