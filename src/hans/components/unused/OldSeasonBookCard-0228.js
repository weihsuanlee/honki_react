// import { useState } from 'react'
// import { Component } from 'react'

// import style
import '../styles/old-season-book-card.scss'

function OldSeasonBookCard(props) {
  const {
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
        className="hans-book-card"
        onClick={() => {
          // console.log(solarTermClicked)
          if (solarTermClicked === true) {
            handlePlateToggle(solarTermToShow)
            // console.log('handlePlateToggle')
          } else {
            newTargetToggle(solarTermToShow)
            // handlePlateToggle(solarTermToShow)
            // console.log('newTargetToggle + handlePlateToggle')
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
        <div className="hans-book-base hans-pointer">
          <img
            className="hans-book-img"
            src={'http://localhost:3000/images/books/' + bookImg}
            alt=""
          />
        </div>
        <div className="hans-book-card-description">
          {/* <!-- 書名 28 字以內 --> */}
          <div className="hans-card-solar-term-year">
            {solarTermName} {cardYear}
          </div>
          <div className="hans-book-name">{bookName}</div>
        </div>
      </div>
      {/* <!-- book card end --> */}
    </>
  )
}

export default OldSeasonBookCard
