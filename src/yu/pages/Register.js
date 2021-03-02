import '../styles/members-register.scss'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import moment from 'moment'
import Swal from 'sweetalert2'

function Register(props) {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
    email: '',
    mobile: '',
    address: '',
    birthday: '',
    password: '',
    password2: '',
  })
  // 切換開始作檢查的旗標
  const [startToChecked, setStartToChecked] = useState(false)
  // 錯誤陣列，記錄有錯誤的欄位名稱
  const [errors, setErrors] = useState([])

  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({ ...state, [fieldName]: event.target.value }))
  }

  // const [name, setName] = useState('')
  // const [nickname, setNickname] = useState('')
  // const [email, setEmail] = useState('')
  // const [mobile, setMobile] = useState('')
  // const [address, setAddress] = useState('')
  // const [birthday, setBirthday] = useState('')
  // const [password, setPassword] = useState('')
  // const [password2, setPassword2] = useState('')

  // const [showSuccess, setShowSuccess] = useState(false)
  // const [showFail, setShowFail] = useState(false)
  // const handleCloseSuccess = () => setShowSuccess(false)
  // const handleCloseFail = () => setShowFail(false)
  // 按了提交按鈕用的
  const handleSubmit = (e) => {
    //開啟開始觸發檢查的旗標
    setStartToChecked(true)

    //檢查帳號
    const newErrors = []
    if (inputs.name.trim().length < 1) {
      newErrors.push('name')
    }

    //檢查email(要有@)
    const re = /\S+@\S+\.\S+/
    if (!re.test(inputs.email.toLowerCase())) {
      newErrors.push('email')
    }

    //檢查密碼(6-24位英數字)
    const password = /[A-Za-z0-9]{6,24}/
    if (!password.test(inputs.password.toLowerCase())) {
      newErrors.push('password')
    }

    //檢查日期格式
    const DATE_FORMAT = 'YYYY-MM-DD'
    const checkDate = moment(inputs.birthday, DATE_FORMAT).format(DATE_FORMAT)
    if (checkDate !== inputs.birthday) {
      newErrors.push('birthday')
    }

    //檢查手機格式
    const mobile = /^09\d{2}-\d{3}-\d{3}$/
    if (!mobile.test(inputs.mobile)) {
      newErrors.push('mobile')
    }

    //檢查兩次密碼輸入不一樣
    if (inputs.password !== inputs.password2) {
      newErrors.push('passworddifference')
    }

    setErrors(newErrors)

    if (newErrors.length === 0) {
      register()
    }
  }

  // 切換合法不合法的css與提示字詞
  const fieldValidCSS = (fieldName) => {
    if (!startToChecked) return ''

    return errors.includes(fieldName) ? 'is-invalid' : ''
  }

  const register = async function () {
    const url = 'http://localhost:3333/member/register'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        name: inputs.name,
        nickname: inputs.nickname,
        email: inputs.email,
        mobile: inputs.mobile,
        address: inputs.address,
        birthday: inputs.birthday,
        password: inputs.password,
      }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    if (data.success) {
      localStorage.setItem('userLogin', JSON.stringify(data))
      localStorage.setItem('userId', JSON.stringify(data.body.sid))
      console.log(JSON.parse(localStorage.getItem('userLogin')))
      // setShowSuccess(true)
      Swal.fire({
        position: 'center',
        imageUrl: 'http://localhost:3000/images/yu/mushroom-1.gif',
        imageWidth: 250,
        html: '<b>註冊成功，歡迎你加入我們!</b>',
        showConfirmButton: false,
        timer: 4000,
      })
      toMenu()
    } else {
      // setShowFail(true)
      Swal.fire({
        position: 'center',
        imageUrl: 'http://localhost:3000/images/components/logo.svg',
        imageWidth: 50,
        imageHeight: 50,
        html: '<b>電子信箱重複囉</b>',
        showConfirmButton: false,
        timer: 4000,
      })
      localStorage.removeItem('userLogin')
      localStorage.removeItem('userId')
    }
  }

  function toMenu() {
    window.setTimeout(() => (window.location.href = '/menu'), 4000)
  }

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
            <div>
              {/* <!-- 姓名input --> */}
              <div className="form-group">
                <div className="formItems row justify-content-center position-relative">
                  <label className="inputText col-1" htmlFor="inputName">
                    姓名
                  </label>
                  <input
                    type="text"
                    className={`formInput col-4 form-control ${fieldValidCSS(
                      'name'
                    )} `}
                    id="inputName"
                    name="name"
                    placeholder=""
                    onChange={onChangeForField('name')}
                    required
                  />
                  {/* <div class="valid-feedback"></div> */}
                  <div className="invalid-feedback yu-register-invalid-feedback-name">
                    姓名要記得填哦
                  </div>
                </div>
              </div>
              {/* <!-- 暱稱input --> */}
              <div className="form-group">
                <div className="formItems row justify-content-center position-relative">
                  <label className="inputText col-1" htmlFor="inputName">
                    暱稱
                  </label>
                  <input
                    type="text"
                    className={`formInput col-4 form-control`}
                    id="inputName"
                    name="nickname"
                    placeholder=""
                    onChange={onChangeForField('nickname')}
                  />
                </div>
              </div>
              {/* <!-- 信箱input --> */}
              <div className="form-group">
                <div className="formItems row justify-content-center position-relative">
                  <label className="inputText col-1" htmlFor="inputEmail">
                    電子信箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="inputEmail"
                    className={`formInput col-4 form-control ${fieldValidCSS(
                      'email'
                    )} `}
                    placeholder="honkibooks@mail.com"
                    onChange={onChangeForField('email')}
                    required
                  />
                  {/* <div class="valid-feedback">email正確</div> */}
                  <div className="invalid-feedback yu-register-invalid-feedback-email">
                    email格式錯囉
                  </div>
                </div>
              </div>
              {/* <!-- 手機input --> */}
              <div className="form-group">
                <div className="formItems row justify-content-center position-relative">
                  <label className="inputText col-1" htmlFor="inputMobile">
                    手機
                  </label>
                  <input
                    type="text"
                    className={`formInput col-4 form-control ${fieldValidCSS(
                      'mobile'
                    )} `}
                    placeholder="請輸入09xx-xxx-xxx格式"
                    id="inputMobile"
                    name="mobile"
                    onChange={onChangeForField('mobile')}
                  />
                  {/* <div class="valid-feedback">手機格式正確</div> */}
                  <div className="invalid-feedback yu-register-invalid-feedback-mobile">
                    手機格式填錯囉
                  </div>
                </div>
              </div>
              {/* <!-- 地址input --> */}
              <div className="form-group">
                <div className="formItems row justify-content-center position-relative">
                  <label className="inputText col-1" htmlFor="inputAddress">
                    地址
                  </label>
                  <input
                    className={`formInput col-4 form-control`}
                    id="inputName"
                    name="address"
                    placeholder=""
                    onChange={onChangeForField('address')}
                  />
                </div>
              </div>
              {/* <!-- 生日input --> */}
              <div className="form-group">
                <div className="formItems row justify-content-center position-relative">
                  <label className="inputText col-1" htmlFor="inputBirthday">
                    生日
                  </label>
                  <input
                    type="date"
                    className={`formInput col-4 form-control ${fieldValidCSS(
                      'birthday'
                    )} `}
                    id="inputBirthday"
                    name="birthday"
                    onChange={(e) => {
                      onChangeForField('birthday')(e)
                      console.log(e.target.value)
                    }}
                  />
                  {/* 提示語 */}
                  {/* <div class="valid-feedback">生日格式ok</div> */}
                  <div className="invalid-feedback yu-register-invalid-feedback-birthday">
                    生日格式有誤
                  </div>
                </div>
              </div>
              {/* <!-- 密碼input--> */}
              <div className="form-group">
                <div className="formItems row justify-content-center position-relative">
                  <label className="inputText col-1" htmlFor="inputPassword">
                    密碼
                  </label>
                  <input
                    type="password"
                    name="password"
                    className={`formInput col-4 form-control ${fieldValidCSS(
                      'password'
                    )} `}
                    id="inputPasswordConfirm"
                    onChange={onChangeForField('password')}
                    required
                    minLength="6"
                    maxLength="24"
                  />
                  {/* 提示語 */}
                  {/* <div class="valid-feedback">密碼ok</div> */}
                  <div className="invalid-feedback yu-register-invalid-feedback-password">
                    密碼為6-24位數
                  </div>
                </div>
              </div>
              {/* <!-- 密碼確認input--> */}
              <div className="form-group">
                <div className="formItems row justify-content-center position-relative">
                  <label
                    className="inputText col-1"
                    htmlFor="inputPasswordConfirm"
                  >
                    確認密碼
                  </label>
                  <input
                    type="password"
                    name="password2"
                    className={`formInput col-4 form-control ${fieldValidCSS(
                      'passworddifference'
                    )} `}
                    id="inputPasswordConfirm"
                    onChange={onChangeForField('password2')}
                    required
                    minLength="6"
                    maxLength="24"
                  />
                  {/* 提示語 */}
                  {/* <div class="valid-feedback">密碼ok</div> */}
                  <div className="invalid-feedback yu-register-invalid-feedback-passworddifference">
                    密碼不一樣哦
                  </div>
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
              <div className="form-group button-group"></div>

              <div className="formItems row d-flex justify-content-center">
                <div className="yu-register-send">
                  <Button
                    className="btn-md-dark form-button form-control"
                    onClick={() => {
                      handleSubmit()
                    }}
                  >
                    送出
                  </Button>

                  {/* <Modal show={showSuccess} onHide={handleCloseSuccess}>
                    <Modal.Header closeButton>
                      <Modal.Title>Honki</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="yu-register-success my-4">
                      註冊成功，歡迎你加入我們!
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseSuccess}>
                        關閉
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Modal show={showFail} onHide={handleCloseFail}>
                    <Modal.Header closeButton>
                      <Modal.Title>Honki</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="yu-register-success my-4">
                      電子信箱重複囉
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseFail}>
                        關閉
                      </Button>
                    </Modal.Footer>
                  </Modal> */}
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
