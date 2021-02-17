import '../styles/cartStyle.scss'
import { FaThLarge, FaListUl, FaHeart } from 'react-icons/fa'
import { withRouter, NavLink } from 'react-router-dom'
// import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
// import ProductBanner from '../components/ProductBanner'
// import ListSpinner from '../components/ListSpinner'
// import MyPopOver from '../components/MyPopOver'
import { useEffect, useState } from 'react'

function Cart(props) {
  // 書籍商品狀態
  const [books, setBooks] = useState([])
  // 分類選單 Display
  const [categoryDisplay, setCategoriesDisplay] = useState([])
  // 篩選類別狀態
  const [category, setCategory] = useState('')
  // 模擬componentDidUpdate
  useEffect(() => {
    filterProduct()
  }, [category])
  const [isLoading, setIsLoading] = useState(true)
  const getDataFromServer = async () => {
    // 先開啟spinner
    setIsLoading(true)

    // 和伺服器要資料
    const response = await fetch('http://localhost:3333/cart', {
      method: 'get',
    })
    const data = await response.json()
    console.log(data)
    setBooks(data.rows)
    setCategoriesDisplay(data.c_rows)

    // 2秒後關閉spinner
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 2000)
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
              to={{
                search: '?category=' + v.category_sid,
              }}
              key={i}
              onClick={() => {
                setCategory(`category=${v.category_sid}`)
              }}
            >
              <p>{v.name}</p>
            </NavLink>
          </>
        ))}
      </ul>
    </div>
  )

  async function filterProduct() {
    // 先開啟spinner
    setIsLoading(true)
    // 和伺服器要資料
    const response = await fetch('http://localhost:3333/product?' + category, {
      method: 'get',
    })
    const data = await response.json()
    console.log(data, 'data1')
    setBooks(data.rows)

    // 1.5秒後關閉spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }
  // const spinner = <ListSpinner show="true" />
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
  // 模擬componentDidMount
  useEffect(() => {
    getDataFromServer()
  }, [])

  // console.log(props)

  return (
    <>
      <div class="container-fluid">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb aw-breadcrumb">
            <li class="breadcrumb-honki">
              <a href="#">首頁</a>
            </li>
            <li class="active" aria-current="page">
              購物車
            </li>
          </ol>
        </nav>
        <div class="row">
          <div class="aw-cart-left">
            <div class="row">
              <div class="col-4"> </div>
              <div class="col-6">
                <div class="row aw-changeProductBtnRow">
                  <div class="col-3"></div>
                  <div class="col-6">
                    <div class=" d-flex justify-content-center">
                      <button class="aw-changeProductBtn-active">書籍</button>
                      <button class="aw-changeProductBtn">活動</button>
                    </div>
                  </div>
                  <div class="col-3"></div>
                </div>
              </div>
              <div class="col-2"></div>
            </div>
          </div>
          <div class="aw-cart-right"></div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="aw-cart-left aw-cartBackground-left contai">
            <div class="row">
              <div class="col-4"></div>

              <div class="aw-cartContent col-6">
                <div class="aw-cart-page1-subtitle row  ">
                  <div class=" col-3">
                    <h6 class="mr-0"></h6>
                  </div>
                  <div class=" col-7 d-flex justify-content-center align-items-center aw-p-9">
                    <h6 class=" m-0 ">商品明細</h6>
                  </div>

                  <div class=" col-2 d-flex justify-content-center align-items-center aw-p-0">
                    <button class="btn-sm-dark aw-btn-sm-dark ">清空</button>
                  </div>
                </div>
                <div class="aw-productAreaPadding">
                  <div class="aw-productArea">
                    <div class="row aw-card d-flex align-items-center ">
                      <div class="col-3 aw-card-pic">
                        <div class="aw-book-pic">
                          <img
                            class="w-100"
                            src="http://localhost:3000/images/aw/cartpic1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="col-7 aw-book-text d-flex justify-content-center aw-p-9">
                        <p class="aw-book-title">種日子的人</p>
                      </div>
                      <div class="col-2 aw-book-price  d-flex justify-content-center aw-p-0">
                        <i class="fas fa-times-circle aw-delete-cross"></i>
                      </div>
                    </div>

                    <div class="row aw-card d-flex align-items-center ">
                      <div class="col-3 aw-card-pic position-relative">
                        <div class="aw-book-pic">
                          <img
                            class="w-100"
                            src="http://localhost:3000/images/aw/cartpic2.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="col-7 aw-book-text d-flex justify-content-center align-items-center aw-p-9">
                        <p class="aw-book-title">山林製造</p>
                      </div>
                      <div class="col-2 aw-book-price  d-flex justify-content-center aw-p-0">
                        <i class="fas fa-times-circle aw-delete-cross"></i>
                      </div>
                    </div>

                    <div class="row aw-card d-flex align-items-center ">
                      <div class="col-3 aw-card-pic position-relative">
                        <div class="aw-book-pic">
                          <img
                            class="w-100"
                            src="http://localhost:3000/images/aw/cartpic3.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="col-7 aw-book-text d-flex justify-content-center align-items-center aw-p-9">
                        <p class="aw-book-title">
                          閃電崩盤：一兆美元的真相!全球追捕，史上最神祕的金融罪犯
                        </p>
                      </div>
                      <div class="col-2 aw-book-price  d-flex justify-content-center aw-p-0">
                        <i class="fas fa-times-circle aw-delete-cross"></i>
                      </div>
                    </div>

                    <div class="row aw-card d-flex align-items-center ">
                      <div class="col-3 aw-card-pic">
                        <div class="aw-book-pic">
                          <img
                            class="w-100"
                            src="http://localhost:3000/images/aw/cartpic1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="col-7 aw-book-text d-flex justify-content-center align-items-center aw-p-0">
                        <p class="aw-book-title">種日子的人</p>
                      </div>
                      <div class="col-2 aw-book-price  d-flex justify-content-center aw-p-0">
                        <i class="fas fa-times-circle aw-delete-cross"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row justify-content-between aw-stepBtn">
                  <div class="aw-preStep  d-flex align-items-center">
                    <a class="aw-a" href="#">
                      <div class="row aw-row">
                        <i class="fas fa-angle-left mr-2"></i>
                        <h6> 繼續購物</h6>
                      </div>
                    </a>
                  </div>
                  <div class="aw-nextStep  d-flex align-items-center">
                    {' '}
                    <a href="./CartItems" class="aw-a">
                      <button class="btn-lg aw-btn-lg">下一步</button>
                    </a>
                  </div>
                </div>
                <div class="col-2"> </div>
              </div>
              <div class="col-2"> </div>
            </div>
          </div>
          <div class="aw-cart-right cartBackground-right-aw"> </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Cart)
