import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'

function ToptenbookOdd(props) {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])
  return (
    <>
      <Link to="#" style={{ color: '#1c1b1b' }}>
        <div className="chia_rankingbook" data-aos="flip-right">
          <div className="chia_rankingbooktop d-flex flex-column justify-content-center chia_rankingbook_odd chiagrey">
            <div className="chia_bookcover">
              <div className="chia_ranking">{props.ranking}</div>
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
              <span>79折</span>
              {props.ismonth ? props.Monthprice : props.Weekprice}元
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ToptenbookOdd
