// import style
import '../styles/selected-solar-term-info.scss'

function SelectedSolarTermInfo(props) {
  const { solarTermDesc, solarTermToShow, redCenterText } = props

  return (
    <>
      <div className={'red-center-text ' + redCenterText}>
        {solarTermToShow}
      </div>
      <div className="hans-st-info">{solarTermDesc}</div>
    </>
  )
}

export default SelectedSolarTermInfo
