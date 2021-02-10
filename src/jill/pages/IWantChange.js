import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { FaTimes } from 'react-icons/fa'

// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
import ReadingImg from '../components/ReadingImg'

function IWantChange() {
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
              一般交換
            </li>
          </ol>
        </nav>
        <div className="jill-myaddform jill-check-status row">
          <form>
            {/* <!-- 比例 --> */}
            <div className=" form-width-height">
              {/* <!-- 表單標題 --> */}
              <div className="form-tittle">
                <h5>我想跟別人換-查看</h5>
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
                  <p>9789869507776</p>
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
                  <p>
                    外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生
                  </p>
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
                  <p>5成新</p>
                </div>
              </div>
              {/* <!-- 上傳檔案 --> */}
              <div className="form-group">
                <label className="BC_pic_title">書況圖片</label>
                {/* <!-- 圖片預覽區(希望可做刪除功能) --> */}
                <div className="jill-upload-pics-area row">
                  <div className="jill-upload-pics">
                    <img
                      src="http://localhost:3000/images/jill/BCPics/CompanyOfOne1.jpg"
                      alt=""
                    />
                  </div>

                  <div className="jill-upload-pics">
                    <img
                      src="http://localhost:3000/images/jill/BCPics/CompanyOfOne2.jpg"
                      alt=""
                    />
                  </div>

                  <div className="jill-upload-pics">
                    <img
                      src="http://localhost:3000/images/jill/BCPics/CompanyOfOne3.jpg"
                      alt=""
                    />
                  </div>
                </div>
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
                      <p>無塗改</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* <!-- 按鈕 --> */}
          <div className="form-group button-group jill-form-btn-group jill-fix-btn2">
            <div className="d-flex jill-center-btn">
              <Link to="#"></Link>
              <button className="btn-md-dark jill-addform-btn">取消請求</button>
              <Link to="./NormalIndex">
                <button className="btn-md-dark jill-addform-btn">關閉</button>
              </Link>
            </div>
          </div>
          {/* <!-- 看書的人svg --> */}
          <div className="jill-edit-svg-fix jill-check-status-svg">
            <ReadingImg />
          </div>
        </div>
      </div>
    </>
  )
}

export default IWantChange
