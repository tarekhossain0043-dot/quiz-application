import { Link } from "react-router-dom";
import Video from "../component/Video";
import Videos from "../component/Videos";
export default function Home() {
  const videoProps = {
    altTxt: "React Learning Video",
    text: "#23 React Hooks Bangla - React useReducer hook Bangla",
    text2: "10 Questions",
    text3: "Score : Not taken yet",
  };
  return (
    <div>
      <Videos>
        <Link to="/quiz">
          <Video videoProps={videoProps} />
        </Link>
        <Link to="/quiz">
          <Video videoProps={videoProps} />
        </Link>
        <Link to="/quiz">
          <Video videoProps={videoProps} />
        </Link>
        <Link to="/quiz">
          <Video videoProps={videoProps} />
        </Link>
        <Link to="/quiz">
          <Video videoProps={videoProps} />
        </Link>
        <Link to="/quiz">
          <Video videoProps={videoProps} />
        </Link>
        <Link to="/quiz">
          <Video videoProps={videoProps} />
        </Link>
        <Link to="/quiz">
          <Video videoProps={videoProps} />
        </Link>
        <Link to="/quiz">
          <Video videoProps={videoProps} />
        </Link>
        <Link to="/quiz">
          <Video videoProps={videoProps} />
        </Link>
      </Videos>
    </div>
  );
}
