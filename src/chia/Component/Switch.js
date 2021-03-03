import React, { useState, useEffect } from 'react'
import '../Style/chia_switch.scss'
import $ from 'jquery'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

function Switch(props) {
  // const[ismonth, setIsMonth] = useState(false)

  // useEffect(()=>{
  //     console.log('componentDidMoint')
  //    console.log(ismonth)
  // },[])

  // useEffect(()=>{
  //    console.log(ismonth)
  // },[ismonth])

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <p style={{ fontSize: '14px', margin: '0px' }}>切換週/月排行</p>
    </Tooltip>
  )
  return (
    <>
      <div className="chia_toptenswitch  ml-auto py-2 d-flex flex-column　row">
        <div className="chia_switchlabel">
          <p className="chia_week">週</p>
          <p className="chia_month">月</p>
        </div>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <label className="chia_switch mx-auto">
            <input
              type="checkbox"
              Name="chia_checked"
              className="chia_checkedbox"
              onClick={(e) => {
                if (!props.ismonth) {
                  props.setIsMonth(true)
                  // console.log(props.ismonth)
                  props.addYellow()
                } else {
                  props.setIsMonth(false)
                  // console.log(props.ismonth)
                  props.addGrey()
                }
              }}
            />
            <span
              className="chia_slider round"
              data-on="month"
              data-off="week"
            ></span>
          </label>
        </OverlayTrigger>
      </div>
    </>
  )
}

export default Switch
