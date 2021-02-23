import { useState, useEffect } from 'react'

// import components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import OldSeasonBookCard from '../components/OldSeasonBookCard'
import SolarTermPlate from '../components/SolarTermPlate'
import OldSeasonPageTitle from '../components/OldSeasonPageTitle'

// import style
import '../styles/old-seasons.scss'

function OldSeasons() {
  // const [targetSolarTerm, setTargetSolarTerm] = useState(0)
  const [solarTermToShow, setSolarTermToShow] = useState('')
  const [solarTermDesc, setSolarTermDesc] = useState('')

  // let solarTermList = []
  let currentSolarTerm = 3
  // let solarTermClicked = false

  // 模擬componentDidMount
  useEffect(() => {
    getDataFromServer(currentSolarTerm)
  }, [])

  // 和伺服器要資料
  const getDataFromServer = async (e) => {
    const response = await fetch('http://localhost:3333/old-seasons', {
      method: 'get',
    })
    const data = await response.json()
    console.log(data)
    console.log(data['solar_term_list'][e])
    setSolarTermDesc(data['solar_term_list'][e]['st_desc'])
    setSolarTermToShow(data['solar_term_list'][e]['solar_term'])

    // setSolarTermsListed(data)

    // 2秒後在 console 顯示 time out
    // setTimeout(() => {
    //   console.log('time out')
    // }, 2000)
    return data
  }

  return (
    <>
      <div className="container-fluid w-100 old-season-container">
        <div className="row justify-content-center">
          <div className="col">
            <SolarTermPlate solarTermToShow={solarTermToShow} />
            <div className="hans-bread-crumb">
              <MultiLevelBreadCrumb />
            </div>
            <OldSeasonPageTitle />
            目前的節氣：{currentSolarTerm}
            <br />
            <button
              onClick={() => {
                // solarTermClicked = !solarTermClicked
              }}
            >
              點擊目標節氣書本
            </button>
            <br />
            {/* 目標節氣書本： {targetSolarTerm} */}
            <br />
            節氣：{solarTermToShow}
            <br />
            描述：{solarTermDesc}
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
