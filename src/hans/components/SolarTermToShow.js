// import style
import '../styles/solar-term-to-show.scss'

function SolarTermToShow(props) {
  const { solarTermToShow } = props

  return (
    <>
      <span className="white-bg">{solarTermToShow}</span>
    </>
  )
}

export default SolarTermToShow
