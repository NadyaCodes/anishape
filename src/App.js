import logo from './logo.svg';
import './styles/App.scss';
import ColorPicker from './ColorPicker';
import ThemePicker from './ThemePicker';
import ShapePicker from './ShapePicker';
import Shape from './Shape';
import {useState, useEffect} from 'react'
import AnimationPicker from './AnimationPicker';

function App() {
  const [state, setState] = useState({
    shape: '',
    color: '',
    theme: '',
    animation: { spin: false, grow: false, bounce: false, skew: false, flip: false},
  })

  const [header, setHeader] = useState('title-container')

  const shapeArray=['&#xa7;', '&#x2600;', '&#x2605;', '&#x2602;', '&#x2603;', '&#x2601;', '&#x2618;', '&#x263B;', '&#x266C;', '&#x273F;', '&#x2739;', '&#x2745;']

  const shapeOptions = shapeArray.map((shape, index) => {
    return(<ShapePicker shape={shape} state={state} setState={setState} key={index}/>)
  })

  const colorArray = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']

  const colorOptions = colorArray.map((color, index) => {
    return(<ColorPicker color={color} state={state} setState={setState} key={index}/>)
  })

  const themeOptions = colorArray.map((color, index) => {
    return(<ThemePicker color={color} state={state} setState={setState} key={index} />)
  })

  const animationArray = Object.keys(state.animation)

  const animationOptions = animationArray.map((ann, index) => {
    return(<AnimationPicker singleAnimation={ann} key={index} state={state} setState={setState}/>)
  })

  const resetAll = () => {
    setState({
      shape: '',
      color: '',
      theme: '',
      animation: { spin: false, grow: false, bounce: false, skew: false, flip: false}
    })
  }

  useEffect(() => {
    header === 'title-container wave-animation' ? setHeader('title-container') : setHeader('title-container wave-animation')
  },[state.shape])


  const checkmark = <div>&nbsp; &#10003;</div>

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <main>
      <button className='reset' onClick={() => resetAll()}>Reset</button>
        <div className='shape-container'>Pick Your Shape: {!state.shape ? shapeOptions : checkmark}</div>
        <div className='color-container'>Pick Your Color: {!state.color ? colorOptions : checkmark}</div>
        <div className='theme-container'>Pick Your Theme: {!state.theme ? themeOptions : checkmark}</div>
        
        <div className='animation-options-container'>{state.shape && state.color && state.theme && <div><span>What do you want to do? </span>{animationOptions}</div>}</div>
        {state.shape && <Shape shape={state.shape} color={state.color} theme={state.theme} animation={state.animation}/>}
        
      </main>
    </div>
  );
}

export default App;
