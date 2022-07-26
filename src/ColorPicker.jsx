export default function ColorPicker(props) {
  const pickColor = () => {
    props.setState((prev) => ({...prev, color: props.color}))
  }

  return(<button className='color-picker' onClick={() => pickColor()}>{props.color}</button>)
}