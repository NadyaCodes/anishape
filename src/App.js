import "./styles/App.scss";
import Header from "./Header";
import PreShape from "./PreShape";
import Pickers from "./Pickers";
import Animation from "./Animation";
import { useState, useEffect } from "react";

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

  return (
    <div className="App">
      <main>
        {!state.shape | !state.color | !state.theme ? (
          <>
            <Header header={header} />
            <PreShape
              shape={state.shape}
              color={state.color}
              theme={state.theme}
              animation={state.animation}
            />
            <Pickers state={state} setState={setState} />
          </>
        ) : (
          <></>
        )}
        <button className="reset" onClick={() => resetAll()}>
          Reset
        </button>
        <Animation state={state} setState={setState} />
      </main>
    </div>
  );
}

export default App;
