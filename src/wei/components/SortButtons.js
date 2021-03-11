import { FaThLarge, FaListUl, FaCaretDown } from 'react-icons/fa'
import PriceFilterPop from '../components/PriceFilterPop'
import { useState } from 'react'
import { withRouter } from 'react-router'

function SortButtons(props) {
  let searchParams = new URLSearchParams(props.location.search)
  let url = props.match.url
  const { setCardList, setPage, avgPrice } = props
  // avgPrice
  //   const [avgPrice, setAvgPrice] = useState(0)
  // minPrice, maxPrice 價格篩選
  const [sliderValues, setSliderValues] = useState([0, 1000])
  // sorts 排序條件按鈕事件處理
  //（priceDESC, priceASC, discountDESC, discountASC, pubyearDESC, pubyearASC, starsDESC, starsASC）
  function sortsButtonClick(click1, click2, num) {
    const sortButton = document.querySelectorAll('.wei-sort-button')
    const sortArrows = document.querySelectorAll('.wei-sort-arrow')
    const sortArrow = sortButton[num].firstElementChild
    for (let svg of sortArrows) {
      svg.style.opacity = '0'
    }
    if (
      searchParams.get('sorts') !== click1 &&
      searchParams.get('sorts') !== click2
    ) {
      searchParams.set('sorts', click1)
      sortArrow.style.opacity = '1'
      sortArrow.style.transform = 'scaleY(1)'
    } else if (searchParams.get('sorts') === click1) {
      searchParams.set('sorts', click2)
      sortArrow.style.opacity = '1'
      sortArrow.style.transform = 'scaleY(-1)'
    } else {
      searchParams.delete('sorts')
      sortArrow.style.opacity = '0'
    }
    setPage(1)
    searchParams.delete('page')
    const queryString = {
      pathname: url,
      search: '?' + searchParams.toString(),
    }
    props.history.push(queryString)
  }
  return (
    <>
      <div className="col-12 wei-button-group">
        <div className="wei-top-buttons d-flex">
          <PriceFilterPop
            avgPrice={avgPrice}
            setSliderValues={setSliderValues}
            sliderValues={sliderValues}
          />
          <button
            className="btn-rounded-dark wei-sort-button"
            onClick={() => {
              const click1 = 'priceDESC'
              const click2 = 'priceASC'
              sortsButtonClick(click1, click2, 0)
            }}
          >
            價格排序
            <FaCaretDown className="ml-1 wei-sort-arrow" />
          </button>
          <button
            className="btn-rounded-dark wei-sort-button"
            onClick={() => {
              const click1 = 'discountDESC'
              const click2 = 'discountASC'
              sortsButtonClick(click1, click2, 1)
            }}
          >
            折扣
            <FaCaretDown className="ml-1 wei-sort-arrow" />
          </button>
        </div>
        <div className="wei-bottom-buttons d-flex">
          <button
            className="btn-rounded-dark wei-sort-button"
            onClick={() => {
              const click1 = 'starsDESC'
              const click2 = 'starsASC'
              sortsButtonClick(click1, click2, 2)
            }}
          >
            評分
            <FaCaretDown className="ml-1 wei-sort-arrow" />
          </button>
          <button
            className="btn-rounded-dark wei-sort-button"
            onClick={() => {
              const click1 = 'pubyearDESC'
              const click2 = 'pubyearASC'
              sortsButtonClick(click1, click2, 3)
            }}
          >
            出版年份
            <FaCaretDown className="ml-1 wei-sort-arrow" />
          </button>
          <button
            className="btn-rounded-dark"
            onClick={() => {
              setCardList(true)
            }}
          >
            <FaListUl />
          </button>
          <button
            className="btn-rounded-dark"
            onClick={() => {
              setCardList(false)
            }}
          >
            <FaThLarge />
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(SortButtons)
