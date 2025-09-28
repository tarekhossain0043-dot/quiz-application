export default function Checkbox({ text, ...rest }) {
  return (
    <label style={{ marginBottom: "20px" }}>
      <input type="checkbox" {...rest} />
      <span style={{ paddingLeft: "5px" }}>{text}</span>
    </label>
  );
}
