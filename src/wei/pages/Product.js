import '../styles/product.scss'
import { FaThLarge, FaListUl, FaHeart } from 'react-icons/fa'
import { withRouter, NavLink, Link, Switch, Route } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import ProductBanner from '../components/ProductBanner'
import ListSpinner from '../components/ListSpinner'
import PriceFilterPop from '../components/PriceFilterPop'
import ProductPagination from '../components/ProductPagination'
import { useEffect, useState } from 'react'

function Product(props) {
  // console.log(props)
  // 書籍商品
  const [books, setBooks] = useState([])
  // 分類選單 Display
  const [categoryDisplay, setCategoriesDisplay] = useState([])
  // 篩選類別
  const [category, setCategory] = useState('')
  // 篩選價格
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  // 排序條件（priceDESC, priceASC, discountDESC, discountASC, pubyearDESC, pubyearASC, starsDESC, starsASC）
  const [sorts, setSorts] = useState('')
  // 篩選搜尋
  const [search, setSearch] = useState('')
  // 分頁pagination
  const [totalPages, setTotalPages] = useState('')
  const [page, setPage] = useState(1)

  // newState 處理setState異步用
  let newState = ''
  // let query = ''
  // if (sorts) query += `&sorts=${sorts}`
  // if (search) query += `&search=${search}`
  // if (minPrice) query += `&minPrice=${minPrice}`
  // if (maxPrice) query += `&maxPrice=${maxPrice}`

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
        // 'http://localhost:3333/product' +
        //   (category ? `/${category}` : '') +
        //   (query ? `?${query}` : ''),
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
  }, [category, sorts])
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
            <PriceFilterPop />
            <button
              className="btn-rounded-dark text-center"
              onClick={() => {
                if (sorts === 'discountDESC') {
                  newState = 'discountASC'
                } else {
                  newState = 'discountDESC'
                }
                setSorts(newState)
                props.history.push(`?sorts=${newState}`, [sorts])
              }}
            >
              <p className="wei-discount">折扣</p>
            </button>
            <button
              className="btn-rounded-dark"
              onClick={() => {
                if (sorts === 'starsDESC') {
                  newState = 'starsASC'
                } else {
                  newState = 'starsDESC'
                }
                setSorts(newState)
                props.history.push(`?sorts=${newState}`, [sorts])
              }}
            >
              評分
            </button>
            <br className="d-md-none" />
            <button
              className="btn-rounded-dark"
              onClick={() => {
                if (sorts === 'pubyearDESC') {
                  newState = 'pubyearASC'
                } else {
                  newState = 'pubyearDESC'
                }
                setSorts(newState)
                props.history.push(`?sorts=${newState}`, [sorts])
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
