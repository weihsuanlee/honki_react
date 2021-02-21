import React from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import $ from 'jquery'

// svg-icon
import '../styles/yen-index.scss'
import SvgCircle from './svg/SvgCircle'
import SvgLadybug from './svg/SvgLadybug'
import SvgRun from './svg/SvgRun'

function IndexHot(props) {
  console.log(props)
  const hoverCard = (
    <>
      {props.hotLists.length !== 0 &&
        props.hotLists.rows.map((value, index) => {
          const pic =
            'http://localhost:3000/images/yen/event/' +
            value.act_name +
            '/0.jpg'
          return (
            <div
              className="yen-hot-cards yen-hot-cards-s yen-hover-box"
              key={index}
            >
              <div className="yen-hot-cover-box d-flex">
                <div className="yen-hot-cover">
                  <img className="yen-hot-cards-img" src={pic} alt="" />
                  <div className="yen-hot-cover-text d-none">
                    <h5>{value.act_name}</h5>
                    <br />
                    <h6>{moment(value.act_time).format('YYYY-MM-DD')}</h6>
                    <h6>{value.event_city}</h6>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )

  return (
    <>
      <div className="yen-overflow-box">
        <div className="yen-hot">
          <div className="yen-title-box d-flex">
            <div className="yen-circle">
              <SvgCircle />
            </div>
            <span className="yen-title-text">熱門活動</span>
          </div>
          <div className="yen-hot-card-box">
            {/* <div className="yen-hot-cards-s yen-hover-box">
              <div className="yen-hot-cover-box d-flex"> */}
            {hoverCard}
            {/* <div className="yen-hot-cover">
                  <img
                    className="yen-hot-cards-img"
                    src="http://localhost:3000/images/yen/event/隨心  香氛自由書寫課。內在靜觀 l 台北場/0.jpg"
                    alt=""
                  />
                  <div className="yen-hot-cover-text">
                    <h5>title</h5>
                    <br />
                    <br />
                    <p>成立花蓮運行保存傳奇實。</p>
                    <p>成立花蓮運行保存傳奇實。</p>
                  </div>
                </div> */}
            {/* </div>
            </div> */}

            {/* <div className="yen-hot-cards-l yen-hover-box"></div>
            <div className="yen-hot-cards-s yen-hover-box"></div>
            <div className="yen-hot-cards-l yen-hover-box"></div>
            <div className="yen-hot-cards-s yen-hover-box"></div>
            <div className="yen-hot-cards-l yen-hover-box"></div> */}

            <div className="yen-hot-ladybug">
              <SvgLadybug />
            </div>
          </div>
          <div className="yen-hot-run">
            <SvgRun />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(IndexHot)
