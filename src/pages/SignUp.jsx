import Form from "../component/Form";
import Illustration from "../component/Illustration";
export default function SignUp() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form method="post" />
      </div>
    </div>
  );
}
