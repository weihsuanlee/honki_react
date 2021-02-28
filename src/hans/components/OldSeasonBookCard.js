import { useState } from 'react'
// import { Component } from 'react'

// import style
import '../styles/old-season-book-card.scss'

function OldSeasonBookCard(props) {
  const [cardStSid, setCardStSid] = useState(-1)
  const [cardClass, setCardClass] = useState('hans-book-card')
  const [elementFadeIn, setElementFadeIn] = useState('fadeOut')
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
    solarTermToShow,
    bookName,
    bookImg,
    cardYear,
    solarTermName,
    solarTermClicked,
    stClickedId,
  } = props
  // console.log('card', solarTermToShowList)

  return (
    <>
      {/* <!-- book card start --> */}
      <div
        className={cardClass}
        onClick={() => {
          // console.log(solarTermClicked)
          if (solarTermClicked === true) {
            handlePlateToggle(solarTermToShow)
            console.log('solarTermClicked', solarTermClicked)
            setCardClass('hans-book-card2')
            setElementFadeIn('fadeIn')
            setSolarTermYearSelect('hans-card-solar-term-year2')
            // setCardBaseClass('hans-book-card2')
            // console.log('handlePlateToggle')
          } else {
            setCardClass('hans-book-card')
            // setCardBaseClass('hans-book-card2')
            newTargetToggle(solarTermToShow)
            // handlePlateToggle(solarTermToShow)
            // console.log('newTargetToggle + handlePlateToggle')
            setElementFadeIn('fadeOut')
            setSolarTermYearSelect('hans-card-solar-term-year')
            console.log('收合卡片確認: ', solarTermToShow)
          }

          // 第二版動作
          // if (stClickedId !== -1 || stClickedId !== solarTermToShow) {
          //   newTargetToggle(solarTermToShow)
          // } else {
          //   handlePlateToggle(solarTermToShow)
          // }

          // 第一版動作
          // handlePlateToggle(solarTermToShow)
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
