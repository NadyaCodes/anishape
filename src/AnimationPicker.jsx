export default function AnimationPicker(props) {
  const {singleAnimation, state, setState} = props

  const toggleAnimation = () => {

    state.animation[singleAnimation] ? 
      setState((prev) => ({...prev, animation: {...prev.animation, [singleAnimation]: false}})) 
      : setState((prev) => ({...prev, animation: {...prev.animation, [singleAnimation]: true}}))
    
      let animationToToggle = document.getElementById("heroShape").style
      console.log("animationToToggle", animationToToggle)

  }

  return(<button onClick={() => toggleAnimation()}>{props.singleAnimation}</button>)
}