import { useState, useEffect } from 'react'

// import components
import OldSeasonBookCard from '../components/OldSeasonBookCard'
import SolarTermPlate from '../components/SolarTermPlate'
import OldSeasonPageTitle from '../components/OldSeasonPageTitle'

// import style
import '../styles/old-seasons.scss'

function OldSeasons() {
  const [targetSolarTerm, setTargetSolarTerm] = useState(0)
  // const [solarTermsListed, setSolarTermsListed] = useState([])

  let solarTermList = []
  let currentSolarTerm = 3
  let solarTermClicked = 10

  console.log(solarTermList[0])

  // 模擬componentDidMount
  useEffect(() => {
    getDataFromServer()
  }, [])

  // 和伺服器要資料
  const getDataFromServer = async () => {
    const response = await fetch('http://localhost:3333/old-seasons', {
      method: 'get',
    })
    const data = await response.json()
    console.log(data)

    // 2秒後在 console 顯示 time out
    setTimeout(() => {
      console.log('time out')
    }, 2000)
  }

  return (
    <>
      <div className="container-fluid w-100 old-season-container">
        <div className="row justify-content-center">
          <div className="col">
            <SolarTermPlate />
            <OldSeasonPageTitle />
            目前的節氣：{currentSolarTerm}
            <br />
            <button
              onClick={() => {
                setTargetSolarTerm(solarTermClicked)
              }}
            >
              點擊目標節氣書本
            </button>
            <br />
            要顯示的節氣：{targetSolarTerm}
          </div>

          <div className="col-xl-6 osb-book-col-outer">
            <div className="osb-book-col-grad"></div>
            <div className="row justify-content-center osb-book-col fadein-on-start">
              {/* 過往節氣選書卡片 */}
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OldSeasons
