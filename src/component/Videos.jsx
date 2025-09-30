import Classes from "../styles/Videos.module.css";
export default function Videos({ children }) {
  return (
    <>
      <div className={Classes.videos}>{children}</div>
    </>
  );
}
