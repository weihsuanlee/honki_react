import '../styles/product.scss'
import { FaThLarge, FaListUl, FaHeart, FaStar } from 'react-icons/fa'
import { withRouter, NavLink, Switch, Route } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import ProductBanner from '../components/ProductBanner'
import ListSpinner from '../components/ListSpinner'
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
  // minPrice, maxPrice 價格篩選
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  // 分頁 pagination
  const [totalPages, setTotalPages] = useState('')
  const [page, setPage] = useState(1)
  // query string
  const [queryString, setQueryString] = useState('')

  // sorts 排序條件按鈕事件處理
  //（priceDESC, priceASC, discountDESC, discountASC, pubyearDESC, pubyearASC, starsDESC, starsASC）
  function sortsButtonClick(click1, click2) {
    if (
      searchParams.get('sorts') !== click1 &&
      searchParams.get('sorts') !== click2
    ) {
      searchParams.set('sorts', click1)
    } else if (searchParams.get('sorts') === click1) {
      searchParams.set('sorts', click2)
    } else {
      searchParams.delete('sorts')
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

  const spinner = <ListSpinner show="true" />
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
          <div className="wei-card-icon">NEW</div>
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
            <div className="wei-book-price">NT$ {v.final_price}</div>
          </div>
        </div>
      ))}
    </>
  )

  // console.log(props)

  return (
    <>
      <ProductBanner />
      <div className="container-fluid my-5">
        <div className="row justify-content-between align-items-center wei-breadcrumb-section">
          <div className="col-12">
            <MultiLevelBreadCrumb />
          </div>
          <div className="col-12 wei-button-group">
            <PriceFilterPop setQueryString={setQueryString} />
            <button
              className="btn-rounded-dark text-center"
              onClick={() => {
                const click1 = 'discountDESC'
                const click2 = 'discountASC'
                sortsButtonClick(click1, click2)
              }}
            >
              <p className="wei-discount">折扣</p>
            </button>
            <button
              className="btn-rounded-dark"
              onClick={() => {
                const click1 = 'starsDESC'
                const click2 = 'starsASC'
                sortsButtonClick(click1, click2)
              }}
            >
              評分
            </button>
            <br className="d-md-none" />
            <button
              className="btn-rounded-dark"
              onClick={() => {
                const click1 = 'pubyearDESC'
                const click2 = 'pubyearASC'
                sortsButtonClick(click1, click2)
              }}
            >
              出版年份
            </button>
            <button className="btn-rounded-dark">
              <FaListUl />
            </button>
            <button className="btn-rounded-dark">
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
                  {isLoading ? spinner : bookCardDisplay}
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
