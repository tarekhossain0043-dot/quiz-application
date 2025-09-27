import "../styles/Common.css";
import Layout from "./Layout";
import Video from "./Video";
import Videos from "./Videos";
export default function App() {
  return (
    <div>
      <Layout>
        //children
        <Videos>
          <Video />
        </Videos>
      </Layout>
    </div>
  );
}
