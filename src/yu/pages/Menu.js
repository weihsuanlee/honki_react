import '../styles/members-menu.scss'
import {
  FaAddressCard,
  FaEdit,
  FaBookOpen,
  FaCartPlus,
  FaBolt,
  FaChild,
} from 'react-icons/fa'
import { Tabs, Tab } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SVG_FACES } from '../constants'
import { SVG_HAIR } from '../constants'
import { SVG_CLOTH } from '../constants'
import { SVG_ACC } from '../constants'
import { SVG_TERMS } from '../constants'

import SvgYellowBug from '../../yen/components/svg/SvgYellowBug'
import SvgArrowRight from '../../yen/components/svg/SvgArrowRight'
import FavoriteList from '../../wei/components/FavoriteList'

function Menu() {
  const [curFace, setCurFace] = useState(0)
  const [curHair, setCurHair] = useState(0)
  const [curCloth, setCurCloth] = useState(0)
  const [curAcc, setCurAcc] = useState(0)
  const [curTerms, setCurTerms] = useState(0)

  useEffect(() => {
    setCurFace(localStorage.getItem('curFace') || 0)
    setCurHair(localStorage.getItem('curHair') || 0)
    setCurCloth(localStorage.getItem('curCloth') || 0)
    setCurAcc(localStorage.getItem('curAcc') || 0)
    setCurTerms(localStorage.getItem('curTerms') || 0)
  }, [])

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb yu-menu-breadcrumb">
          <li className="breadcrumb-honki">
            <Link to="/">首頁</Link>
          </li>
          <li className="active" aria-current="page">
            會員中心
          </li>
        </ol>
      </nav>
      {/* <!-- 紅圓點 --> */}
      <div className="yu-menu-redpoint"></div>

      {/* <!-- 標題欄 --> */}
      <div className="container-fluid my-5">
        <div className="row d-flex">
          {/* <!-- 標題 --> */}
          <div className="yu-menu-member-menu">
            <h5>會員中心</h5>
          </div>
          <div className="yu-menu-member-photo">
            <div className="yu-menu-member-photo-bg">
              {/* <!-- 個人頭貼-bg --> */}
              <img src={SVG_TERMS[curTerms]} alt="" />
            </div>
            <div className="yu-menu-member-photo-hair">
              {/* <!-- 個人頭貼-hair --> */}
              <img src={SVG_HAIR[curHair]} alt="" />
            </div>
            <div className="yu-menu-member-photo-face">
              {/* <!-- 個人頭貼-face --> */}
              <img src={SVG_FACES[curFace]} alt="" />
            </div>
            <div className="yu-menu-member-photo-cloth">
              {/* <!-- 個人頭貼-cloth --> */}
              <img src={SVG_CLOTH[curCloth]} alt="" />
            </div>
            <div className="yu-menu-member-photo-acc">
              {/* <!-- 個人頭貼-acc --> */}
              <img src={SVG_ACC[curAcc]} alt="" />
            </div>
          </div>
          <div className="yu-menu-general">
            {/* <!-- 會員等級 --> */}
            <div className="yu-menu-general-member">一般會員</div>
            {/* <!-- 歡迎詞 --> */}
            <div className="yu-menu-greeting">哈囉，歡迎回來</div>
          </div>
        </div>
      </div>

      {/* <!-- 會員專區收合選單 --> */}
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-center">
          <div className="holder d-none d-lg-block mx-auto yu-menu-panels">
            <Tabs defaultActiveKey="yu-menu-1" id="uncontrolled-tab-example">
              <Tab eventKey="yu-menu-1" title="會員專區">
                <div className="yu-menu-col-2">
                  {/* <!-- 我的帳戶 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaAddressCard className="far fa-address-card yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">我的帳戶</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/edit?page=1">
                            <div className="yu-menu-links">個人資料修改</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/edit?page=2">
                            <div className="yu-menu-links">修改密碼</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">修改節氣頭貼</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">刪除帳號</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/bookshelf">
                            <div className="yu-menu-links">節氣書櫃</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 我的收藏 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaEdit className="fas fa-edit yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">我的收藏</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">我的心得</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">我的留言</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">回覆查詢</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">我的書單</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">過往收藏</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 二手交換 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaBookOpen className="fas fa-book-open yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">二手交換</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">一般交換</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">隨機交換</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">印製卡片</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">上傳書籍</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">交換狀況</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 購物紀錄 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaCartPlus className="fas fa-cart-plus yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">購物紀錄</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">我的訂單</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">購物紀錄</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">退貨查詢</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">出貨狀態</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">下次購買清單</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 專屬優惠 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaBolt className="fas fa-bolt yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">專屬優惠</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">優惠使用紀錄</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">折價券</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">購物金</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">帳戶餘額</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">到期日查詢</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 參與活動 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaChild className="fas fa-child yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">參與活動</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">活動講座</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">讀書會</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">戶外探索</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">休閒活動</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">節氣推薦</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="yu-menu-2" title="購物紀錄">
                <div className="panel-title">購物紀錄</div>
                <p>購物紀錄購物紀錄購物紀錄購物紀錄購物紀錄購物紀錄購物紀錄</p>
              </Tab>
              <Tab eventKey="yu-menu-3" title="我的收藏">
                <div className="panel-title">我的收藏</div>
                <FavoriteList />
              </Tab>
              <Tab eventKey="yu-menu-4" title="專屬優惠">
                <div className="panel-title">專屬優惠</div>
                <p>專屬優惠專屬優惠專屬優惠專屬優惠專屬優惠專屬優惠專屬優惠</p>
              </Tab>
              <Tab eventKey="yu-menu-5" title="二手交換">
                <div className="panel-title">二手交換</div>
                <p>二手交換二手交換二手交換二手交換二手交換二手交換二手交換</p>
              </Tab>
              <Tab
                className="yen-signup-showbox"
                eventKey="yu-menu-6"
                title="參與活動"
              >
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
                            <span className="yen-signup-calendar-dete-l">
                              31
                            </span>
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
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
