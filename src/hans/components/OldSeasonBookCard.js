import { useState } from 'react'

// import style
import '../styles/old-season-book-card.scss'

function OldSeasonBookCard() {
  // 控制物件隱藏或出現
  const [itemVisible, setItemVisible] = useState(true)

  // 控制元素隱藏或出現
  const handleVisible = () => {
    setItemVisible(!itemVisible)
  }

  return (
    <>
      {/* <!-- book card start --> */}
      <div className={itemVisible ? 'fadeIn book-card' : 'fadeOut book-card'}>
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
          <div className="book-solar-term-year">
            節氣 年份
            {/* fade in/out 測試  */}
            <input
              className="fadeOut"
              type="checkbox"
              // checked={itemVisible.false}
              onChange={() => {
                handleVisible()
              }}
            />
          </div>
        </div>
      </div>
      {/* <!-- book card end --> */}
    </>
  )
}

export default OldSeasonBookCard
