import '../styles/members-edit.scss'
import { Tabs, Tab } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import React, { useState } from 'react'
import { SVG_FACES } from '../constants'
import EditTab1 from '../components/EditTab1'
import EditTab2 from '../components/EditTab2'
import EditTab3 from '../components/EditTab3'
import EditTab4 from '../components/EditTab4'

function Edit() {
  const [curFace, setCurFace] = useState(0)

  return (
    <>
      {/* 麵包屑 */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb yu-edit-breadcrumb">
          <li className="breadcrumb-honki">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-honki">
            <Link to="/menu">會員中心</Link>
          </li>
          <li className="breadcrumb-honki active" aria-current="page">
            個人資料修改
          </li>
        </ol>
      </nav>
      {/* <!-- 紅圓點 --> */}
      <div className="yu-edit-redpoint"></div>

      {/* <!-- 欄位 --> */}
      <div className="container my-5">
        <div className="row d-flex justify-content-between">
          {/* 左欄 */}
          <div className="col-3">
            {/* <!-- 標題 --> */}
            <div className="yu-edit-member-menu">
              <h5>會員中心</h5>
            </div>
            <div className="yu-edit-member-photo-bg">
              {/* <!-- 個人頭貼-bg --> */}
              <img
                src="http://localhost:3000/images/yu/peepsphotos/24terms/term1.jpg"
                alt=""
              />
            </div>
            <div className="yu-edit-member-photo-hair">
              {/* <!-- 個人頭貼-hair --> */}
              <img
                src="http://localhost:3000/images/yu/peepsphotos/hair/4Medium Bangs 3.svg"
                alt=""
              />
            </div>
            <div className="yu-edit-member-photo-face">
              {/* <!-- 個人頭貼-face --> */}
              <img src={SVG_FACES[curFace]} alt="" />
            </div>
            <div className="yu-edit-member-photo-cloth">
              {/* <!-- 個人頭貼-cloth --> */}
              <img
                src="http://localhost:3000/images/yu/peepsphotos/cloth/Tee 1.svg"
                alt=""
              />
            </div>

            <div>
              {/* <!-- 會員等級 --> */}
              <div className="yu-edit-general-member">一般會員</div>
              {/* <!-- 歡迎詞 --> */}
              <div className="yu-edit-greeting">哈囉，歡迎回來</div>
            </div>
            {/* <!-- 右欄 --> */}
          </div>
          {/* 右欄 */}
          <div className="col-9 yu-edit-tab">
            {/* <!-- 會員總表收合選單 --> */}
            <div className="holder d-none d-lg-block mx-auto yu-edit-panels">
              <Tabs defaultActiveKey="yu-edit-1" id="uncontrolled-tab-example">
                <Tab eventKey="yu-edit-1" title="修改個人資料">
                  <EditTab1 />
                </Tab>
                <Tab eventKey="yu-edit-2" title="修改密碼">
                  <EditTab2 />
                </Tab>
                <Tab eventKey="yu-edit-3" title="修改節氣頭貼">
                  <EditTab3
                    onChangeFace={(value) => {
                      setCurFace(value)
                    }}
                  />
                </Tab>
                <Tab eventKey="yu-edit-4" title="刪除帳號">
                  <EditTab4 />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(Edit)
