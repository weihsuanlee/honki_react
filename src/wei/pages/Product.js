import '../styles/product.scss'
import {
  FaThLarge,
  FaListUl,
  FaHeart,
  FaStar,
  FaCaretDown,
} from 'react-icons/fa'
import { withRouter, NavLink, Switch, Route } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import ProductBanner from '../components/ProductBanner'
import ListSpinner from '../components/ListSpinner'
import CardSpinner from '../components/CardSpinner'
import PriceFilterPop from '../components/PriceFilterPop'
import ProductPagination from '../components/ProductPagination'
import { useEffect, useState } from 'react'

function Product(props) {
  let searchParams = new URLSearchParams(props.location.search)
  let url = props.match.url

  console.log(props)
  // 書籍商品
  const [books, setBooks] = useState([])
  // 分類選單 Display
  const [categoryDisplay, setCategoriesDisplay] = useState([])
  // 篩選類別
  const [category, setCategory] = useState('')
  // 篩選搜尋
  const [search, setSearch] = useState('')
  const [searchSelect, setSearchSelect] = useState('title')
  // minPrice, maxPrice 價格篩選
  const [sliderValues, setSliderValues] = useState([0, 1000])
  // avgPrice
  const [avgPrice, setAvgPrice] = useState(0)
  // 分頁 pagination
  const [totalPages, setTotalPages] = useState('')
  const [page, setPage] = useState(1)
  // query string
  const [queryString, setQueryString] = useState('')
  // 列表切換
  const [cardList, setCardList] = useState(false)

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
    setQueryString(queryString)
    props.history.push(queryString)
  }
  // 模擬componentDidMount
  useEffect(() => {
    getDataFromServer()
  }, [])

  // 模擬componentDidUpdate
  useEffect(() => {
    console.log(props)
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
  }, [category, queryString])
  const [isLoading, setIsLoading] = useState(true)
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
              onClick={() => {
                setCategory(v.eng_name)
              }}
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
  const bookCardDisplay = (
    <>
      {books.map((v, i) => (
        <div
          onClick={() => {
            props.history.push('/products/' + v.sid)
          }}
          className="col-6 col-sm-6 col-md-4 col-lg-3 wei-card"
          key={i}
        >
          <div
            className={
              `wei-card-icon ` +
              (v.tag ? 'd-block ' : 'd-none ') +
              (v.tag === 'SALE' ? 'theme-color' : '')
            }
          >
            {v.tag}
          </div>
          <div className="wei-card-pic position-relative">
            <div className="wei-book-pic">
              <img
                className="w-100"
                src={`http://localhost:3000/images/books/` + v.book_pics}
                alt=""
              />
            </div>
            <div className="wei-heart-bg">
              <FaHeart className="wei-heart" />
            </div>
          </div>
          <div className="wei-book-text">
            <p className="wei-book-title">{v.title}</p>
            <p className="wei-book-author">{v.author}</p>
            <div className="d-flex justify-content-between">
              <span className="wei-stars wei-product-stars">
                <FaStar
                  className={`mr-1 wei-star ` + (v.stars > 0 ? 'yellow' : '')}
                />
                <FaStar
                  className={`mr-1 wei-star ` + (v.stars > 1 ? 'yellow' : '')}
                />
                <FaStar
                  className={`mr-1 wei-star ` + (v.stars > 2 ? 'yellow' : '')}
                />
                <FaStar
                  className={`mr-1 wei-star ` + (v.stars > 3 ? 'yellow' : '')}
                />
                <FaStar
                  className={`mr-1 wei-star ` + (v.stars > 4 ? 'yellow' : '')}
                />
              </span>
              <del>NT ${v.price}</del>
            </div>
            <div className="wei-book-price">NT$ {v.final_price}</div>
          </div>
        </div>
      ))}
    </>
  )
  const bookCardListDisplay = (
    <>
      {books.map((v, i) => (
        <div className="wei-card-list position-relative w-100" key={i}>
          <div
            className={
              `wei-list-icon ` +
              (v.tag ? 'd-block ' : 'd-none ') +
              (v.tag === 'SALE' ? 'theme-color' : '')
            }
          >
            {v.tag}
          </div>
          <div
            className="wei-card-list-pic mr-5 d-flex"
            onClick={() => {
              props.history.push('/products/' + v.sid)
            }}
          >
            <div className="wei-list-book-pic my-auto mx-auto">
              <img
                className="w-100"
                src={`http://localhost:3000/images/books/` + v.book_pics}
                alt=""
              />
            </div>
            <div className="wei-list-heart-bg">
              <FaHeart className="fas fa-heart wei-list-heart" />
            </div>
          </div>
          <div className="wei-card-list-text">
            <p className="wei-book-title w-100">{v.title}</p>{' '}
            <span className="wei-stars wei-product-stars">
              <FaStar
                className={`mr-1 wei-star ` + (v.stars > 0 ? 'yellow' : '')}
              />
              <FaStar
                className={`mr-1 wei-star ` + (v.stars > 1 ? 'yellow' : '')}
              />
              <FaStar
                className={`mr-1 wei-star ` + (v.stars > 2 ? 'yellow' : '')}
              />
              <FaStar
                className={`mr-1 wei-star ` + (v.stars > 3 ? 'yellow' : '')}
              />
              <FaStar
                className={`mr-1 wei-star ` + (v.stars > 4 ? 'yellow' : '')}
              />
            </span>
            <div className="d-flex w-100 mt-2">
              <div className="wei-book-text-left">
                <p className="wei-book-author">{v.author}</p>
                <div className="wei-book-price wei-book-list-price">
                  NT$ {v.final_price}
                  <span className="wei-detail-badge mx-4 px-3 py-1">
                    {v.discount.toString().length === 4
                      ? `${v.discount * 100}折`
                      : v.discount.toString().length === 3
                      ? `${v.discount * 10}折`
                      : '原價'}
                  </span>
                  <del className="wei-del-price">NT ${v.price}</del>
                </div>
              </div>
              <div className="wei-book-text-right">
                <p className="wei-book-pub">出版社：{v.publication}</p>
                <p className="wei-book-pub">出版年份：{v.pub_year}</p>
              </div>
            </div>
            <div className="wei-book-overview mt-2">
              簡介：
              <br /> {v.book_overview}
            </div>
          </div>
        </div>
      ))}
    </>
  )

  // console.log(props)

  return (
    <>
      <ProductBanner
        searchSelect={searchSelect}
        setSearchSelect={setSearchSelect}
        queryString={queryString}
        setQueryString={setQueryString}
        search={search}
        setSearch={setSearch}
      />
      <div className="container-fluid my-5">
        <div className="row justify-content-between align-items-center wei-breadcrumb-section">
          <div className="col-12">
            <MultiLevelBreadCrumb />
          </div>
          <div className="col-12 wei-button-group">
            <PriceFilterPop
              avgPrice={avgPrice}
              setQueryString={setQueryString}
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
            <br className="d-md-none" />
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
        <Switch>
          <Route path={`${props.match.path}/:category?`}>
            <div className="row justify-content-center">
              <div className="d-none d-lg-block col-2">{categoriesDisplay}</div>
              <div className="col-11 col-lg-10 col-xl-9">
                <div className="row">
                  {cardList
                    ? isLoading
                      ? listSpinner
                      : bookCardListDisplay
                    : isLoading
                    ? cardSpinner
                    : bookCardDisplay}
                </div>
              </div>
            </div>
            <div className="row justify-content-end ">
              <div className="col-11 col-lg-10 col-xl-9 wei-pagination">
                <ProductPagination
                  totalPages={totalPages}
                  page={page}
                  setPage={setPage}
                  queryString={queryString}
                  setQueryString={setQueryString}
                />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default withRouter(Product)
