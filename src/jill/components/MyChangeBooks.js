import React from 'react'

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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="同學A">同學A</option>
            <option value="老師B">老師B</option>
            <option value="路人C">路人C</option>
            <option value="寵物D">寵物D</option>
            <option value={this.props.name}>{this.props.name}</option>
            <option value={this.props.myrows[0].ISBN}>
              {this.props.myrows[0].ISBN}
            </option>
            <option value="同學A">同學A</option>
          </select>
        </label>
        <p>您選擇的是：{this.state.value}</p>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default MyChangeBooks
