import Answer from "../component/quiz/Answer";
export default function Quiz() {
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answer>{/* quiz,progress,miniPlayer componet are added here*/}</Answer>
    </div>
  );
}
