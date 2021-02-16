import '../styles/cartStyle.scss'
import { FaThLarge, FaListUl, FaHeart } from 'react-icons/fa'
import { withRouter, NavLink } from 'react-router-dom'
// import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
// import ProductBanner from '../components/ProductBanner'
// import ListSpinner from '../components/ListSpinner'
// import MyPopOver from '../components/MyPopOver'
import { useEffect, useState } from 'react'

function CartOrder(props) {
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
        <div class="aw-progress-bar">
          <div class="row aw-row">
            <div class="col-sm-2 col-lg-3"></div>
            <div class="col-sm-8 col-lg-6 aw-progress">
              <div class=" row aw-row aw-progress-text  ">
                <div class="col-sm">
                  <h6>購物明細</h6>
                </div>
                <div class="col-sm">
                  <h6>付款方式</h6>
                </div>
                <div class="col-sm">
                  <h6>確認訂單</h6>
                </div>
              </div>
              <div class="aw-progress-bar">
                <div class="row aw-row aw-progress-line">
                  <div class="aw-progress-line-item col-sm"></div>
                  <div class="aw-progress-line-item col-sm"></div>
                  <div class="aw-progress-line-item col-sm"></div>
                </div>
                <div class="row aw-row justify-content-between aw-progress-circle">
                  <div class="aw-progress-circle-item"></div>
                  <div class="aw-progress-circle-item"></div>
                  <div class="aw-progress-circle-item"></div>
                  <div class="aw-progress-circle-item ">
                    {' '}
                    <img
                      class="aw-ladybirdfinal"
                      src="/images/cart/ladybird.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-2 col-lg-3"></div>
            </div>
          </div>
          <div class="row">
            <div class="aw-cart-left">
              <div class="row">
                <div class="col-3"> </div>
                <div class="col-8">
                  <div class="row aw-changeProductBtnRow d-flex justify-content-center">
                    <h2>感謝您的訂購</h2>
                  </div>
                  <div class=" aw-changeProductBtnRow d-flex justify-content-center">
                    <div class="">
                      <h4>
                        訂單編號 <span>A0000001</span>
                      </h4>
                    </div>
                  </div>

                  <div class="d-flex justify-content-end aw-composition">
                    {' '}
                    <img src="/images/cart/composition-24.svg" alt="" />
                  </div>
                  <div class="col-3"></div>
                </div>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
          <div class="aw-cart-right"></div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="aw-cart-left  ">
            <div class="row">
              <div class="col-3"></div>
              <div class="aw-cartContent col-8">
                <div class="aw-cartLine d-flex align-items-center justify-content-between pl-5 pr-5">
                  <h5 class="m-0">本次購物清單</h5>
                  <i class="fas fa-chevron-up"></i>
                  <i class="fas fa-chevron-down d-none"></i>
                </div>
                <div class="aw-ptpb-64 aw-border-lightYellow col-12 pr-3 pl-3">
                  <div class="aw-cart-page1-subtitle row  ">
                    <div class=" col-6 row aw-row  align-items-center aw-p-0">
                      <div class="col-sm"></div>
                      <div class=" col-sm d-flex justify-content-center align-items-center aw-p-9 ">
                        <h6 class="m-0 ">商品明細</h6>
                      </div>
                    </div>
                    <div class="col-6 row aw-row  align-items-center justify-content-center aw-p-0">
                      <div class="col-sm d-flex justify-content-center aw-p-9 ">
                        <h6 class="m-0 ">優惠價</h6>
                      </div>
                      <div class="col-sm d-flex justify-content-center aw-p-9">
                        <h6 class="m-0 ">數量</h6>
                      </div>
                      <div class="col-sm d-flex justify-content-center aw-p-9 ">
                        <h6 class="m-0 ">小計</h6>
                      </div>
                    </div>
                  </div>
                  <div class="aw-productAreaPadding">
                    <div class="aw-productArea">
                      <div class="row aw-card d-flex align-items-center ">
                        <div class="col-6 row aw-row  align-items-center aw-p-0 ">
                          <div class="col-sm aw-card-pic aw-p-9 ">
                            <div class="aw-book-pic">
                              <img
                                class="w-100"
                                src="/images/cart/cartpic1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-sm aw-book-text d-flex justify-content-center aw-p-9 ">
                            <p class="aw-book-title">種日子的人</p>
                          </div>
                        </div>
                        <div class="col-6 row aw-row  align-items-center justify-content-center aw-p-0">
                          <div class="col-sm d-flex justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <div class="aw-items-amount">1</div>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                        </div>
                      </div>

                      <div class="row aw-card d-flex align-items-center ">
                        <div class="col-6 row aw-row  align-items-center aw-p-0 ">
                          <div class="col-sm aw-card-pic aw-p-9 ">
                            <div class="aw-book-pic">
                              <img
                                class="w-100"
                                src="/images/cart/cartpic1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-sm aw-book-text d-flex justify-content-center aw-p-9 ">
                            <p class="aw-book-title">種日子的人</p>
                          </div>
                        </div>
                        <div class="col-6 row aw-row  align-items-center justify-content-center aw-p-0">
                          <div class="col-sm d-flex justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <div class="aw-items-amount">1</div>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                        </div>
                      </div>

                      <div class="row aw-card d-flex align-items-center ">
                        <div class="col-6 row aw-row  align-items-center aw-p-0 ">
                          <div class="col-sm aw-card-pic aw-p-9 ">
                            <div class="aw-book-pic">
                              <img
                                class="w-100"
                                src="/images/cart/cartpic1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-sm aw-book-text d-flex justify-content-center aw-p-9 ">
                            <p class="aw-book-title">種日子的人</p>
                          </div>
                        </div>
                        <div class="col-6 row aw-row  align-items-center justify-content-center aw-p-0">
                          <div class="col-sm d-flex justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <div class="aw-items-amount">1</div>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                        </div>
                      </div>

                      <div class="row aw-card d-flex align-items-center ">
                        <div class="col-6 row aw-row  align-items-center aw-p-0 ">
                          <div class="col-sm aw-card-pic aw-p-9 ">
                            <div class="aw-book-pic">
                              <img
                                class="w-100"
                                src="/images/cart/cartpic1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-sm aw-book-text d-flex justify-content-center aw-p-9 ">
                            <p class="aw-book-title">種日子的人</p>
                          </div>
                        </div>
                        <div class="col-6 row aw-row  align-items-center justify-content-center aw-p-0">
                          <div class="col-sm d-flex justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <div class="aw-items-amount">1</div>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="aw-countArea aw-pr-42">
                    <div class="d-flex justify-content-end p-0">
                      <div class="row aw-row aw-count pt-2">
                        <h5> 共 </h5>
                        <div class="aw-count-num d-flex justify-content-end">
                          <h5> 16</h5>
                        </div>
                        <h5> 本 </h5>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end p-0">
                      <div class="row aw-row aw-count pt-2">
                        <h5>小計</h5>
                        <div class="aw-count-num d-flex justify-content-end">
                          <h5> 1,661</h5>
                        </div>
                        <h5>元</h5>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end p-0">
                      <div class="row aw-row aw-count pt-2">
                        <h5>運費</h5>
                        <div class="aw-count-num d-flex justify-content-end">
                          <h5> 60</h5>
                        </div>
                        <h5> 元 </h5>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end p-0">
                      <div class="row aw-row aw-count pt-2">
                        <h5>折扣</h5>
                        <div class="aw-count-num d-flex justify-content-end">
                          <h5> -60</h5>
                        </div>
                        <h5>元</h5>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end p-0 aw-borderTop">
                      <div class="row aw-row aw-count pb-5">
                        <h5>總計</h5>
                        <div class="aw-count-num d-flex justify-content-end">
                          <h5>3,416</h5>
                        </div>
                        <h5>元</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="aw-cartLine d-flex align-items-center justify-content-between pl-5 pr-5">
                  <h5 class="m-0">本次購物清單</h5>
                  <i class="fas fa-chevron-up"></i>
                  <i class="fas fa-chevron-down d-none"></i>
                </div>
                <div class="row aw-row ">
                  <div class="aw-ptpb-64 aw-border-lightYellow col-12 pr-3 pl-3">
                    <div class=" form-width-height aw-form-width-height">
                      <div class="form-tittle aw-mb-4">
                        <h5>運費與折價</h5>
                      </div>
                      <div class="aw-btbb aw-mb-40 aw-ptpb-20">
                        <div class="form-group aw-mb-16 ">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-4"
                              for="exampleFormControlSelect1"
                            >
                              運送方式
                            </label>
                            <div class="col-8">
                              <h6 class="m-0">超商取貨</h6>
                            </div>
                          </div>
                        </div>

                        <div class="form-group aw-mb-16 ">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-4"
                              for="exampleFormControlSelect1"
                            >
                              選擇折價券
                            </label>
                            <div class="col-8">
                              <h6 class="m-0">11111</h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="form-tittle aw-mb-4">
                        <h5>付款方式</h5>
                      </div>

                      <div class="aw-btbb aw-mb-40 aw-ptpb-20 aw-ptpb-20">
                        <div class="form-group aw-mb-16  aw-mb-16">
                          <div class="formItems row d-flex ">
                            <label
                              class="inputText col-4"
                              for="exampleFormControlSelect1"
                            >
                              選擇付款方式
                            </label>
                            <div class="col-8">
                              <h6 class="m-0">貨到付款</h6>
                            </div>
                          </div>
                        </div>

                        <div class="form-group aw-mb-16">
                          <div class="formItems row d-flex  ">
                            <label
                              class="inputText col-4"
                              for="exampleFormControlSelect1"
                            >
                              發票資訊
                            </label>
                            <div class="col-8">
                              <h6 class="m-0">捐贈</h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="form-tittle aw-mb-4">
                        <h5>訂購人資訊</h5>
                      </div>

                      <div class="aw-btbb aw-mb-40 aw-ptpb-20">
                        <div class="form-group aw-mb-16">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-4"
                              for="exampleFormControlInput1"
                            >
                              姓名
                            </label>
                            <div class="col-8">
                              <h6 class="m-0">吳亞瑟</h6>
                            </div>
                          </div>
                        </div>

                        <div class="form-group aw-mb-16 ">
                          <div class="formItems row d-flex">
                            <label class="inputText col-4">聯絡電話</label>
                            <div class="col-8">
                              <h6 class="m-0">0988999776</h6>
                            </div>
                          </div>
                        </div>

                        <div class="form-group aw-mb-16 ">
                          <div class="formItems row d-flex">
                            <label class="inputText col-4">Email</label>
                            <div class="col-8">
                              <h6 class="m-0">arthurwu315@hotmail.com</h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="form-tittle aw-mb-4">
                        <h5>收件人資訊</h5>
                      </div>

                      <div class="aw-btbb aw-mb-40 aw-ptpb-20">
                        <div class="form-group aw-mb-16 ">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-4"
                              for="exampleFormControlInput1"
                            >
                              姓名
                            </label>
                            <div class="col-8">
                              <h6 class="m-0">光頭葛格</h6>
                            </div>
                          </div>
                        </div>

                        <div class="form-group aw-mb-16 ">
                          <div class="formItems row d-flex">
                            <label class="inputText col-4">聯絡電話</label>
                            <div class="col-8">
                              <h6 class="m-0">0958585858</h6>
                            </div>
                          </div>
                        </div>

                        <div class="form-group aw-mb-16 ">
                          <div class="formItems row d-flex">
                            <label class="inputText col-4">Email</label>
                            <div class="col-8">
                              <h6 class="m-0">kindperson@gmail.com</h6>
                            </div>
                          </div>
                        </div>

                        <div class="form-group aw-mb-16">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-4"
                              for="exampleFormControlTextarea1 align-items-center"
                            >
                              收件地址
                            </label>
                            <div class="col-8">
                              <h6 class="m-0">
                                100台北市中正區重慶南路一段122號
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div class="form-group aw-mb-16 ">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-4"
                              for="exampleFormControlSelect1"
                            >
                              配送時間
                            </label>
                            <div class="col-8">
                              <h6 class="m-0">不限時</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row justify-content-center aw-stepBtn pr-0">
                  <button class="btn-md-dark">回首頁</button>
                </div>
              </div>
              <div class="col-1"> </div>
            </div>
          </div>
          <div class="aw-cart-right cartBackground-right-aw"> </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(CartOrder)
