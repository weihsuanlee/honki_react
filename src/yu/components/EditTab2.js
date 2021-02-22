import { useRef } from 'react'

function EditTab2() {
  const divRef = useRef()
  return (
    <>
      <div ref={divRef} className="panel-title">
        修改密碼
      </div>
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
              required
              className="form-control formInput col-6"
              id="password"
              name="password"
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
              id="password"
              name="password"
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
              id="password"
              name="password"
            />
          </div>
        </div>

        {/* <!-- 按鈕 --> */}
        <div className="form-group button-group">
          <div className="formItems row d-flex justify-content-center">
            <button
              type="button"
              className="btn-md-dark form-button form-control col-3"
            >
              確認修改
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditTab2
