import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import '../styles/cartStyle.scss'
export default class CreditCard extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <input
            type="tel"
            name="number"
            className="form-control formInput"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            oninput="value=value.replace(/[^\d]/g,'')"
            maxlength="16"
          />
          <input
            type="tel"
            name="name"
            className="form-control formInput"
            placeholder="Card name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            oninput="value=value.replace( /[^\a-\z\A-\Z]/g,'')"
            maxlength="16"
          />
          <input
            type="tel"
            name="expiry"
            className="form-control formInput"
            placeholder="Card expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            className="form-control formInput"
            placeholder="Card cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
      </div>
    )
  }
}
