import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

// 二手書scss
import '../styles/used-books.scss'

// 二手書svg

import ReadingImg from '../components/ReadingImg'

function RandomEdit() {
  return (
    <>
      <div class="container my-5">
        {/* <!-- 麵包屑 --> */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-honki">
              <Link to="#">首頁</Link>
            </li>
            <li class="breadcrumb-honki">
              <Link to="./used-books">二手交換</Link>
            </li>
            <li class="breadcrumb-honki active" aria-current="page">
              隨機交換
            </li>
          </ol>
        </nav>
        <div class="jill-myaddform row">
          <form>
            {/* <!-- 比例 --> */}
            <div class=" form-width-height">
              {/* <!-- 表單標題 --> */}
              <div class="form-tittle">
                <h5>我的交換單-查看</h5>
              </div>
              {/* <!-- 一般input --> */}
              <div class="form-group ">
                <div class="formItems row d-flex">
                  <label class="inputText col-5" for="exampleFormControlInput1">
                    ISBN
                  </label>
                  <input
                    type="text"
                    class="form-control formInput col-7 "
                    placeholder="ex:9789869961202"
                    value="9789869507776"
                  />
                </div>
              </div>
              {/* <!-- 一般input --> */}
              <div class="form-group ">
                <div class="formItems row d-flex">
                  <label class="inputText col-5" for="exampleFormControlInput1">
                    書名
                  </label>
                  <input
                    type="text"
                    class="form-control formInput col-7 "
                    placeholder="ex:種日子的人"
                    value="外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生"
                  />
                </div>
              </div>
              {/* <!-- select --> */}
              <div class="form-group ">
                <div class="formItems row d-flex">
                  <label
                    class="inputText col-5"
                    for="exampleFormControlSelect1"
                  >
                    書況
                  </label>
                  <select
                    class="form-control formInput  col-7"
                    id="exampleFormControlSelect1"
                  >
                    <option>1成新</option>
                    <option>3成新</option>
                    <option selected>5成新</option>
                    <option>7成新</option>
                    <option>9成新</option>
                  </select>
                </div>
              </div>
              {/* <!-- 上傳檔案 --> */}
              <div class="form-group">
                <label class="BC_pic_title">書況圖片</label>
                <label class="jill-upload-btn" for="BC_pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="84"
                    height="30"
                    viewBox="0 0 84 30"
                  >
                    <g
                      id="Group_905"
                      data-name="Group 905"
                      transform="translate(-1315 -1138)"
                    >
                      <g id="trial-button" transform="translate(1315 1138)">
                        <rect
                          id="Rectangle_837"
                          data-name="Rectangle 837"
                          width="84"
                          height="30"
                          rx="4"
                          fill="#1c1b1b"
                        />
                        <text
                          id="選擇檔案"
                          transform="translate(18 20)"
                          fill="#fff"
                          font-size="12"
                          font-family="NotoSansTC-Medium, Noto Sans TC"
                          font-weight="500"
                          letter-spacing="0em"
                        >
                          <tspan x="0" y="0">
                            選擇檔案
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                  <input
                    type="file"
                    class=""
                    id="BC_pic"
                    name="BC_pic"
                    accept="image/*"
                    multiple
                    style={{ display: 'none' }}
                  />
                </label>
                {/* <!-- 圖片預覽區(希望可做刪除功能) --> */}
                <div class="jill-upload-pics-area row">
                  <div class="jill-upload-pics">
                    <img
                      src="http://localhost:3000/images/jill/BCPics/CompanyOfOne1.jpg"
                      alt=""
                    />
                    <Link to="#">
                      <FaTimes className="fas fa-times jill-normal-delect-icon" />
                    </Link>
                  </div>

                  <div class="jill-upload-pics">
                    <img
                      src="http://localhost:3000/images/jill/BCPics/CompanyOfOne2.jpg"
                      alt=""
                    />
                    <Link to="#">
                      <FaTimes className="fas fa-times jill-normal-delect-icon" />
                    </Link>
                  </div>

                  <div class="jill-upload-pics">
                    <img
                      src="http://localhost:3000/images/jill/BCPics/CompanyOfOne3.jpg"
                      alt=""
                    />
                    <Link to="#">
                      <FaTimes className="fas fa-times jill-normal-delect-icon" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- select_radio --> */}
              <div class="form-group ">
                <div class="formItems row">
                  <label
                    class="inputText col-5"
                    for="exampleFormControlSelect1"
                  >
                    有無塗改書寫
                  </label>
                  <div class="col-7">
                    <div class="form-check form-check-inline radio-item">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        有塗改
                      </label>
                    </div>
                    <div class="form-check form-check-inline radio-item">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                        checked
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        無塗改
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* <!-- 看書的人svg --> */}
          <div class="jill-edit-svg">
            <ReadingImg />
          </div>

          {/* <!-- 按鈕 --> */}
          <div class="jill-form-btn-group">
            <div class="d-flex jill-center-btn">
              <Link to="#">
                <button class="btn-md-dark jill-addform-btn">修改</button>
              </Link>
              <Link to="./RandomIndex">
                <button class="btn-md-dark jill-addform-btn">取消</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RandomEdit
