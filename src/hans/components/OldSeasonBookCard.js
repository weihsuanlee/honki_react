import { useState } from 'react'

// import style
import '../styles/old-season-book-card.scss'

function OldSeasonBookCard(props) {
  const { handlePlateToggle } = props

  return (
    <>
      {/* <!-- book card start --> */}
      <div
        className="book-card"
        onClick={() => {
          handlePlateToggle()
        }}
      >
        <div className="book-base">
          <img
            className="book-img"
            src="/images/hans/dummy-book-130x180.jpg"
            alt=""
          />
        </div>
        <div className="book-description">
          {/* <!-- 書名 28 字以內 --> */}
          <div className="book-name">書卡範例：書名（最多 28 字）</div>
          <div className="book-solar-term-year">節氣 年份</div>
        </div>
      </div>
      {/* <!-- book card end --> */}
    </>
  )
}

export default OldSeasonBookCard
