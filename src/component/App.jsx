import Home from "../pages/Home";
import "../styles/Common.css";
import Layout from "./Layout";
export default function App() {
  return (
    <div>
      <Layout>
        {/* //children */}
        <Home />
      </Layout>
    </div>
  );
}
