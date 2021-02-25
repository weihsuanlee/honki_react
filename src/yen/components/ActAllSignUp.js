import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
// import $ from 'jquery'

import '../styles/yen-allsignup.scss'
import SvgPencil from './svg/SvgPencil'
import SvgCheckFormArrow from './svg/SvgCheckFormArrow'
import ActCalendar from './ActCalendar'

function ActAllSignUp(props) {
  moment.locale('zh-tw', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
      '_'
    ),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
      '_'
    ),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'Ah點mm分',
      LTS: 'Ah點m分s秒',
      L: 'YYYY-MM-DD',
      LL: 'YYYY年MMMD日',
      LLL: 'YYYY年MMMD日Ah點mm分',
      LLLL: 'YYYY年MMMD日ddddAh點mm分',
      l: 'YYYY-MM-DD',
      ll: 'YYYY年MMMD日',
      lll: 'YYYY年MMMD日Ah點mm分',
      llll: 'YYYY年MMMD日ddddAh點mm分',
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (h, meridiem) {
      let hour = h
      if (hour === 12) {
        hour = 0
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12
      } else {
        // '中午'
        return hour >= 11 ? hour : hour + 12
      }
    },
    meridiem: function (hour, minute, isLower) {
      const hm = hour * 100 + minute
      if (hm < 600) {
        return '凌晨'
      } else if (hm < 900) {
        return '早上'
      } else if (hm < 1130) {
        return '上午'
      } else if (hm < 1230) {
        return '中午'
      } else if (hm < 1800) {
        return '下午'
      } else {
        return '晚上'
      }
    },
    calendar: {
      sameDay: function () {
        return this.minutes() === 0 ? '[今天]Ah[點整]' : '[今天]LT'
      },
      nextDay: function () {
        return this.minutes() === 0 ? '[明天]Ah[點整]' : '[明天]LT'
      },
      lastDay: function () {
        return this.minutes() === 0 ? '[昨天]Ah[點整]' : '[昨天]LT'
      },
      nextWeek: function () {
        let startOfWeek, prefix
        startOfWeek = moment().startOf('week')
        prefix = this.diff(startOfWeek, 'days') >= 7 ? '[下]' : '[本]'
        return this.minutes() === 0 ? prefix + 'dddA點整' : prefix + 'dddAh點mm'
      },
      lastWeek: function () {
        let startOfWeek, prefix
        startOfWeek = moment().startOf('week')
        prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]'
        return this.minutes() === 0
          ? prefix + 'dddAh點整'
          : prefix + 'dddAh點mm'
      },
      sameElse: 'LL',
    },
    ordinalParse: /\d{1,2}(日|月|周)/,
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日'
        case 'M':
          return number + '月'
        case 'w':
        case 'W':
          return number + '周'
        default:
          return number
      }
    },
    relativeTime: {
      future: '%s内',
      past: '%s前',
      s: '幾秒',
      m: '1 分鐘',
      mm: '%d 分鐘',
      h: '1 小時',
      hh: '%d 小時',
      d: '1 天',
      dd: '%d 天',
      M: '1 個月',
      MM: '%d 個月',
      y: '1 年',
      yy: '%d 年',
    },
    week: {
      // GB/T 7408-1994《數據和交換格式·信息交換·日期和時間表示法》與ISO 8601：1988等效
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
  })
  const userId = localStorage.getItem('userId')
  console.log('userId', userId)
  // const [orderLists, setOrderLists] = useState([])
  const { orderLists, setOrderLists } = props
  const [orderDetail, setOrderDetail] = useState('')
  // const [allActTime, setAllActTime] = useState([])

  function orderDetailButtonClick(orderNumber) {
    console.log('orderNumber', orderNumber)
    setOrderDetail(orderNumber)
    console.log('orderDetail', orderDetail)
    // props.history.push('/menu/eventorder/' + orderDetail)
  }

  // 查看訂單
  // TODO: 不確定能不能用postOrderDetailFromServer()的資料直接進查看訂單區塊
  // 載入會員訂單
  // useEffect(() => {
  //   postOrderDetailFromServer()
  //   const orderDetailCard = (
  //     <>
  //       {orderLists.rows &&
  //         orderLists.rows.map((value, index) => {
  //           return (
  //             <div className="yen-check-list">
  //               <div className="yen-signup-check-box">
  //                 <div className="yen-signup-check-bg">
  //                   <div className="yen-signup-check-num">
  //                     <h5>報名單號：{value.order_number}</h5>
  //                     <div className="yen-signup-check-pencil">
  //                       <SvgPencil />
  //                     </div>
  //                   </div>
  //                   <div className="yen-signup-check-form">
  //                     <div className="yen-check-form-list">
  //                       <div className="yen-check-form-title">
  //                         <span>活動名稱</span>
  //                         <div className="yen-check-form-arrow">
  //                           <SvgCheckFormArrow />
  //                         </div>
  //                       </div>
  //                       <div className="yen-check-form-title-des">
  //                         <span>{value.bookname}</span>
  //                       </div>
  //                     </div>
  //                     <div className="yen-check-form-list-box">
  //                       <div className="yen-check-form-li-title">
  //                         <span>活動時間</span>
  //                         <div className="yen-check-form-li-arrow">
  //                           <SvgCheckFormArrow />
  //                         </div>
  //                       </div>
  //                       <div className="yen-check-form-title-des">
  //                         <span>{moment(value.act_time).format('lll')}</span>
  //                       </div>
  //                     </div>
  //                     <div className="yen-check-form-list-box">
  //                       <div className="yen-check-form-li-title">
  //                         <span>費用</span>
  //                         <div className="yen-check-form-li-arrow">
  //                           <SvgCheckFormArrow />
  //                         </div>
  //                       </div>
  //                       <div className="yen-check-form-title-des">
  //                         <span>{value.price}</span>
  //                       </div>
  //                     </div>
  //                     <div className="yen-check-form-list-box">
  //                       <div className="yen-check-form-li-title">
  //                         <span>姓名</span>
  //                         <div className="yen-check-form-li-arrow">
  //                           <SvgCheckFormArrow />
  //                         </div>
  //                       </div>
  //                       <div className="yen-check-form-title-des">
  //                         <span>{value.name}</span>
  //                       </div>
  //                     </div>
  //                     <div className="yen-check-form-list-box">
  //                       <div className="yen-check-form-li-title">
  //                         <span>連絡電話</span>
  //                         <div className="yen-check-form-li-arrow">
  //                           <SvgCheckFormArrow />
  //                         </div>
  //                       </div>
  //                       <div className="yen-check-form-title-des">
  //                         <span>{value.mobile}</span>
  //                       </div>
  //                     </div>
  //                     <div className="yen-check-form-list-box">
  //                       <div className="yen-check-form-li-title">
  //                         <span>電子信箱</span>
  //                         <div className="yen-check-form-li-arrow">
  //                           <SvgCheckFormArrow />
  //                         </div>
  //                       </div>
  //                       <div className="yen-check-form-title-des">
  //                         <span>{value.email}</span>
  //                       </div>
  //                     </div>
  //                     <div className="yen-check-form-list-box">
  //                       <div className="yen-check-form-li-title">
  //                         <span>出生年月日</span>
  //                         <div className="yen-check-form-li-arrow">
  //                           <SvgCheckFormArrow />
  //                         </div>
  //                       </div>
  //                       <div className="yen-check-form-title-des">
  //                         <span>
  //                           {moment(value.birthday).format('YYYY-MM-DD')}
  //                         </span>
  //                       </div>
  //                     </div>
  //                     <div className="yen-check-form-list-box">
  //                       <div className="yen-check-form-li-title">
  //                         <span>性別</span>
  //                         <div className="yen-check-form-li-arrow">
  //                           <SvgCheckFormArrow />
  //                         </div>
  //                       </div>
  //                       <div className="yen-check-form-title-des">
  //                         <span>{value.gender}</span>
  //                       </div>
  //                     </div>
  //                     <div className="yen-back-btn">
  //                       <button
  //                         className="btn-rounded-dark"
  //                         onClick={() => {
  //                           props.history.goBack()
  //                         }}
  //                       >
  //                         回上頁
  //                       </button>
  //                     </div>
  //                     <div className="yen-check-cancel-btn">
  //                       <button className="btn-rounded-light yen-check-cancel-btn-bg ">
  //                         取消報名
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           )
  //         })}
  //     </>
  //   )
  // }, [orderDetail])

  async function postOrderDetailFromServer() {
    const url = 'http://localhost:3333/member/actorder'

    // header的資料格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
      }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('response', response)
    console.log('order data', data)
    setOrderLists(data)
  }

  const orderCard = (
    <>
      {orderLists.rows &&
        orderLists.rows.map((value, index) => {
          const pic =
            'http://localhost:3000/images/yen/event/' +
            value.bookname +
            '/0.jpg'
          const orderNumberBtn = value.order_number
          return (
            <div className="yen-signup-select-box" key={index}>
              <div className="yen-signup-act-img">
                <img src={pic} alt="" />
              </div>
              <div className="yen-signup-act-des">
                <div className="yen-signup-num">
                  報名單號：{value.order_number}
                </div>
                <div className="yen-signup-sub">{value.bookname}</div>
                <div className="yen-signup-time">
                  活動時間：{moment(value.act_time).format('lll')}
                </div>
                <div className="yen-signup-location">
                  活動地點：{value.act_location}
                </div>
                <div className="yen-signup-btn">
                  <button
                    className="btn-md-dark yen-signup-check"
                    onClick={() => {
                      orderDetailButtonClick(orderNumberBtn)
                      // console.log('Click', orderNumberBtn)
                    }}
                  >
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
          )
        })}
    </>
  )

  useEffect(() => {
    postOrderDetailFromServer()
  }, [])

  return (
    <>
      <div className="yen-signup-showbox">
        <div className="yen-signup-showbox-bg">
          <ActCalendar orderLists={orderLists} />
          <div className="yen-signup-list">{orderCard}</div>
          {/* <div className="yen-check-list">{orderDetailCard}</div> */}
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

export default withRouter(ActAllSignUp)
