import Answer from "../component/quiz/Answer";
import MiniPlayer from "../component/quiz/MiniPlayer";
import ProgressBar from "../component/quiz/ProgressBar";
export default function Quiz() {
  const playerClass = "floatingBtn";
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answer />
      <ProgressBar />
      <MiniPlayer propsClass={playerClass} />
    </div>
  );
}
