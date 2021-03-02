// import { useState } from 'react'

// import style
import '../styles/solar-term-plate.scss'
import '../styles/old-seasons.scss'

function SolarTermPlate(props) {
  const {
    setFirstCardSid,
    setSolarTermClicked,
    solarPlateSize,
    redCenterSize,
    redCenterImg,
  } = props

  // 取得目前的旋轉角度
  // 參考： https://stackoverflow.com/questions/3336101/css3-animation-on-transform-rotate-way-to-fetch-current-deg-of-the-rotating-el
  // Parameter element should be a DOM Element object.
  // Returns the rotation of the element in degrees.
  /*
  function getRotationDegrees(element) {
    // get the computed style object for the element
    let style = window.getComputedStyle(element)
    // this string will be in the form 'matrix(a, b, c, d, tx, ty)'
    let transformString =
      style['-webkit-transform'] ||
      style['-moz-transform'] ||
      style['transform']
    if (!transformString || transformString === 'none') return 0
    let splits = transformString.split(',')
    // parse the string to get a and b
    let parenLoc = splits[0].indexOf('(')
    let a = parseFloat(splits[0].substr(parenLoc + 1))
    let b = parseFloat(splits[1])
    // doing atan2 on b, a will give you the angle in radians
    let rad = Math.atan2(b, a)
    let deg = (180 * rad) / Math.PI
    // instead of having values from -180 to 180, get 0 to 360
    if (deg < 0) deg += 360
    return deg
  }
  */

  return (
    <>
      <div className="row justify-content-center fadein-on-start">
        <ul className={solarPlateSize} id="solar-plate-body">
          {/* 轉盤片 */}

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
              // style={{
              //   backgroundPosition: 'center',
              //   backgroundSize: 'cover',
              //   backgroundRepeat: 'no-repeat',
              // }}
            >
              <img src={redCenterImg[0]} alt="" className={redCenterImg[1]} />
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SolarTermPlate
