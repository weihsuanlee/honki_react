import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import moment from 'moment'
// import $ from 'jquery'

import '../styles/yen-allsignup.scss'
import '../styles/yen-check.scss'
import SvgPencil from './svg/SvgPencil'
import SvgCheckFormArrow from './svg/SvgCheckFormArrow'
import SvgQQ from './svg/SvgQQ'
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
  // console.log('userId', userId)
  const [orderLists, setOrderLists] = useState([])
  const [orderDetail, setOrderDetail] = useState('')
  const [checkDetail, setCheckDetail] = useState(false)
  const [backToOrder, setBackToOrder] = useState(true)
  const [deleteOrder, setDeleteOrder] = useState(null)
  // const [noOrder, setNoOrder] = useState([])
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  function handleCloseClick(whichClose) {
    console.log(whichClose)
    if (whichClose === 'closeAlert') {
      handleClose()
    }
    if (whichClose === 'deleteOrder') {
      deleteOrderOnServer()
      handleClose()
    }
  }

  function deleteButtonClick(deleteOrderNum) {
    console.log('deleteOrderNum', deleteOrderNum)
    setDeleteOrder(deleteOrderNum)
    handleShow()
  }

  function orderDetailButtonClick(orderNumber) {
    console.log('orderNumber', orderNumber)
    setOrderDetail(orderNumber)
    console.log('orderDetail', orderDetail)
  }

  function checkDetailBtnClick() {
    checkDetail ? setCheckDetail(false) : setCheckDetail(true)
    setBackToOrder(false)
    console.log('checkDetail 1', checkDetail)
    console.log('backToOrder 1', backToOrder)
  }

  function backToOrderBtnClick() {
    backToOrder ? setBackToOrder(false) : setBackToOrder(true)
    setCheckDetail(false)
    console.log('checkDetail 2', checkDetail)
    console.log('backToOrder 2', backToOrder)
  }

  async function deleteOrderOnServer() {
    const url = 'http://localhost:3333/member/actorder/' + deleteOrder
    console.log('url', url)
    // header的資料格式
    const request = new Request(url, {
      method: 'DELETE',
    })

    const response = await fetch(request)
    console.log('response', response)
    backToOrderBtnClick()
  }

  // 刪除後重新取得列表
  useEffect(() => {
    postOrderDetailFromServer()
  }, [show, deleteOrder])

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
    // console.log('response', response)
    console.log('order data', data)
    setOrderLists(data)
    // setNoOrder(orderLists)
    console.log('orderLists', orderLists)
    // console.log('NoOrder', noOrder)
  }

  const noOrders = (
    <>
      <div className="yen-no-order-box">
        <div className="yen-no-order-text">
          <h5>您還沒有參加活動喔</h5>
        </div>
        <div className="yen-no-order-QQ">
          <SvgQQ />
        </div>
      </div>
    </>
  )

  const orderCard = (
    <>
      {orderLists.rows &&
        orderLists.rows.map((value, index) => {
          const pic =
            'http://localhost:3000/images/yen/event/' +
            value.bookname +
            '/0.jpg'
          const orderNumberBtn = value.order_number
          const deleteOrderNum = value.order_sid

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
                      checkDetailBtnClick()
                      // console.log('Click', orderNumberBtn)
                    }}
                  >
                    <i className="fas fa-edit"></i>
                    查看報名
                  </button>
                  <button
                    className="btn-md-dark yen-signup-cancel"
                    onClick={() => {
                      deleteButtonClick(deleteOrderNum)
                    }}
                  >
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

  const orderDetailCard = (
    <>
      {orderLists.rows &&
        orderLists.rows.map((value, index) => {
          if (value.order_number !== orderDetail) return
          const deleteOrderNum = value.order_sid
          return (
            <div className="yen-signup-check-box">
              <div className="yen-signup-check-bg">
                <div className="yen-signup-check-num">
                  <h5>報名單號：{value.order_number}</h5>
                  <div className="yen-signup-check-pencil">
                    <SvgPencil />
                  </div>
                </div>
                <div className="yen-signup-check-form">
                  <div className="yen-check-form-list">
                    <div className="yen-check-form-title">
                      <span>活動名稱</span>
                      <div className="yen-check-form-arrow">
                        <SvgCheckFormArrow />
                      </div>
                    </div>
                    <div className="yen-check-form-title-des">
                      <span>{value.bookname}</span>
                    </div>
                  </div>
                  <div className="yen-check-form-list-box">
                    <div className="yen-check-form-li-title">
                      <span>活動時間</span>
                      <div className="yen-check-form-li-arrow">
                        <SvgCheckFormArrow />
                      </div>
                    </div>
                    <div className="yen-check-form-title-des">
                      <span>{moment(value.act_time).format('lll')}</span>
                    </div>
                  </div>
                  <div className="yen-check-form-list-box">
                    <div className="yen-check-form-li-title">
                      <span>費用</span>
                      <div className="yen-check-form-li-arrow">
                        <SvgCheckFormArrow />
                      </div>
                    </div>
                    <div className="yen-check-form-title-des">
                      <span>{value.price}</span>
                    </div>
                  </div>
                  <div className="yen-check-form-list-box">
                    <div className="yen-check-form-li-title">
                      <span>姓名</span>
                      <div className="yen-check-form-li-arrow">
                        <SvgCheckFormArrow />
                      </div>
                    </div>
                    <div className="yen-check-form-title-des">
                      <span>{value.name}</span>
                    </div>
                  </div>
                  <div className="yen-check-form-list-box">
                    <div className="yen-check-form-li-title">
                      <span>連絡電話</span>
                      <div className="yen-check-form-li-arrow">
                        <SvgCheckFormArrow />
                      </div>
                    </div>
                    <div className="yen-check-form-title-des">
                      <span>{value.mobile}</span>
                    </div>
                  </div>
                  <div className="yen-check-form-list-box">
                    <div className="yen-check-form-li-title">
                      <span>電子信箱</span>
                      <div className="yen-check-form-li-arrow">
                        <SvgCheckFormArrow />
                      </div>
                    </div>
                    <div className="yen-check-form-title-des">
                      <span>{value.email}</span>
                    </div>
                  </div>
                  <div className="yen-check-form-list-box">
                    <div className="yen-check-form-li-title">
                      <span>出生年月日</span>
                      <div className="yen-check-form-li-arrow">
                        <SvgCheckFormArrow />
                      </div>
                    </div>
                    <div className="yen-check-form-title-des">
                      <span>{moment(value.birthday).format('YYYY-MM-DD')}</span>
                    </div>
                  </div>
                  <div className="yen-check-form-list-box">
                    <div className="yen-check-form-li-title">
                      <span>性別</span>
                      <div className="yen-check-form-li-arrow">
                        <SvgCheckFormArrow />
                      </div>
                    </div>
                    <div className="yen-check-form-title-des">
                      <span>{value.gender}</span>
                    </div>
                  </div>
                  <div className="yen-back-btn">
                    <button
                      className="btn-rounded-dark"
                      onClick={() => {
                        backToOrderBtnClick()
                      }}
                    >
                      &larr; &ensp;回上頁
                    </button>
                  </div>
                  <div className="yen-check-cancel-btn">
                    <button
                      className="btn-rounded-light yen-check-cancel-btn-bg"
                      onClick={() => {
                        deleteButtonClick(deleteOrderNum)
                      }}
                    >
                      &times; &ensp;取消報名
                    </button>
                  </div>
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

  // console.log('NoOrder 11', noOrder)

  if (orderLists.length === 0) {
    return (
      <>
        <div className="yen-signup-showbox">
          <div className="yen-signup-showbox-bg">
            <ActCalendar orderLists={orderLists} />
            <div className="yen-signup-list">{noOrders}</div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="yen-signup-showbox">
          <div className="yen-signup-showbox-bg">
            <ActCalendar orderLists={orderLists} />
            <div
              className="yen-signup-list"
              style={{ display: checkDetail === true ? 'none' : 'block' }}
              // style={{ display: 'none' }}
            >
              {orderCard}
            </div>
            <div
              className="yen-check-list"
              style={{ display: backToOrder === false ? 'block' : 'none' }}
              // style={{ display: 'none' }}
            >
              {orderDetailCard}
            </div>
            <div
              className="yen-signup-list"
              style={{
                display: orderLists.length === 0 ? 'block' : 'none',
              }}
            >
              {noOrders}
            </div>
          </div>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>取消報名</Modal.Title>
          </Modal.Header>
          <Modal.Body className="yen-alert-body">
            取消報名後就無法回復
            <br />
            請問您是否確認要取消報名？
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-secondary"
              className="yen-cancel"
              onClick={() => {
                const whichClose = 'closeAlert'
                handleCloseClick(whichClose)
              }}
            >
              關閉
            </Button>
            <Button
              variant="outline-danger"
              className="yen-delete"
              onClick={() => {
                const whichClose = 'deleteOrder'
                handleCloseClick(whichClose)
              }}
            >
              取消報名
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default withRouter(ActAllSignUp)
