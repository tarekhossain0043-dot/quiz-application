import Illustration from "./Illustration";
export default function Login({ text }) {
  return (
    <div>
      <h1>{text}</h1>
      <div className="column">
        <Illustration altTxt="Login" />
      </div>
    </div>
  );
}
