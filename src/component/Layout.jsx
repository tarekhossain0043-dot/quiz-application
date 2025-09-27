import Classes from "../styles/Layout.module.css";
import Nav from "./Nav";
export default function Layout({ Children }) {
  return (
    <div>
      <Nav />
      <main className={Classes.main}>
        <div className={Classes.container}>{Children}</div>
      </main>
    </div>
  );
}
