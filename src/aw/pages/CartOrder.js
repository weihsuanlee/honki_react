import '../styles/cartStyle.scss'
import {} from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import { Tabs, Tab, Accordion, Card, Button } from 'react-bootstrap'
// import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
// import ProductBanner from '../components/ProductBanner'
// import ListSpinner from '../components/ListSpinner'
// import MyPopOver from '../components/MyPopOver'
import { useEffect, useState } from 'react'

function CartOrder(props) {
  //訂單結果
  // const [orderDisplay, setOrderDisplay] = useState([])
  const [orderData, setOrderData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  // 更動購物車數量
  const { setCartNum } = props
  setCartNum(0)

  const getDataFromServer = async () => {
    // 先開起載入指示器
    // setIsLoading(true)
    // 模擬和伺服器要資料，先寫死
    // 注意header資料格式要設定，伺服器才知道是json格式
    const response = await fetch('http://localhost:3333/cart/order_detail/7', {
      method: 'get',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const data = await response.json()

    // 最後設定到狀態中
    // setOrderDisplay(data)
    // let arr = []
    //  arr.push(data)
    setOrderData(data)
    console.log(data)
    // 3秒後關閉指示器
    setTimeout(() => {
      // setIsLoading(false)
    }, 2000)
  }
  // 模擬componentDidMout
  useEffect(() => {
    getDataFromServer()
  }, [])
  //轉換千分位
  function toCurrency(num) {
    var parts = num.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }

  // 計算總價用的函式
  const sumQuantity = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].quantity
    }
    return total
  }
  const sumAmount = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].quantity * items[i].price
    }
    return total
  }

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
                    <img
                      class="aw-ladybirdfinal"
                      src="http://localhost:3000/images/aw/ladybird.svg"
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
                      {orderData.map((value, index) => (
                        <div class="row aw-card d-flex align-items-center ">
                          <div class="col-6 row aw-row  align-items-center aw-p-0 ">
                            <div class="col-sm aw-card-pic aw-p-9 ">
                              <div class="aw-book-pic">
                                <img
                                  key={index}
                                  class="w-100"
                                  src={
                                    'http://localhost:3000/images/books/' +
                                    value.book_id
                                  }
                                  // "/images/cart/cartpic1.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="col-sm aw-book-text d-flex justify-content-center aw-p-9 ">
                              <p class="aw-book-title">{value.bookname}</p>
                            </div>
                          </div>
                          <div class="col-6 row aw-row  align-items-center justify-content-center aw-p-0">
                            <div class="col-sm d-flex justify-content-center aw-p-9">
                              <p class="aw-book-title">
                                $ {toCurrency(value.price)}元
                              </p>
                            </div>
                            <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                              <div class="aw-items-amount">
                                {toCurrency(value.quantity)}
                              </div>
                            </div>
                            <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                              <p class="aw-book-title">
                                $ {toCurrency(value.quantity * value.price)}元
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div class="aw-countArea aw-pr-42">
                    <div class="d-flex justify-content-end p-0">
                      <div class="row aw-row aw-count pt-2">
                        <div class="text-right">
                          <h5> 共 </h5> <h5>小計</h5> <h5>運費</h5>{' '}
                          <h5>折扣</h5>
                        </div>
                        <div class="aw-count-num d-flex justify-content-end">
                          {/* 計算加總本數 */}
                          <div class="text-right">
                            <h5> {toCurrency(sumQuantity(orderData))}</h5>
                            <h5>$ {toCurrency(sumAmount(orderData))}</h5>
                            <h5> 60</h5>
                            <h5> -60</h5>
                          </div>
                        </div>
                        <div class="text-right">
                          <h5>本</h5>
                          <h5>元</h5>
                          <h5>元</h5>
                          <h5>元</h5>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-end p-0 aw-borderTop">
                      <div class="row aw-row aw-count pb-5">
                        <h5>總計</h5>
                        <div class="aw-count-num d-flex justify-content-end">
                          <h5>$ {toCurrency(sumAmount(orderData))}</h5>
                        </div>
                        <h5>元</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <Accordion defaultActiveKey="10">
                  <Card>
                    <div class="aw-cartLine d-flex align-items-center justify-content-between pl-5 pr-5">
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="10"
                        >
                          <h5 class="m-0">本次購物清單</h5>
                          <i class="fas fa-chevron-up"></i>
                          <i class="fas fa-chevron-down d-none"></i>
                        </Accordion.Toggle>
                      </Card.Header>
                    </div>
                    <Accordion.Collapse eventKey="10">
                      <Card.Body>
                        {orderData.map((value, index) => (
                          <div class="row aw-card d-flex align-items-center ">
                            <div class="col-6 row aw-row  align-items-center aw-p-0 ">
                              <div class="col-sm aw-card-pic aw-p-9 ">
                                <div class="aw-book-pic">
                                  <img
                                    key={index}
                                    class="w-100"
                                    src={
                                      'http://localhost:3000/images/books/' +
                                      value.book_id
                                    }
                                    // "/images/cart/cartpic1.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="col-sm aw-book-text d-flex justify-content-center aw-p-9 ">
                                <p class="aw-book-title">{value.bookname}</p>
                              </div>
                            </div>
                            <div class="col-6 row aw-row  align-items-center justify-content-center aw-p-0">
                              <div class="col-sm d-flex justify-content-center aw-p-9">
                                <p class="aw-book-title">
                                  $ {toCurrency(value.price)}元
                                </p>
                              </div>
                              <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                                <div class="aw-items-amount">
                                  {toCurrency(value.quantity)}
                                </div>
                              </div>
                              <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                                <p class="aw-book-title">
                                  $ {toCurrency(value.quantity * value.price)}元
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle>作者介紹</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="11">
                      <Card.Body>
                        <p></p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle>書籍目錄</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse>
                      <Card.Body>
                        <p></p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
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
                  <a class="aw-a" href="http://localhost:3000/bookstoreindex">
                    <button class="btn-md-dark">回首頁</button>
                  </a>
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
