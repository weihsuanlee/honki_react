import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { FaTimesCircle } from 'react-icons/fa'

// import style
import '../styles/old-season-book-card.scss'

function OldSeasonBookCard(props) {
  // const [cardStSid, setCardStSid] = useState(-1)
  const [cardClass, setCardClass] = useState('hans-book-card')
  const [elementDisplay, setElementDisplay] = useState('displayOff')
  const [cardBaseClass, setCardBaseClass] = useState('hans-book-base')
  const [solarTermYearSelect, setSolarTermYearSelect] = useState(
    'hans-card-solar-term-year'
  )
  const [bookNameStyle, setbookNameStyle] = useState('hans-book-name')

  //aw-購物車按鈕
  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // props
  const {
    cardStBookId,
    thisBook,
    bookSid,
    handlePlateToggle,
    newTargetToggle,
    getCardBookSid,
    solarTermToShow,
    bookName,
    bookImg,
    cardYear,
    bookOverview,
    whyThisBook,
    thisYearHappened,
    relatedLink,
    solarTermName,
    solarTermClicked,
    // stClickedId,
    //
    // aw-購物車按鈕
    updateCartNum,
  } = props

  // aw-購物車按鈕，更新購物車函式
  const updateCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart5566')) || []
    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.book_sid === item.book_sid)
    // found: index! == -1
    if (index > -1) {
      //currentCart[index].amount++
      setProductName('這個商品已經加過了')
      handleShow()
      console.log(index)
      console.log(item)
      currentCart.push(item)
      console.log(currentCart)
      return
    } else {
      currentCart.push(item)
      localStorage.setItem('cart5566', JSON.stringify(currentCart))
      // 更新購物車數量
      updateCartNum()
    }
    // 設定資料
    setMycart(currentCart)
    setProductName('產品：' + item.name + '已成功加入購物車')
    handleShow()
  }

  return (
    <>
      {/* <!-- book card start --> */}
      <div
        className={cardClass}
        onClick={() => {
          if (solarTermClicked === true) {
            handlePlateToggle(solarTermToShow)
            // console.log('solarTermClicked', solarTermClicked)
            setCardClass('hans-book-card2')

            setTimeout(() => setElementDisplay('displayOn'), 1500)
            setTimeout(() => setElementDisplay('fadeIn'), 1550)
            setSolarTermYearSelect('hans-card-solar-term-year2')
            setbookNameStyle('hans-book-name2')
            // console.log('打開卡片，確認節氣編號: ', solarTermToShow)
            getCardBookSid(cardStBookId)
            // console.log('打開卡片，確認書本編號: ', cardStBookId)
          }
        }}
      >
        <div className="hans-card-col-left">
          <div className={cardBaseClass}>
            <img
              className="hans-book-img"
              onClick={() => {
                !solarTermClicked
                  ? props.history.push('/products/' + bookSid)
                  : console.log('link ready')
              }}
              src={'http://localhost:3000/images/books/' + bookImg}
              alt=""
            />
          </div>
          <div className="hans-book-card-description">
            {/* <!-- 書名 28 字以內 --> */}
            <div
              className={bookNameStyle}
              onClick={() => {
                !solarTermClicked
                  ? props.history.push('/products/' + bookSid)
                  : console.log('link ready')
              }}
            >
              {bookName}
            </div>
          </div>

          <div className={solarTermYearSelect}>
            {solarTermName} {cardYear} 選書
          </div>
          <div className={'hans-book-overview ' + elementDisplay}>
            {bookOverview}
          </div>
          <div
            className={'hans-read-more ' + elementDisplay}
            onClick={() => {
              !solarTermClicked
                ? props.history.push('/products/' + bookSid)
                : console.log('link ready')
            }}
          >
            ...閱讀更多
          </div>
          <div className={'hans-center-block-item ' + elementDisplay}>
            {/* aw-購物車按鈕 */}
            <div
              className="hans-btn-a"
              onClick={() =>
                updateCartToLocalStorage({
                  ISBN: thisBook.ISBN,
                  price: thisBook.final_price,
                  amount: 1,
                  book_id: thisBook.book_pics,
                  book_sid: thisBook.book_sid,
                  bookname: thisBook.title,
                })
              }
            >
              {/* <FaShoppingCart className="hans-fa-shopping-card-item" />{' '} */}
              放入購物車
            </div>
          </div>
        </div>
        <div className={'hans-card-col-right ' + elementDisplay}>
          <div className="hans-close-btn">
            <FaTimesCircle
              size={25}
              onClick={() => {
                setCardClass('hans-book-card')
                newTargetToggle(solarTermToShow)
                setElementDisplay('displayOff')
                setSolarTermYearSelect('hans-card-solar-term-year')
                setbookNameStyle('hans-book-name')
                // console.log('收合卡片確認: ', solarTermToShow)
              }}
            />
          </div>
          <div className="hans-osb-content-subtitle">選書說明</div>
          <div className="hans-osb-content">{whyThisBook}</div>
          <div className="hans-osb-content-subtitle">時事回顧</div>
          <div className="hans-osb-content">{thisYearHappened}</div>
          <div className="hans-osb-content-subtitle">延伸閱讀</div>
          <div className="hans-osb-content">{relatedLink}</div>
        </div>
      </div>
      {/* <!-- book card end --> */}
    </>
  )
}

export default withRouter(OldSeasonBookCard)
