import colors from './styles/_colors.scss'

export default function ColorPicker(props) {
  const pickColor = () => {
    props.setState((prev) => ({...prev, color: props.color}))
  }

  const colorString = `${props.color}dark`


  const CSS = {
    backgroundColor: colors[colorString]
  }


  return(<button className='color-picker' onClick={() => pickColor()} style={CSS}></button>)
}