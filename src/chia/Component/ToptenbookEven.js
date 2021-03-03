import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'

function ToptenbookEven(props) {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])
  return (
    <Link to="#" style={{ color: '#1c1b1b' }}>
      <div className="chia_rankingbook " data-aos="flip-right">
        <div className="chia_rankingbooktop d-flex flex-column justify-content-center chia_rankingbook_even chiayellow">
          <div class="chia_bookcover">
            <div class="chia_ranking">{props.ranking}</div>
            <img
              src={props.ismonth ? props.Monthranking : props.Weekranking}
              height="100%"
            />
          </div>
        </div>
        <div className="chia_rankingbookword">
          <p className="chia_rankingtitle">
            {props.ismonth ? props.Monthtitle : props.Weektitle}
          </p>
          <p className="chia_rankingprice">
            <span>
              {props.ismonth ? props.Monthdiscount : props.Weekdiscount}折
            </span>
            {props.ismonth ? props.Monthprice : props.Weekprice}元
          </p>
          <div className="chia_quickadd d-none">Qucik Add</div>
        </div>
      </div>
    </Link>
  )
}

export default ToptenbookEven
