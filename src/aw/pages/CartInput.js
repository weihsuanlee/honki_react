import '../styles/cartStyle.scss'
import { FaTimesCircle, FaAngleLeft } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CartInput(props) {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])

  //select into localStorage
  const [selectAmount, setSelectAmount] = useState()

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)
    const newCart = localStorage.getItem('cart')
    console.log(JSON.parse(newCart))
    setMycart(JSON.parse(newCart))
  }
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  //轉換千分位
  function toCurrency(num) {
    var parts = num.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }

  // 每次mycart資料有改變，1秒後關閉載入指示
  // componentDidUpdate
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 1000)
    // mycartDisplay運算
    let newMycartDisplay = []
    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }
    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    console.log('index', currentCart)
    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.book_id === item.book_id)
    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }
    localStorage.setItem('cart', JSON.stringify(currentCart))
    // 設定資料
    setMycart(currentCart)
  }

  //清除購物車
  const updateCartRemoveAll = (item) => {
    console.log(item)
    localStorage.removeItem('cart')
    // 設定資料
    setMycart([])
  }

  // 計算總價用的函式
  const sumQuantity = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount
    }
    return total
  }
  // 計算總量的函式
  const sumAmount = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

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
                  <div class="aw-progress-line-item-pink col-sm"></div>
                </div>
                <div class="row aw-row justify-content-between aw-progress-circle">
                  <div class="aw-progress-circle-item"></div>
                  <div class="aw-progress-circle-item"></div>
                  <div class="aw-progress-circle-item">
                    <img
                      src="http://localhost:3000/images/aw/ladybird.svg"
                      alt=""
                    ></img>
                  </div>
                  <div class="aw-progress-circle-item-pink"></div>
                </div>
              </div>
              <div class="col-sm-2 col-lg-3"></div>
            </div>
          </div>
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
            <div class="aw-cart-left aw-cartBackground-left ">
              <div class="row">
                <div class="col-4"></div>
                <div class="aw-cartContent col-6">
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
                      {mycart.map((item, index) => {
                        return (
                          <>
                            <div class="row aw-card d-flex align-items-center ">
                              <div class="col-6 row aw-row  align-items-center aw-p-0 ">
                                <div class="col-sm aw-card-pic aw-p-9 ">
                                  <div class="aw-book-pic">
                                    <img
                                      class="w-100"
                                      src={
                                        'http://localhost:3000/images/books/' +
                                        item.book_id
                                      }
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-sm aw-book-text d-flex justify-content-center aw-p-9 ">
                                  <p class="aw-book-title">{item.bookname}</p>
                                </div>
                              </div>
                              <div class="col-6 row aw-row  align-items-center justify-content-center aw-p-0">
                                <div class="col-sm d-flex justify-content-center aw-p-9">
                                  <p class="aw-book-title">$ {item.price}元</p>
                                </div>
                                <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                                  <div class="aw-items-amount">
                                    {item.amount}
                                  </div>
                                </div>
                                <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                                  <p class="aw-book-title">
                                    $ {toCurrency(item.amount * item.price)}元
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      })}
                    </div>
                  </div>
                  <div class="aw-countArea aw-pr-42">
                    <div class="d-flex justify-content-end aw-p-9">
                      <div class="row aw-row aw-count ">
                        <h5> 共 </h5>
                        <div class="aw-count-num d-flex justify-content-end">
                          <h5> {toCurrency(sumQuantity(mycart))}</h5>
                        </div>
                        <h5> 本 </h5>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end aw-p-9">
                      <div class="row aw-row aw-count ">
                        <h5> 小計 </h5>
                        <div class="aw-count-num d-flex justify-content-end">
                          <h5> {toCurrency(sumAmount(mycart))}</h5>
                        </div>
                        <h5> 元 </h5>
                      </div>
                    </div>
                  </div>

                  <div class="aw-productAreaPadding row aw-row d-flex justify-content-between aw-pr-42">
                    <div class="col-10 p-0">
                      <form>
                        <div class=" form-width-height aw-form-width-height">
                          <div class="form-tittle">
                            <h5>運費與折價</h5>
                          </div>

                          <div class="form-group ">
                            <div class="formItems row d-flex">
                              <label
                                class="inputText col-5"
                                for="exampleFormControlSelect1"
                              >
                                運送方式
                              </label>
                              <select
                                class="form-control formInput  col-7"
                                id="exampleFormControlSelect1"
                              >
                                <option>請選擇</option>
                                <option>超商取貨</option>
                                <option>宅配</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group ">
                            <div class="formItems row d-flex">
                              <label
                                class="inputText col-5"
                                for="exampleFormControlSelect1"
                              >
                                選擇折價券
                              </label>
                              <select
                                class="form-control formInput  col-7"
                                id="exampleFormControlSelect1"
                              >
                                <option>請選擇</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="aw-transport-fee col-2 ">
                      <div class="aw-transport-fee-items text-right">
                        <h6>60元</h6>
                      </div>
                      <div class="aw-transport-fee-items text-right">
                        <h6>60元</h6>
                      </div>
                    </div>
                  </div>
                  <div class="row aw-row d-flex justify-content-end aw-pr-42">
                    <div class=" text-right aw-p-9">
                      <h5>總計 {toCurrency(sumAmount(mycart))}元</h5>
                    </div>
                  </div>
                  <div class="aw-pt-20 row aw-row d-flex justify-content-between aw-pr-42">
                    <form class="col-10 p-0">
                      <div class=" form-width-height aw-form-width-height">
                        <div class="form-tittle">
                          <h5>付款方式</h5>
                        </div>

                        <div class="form-group ">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-5"
                              for="exampleFormControlSelect1"
                            >
                              選擇付款方式
                            </label>
                            <select
                              class="form-control formInput  col-7"
                              id="exampleFormControlSelect1"
                            >
                              <option>請選擇</option>
                              <option>貨到付款</option>
                              <option>信用卡付款</option>
                            </select>
                          </div>
                        </div>

                        <div class="form-group ">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-5"
                              for="exampleFormControlSelect1"
                            >
                              發票資訊
                            </label>
                            <select
                              class="form-control formInput  col-7"
                              id="exampleFormControlSelect1"
                            >
                              <option>請選擇</option>
                              <option>捐贈發票</option>
                              <option>二聯電子發票</option>
                              <option>三聯電子發票</option>
                            </select>
                          </div>
                        </div>

                        <div class="form-tittle">
                          <h5>訂購人資訊</h5>
                        </div>

                        <div class="form-group ">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-5"
                              for="exampleFormControlInput1"
                            >
                              姓名
                            </label>
                            <input
                              type="text"
                              class="form-control formInput col-7 "
                              placeholder="ex:吳阿民"
                            />{' '}
                          </div>
                        </div>

                        <div class="form-group ">
                          <div class="formItems row d-flex">
                            <label class="inputText col-5">聯絡電話</label>
                            <input
                              type="email"
                              class="form-control formInput col-7"
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div class="form-group ">
                          <div class="formItems row d-flex">
                            <label class="inputText col-5">Email</label>
                            <input
                              type="email"
                              class="form-control formInput col-7"
                              placeholder="example@hotmail.com"
                            />
                          </div>
                        </div>

                        <div class="form-tittle">
                          <h5>收件人資訊</h5>
                        </div>

                        <div class="form-group ">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-5"
                              for="exampleFormControlInput1"
                            >
                              姓名
                            </label>
                            <input
                              type="text"
                              class="form-control formInput col-7 "
                              placeholder="ex:吳阿民"
                            />
                          </div>
                        </div>

                        <div class="form-group ">
                          <div class="formItems row d-flex">
                            <label class="inputText col-5">聯絡電話</label>
                            <input
                              type="email"
                              class="form-control formInput col-7"
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div class="form-group ">
                          <div class="formItems row d-flex">
                            <label class="inputText col-5">Email</label>
                            <input
                              type="email"
                              class="form-control formInput col-7"
                              placeholder="example@hotmail.com"
                            />
                          </div>
                        </div>

                        <div class="form-group  ">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-5"
                              for="exampleFormControlTextarea1 align-items-center"
                            >
                              收件地址
                            </label>
                            <div class="col-7 aw-p-0">
                              <div class="row aw-p-0 aw-row">
                                <select
                                  class="form-control formInput  col-sm mr-1 mb-2"
                                  id="exampleFormControlSelect1"
                                >
                                  <option>縣市</option>
                                  <option>台北市</option>
                                  <option>基隆市</option>
                                  <option>新北市</option>
                                </select>
                                <select
                                  class="form-control formInput  col-sm "
                                  id="exampleFormControlSelect1"
                                >
                                  <option>區域</option>
                                  <option>中正區</option>
                                  <option>大安區</option>
                                  <option>信義區</option>
                                </select>
                              </div>
                              <div class="row aw-p-0 aw-row">
                                <div class="col-sm d-flex align-items-center mb-2">
                                  郵遞區號
                                </div>
                                <input
                                  type="text"
                                  class="form-control formInput col-sm  mb-2 ml-1"
                                  placeholder=""
                                />
                              </div>
                              <textarea
                                class="form-control  "
                                id="exampleFormControlTextarea1"
                                placeholder="ex:重慶南路一段122號"
                                rows="2 "
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div class="form-group ">
                          <div class="formItems row d-flex">
                            <label
                              class="inputText col-5"
                              for="exampleFormControlSelect1"
                            >
                              配送時間
                            </label>
                            <select
                              class="form-control formInput  col-7"
                              id="exampleFormControlSelect1"
                            >
                              <option>不限時</option>
                              <option>白天</option>
                              <option>晚上</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="col-2"></div>
                  </div>

                  <div class="row justify-content-between aw-stepBtn">
                    <div class="aw-preStep  d-flex align-items-center">
                      <a class="aw-a" href="./CartItems">
                        <div class="row aw-row">
                          <FaAngleLeft className="fas fa-angle-left mr-2  aw-mt2" />
                          <h6> 回上一頁</h6>
                        </div>
                      </a>
                    </div>
                    <div class="aw-nextStep  d-flex align-items-center">
                      {' '}
                      <a href="./CartConfirm" class="aw-a">
                        <button class="btn-lg aw-btn-lg">下一步</button>
                      </a>
                    </div>
                  </div>
                  <div class="col-2"> </div>
                </div>
                <div class="col-2"> </div>
              </div>
              <div class="div"></div>
            </div>
            <div class="aw-cart-right cartBackground-right-aw"> </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(CartInput)
