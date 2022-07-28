import Shape from "./Shape";
import AnimationPicker from "./AnimationPicker";

export default function Animation(props) {
  const { state, setState } = props;

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

  return (
    <div>
      {state.shape && state.color && state.theme && (
        <div>
          <div className="animation-options-container">
            <div>What do you want to do? </div>
            <div>{animationOptions}</div>
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
  );
}
