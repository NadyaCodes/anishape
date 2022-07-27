export default function ShapePicker(props) {
  const { state, setState } = props;
  let xmlString = `<button>${props.shape}</button>`;
  let doc = new DOMParser().parseFromString(xmlString, "text/xml");

  const selectShape = () => {
    setState((prev) => ({ ...prev, shape: props.shape }));
  };

  return (
    <button className="shape" onClick={() => selectShape()}>
      {doc.firstChild.innerHTML}
    </button>
  );
}
