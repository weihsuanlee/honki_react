import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// 二手書svg
import NormalBee from './../components/NormalBee'

class MyChangeBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '預設資料', ISBN: 'ISBN777' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // 這塊會執行componentDidUpdate的作用(因為setState)
  handleChange(event) {
    const { myrows } = this.props
    this.setState({ value: event.target.value })
    // 下面的5要怎麼抓到變數
    // this.setState({ ISBN: myrows[5].ISBN })

    // 還要研究!!只能變一次值的寫法，而且只抓到第一筆的資料(編號15會員第一筆)
    myrows.map((m, i) => this.setState({ ISBN: myrows[i].ISBN }))

    console.log()
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  // 與JS或JQ整合要在這邊，執行順序是class，再來render然後才是這區塊
  componentDidMount() {
    console.log('componentDidMount')
    // document.getElementById('clickme').addEventListener('click', function () {
    //   alert('你按到我了')
    // })
  }

  // 卸載
  componentWillUnmount() {
    console.log('componentWillUnmount')
    document
      .getElementById('clickme')
      .removeEventListener('click', function () {
        alert('再見')
      })
  }
  // 已經更新(從父母元件接收到props或setState才會觸發)
  componentDidUpdate() {
    console.log('componentDidUpdate')
    console.log('目前的狀態值是', this.state.value)
  }

  render() {
    // 若要解構賦值要寫在這裡，下面就可以不用打this.props開頭
    const { myrows } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        {/* <label>
          範例
          <select
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control formInput col-7"
            id="exampleFormControlSelect1"
          >
            {myrows.map((m, i) => (
              <option key={i}>{m.book_name}</option>
            ))}
          </select>
        </label>
        <p>您選擇的是：{this.state.value}</p>
        <p>您選擇的是：{this.state.ISBN}</p> */}

        <div className="jill-myNchangelist">
          <div className="form-group ">
            <div className="formItems row d-flex">
              <select
                value={this.state.value}
                onChange={this.handleChange}
                className="form-control formInput col-7"
                id="exampleFormControlSelect1"
              >
                {/* 成功的寫法在NormalIndex只能撈一筆的時候的寫法，myrows={mybook_rows} */}
                {myrows.map((m, i) => (
                  <option key={i}>{m.book_name}</option>
                ))}
              </select>
              <Link to="./NormalInsert">
                <button className="btn-md-dark jill-myNchange-add-btn">
                  新增
                </button>
              </Link>
            </div>
          </div>

          <div className="jill-myNchange-display d-flex">
            {/* 蜜蜂svg */}
            <NormalBee />
            <img
              src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
              alt=""
            />

            <ul className="">
              <div className="jill-underline"></div>
              <li>{this.state.ISBN}</li>
              <div className="jill-underline"></div>
              <li>{this.state.value}</li>
              <div className="jill-underline"></div>
              <li>5成新</li>
              <div className="jill-underline"></div>
              <li>無塗改</li>
              <div className="jill-underline"></div>
              <li>鄭瑪莉</li>
            </ul>
          </div>
          <Link to="./NormalEdit">
            <button className="btn-md-dark jill-normal-seemyList">查看</button>
          </Link>
        </div>

        {/* 要讓它後執行，或給預設值 ，要怎麼抓到myrows的索引值*/}
        {/* <p onChange={this.handleChange}>您的ISBN是：{myrows[5].ISBN}</p> */}

        {/* <button id="clickme">按我</button> */}
        {/* <input type="submit" value="Submit" /> */}
      </form>
    )
  }
}
// 預設屬性，用在跑出undefined的時候
MyChangeBooks.defaultProps = {
  myrows: '',
}

export default MyChangeBooks
