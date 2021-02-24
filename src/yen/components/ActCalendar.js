import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import SvgYellowBug from './svg/SvgYellowBug'
import SvgArrowRight from './svg/SvgArrowRight'

class ActCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDay: '',
      currentMonth: '',
      currentYear: '',
      //   weekList: [
      //     { name: '一', className: '' },
      //     { name: '二', className: '' },
      //     { name: '三', className: '' },
      //     { name: '四', className: '' },
      //     { name: '五', className: '' },
      //     { name: '六', className: '' },
      //     { name: '日', className: '' },
      //   ],
      dayList: [],
    }

    this.initCalendar = this.initCalendar.bind(this)
    // this.renderHeader = this.renderHeader.bind(this)
    this.renderBody = this.renderBody.bind(this)
    this.preMonth = this.preMonth.bind(this)
    this.nextMonth = this.nextMonth.bind(this)
    console.log('this state', this.state)
    console.log('this', this)
  }

  componentWillMount() {
    // style.use() // 需要配置loader 可以直接注释 忽略掉  实现每个模块卸载之后 css也会销毁 可以看之前写的一篇react css局部作用域的文章
  }

  componentWillUnmount() {
    // style.unuse() // 需要配置loader 可以直接注释 忽略掉 实现每个模块卸载之后 css也会销毁 可以看之前写的一篇react css局部作用域的文章
  }

  componentDidMount() {
    this.initCalendar()
  }

  // 获取当前date的当月第一天的字符串形式
  getMonthFirstDate(date) {
    let nowYear = date.getFullYear() // 获取年份
    let nowMonth = date.getMonth() + 1 // 获取月份
    return `${nowYear}-${nowMonth}-01`
  }

  // 获取当前date的字符串形式
  getDateString(date) {
    let nowYear = date.getFullYear() // 获取年份
    let nowMonth = date.getMonth() + 1 // 获取月份
    let day = date.getDate()
    day = day < 10 ? '0' + day : day
    return `${nowYear}-${nowMonth}-${day}`
  }

  // 上个月
  preMonth() {
    let date = new Date(
      `${this.state.currentYear}-${this.state.currentMonth}-${this.state.currentDay}`
    )
    let preMonthFirstDate = new Date(
      this.getMonthFirstDate(new Date(date.setDate(0)))
    ) // 0 是上个月最后一天
    this.initCalendar(preMonthFirstDate)
  }

  // 下个月
  nextMonth() {
    let date = new Date(
      `${this.state.currentYear}-${this.state.currentMonth}-${this.state.currentDay}`
    )
    let nextMonthFirstDate = new Date(
      this.getMonthFirstDate(new Date(date.setDate(33)))
    )
    this.initCalendar(nextMonthFirstDate)
  }

  // 初始化日历
  initCalendar(currentDate) {
    let nowDate = currentDate ? currentDate : new Date()
    let nowMonthFirstDate = this.getMonthFirstDate(nowDate) // 获取当月1号日期
    let nowWeek = new Date(nowMonthFirstDate).getDay()
      ? new Date(nowMonthFirstDate).getDay()
      : 7 // 获取星期
    let newDateList = [] // 创建日期数组
    let startDay = 2 - nowWeek // 开始日期的下标  以为 setDate(0)是上个月最后一天  所以是2-nowWeek

    let showDayLength = nowWeek < 6 ? 36 : 36 // 如果5行能显示下一个月 就只显示5行
    // 循环处理 获取日历上应该显示的日期
    for (let i = startDay; i < startDay + showDayLength; i++) {
      let date = new Date(new Date(nowMonthFirstDate).setDate(i)) // 获取时间对象
      let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 小于9的数字前面加0
      let dayObject = {
        date: this.getDateString(date),
        day,
        className: '',
      }
      // new Date(str).toDateString() === new Date().toDateString()
      if (date.toDateString() === new Date().toDateString()) {
        dayObject.className = 'today'
      }
      newDateList.push(dayObject)
    }

    this.setState((pre) => {
      return {
        dayList: newDateList,
        currentDay: nowDate.getDate(),
        currentMonth:
          nowDate.getMonth() + 1 >= 10
            ? nowDate.getMonth() + 1
            : '0' + (nowDate.getMonth() + 1),
        currentYear: nowDate.getFullYear(),
      }
    })
  }

  renderHeader() {
    return (
      <div>
        {this.state.currentMonth}
        <br />月
      </div>
    )
  }

  renderBody() {
    return (
      <div className="yen-signup-calendar-day">
        {this.state.dayList.map((dayObject, index) => {
          return (
            <div className="yen-signup-calendar-date">
              <div key={index}>{dayObject.day}</div>
            </div>
          )
        })}
      </div>
    )
  }

  renderArrowRight() {
    return (
      <div className="yen-signup-arrow-right" onClick={this.preMonth}>
        <SvgArrowRight />
      </div>
    )
  }

  renderArrowLeft() {
    return (
      <div className="yen-signup-arrow-left" onClick={this.nextMonth}>
        <SvgArrowRight />
      </div>
    )
  }

  render() {
    return (
      <div className="yen-calendar">
        <div className="yen-signup-moon-box">
          <div className="yen-signup-moon">
            <div className="yen-signup-moon-month"></div>
            <div className="yen-signup-moon-text">{this.renderHeader()}</div>
            <div className="yen-yellow-bug">
              <SvgYellowBug />
            </div>
          </div>
        </div>

        <div className="yen-signup-calendar-box">
          {this.renderBody()}
          <div className="yen-signup-arrow-box">
            {/* <div className="yen-signup-arrow-right">
              <SvgArrowRight />
            </div> */}
            {this.renderArrowRight()}
            {this.renderArrowLeft()}
            {/* <div className="yen-signup-arrow-left">
              <SvgArrowRight />
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ActCalendar)
