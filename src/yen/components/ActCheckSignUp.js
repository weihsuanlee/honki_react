import '../styles/yen-check.scss'
import SvgPencil from './svg/SvgPencil'
import SvgCheckFormArrow from './svg/SvgCheckFormArrow'

function ActCheckSignUp(props) {
  return (
    <>
      <div className="yen-signup-header">
        <div className="yen-check-list">
          <div className="yen-signup-check-box">
            <div className="yen-signup-check-bg">
              <div className="yen-signup-check-num">
                <h5>報名單號：202101010012345</h5>
                <div className="yen-signup-check-pencil">
                  <SvgPencil />
                </div>
              </div>
              <div className="yen-signup-check-form">
                <div className="yen-check-form-list">
                  <div className="yen-check-form-title">
                    <span>活動名稱</span>
                    <div className="yen-check-form-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>
                      天地人學堂：如何獨立出版自己的書？獨立出版社實戰入門班：從出版流程、申請ISBN書號、編輯排版、封面設計、印書到鋪貨實戰課
                    </span>
                  </div>
                </div>
                <div className="yen-check-form-list-box">
                  <div className="yen-check-form-li-title">
                    <span>活動時間</span>
                    <div className="yen-check-form-li-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>2021年01月24日 14:00 ~ 15:30</span>
                  </div>
                </div>
                <div className="yen-check-form-list-box">
                  <div className="yen-check-form-li-title">
                    <span>費用</span>
                    <div className="yen-check-form-li-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>200元</span>
                  </div>
                </div>
                <div className="yen-check-form-list-box">
                  <div className="yen-check-form-li-title">
                    <span>姓名</span>
                    <div className="yen-check-form-li-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>王小明</span>
                  </div>
                </div>
                <div className="yen-check-form-list-box">
                  <div className="yen-check-form-li-title">
                    <span>連絡電話</span>
                    <div className="yen-check-form-li-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>0912-345-678</span>
                  </div>
                </div>
                <div className="yen-check-form-list-box">
                  <div className="yen-check-form-li-title">
                    <span>電子信箱</span>
                    <div className="yen-check-form-li-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>abc123@gmail.com</span>
                  </div>
                </div>
                <div className="yen-check-form-list-box">
                  <div className="yen-check-form-li-title">
                    <span>出生年月日</span>
                    <div className="yen-check-form-li-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>2000年01月01日</span>
                  </div>
                </div>
                <div className="yen-check-form-list-box">
                  <div className="yen-check-form-li-title">
                    <span>身分證字號</span>
                    <div className="yen-check-form-li-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>A123456789</span>
                  </div>
                </div>
                <div className="yen-check-form-list-box">
                  <div className="yen-check-form-li-title">
                    <span>性別</span>
                    <div className="yen-check-form-li-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>男</span>
                  </div>
                </div>
                <div className="yen-check-form-list-box">
                  <div className="yen-check-form-li-title">
                    <span>飲食習慣</span>
                    <div className="yen-check-form-li-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>葷</span>
                  </div>
                </div>
                <div className="yen-check-form-list-box">
                  <div className="yen-check-form-li-title">
                    <span>身體狀況</span>
                    <div className="yen-check-form-li-arrow">
                      <SvgCheckFormArrow />
                    </div>
                  </div>
                  <div className="yen-check-form-title-des">
                    <span>無特殊疾病</span>
                  </div>
                </div>
                <div className="yen-back-btn">
                  <button className="btn-rounded-dark">回上頁</button>
                </div>
                <div className="yen-check-cancel-btn">
                  <button className="btn-rounded-light yen-check-cancel-btn-bg ">
                    取消報名
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActCheckSignUp
