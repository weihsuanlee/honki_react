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
      <div class="yen-new">
        <div class="yen-title-box d-flex">
          <div class="yen-circle">
            <SvgCircle />
          </div>
          <span class="yen-title-text">最新活動</span>
        </div>

        <div class="yen-new-box d-flex">
          <div class="yen-new-card-box">
            <div class="yen-new-card">
              <div class="yen-new-card-img">
                <img
                  src="http://localhost:3000/images/yen/hot/hot-4-w.jpg"
                  alt=""
                />
              </div>
              <div class="yen-new-card-tag d-flex">
                <div class="yen-new-card-tagl">
                  <span>2021.03.05</span>
                </div>
                <div class="yen-new-card-tagr">
                  <span>讀書會</span>
                </div>
              </div>
              <div class="yen-new-card-des">
                <div class="yen-new-card-title">
                  <span>
                    【聚說說書會
                    台北場】在藏身之處，活得燦爛如初：一個不良少年走向斜槓青年的生命故事
                  </span>
                </div>
                <div class="yen-new-card-bottom">
                  <div class="yen-new-card-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>台北市</span>
                  </div>
                  <div class="yen-new-card-price">
                    <div class="yen-new-card-nt">
                      <span>NT</span>
                    </div>
                    <div class="yen-new-card-money">
                      <span>200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="yen-new-tag-box">
                <span>NEW</span>
              </div>
              <div class="yen-new-ladybug">
                <SvgLadybug />
              </div>
            </div>
            <div class="yen-new-card">
              <div class="yen-new-card-img">
                <img
                  src="http://localhost:3000/images/yen/hot/hot-4-w.jpg"
                  alt=""
                />
              </div>
              <div class="yen-new-card-tag d-flex">
                <div class="yen-new-card-tagl">
                  <span>2021.03.05</span>
                </div>
                <div class="yen-new-card-tagr">
                  <span>讀書會</span>
                </div>
              </div>
              <div class="yen-new-card-des">
                <div class="yen-new-card-title">
                  <span>
                    【聚說說書會
                    台北場】在藏身之處，活得燦爛如初：一個不良少年走向斜槓青年的生命故事
                  </span>
                </div>
                <div class="yen-new-card-bottom">
                  <div class="yen-new-card-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>台北市</span>
                  </div>
                  <div class="yen-new-card-price">
                    <div class="yen-new-card-nt">
                      <span>NT</span>
                    </div>
                    <div class="yen-new-card-money">200</div>
                  </div>
                </div>
              </div>
              <div class="yen-new-tag-box">
                <span>NEW</span>
              </div>
            </div>
          </div>
          <div class="yen-island-box">
            <div class="yen-island">
              <SvgTaiwan />
            </div>
            <div class="yen-north-area">
              <SvgNorth />
            </div>
            <div class="yen-medium-area">
              <SvgMedium />
            </div>
            <div class="yen-south-area">
              <SvgSouth />
            </div>
            <div class="yen-east-area">
              <SvgEast />
            </div>
          </div>
        </div>

        <div class="yen-new-bg">
          <div class="yen-new-bg-circle1">
            <SvgBgCircleLine />
          </div>
          <div class="yen-new-bg-circle2">
            <SvgBgCircleFull />
          </div>
          <div class="yen-new-bg-circle3">
            <SvgBgCircleFull />
          </div>
          <div class="yen-new-bg-circle4">
            <SvgBgCircleLine />
          </div>
          <div class="yen-new-bg-circle5">
            <SvgBgCircleLine />
          </div>
          <div class="yen-new-bg-circle6">
            <SvgBgCircleLine />
          </div>
          <div class="yen-new-bg-circle7">
            <SvgBgCircleFull />
          </div>
          <div class="yen-new-bg-withdog">
            <SvgWithDog />
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexNew
