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
            <div className={animation.skew && 'skew'}>
              <section id='hero-shape' className={`giant-shape ${color ? color : ''}`}>{doc.firstChild.innerHTML}</section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}