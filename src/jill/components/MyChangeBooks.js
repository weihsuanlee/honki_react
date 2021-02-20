import React from 'react'
// import NormalIndex from '../pages/NormalIndex'

class MyChangeBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '預設資料' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    // 若要解構賦值要寫在這裡，下面就可以不用打this.props開頭
    const { myrows, name } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="同學A">同學A</option>
            <option value="老師B">老師B</option>
            <option value="路人C">路人C</option>
            <option value="寵物D">寵物D</option>
            <option value={name}>{name}</option>
            {/* 類別型元件props可以自動得到 */}
            {/* <option value={this.props.myrows[0].ISBN}>{this.props.myrows[0].ISBN}</option> */}

            {/* 下面寫法是在NormalIndex只能撈一筆的時候的寫法，myrows={mybook_rows[0]} 有多加[0] */}
            {/* <option value={myrows.book_name}>{myrows.book_name}</option> */}

            {/* 成功的寫法在NormalIndex只能撈一筆的時候的寫法，myrows={mybook_rows} */}
            {myrows.map((m) => (
              <option>{m.book_name}</option>
            ))}
          </select>
        </label>
        <p>您選擇的是：{this.state.value}</p>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
// 預設屬性，用在跑出undefined的時候
MyChangeBooks.defaultProps = {
  myrows: '',
  // '{myrows[0].ISBN}': '123',
}

export default MyChangeBooks
