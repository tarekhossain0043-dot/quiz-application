import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import SignUp from "../pages/SignUp";
import Layout from "./Layout";

export default function App() {
  return (
    <div>
      {/* <Router> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login text="Login to your account" />}
          />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
        </Routes>
      </Layout>
      {/* </Router> */}
    </div>
  );
}
