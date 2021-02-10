import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
// import NormalBee from './../components/NormalBee'
import DancingImg from '../components/DancingImg'

function RandomInsert() {
  return (
    <>
      <div className="container my-5">
        {/* <!-- 麵包屑 --> */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-honki">
              <Link to="#">首頁</Link>
            </li>
            <li className="breadcrumb-honki">
              <Link to="./used-books">二手交換</Link>
            </li>
            <li className="breadcrumb-honki active" aria-current="page">
              隨機交換
            </li>
          </ol>
        </nav>
        <div className="jill-myaddform row">
          <form>
            {/* <!-- 比例 --> */}
            <div className=" form-width-height">
              {/* <!-- 表單標題 --> */}
              <div className="form-tittle">
                <h5>新增二手書</h5>
              </div>
              {/* <!-- 一般input --> */}
              <div className="form-group ">
                <div className="formItems row d-flex">
                  <label
                    className="inputText col-5"
                    for="exampleFormControlInput1"
                  >
                    ISBN
                  </label>
                  <input
                    type="text"
                    className="form-control formInput col-7 "
                    placeholder="ex:9789869961202"
                  />
                </div>
              </div>
              {/* <!-- 一般input --> */}
              <div className="form-group ">
                <div className="formItems row d-flex">
                  <label
                    className="inputText col-5"
                    for="exampleFormControlInput1"
                  >
                    書名
                  </label>
                  <input
                    type="text"
                    className="form-control formInput col-7 "
                    placeholder="ex:種日子的人"
                  />
                </div>
              </div>
              {/* <!-- select --> */}
              <div className="form-group ">
                <div className="formItems row d-flex">
                  <label
                    className="inputText col-5"
                    for="exampleFormControlSelect1"
                  >
                    書況
                  </label>
                  <select
                    className="form-control formInput  col-7"
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
              <div className="form-group">
                <label className="BC_pic_title">書況圖片</label>
                <label className="jill-upload-btn" for="BC_pic">
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
                    className=""
                    id="BC_pic"
                    name="BC_pic"
                    accept="image/*"
                    multiple
                    style={{ display: 'none' }}
                  />
                </label>
              </div>

              {/* <!-- select_radio --> */}
              <div className="form-group ">
                <div className="formItems row">
                  <label
                    className="inputText col-5"
                    for="exampleFormControlSelect1"
                  >
                    有無塗改書寫
                  </label>
                  <div className="col-7">
                    <div className="form-check form-check-inline radio-item">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        有塗改
                      </label>
                    </div>
                    <div className="form-check form-check-inline radio-item">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        無塗改
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* <!-- 按鈕 --> */}
          <div className="form-group button-group jill-fix-btn">
            <div className="d-flex">
              <Link to="#">
                <button className="btn-md-dark jill-addform-btn">新增</button>
              </Link>
              <Link to="./RandomIndex">
                <button className="btn-md-dark jill-addform-btn">取消</button>
              </Link>
            </div>
          </div>
          {/* <!-- 跳舞的人 --> */}
          <div className="jill-dancing-img">
            <DancingImg />
          </div>
        </div>
      </div>
    </>
  )
}

export default RandomInsert
