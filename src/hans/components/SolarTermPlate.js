import { useState } from 'react'

// import style
import '../styles/solar-term-plate.scss'

function SolarTermPlate(props) {
  const [solarPlateSize, setSolarPlateSize] = useState(
    'solar-term-plate-v2 rotate'
  )
  const [redCenterSize, setRedCenterSize] = useState('red-center')
  const [redCenterText, setRedCenterText] = useState('')

  const { solarTermToShow } = props

  let solarTermClicked = false

  return (
    <>
      <div className="row justify-content-center fadein-on-start">
        <ul className={solarPlateSize}>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li className="slice">
            <div className="slice-contents"></div>
          </li>
          <li>
            <div
              className={redCenterSize}
              onClick={() => {
                solarTermClicked = !solarTermClicked

                setSolarPlateSize(
                  solarTermClicked
                    ? 'solar-term-plate-v2-small'
                    : 'solar-term-plate-v2'
                )
                setRedCenterSize(
                  solarTermClicked ? 'red-center-small' : 'red-center'
                )
                setRedCenterText(solarTermClicked ? solarTermToShow : '')
              }}
            >
              <div className="red-center-text">{redCenterText}</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SolarTermPlate
