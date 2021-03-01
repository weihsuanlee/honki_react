import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Swal from 'sweetalert2'

function EditTab1() {
  let userLogin = JSON.parse(localStorage.getItem('userLogin'))
  const [hasQueryInfo, setHasQueryInfo] = useState(false)

  const [name, setName] = useState(userLogin.body.name)
  const [nickname, setNickname] = useState(userLogin.body.nickname)
  const [email, setEmail] = useState(userLogin.body.email)
  const [mobile, setMobile] = useState(userLogin.body.mobile)
  const [address, setAddress] = useState(userLogin.body.address)
  const userBirthday = moment(userLogin.body.birthday).format('YYYY-MM-DD')
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
        Swal.fire({
          position: 'center',
          icon: 'success',
          Html: 'color:red',
          title: '修改成功',
          // text: 'Profile Updated!',
          showConfirmButton: false,
          timer: 1500,
        })
      }
      console.log(data)
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '修改失敗',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

  const geyInfo = async () => {
    console.log('get user info')
    let userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const url = 'http://localhost:3333/member/edit/' + userLogin.body.sid
    const request = new Request(url, {
      method: 'GET',
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
        setName(data.body.name)
        setNickname(data.body.nickname)
        setEmail(data.body.email)
        setMobile(data.body.mobile)
        setAddress(data.body.address)
        const userBirthday = moment(data.body.birthday).format('YYYY-MM-DD')
        setBirthday(userBirthday)
        setPassword(data.body.passward)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!hasQueryInfo) {
      setHasQueryInfo(true)
      geyInfo()
    }
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
