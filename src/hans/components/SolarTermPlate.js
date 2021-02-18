function SolarTermPlate() {
  return (
    <>
      <div className="col">
        <div className="row justify-content-center">
          {/* <!-- 節氣圓盤 Start --> */}
          <ul className="solar-term-plate-v2 rotate">
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
              <div className="red-center">
                <div className="red-center-bg-color"></div>
              </div>
            </li>
          </ul>
          {/* <!-- 節氣圓盤 end --> */}
        </div>
        <div className="row solar-term-plate-filler"></div>
        <i className="title-pointer fas fa-caret-up fa-3x"></i>
        <br />

        <div className="row justify-content-start">
          <div className="title-bg">
            <h3 className="title">一個節氣，選一本書</h3>
          </div>
          <div className="title-bg">
            <h3 className="title">屬於你的四季</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default SolarTermPlate
