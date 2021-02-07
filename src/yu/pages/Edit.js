import '../styles/members-login.scss'

function Edit() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb yu-breadcrumb">
          <li class="breadcrumb-honki">
            <a href="#">首頁</a>
          </li>
          <li class="breadcrumb-honki">
            <a href="#">會員中心</a>
          </li>
          <li class="breadcrumb-honki active" aria-current="page">
            個人資料修改
          </li>
        </ol>
      </nav>
      {/* <!-- 紅圓點 --> */}
      <div class="yu-redpoint"></div>

      {/* <!-- 欄位 --> */}
      <div class="container my-5">
        <div class="row justify-content-between">
          {/* <!-- 左欄 --> */}
          <div class="col-2">
            {/* <!-- 標題 --> */}
            <div>
              <h5 class="yu-member-menu">會員中心</h5>
            </div>
            <div>
              {/* <!-- 個人頭貼 --> */}
              <img
                class="yu-member-photo"
                src="/images/members/personalphoto.svg"
                alt=""
              />
            </div>
            <div>
              {/* <!-- 會員等級 --> */}
              <div class="yu-general-member">一般會員</div>
              {/* <!-- 歡迎詞 --> */}
              <div class="yu-greeting">哈囉，歡迎回來</div>
            </div>
          </div>

          {/* <!-- 右欄 --> */}
          <div class="col-9">
            {/* <!-- 收合選單 --> */}
            <div class="holder mt-5 d-none d-lg-block">
              <input
                class="holder-radio"
                id="one"
                name="group"
                type="radio"
                checked
              />
              <input class="holder-radio" id="two" name="group" type="radio" />
              <input
                class="holder-radio"
                id="three"
                name="group"
                type="radio"
              />
              <input class="holder-radio" id="four" name="group" type="radio" />

              <div class="tabs">
                <label class="tab yu-tab" id="one-tab" for="one">
                  個人資料修改
                </label>
                <label class="tab yu-tab" id="two-tab" for="two">
                  修改密碼
                </label>
                <label class="tab yu-tab" id="three-tab" for="three">
                  修改節氣頭貼
                </label>
                <label class="tab yu-tab" id="four-tab" for="four">
                  刪除帳號
                </label>
              </div>

              <div class="panels yu-panels">
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
                        {' '}
                        確認修改
                      </button>
                    </div>
                  </div>
                </div>

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
                        {' '}
                        確認修改
                      </button>
                    </div>
                  </div>
                </div>

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
                        {' '}
                        確定刪除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit
