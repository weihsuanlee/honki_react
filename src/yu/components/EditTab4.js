import { useRef } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

function EditTab4() {
  const divRef = useRef()
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordConfirm2, setPasswordConfirm2] = useState('')
  const sid = localStorage.getItem('userId')

  const passwordForDelete = async function (passwordConfirm, sid) {
    const url = 'http://localhost:3333/member/editdeleteaccount'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        password: passwordConfirm,
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
      {/* <!-- 收合選單-4刪除帳號 --> */}
      <div ref={divRef} className="panel" id="four-panel">
        <div className="panel-title yu-edit-delete-sentence">
          真的要離開我們嗎......
        </div>
        <div className="yu-edit-delete-checkbox">
          <input
            type="checkbox"
            className="form-check-input"
            id="yu-edit-delete-checkbox"
          />
          <label className="form-check-label" htmlFor="yu-edit-delete-checkbox">
            <p>是的，我要刪除帳號</p>
          </label>
        </div>

        {/* <!-- 密碼input--> */}
        <div className="form-group">
          <div className="formItems row d-flex justify-content-center">
            <label
              className="inputText col-2"
              htmlFor="yu-edit-delete-password"
            >
              密碼
            </label>
            <input
              type="password"
              className="form-control formInput col-6"
              id="yu-edit-delete-password"
              name="password"
              required
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value)
              }}
            />
          </div>
        </div>
        {/* <!-- 確認密碼input--> */}
        <div className="form-group">
          <div className="formItems row d-flex justify-content-center">
            <label
              className="inputText col-2"
              htmlFor="yu-edit-delete-password-comfirm"
            >
              確認密碼
            </label>
            <input
              type="password"
              className="form-control formInput col-6"
              id="yu-edit-delete-password-confirm"
              name="password"
              required
              value={passwordConfirm2}
              onChange={(e) => {
                setPasswordConfirm2(e.target.value)
              }}
            />
          </div>
        </div>

        {/* <!-- 按鈕 --> */}
        <div className="form-group button-group">
          <div className="formItems row d-flex justify-content-center">
            <Button
              className="btn-md-dark form-button form-control yu-edit-delete-button col-3"
              onClick={() => {
                passwordForDelete(passwordConfirm, sid)
              }}
            >
              確定刪除
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditTab4
