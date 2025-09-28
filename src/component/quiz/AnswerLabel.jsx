import Classes from "../../styles/quiz/Answer.module.css";
export default function AnswerLabel({ text, text2, extraClass, ...rest }) {
  const finalClasses = `${Classes.answer} ${extraClass}`;
  return (
    <label className={finalClasses} for={text}>
      <input {...rest} />
      {text2}
    </label>
  );
}
