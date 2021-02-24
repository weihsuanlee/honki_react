import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import $ from 'jquery'

import '../styles/yen-allsignup.scss'
// import SvgCircle from './svg/SvgCircle'
import SvgYellowBug from './svg/SvgYellowBug'
import SvgArrowRight from './svg/SvgArrowRight'

function ActEvent() {
  const [orderLists, setOrderLists] = useState([])
  $('#calendar').fullCalendar()

  return (
    <>
      <div className="yen-signup-showbox">
        <div className="yen-signup-showbox-bg">
          <div className="yen-signup-moon-box">
            <div className="yen-signup-moon">
              <div className="yen-signup-moon-month"></div>
              <div className="yen-signup-moon-text">
                三<br />月
              </div>
              <div className="yen-yellow-bug">
                <SvgYellowBug />
              </div>
            </div>
          </div>

          <div className="yen-signup-calendar-box">
            <div id="calender" className="yen-signup-calendar-day-box">
              <div className="yen-signup-calendar-day">
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">1</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">2</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">3</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">4</span>
                </div>
                <div className="yen-signup-calendar-date yen-signup-date-bg2">
                  <span className="yen-signup-calendar-text">5</span>
                  <div className="yen-signup-date">已報名</div>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">6</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">7</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">8</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">9</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">10</span>
                </div>
              </div>
              <div className="yen-signup-calendar-day">
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">11</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">12</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">13</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">14</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">15</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">16</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">17</span>
                </div>
                <div className="yen-signup-calendar-date yen-signup-date-bg1">
                  <span className="yen-signup-calendar-text">18</span>
                  <div className="yen-signup-date">已報名</div>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">19</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">20</span>
                </div>
              </div>
              <div className="yen-signup-calendar-day">
                <div className="yen-signup-calendar-date yen-signup-calendar-slide">
                  <span className="yen-signup-calendar-text">21</span>
                  <span className="yen-signup-calendar-dete-l">31</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">22</span>
                </div>
                <div className="yen-signup-calendar-date yen-signup-date-bg1">
                  <span className="yen-signup-calendar-text">23</span>
                  <div className="yen-signup-date">已報名</div>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">24</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">25</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">26</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">27</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">28</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">29</span>
                </div>
                <div className="yen-signup-calendar-date">
                  <span className="yen-signup-calendar-text">30</span>
                </div>
              </div>
            </div>
            <div className="yen-signup-arrow-box">
              <div className="yen-signup-arrow-right">
                <SvgArrowRight />
              </div>
              <div className="yen-signup-arrow-left">
                <SvgArrowRight />
              </div>
            </div>
          </div>

          <div className="yen-signup-list">
            <div className="yen-signup-select-box">
              <div className="yen-signup-act-img">
                <img
                  src="http://localhost:3000/images/yen/hot/hot-2-w.jpg"
                  alt=""
                />
              </div>
              <div className="yen-signup-act-des">
                <div className="yen-signup-num">報名單號：202101010012345</div>
                <div className="yen-signup-sub">
                  天地人學堂：如何獨立出版自己的書？獨立出版社實戰入門班：從出版流程、申請ISBN書號、編輯排版、封面設計、印書到鋪貨實戰課
                </div>
                <div className="yen-signup-time">
                  活動時間：2021年01月24日 14:00 ~ 15:30
                </div>
                <div className="yen-signup-location">
                  活動地點：台北市中正區重慶南路二段51號B1 （信誼好好生活廣場）
                </div>
                <div className="yen-signup-btn">
                  <button className="btn-md-dark yen-signup-check">
                    <i className="fas fa-edit"></i>
                    查看報名
                  </button>
                  <button className="btn-md-dark yen-signup-cancel">
                    <i className="fas fa-heart-broken"></i>
                    取消報名
                  </button>
                </div>
              </div>
            </div>
            <div className="yen-signup-select-li">
              <div className="yen-signup-select-li-box">
                <div className="yen-signup-num">報名單號：202101010012345</div>
                <div className="yen-signup-sub">
                  天地人學堂：如何獨立出版自己的書？獨立出版社實戰入門班：從出版流程、申請ISBN書號、編輯排版、封面設計、印書到鋪貨實戰課
                </div>
                <div className="yen-signup-time yen-signup-time-pt">
                  活動時間：2021年01月24日 14:00 ~ 15:30
                </div>
              </div>
            </div>
            <div className="yen-signup-select-li">
              <div className="yen-signup-select-li-box">
                <div className="yen-signup-num">報名單號：202101010012345</div>
                <div className="yen-signup-sub">
                  天地人學堂：如何獨立出版自己的書？獨立出版社實戰入門班：從出版流程、申請ISBN書號、編輯排版、封面設計、印書到鋪貨實戰課
                </div>
                <div className="yen-signup-time yen-signup-time-pt">
                  活動時間：2021年01月24日 14:00 ~ 15:30
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="yen-signup-header">
        <nav aria-label="breadcrumb" className="yen-signup-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-honki">
              <a href="#">首頁</a>
            </li>
            <li className="active" aria-current="page">
              會員中心
            </li>
            <li className="active" aria-current="page">
              參與活動
            </li>
          </ol>
        </nav>

        <div className="yen-signup-titlebox">
          <div className="yen-title-box d-flex">
            <div className="yen-circle">
              <SvgCircle />
            </div>
            <span className="yen-title-text">會員中心</span>
          </div>
          <div className="yen-signup-user">
            <div className="yen-sign-img-box">
              <div className="yen-user-pic"></div>
            </div>
            <div className="yen-user-right">
              <div className="yen-user-level">
                <button className="btn-sm-dark yen-user-level-btn">
                  一般會員
                </button>
              </div>
              <div className="yen-user-text">哈囉 凱莉，歡迎回來</div>
            </div>
          </div>
        </div>

        <div className="yen-signup-body">
          <div className="yen-signup-tag">
            <div className="yen-signup-tag-box">
              <span>我的帳戶</span>
            </div>
            <div className="yen-signup-tag-box">
              <span>購物車</span>
            </div>
            <div className="yen-signup-tag-box">
              <span>我的心得</span>
            </div>
            <div className="yen-signup-tag-box">
              <span>專屬優惠</span>
            </div>
            <div className="yen-signup-tag-box">
              <span>二手書交換</span>
            </div>
            <div className="yen-signup-act">
              <span>參與活動</span>
            </div>
          </div>

          <div className="yen-signup-showbox">
            <div className="yen-signup-showbox-bg">
              <div className="yen-signup-moon-box">
                <div className="yen-signup-moon">
                  <div className="yen-signup-moon-month"></div>
                  <div className="yen-signup-moon-text">
                    三<br />月
                  </div>
                  <div className="yen-yellow-bug">
                    <SvgYellowBug />
                  </div>
                </div>
              </div>

              <div className="yen-signup-calendar-box">
                <div className="yen-signup-calendar-day-box">
                  <div className="yen-signup-calendar-day">
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">1</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">2</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">3</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">4</span>
                    </div>
                    <div className="yen-signup-calendar-date yen-signup-date-bg2">
                      <span className="yen-signup-calendar-text">5</span>
                      <div className="yen-signup-date">已報名</div>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">6</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">7</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">8</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">9</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">10</span>
                    </div>
                  </div>
                  <div className="yen-signup-calendar-day">
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">11</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">12</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">13</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">14</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">15</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">16</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">17</span>
                    </div>
                    <div className="yen-signup-calendar-date yen-signup-date-bg1">
                      <span className="yen-signup-calendar-text">18</span>
                      <div className="yen-signup-date">已報名</div>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">19</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">20</span>
                    </div>
                  </div>
                  <div className="yen-signup-calendar-day">
                    <div className="yen-signup-calendar-date yen-signup-calendar-slide">
                      <span className="yen-signup-calendar-text">21</span>
                      <span className="yen-signup-calendar-dete-l">31</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">22</span>
                    </div>
                    <div className="yen-signup-calendar-date yen-signup-date-bg1">
                      <span className="yen-signup-calendar-text">23</span>
                      <div className="yen-signup-date">已報名</div>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">24</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">25</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">26</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">27</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">28</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">29</span>
                    </div>
                    <div className="yen-signup-calendar-date">
                      <span className="yen-signup-calendar-text">30</span>
                    </div>
                  </div>
                </div>
                <div className="yen-signup-arrow-box">
                  <div className="yen-signup-arrow-right">
                    <SvgArrowRight />
                  </div>
                  <div className="yen-signup-arrow-left">
                    <SvgArrowRight />
                  </div>
                </div>
              </div>

              <div className="yen-signup-list">
                <div className="yen-signup-select-box">
                  <div className="yen-signup-act-img">
                    <img
                      src="http://localhost:3000/images/yen/hot/hot-2-w.jpg"
                      alt=""
                    />
                  </div>
                  <div className="yen-signup-act-des">
                    <div className="yen-signup-num">
                      報名單號：202101010012345
                    </div>
                    <div className="yen-signup-sub">
                      天地人學堂：如何獨立出版自己的書？獨立出版社實戰入門班：從出版流程、申請ISBN書號、編輯排版、封面設計、印書到鋪貨實戰課
                    </div>
                    <div className="yen-signup-time">
                      活動時間：2021年01月24日 14:00 ~ 15:30
                    </div>
                    <div className="yen-signup-location">
                      活動地點：台北市中正區重慶南路二段51號B1
                      （信誼好好生活廣場）
                    </div>
                    <div className="yen-signup-btn">
                      <button className="btn-md-dark yen-signup-check">
                        <i className="fas fa-edit"></i>
                        &ensp;查看報名
                      </button>
                      <button className="btn-md-dark yen-signup-cancel">
                        <i className="fas fa-heart-broken"></i>
                        &ensp;取消報名
                      </button>
                    </div>
                  </div>
                </div>
                <div className="yen-signup-select-li">
                  <div className="yen-signup-select-li-box">
                    <div className="yen-signup-num">
                      報名單號：202101010012345
                    </div>
                    <div className="yen-signup-sub">
                      天地人學堂：如何獨立出版自己的書？獨立出版社實戰入門班：從出版流程、申請ISBN書號、編輯排版、封面設計、印書到鋪貨實戰課
                    </div>
                    <div className="yen-signup-time yen-signup-time-pt">
                      活動時間：2021年01月24日 14:00 ~ 15:30
                    </div>
                  </div>
                </div>
                <div className="yen-signup-select-li">
                  <div className="yen-signup-select-li-box">
                    <div className="yen-signup-num">
                      報名單號：202101010012345
                    </div>
                    <div className="yen-signup-sub">
                      天地人學堂：如何獨立出版自己的書？獨立出版社實戰入門班：從出版流程、申請ISBN書號、編輯排版、封面設計、印書到鋪貨實戰課
                    </div>
                    <div className="yen-signup-time yen-signup-time-pt">
                      活動時間：2021年01月24日 14:00 ~ 15:30
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default withRouter(ActEvent)
