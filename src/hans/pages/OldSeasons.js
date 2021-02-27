import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// import components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import SolarTermPlate from '../components/SolarTermPlate'
import OldSeasonPageTitle from '../components/OldSeasonPageTitle'
import SelectedSolarTermInfo from '../components/SelectedSolarTermInfo'
import SolarTermToShow from '../components/SolarTermToShow'
import OldSeasonBookCardList from '../components/OldSeasonBookCardList'
// import OldSeasonBookCard from '../components/OldSeasonBookCard'

// import style
import '../styles/old-seasons.scss'
import '../styles/solar-term-plate-filler.scss'

function OldSeasons(props) {
  const [solarTermData, setSolarTermData] = useState({})
  const [solarTermNameList, setSolarTermNameList] = useState([])

  // 節氣說明
  const [targetSolarTerm, setTargetSolarTerm] = useState(0)
  const [solarTermToShow, setSolarTermToShow] = useState('')
  const [solarTermDesc, setSolarTermDesc] = useState('')
  const [solarTermImgs, setSolarTermImgs] = useState([])
  const [solarTermImgToShow, setSolarTermImgToShow] = useState('')

  // 節氣書籍資料
  const [firstCardSid, setFirstCardSid] = useState('')
  const [solarTermBookToShow, setSolarTermBookToShow] = useState({})
  const [solarTermBookToShowList, setSolarTermBookToShowList] = useState([])

  // 麵包屑
  const [showBreadCrumb, setShowBreadCrumb] = useState(false)
  const [stClickedId, setStClickedId] = useState(-1)

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
    // 從伺服器取出節氣清單與節氣選書清單資料
    getInitialStDataFromServer()
  }, [])

  // 用月份列表來估算節氣的區間
  const solarTermId2 = Array.from(Array(12).keys()).map((e) => e * 2)
  const solarTermId = Array.from(Array(24).keys())

  // let currentDate = formatDate(new Date())
  // let currentSolarTerm = '2020-12-25'
  const currentStDate = () => new Date()

  // 把日期轉為節氣 ID
  const convertSolarTermID = (dateNow) => {
    // console.log(dateNow)

    console.log(
      'date to convert: \n',
      'Year: ',
      dateNow.getFullYear(),
      '\n',
      'Month: ',
      dateNow.getMonth() + 1,
      '\n',
      'Day: ',
      dateNow.getDate()
    )

    // console.log(solarTermId2)

    let solarTermId =
      solarTermId2[dateNow.getMonth()] + (dateNow.getDate() > 15 ? 1 : -1)

    return solarTermId
  }

  // 把日期轉換成 YYYY-MM-DD 格式
  // 參考： https://stackoverflow.com/questions/6253851/converting-yyyy-mm-dd-to-unix-timestamp-in-javascript
  /*
  function formatDate(date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }
  */

  /*
  console.log(formatDate('Sun May 11,2014'))

  // 把日期轉為 Unix Timestamp 來比較大小
  console.log(
    new Date(formatDate('Sun May 11,2014')).getTime() >
      new Date('2020-01-01').getTime()
  )
  */

  // 和伺服器要資料，初始節氣卡
  const getInitialStDataFromServer = async () => {
    const response = await fetch('http://localhost:3333/old-seasons', {
      method: 'get',
    })
    const data = await response.json()

    // let currentSolarTermId = data['current_solar_term_id']
    let initialStId = data['current_solar_term_id'][0]['solar_term_id']
    // console.log('initialStId', initialStId)
    let initialSid = data['current_solar_term_id'][0]['st_sid']
    // console.log('initialSid', initialSid)
    setFirstCardSid(initialSid)

    console.log(data)
    setSolarTermData(data)

    // console.log(data['solar_term_list'])
    // console.log(data['solar_term_list'][id])
    // console.log('stBooks:', data['solar_term_books'][initialSid])
    console.log('stBooks:', data['solar_term_books'][initialSid - 1])
    console.log(data['solar_term_books'])
    setSolarTermBookToShowList(data['solar_term_books'])

    console.log(data['solar_term_books'][1]['title'])

    setSolarTermDesc(data['solar_term_list'][initialStId]['st_desc'])
    setSolarTermNameList(
      Array.from(Array(24).keys()).map(
        (e) => data['solar_term_list'][e]['solar_term']
      )
    )
    setSolarTermToShow(data['solar_term_list'][initialStId]['solar_term'])
    setSolarTermImgToShow(data['solar_term_list'][initialStId]['st_img'])

    // setSolarTermBookToShow(data['solar_term_books'][1]['title'])
    console.log('test', data['current_solar_term_id'][0])
    setSolarTermBookToShow(data['current_solar_term_id'][0])

    let stImgArray = solarTermId.map(
      (e) => data['solar_term_list'][e]['st_img']
    )

    // console.log(stImgArray)
    setSolarTermImgs(stImgArray)

    return data
  }

  const getStDataFromServer = async (id) => {
    const response = await fetch('http://localhost:3333/old-seasons', {
      method: 'get',
    })
    const data = await response.json()
    // console.log(data)
    setSolarTermData(data)
    // console.log(data['solar_term_list'])
    // console.log(data['solar_term_list'][id])
    // console.log(data['solar_term_books'])

    setSolarTermDesc(data['solar_term_list'][id]['st_desc'])
    setSolarTermNameList(
      Array.from(Array(24).keys()).map(
        (id) => data['solar_term_list'][id]['solar_term']
      )
    )
    setSolarTermToShow(data['solar_term_list'][id]['solar_term'])
    setSolarTermImgToShow(data['solar_term_list'][id]['st_img'])
    // setSolarTermImgs(solarTermId.map((eid) => data['solar_term_list'][id]))

    // setSolarTermBookToShow(data['solar_term_books'][1]['title'])
    console.log('test', data['current_solar_term_id'])

    let stImgArray = solarTermId.map(
      (id) => data['solar_term_list'][id]['st_img']
    )
    // console.log(stImgArray)
    setSolarTermImgs(stImgArray)

    return data
  }

  function handleCardClick(id) {}

  function handlePlateToggle(id) {
    setStClickedId(id)
    setSolarTermToShow(solarTermData['solar_term_list'][id]['solar_term'])
    setSolarTermDesc(solarTermData['solar_term_list'][id]['st_desc'])
    // console.log(solarTermImgs)
    // console.log(id)
    // let stImg = solarTermImgs[id]
    // console.log(stImg)
    let stImg = solarTermData['solar_term_list'][id]['st_img']
    // setSolarTermImgToShow(solarTermData['solar_term_list'][id]['st_img'])
    // setSolarTermImgToShow(solarTermImgs[id])

    newTargetToggle(id)
  }

  function newTargetToggle(id) {
    // 設定圓盤圖片
    let stImg = solarTermData['solar_term_list'][id]['st_img']

    setRedCenterImg(
      solarTermClicked
        ? [
            'http://localhost:3000/images/hans/solar-terms-circle/' + stImg,
            'img-full fadeIn',
          ]
        : [
            'http://localhost:3000/images/hans/solar-terms-circle/' + stImg,
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
        : 'd-flex justify-content-center fadeOut'
    )

    setSolarTermClicked(!solarTermClicked)

    setShowBreadCrumb(!showBreadCrumb)
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
              {/* 過往節氣選書卡片， 6 張卡片 */}

              <OldSeasonBookCardList
                handlePlateToggle={handlePlateToggle}
                newTargetToggle={newTargetToggle}
                solarTermBookToShow={solarTermBookToShow}
                solarTermBookToShowList={solarTermBookToShowList}
                firstCardSid={firstCardSid}
                solarTermNameList={solarTermNameList}
                solarTermClicked={solarTermClicked}
                stClickedId={stClickedId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(OldSeasons)
