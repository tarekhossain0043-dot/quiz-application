import img from "../../assets/images/3.jpg";
import Classes from "../../styles/quiz/MiniPlayer.module.css";
export default function MiniPlayer({ propsClass }) {
  return (
    <div className={`${Classes.miniPlayer} ${propsClass}`}>
      <span className="material-icons-outlined open"> play_circle_filled </span>
      <span className="material-icons-outlined close"> close </span>
      <img src={img} alt="myImg" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
