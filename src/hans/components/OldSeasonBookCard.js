import { useState } from 'react'

// import style
import '../styles/old-season-book-card.scss'

function OldSeasonBookCard(props) {
  const [cardStSid, setCardStSid] = useState(-1)
  const [cardClass, setCardClass] = useState('hans-book-card')
  const [elementFadeIn, setElementFadeIn] = useState('displayOff')
  const [cardBaseClass, setCardBaseClass] = useState(
    'hans-book-base hans-pointer'
  )
  const [solarTermYearSelect, setSolarTermYearSelect] = useState(
    'hans-card-solar-term-year'
  )

  const {
    cardStBookId,
    handlePlateToggle,
    newTargetToggle,
    getCardBookSid,
    solarTermToShow,
    bookName,
    bookImg,
    cardYear,
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
            setElementFadeIn('displayOn')
            setSolarTermYearSelect('hans-card-solar-term-year2')
            console.log('打開卡片，確認節氣編號: ', solarTermToShow)
            getCardBookSid(cardStBookId)
            console.log('打開卡片，確認書本編號: ', cardStBookId)
          } else {
            setCardClass('hans-book-card')
            newTargetToggle(solarTermToShow)
            setElementFadeIn('displayOff')
            setSolarTermYearSelect('hans-card-solar-term-year')
            console.log('收合卡片確認: ', solarTermToShow)
          }
        }}
      >
        <div className={cardBaseClass}>
          <img
            className="hans-book-img"
            src={'http://localhost:3000/images/books/' + bookImg}
            alt=""
          />
        </div>
        <div className="hans-book-card-description">
          {/* <!-- 書名 28 字以內 --> */}
          <div className={solarTermYearSelect}>
            {solarTermName} {cardYear}{' '}
            <span className={elementFadeIn}>選書</span>
          </div>
          <div className="hans-book-name">{bookName}</div>
        </div>
      </div>
      {/* <!-- book card end --> */}
    </>
  )
}

export default OldSeasonBookCard
