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
        <Video videoProps={videoProps} />
        <Video videoProps={videoProps} />
        <Video videoProps={videoProps} />
        <Video videoProps={videoProps} />
        <Video videoProps={videoProps} />
        <Video videoProps={videoProps} />
        <Video videoProps={videoProps} />
        <Video videoProps={videoProps} />
      </Videos>
    </div>
  );
}
