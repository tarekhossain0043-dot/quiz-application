import { Link } from "react-router-dom";
import Button from "./Button";
import TextInput from "./TxtInput";
export default function FormLogin({ ...rest }) {
  return (
    <form className="login form" action="#" {...rest}>
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
      />
      <TextInput type="password" placeholder="Enter password" icon="lock" />
      <Button text="Submit now" />
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </form>
  );
}
