import '../styles/product.scss'
import { FaThLarge, FaListUl, FaCaretDown, FaBook } from 'react-icons/fa'
import { withRouter, NavLink } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import ProductBanner from '../components/ProductBanner'
import ListSpinner from '../components/ListSpinner'
import CardSpinner from '../components/CardSpinner'
import PriceFilterPop from '../components/PriceFilterPop'
import ProductPagination from '../components/ProductPagination'
import ProductCardDisplay from '../components/ProductCardDisplay'
import ProductListDisplay from '../components/ProductListDisplay'
import { useEffect, useState } from 'react'

function Product(props) {
  let searchParams = new URLSearchParams(props.location.search)
  let url = props.match.url

  // console.log(props)
  // 書籍商品
  const [books, setBooks] = useState([])
  // 分類選單 Display
  const [categoryDisplay, setCategoriesDisplay] = useState([])

  // 篩選搜尋
  const [search, setSearch] = useState('')
  const [searchSelect, setSearchSelect] = useState('title_')
  const [searchTitle, setSearchTitle] = useState('書名')
  // minPrice, maxPrice 價格篩選
  const [sliderValues, setSliderValues] = useState([0, 1000])
  // avgPrice
  const [avgPrice, setAvgPrice] = useState(0)
  // 分頁 pagination
  const [totalPages, setTotalPages] = useState('')
  const [page, setPage] = useState(1)
  // 篩選類別
  // const [category, setCategory] = useState('')
  // query string
  // const [queryString, setQueryString] = useState('')
  // 列表切換
  const [cardList, setCardList] = useState(false)
  // spinner
  const [isLoading, setIsLoading] = useState(true)

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
  // 模擬componentDidMount
  useEffect(() => {
    getDataFromServer()
  }, [])

  // 模擬componentDidUpdate
  useEffect(() => {
    // console.log(props)
    async function filterProduct() {
      // 先開啟spinner
      setIsLoading(true)
      // 和伺服器要資料
      const response = await fetch(
        'http://localhost:3333' +
          props.location.pathname +
          props.location.search,
        {
          method: 'get',
        }
      )
      const data = await response.json()
      console.log(data, 'data filtered')
      setBooks(data.rows)
      setTotalPages(data.totalPages)
      setAvgPrice(data.avgPrice)

      // 1.5秒後關閉spinner
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
    filterProduct()
    window.scrollBy(0, 0.75 * window.innerHeight)
  }, [props.location])

  const getDataFromServer = async () => {
    // 先開啟spinner
    setIsLoading(true)

    // 和伺服器要資料
    const response = await fetch('http://localhost:3333/product', {
      method: 'get',
    })
    const data = await response.json()
    console.log(data)
    setBooks(data.rows)
    setCategoriesDisplay(data.c_rows)
    setTotalPages(data.totalPages)

    // 2秒後關閉spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  const categoriesDisplay = (
    <div className="wei-categories">
      <h6 className="wei-categories-title">書籍分類</h6>
      <ul>
        {categoryDisplay.map((v, i) => (
          <>
            <NavLink
              activeClassName="active"
              className="wei-category"
              key={i}
              to={{ pathname: `/product/${v.eng_name}` }}
            >
              <p>{v.name}</p>
            </NavLink>
          </>
        ))}
      </ul>
    </div>
  )

  const cardSpinner = <CardSpinner show="true" />
  const listSpinner = <ListSpinner show="true" />

  const noResults = (
    <>
      <div className="mx-auto mt-5">
        <h6 className="text-center my-5">
          <FaBook /> 查無相關商品
        </h6>
        <div className="mx-auto" style={{ width: '30%' }}>
          <img
            src="http://localhost:3000/images/wei/clumsy.svg"
            className="w-100"
            alt=""
          />
        </div>
      </div>
    </>
  )

  return (
    <>
      <ProductBanner
        searchSelect={searchSelect}
        setSearchSelect={setSearchSelect}
        search={search}
        setSearch={setSearch}
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        books={books}
      />
      <div className="container-fluid my-5">
        <div className="row justify-content-between align-items-center wei-breadcrumb-section">
          <div className="col-12">
            <MultiLevelBreadCrumb />
          </div>
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
        </div>
        <div className="row justify-content-center">
          <div className="d-none d-lg-block col-2">{categoriesDisplay}</div>
          <div className="col-11 col-lg-10 col-xl-9">
            <div className="row">
              {cardList ? (
                isLoading ? (
                  listSpinner
                ) : (
                  <ProductListDisplay books={books} />
                )
              ) : isLoading ? (
                cardSpinner
              ) : (
                <ProductCardDisplay books={books} />
              )}
              {books.length > 0 ? '' : noResults}
            </div>
          </div>
        </div>
        <div className="row justify-content-end ">
          <div className="col-11 col-lg-10 col-xl-9 wei-pagination">
            {totalPages ? (
              <ProductPagination
                totalPages={totalPages}
                page={page}
                setPage={setPage}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Product)
