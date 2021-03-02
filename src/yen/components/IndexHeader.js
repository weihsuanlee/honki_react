import '../styles/yen-index.scss'
import { FaAngleDown } from 'react-icons/fa'
import SvgText from './svg/SvgText'

function IndexHeader() {
  return (
    <>
      <div className="yen-main-content-body">
        <div className="yen-header">
          <div className="d-flex">
            <div className="yen-repeat-left">
              <div className="yen-pics-left"></div>
            </div>
            <div className="yen-bg-img">
              <img
                src="http://localhost:3000/images/yen/pexels-mentatdgt-1319854.jpg"
                alt="bg"
                className="yen-pics-right"
              />
            </div>
            <div className="yen-repeat-bt">
              <div className="yen-pics-left"></div>
            </div>
            <div className="yen-header-box">
              <div className="yen-header-text">
                <SvgText />
              </div>
              <div className="yen-header-ladybug"></div>
            </div>
            <div className="yen-arrow-down animate__slideInDown">
              <FaAngleDown className="fa-angle-down" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexHeader
