import '../styles/members-login.scss'
import { FaLine, FaFacebookSquare } from 'react-icons/fa'
import { ImGoogle2 } from 'react-icons/im'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className="container mt-5">
        {/* <!-- 紅圓點 --> */}
        <div className="yu-login-redpoint"></div>

        <form>
          {/* <!-- 比例 --> */}
          <div className="form-width-height yu-login-form">
            {/* <!-- 表單標題 --> */}
            <div className="form-tittle yu-login-form-title">
              <h5>會員登入</h5>
            </div>
            <div>
              {/* <!-- 背景圖 --> */}
              <div className="yu-login-bookspage">
                <img
                  className="yu-login-bookspage1-1"
                  src="http://localhost:3000/images/yu/book-login.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 表格input區 --> */}
              <div className="yu-login-pic col-6 mx-auto">
                {/* <!-- 信箱input --> */}
                <div className="form-group">
                  <div className="formItems row d-flex justify-content-center">
                    <label className="inputText col-3 mt-5">
                      <h6>帳號(電子信箱)</h6>
                    </label>
                    <input
                      type="email"
                      className="form-control formInput col-6 mt-5"
                      placeholder="honkibooks@mail.com"
                    />
                  </div>
                </div>
                {/* <!-- 密碼input --> */}
                <div className="form-group">
                  <div className="formItems row d-flex justify-content-center">
                    <label
                      className="inputText col-3"
                      for="exampleFormControlTextarea1"
                    >
                      <h6>密碼</h6>
                    </label>
                    <input
                      type="password"
                      className="form-control formInput col-6"
                      id="password"
                      name="password"
                    />
                  </div>
                </div>
                {/* <!-- checkbox --> */}
                <div className="px-5 yu-login-checkbox">
                  <div className="form-group form-check ">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="yu-login-save-account-and-password"
                    />
                    <label
                      className="form-check-label yu-login-save"
                      for="yu-login-save-account-and-password"
                    >
                      <p>儲存帳號及密碼</p>
                    </label>
                  </div>
                  {/* <!-- 忘記密碼連結 --> */}
                  <div className="yu-login-forget-password-link">
                    <Link to="/">忘記密碼</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 按鈕 --> */}
            <div>
              {/* <!-- 註冊連結 --> */}
              <div className="yu-login-register-link">
                <Link to="/register">
                  <h6>註冊</h6>
                </Link>
              </div>
              {/* <!-- 送出按鈕 --> */}
              <div className="form-group button-group">
                <div className="formItems row d-flex justify-content-center">
                  <div className="yu-login-send">
                    <Link to="/menu">
                      <button
                        type="button"
                        className="btn-md-dark form-button form-control"
                      >
                        送出
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="yu-login-from-others">
          {/* <!-- 第三方登入 --> */}
          <h6>其他登入方式</h6>
        </div>
        <div className="d-flex justify-content-center col-3 mx-auto yu-login-otherlinks">
          <Link to="/">
            <FaFacebookSquare className="yu-login-facebook-link mx-2" />
          </Link>
          <Link to="/">
            <FaLine className="yu-login-line-link mx-2" />
          </Link>
          <Link to="/">
            <ImGoogle2 className="yu-login-google-link mx-2" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
