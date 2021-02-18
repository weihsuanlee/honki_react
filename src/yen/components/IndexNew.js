import '../styles/yen-index.scss'
import SvgCircle from './svg/SvgCircle'
import SvgLadybug from './svg/SvgLadybug'
import SvgTaiwan from './svg/SvgTaiwan'
import SvgNorth from './svg/SvgNorth'
import SvgMedium from './svg/SvgMedium'
import SvgSouth from './svg/SvgSouth'
import SvgEast from './svg/SvgEast'
import SvgBgCircleFull from './svg/SvgBgCircleFull'
import SvgBgCircleLine from './svg/SvgBgCircleLine'
import SvgWithDog from './svg/SvgWithDog'

function IndexNew() {
  return (
    <>
      <div className="yen-new">
        <div className="yen-title-box d-flex">
          <div className="yen-circle">
            <SvgCircle />
          </div>
          <span className="yen-title-text">最新活動</span>
        </div>

        <div className="yen-new-box d-flex">
          <div className="yen-new-card-box">
            <div className="yen-new-card">
              <div className="yen-new-card-img">
                <img
                  src="http://localhost:3000/images/yen/hot/hot-4-w.jpg"
                  alt=""
                />
              </div>
              <div className="yen-new-card-tag d-flex">
                <div className="yen-new-card-tagl">
                  <span>2021.03.05</span>
                </div>
                <div className="yen-new-card-tagr">
                  <span>讀書會</span>
                </div>
              </div>
              <div className="yen-new-card-des">
                <div className="yen-new-card-title">
                  <span>
                    【聚說說書會
                    台北場】在藏身之處，活得燦爛如初：一個不良少年走向斜槓青年的生命故事
                  </span>
                </div>
                <div className="yen-new-card-bottom">
                  <div className="yen-new-card-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>台北市</span>
                  </div>
                  <div className="yen-new-card-price">
                    <div className="yen-new-card-nt">
                      <span>NT</span>
                    </div>
                    <div className="yen-new-card-money">
                      <span>200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="yen-new-tag-box">
                <span>NEW</span>
              </div>
              <div className="yen-new-ladybug">
                <SvgLadybug />
              </div>
            </div>
            <div className="yen-new-card">
              <div className="yen-new-card-img">
                <img
                  src="http://localhost:3000/images/yen/hot/hot-4-w.jpg"
                  alt=""
                />
              </div>
              <div className="yen-new-card-tag d-flex">
                <div className="yen-new-card-tagl">
                  <span>2021.03.05</span>
                </div>
                <div className="yen-new-card-tagr">
                  <span>讀書會</span>
                </div>
              </div>
              <div className="yen-new-card-des">
                <div className="yen-new-card-title">
                  <span>
                    【聚說說書會
                    台北場】在藏身之處，活得燦爛如初：一個不良少年走向斜槓青年的生命故事
                  </span>
                </div>
                <div className="yen-new-card-bottom">
                  <div className="yen-new-card-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>台北市</span>
                  </div>
                  <div className="yen-new-card-price">
                    <div className="yen-new-card-nt">
                      <span>NT</span>
                    </div>
                    <div className="yen-new-card-money">200</div>
                  </div>
                </div>
              </div>
              <div className="yen-new-tag-box">
                <span>NEW</span>
              </div>
            </div>
          </div>
          <div className="yen-island-box">
            <div className="yen-island">
              <SvgTaiwan />
            </div>
            <div className="yen-north-area">
              <SvgNorth />
            </div>
            <div className="yen-medium-area">
              <SvgMedium />
            </div>
            <div className="yen-south-area">
              <SvgSouth />
            </div>
            <div className="yen-east-area">
              <SvgEast />
            </div>
          </div>
        </div>

        <div className="yen-new-bg">
          <div className="yen-new-bg-circle1">
            <SvgBgCircleLine />
          </div>
          <div className="yen-new-bg-circle2">
            <SvgBgCircleFull />
          </div>
          <div className="yen-new-bg-circle3">
            <SvgBgCircleFull />
          </div>
          <div className="yen-new-bg-circle4">
            <SvgBgCircleLine />
          </div>
          <div className="yen-new-bg-circle5">
            <SvgBgCircleLine />
          </div>
          <div className="yen-new-bg-circle6">
            <SvgBgCircleLine />
          </div>
          <div className="yen-new-bg-circle7">
            <SvgBgCircleFull />
          </div>
          <div className="yen-new-bg-withdog">
            <SvgWithDog />
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexNew
