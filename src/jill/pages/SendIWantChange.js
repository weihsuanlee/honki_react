// import React from 'react'
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
// import { FaTimes } from 'react-icons/fa'

// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
import ReadingImg from '../components/ReadingImg'

function SendIWantChange(props) {
  const c_sid = props.match.params.c_sid
  console.log(props)

  // 伺服器抓資料async
  const getProductDetail = async () => {
    const response = await fetch(
      'http://localhost:3333/normal-index/used-book-detail/' + c_sid,
      {
        method: 'get',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
        }),
      }
    )
    const data = await response.json()
    console.log(data)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getProductDetail()
  }, [])

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
              <Link to="used-books-index.html">二手交換</Link>
            </li>
            <li class="breadcrumb-honki active" aria-current="page">
              一般交換
            </li>
          </ol>
        </nav>
        <div class="jill-myaddform jill-check-status row">
          <form>
            {/* <!-- 比例 --> */}
            <div class=" form-width-height">
              {/* <!-- 表單標題 --> */}
              <div class="form-tittle">
                <h5>我想交換</h5>
              </div>
              {/* <!-- 一般input --> */}
              <div class="form-group ">
                <div class="formItems row d-flex">
                  <label class="inputText col-5" for="exampleFormControlInput1">
                    ISBN
                  </label>
                  <p>9789869507776</p>
                </div>
              </div>
              {/* <!-- 一般input --> */}
              <div class="form-group ">
                <div class="formItems row d-flex">
                  <label class="inputText col-5" for="exampleFormControlInput1">
                    書名
                  </label>
                  <p>{}</p>
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
                  <p>5成新</p>
                </div>
              </div>
              {/* <!-- 上傳檔案 --> */}
              <div class="form-group">
                <label class="BC_pic_title">書況圖片</label>
                {/* <!-- 圖片預覽區(希望可做刪除功能) --> */}
                <div class="jill-upload-pics-area row">
                  <div class="jill-upload-pics">
                    <img
                      src="http://localhost:3000/images/jill/BCPics/CompanyOfOne1.jpg"
                      alt=""
                    />
                  </div>

                  <div class="jill-upload-pics">
                    <img
                      src="http://localhost:3000/images/jill/BCPics/CompanyOfOne2.jpg"
                      alt=""
                    />
                  </div>

                  <div class="jill-upload-pics">
                    <img
                      src="http://localhost:3000/images/jill/BCPics/CompanyOfOne3.jpg"
                      alt=""
                    />
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
                      <p>無塗改</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* <!-- 按鈕 --> */}
          <div class="form-group button-group jill-form-btn-group jill-fix-btn2">
            <div class="d-flex jill-center-btn">
              <Link to="#"></Link>
              <button class="btn-md-dark jill-addform-btn">發送請求</button>
              <Link to="./NormalIndex">
                <button class="btn-md-dark jill-addform-btn">關閉</button>
              </Link>
            </div>
          </div>
          {/* <!-- 看書的人svg --> */}
          <div class="jill-edit-svg-fix jill-check-status-svg">
            <ReadingImg />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(SendIWantChange)
