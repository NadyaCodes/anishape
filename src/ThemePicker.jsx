import colors from "./styles/_colors.scss";

export default function ThemePicker(props) {
  const pickTheme = () => {
    props.setState((prev) => ({ ...prev, theme: props.color }));
  };

  const colorString = `${props.color}light`;

  const CSS = {
    backgroundColor: colors[colorString],
  };

  return (
    <button
      className="color-picker"
      onClick={() => pickTheme()}
      style={CSS}
    ></button>
  );
}
