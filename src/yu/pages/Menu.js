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
import { Link } from 'react-router-dom'
import SvgYellowBug from '../../yen/components/svg/SvgYellowBug'
import SvgArrowRight from '../../yen/components/svg/SvgArrowRight'

function Menu() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb yu-menu-breadcrumb">
          <li class="breadcrumb-honki">
            <Link to="/">首頁</Link>
          </li>
          <li class="active" aria-current="page">
            會員中心
          </li>
        </ol>
      </nav>
      {/* <!-- 紅圓點 --> */}
      <div class="yu-menu-redpoint"></div>

      {/* <!-- 標題欄 --> */}
      <div className="container-fluid my-5">
        <div className="row d-flex">
          {/* <!-- 標題 --> */}
          <div class="yu-menu-member-menu">
            <h5>會員中心</h5>
          </div>
          <div class="yu-menu-member-photo">
            <div class="yu-menu-member-photo-bg">
              {/* <!-- 個人頭貼-bg --> */}
              <img
                src="http://localhost:3000/images/yu/peepsphotos/24terms/term1.jpg"
                alt=""
              />
            </div>
            <div class="yu-menu-member-photo-hair">
              {/* <!-- 個人頭貼-hair --> */}
              <img
                src="http://localhost:3000/images/yu/peepsphotos/hair/4Medium Bangs 3.svg"
                alt=""
              />
            </div>
            <div class="yu-menu-member-photo-face">
              {/* <!-- 個人頭貼-face --> */}
              <img
                src="http://localhost:3000/images/yu/peepsphotos/face/Smile.svg"
                alt=""
              />
            </div>
            <div class="yu-menu-member-photo-cloth">
              {/* <!-- 個人頭貼-cloth --> */}
              <img
                src="http://localhost:3000/images/yu/peepsphotos/cloth/Tee 1.svg"
                alt=""
              />
            </div>
          </div>
          <div className="yu-menu-general">
            {/* <!-- 會員等級 --> */}
            <div class="yu-menu-general-member">一般會員</div>
            {/* <!-- 歡迎詞 --> */}
            <div class="yu-menu-greeting">哈囉，歡迎回來</div>
          </div>
        </div>
      </div>

      {/* <!-- 會員總表收合選單 --> */}
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-center">
          <div className="holder d-none d-lg-block mx-auto yu-menu-panels">
            <Tabs defaultActiveKey="yu-menu-1" id="uncontrolled-tab-example">
              <Tab eventKey="yu-menu-1" title="會員總表">
                <div class="yu-menu-col-2">
                  {/* <!-- 我的帳戶 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaAddressCard className="far fa-address-card yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">我的帳戶</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">個人資料修改</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
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
                          <Link to="/">
                            <div className="yu-menu-links">節氣書櫃</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 我的收藏 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaEdit className="fas fa-edit yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">我的收藏</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 二手交換 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaBookOpen className="fas fa-book-open yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">二手交換</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 購物紀錄 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaCartPlus className="fas fa-cart-plus yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">購物紀錄</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 專屬優惠 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaBolt className="fas fa-bolt yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">專屬優惠</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 參與活動 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaChild className="fas fa-child yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">參與活動</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="yu-menu-2" title="購物紀錄">
                <div class="panel-title">購物紀錄</div>
                <p>
                  特色三、日本歷史專業團隊 ╳ 日語專業團隊，打造日語中高級閱讀力
                  融入N3~N1字彙及句型，藉由閱讀故事、聆聽音檔，培養中高級文章理解力、奠定日語表現根基。
                  「Nippon所藏」系列介紹： 專為中高級（N3~N1）日語學習者打造，EZ
                  Japan日語嚴選講座。 閱讀日本，或語言，或文化，或古典，或時尚。
                  用一雙眼，追逐日本的瞬息萬變、領略日本的傳承與創新。
                  「Nippon所藏」為你獻上日本的薈萃珍藏。
                </p>
              </Tab>
              <Tab eventKey="yu-menu-3" title="我的收藏">
                <div class="panel-title">我的收藏</div>
                <p>
                  特色三、日本歷史專業團隊 ╳ 日語專業團隊，打造日語中高級閱讀力
                  融入N3~N1字彙及句型，藉由閱讀故事、聆聽音檔，培養中高級文章理解力、奠定日語表現根基。
                  「Nippon所藏」系列介紹： 專為中高級（N3~N1）日語學習者打造，EZ
                  Japan日語嚴選講座。 閱讀日本，或語言，或文化，或古典，或時尚。
                  用一雙眼，追逐日本的瞬息萬變、領略日本的傳承與創新。
                  「Nippon所藏」為你獻上日本的薈萃珍藏。
                </p>
              </Tab>
              <Tab eventKey="yu-menu-4" title="專屬優惠">
                <div class="panel-title">專屬優惠</div>
                <p>
                  用一雙眼，追逐日本的瞬息萬變、領略日本的傳承與創新。
                  「Nippon所藏」為你獻上日本的薈萃珍藏。
                </p>
              </Tab>
              <Tab eventKey="yu-menu-5" title="二手交換">
                <div class="panel-title">二手交換</div>
                <p>
                  林潔珏、游翔皓、EZ Japan編輯部 游翔皓
                  <br />
                  日本關西學院大學日本語教育碩士。目前主要任教於文化大學推廣教育部，教授日文。內容有「初˙中級日本語」、「日語能力檢定試驗」、「日語中上級讀解」、「日本歷史」等課程。合著有『經典日劇100話：Nippon所藏8』、『日本歷史名人：Nippon所藏12』，並翻譯許多日語學習及考試用書。
                  著有《這個動作、那個情境、日語怎麼說？桃太郎的實用動詞組句，教你日語好到花瘋(附音檔)》同時也是人氣粉專「桃太郎的花瘋日文」版主。
                </p>
              </Tab>
              <Tab
                class="yen-signup-showbox"
                eventKey="yu-menu-6"
                title="參與活動"
              >
                <div className="yen-signup-showbox">
                  <div class="yen-signup-showbox-bg">
                    <div class="yen-signup-moon-box">
                      <div class="yen-signup-moon">
                        <div class="yen-signup-moon-month"></div>
                        <div class="yen-signup-moon-text">
                          三<br />月
                        </div>
                        <div class="yen-yellow-bug">
                          <SvgYellowBug />
                        </div>
                      </div>
                    </div>

                    <div class="yen-signup-calendar-box">
                      <div class="yen-signup-calendar-day-box">
                        <div class="yen-signup-calendar-day">
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">1</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">2</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">3</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">4</span>
                          </div>
                          <div class="yen-signup-calendar-date yen-signup-date-bg2">
                            <span class="yen-signup-calendar-text">5</span>
                            <div class="yen-signup-date">已報名</div>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">6</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">7</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">8</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">9</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">10</span>
                          </div>
                        </div>
                        <div class="yen-signup-calendar-day">
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">11</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">12</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">13</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">14</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">15</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">16</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">17</span>
                          </div>
                          <div class="yen-signup-calendar-date yen-signup-date-bg1">
                            <span class="yen-signup-calendar-text">18</span>
                            <div class="yen-signup-date">已報名</div>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">19</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">20</span>
                          </div>
                        </div>
                        <div class="yen-signup-calendar-day">
                          <div class="yen-signup-calendar-date yen-signup-calendar-slide">
                            <span class="yen-signup-calendar-text">21</span>
                            <span class="yen-signup-calendar-dete-l">31</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">22</span>
                          </div>
                          <div class="yen-signup-calendar-date yen-signup-date-bg1">
                            <span class="yen-signup-calendar-text">23</span>
                            <div class="yen-signup-date">已報名</div>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">24</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">25</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">26</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">27</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">28</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">29</span>
                          </div>
                          <div class="yen-signup-calendar-date">
                            <span class="yen-signup-calendar-text">30</span>
                          </div>
                        </div>
                      </div>
                      <div class="yen-signup-arrow-box">
                        <div class="yen-signup-arrow-right">
                          <SvgArrowRight />
                        </div>
                        <div class="yen-signup-arrow-left">
                          <SvgArrowRight />
                        </div>
                      </div>
                    </div>

                    <div class="yen-signup-list">
                      <div class="yen-signup-select-box">
                        <div class="yen-signup-act-img">
                          <img
                            src="http://localhost:3000/images/yen/hot/hot-2-w.jpg"
                            alt=""
                          />
                        </div>
                        <div class="yen-signup-act-des">
                          <div class="yen-signup-num">
                            報名單號：202101010012345
                          </div>
                          <div class="yen-signup-sub">
                            天地人學堂：如何獨立出版自己的書？獨立出版社實戰入門班：從出版流程、申請ISBN書號、編輯排版、封面設計、印書到鋪貨實戰課
                          </div>
                          <div class="yen-signup-time">
                            活動時間：2021年01月24日 14:00 ~ 15:30
                          </div>
                          <div class="yen-signup-location">
                            活動地點：台北市中正區重慶南路二段51號B1
                            （信誼好好生活廣場）
                          </div>
                          <div class="yen-signup-btn">
                            <button class="btn-md-dark yen-signup-check">
                              <i class="fas fa-edit"></i>
                              查看報名
                            </button>
                            <button class="btn-md-dark yen-signup-cancel">
                              <i class="fas fa-heart-broken"></i>
                              取消報名
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="yen-signup-select-li">
                        <div class="yen-signup-select-li-box">
                          <div class="yen-signup-num">
                            報名單號：202101010012345
                          </div>
                          <div class="yen-signup-sub">
                            天地人學堂：如何獨立出版自己的書？獨立出版社實戰入門班：從出版流程、申請ISBN書號、編輯排版、封面設計、印書到鋪貨實戰課
                          </div>
                          <div class="yen-signup-time yen-signup-time-pt">
                            活動時間：2021年01月24日 14:00 ~ 15:30
                          </div>
                        </div>
                      </div>
                      <div class="yen-signup-select-li">
                        <div class="yen-signup-select-li-box">
                          <div class="yen-signup-num">
                            報名單號：202101010012345
                          </div>
                          <div class="yen-signup-sub">
                            天地人學堂：如何獨立出版自己的書？獨立出版社實戰入門班：從出版流程、申請ISBN書號、編輯排版、封面設計、印書到鋪貨實戰課
                          </div>
                          <div class="yen-signup-time yen-signup-time-pt">
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
