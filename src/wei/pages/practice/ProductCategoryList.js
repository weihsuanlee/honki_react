import '../styles/product.scss'
import { FaThLarge, FaListUl, FaHeart } from 'react-icons/fa'
import { withRouter, NavLink } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import ProductBanner from './ProductBanner'
import Spinner from '../../components/Spinner'
import { useEffect, useState } from 'react'

function Product(props) {
  const [books, setBooks] = useState([])
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

    // 2秒後關閉spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  let filterUrl = 'category=3'
  async function filterProduct() {
    // 先開啟spinner
    setIsLoading(true)
    // 和伺服器要資料
    const response = await fetch('http://localhost:3333/product?' + filterUrl, {
      method: 'get',
    })
    const data = await response.json()
    console.log(data, 'data1')
    setBooks(data.rows)

    // 2秒後關閉spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const spinner = <Spinner show="true" />
  const bookCardDisplay = (
    <>
      {books.map((v, i) => (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 wei-card" key={i}>
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
  // 模擬componentDidMout
  useEffect(() => {
    getDataFromServer()
  }, [])

  console.log(props)

  return (
    <>
      <ProductBanner />
      <div className="container-fluid my-5">
        <div className="row justify-content-between align-items-center wei-breadcrumb-section">
          <div className="col-12 col-md-6 ">
            <MultiLevelBreadCrumb />
          </div>
          <div className="col-12 col-md-6 wei-button-group">
            <button className="btn-rounded-dark mr-1">出版日期</button>
            <button className="btn-rounded-dark mr-1">
              <FaListUl />
            </button>
            <button className="btn-rounded-dark">
              <FaThLarge />
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="d-none d-lg-block col-2">
            <div className="wei-categories">
              <h6 className="wei-categories-title">書籍分類</h6>
              <ul>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/lifestyle"
                >
                  <p>生活風格</p>
                </NavLink>

                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/literature"
                >
                  <p>文學小說</p>
                </NavLink>
                <NavLink
                  to="/product?category=3"
                  activeClassName="active"
                  className="wei-category"
                  onClick={() => {
                    filterProduct()
                  }}
                >
                  <p>商業理財</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/arts"
                >
                  <p>藝術設計</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/self-help"
                >
                  <p>心理勵志</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/comics"
                >
                  <p>輕小說 漫畫</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/education"
                >
                  <p>語言考試</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/parenting"
                >
                  <p>親子教養</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/travel"
                >
                  <p>旅遊</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/foods"
                >
                  <p>飲食</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/children"
                >
                  <p>童書</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/foreign"
                >
                  <p>外文書</p>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="col-11 col-lg-10 col-xl-9">
            <div className="row">{isLoading ? spinner : bookCardDisplay}</div>
          </div>
        </div>
        <div className="row justify-content-end ">
          <div className="col-11 col-lg-10 col-xl-9">
            <ul className="pagination wei-pagination">
              <li className="page-item page-left disabled">
                <a
                  className="page-link"
                  href="#pagination"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  ←
                </a>
              </li>
              <li className="page-item page-num page-start active">
                <a className="page-link" href="#pagination">
                  1
                </a>
              </li>
              <li className="page-item page-num">
                <a className="page-link" href="#pagination">
                  2
                </a>
              </li>
              <li className="page-item page-num page-end">
                <a className="page-link" href="#pagination">
                  3
                </a>
              </li>
              <li className="page-item page-right">
                <a
                  className="page-link"
                  href="#pagination"
                  aria-disabled="true"
                >
                  →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Product)
