import '../styles/cartStyle.scss'
import {} from 'react-icons/fa'
import { Link, withRouter } from 'react-router-dom'
import { Tabs, Tab, Accordion, Card, Button } from 'react-bootstrap'
// import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
// import ProductBanner from '../components/ProductBanner'
// import ListSpinner from '../components/ListSpinner'
// import MyPopOver from '../components/MyPopOver'
import { useEffect, useState } from 'react'

function CartOrder(props) {
  //訂單結果
  // const [orderDisplay, setOrderDisplay] = useState([])
  const [mycart, setMycart] = useState([])
  const [inputerms, setInputerms] = useState([])
  const [orderData, setOrderData] = useState([])
  const [orderData2, setOrderData2] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  // 更動購物車數量 如果有清空localStorage cart5566的函式 可以直接把 updateCartNum()寫在裡面
  const { setCartNum, updateCartNum } = props
  // 呼叫 updateCartNum()之後也可以把setCartNum(0)這個直接刪掉
  setCartNum(0)

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)
    const newCart = localStorage.getItem('cart5566')
    console.log(JSON.parse(newCart))
    setMycart(JSON.parse(newCart))
  }
  function getInputFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)
    const newInput = localStorage.getItem('inputTerms')
    console.log(JSON.parse(newInput))
    setInputerms(JSON.parse(newInput))
  }
  useEffect(
    () => {
      getCartFromLocalStorage()
      getInputFromLocalStorage()
    },
    [],
    []
  )

  const getDataFromServer = async () => {
    // 先開起載入指示器
    // setIsLoading(true)
    // 模擬和伺服器要資料，先寫死
    // 注意header資料格式要設定，伺服器才知道是json格式
    const response = await fetch('http://localhost:3333/cart/order_detail', {
      credentials: 'include',
      method: 'get',
      // headers: new Headers({
      //   Accept: 'application/json',
      //   'Content-Type': 'appliaction/json',
      // }),
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
    console.log(data)
  }

  const getDataFromServer2 = async () => {
    // 先開起載入指示器
    // setIsLoading(true)
    // 模擬和伺服器要資料，先寫死
    // 注意header資料格式要設定，伺服器才知道是json格式
    const response = await fetch(
      'http://localhost:3333/cart/order_detail_input',
      {
        credentials: 'include',
        method: 'get',
        // headers: new Headers({
        //   Accept: 'application/json',
        //   'Content-Type': 'appliaction/json',
        // }),
      }
    )
    const data2 = await response.json()

    // 最後設定到狀態中
    // setOrderDisplay(data)
    // let arr = []
    //  arr.push(data)
    setOrderData2(data2)
    console.log(data2)
    // 3秒後關閉指示器
    setTimeout(() => {
      // setIsLoading(false)
    }, 2000)
    console.log(data2)
  }

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

  // 模擬componentDidMout
  useEffect(
    () => {
      getDataFromServer()
      getDataFromServer2()
    },
    [],
    []
  )
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

  // 計算總量的函式
  const sumAmount2 = (items) => {
    let total = 0
    const newCart = localStorage.getItem('inputTerms') || '[]'
    for (let i = 0; i < items.length; i++) {
      total += +items[i].quantity * +items[i].price
    }
    if (JSON.parse(newCart)[0].recipient_trans === '超商取貨') {
      total += 60
    }
    if (JSON.parse(newCart)[0].recipient_trans === '宅配') {
      total += 120
    }
    return total
  }

  const TransFee = (items) => {
    let total = 0
    const newCart = localStorage.getItem('inputTerms') || '[]'

    if (JSON.parse(newCart)[0].recipient_trans === '超商取貨') {
      total = 60
    }
    if (JSON.parse(newCart)[0].recipient_trans === '宅配') {
      total = 120
    }
    return total
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border aw-spinner" role="status">
          <span className="sr-only aw-spinner">Loading...</span>
        </div>
      </div>
    </>
  )
  const display = (
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
                      src="http://localhost:3000/images/aw/Group 1138.svg"
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
                        訂單編號 <span>A0000017</span>
                      </h4>
                    </div>
                  </div>

                  <div class="d-flex justify-content-end aw-composition">
                    <img
                      src="http://localhost:3000/images/aw/composition-24.svg"
                      alt=""
                    />
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
                <div className="holder-mobile  wei-holder-mobile">
                  <Accordion defaultActiveKey="10">
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          className="w-100 text-left"
                          variant="link"
                          eventKey="10"
                        >
                          <h5 class="m-0">本次購物清單</h5>
                        </Accordion.Toggle>
                      </Card.Header>

                      <Accordion.Collapse eventKey="10">
                        <Card>
                          <Card.Body className="p-0">
                            <div class="aw-ptpb-64 aw-border-lightYellow col-12 pr-5 pl-5">
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
                                <div class="aw-productArea2">
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
                                          <p class="aw-book-title">
                                            {value.bookname}
                                          </p>
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
                                            ${' '}
                                            {toCurrency(
                                              value.quantity * value.price
                                            )}
                                            元
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div class="aw-countArea aw-pr-42 pb-3">
                                <div class="d-flex justify-content-end p-0">
                                  <div class="row aw-row aw-count pt-2">
                                    <div class="text-right">
                                      <h5> 共 </h5> <h5>小計</h5> <h5>運費</h5>
                                    </div>
                                    <div class="aw-count-num d-flex justify-content-end">
                                      {/* 計算加總本數 */}
                                      <div class="text-right">
                                        <h5>
                                          {toCurrency(sumQuantity(orderData))}
                                        </h5>
                                        <h5>
                                          $ {toCurrency(sumAmount(orderData))}
                                        </h5>
                                        <h5> {TransFee()}</h5>
                                      </div>
                                    </div>
                                    <div class="text-right">
                                      <h5>本</h5>
                                      <h5>元</h5>
                                      <h5>元</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="aw-countArea pr-0 aw-borderTop pt-0">
                                <div class="aw-pr-42">
                                  <div class="d-flex justify-content-end p-0 ">
                                    <div class="row aw-row aw-count pb-5">
                                      <h5>總計</h5>
                                      <div class="aw-count-num d-flex justify-content-end">
                                        <h5>
                                          $ {toCurrency(sumAmount2(orderData))}
                                        </h5>
                                      </div>
                                      <h5>元</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          className="w-100 text-left"
                          variant="link"
                          eventKey="11"
                        >
                          <h5 class="m-0">本次訂單明細</h5>
                        </Accordion.Toggle>
                      </Card.Header>

                      <Accordion.Collapse eventKey="11">
                        <Card.Body className="p-0">
                          <div class="row aw-row ">
                            <div class="aw-ptpb-64 aw-border-lightYellow col-12 pr-5 pl-5">
                              {orderData2.map((value, index) => (
                                <div
                                  class=" form-width-height aw-form-width-height"
                                  key={index}
                                >
                                  <div class="form-tittle aw-mb-4">
                                    <h5>運費</h5>
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
                                          <h6 class="m-0">
                                            {value.recipient_trans}
                                          </h6>
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
                                          <h6 class="m-0">{value.payment}</h6>
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
                                          <h6 class="m-0">{value.invoice}</h6>
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
                                          <h6 class="m-0">{value.userName}</h6>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="form-group aw-mb-16 ">
                                      <div class="formItems row d-flex">
                                        <label class="inputText col-4">
                                          聯絡電話
                                        </label>
                                        <div class="col-8">
                                          <h6 class="m-0">{value.userTel}</h6>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="form-group aw-mb-16 ">
                                      <div class="formItems row d-flex">
                                        <label class="inputText col-4">
                                          Email
                                        </label>
                                        <div class="col-8">
                                          <h6 class="m-0">{value.userMail}</h6>
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
                                          <h6 class="m-0">
                                            {value.recipient_name}
                                          </h6>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="form-group aw-mb-16 ">
                                      <div class="formItems row d-flex">
                                        <label class="inputText col-4">
                                          聯絡電話
                                        </label>
                                        <div class="col-8">
                                          <h6 class="m-0">
                                            {value.recivePhone}
                                          </h6>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="form-group aw-mb-16 ">
                                      <div class="formItems row d-flex">
                                        <label class="inputText col-4">
                                          Email
                                        </label>
                                        <div class="col-8">
                                          <h6 class="m-0">
                                            {value.reciveMail}
                                          </h6>
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
                                            {value.recivePost +
                                              value.reciveCountry +
                                              value.reciveArea +
                                              value.reciveAdress}
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
                                          <h6 class="m-0">
                                            {value.reciveTime}
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div class="row justify-content-center aw-stepBtn pr-0">
                  <Link class="aw-a" to="/">
                    <button class="btn-md-dark">回首頁</button>
                  </Link>
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
  return dataLoading ? loading : display
}

export default withRouter(CartOrder)
