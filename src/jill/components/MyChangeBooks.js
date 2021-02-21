import React from 'react'
// import NormalIndex from '../pages/NormalIndex'

class MyChangeBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '預設資料' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // 這塊會執行componentDidUpdate的作用(因為setState)
  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  // 與JS或JQ整合要在這邊，執行順序是class，再來render然後才是這區塊
  componentDidMount() {
    console.log('componentDidMount')
    document.getElementById('clickme').addEventListener('click', function () {
      alert('你按到我了')
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
        <label>
          Name:
          <select value={this.state.value} onChange={this.handleChange}>
            {/* 成功的寫法在NormalIndex只能撈一筆的時候的寫法，myrows={mybook_rows} */}
            {myrows.map((m, i) => (
              <option>{m.book_name}</option>
            ))}
          </select>
        </label>
        <p>您選擇的是：{this.state.value}</p>
        <p>您選擇的是：{this.state.value}</p>
        <button id="clickme">按我</button>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
// 預設屬性，用在跑出undefined的時候
MyChangeBooks.defaultProps = {
  myrows: '',
}

export default MyChangeBooks
