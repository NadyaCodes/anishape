import Shape from "./Shape";

export default function PreShape(props) {
  return (
    <div className="pre-shape">
      {props.shape ? (
        <div className="shape-preview">
          <Shape
            shape={props.shape}
            color={props.color}
            theme={props.theme}
            animation={props.animation}
          />
        </div>
      ) : (
        <div className="question">?</div>
      )}
    </div>
  );
}
