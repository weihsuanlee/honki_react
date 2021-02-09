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
                <Tab eventKey="yu-edit-1" title="修改個人資料">
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
                    {/* <!-- 頭貼選單-選擇表情 --> */}
                    <div class="form-group yu-edit-form">
                      <span>選擇表情</span>
                      {/* face第一列 */}
                      <div class="formItems row d-flex">
                        {/* face-1 */}
                        <div>
                          <input
                            id="face-1"
                            type="radio"
                            className="yu-edit-face"
                            name="face"
                            value="face-1"
                          />
                          <label for="face-1" class="yu-edit-photo-face">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/face/Awe.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* face-2 */}
                        <div>
                          <input
                            id="face-2"
                            type="radio"
                            className="yu-edit-face"
                            name="face"
                            value="face-2"
                          />
                          <label for="face-2" class="yu-edit-photo-face">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/face/Calm.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* face-3 */}
                        <div>
                          <input
                            id="face-3"
                            type="radio"
                            className="yu-edit-face"
                            name="face"
                            value="face-3"
                          />
                          <label for="face-3" class="yu-edit-photo-face">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/face/Cute.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* face-4 */}
                        <div>
                          <input
                            id="face-4"
                            type="radio"
                            className="yu-edit-face"
                            name="face"
                            value="face-4"
                          />
                          <label for="face-4" class="yu-edit-photo-face">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/face/Driven.svg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      {/* face第二列 */}
                      <div class="formItems row d-flex">
                        {/* face-5 */}
                        <div>
                          <input
                            id="face-5"
                            type="radio"
                            className="yu-edit-face"
                            name="face"
                            value="face-5"
                          />
                          <label for="face-5" class="yu-edit-photo-face">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/face/Explaining.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* face-6 */}
                        <div>
                          <input
                            id="face-6"
                            type="radio"
                            className="yu-edit-face"
                            name="face"
                            value="face-6"
                          />
                          <label for="face-6" class="yu-edit-photo-face">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/face/Old.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* face-7 */}
                        <div>
                          <input
                            id="face-7"
                            type="radio"
                            className="yu-edit-face"
                            name="face"
                            value="face-7"
                          />
                          <label for="face-7" class="yu-edit-photo-face">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/face/Smile Teeth Gap.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* face-8 */}
                        <div>
                          <input
                            id="face-8"
                            type="radio"
                            className="yu-edit-face"
                            name="face"
                            value="face-8"
                          />
                          <label for="face-8" class="yu-edit-photo-face">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/face/Smile.svg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- 頭貼選單-選擇髮型 --> */}
                    <div class="form-group yu-edit-form">
                      <span>選擇髮型</span>
                      {/* hair第一列 */}
                      <div class="formItems row d-flex">
                        {/* hair-1 */}
                        <div>
                          <input
                            id="hair-1"
                            type="radio"
                            className="yu-edit-hair"
                            name="hair"
                            value="hair-1"
                          />
                          <label for="hair-1" class="yu-edit-photo-hair">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/hair/1Bangs 2.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* hair-2 */}
                        <div>
                          <input
                            id="hair-2"
                            type="radio"
                            className="yu-edit-hair"
                            name="hair"
                            value="hair-2"
                          />
                          <label for="hair-2" class="yu-edit-photo-hair">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/hair/2Bun 2.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* hair-3 */}
                        <div>
                          <input
                            id="hair-3"
                            type="radio"
                            className="yu-edit-hair"
                            name="hair"
                            value="hair-3"
                          />
                          <label for="hair-3" class="yu-edit-photo-hair">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/hair/3Long Bangs.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* hair-4 */}
                        <div>
                          <input
                            id="hair-4"
                            type="radio"
                            className="yu-edit-hair"
                            name="hair"
                            value="hair-4"
                          />
                          <label for="hair-4" class="yu-edit-photo-hair">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/hair/4Medium Bangs 3.svg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      {/* hair第二列 */}
                      <div class="formItems row d-flex">
                        {/* hair-5 */}
                        <div>
                          <input
                            id="hair-5"
                            type="radio"
                            className="yu-edit-hair"
                            name="hair"
                            value="hair-5"
                          />
                          <label for="hair-5" class="yu-edit-photo-hair">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/hair/5hat-hip.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* hair-6 */}
                        <div>
                          <input
                            id="hair-6"
                            type="radio"
                            className="yu-edit-hair"
                            name="hair"
                            value="hair-6"
                          />
                          <label for="hair-6" class="yu-edit-photo-hair">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/hair/6Pomp.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* hair-7 */}
                        <div>
                          <input
                            id="hair-7"
                            type="radio"
                            className="yu-edit-hair"
                            name="hair"
                            value="hair-7"
                          />
                          <label for="hair-7" class="yu-edit-photo-hair">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/hair/7Shaved 2.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* hair-8 */}
                        <div>
                          <input
                            id="hair-8"
                            type="radio"
                            className="yu-edit-hair"
                            name="hair"
                            value="hair-8"
                          />
                          <label for="hair-8" class="yu-edit-photo-hair">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/hair/8Twists 2.svg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- 頭貼選單-選擇服飾 --> */}
                    <div class="form-group yu-edit-form">
                      <span>選擇服飾</span>
                      {/* cloth第一列 */}
                      <div class="formItems row d-flex">
                        {/* cloth-1 */}
                        <div>
                          <input
                            id="cloth-1"
                            type="radio"
                            className="yu-edit-cloth"
                            name="cloth"
                            value="cloth-1"
                          />
                          <label for="cloth-1" class="yu-edit-photo-cloth">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/cloth/Button Shirt 1.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* cloth2 */}
                        <div>
                          <input
                            id="cloth-2"
                            type="radio"
                            className="yu-edit-cloth"
                            name="cloth"
                            value="cloth-2"
                          />
                          <label for="cloth-2" class="yu-edit-photo-cloth">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/cloth/Device.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* cloth-3 */}
                        <div>
                          <input
                            id="cloth-3"
                            type="radio"
                            className="yu-edit-cloth"
                            name="cloth"
                            value="cloth-3"
                          />
                          <label for="cloth-3" class="yu-edit-photo-cloth">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/cloth/Dress.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* cloth-4 */}
                        <div>
                          <input
                            id="cloth-4"
                            type="radio"
                            className="yu-edit-cloth"
                            name="cloth"
                            value="cloth-4"
                          />
                          <label for="cloth-4" class="yu-edit-photo-cloth">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/cloth/Fur Jacket.svg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      {/* cloth第二列 */}
                      <div class="formItems row d-flex">
                        {/* cloth-5 */}
                        <div>
                          <input
                            id="cloth-5"
                            type="radio"
                            className="yu-edit-cloth"
                            name="cloth"
                            value="cloth-5"
                          />
                          <label for="cloth-5" class="yu-edit-photo-cloth">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/cloth/Hoodie.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* cloth-6 */}
                        <div>
                          <input
                            id="cloth-6"
                            type="radio"
                            className="yu-edit-cloth"
                            name="cloth"
                            value="clothr-6"
                          />
                          <label for="cloth-6" class="yu-edit-photo-cloth">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/cloth/Polo and Sweater.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* cloth-7 */}
                        <div>
                          <input
                            id="cloth-7"
                            type="radio"
                            className="yu-edit-cloth"
                            name="cloth"
                            value="cloth-7"
                          />
                          <label for="cloth-7" class="yu-edit-photo-cloth">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/cloth/Striped Tee.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* cloth-8 */}
                        <div>
                          <input
                            id="cloth-8"
                            type="radio"
                            className="yu-edit-cloth"
                            name="cloth"
                            value="cloth-8"
                          />
                          <label for="cloth-8" class="yu-edit-photo-cloth">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/cloth/Tee 1.svg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- 頭貼選單-選擇配件 --> */}
                    <div class="form-group yu-edit-form">
                      <span>選擇配件</span>
                      {/* acc第一列 */}
                      <div class="formItems row d-flex">
                        {/* acc-1 */}
                        <div>
                          <input
                            id="acc-1"
                            type="radio"
                            className="yu-edit-acc"
                            name="acc"
                            value="acc-1"
                          />
                          <label for="acc-1" class="yu-edit-photo-acc">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/acc/_ None.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* acc-2 */}
                        <div>
                          <input
                            id="acc-2"
                            type="radio"
                            className="yu-edit-acc"
                            name="acc"
                            value="acc-2"
                          />
                          <label for="acc-2" class="yu-edit-photo-acc">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/acc/Glasses 2.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* acc-3 */}
                        <div>
                          <input
                            id="acc-3"
                            type="radio"
                            className="yu-edit-acc"
                            name="acc"
                            value="acc-3"
                          />
                          <label for="acc-3" class="yu-edit-photo-acc">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/acc/Glasses 3.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* acc-4 */}
                        <div>
                          <input
                            id="acc-4"
                            type="radio"
                            className="yu-edit-acc"
                            name="acc"
                            value="acc-4"
                          />
                          <label for="acc-4" class="yu-edit-photo-acc">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/acc/Glasses 4.svg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      {/* acc第二列 */}
                      <div class="formItems row d-flex">
                        {/* acc-5 */}
                        <div>
                          <input
                            id="acc-5"
                            type="radio"
                            className="yu-edit-acc"
                            name="acc"
                            value="acc-5"
                          />
                          <label for="acc-5" class="yu-edit-photo-acc">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/acc/Glasses 5.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* acc-6 */}
                        <div>
                          <input
                            id="acc-6"
                            type="radio"
                            className="yu-edit-acc"
                            name="acc"
                            value="acc-6"
                          />
                          <label for="acc-6" class="yu-edit-photo-acc">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/acc/Glasses.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* acc-7 */}
                        <div>
                          <input
                            id="acc-7"
                            type="radio"
                            className="yu-edit-acc"
                            name="acc"
                            value="acc-7"
                          />
                          <label for="acc-7" class="yu-edit-photo-acc">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/acc/Sunglasses 2.svg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* acc-8 */}
                        <div>
                          <input
                            id="acc-8"
                            type="radio"
                            className="yu-edit-acc"
                            name="acc"
                            value="acc-8"
                          />
                          <label for="hair-8" class="yu-edit-photo-acc">
                            <img
                              // class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/acc/Sunglasses.svg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- 頭貼選單-選擇背景 --> */}
                    <div class="form-group yu-edit-form">
                      <span>選擇背景</span>
                      {/* bg第一列 */}
                      <div class="formItems row d-flex">
                        {/* bg-1 */}
                        <div>
                          <input
                            id="bg-1"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-1"
                          />
                          <label for="bg-1" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term1.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-2 */}
                        <div>
                          <input
                            id="bg-2"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-2"
                          />
                          <label for="bg-2" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term2.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-3 */}
                        <div>
                          <input
                            id="bg-3"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-3"
                          />
                          <label for="bg-3" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term3.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-4 */}
                        <div>
                          <input
                            id="bg-4"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-4"
                          />
                          <label for="bg-4" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term4.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      {/* bg第二列 */}
                      <div class="formItems row d-flex">
                        {/* bg-5 */}
                        <div>
                          <input
                            id="bg-5"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-5"
                          />
                          <label for="bg-5" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term5.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-6 */}
                        <div>
                          <input
                            id="bg-6"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-6"
                          />
                          <label for="bg-6" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term6.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-7 */}
                        <div>
                          <input
                            id="bg-7"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-7"
                          />
                          <label for="bg-7" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term7.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-8 */}
                        <div>
                          <input
                            id="bg-8"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-8"
                          />
                          <label for="bg-8" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term8.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      {/* bg第三列 */}
                      <div class="formItems row d-flex">
                        {/* bg-9 */}
                        <div>
                          <input
                            id="bg-9"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-9"
                          />
                          <label for="bg-9" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term9.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-10 */}
                        <div>
                          <input
                            id="bg-10"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-10"
                          />
                          <label for="bg-10" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term10.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-11 */}
                        <div>
                          <input
                            id="bg-11"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-11"
                          />
                          <label for="bg-11" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term11.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-12 */}
                        <div>
                          <input
                            id="bg-12"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-12"
                          />
                          <label for="bg-12" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term12.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>

                      {/* bg第四列 */}
                      <div class="formItems row d-flex">
                        {/* bg-13 */}
                        <div>
                          <input
                            id="bg-13"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-13"
                          />
                          <label for="bg-13" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term13.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-14 */}
                        <div>
                          <input
                            id="bg-14"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-14"
                          />
                          <label for="bg-14" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term14.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-15 */}
                        <div>
                          <input
                            id="bg-15"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-15"
                          />
                          <label for="bg-15" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term15.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-16 */}
                        <div>
                          <input
                            id="bg-16"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-16"
                          />
                          <label for="bg-16" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term16.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      {/* bg第五列 */}
                      <div class="formItems row d-flex">
                        {/* bg-17 */}
                        <div>
                          <input
                            id="bg-17"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-17"
                          />
                          <label for="bg-17" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term17.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-18 */}
                        <div>
                          <input
                            id="bg-18"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-18"
                          />
                          <label for="bg-18" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term18.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-19 */}
                        <div>
                          <input
                            id="bg-19"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-19"
                          />
                          <label for="bg-19" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term19.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-20 */}
                        <div>
                          <input
                            id="bg-20"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-20"
                          />
                          <label for="bg-20" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term20.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      {/* bg第六列 */}
                      <div class="formItems row d-flex">
                        {/* bg-21 */}
                        <div>
                          <input
                            id="bg-21"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-21"
                          />
                          <label for="bg-21" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term21.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-22 */}
                        <div>
                          <input
                            id="bg-22"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-22"
                          />
                          <label for="bg-22" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term22.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-23 */}
                        <div>
                          <input
                            id="bg-23"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-23"
                          />
                          <label for="bg-23" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term23.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        {/* bg-24 */}
                        <div>
                          <input
                            id="bg-24"
                            type="radio"
                            className="yu-edit-bg"
                            name="bg"
                            value="bg-24"
                          />
                          <label for="bg-24" class="yu-edit-photo-bg">
                            <img
                              class="w-100"
                              src="http://localhost:3000/images/yu/peepsphotos/24terms/term24.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="yu-edit-4" title="刪除帳號">
                  {/* <!-- 收合選單-4刪除帳號 --> */}
                  <div class="panel" id="four-panel">
                    <div class="panel-title yu-edit-delete-sentence">
                      真的要離開我們嗎......
                    </div>
                    <div class="yu-edit-delete-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="yu-edit-delete-checkbox"
                      />
                      <label
                        class="form-check-label"
                        for="yu-edit-delete-checkbox"
                      >
                        <p>是的，我要刪除帳號</p>
                      </label>
                    </div>

                    {/* <!-- 密碼input--> */}
                    <div class="form-group">
                      <div class="formItems row d-flex justify-content-center">
                        <label
                          class="inputText col-2"
                          for="yu-edit-delete-password"
                        >
                          密碼
                        </label>
                        <input
                          type="password"
                          class="form-control formInput col-6"
                          id="yu-edit-delete-password"
                          name="password"
                        />
                      </div>
                    </div>
                    {/* <!-- 確認密碼input--> */}
                    <div class="form-group">
                      <div class="formItems row d-flex justify-content-center">
                        <label
                          class="inputText col-2"
                          for="yu-edit-delete-password-comfirm"
                        >
                          確認密碼
                        </label>
                        <input
                          type="password"
                          class="form-control formInput col-6"
                          id="yu-edit-delete-password-comfirm"
                          name="password"
                        />
                      </div>
                    </div>

                    {/* <!-- 按鈕 --> */}
                    <div class="form-group button-group">
                      <div class="formItems row d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn-md-dark form-button form-control col-3 yu-edit-delete-button"
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
