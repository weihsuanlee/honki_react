import '../styles/members-login.scss'
import { FaLine, FaFacebookSquare } from 'react-icons/fa'
import { ImGoogle2 } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'

import { Button } from 'react-bootstrap'

function Login(props) {
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  console.log(props)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)

  const login = async function (email, password) {
    const url = 'http://localhost:3333/member/login'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    //等伺服器response再走下一步
    //從json剖析回js的data
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    // localStorage setitem
    // let userLogin = 'userLogin'
    if (data.success) {
      localStorage.setItem('userLogin', JSON.stringify(data))
      localStorage.setItem('userId', JSON.stringify(data.body.sid))
      console.log(JSON.parse(localStorage.getItem('userLogin')))
      // 如果上一頁是購物車結帳來的登入跳回繼續結帳
      if (props.location.state === 'CartItems') {
        props.history.goBack()
      } else {
        // 其他跳轉回會員menu
        toMenu()
      }
    } else {
      localStorage.removeItem('userLogin')
      localStorage.removeItem('userId')
      Swal.fire({
        position: 'top',
        // title: '咦...帳號或密碼好像錯了哦',
        // text: '咦...帳號或密碼好像錯了哦',
        imageUrl: 'http://localhost:3000/images/components/logo.svg',
        imageWidth: 50,
        imageHeight: 50,
        html: '<b>咦...帳號或密碼好像錯了哦</b>',
        showConfirmButton: false,
        timer: 9000,
      })
      // setShow(true)
    }
  }

  function toMenu() {
    window.location.href = '/menu'
  }

  return (
    <>
      <div className="container mt-5">
        {/* <!-- 紅圓點 --> */}
        <div className="yu-login-redpoint"></div>

        <form name="yu-login">
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
                    <label className="inputText col-2 mt-5">
                      <h6>帳號</h6>
                    </label>
                    <input
                      type="email"
                      required
                      className="form-control formInput col-6 mt-5"
                      placeholder="honkibooks@mail.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                </div>
                {/* <!-- 密碼input --> */}
                <div className="form-group">
                  <div className="formItems row d-flex justify-content-center">
                    <label
                      className="inputText col-2"
                      for="exampleFormControlTextarea1"
                    >
                      <h6>密碼</h6>
                    </label>
                    <input
                      type="password"
                      required
                      className="form-control formInput col-6"
                      id="password"
                      name="password"
                      // minLength="4"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') login(email, password)
                      }}
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
                    <Button
                      className="btn-md-dark form-button form-control"
                      onClick={() => {
                        login(email, password)
                      }}
                    >
                      送出
                    </Button>

                    {/* <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Honki</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="yu-login-error my-4">
                        咦...帳號或密碼好像錯了哦
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          關閉
                        </Button>
                      </Modal.Footer>
                    </Modal> */}
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

export default withRouter(Login)
