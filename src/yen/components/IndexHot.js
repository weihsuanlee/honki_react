import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// svg-icon
import '../styles/yen-index.scss'
import SvgCircle from './svg/SvgCircle'
import SvgLadybug from './svg/SvgLadybug'
import SvgRun from './svg/SvgRun'

function IndexHot() {
  const [hotLists, setHotLists] = useState([])

  async function getHotEventFromServer() {
    // 開啟載入指示

    // 連接的伺服器資料網址
    const url = 'http://localhost:3333/activity/hot'

    // header的資料格式
    const request = new Request(url, {
      method: 'GET',
      header: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    setHotLists(data)
    // console.log(data)
  }

  useEffect(() => {
    getHotEventFromServer()
  }, [])

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
            <div className="yen-hot-cards-s yen-hover-box yen-hot-bgimg1">
              <div className="yen-hot-cover-box d-flex">
                <div className="yen-hot-cover">
                  <div className="yen-hot-cover-text">
                    <h5>隨心香氛自由書寫課。 台中場</h5>
                    <br />
                    <br />
                    <p>成立花蓮運行保存傳奇實。</p>
                    <p>成立花蓮運行保存傳奇實。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="yen-hot-cards-l yen-hover-box yen-hot-bgimg2"></div>
            <div className="yen-hot-cards-s yen-hover-box yen-hot-bgimg3"></div>
            <div className="yen-hot-cards-l yen-hover-box yen-hot-bgimg4"></div>
            <div className="yen-hot-cards-s yen-hover-box yen-hot-bgimg5"></div>
            <div className="yen-hot-cards-l yen-hover-box yen-hot-bgimg6"></div>
            <div className="yen-hot-ladybug">
              <SvgLadybug />
            </div>
            <div className="yen-hot-run">
              <SvgRun />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(IndexHot)
