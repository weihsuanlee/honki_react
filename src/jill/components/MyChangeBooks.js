import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
// 二手書svg
import NormalBee from './../components/NormalBee'
// 抓取登入的userId(還沒用)
const userId = localStorage.getItem('userId')
class MyChangeBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book_name: '預設資料',
      ISBN: 'ISBN預設值',
      book_condition: '全新',
      written_or_not: '有無塗改',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // 這塊會執行componentDidUpdate的作用(因為setState)
  handleChange(event) {
    const { myrows, myrows1 } = this.props
    // this.setState({ value: event.target.value })
    // 下面的5要怎麼抓到變數
    // this.setState({ ISBN: myrows[5].ISBN })

    // 拷貝一個新的，展開成陣列
    const newMyrows = [...myrows]
    const newMyrows1 = [...myrows1]

    // 不行，ISBN變成Undefined
    const index = newMyrows.findIndex(
      (item) => item.ISBN === event.target.value
    )

    this.setState({ myrows: myrows[index], myrows1: myrows1 })
    // this.setState(myrows1[index1])

    console.log(myrows)
    console.log(myrows1)
    // 還要研究!!只能變一次值的寫法，而且只抓到第一筆的資料(編號15會員第一筆)
    // for (let i = 0; i < myrows.length; i++) {
    //   myrows.map((m, i) =>
    //     this.setState({
    //       ISBN: myrows[i].ISBN,
    //       book_condition: myrows[i].book_condition,
    //       written_or_not: myrows[i].written_or_not,
    //       nickname: myrows[i].nickname,
    //     })
    //   )
    // }
    // myrows.map((m, i) => this.setState({ ISBN: myrows[i].ISBN }))
    // myrows.map((m, i) =>
    //   this.setState({ book_condition: myrows[i].book_condition })
    // )
    // myrows.map((m, i) =>
    //   this.setState({ written_or_not: myrows[i].written_or_not })
    // )
    // myrows.map((m, i) => this.setState({ nickname: myrows[i].nickname }))

    console.log(newMyrows)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.myrows)
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
    // document
    //   .getElementById('clickme')
    //   .removeEventListener('click', function () {
    //     alert('再見')
    //   })
  }
  // 已經更新(從父母元件接收到props或setState才會觸發)
  componentDidUpdate() {
    console.log('componentDidUpdate')
    console.log('目前的狀態值是', this.state.myrows)
  }

  render() {
    // 若要解構賦值要寫在這裡，下面就可以不用打this.props開頭
    const { myrows } = this.props

    return (
      <>
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
                    <option key={i} value={m.ISBN}>
                      {m.book_name}
                    </option>
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
                src={
                  `http://localhost:3000/images/books/` + this.state.book_pics
                }
                alt=""
              />

              <ul className="">
                <div className="jill-underline"></div>
                <li>{this.state.ISBN}</li>
                <div className="jill-underline"></div>
                <li>{this.state.book_name}</li>
                <div className="jill-underline"></div>
                <li>{this.state.book_condition}</li>
                <div className="jill-underline"></div>
                <li>{this.state.written_or_not}</li>
                <div className="jill-underline"></div>
                <li>{this.state.nickname}</li>
              </ul>
            </div>
            <Link to="./NormalEdit">
              <button className="btn-md-dark jill-normal-seemyList">
                查看
              </button>
            </Link>
          </div>

          {/* 要讓它後執行，或給預設值 ，要怎麼抓到myrows的索引值*/}
          {/* <p onChange={this.handleChange}>您的ISBN是：{myrows[5].ISBN}</p> */}

          {/* <button id="clickme">按我</button> */}
          {/* <input type="submit" value="Submit" /> */}
        </form>

        {/* 我的交換單右邊區塊 */}
        <div className="jill-mystatus">
          {/* 我想跟別人換 */}
          <h5> 我想跟別人換</h5>
          <div className="jill-IwantChangeList d-flex">
            <div className="slider-aria d-flex">
              <div className="slider jill-Iwant-slider-L">
                <Link to="#">
                  <FaChevronLeft className="fas fa-chevron-left" />
                </Link>
              </div>
              <div className="slider jill-Iwant-slider-R">
                <Link to="#">
                  <FaChevronRight className="fas fa-chevron-right" />
                </Link>
              </div>
            </div>
            <div className="jill-mycard d-flex">
              <img
                src={`http://localhost:3000/images/books/` + this.state.pic}
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./IWantChange">
                <button className="btn-md-dark jill-card-btn-status">
                  查看
                </button>
              </Link>
            </div>
            <div className="jill-mycard d-flex">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./IWantChange">
                {/* 先不要按 */}
                <button
                  // onClick={() => {
                  //   props.history.push('/activity/event/' + value.act_sid)
                  // }}
                  className="btn-md-dark jill-card-btn-status2"
                >
                  查看
                </button>
              </Link>
            </div>
          </div>
          {/* 別人想跟我換 */}
          <h5 className="jill-PeoplewantChange-title"> 別人想跟我換</h5>
          <div className="jill-PeoplewantChangeList  d-flex">
            <div className="slider-aria d-flex">
              <div className="slider jill-Peoplewant-slider-L">
                <Link to="#">
                  <FaChevronLeft className="fas fa-chevron-left" />
                </Link>
              </div>
              <div className="slider jill-Peoplewant-slider-R">
                <Link to="#">
                  <FaChevronRight className="fas fa-chevron-right" />
                </Link>
              </div>
            </div>
            <div className="jill-mycard d-flex">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>
                  外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生
                </li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./PeopleWantChange">
                <button className="btn-md-dark jill-card-btn-status3">
                  查看
                </button>
              </Link>
            </div>

            <div className="jill-mycard d-flex">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./PeopleWantChange">
                <button className="btn-md-dark jill-card-btn-status4">
                  查看
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
// 預設屬性，用在跑出undefined的時候
MyChangeBooks.defaultProps = {
  myrows: '',
}

export default MyChangeBooks
