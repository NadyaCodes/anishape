import ColorPicker from "./ColorPicker";
import ThemePicker from "./ThemePicker";
import ShapePicker from "./ShapePicker";
import { shapeArray, colorArray, checkmark } from "./helpers.js";

export default function Pickers(props) {
  const { state, setState } = props;

  const shapeOptions = shapeArray.map((shape, index) => {
    return (
      <ShapePicker
        shape={shape}
        state={state}
        setState={setState}
        key={index}
      />
    );
  });

  const colorOptions = colorArray.map((color, index) => {
    return (
      <ColorPicker
        color={color}
        state={state}
        setState={setState}
        key={index}
      />
    );
  });

  const themeOptions = colorArray.map((color, index) => {
    return (
      <ThemePicker
        color={color}
        state={state}
        setState={setState}
        key={index}
      />
    );
  });
  return (
    <>
      <div className="shape-container">
        <div>Pick Your Shape: &nbsp;</div>{" "}
        <div>{!state.shape ? shapeOptions : checkmark}</div>
      </div>
      <div className="color-container">
        <div>Pick Your Color: &nbsp; </div>
        <div>{!state.color ? colorOptions : checkmark}</div>
      </div>
      <div className="theme-container">
        <div>Pick Your Theme: &nbsp;</div>
        <div> {!state.theme ? themeOptions : checkmark}</div>
      </div>
    </>
  );
}
