import { useState } from 'react'
import { FaTimesCircle } from 'react-icons/fa'

// import style
import '../styles/old-season-book-card.scss'

function OldSeasonBookCard(props) {
  const [cardStSid, setCardStSid] = useState(-1)
  const [cardClass, setCardClass] = useState('hans-book-card')
  const [elementDisPlay, setElementDisPlay] = useState('displayOff')
  const [cardBaseClass, setCardBaseClass] = useState('hans-book-base')
  const [solarTermYearSelect, setSolarTermYearSelect] = useState(
    'hans-card-solar-term-year'
  )
  const [bookNameStyle, setbookNameStyle] = useState('hans-book-name')

  const {
    cardStBookId,
    handlePlateToggle,
    newTargetToggle,
    getCardBookSid,
    solarTermToShow,
    bookName,
    bookImg,
    cardYear,
    whyThisBook,
    thisYearHappened,
    relatedLink,
    solarTermName,
    solarTermClicked,
    stClickedId,
  } = props

  return (
    <>
      {/* <!-- book card start --> */}
      <div
        className={cardClass}
        onClick={() => {
          if (solarTermClicked === true) {
            handlePlateToggle(solarTermToShow)
            console.log('solarTermClicked', solarTermClicked)
            setCardClass('hans-book-card2')

            setTimeout(() => setElementDisPlay('displayOn'), 1500)
            setTimeout(() => setElementDisPlay('fadeIn'), 1550)
            setSolarTermYearSelect('hans-card-solar-term-year2')
            setbookNameStyle('hans-book-name2')
            console.log('打開卡片，確認節氣編號: ', solarTermToShow)
            getCardBookSid(cardStBookId)
            console.log('打開卡片，確認書本編號: ', cardStBookId)
          }
        }}
      >
        <div className="hans-card-col-left">
          <div className={cardBaseClass}>
            <img
              className="hans-book-img"
              src={'http://localhost:3000/images/books/' + bookImg}
              alt=""
            />
          </div>
          <div className="hans-book-card-description">
            {/* <!-- 書名 28 字以內 --> */}
            <div className={bookNameStyle}>{bookName}</div>
          </div>
          <div className={solarTermYearSelect}>
            {solarTermName} {cardYear} 選書
          </div>
        </div>
        <div
          className={'hans-card-col-right ' + elementDisPlay}
          // 之後可能可以移到別的區塊，現在是 debug 方便掛在一起
        >
          <div className="hans-close-btn">
            <FaTimesCircle
              size={25}
              onClick={() => {
                setCardClass('hans-book-card')
                newTargetToggle(solarTermToShow)
                setElementDisPlay('displayOff')
                setSolarTermYearSelect('hans-card-solar-term-year')
                setbookNameStyle('hans-book-name')
                console.log('收合卡片確認: ', solarTermToShow)
              }}
            />
          </div>
          <div className="hans-osb-content-subtitle">時事回顧</div>
          <div className="hans-osb-content">{thisYearHappened}</div>
          <div className="hans-osb-content-subtitle">選書說明</div>
          <div className="hans-osb-content">{whyThisBook}</div>
          <div className="hans-osb-content-subtitle">延伸閱讀</div>
          <div className="hans-osb-content">{relatedLink}</div>
        </div>
      </div>
      {/* <!-- book card end --> */}
    </>
  )
}

export default OldSeasonBookCard
