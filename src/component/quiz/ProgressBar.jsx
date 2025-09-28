import Classes from "../../styles/quiz/Progress.module.css";
import NextBtn from "./NextBtn";
export default function ProgressBar() {
  return (
    <div className={Classes.progressBar}>
      <div className={Classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={Classes.rangeArea}>
        <div className={Classes.tooltip}>24% Cimplete!</div>
        <div className={Classes.rangeBody}>
          <div className={Classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <NextBtn nextClass="next" />
    </div>
  );
}
