import { useState } from "react";

export default function AnimationPicker(props) {
  const { singleAnimation, state, setState } = props;
  const [selected, setSelected] = useState(false);

  const toggleAnimation = () => {
    state.animation[singleAnimation]
      ? setState((prev) => ({
          ...prev,
          animation: { ...prev.animation, [singleAnimation]: false },
        }))
      : setState((prev) => ({
          ...prev,
          animation: { ...prev.animation, [singleAnimation]: true },
        }));

    selected === true ? setSelected(false) : setSelected(true);
  };

  return (
    <button
      onClick={() => toggleAnimation()}
      className={selected ? "selected animation-button" : "animation-button"}
    >
      {props.singleAnimation}
    </button>
  );
}
