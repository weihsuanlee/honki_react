import { useState } from 'react'
import { Button } from 'react-bootstrap'

function EditTab2() {
  const sid = localStorage.getItem('userId')
  const [oriPassword, setOriPassword] = useState('')
  const [newPassword, setNewpassword] = useState('')
  const [newPassword2, setNewpassword2] = useState('')

  const editPassword = async function (newPassword, sid) {
    const url = 'http://localhost:3333/member/editnewpassword'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        password: newPassword,
        sid: sid,
      }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
  }
  return (
    <>
      <div className="panel-title yu-edit-password-title">修改密碼</div>
      {/* <!-- 收合選單-2修改密碼 --> */}
      <div className="panel" id="two-panel">
        {/* <!-- <div className="panel-title">修改密碼</div> -->
              <!-- 原密碼input--> */}
        <div className="form-group">
          <div className="formItems row d-flex justify-content-center">
            <label
              className="inputText col-2"
              htmlFor="exampleFormControlTextarea1"
            >
              原密碼
            </label>
            <input
              type="password"
              className="form-control formInput col-6"
              id="password"
              name="password"
              required
              value={oriPassword}
              onChange={(e) => {
                setOriPassword(e.target.value)
              }}
            />
          </div>
        </div>
        {/* <!-- 新密碼input--> */}
        <div className="form-group">
          <div className="formItems row d-flex justify-content-center">
            <label
              className="inputText col-2"
              htmlFor="exampleFormControlTextarea1"
            >
              新密碼
            </label>
            <input
              type="password"
              required
              className="form-control formInput col-6"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => {
                setNewpassword(e.target.value)
              }}
            />
          </div>
        </div>
        {/* <!-- 新密碼確認input--> */}
        <div className="form-group">
          <div className="formItems row d-flex justify-content-center">
            <label
              className="inputText col-2"
              htmlFor="exampleFormControlTextarea1"
            >
              確認新密碼
            </label>
            <input
              type="password"
              required
              className="form-control formInput col-6"
              id="newPassword2"
              name="newPassword2"
              value={newPassword2}
              onChange={(e) => {
                setNewpassword2(e.target.value)
              }}
            />
          </div>
        </div>

        {/* <!-- 按鈕 --> */}
        <div className="form-group button-group">
          <div className="formItems row d-flex justify-content-center">
            <Button
              className="btn-md-dark form-button form-control col-3"
              // onClick={() => {
              //   if (newPassword === newPassword2) {
              //     editPassword(newPassword, sid)
              //   }
              // }}
            >
              確認修改
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditTab2
