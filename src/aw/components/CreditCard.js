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
      <div id="PaymentForm" className="aw-productAreaPadding mb-5 mt-5">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <div className="mt-5 mb-2">
          <h6>請填寫信用卡資訊</h6>
        </div>
        <form className="mt-4">
          <div class="form-group ">
            <div class="formItems row d-flex">
              <label class="inputText col-5">卡號</label>
              <input
                type="tel"
                name="number"
                className="form-control formInput col-7"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                oninput="value=value.replace(/[^\d]/g,'')"
                maxlength="16"
              />
            </div>
          </div>

          <div class="form-group ">
            <div class="formItems row d-flex">
              <label class="inputText col-5">持卡人</label>
              <input
                type="tel"
                name="name"
                className="form-control formInput col-7"
                placeholder="Card name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                oninput="value=value.replace( /[^\a-\z\A-\Z]/g,'')"
                maxlength="16"
              />{' '}
            </div>
          </div>

          <div class="form-group ">
            <div class="formItems row d-flex">
              <label class="inputText col-5">到期日</label>
              <input
                type="tel"
                name="expiry"
                className="form-control formInput col-7"
                placeholder="Card expiry"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />{' '}
            </div>
          </div>

          <div class="form-group ">
            <div class="formItems row d-flex">
              <label class="inputText col-5">驗證碼</label>
              <input
                type="tel"
                name="cvc"
                className="form-control formInput col-7"
                placeholder="Card cvc"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />{' '}
            </div>
          </div>
        </form>
      </div>
    )
  }
}
