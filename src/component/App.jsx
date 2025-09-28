import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Layout from "./Layout";
import Login from "./Login";
export default function App() {
  return (
    <div>
      <Layout>
        {/* //children */}
        <Home />
        <SignUp />
        <Login text="Login to your account" />
      </Layout>
    </div>
  );
}
