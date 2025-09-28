import Classes from "../styles/TxtInput.module.css";
export default function TxtInput({ icon, ...rest }) {
  return (
    <div className={Classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined">{icon}</span>
    </div>
  );
}
