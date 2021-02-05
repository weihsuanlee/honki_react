import '../styles/members-login.scss'
import { FaLine, FaFacebookSquare } from 'react-icons/fa'
import { ImGoogle2 } from 'react-icons/im'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div class="container mt-5">
        {/* <!-- 紅圓點 --> */}
        <div class="yu-redpoint"></div>

        <form>
          {/* <!-- 比例 --> */}
          <div class="form-width-height yu-form">
            {/* <!-- 表單標題 --> */}
            <div class="form-tittle yu-form-title">
              <h5>會員登入</h5>
            </div>
            <div>
              {/* <!-- 背景圖 --> */}
              <div class="yu-bookspage">
                <img
                  class="yu-bookspage1-1"
                  src="http://localhost:3000/images/yu/book-login.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 表格input區 --> */}
              <div class="yu-pic col-6 mx-auto">
                {/* <!-- 信箱input --> */}
                <div class="form-group">
                  <div class="formItems row d-flex justify-content-center">
                    <label class="inputText col-3 mt-5">
                      <h6>帳號(電子信箱)</h6>
                    </label>
                    <input
                      type="email"
                      class="form-control formInput col-6 mt-5"
                      placeholder="honkibooks@mail.com"
                    />
                  </div>
                </div>
                {/* <!-- 密碼input --> */}
                <div class="form-group">
                  <div class="formItems row d-flex justify-content-center">
                    <label
                      class="inputText col-3"
                      for="exampleFormControlTextarea1"
                    >
                      <h6>密碼</h6>
                    </label>
                    <input
                      type="password"
                      class="form-control formInput col-6"
                      id="password"
                      name="password"
                    />
                  </div>
                </div>
                {/* <!-- checkbox --> */}
                <div class="d-flex justify-content-between px-5 yu-checkbox">
                  <div class="form-group form-check ">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="yu-saveaccountandpassword"
                    />
                    <label
                      class="form-check-label yu-save"
                      for="saveaccountandpassword"
                    >
                      <p>儲存帳號及密碼</p>
                    </label>
                  </div>
                  {/* <!-- 忘記密碼連結 --> */}
                  <div class="yu-forget-password-link">
                    <p>忘記密碼</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 按鈕 --> */}
            <div>
              {/* <!-- 註冊連結 --> */}
              <div class="yu-register-link">
                <h6>註冊</h6>
              </div>
              {/* <!-- 送出按鈕 --> */}
              <div class="form-group button-group">
                <div class="formItems row d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn-md-dark form-button form-control col-2"
                  >
                    送出
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div class="yu-login-from-others">
          {/* <!-- 第三方登入 --> */}
          <h6>其他登入方式</h6>
        </div>
        <div class="d-flex justify-content-center col-3 mx-auto yu-otherlinks">
          <Link to="/">
            <FaFacebookSquare className="yu-facebook-link mx-2" />
          </Link>
          <Link to="/">
            <FaLine className="yu-line-link mx-2" />
          </Link>
          <Link to="/">
            <ImGoogle2 className="yu-google-link mx-2" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
