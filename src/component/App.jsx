import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import SignUp from "../pages/SignUp";
import Layout from "./Layout";
export default function App() {
  return (
    <div>
      <Layout>
        {/* //children */}
        <Home />
        <SignUp />
        <Login text="Login to your account" />
        <Quiz />
        <Result />
      </Layout>
    </div>
  );
}
