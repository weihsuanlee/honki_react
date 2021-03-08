import '../styles/cartStyle.scss'
import { FaThLarge, FaListUl, FaHeart } from 'react-icons/fa'
import { withRouter, Link, Redirect } from 'react-router-dom'
import moment from 'moment'
import { useEffect, useState } from 'react'

function CartConfirm(props) {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [inputerms, setInputerms] = useState([])
  const [orderData, setOrderData] = useState([])
  //select into localStorage
  const [selectAmount, setSelectAmount] = useState()

  ///
  let userLogin = JSON.parse(localStorage.getItem('userLogin'))
  const [hasQueryInfo, setHasQueryInfo] = useState(false)
  const [name, setName] = useState(userLogin.body.name)
  const [nickname, setNickname] = useState(userLogin.body.nickname)
  const [email, setEmail] = useState(userLogin.body.email)
  const [mobile, setMobile] = useState(userLogin.body.mobile)
  const [address, setAddress] = useState(userLogin.body.address)
  const userBirthday = moment(userLogin.body.birthday).format('YYYY-MM-DD')
  const [birthday, setBirthday] = useState(userBirthday)
  const [password, setPassword] = useState(userLogin.body.passward)

  if (
    !localStorage.getItem('cart5566') ||
    JSON.parse(localStorage.getItem('cart5566')).length === 0
  ) {
    props.history.push('/cart')
  }
  // 更動購物車數量
  const { updateCartNum } = props

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
  const updateCartToLocalStorage1 = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart5566')) || []
    console.log('index', currentCart)
    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.book_id === item.book_id)
    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }
    localStorage.setItem('cart5566', JSON.stringify(currentCart))
    // 設定資料
    setMycart(currentCart)
  }

  const updateCartToLocalStorage = async function () {
    // let userLogin = JSON.parse(localStorage.getItem('userLogin'))

    const newCart = localStorage.getItem('cart5566') || '[]'
    const newCartJson = JSON.parse(newCart)
    const newInput = localStorage.getItem('inputTerms') || '[]'
    const newInputJson = JSON.parse(newInput)
    const Alldata = { input: newInputJson, items: newCartJson }
    // console.log('newCart', newCart)
    // console.log('newInput', newInput)
    console.log('Alldata', Alldata)
    const url = 'http://localhost:3333/cart/cartInput1/'
    const request = new Request(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(Alldata),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      console.log('確認訂單回傳', data)
      if (data.success) {
        // localStorage.setItem('userLogin', JSON.stringify(data))
        console.log(data)
        props.history.push('/CartOrder')
      }
    } catch (error) {
      console.log(error)
    }
    localStorage.removeItem('cart5566')

    updateCartNum()
  }

  const emptyCart = (
    <>
      <div className="cart-page noselect">
        <div className="ru-cart-wrap mx-auto">
          <main className="d-flex justify-content-center align-items-center w-100 aw-cart-empty">
            <div className="empty-cart-display ">
              <h4>您的購物車是空的，快去挑選商品！</h4>
              <Link to="/product" class="d-flex justify-content-end mr-2">
                <h5>繼續購物</h5>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  )
  // 計算總價用的函式
  const sumQuantity = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount
    }
    // 更新購物車數量
    updateCartNum()
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
  // 計算總量的函式
  const sumAmount2 = (items) => {
    let total = 0
    const newCart = localStorage.getItem('inputTerms') || '[]'
    console.log(JSON.parse(newCart)[0].recipient_trans)
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
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
                  <div class="aw-progress-circle-item">
                    <img
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
                    <div class="aw-productArea2">
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
                  <div class="aw-countArea aw-pr-42 pb-3">
                    <div class="d-flex justify-content-end p-0">
                      <div class="row aw-row aw-count pt-2">
                        <div class="text-right">
                          <h5> 共 </h5> <h5>小計</h5> <h5>運費</h5>
                        </div>
                        <div class="aw-count-num d-flex justify-content-end">
                          {/* 計算加總本數 */}
                          <div class="text-right">
                            <h5>{toCurrency(sumQuantity(mycart))}</h5>
                            <h5>$ {toCurrency(sumAmount(mycart))}</h5>
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
                            <h5>$ {toCurrency(sumAmount2(mycart))}</h5>
                          </div>
                          <h5>元</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row aw-row ">
                    <div class="aw-ptpb-64 aw-border-lightYellow col-12">
                      {inputerms.map((item, index) => {
                        return (
                          <>
                            <div class=" form-width-height aw-form-width-height">
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
                                        {item.recipient_trans}
                                      </h6>
                                    </div>
                                  </div>
                                </div>

                                {/* <div class="form-group aw-mb-16 ">
                                  <div class="formItems row d-flex">
                                    <label
                                      class="inputText col-4"
                                      for="exampleFormControlSelect1"
                                    >
                                      選擇折價券
                                    </label>
                                    <div class="col-8">
                                      <h6 class="m-0">{item.dis}</h6>
                                    </div>
                                  </div>
                                </div> */}
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
                                      <h6 class="m-0">{item.payment}</h6>
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
                                      <h6 class="m-0">{item.invoice}</h6>
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
                                      <h6 class="m-0">{item.userName}</h6>
                                    </div>
                                  </div>
                                </div>

                                <div class="form-group aw-mb-16 ">
                                  <div class="formItems row d-flex">
                                    <label class="inputText col-4">
                                      聯絡電話
                                    </label>
                                    <div class="col-8">
                                      <h6 class="m-0">{item.userTel}</h6>
                                    </div>
                                  </div>
                                </div>

                                <div class="form-group aw-mb-16 ">
                                  <div class="formItems row d-flex">
                                    <label class="inputText col-4">Email</label>
                                    <div class="col-8">
                                      <h6 class="m-0">{item.userMail}</h6>
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
                                      <h6 class="m-0">{item.recipient_name}</h6>
                                    </div>
                                  </div>
                                </div>

                                <div class="form-group aw-mb-16 ">
                                  <div class="formItems row d-flex">
                                    <label class="inputText col-4">
                                      聯絡電話
                                    </label>
                                    <div class="col-8">
                                      <h6 class="m-0">{item.recivePhone}</h6>
                                    </div>
                                  </div>
                                </div>

                                <div class="form-group aw-mb-16 ">
                                  <div class="formItems row d-flex">
                                    <label class="inputText col-4">Email</label>
                                    <div class="col-8">
                                      <h6 class="m-0">{item.reciveMail}</h6>
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
                                        {item.recivePost +
                                          item.reciveCountry +
                                          item.reciveArea +
                                          item.reciveAdress}
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
                                      <h6 class="m-0">{item.reciveTime}</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      })}
                      <div class=" position-relative">
                        <div class="d-flex justify-content-center ">
                          <Link class="aw-a" to="/CartOrder">
                            <button
                              class="btn-md-dark w-100"
                              onClick={() => {
                                updateCartToLocalStorage(false)
                              }}
                            >
                              確認訂單
                            </button>
                          </Link>
                        </div>
                        <div class="d-flex justify-content-start position-absolute aw-icecream">
                          <img
                            src="http://localhost:3000/images/aw/Character-ice-cream.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row justify-content-between aw-stepBtn">
                    <div class="aw-preStep  d-flex align-items-center">
                      <Link class="aw-a" to="/CartInput">
                        <div class="row aw-row">
                          <i class="fas fa-angle-left mr-2"></i>
                          <h6> 回上一頁</h6>
                        </div>
                      </Link>
                    </div>
                    <div class="aw-nextStep  d-flex align-items-center"> </div>
                  </div>
                  <div class="col-2"> </div>
                </div>
                <div class="col-2"> </div>
              </div>
            </div>
            <div class="aw-cart-right cartBackground-right-aw"> </div>
          </div>
        </div>
      </div>
    </>
  )

  return dataLoading ? loading : display
}

export default withRouter(CartConfirm)
