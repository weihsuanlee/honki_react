import { Link } from 'react-router-dom'

function EditTab4() {
  return (
    <>
      {/* <!-- 收合選單-4刪除帳號 --> */}
      <div className="panel" id="four-panel">
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
              id="yu-edit-delete-password-comfirm"
              name="password"
            />
          </div>
        </div>

        {/* <!-- 按鈕 --> */}
        <div className="form-group button-group">
          <div className="formItems row d-flex justify-content-center">
            <Link to="/">
              <button
                type="button"
                className="btn-md-dark form-button form-control yu-edit-delete-button"
              >
                確定刪除
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditTab4
