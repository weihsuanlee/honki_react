import '../styles/product.scss'
import { useEffect, useState } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { FaBook } from 'react-icons/fa'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import ProductBanner from '../components/ProductBanner'
import ListSpinner from '../components/ListSpinner'
import CardSpinner from '../components/CardSpinner'
import ProductPagination from '../components/ProductPagination'
import ProductCardDisplay from '../components/ProductCardDisplay'
import ProductListDisplay from '../components/ProductListDisplay'
import SortButtons from '../components/SortButtons'

function Product(props) {
  // 書籍商品
  const [books, setBooks] = useState([])
  // 分類選單 Display
  const [categoryDisplay, setCategoriesDisplay] = useState([])
  // 篩選搜尋
  const [search, setSearch] = useState('')
  const [searchSelect, setSearchSelect] = useState('title_')
  const [searchTitle, setSearchTitle] = useState('書名')
  // avgPrice
  const [avgPrice, setAvgPrice] = useState(0)
  // 分頁 pagination
  const [totalPages, setTotalPages] = useState('')
  const [page, setPage] = useState(1)
  // 列表切換
  const [cardList, setCardList] = useState(false)
  // spinner
  const [isLoading, setIsLoading] = useState(true)
  // 設定navbar搜尋欄 顯示
  const { setNavSearchShow } = props

  // 模擬componentDidMount
  useEffect(() => {
    getDataFromServer()
    setNavSearchShow(false)
  }, [])

  // 模擬出componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('component will unmount')
      setNavSearchShow(true)
    }
  }, [])

  // 模擬componentDidUpdate
  useEffect(() => {
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
      // 1秒後關閉spinner
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
    filterProduct()
    console.log(props)

    if ((props.match.url === '/product') & !props.location.search) {
      window.scrollBy(0, 0)
    } else {
      // window.scrollBy(0, 0.75 * window.innerHeight)
      window.scrollBy(0, 0.95 * window.innerHeight)
    }
  }, [props.location])

  // 列表商品資料
  const getDataFromServer = async () => {
    // 先開啟spinner
    setIsLoading(true)

    // 和伺服器要資料
    const response = await fetch('http://localhost:3333/product', {
      method: 'get',
    })
    const data = await response.json()
    // console.log(data)
    setBooks(data.rows)
    setCategoriesDisplay(data.c_rows)
    setTotalPages(data.totalPages)

    // 1.5秒後關閉spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }
  // 書籍分類選單
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
  // spinner 載入緩衝骨架
  const cardSpinner = <CardSpinner show="true" />
  const listSpinner = <ListSpinner show="true" />
  // 查無相關商品
  const noResults = (
    <>
      <div className="mx-auto mt-5">
        <h6 className="text-center my-5">
          <FaBook /> 查無相關商品
        </h6>
        <div className="mx-auto" style={{ width: '80%' }}>
          <img
            src="http://localhost:3000/images/wei/mushroom.gif"
            className="w-100 img-full"
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
          <SortButtons
            setCardList={setCardList}
            setPage={setPage}
            avgPrice={avgPrice}
          />
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
          <div className="col-12 col-lg-10 col-xl-9 wei-pagination">
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
