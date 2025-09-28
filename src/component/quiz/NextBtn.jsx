import Btn from "../../styles/Button.module.css";
export default function NextBtn({ nextClass }) {
  const myClass = `${Btn.button} ${nextClass}`;
  return (
    <a href="result.html">
      <button className={myClass}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </button>
    </a>
  );
}
