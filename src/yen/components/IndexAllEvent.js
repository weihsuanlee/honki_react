import React from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

// 引用css與svg
import '../styles/yen-index.scss'
import SvgLadybug from './svg/SvgLadybug'
import SvgSlide from './svg/SvgSlide'

// 分頁
import ActPagination from './ActPagination'

function IndexAllEvent(props) {
  // console.log('eventCard.props:', props)

  // 頁數
  const { totalPages, page, setPage, queryPage, setQueryPage } = props

  // console.log('IndexAllEvent props', props.eventLists)
  const classNumList = [
    '講座',
    '讀書會',
    '戶外探索',
    '休閒活動',
    '活動地區',
    '節氣推薦',
  ]

  const eventCard = (
    <>
      {props.eventLists.rows &&
        props.eventLists.rows.map((value, index) => {
          const pic =
            'http://localhost:3000/images/yen/event/' +
            value.act_name +
            '/0.jpg'

          return (
            <div
              className="yen-event-card"
              key={index}
              onClick={() => {
                props.history.push('/activity/event/' + value.act_sid)
              }}
            >
              <div className="yen-new-card-img">
                <img src={pic} alt="" />
              </div>
              <div className="yen-new-card-tag d-flex">
                <div className="yen-event-card-tagl">
                  <span>{moment(value.act_time).format('YYYY-MM-DD')}</span>
                </div>
                <div className="yen-event-card-tagr">
                  <span>{classNumList[parseInt(value.act_class_sid) - 1]}</span>
                </div>
              </div>
              <div className="yen-new-card-des">
                <div className="yen-event-card-title">
                  <span>{value.act_name}</span>
                </div>
                <div className="yen-new-card-bottom">
                  <div className="yen-event-card-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{value.event_city}</span>
                  </div>
                  <div className="yen-event-card-price">
                    <div className="yen-event-card-nt">
                      <span>NT</span>
                    </div>
                    <div className="yen-event-card-money">
                      <span>{value.act_price}</span>
                    </div>
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
      <div className="yen-event">
        <nav aria-label="breadcrumb" className="yen-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-honki">
              <a href="#">首頁</a>
            </li>
            <li className="active" aria-current="page">
              活動講座
            </li>
          </ol>
        </nav>
        <div className="yen-select">
          <button className="btn-md-light yen-select-btn">講座</button>
          <button className="btn-md-light yen-select-btn">讀書會</button>
          <button className="btn-md-light yen-select-btn">戶外探索</button>
          <button className="btn-md-light yen-select-btn">休閒活動</button>
          <button className="btn-md-light yen-select-btn">活動地區</button>
          <button className="btn-md-light yen-select-btn">節氣推薦</button>
          <div className="yen-event-ladybug">
            <SvgLadybug />
          </div>
        </div>
        <div className="yen-allevent">
          <div className="yen-event-wrap">{eventCard}</div>
        </div>
        <div className="yen-pages">
          <ActPagination
            totalPages={totalPages}
            page={page}
            setPage={setPage}
            queryPage={queryPage}
            setQueryPage={setQueryPage}
          />
        </div>
        <div className="yen-slide">
          <SvgSlide />
        </div>
      </div>
    </>
  )
}

export default withRouter(IndexAllEvent)
