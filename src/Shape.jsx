export default function Shape(props) {
  const {shape, color, theme, animation} = props
  let xmlString = `<div>${shape}</div>`;
  let doc = new DOMParser().parseFromString(xmlString, "text/xml");

  let themeString = theme + '-theme'

  themeString += ' hero-shape-container'

  return(
    <div className={theme ? themeString : 'hero-shape-container'}>
      <div className={animation.spin && 'spin'}>
        <div className={animation.grow && 'grow'}>
          <div className={animation.bounce && 'bounce'}>
            <section id='heroShape' className={`giant-shape ${color ? color : ''}`}>{doc.firstChild.innerHTML}</section>
          </div>
        </div>
      </div>
    </div>
  )
}