// import style
import '../styles/selected-solar-term-info.scss'

function SelectedSolarTermInfo(props) {
  const { solarTermDesc, solarTermToShow, redCenterText } = props

  return (
    <>
      <div className="hans-st-info">{solarTermDesc}</div>
    </>
  )
}

export default SelectedSolarTermInfo
