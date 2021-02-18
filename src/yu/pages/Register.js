import '../styles/members-register.scss'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
      <div className="container my-5">
        {/* <!-- 紅圓點 --> */}
        <div className="yu-register-redpoint"></div>
        <form>
          {/* <!-- 比例 --> */}
          <div className="form-width-height yu-register-form">
            {/* <!-- 表單標題 --> */}
            <div className="form-tittle yu-register-form-title">
              <h5>新會員註冊</h5>
            </div>
            {/* <!-- 背景圖 --> */}
            <div className="yu-register-bookspage">
              <img
                className="yu-register-bookspage1-1"
                src="http://localhost:3000/images/yu/book-register.jpg"
                alt=""
              />
            </div>
            {/* <!-- 姓名input --> */}
            <div className="form-group">
              <div className="formItems row d-flex justify-content-center">
                <label
                  className="inputText col-1"
                  for="exampleFormControlInput1"
                >
                  姓名
                </label>
                <input
                  type="text"
                  className="form-control formInput col-4"
                  placeholder=""
                />
              </div>
            </div>
            {/* <!-- 暱稱input --> */}
            <div className="form-group">
              <div className="formItems row d-flex justify-content-center">
                <label
                  className="inputText col-1"
                  for="exampleFormControlInput1"
                >
                  暱稱
                </label>
                <input
                  type="text"
                  className="form-control formInput col-4"
                  placeholder=""
                />
              </div>
            </div>
            {/* <!-- 信箱input --> */}
            <div className="form-group">
              <div className="formItems row d-flex justify-content-center">
                <label className="inputText col-1">電子信箱</label>
                <input
                  type="email"
                  className="form-control formInput col-4"
                  placeholder="honkibooks@mail.com"
                />
              </div>
            </div>
            {/* <!-- 手機input --> */}
            <div className="form-group">
              <div className="formItems row d-flex justify-content-center">
                <label
                  className="inputText col-1"
                  for="exampleFormControlInput1"
                >
                  手機
                </label>
                <input
                  type="text"
                  className="form-control formInput col-4"
                  placeholder=""
                />
              </div>
            </div>
            {/* <!-- 地址input --> */}
            <div className="form-group">
              <div className="formItems row d-flex justify-content-center">
                <label
                  className="inputText col-1"
                  for="exampleFormControlTextarea1"
                >
                  地址
                </label>
                <textarea
                  className="form-control col-4"
                  id="exampleFormControlTextarea1"
                  placeholder="ex:100台北市中正區重慶南路一段122號"
                  rows="1"
                ></textarea>
              </div>
            </div>
            {/* <!-- 生日input --> */}
            <div className="form-group">
              <div className="formItems row d-flex justify-content-center">
                <label
                  className="inputText col-1"
                  for="exampleFormControlTextarea1"
                >
                  生日
                </label>
                <input
                  type="date"
                  className="form-control formInput col-4"
                  id="birthday"
                  name="birthday"
                />
              </div>
            </div>

            {/* <!-- 密碼input--> */}
            <div className="form-group">
              <div className="formItems row d-flex justify-content-center">
                <label
                  className="inputText col-1"
                  for="exampleFormControlTextarea1"
                >
                  密碼
                </label>
                <input
                  type="password"
                  className="form-control formInput col-4"
                  id="password"
                  name="password"
                />
              </div>
            </div>
            {/* <!-- 密碼確認input--> */}
            <div className="form-group">
              <div className="formItems row d-flex justify-content-center">
                <label
                  className="inputText col-1"
                  for="exampleFormControlTextarea1"
                >
                  確認密碼
                </label>
                <input
                  type="password"
                  className="form-control formInput col-4"
                  id="password"
                  name="password"
                />
              </div>
            </div>
            {/* <!-- checkbox --> */}
            <div className="form-group form-check d-flex justify-content-center">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="yu-saveaccountandpassword"
                />
                <label
                  className="form-check-label yu-register-save"
                  for="yu-saveaccountandpassword"
                >
                  <p>我接受服務條款及隱私政策</p>
                </label>
              </div>
            </div>
            {/* <!-- 按鈕 --> */}
            <div className="form-group button-group">
              <div className="formItems row d-flex justify-content-center">
                <div className="yu-register-send">
                  <Link to="/menu">
                    <button
                      type="submit"
                      className="btn-md-dark form-button form-control"
                    >
                      送出
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
