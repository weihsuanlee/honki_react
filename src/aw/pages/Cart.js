import '../styles/cartStyle.scss'
import { FaTimesCircle, FaAngleLeft } from 'react-icons/fa'
import { withRouter, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Cart(props) {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  // 更動購物車數量
  // const { cartNum, setCartNum } = props
  const { updateCartNum } = props

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart5566') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

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
        (value) => value.book_sid === mycart[i].book_sid
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

    // console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 刪除單一項目
  const updateCartRemove = (index) => {
    const currentCart = JSON.parse(localStorage.getItem('cart5566')) || []
    console.log(currentCart[index])

    const a = currentCart.filter((v, i) => {
      console.log(v)
      if (index !== i) {
        return v
      }
    })
    console.log(a)

    localStorage.setItem('cart5566', JSON.stringify(a))

    // 設定資料
    setMycart(a)

    // 更新購物車數量
    let total = 0
    for (let i = 0; i < a.length; i++) {
      total += a[i].amount
    }
    updateCartNum()
  }
  //清除全部
  const updateCartRemoveAll = (item) => {
    console.log(item)
    localStorage.removeItem('cart5566')
    // 設定資料
    setMycart([])
    // 更新購物車數量
    updateCartNum()
  }
  const emptyCart = (
    <>
      <div className="cart-page noselect">
        <div className="ru-cart-wrap mx-auto">
          <main className="d-flex justify-content-center align-items-center w-100 aw-cart-empty">
            <div className="empty-cart-display ">
              <h4>您的購物車是空的，快去挑選商品！</h4>
              <div className="d-flex justify-content-center mb-5 mt-4">
                <Link to="/product" className="btn btn-md-dark wei-link">
                  去書城逛逛
                </Link>
              </div>
              <div className="mx-auto mb-5" style={{ width: '40%' }}>
                <img
                  // src="http://localhost:3000/images/wei/unboxing.svg"
                  src="http://localhost:3000/images/wei/mushroom-cleaning.gif"
                  className="w-100 img-full"
                  alt=""
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
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
                    <button
                      class="btn-sm-dark aw-btn-sm-dark "
                      onClick={() => {
                        updateCartRemoveAll()
                      }}
                    >
                      清空
                    </button>
                  </div>
                </div>
                <div class="aw-productAreaPadding ">
                  <div class="aw-productArea">
                    {mycartDisplay.map((item, index) => {
                      return (
                        <>
                          <div
                            class="row aw-card d-flex align-items-center "
                            key={item.id}
                          >
                            <div class="col-3 aw-card-pic">
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
                            <div class="col-7 aw-book-text d-flex justify-content-center aw-p-9">
                              <p class="aw-book-title">{item.bookname}</p>
                            </div>
                            <div class="col-2 aw-book-price  d-flex justify-content-center aw-p-0">
                              <FaTimesCircle
                                className="fas fa-times-circle aw-delete-cross"
                                onClick={() => updateCartRemove(index)}
                              />
                            </div>
                          </div>
                        </>
                      )
                    })}
                  </div>
                </div>

                <div class="row justify-content-between aw-stepBtn">
                  <div class="aw-preStep d-flex align-items-center">
                    <Link class="aw-a" to="/product">
                      <div class="row aw-row">
                        <FaAngleLeft className="fas fa-angle-left mr-2  aw-mt2" />
                        <h6> 繼續購物</h6>
                      </div>
                    </Link>
                  </div>
                  <div class="aw-nextStep  d-flex align-items-center">
                    <Link to="/CartItems" class="aw-a">
                      <button class="btn-lg aw-btn-lg">下一步</button>
                    </Link>
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
  // 以資料載入的指示狀態來切換要出現的畫面

  if (
    !localStorage.getItem('cart5566') ||
    JSON.parse(localStorage.getItem('cart5566')).length === 0
  ) {
    return emptyCart
  } else {
    return dataLoading ? loading : display
  }
}

export default withRouter(Cart)
