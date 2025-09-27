import Classes from "../styles/Videos.module.css";
import Video from "../component/Video";
export default function Videos({ children }) {
  return <div className={Classes.videos}>{children}</div>;
}
