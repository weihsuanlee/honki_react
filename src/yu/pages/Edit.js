import '../styles/members-edit.scss'
import { Tabs, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Edit() {
  return (
    <>
      {/* 麵包屑 */}
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb yu-edit-breadcrumb">
          <li class="breadcrumb-honki">
            <Link to="/">首頁</Link>
          </li>
          <li class="breadcrumb-honki">
            <Link to="/">會員中心</Link>
          </li>
          <li class="breadcrumb-honki active" aria-current="page">
            個人資料修改
          </li>
        </ol>
      </nav>
      {/* <!-- 紅圓點 --> */}
      <div class="yu-edit-redpoint"></div>

      {/* <!-- 欄位 --> */}
      <div class="container my-5">
        <div class="row d-flex justify-content-between">
          {/* 左欄 */}
          <div class="col-3">
            {/* <!-- 標題 --> */}
            <div class="yu-edit-member-menu">
              <h5>會員中心</h5>
            </div>
            <div class="yu-edit-member-photo">
              {/* <!-- 個人頭貼 --> */}
              <img
                src="http://localhost:3000/images/yu/personalphoto.svg"
                alt=""
              />
            </div>
            <div>
              {/* <!-- 會員等級 --> */}
              <div class="yu-edit-general-member">一般會員</div>
              {/* <!-- 歡迎詞 --> */}
              <div class="yu-edit-greeting">哈囉，歡迎回來</div>
            </div>
            {/* <!-- 右欄 --> */}
          </div>
          {/* 右欄 */}
          <div class="col-9 yu-edit-tab">
            {/* <!-- 會員總表收合選單 --> */}
            <div className="holder d-none d-lg-block mx-auto yu-edit-panels">
              <Tabs defaultActiveKey="yu-edit-1" id="uncontrolled-tab-example">
                <Tab eventKey="yu-edit-1" title="會員總表">
                  <div class="panels yu-edit-panels">
                    {/* <!-- 收合選單-1修改個人資料 --> */}
                    <div class="panel" id="one-panel">
                      {/* <!-- <div class="panel-title">個人資料修改</div> --> */}

                      {/* <!-- 姓名input --> */}
                      <div class="form-group">
                        <div class="formItems row d-flex justify-content-center">
                          <label
                            class="inputText col-2"
                            for="exampleFormControlInput1"
                          >
                            姓名
                          </label>
                          <input
                            type="text"
                            class="form-control formInput col-6"
                            placeholder=""
                          />
                        </div>
                      </div>
                      {/* <!-- 暱稱input --> */}
                      <div class="form-group">
                        <div class="formItems row d-flex justify-content-center">
                          <label
                            class="inputText col-2"
                            for="exampleFormControlInput1"
                          >
                            暱稱
                          </label>
                          <input
                            type="text"
                            class="form-control formInput col-6"
                            placeholder=""
                          />
                        </div>
                      </div>
                      {/* <!-- 信箱input_disabled --> */}
                      <div class="form-group">
                        <div class="formItems row d-flex justify-content-center">
                          <label class="inputText col-2">信箱</label>
                          <input
                            type="email"
                            class="form-control formInput col-6"
                            placeholder="honkibooks@mail.com"
                            disabled
                          />
                        </div>
                      </div>
                      {/* <!-- 手機input --> */}
                      <div class="form-group">
                        <div class="formItems row d-flex justify-content-center">
                          <label
                            class="inputText col-2"
                            for="exampleFormControlInput1"
                          >
                            手機
                          </label>
                          <input
                            type="text"
                            class="form-control formInput col-6"
                            placeholder=""
                          />
                        </div>
                      </div>
                      {/* <!-- 地址input --> */}
                      <div class="form-group">
                        <div class="formItems row d-flex justify-content-center">
                          <label
                            class="inputText col-2"
                            for="exampleFormControlTextarea1"
                          >
                            地址
                          </label>
                          <textarea
                            class="form-control col-6"
                            id="exampleFormControlTextarea1"
                            placeholder="ex:100台北市中正區重慶南路一段122號"
                            rows="1"
                          ></textarea>
                        </div>
                      </div>
                      {/* <!-- 生日input --> */}
                      <div class="form-group">
                        <div class="formItems row d-flex justify-content-center">
                          <label
                            class="inputText col-2"
                            for="exampleFormControlTextarea1"
                          >
                            生日
                          </label>
                          <input
                            type="date"
                            class="form-control formInput col-6"
                            id="birthday"
                            name="birthday"
                          />
                        </div>
                      </div>

                      {/* <!-- 密碼input--> */}
                      <div class="form-group">
                        <div class="formItems row d-flex justify-content-center">
                          <label
                            class="inputText col-2"
                            for="exampleFormControlTextarea1"
                          >
                            密碼
                          </label>
                          <input
                            type="password"
                            class="form-control formInput col-6"
                            id="password"
                            name="password"
                          />
                        </div>
                      </div>
                      {/* <!-- 密碼確認input--> */}
                      <div class="form-group">
                        <div class="formItems row d-flex justify-content-center">
                          <label
                            class="inputText col-2"
                            for="exampleFormControlTextarea1"
                          >
                            確認密碼
                          </label>
                          <input
                            type="password"
                            class="form-control formInput col-6"
                            id="password"
                            name="password"
                          />
                        </div>
                      </div>

                      {/* <!-- 按鈕 --> */}
                      <div class="form-group button-group">
                        <div class="formItems row d-flex justify-content-center">
                          <button
                            type="button"
                            class="btn-md-dark form-button form-control col-3"
                          >
                            確認修改
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="yu-edit-2" title="修改密碼">
                  <div class="panel-title">修改密碼</div>
                  {/* <!-- 收合選單-2修改密碼 --> */}
                  <div class="panel" id="two-panel">
                    {/* <!-- <div class="panel-title">修改密碼</div> -->
                            <!-- 原密碼input--> */}
                    <div class="form-group">
                      <div class="formItems row d-flex justify-content-center">
                        <label
                          class="inputText col-2"
                          for="exampleFormControlTextarea1"
                        >
                          原密碼
                        </label>
                        <input
                          type="password"
                          class="form-control formInput col-6"
                          id="password"
                          name="password"
                        />
                      </div>
                    </div>
                    {/* <!-- 新密碼input--> */}
                    <div class="form-group">
                      <div class="formItems row d-flex justify-content-center">
                        <label
                          class="inputText col-2"
                          for="exampleFormControlTextarea1"
                        >
                          新密碼
                        </label>
                        <input
                          type="password"
                          class="form-control formInput col-6"
                          id="password"
                          name="password"
                        />
                      </div>
                    </div>
                    {/* <!-- 新密碼確認input--> */}
                    <div class="form-group">
                      <div class="formItems row d-flex justify-content-center">
                        <label
                          class="inputText col-2"
                          for="exampleFormControlTextarea1"
                        >
                          確認新密碼
                        </label>
                        <input
                          type="password"
                          class="form-control formInput col-6"
                          id="password"
                          name="password"
                        />
                      </div>
                    </div>

                    {/* <!-- 按鈕 --> */}
                    <div class="form-group button-group">
                      <div class="formItems row d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn-md-dark form-button form-control col-3"
                        >
                          確認修改
                        </button>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="yu-edit-3" title="修改節氣頭貼">
                  <div class="panel-title">修改節氣頭貼</div>
                  {/* <!-- 收合選單-3修改節氣頭貼 --> */}
                  <div class="panel" id="three-panel">
                    {/* <!-- <div class="panel-title">修改節氣頭貼</div> -->
                            <!-- 頭貼選單-選擇表情 --> */}
                    <div class="form-group ">
                      <div class="formItems row d-flex">
                        <select
                          class="form-control formInput col-7"
                          id="exampleFormControlSelect1"
                        >
                          <option>選擇表情</option>
                          <option>
                            <img
                              src="/images/members/peepsphotos/face/Awe.svg"
                              alt=""
                            />
                          </option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                        </select>
                      </div>
                    </div>
                    {/* <!-- 頭貼選單-選擇鬍子/髮型 --> */}

                    <div class="yu-peeps-component-header">
                      <span>
                        <span>選擇表情</span>
                        <span></span>
                      </span>
                      <span></span>
                    </div>

                    <div class="form-group ">
                      <div class="formItems row d-flex">
                        <select
                          class="form-control formInput  col-7"
                          id="exampleFormControlSelect1"
                        >
                          <option>選擇鬍子/髮型</option>
                          <option>
                            <img
                              src="/images/members/peepsphotos/face/Awe.svg"
                              alt=""
                            />
                          </option>
                          <option>
                            <img
                              src="/images/members/peepsphotos/face/Awe.svg"
                              alt=""
                            />
                          </option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="yu-edit-4" title="刪除帳號">
                  <div class="panel-title">刪除帳號</div>
                  {/* <!-- 收合選單-4刪除帳號 --> */}
                  <div class="panel" id="four-panel">
                    <div class="panel-title">真的要離開我們嗎......</div>
                    <div>
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="yu-deleteaccount"
                      />
                      <label
                        class="form-check-label yu-save"
                        for="yu-deleteaccount"
                      >
                        <p>是的，我要刪除帳號</p>
                      </label>
                    </div>

                    {/* <!-- 密碼input--> */}
                    <div class="form-group">
                      <div class="formItems row d-flex justify-content-center">
                        <label
                          class="inputText col-1"
                          for="exampleFormControlTextarea1"
                        >
                          密碼
                        </label>
                        <input
                          type="password"
                          class="form-control formInput col-6"
                          id="password"
                          name="password"
                        />
                      </div>
                    </div>
                    {/* <!-- 確認密碼input--> */}
                    <div class="form-group">
                      <div class="formItems row d-flex justify-content-center">
                        <label
                          class="inputText col-1"
                          for="exampleFormControlTextarea1"
                        >
                          確認密碼
                        </label>
                        <input
                          type="password"
                          class="form-control formInput col-6"
                          id="password"
                          name="password"
                        />
                      </div>
                    </div>

                    {/* <!-- 按鈕 --> */}
                    <div class="form-group button-group">
                      <div class="formItems row d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn-md-dark form-button form-control col-3"
                        >
                          確定刪除
                        </button>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Edit
