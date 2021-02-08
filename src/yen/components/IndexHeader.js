import '../styles/yen-index.scss'
import { FaAngleDown } from 'react-icons/fa'
import Test from './SvgIcons'

function IndexHeader() {
  return (
    <>
      <div className="yen-main-content-body">
        <div className="yen-header">
          <div class="d-flex">
            <div class="yen-repeat-left">
              <div class="yen-pics-left"></div>
            </div>
            <div class="yen-bg-img">
              <img
                src="http://localhost:3000/images/yen/pexels-mentatdgt-1319854.jpg"
                alt="bg"
                class="yen-pics-right"
              />
            </div>
            <div class="yen-header-box">
              <div class="yen-header-text">
                <Test />
              </div>
              <div class="yen-header-ladybug"></div>
            </div>
            <div class="yen-arrow-down animate__slideInDown">
              <FaAngleDown className="fa-angle-down" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexHeader
