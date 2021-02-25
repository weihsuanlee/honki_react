// import style
import '../styles/selected-solar-term-info.scss'

function SelectedSolarTermInfo(props) {
  const { solarTermDesc } = props

  return (
    <>
      <div className="hans-st-info">{solarTermDesc}</div>
    </>
  )
}

export default SelectedSolarTermInfo
