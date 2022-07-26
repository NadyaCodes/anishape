export default function Shape(props) {
  const {shape, color, theme, animation} = props
  let xmlString = `<div>${shape}</div>`;
  let doc = new DOMParser().parseFromString(xmlString, "text/xml");

  let themeString = theme + '-theme'

  const animationArray = []
  Object.entries(animation).forEach(([key, value]) => {
    if (value === true) {
      animationArray.push(key)
    }
  })

  const animationString = animationArray.join(' ')
  themeString += ' hero-shape-container'

  return(
    <div className={theme ? themeString : 'hero-shape-container'}>
      <section id='heroShape' className={`giant-shape ${color ? color : ''} ${animation ? animationString : ''}`}>{doc.firstChild.innerHTML}</section>
    </div>
  )
}