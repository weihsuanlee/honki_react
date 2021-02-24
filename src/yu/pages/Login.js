import '../styles/members-login.scss'
import { FaLine, FaFacebookSquare } from 'react-icons/fa'
import { ImGoogle2 } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Modal, Button } from 'react-bootstrap'

function Login() {
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

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
      toMenu()
    } else {
      localStorage.removeItem('userLogin')
      localStorage.removeItem('userId')
      setShow(true)
    }
  }

  // cros-session
  // function sendAjax() {
  //   fetch('http://localhost:3000/try-session', {
  //     credentials: 'include',
  //   })
  //     .then((r) => r.text())
  //     .then((txt) => {
  //       info.innerHTML = txt
  //     })
  // }

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

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Honki</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>咦...帳號或密碼好像錯了哦</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          關閉
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button> */}
                      </Modal.Footer>
                    </Modal>
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

// const info = document.querySelector('#info')

// function checkForm() {
//   info.style.display = 'none'

//   const fd = new FormData(document.form1)

//   fetch('', {
//     method: 'POST',
//     body: fd,
//   })
//     .then((r) => r.json())
//     .then((obj) => {
//       console.log(obj)
//       if (!obj.success) {
//         info.classList.remove('alert-success')
//         info.classList.add('alert-danger')
//         info.innerHTML = '帳號或密碼錯誤'
//         info.style.display = 'block'
//       } else {
//         location.href = '/member/login'
//       }
//     })
// }

export default Login
