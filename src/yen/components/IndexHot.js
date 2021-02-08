import '../styles/yen-index.scss'
import SvgCircle from './svg/SvgCircle'
import SvgLadybug from './svg/SvgLadybug'
import SvgRun from './svg/SvgRun'

function IndexHot() {
  return (
    <>
      <div class="yen-overflow-box">
        <div class="yen-hot">
          <div class="yen-title-box d-flex">
            <div class="yen-circle">
              <SvgCircle />
            </div>
            <span class="yen-title-text">熱門活動</span>
          </div>
          <div class="yen-hot-card-box">
            <div class="yen-hot-cards-s yen-hover-box yen-hot-bgimg1">
              <div class="yen-hot-cover-box d-flex">
                <div class="yen-hot-cover"></div>
                <div class="yen-hot-cover-text">
                  <h5>隨心香氛自由書寫課。 台中場</h5>
                  <br />
                  <br />
                  <p>成立花蓮運行保存傳奇實。</p>
                  <p>成立花蓮運行保存傳奇實。</p>
                </div>
              </div>
            </div>
            <div class="yen-hot-cards-l yen-hover-box yen-hot-bgimg2"></div>
            <div class="yen-hot-cards-s yen-hover-box yen-hot-bgimg3"></div>
            <div class="yen-hot-cards-l yen-hover-box yen-hot-bgimg4"></div>
            <div class="yen-hot-cards-s yen-hover-box yen-hot-bgimg5"></div>
            <div class="yen-hot-cards-l yen-hover-box yen-hot-bgimg6"></div>
            <div class="yen-hot-ladybug">
              <SvgLadybug />
            </div>
            <div class="yen-hot-run">
              <SvgRun />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexHot
