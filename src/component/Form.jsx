import Button from "./Button";
import Checkbox from "./Checkbox";
import TextInput from "./TxtInput";
export default function Form({ ...rest }) {
  return (
    <div>
      <form className="signup form" action="#" {...rest}>
        <TextInput type="text" placeholder="Enter name" icon="person" />
        <TextInput
          type="email"
          placeholder="Enter email"
          icon="alternate_email"
        />
        <TextInput type="password" placeholder="Enter password" icon="lock" />
        <TextInput
          type="password"
          placeholder="Confirm password "
          icon="lock_clock"
        />
        <Checkbox text="I agree to the Terms & Conditions" />
        <Button text="Submit now" />
      </form>
    </div>
  );
}
