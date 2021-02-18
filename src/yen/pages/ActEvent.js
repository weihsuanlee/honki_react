// import { withRouter } from 'react-router-dom'

import '../styles/yen-event.scss'
import { FaMapMarkerAlt } from 'react-icons/fa'
import SvgCricket from '../components/svg/SvgCricket'
import SvgSignUpLadybug from '../components/svg/SvgSignUpLadybug'

function ActEvent(props) {
  return (
    <>
      {/* <h2>{props.match.params.id}</h2> */}
      <div className="yen-event-header">
        <nav aria-label="breadcrumb" className="yen-event-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-honki">
              <a href="#">首頁</a>
            </li>
            <li className="active" aria-current="page">
              活動講座
            </li>
            <li className="active" aria-current="page">
              【聚說說書會
              台北場】在藏身之處，活得燦爛如初：一個不良少年走向斜槓青年的生命故事
            </li>
          </ol>
        </nav>
        <div className="yen-event-header-box">
          <div className="yen-event-pic">
            <img
              src="http://localhost:3000/images/yen/hot/hot-4-w.jpg"
              alt=""
            />
          </div>
          <div className="yen-event-des">
            <div className="yen-event-location-logo">
              <FaMapMarkerAlt className="fas fa-map-marker-alt" />
            </div>
            <div className="yen-event-subject">
              <h5>
                【聚說說書會
                台北場】在藏身之處，活得燦爛如初：一個不良少年走向斜槓青年的生命故事
              </h5>
            </div>
            <div className="yen-event-date">
              <span>活動時間：2021年01月24日 14:00 ~ 15:30</span>
            </div>
            <div className="yen-event-location">
              <span>
                活動地點：台北市中正區重慶南路二段51號B1 （信誼好好生活廣場）
              </span>
            </div>
            <div className="yen-event-des-bottom">
              <div className="yen-event-des-price">
                <div className="yen-event-nt">
                  <span>NT</span>
                </div>
                <div className="yen-event-money">
                  <span>200</span>
                </div>
              </div>
              <div className="yen-event-signup">
                <button className="btn-md-dark yen-event-signup-btn">
                  我要報名
                </button>
              </div>
            </div>
          </div>
          <div className="yen-event-cricket">
            <SvgCricket />
          </div>
        </div>
      </div>

      <div className="yen-event-body-box">
        <div className="yen-event-des-box">
          <div className="yen-event-tag">
            <div className="yen-event-tag-des">
              <span>活動介紹</span>
            </div>
            <div className="yen-event-tag-trans">
              <span>交通方式</span>
            </div>
            <div className="yen-event-tag-att">
              <span>注意事項</span>
            </div>
            <div className="yen-event-tag-cancel">
              <span>更改或取消辦法</span>
            </div>
          </div>
          <div className="yen-event-box">
            <div className="yen-event-text">
              <span>
                主講：林瑞昌 / 吉光旅遊總經理
                <br />
                <br />
                超過20年的旅行和領隊經驗，造訪多達70幾個國家，足跡遍行亞洲、歐洲、美洲和非洲，甚至遠行到世界的盡頭南極…以達人的視角，
                結合閱讀與旅行，讓「懂旅行x最會玩的島遊玩家」林瑞昌，帶領大小朋友，以實際旅遊經驗，來看見全新風貌的圖畫書，為親子之間的
                日常增添更多樂趣！
                <br />
                <br />
                ※ 歡迎喜愛圖畫書、渴望親子旅行，有著驛動之心的爸爸媽媽來報名※
                <br />
                <br />
                1 出發前，如何做功課？
                <br />
                <br />
                藉由真實遊法之旅，分享如何透過圖畫書等多元方式，幫助孩子在出發前，先認識旅遊當地的人文、氣候和景觀特色。也因為有了親子共
                讀經驗，旅行過程中，又會帶來怎樣的驚喜與收穫呢？
                <br />
                <br />
                2 現在，就跟著圖畫去旅行！
                <br />
                <br />
                ⭐台南安平《劍獅出巡》｜劍獅故鄉 文旅起程
                <br />
                <br />
                你知道台南安平的守護神是誰嗎？
                <br />
                <br />
                各種臉的顏色，又分別代表什麼守護寓意呢？
                <br />
                <br />
                在台南安平的巷弄中間蘊藏著歷史文化新舊交融的痕跡，牆上、屋瓦上有大大小小劍獅的身影。「劍獅」是傳統文物中驅邪避煞的鎮宅神
                獸，有安家守護的寓意，也是台南在地的形象代表。
                <br />
                <br />
                捕捉巷弄的街景光影、探尋文化的人文深度、感受歷史的寓意傳承，喜愛深度旅遊的大人小孩、文化青年們，不防帶上《劍獅出巡》和「
                劍獅地圖」，來趟「按圖索驥」的尋覓之旅，一起來循跡訪古一下！
                <br />
                <br />
                3 下一站，我們要前往哪裡呢？
                <br />
                <br />
                ⭐台南七股《黑面琵鷺來過冬》｜琵鷺嬌客 國際寶藏
                <br />
                來場生態之旅，帶孩子一起認識國際級濕地─台南曾文溪口濕地吧！
                <br />
                <br />
                ⭐台中東勢《小桃妹》｜客家風采 有情有味
                <br />
                多元文化教育，就從本土文化開始！以獨特的版畫畫風，描繪客家民間習俗和文化。
                <br />
                <br />
                ⭐台灣環島之旅《寶島小遊記》｜島遊指南 入門幫手
                <br />
                結合了自然生態、人文地理和歷史文化，帶你全台玩透透，還可以邊讀邊玩大富翁哦！
                <br />
                <br />
                ⭐城鎮溫度之旅《巴士到站了》｜生活風景 用心覺察
                <br />
                試著讓心慢下來，細心觀察沿途的風景與人，培養生活中的觀察力與感受力！
                <br />
                <br />
                4 旅遊懶人包
                <br />
                <br />
                懶人包大公開，想知道旅遊達人最推薦的私房景點嗎？那你絕不能錯過這場講座！不論是旅遊經驗豐富，或是準備第一次出遊的你，都能
                收穫滿滿，輕鬆出遊，享受旅行帶來的樂趣！
                <br />
                <br />
              </span>
            </div>
          </div>
          <div className="yen-signup-ladybug">
            <SvgSignUpLadybug />
          </div>
        </div>
      </div>
    </>
  )
}

// export default withRouter(ActEvent)
export default ActEvent
