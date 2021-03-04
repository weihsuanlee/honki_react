import '../styles/cartStyle.scss'
import { FaTimesCircle, FaAngleLeft } from 'react-icons/fa'
import { Button, Modal } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { countries, townships, postcodes } from './townships'
import CreditCard from './../components/CreditCard'
import Swal from 'sweetalert2'
function CartInput(props) {
  const [mycart, setMycart] = useState([])
  const [mycart1, setMycart1] = useState([])
  const [obj1, setObj1] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [seletedOption1, setSeletedOption1] = useState('')
  const [seletedOption2, setSeletedOption2] = useState('')
  const [seletedOption3, setSeletedOption3] = useState('')
  const [seletedOption4, setSeletedOption4] = useState('')
  const [seletedOption5, setSeletedOption5] = useState('')
  const [seletedOption6, setSeletedOption6] = useState('')
  const [seletedOption7, setSeletedOption7] = useState('')
  const [seletedOption8, setSeletedOption8] = useState('')
  const [seletedOption9, setSeletedOption9] = useState('')
  const [seletedOption10, setSeletedOption10] = useState('')
  const [seletedOption11, setSeletedOption11] = useState('')
  const [seletedOption12, setSeletedOption12] = useState('')
  const [seletedOption13, setSeletedOption13] = useState('')
  const [seletedOption14, setSeletedOption14] = useState('')
  const [seletedOption15, setSeletedOption15] = useState('')
  const [likeList, setLikeList] = useState([])
  console.log(countries, townships, postcodes)
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  const [post, setPost] = useState('')
  let userLogin = JSON.parse(localStorage.getItem('userLogin'))
  const [name, setName] = useState(userLogin.body.name)
  const [email, setEmail] = useState(userLogin.body.email)
  const [mobile, setMobile] = useState(userLogin.body.mobile)
  //select into localStorage
  const [selectAmount, setSelectAmount] = useState()
  // 更動購物車數量
  if (
    !localStorage.getItem('cart5566') ||
    JSON.parse(localStorage.getItem('cart5566')).length === 0
  ) {
    props.history.push('/cart')
  }

  const { updateCartNum } = props

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)
    const newCart = localStorage.getItem('cart5566')
    console.log(JSON.parse(newCart))
    setMycart(JSON.parse(newCart))
  }
  useEffect(
    () => {
      getCartFromLocalStorage()
      geyInfo_user()
      start()
    },
    [],
    [],
    []
  )

  //input1
  const Terms1 = (recipient_trans) => {
    console.log(recipient_trans)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    console.log('index', currentCart)
    currentCart[0].recipient_trans = recipient_trans
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption1(recipient_trans)
  }
  //input2

  //input3
  const Terms3 = (payment) => {
    console.log(payment)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].payment = payment
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption3(payment)

    if (payment === '信用卡付款') {
      // setShowSuccess(true)
      let el = document.getElementById('cd')
      el.style.display = 'block'
      // toMenu()
    } else {
      let el = document.getElementById('cd')
      el.style.display = 'none'
    }
  }

  function toMenu() {
    window.setTimeout(() => (window.location.href = '/cartInput'), 4000)
  }

  //input4
  const Terms4 = (invoice) => {
    console.log(invoice)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].invoice = invoice
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption4(invoice)
  }
  //input5
  const Terms5 = (userName) => {
    console.log(userName)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].userName = userName
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption5(userName)
  }

  //input6
  const Terms6 = (userTel) => {
    console.log(userTel)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].userTel = userTel
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption6(userTel)
  }
  //input7
  const Terms7 = (userMail) => {
    console.log(userMail)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].userMail = userMail
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption7(userMail)
  }

  //input8
  const Terms8 = (recipient_name) => {
    console.log(recipient_name)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].recipient_name = recipient_name
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption8(recipient_name)
  }
  //input9
  const Terms9 = (recivePhone) => {
    console.log(recivePhone)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].recivePhone = recivePhone
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption9(recivePhone)
  }
  //input10
  const Terms10 = (reciveMail) => {
    console.log(reciveMail)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].reciveMail = reciveMail
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption10(reciveMail)
  }

  //input11 郵遞區號 縣市
  const Terms11 = (reciveCountry) => {
    console.log(reciveCountry)

    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].reciveCountry = countries[reciveCountry]
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption11(reciveCountry)
    setCountry(reciveCountry)
    setPost('')
    setTownship(-1)
    setSeletedOption12(-1)
  }

  //input12 郵遞區號 區
  const Terms12 = (reciveArea) => {
    console.log(reciveArea)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].reciveArea = townships[country][reciveArea]
    currentCart[0].recivePost = postcodes[country][reciveArea]
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption12(reciveArea)
    setPost(postcodes[country][reciveArea])

    setTownship(reciveArea)
  }
  //input13
  const Terms13 = (recivePost) => {
    console.log(recivePost)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].reciveAdress = recivePost
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption13(recivePost)
  }
  //input14
  const Terms14 = (reciveAdress) => {
    console.log(reciveAdress)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].reciveAdress = reciveAdress
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption14(reciveAdress)
  }
  //input15
  const Terms15 = (reciveTime) => {
    console.log(reciveTime)
    const currentCart = JSON.parse(localStorage.getItem('inputTerms')) || [{}]
    currentCart[0].reciveTime = reciveTime
    console.log('index', currentCart)
    localStorage.setItem('inputTerms', JSON.stringify(currentCart))
    setSeletedOption15(reciveTime)
  }
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
    // 更新購物車數量
    updateCartNum()
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
  // 計算總量的函式
  const sumAmount2 = (items) => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    if (seletedOption1 === '超商取貨') {
      total += 60
    }
    if (seletedOption1 === '宅配') {
      total += 120
    }
    return total
  }
  // 清除畫面
  const start = () => {
    setSeletedOption8('')
    setSeletedOption9('')
    setSeletedOption10('')
    setSeletedOption11('')
    setSeletedOption12('')
    setSeletedOption13('')
    setSeletedOption14('')
    setSeletedOption15('')
  }

  const geyInfo_user = async () => {
    console.log('get user info')
    let userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const url = 'http://localhost:3333/member/edit/' + userLogin.body.sid
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      console.log(data)
      if (data.success) {
        localStorage.setItem('userLogin', JSON.stringify(data))
        setSeletedOption5(data.body.name)
        setSeletedOption6(data.body.mobile)
        setSeletedOption7(data.body.email)
        Terms5(data.body.name)
        Terms6(data.body.mobile)
        Terms7(data.body.email)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // 讀取會員資料
  const geyInfo = async () => {
    console.log('get user info')
    let userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const url = 'http://localhost:3333/member/edit/' + userLogin.body.sid
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      if (data.success) {
        localStorage.setItem('userLogin', JSON.stringify(data))
        setSeletedOption8(data.body.name)
        setSeletedOption9(data.body.mobile)
        setSeletedOption10(data.body.email)
        Terms8(data.body.name)
        Terms9(data.body.mobile)
        Terms10(data.body.email)
      }
    } catch (error) {
      console.log(error)
    }
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
                          <h5> 共 </h5> <h5>小計</h5>
                        </div>
                        <div class="aw-count-num d-flex justify-content-end">
                          {/* 計算加總本數 */}
                          <div class="text-right">
                            <h5>{toCurrency(sumQuantity(mycart))}</h5>
                            <h5>$ {toCurrency(sumAmount(mycart))}</h5>
                          </div>
                        </div>
                        <div class="text-right">
                          <h5>本</h5>
                          <h5>元</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="aw-productAreaPadding row aw-row d-flex justify-content-between aw-pr-42">
                    <div class="col-10 p-0">
                      <form>
                        <div class=" form-width-height aw-form-width-height">
                          <div class="form-tittle">
                            <h5>運費</h5>
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
                                value={seletedOption1}
                                onChange={(e) => {
                                  Terms1(e.target.value)
                                }}
                              >
                                <option value="0">請選擇</option>
                                <option value="超商取貨">超商取貨</option>
                                <option value="宅配">宅配</option>
                              </select>
                            </div>
                          </div>
                          {/* <div class="form-group ">
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
                                value={seletedOption2}
                                onChange={(e) => {
                                  Terms2(e.target.value)
                                }}
                              >
                                <option value="0">請選擇</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                          </div> */}
                        </div>
                      </form>
                    </div>
                    <div class="aw-transport-fee col-2 pr-0">
                      <div class="aw-transport-fee-items text-right">
                        <h5>
                          {seletedOption1 === '超商取貨' ? 60 + ' 元' : ''}
                          {seletedOption1 === '宅配' ? 120 + ' 元' : ''}
                        </h5>
                      </div>
                      {/* <div class="aw-transport-fee-items text-right">
                        <h6>60元</h6>
                      </div> */}
                    </div>
                  </div>
                  <div class="aw-countArea pr-0  pt-0">
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
                              value={seletedOption3}
                              onChange={(e) => {
                                Terms3(e.target.value)
                              }}
                            >
                              <option value="select">請選擇</option>
                              <option value="貨到付款">貨到付款</option>
                              <option value="信用卡付款">信用卡付款</option>
                            </select>
                          </div>
                        </div>
                        <div style={{ display: 'none' }} id="cd">
                          <CreditCard> </CreditCard>
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
                              value={seletedOption4}
                              onChange={(e) => {
                                Terms4(e.target.value)
                              }}
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
                              value={seletedOption5}
                              onChange={(e) => {
                                Terms5(e.target.value)
                              }}
                            />
                          </div>
                        </div>

                        <div class="form-group ">
                          <div class="formItems row d-flex">
                            <label class="inputText col-5">聯絡電話</label>
                            <input
                              type="tel"
                              class="form-control formInput col-7"
                              placeholder=""
                              value={seletedOption6}
                              onChange={(e) => {
                                Terms6(e.target.value)
                              }}
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
                              value={seletedOption7}
                              onChange={(e) => {
                                Terms7(e.target.value)
                              }}
                            />
                          </div>
                        </div>

                        <div class="formItems  form-tittle d-flex align-items-center row w-100 ">
                          <h5 className="col-5 pl-0">收件人資訊</h5>
                          <div className="col-7">
                            <div className="d-flex justify-content-end  align-items-center ">
                              <label className="aw-label">同訂購人</label>
                              <input
                                className="mb-2 ml-2"
                                type="checkbox"
                                // checked={item.completed}
                                onChange={(e) => {
                                  geyInfo()
                                }}
                              />
                            </div>
                          </div>
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
                              value={seletedOption8}
                              onChange={(e) => {
                                Terms8(e.target.value)
                              }}
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
                              value={seletedOption9}
                              onChange={(e) => {
                                Terms9(e.target.value)
                              }}
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
                              value={seletedOption10}
                              onChange={(e) => {
                                Terms10(e.target.value)
                              }}
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
                                  // value={seletedOption11}
                                  onChange={(e) => {
                                    Terms11(e.target.value)
                                    // setSeletedOption12(-1)
                                  }}
                                >
                                  <option value="-1">選擇縣市</option>
                                  {countries.map((value, index) => (
                                    <option key={index} value={index}>
                                      {value}
                                    </option>
                                  ))}
                                </select>
                                <select
                                  class="form-control formInput  col-sm "
                                  id="exampleFormControlSelect1"
                                  value={seletedOption12}
                                  onChange={(e) => {
                                    Terms12(e.target.value)
                                  }}
                                >
                                  <option value="-1">選擇區域</option>
                                  {country > -1 &&
                                    townships[country].map((value, index) => (
                                      <option key={index} value={index}>
                                        {value}
                                      </option>
                                    ))}
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
                                  onChange={(e) => {
                                    Terms13(e.target.value)
                                  }}
                                  value={post}
                                />
                              </div>
                              <textarea
                                class="form-control  "
                                id="exampleFormControlTextarea1"
                                placeholder="ex:重慶南路一段122號"
                                rows="2 "
                                value={seletedOption14}
                                onChange={(e) => {
                                  Terms14(e.target.value)
                                }}
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
                              value={seletedOption15}
                              onChange={(e) => {
                                Terms15(e.target.value)
                              }}
                            >
                              <option value="0">請選擇</option>
                              <option value="不限時">不限時</option>
                              <option value="白天">白天</option>
                              <option value="晚上">晚上</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="col-2"></div>
                  </div>

                  <div class="row justify-content-between aw-stepBtn">
                    <div class="aw-preStep  d-flex align-items-center">
                      <Link class="aw-a" to="/CartItems">
                        <div class="row aw-row">
                          <FaAngleLeft className="fas fa-angle-left mr-2  aw-mt2" />
                          <h6> 回上一頁</h6>
                        </div>
                      </Link>
                    </div>
                    <div class="aw-nextStep  d-flex align-items-center">
                      <Link to="/CartConfirm" class="aw-a">
                        <button
                          class="btn-lg aw-btn-lg"
                          onClick={() => {
                            updateCartToLocalStorage(false)
                          }}
                        >
                          下一步
                        </button>
                      </Link>
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

  return dataLoading ? loading : display
}

export default withRouter(CartInput)
