export default function ThemePicker(props) {
  const pickTheme = () => {
    props.setState((prev) => ({...prev, theme: props.color}))
  }



  return(<button className='theme-picker' onClick={() => pickTheme()}>{props.color}</button>)
}