import FormLogin from "../component/FormLogin";
import Illustration from "../component/Illustrationlogin";
export default function Login({ text }) {
  return (
    <div>
      <h1>{text}</h1>
      <div className="column">
        <Illustration altTxt="Login" />
        <FormLogin />
      </div>
    </div>
  );
}
