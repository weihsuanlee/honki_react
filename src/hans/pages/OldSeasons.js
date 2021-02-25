import { useState, useEffect } from 'react'

// import components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import OldSeasonBookCard from '../components/OldSeasonBookCard'
import SolarTermPlate from '../components/SolarTermPlate'
import OldSeasonPageTitle from '../components/OldSeasonPageTitle'
import SelectedSolarTermInfo from '../components/SelectedSolarTermInfo'
import SolarTermToShow from '../components/SolarTermToShow'

// import style
import '../styles/old-seasons.scss'
import '../styles/solar-term-plate-filler.scss'

function OldSeasons(props) {
  // const [targetSolarTerm, setTargetSolarTerm] = useState(0)
  const [solarTermToShow, setSolarTermToShow] = useState('')
  const [solarTermDesc, setSolarTermDesc] = useState('')
  const [solarTermImgs, setSolarTermImgs] = useState([])
  const [solarTermImgToShow, setSolarTermImgToShow] = useState('')
  const [showBreadCrumb, setShowBreadCrumb] = useState(false)

  const [displayTitle, setDisplayTitle] = useState('displayOn')
  const [displaySolarTermInfo, setDisplaySolarTermInfo] = useState(
    'd-flex justify-content-center  fadeOut'
  )

  // 處理轉盤大小與轉盤中心圖片變化
  const [solarPlateSize, setSolarPlateSize] = useState(
    'solar-term-plate-v2 rotate'
  )
  const [redCenterSize, setRedCenterSize] = useState('red-center')
  const [redCenterText, setRedCenterText] = useState('fadeOut')
  const [redCenterImg, setRedCenterImg] = useState([])

  const [solarTermClicked, setSolarTermClicked] = useState(true)

  // 模擬componentDidMount
  useEffect(() => {
    let dateNow = currentStDate()
    console.log(
      'Month: ',
      dateNow.getMonth() + 1,
      '\n',
      'Day: ',
      dateNow.getDate()
    )

    let initialSolarTermID =
      solarTermId2[dateNow.getMonth()] + (dateNow.getDate() > 15 ? 1 : -1)
    console.log(initialSolarTermID)

    getDataFromServer(initialSolarTermID)
  }, [])

  // 確認目前的時間與節氣
  const solarTermId2 = Array.from(Array(12).keys()).map((e) => e * 2)

  const solarTermIdAll = Array.from(Array(24).keys())
  // let currentDate = formatDate(new Date())
  let currentSolarTerm = 3 - 1
  const currentStDate = () => new Date()

  // 和伺服器要資料

  // 產生要列出的節氣選書，寫法可能要再調整一下
  const getSolarTermsToList = (firstOnList) => {
    // firstOnList = currentSolarTerm

    let solarTermsToList = Array.from(Array(6).keys())
    console.log(solarTermsToList)

    solarTermsToList = solarTermsToList.map((e) => firstOnList - e)
    console.log(solarTermsToList)

    return solarTermsToList
  }

  // 把日期轉換成 YYYY-MM-DD 格式
  // 參考： https://stackoverflow.com/questions/6253851/converting-yyyy-mm-dd-to-unix-timestamp-in-javascript
  //
  function formatDate(date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }

  /*
  console.log(formatDate('Sun May 11,2014'))

  // 把日期轉為 Unix Timestamp 來比較大小
  console.log(
    new Date(formatDate('Sun May 11,2014')).getTime() >
      new Date('2020-01-01').getTime()
  )
  */

  const getDataFromServer = async (e) => {
    const response = await fetch('http://localhost:3333/old-seasons', {
      method: 'get',
    })
    const data = await response.json()
    console.log(data)
    console.log(data['solar_term_list'][e])
    setSolarTermDesc(data['solar_term_list'][e]['st_desc'])
    setSolarTermToShow(data['solar_term_list'][e]['solar_term'])
    setSolarTermImgToShow(data['solar_term_list'][e]['st_img'])

    console.log(solarTermId2)
    setSolarTermImgs(
      solarTermIdAll.map((e) => data['solar_term_list'][e]['st_img'])
    )
    console.log(solarTermImgs)
    console.log(solarTermImgs[1])

    getSolarTermsToList(e)

    return data
  }

  function handlePlateToggle() {
    // 設定圓盤狀態

    setRedCenterImg(
      solarTermClicked
        ? [
            'http://localhost:3000/images/hans/solar-terms-circle/' +
              solarTermImgToShow,
            'img-full fadeIn',
          ]
        : [
            'http://localhost:3000/images/hans/solar-terms-circle/' +
              solarTermImgToShow,
            'img-full fadeOut',
          ]
    )

    setSolarPlateSize(
      solarTermClicked
        ? 'solar-term-plate-v2-small rotate'
        : 'solar-term-plate-v2 rotate'
    )
    setRedCenterSize(solarTermClicked ? 'red-center-small' : 'red-center')
    setRedCenterText(solarTermClicked ? 'fadeIn' : 'fadeOut')

    // 設定節氣說明狀態與頁面標題
    setDisplayTitle(solarTermClicked ? 'fadeOut' : 'fadeIn')
    setDisplaySolarTermInfo(
      solarTermClicked
        ? 'd-flex justify-content-center fadeIn'
        : 'd-flex justify-content-center  fadeOut'
    )

    setSolarTermClicked(!solarTermClicked)

    setShowBreadCrumb(!showBreadCrumb)

    // console.log('clicked!')
    // console.log(solarTermClicked)
  }

  let checkBreadCrumShow = showBreadCrumb ? 'fadeIn' : 'fadeOut'

  return (
    <>
      <div className="container-fluid w-100 old-season-container">
        <div className="row justify-content-center">
          <div className="col">
            <SolarTermPlate
              solarPlateSize={solarPlateSize}
              redCenterSize={redCenterSize}
              redCenterImg={redCenterImg}
            />
            <div className={'hans-bread-crumb ' + checkBreadCrumShow}>
              <MultiLevelBreadCrumb />
            </div>
            <div className="row solar-term-plate-filler"></div>
            <br />
            <div className={'red-center-text ' + redCenterText}>
              <SolarTermToShow solarTermToShow={solarTermToShow} />
            </div>
            <div className={displaySolarTermInfo}>
              <SelectedSolarTermInfo
                solarTermToShow={solarTermToShow}
                redCenterText={redCenterText}
                solarTermDesc={solarTermDesc}
              />
            </div>
            <div className={displayTitle}>
              <OldSeasonPageTitle />
            </div>
          </div>

          <div className="col-xl-6 osb-book-col-outer">
            <div className="osb-book-col-grad"></div>
            <div className="row justify-content-center osb-book-col fadein-on-start">
              {/* 過往節氣選書卡片 */}
              <OldSeasonBookCard
                handlePlateToggle={handlePlateToggle}
                getSolarTermsToList={getSolarTermsToList}
              />

              {/* <button
                onClick={() => {
                  handlePlateToggle()
                }}
              >
                點擊目標節氣書本
              </button> */}

              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OldSeasons
