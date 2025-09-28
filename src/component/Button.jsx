import Classes from "../styles/Button.module.css";
export default function Button({ text }) {
  return (
    <a href="#" className={Classes.button}>
      <span>{text}</span>
    </a>
  );
}
