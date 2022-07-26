import logo from './logo.svg';
import './styles/App.scss';
import ColorPicker from './ColorPicker';
import ThemePicker from './ThemePicker';
import ShapePicker from './ShapePicker';
import Shape from './Shape';
import {useState} from 'react'
import AnimationPicker from './AnimationPicker';

function App() {
  const [state, setState] = useState({
    shape: '',
    color: '',
    theme: '',
    animation: { spin: false, grow: false, bounce: false, skew: false},
  })

  const shapeArray=['&#xa7;', '&#x2600;', '&#x2605;', '&#x2602;', '&#x2603;', '&#x2601;', '&#x2618;', '&#x263B;', '&#x266C;', '&#x273F;', '&#x2739;', '&#x2745;']

  const shapeOptions = shapeArray.map((shape, index) => {
    return(<ShapePicker shape={shape} state={state} setState={setState} key={index}/>)
  })

  const colorArray = ['yellow', 'green', 'blue', 'purple', 'red', 'orange']

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
      animation: { spin: false, grow: false, bounce: false, skew: false}
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>aniShape</h1>
      </header>
      <main>
      <button className='reset' onClick={() => resetAll()}>Reset</button>
        <div className='shape-container'>Shape: {!state.shape ? shapeOptions : '✅'}</div>
        <div className='color-container'>Color: {!state.color ? colorOptions : '✅'}</div>
        <div className='theme-container'>Theme: {!state.theme ? themeOptions : '✅'}</div>
        
        <div className='animation-options-container'>{state.shape && state.color && state.theme && animationOptions}</div>
        {state.shape && <Shape shape={state.shape} color={state.color} theme={state.theme} animation={state.animation}/>}
        
      </main>
    </div>
  );
}

export default App;
