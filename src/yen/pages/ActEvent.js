// 套件
import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import moment from 'moment'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

// 引用/分頁
import '../styles/yen-event.scss'
import { FaMapMarkerAlt } from 'react-icons/fa'
import SvgCricket from '../components/svg/SvgCricket'
import SvgSignUpLadybug from '../components/svg/SvgSignUpLadybug'

function ActEvent(props) {
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

  const eventid = props.match.params.sid
  // console.log(props)
  const [actName, setName] = useState('')
  const [actTime, setActTime] = useState('')
  const [actLocation, setActLocation] = useState('')
  const [actPrice, setActPrice] = useState('')
  const [actAbout, setActAbout] = useState('')
  const [actTransportation, setActTransportation] = useState('')
  const [actNotice, setActNotice] = useState('')
  const [actCancel, setActCancel] = useState('')
  const [actPic, setActPic] = useState('')

  async function getEventDetailFromServer(eventid) {
    if (!eventid) return

    const url = 'http://localhost:3333/activity/event/' + eventid

    // header的資料格式
    const request = new Request(url, {
      method: 'GET',
      header: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)

    setName(data[0].act_name)
    setActTime(data[0].act_time)
    setActLocation(data[0].act_location)
    setActPrice(data[0].act_price)
    setActAbout(data[0].act_about)
    setActTransportation(data[0].act_transportation)
    setActNotice(data[0].act_notice)
    setActCancel(data[0].act_cancel_or_change)
    setActPic(
      'http://localhost:3000/images/yen/event/' + data[0].act_name + '/0.jpg'
    )
    console.log(actPic)
  }

  useEffect(() => {
    getEventDetailFromServer(eventid)
  }, [])

  return (
    <>
      <div className="yen-event-header">
        <nav aria-label="breadcrumb" className="yen-event-breadcrumb">
          <ol className="breadcrumb yen-breadcrumb-index">
            <li className="breadcrumb-honki">
              <Link to="/">首頁</Link>
            </li>
            <li className="breadcrumb-honki" aria-current="page">
              <Link to="/activity">活動講座</Link>
            </li>
            <li className="active" aria-current="page">
              {actName}
            </li>
          </ol>
        </nav>
        <div className="yen-event-header-box">
          <div className="yen-event-pic">
            <img src={actPic} alt="" />
          </div>
          <div className="yen-event-des">
            <div className="yen-event-location-logo">
              <FaMapMarkerAlt className="fas fa-map-marker-alt" />
            </div>
            <div className="yen-event-subject">
              <h5>{actName}</h5>
            </div>
            <div className="yen-event-date">
              <span>活動時間：{moment(actTime).format('lll')}</span>
            </div>
            <div className="yen-event-location">
              <span>活動地點：{actLocation}</span>
            </div>
            <div className="yen-event-des-bottom">
              <div className="yen-event-des-price">
                <div className="yen-event-nt">
                  <span>NT</span>
                </div>
                <div className="yen-event-money">
                  <span>{actPrice}</span>
                </div>
              </div>
              <div className="yen-event-signup">
                <button className="btn-md-dark yen-event-signup-btn">
                  我要報名
                </button>
              </div>
            </div>
          </div>
          <div className="yen-event-cricket">
            <SvgCricket />
          </div>
        </div>
      </div>

      {/*Tab套件：https://github.com/reactjs/react-tabs */}
      <div className="yen-event-body-box">
        <div className="yen-event-des-box">
          <Tabs className="yen-event-tags-box">
            <TabList className="yen-event-tag">
              <Tab className="yen-event-tag-des">活動介紹</Tab>
              <Tab className="yen-event-tag-trans">交通方式</Tab>
              <Tab className="yen-event-tag-att">注意事項</Tab>
              <Tab className="yen-event-tag-cancel">更改或取消辦法</Tab>
            </TabList>

            <div className="yen-event-box">
              <div className="yen-event-text">
                <TabPanel>
                  <div
                    className="yen-event-text-inside"
                    dangerouslySetInnerHTML={{ __html: actAbout }}
                  ></div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="yen-event-text yen-event-trans"
                    dangerouslySetInnerHTML={{ __html: actTransportation }}
                  ></div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="yen-event-text yen-event-att"
                    dangerouslySetInnerHTML={{ __html: actNotice }}
                  ></div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="yen-event-text yen-event-cancel"
                    dangerouslySetInnerHTML={{ __html: actCancel }}
                  ></div>
                </TabPanel>
              </div>
            </div>
            <div className="yen-signup-ladybug">
              <SvgSignUpLadybug />
            </div>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default withRouter(ActEvent)
