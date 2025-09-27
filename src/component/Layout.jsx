import Classes from "../styles/Layout.module.css";
import Nav from "./Nav";
export default function Layout() {
  return (
    <div>
      <Nav />
      <main className={Classes.main}>
        <div class={Classes.container}></div>
      </main>
    </div>
  );
}
