import img from "../assets/images/signup.svg";
import Classes from "../styles/Illustration.module.css";
export default function Illustration({ text, ...rest }) {
  return (
    <div className={Classes.illustration}>
      <img src={img} alt={text} {...rest} />
    </div>
  );
}
