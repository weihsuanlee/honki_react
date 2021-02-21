import React, { useEffect, useState } from 'react'

function EditTab1() {
  let userLogin = JSON.parse(localStorage.getItem('userLogin'))
  console.log(userLogin)

  const [name, setName] = useState(userLogin.body.name)
  const [nickname, setNickname] = useState(userLogin.body.nickname)
  // const [email, setEmail] = useState(userLogin.body.email)
  const email = userLogin.body.email
  const [mobile, setMobile] = useState(userLogin.body.mobile)
  const [address, setAddress] = useState(userLogin.body.address)
  const userBirthday = userLogin.body.birthday.split('T')[0]
  const [birthday, setBirthday] = useState(userBirthday)
  const [password, setPassword] = useState(userLogin.body.passward)

  const editInfo = async function () {
    let userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const url = 'http://localhost:3333/member/edit/' + userLogin.body.sid

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        nickname: nickname,
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

      if (data.success) {
        localStorage.setItem('userLogin', JSON.stringify(data))
        console.log(JSON.parse(localStorage.getItem('userLogin')))
        window.location.href = '/edit'
      }

      console.log(data)
    } catch (error) {}
  }

  useEffect(() => {
    let userLogin = JSON.parse(localStorage.getItem('userLogin'))
    console.log(userLogin)
    // setName(userLogin.body.name)
    // setNickname(userLogin.body.nickname)
    // setEmail(userLogin.body.email)
    // setMobile(userLogin.body.mobile)
    // setAddress(userLogin.body.address)
    // setBirthday(userLogin.body.birthday.slice(0, 10))
  })
  return (
    <>
      <div className="panels yu-edit-panels">
        {/* <!-- 收合選單-1修改個人資料 --> */}
        <div className="panel" id="one-panel">
          {/* <!-- <div className="panel-title">個人資料修改</div> --> */}

          {/* <!-- 姓名input --> */}
          <div className="form-group">
            <div className="formItems row d-flex justify-content-center">
              <label
                className="inputText col-2"
                htmlFor="exampleFormControlInput1"
              >
                姓名
              </label>
              <input
                type="text"
                className="form-control formInput col-6"
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
                className="inputText col-2"
                htmlFor="exampleFormControlInput1"
              >
                暱稱
              </label>
              <input
                type="text"
                className="form-control formInput col-6"
                placeholder=""
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value)
                }}
              />
            </div>
          </div>
          {/* <!-- 信箱input_disabled --> */}
          <div className="form-group">
            <div className="formItems row d-flex justify-content-center">
              <label className="inputText col-2">信箱</label>
              <input
                type="email"
                className="form-control formInput col-6"
                placeholder="honkibooks@mail.com"
                disabled
                value={email}
              />
            </div>
          </div>
          {/* <!-- 手機input --> */}
          <div className="form-group">
            <div className="formItems row d-flex justify-content-center">
              <label
                className="inputText col-2"
                htmlFor="exampleFormControlInput1"
              >
                手機
              </label>
              <input
                type="text"
                className="form-control formInput col-6"
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
                className="inputText col-2"
                htmlFor="exampleFormControlTextarea1"
              >
                地址
              </label>
              <textarea
                className="form-control col-6"
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
                className="inputText col-2"
                htmlFor="exampleFormControlTextarea1"
              >
                生日
              </label>
              <input
                type="date"
                className="form-control formInput col-6"
                id="birthday"
                name="birthday"
                value={birthday}
                onChange={(e) => {
                  console.log(birthday)
                  setBirthday(e.target.value)
                  console.log(e.target.value)
                }}
              />
            </div>
          </div>

          {/* <!-- 密碼input--> */}
          <div className="form-group">
            <div className="formItems row d-flex justify-content-center">
              <label
                className="inputText col-2"
                htmlFor="exampleFormControlTextarea1"
              >
                密碼
              </label>
              <input
                type="password"
                className="form-control formInput col-6"
                id="password"
                name="password"
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
                className="inputText col-2"
                htmlFor="exampleFormControlTextarea1"
              >
                確認密碼
              </label>
              <input
                type="password"
                className="form-control formInput col-6"
                id="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
          </div>

          {/* <!-- 按鈕 --> */}
          <div className="form-group button-group">
            <div className="formItems row d-flex justify-content-center">
              <button
                type="submit"
                className="btn-md-dark form-button form-control col-3"
                onClick={() => {
                  editInfo(name, nickname, mobile, address, birthday, password)
                }}
              >
                確認修改
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditTab1
