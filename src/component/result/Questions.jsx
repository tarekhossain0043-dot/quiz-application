import Classes from "../../styles/result/Question.module.css";
import Qtitle from "./Qtitle";
import ResAnswer from "./ResAnswer";
export default function Questions() {
  return (
    <>
      <div className={Classes.question}>
        <Qtitle />
        <ResAnswer />
      </div>
    </>
  );
}
