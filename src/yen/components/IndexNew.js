import React from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

import '../styles/yen-index.scss'
import SvgCircle from './svg/SvgCircle'
import SvgLadybug from './svg/SvgLadybug'
import SvgTaiwan from './svg/SvgTaiwan'
import SvgNorth from './svg/SvgNorth'
import SvgMedium from './svg/SvgMedium'
import SvgSouth from './svg/SvgSouth'
import SvgEast from './svg/SvgEast'
import SvgBgCircleFull from './svg/SvgBgCircleFull'
import SvgBgCircleLine from './svg/SvgBgCircleLine'
import SvgWithDog from './svg/SvgWithDog'

function IndexNew(props) {
  const { querySelect, setQuerySelect } = props
  // let urlSelect = querySelect
  console.log('querySelect', querySelect)
  const classNumList = [
    '講座',
    '讀書會',
    '戶外探索',
    '休閒活動',
    '活動地區',
    '節氣推薦',
  ]

  function areaButtonClick(area) {
    console.log('area', area)
    setQuerySelect(area)
    // console.log('urlSelect', querySelect)
  }

  const cityCard = (
    <>
      {props.newLists.length !== 0 &&
        props.newLists.rows.map((value, index) => {
          const pic =
            'http://localhost:3000/images/yen/event/' +
            value.act_name +
            '/0.jpg'

          return (
            <div
              className="yen-new-card"
              onClick={() => {
                props.history.push('/activity/event/' + value.act_sid)
              }}
            >
              <div className="yen-new-card-img">
                <img src={pic} alt="" />
              </div>
              <div className="yen-new-card-tag d-flex">
                <div className="yen-new-card-tagl">
                  <span>{moment(value.act_time).format('YYYY-MM-DD')}</span>
                </div>
                <div className="yen-new-card-tagr">
                  <span>{classNumList[parseInt(value.act_class_sid) - 1]}</span>
                </div>
              </div>
              <div className="yen-new-card-des">
                <div className="yen-new-card-title">
                  <span>{value.act_name}</span>
                </div>
                <div className="yen-new-card-bottom">
                  <div className="yen-new-card-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{value.event_city}</span>
                  </div>
                  <div className="yen-new-card-price">
                    <div className="yen-new-card-nt">
                      <span>NT</span>
                    </div>
                    <div className="yen-new-card-money">
                      <span>{value.act_price}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="yen-new-tag-box">
                <span>NEW</span>
              </div>
              <div className="yen-new-ladybug">
                <SvgLadybug />
              </div>
            </div>
          )
        })}
    </>
  )

  return (
    <>
      <div className="yen-new">
        <div className="yen-title-box d-flex">
          <div className="yen-circle">
            <SvgCircle />
          </div>
          <span className="yen-title-text">最新活動</span>
        </div>

        <div className="yen-new-box d-flex">
          <div className="yen-new-card-box">{cityCard}</div>
          <div className="yen-island-box">
            <div className="yen-island">
              <SvgTaiwan />
            </div>
            <div
              className="yen-north-area"
              onClick={() => {
                const area = '?changeCity=north'
                areaButtonClick(area)
              }}
            >
              <SvgNorth />
            </div>
            <div
              className="yen-medium-area"
              onClick={() => {
                const area = '?changeCity=medium'
                areaButtonClick(area)
              }}
            >
              <SvgMedium />
            </div>
            <div
              className="yen-south-area"
              onClick={() => {
                const area = '?changeCity=south'
                areaButtonClick(area)
              }}
            >
              <SvgSouth />
            </div>
            <div
              className="yen-east-area"
              onClick={() => {
                const area = '?changeCity=east'
                areaButtonClick(area)
              }}
            >
              <SvgEast />
            </div>
          </div>
        </div>

        <div className="yen-new-bg">
          <div className="yen-new-bg-circle1">
            <SvgBgCircleLine />
          </div>
          <div className="yen-new-bg-circle2">
            <SvgBgCircleFull />
          </div>
          <div className="yen-new-bg-circle3">
            <SvgBgCircleFull />
          </div>
          <div className="yen-new-bg-circle4">
            <SvgBgCircleLine />
          </div>
          <div className="yen-new-bg-circle5">
            <SvgBgCircleLine />
          </div>
          <div className="yen-new-bg-circle6">
            <SvgBgCircleLine />
          </div>
          <div className="yen-new-bg-circle7">
            <SvgBgCircleFull />
          </div>
          <div className="yen-new-bg-withdog">
            <SvgWithDog />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(IndexNew)
