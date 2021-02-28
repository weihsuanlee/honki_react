// import { useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { SVG_FACES } from '../constants'
import { SVG_HAIR } from '../constants'
import { SVG_CLOTH } from '../constants'
import { SVG_ACC } from '../constants'
import { SVG_TERMS } from '../constants'

const COLUMN_NUM = 4

function ItemView(props) {
  let index = `${props.prefix}${props.id}`
  return (
    <div>
      <input
        id={index}
        type="radio"
        className="yu-edit-input"
        name={props.prefix}
        value={props.id}
        onChange={props.onChange}
      />
      <label htmlFor={index} className="yu-edit-label">
        <img src={props.url} alt="" />
      </label>
    </div>
  )
}

function ItemView2(props) {
  let index = `${props.prefix}${props.id}`
  return (
    <div>
      <input
        id={index}
        type="radio"
        className="yu-edit-input"
        name={props.prefix}
        value={props.id}
        onChange={props.onChange}
      />
      <label htmlFor={index} className="yu-edit-label-2">
        <img src={props.url} alt="" />
      </label>
    </div>
  )
}


function EditTab3(props) {
  return (
    <>
      <div style={{ maxHeight: '500px', overflow: 'scroll' }}>
        <div className="panel-title yu-edit-photo-title">修改節氣頭貼</div>
        {/* <!-- 收合選單-3修改節氣頭貼 --> */}
        <div className="panel" id="three-panel">
          {/* <!-- 頭貼選單-選擇表情 --> */}
          <div className="form-group yu-edit-form">
            <span>選擇表情</span>
            {[0, 1].map((row) => {
              return (
                <div key={row} className="formItems row d-flex">
                  {SVG_FACES.filter((value, index) => {
                    return Math.floor(index / COLUMN_NUM) === row
                  }).map((value, index) => {
                    let order = COLUMN_NUM * row + index
                    return (
                      <ItemView
                        key={order}
                        id={order}
                        url={value}
                        prefix="face"
                        onChange={(event) => {
                          const value = event.target.value
                          props.onChangeFace(value)
                        }}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>

          {/* <!-- 頭貼選單-選擇髮型 --> */}
          <div className="form-group yu-edit-form">
            <span>選擇髮型</span>
            {[0, 1].map((row) => {
              return (
                <div key={row} className="formItems row d-flex">
                  {SVG_HAIR.filter((value, index) => {
                    return Math.floor(index / COLUMN_NUM) === row
                  }).map((value, index) => {
                    let order = COLUMN_NUM * row + index
                    return (
                      <ItemView2
                        key={order}
                        id={order}
                        url={value}
                        prefix="hair"
                        onChange={(event) => {
                          const value = event.target.value
                          props.onChangeHair(value)
                        }}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>

          {/* <!-- 頭貼選單-選擇服飾 --> */}
          <div className="form-group yu-edit-form">
            <span>選擇服飾</span>
            {[0, 1].map((row) => {
              return (
                <div key={row} className="formItems row d-flex">
                  {SVG_CLOTH.filter((value, index) => {
                    return Math.floor(index / COLUMN_NUM) === row
                  }).map((value, index) => {
                    let order = COLUMN_NUM * row + index
                    return (
                      <ItemView
                        key={order}
                        id={order}
                        url={value}
                        prefix="cloth"
                        onChange={(event) => {
                          const value = event.target.value
                          props.onChangeCloth(value)
                        }}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>

          {/* <!-- 頭貼選單-選擇配件 --> */}
          <div className="form-group yu-edit-form">
            <span>選擇配件</span>
            {[0, 1].map((row) => {
              return (
                <div key={row} className="formItems row d-flex">
                  {SVG_ACC.filter((value, index) => {
                    return Math.floor(index / COLUMN_NUM) === row
                  }).map((value, index) => {
                    let order = COLUMN_NUM * row + index
                    return (
                      <ItemView
                        key={order}
                        id={order}
                        url={value}
                        prefix="acc"
                        onChange={(event) => {
                          const value = event.target.value
                          props.onChangeAcc(value)
                        }}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>

          {/* <!-- 頭貼選單-選擇背景 --> */}
          <div className="form-group yu-edit-form">
            <span>選擇背景</span>
            {[0, 1, 2, 3, 4, 5].map((row) => {
              return (
                <div key={row} className="formItems row d-flex">
                  {SVG_TERMS.filter((value, index) => {
                    return Math.floor(index / COLUMN_NUM) === row
                  }).map((value, index) => {
                    let order = COLUMN_NUM * row + index
                    return (
                      <ItemView
                        key={order}
                        id={order}
                        url={value}
                        prefix="terms"
                        onChange={(event) => {
                          const value = event.target.value
                          props.onChangeTerms(value)
                        }}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(EditTab3)
