import logo from "./logo.svg";
import "./styles/App.scss";
import ColorPicker from "./ColorPicker";
import ThemePicker from "./ThemePicker";
import ShapePicker from "./ShapePicker";
import Shape from "./Shape";
import { useState, useEffect } from "react";
import AnimationPicker from "./AnimationPicker";

function App() {
  const [state, setState] = useState({
    shape: "",
    color: "",
    theme: "",
    animation: {
      spin: false,
      grow: false,
      bounce: false,
      skew: false,
      flip: false,
    },
  });

  const [header, setHeader] = useState("title-container");

  const shapeArray = [
    "&#xa7;",
    "&#x2600;",
    "&#x2605;",
    "&#x2602;",
    "&#x2603;",
    "&#x2601;",
    "&#x2618;",
    "&#x263B;",
    "&#x266C;",
    "&#x273F;",
    "&#x2739;",
    "&#x2745;",
  ];

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

  const colorArray = [
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
  ];

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

  const animationArray = Object.keys(state.animation);

  const animationOptions = animationArray.map((ann, index) => {
    return (
      <AnimationPicker
        singleAnimation={ann}
        key={index}
        state={state}
        setState={setState}
      />
    );
  });

  const resetAll = () => {
    setState({
      shape: "",
      color: "",
      theme: "",
      animation: {
        spin: false,
        grow: false,
        bounce: false,
        skew: false,
        flip: false,
      },
    });
    setHeader("title-container");
  };

  useEffect(() => {
    header === "title-container wave-animation"
      ? setHeader("title-container")
      : setHeader("title-container wave-animation");
  }, [state.shape]);

  const checkmark = <div>&nbsp; &#10003;</div>;

  return (
    <div className="App">

      <main>

        {!state.shape | !state.color | !state.theme ? 
        <>
              <div className="App-header">
        <h1 className={header}>
          <span>a</span>
          <span>n</span>
          <span>i</span>
          <span>S</span>
          <span>h</span>
          <span>a</span>
          <span>p</span>
          <span>e</span>
        </h1>
      </div>
      <div className="pre-shape">
      {state.shape ? (<div className="shape-preview">
                      <Shape
                        shape={state.shape}
                        color={state.color}
                        theme={state.theme}
                        animation={state.animation}
                      />
                      </div>
                    ) : <div className="question">?</div>} 
      </div>
        <div className="shape-container">
          <div>Pick Your Shape: &nbsp;</div> <div>{!state.shape ? shapeOptions : checkmark}</div>
        </div>
        <div className="color-container">
          <div>Pick Your Color: &nbsp; </div><div>{!state.color ? colorOptions : checkmark}</div>
        </div>
        <div className="theme-container">
          <div>Pick Your Theme: &nbsp;</div><div> {!state.theme ? themeOptions : checkmark}</div>
        </div>
        </> : <></>
        }

        <div>
        <button className="reset" onClick={() => resetAll()}>
          Reset
        </button>
          {state.shape && state.color && state.theme && (
            <div>
            <div  className="animation-options-container">
              <div>What do you want to do? </div>
              <div>
              {animationOptions}
              </div>
            </div>
            <div>
                    {state.shape && (
                      <Shape
                        shape={state.shape}
                        color={state.color}
                        theme={state.theme}
                        animation={state.animation}
                      />
                    )}
                    </div>
                    </div>
          )}
        </div>
        {/* {state.shape && (
          <Shape
            shape={state.shape}
            color={state.color}
            theme={state.theme}
            animation={state.animation}
          />
        )} */}
      </main>
    </div>
  );
}

export default App;
