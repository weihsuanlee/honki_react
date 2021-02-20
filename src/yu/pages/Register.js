import '../styles/members-register.scss'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function Register() {
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')
  const [birthday, setBirthday] = useState('')
  const [password, setPassword] = useState('')

  const register = async function () {
    const url = 'http://localhost:3333/member/register'

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        nickname: nickname,
        email: email,
        mobile: mobile,
        address: address,
        birthday: birthday,
        password: password,
      }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()

      console.log(data)
    } catch (error) {}
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
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
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
                  value={nickname}
                  onChange={(e) => {
                    setNickname(e.target.value)
                  }}
                />
              </div>
            </div>
            {/* <!-- 信箱input --> */}
            <div className="form-group">
              <div className="formItems row d-flex justify-content-center">
                <label className="inputText col-1">電子信箱</label>
                <input
                  type="email"
                  required
                  className="form-control formInput col-4"
                  placeholder="honkibooks@mail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
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
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value)
                  }}
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
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value)
                  }}
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
                  value={birthday}
                  onChange={(e) => {
                    setBirthday(e.target.value)
                  }}
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
                  required
                  className="form-control formInput col-4"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
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
                  required
                  className="form-control formInput col-4"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
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
                      className="btn-md-dark form-button form-control"
                      onClick={() => {
                        register(
                          name,
                          nickname,
                          email,
                          mobile,
                          address,
                          birthday,
                          password
                        )
                      }}
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
