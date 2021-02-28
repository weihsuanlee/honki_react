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
        className="book-card"
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
        <div className="book-base">
          <img
            className="book-img"
            src={'http://localhost:3000/images/books/' + bookImg}
            alt=""
          />
        </div>
        <div className="book-description">
          {/* <!-- 書名 28 字以內 --> */}
          <div className="book-solar-term-year">
            {solarTermName} {cardYear}
          </div>
          <div className="book-name">{bookName}</div>
        </div>
      </div>
      {/* <!-- book card end --> */}
    </>
  )
}

export default OldSeasonBookCard
