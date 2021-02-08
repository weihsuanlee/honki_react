import '../styles/yen-allsignup.scss'
import SvgCircle from '../components/svg/SvgCircle'
import SvgYellowBug from '../components/svg/SvgYellowBug'
import SvgArrowRight from '../components/svg/SvgArrowRight'

function ActEvent() {
  return (
    <>
      <div class="yen-signup-header">
        <nav aria-label="breadcrumb" class="yen-signup-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-honki">
              <a href="#">首頁</a>
            </li>
            <li class="active" aria-current="page">
              會員中心
            </li>
            <li class="active" aria-current="page">
              參與活動
            </li>
          </ol>
        </nav>

        <div class="yen-signup-titlebox">
          <div class="yen-title-box d-flex">
            <div class="yen-circle">
              <SvgCircle />
            </div>
            <span class="yen-title-text">會員中心</span>
          </div>
          <div class="yen-signup-user">
            <div class="yen-sign-img-box">
              <div class="yen-user-pic"></div>
            </div>
            <div class="yen-user-right">
              <div class="yen-user-level">
                <button class="btn-sm-dark yen-user-level-btn">一般會員</button>
              </div>
              <div class="yen-user-text">哈囉 凱莉，歡迎回來</div>
            </div>
          </div>
        </div>

        <div class="yen-signup-body">
          <div class="yen-signup-tag">
            <div class="yen-signup-tag-box">
              <span>我的帳戶</span>
            </div>
            <div class="yen-signup-tag-box">
              <span>購物車</span>
            </div>
            <div class="yen-signup-tag-box">
              <span>我的心得</span>
            </div>
            <div class="yen-signup-tag-box">
              <span>專屬優惠</span>
            </div>
            <div class="yen-signup-tag-box">
              <span>二手書交換</span>
            </div>
            <div class="yen-signup-act">
              <span>參與活動</span>
            </div>
          </div>

          <div class="yen-signup-showbox">
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
                    <div class="yen-signup-num">報名單號：202101010012345</div>
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
                        &ensp;查看報名
                      </button>
                      <button class="btn-md-dark yen-signup-cancel">
                        <i class="fas fa-heart-broken"></i>
                        &ensp;取消報名
                      </button>
                    </div>
                  </div>
                </div>
                <div class="yen-signup-select-li">
                  <div class="yen-signup-select-li-box">
                    <div class="yen-signup-num">報名單號：202101010012345</div>
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
                    <div class="yen-signup-num">報名單號：202101010012345</div>
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
        </div>
      </div>
    </>
  )
}

export default ActEvent
