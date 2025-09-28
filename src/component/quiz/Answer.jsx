import Classes from "../../styles/quiz/Answer.module.css";
import AnswerLabel from "./AnswerLabel";
export default function Answer() {
  return (
    <div className={Classes.answers}>
      <AnswerLabel
        text="option1"
        text2="A New Hope 1"
        type="checkbox"
        id="option1"
      />
      <AnswerLabel
        text="option2"
        text2="A New Hope 1"
        type="checkbox"
        id="option2"
      />
      <AnswerLabel
        text="option3"
        text2="A New Hope 1"
        type="checkbox"
        id="option3"
      />
      <AnswerLabel
        text="option4"
        text2="A New Hope 1"
        type="checkbox"
        id="option4"
        extraClass="wrong"
      />
      <AnswerLabel
        text="option5"
        text2="A New Hope 1"
        type="checkbox"
        id="option5"
      />
      <AnswerLabel
        text="option6"
        text2="A New Hope 1"
        type="checkbox"
        id="option6"
      />
      <AnswerLabel
        text="option7"
        text2="A New Hope 1"
        type="checkbox"
        id="option7"
        extraClass="correct"
      />
      <AnswerLabel
        text="option8"
        text2="A New Hope 1"
        type="checkbox"
        id="option8"
      />
      <AnswerLabel
        text="option9"
        text2="A New Hope 1"
        type="checkbox"
        id="option9"
      />
      <AnswerLabel
        text="option10"
        text2="A New Hope 1"
        type="checkbox"
        id="option10"
      />
    </div>
  );
}
