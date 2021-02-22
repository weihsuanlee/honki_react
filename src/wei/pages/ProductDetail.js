import '../styles/product.scss'
import {
  FaHeart,
  FaShoppingCart,
  FaShare,
  FaStar,
  FaBookOpen,
} from 'react-icons/fa'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import { withRouter } from 'react-router-dom'
import { Tabs, Tab, Accordion, Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import React from 'react'
import ReadTrialModal from '../components/ReadTrialModal'
import ProductCarousel from '../components/ProductCarousel'
import ProductHistoryCarousel from '../components/ProductHistoryCarousel'

function ProductDetail(props) {
  const [recentlyViewed, setRecentlyViewed] = useState([])
  // 傳送 recentlyViewed
  const sendRecentlyViewed = async () => {
    const response = await fetch('http://localhost:3333/product/history', {
      method: 'post',
      body: JSON.stringify(recentlyViewed),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = await response.json()
    setProductHistory(data.history)
    console.log(data)
  }

  const [modalShow, setModalShow] = React.useState(false)
  const [productDetail, setProductDetail] = useState([])
  const [productRelated, setProductRelated] = useState([])
  const [productHistory, setProductHistory] = useState([])
  const [discountDisplay, setDiscountDisplay] = useState('')
  //aw-購物車按鈕
  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const updateCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)
    // found: index! == -1
    if (index > -1) {
      //currentCart[index].amount++
      setProductName('這個商品已經加過了')
      handleShow()
      return
    } else {
      currentCart.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
    setProductName('產品：' + item.name + '已成功加入購物車')
    handleShow()
    console.log(item.name)
  }

  // console.log(props.match.params.sid)
  const sid = props.match.params.sid

  // 伺服器抓資料async
  const getProductDetail = async () => {
    const response = await fetch('http://localhost:3333/product/book/' + sid, {
      method: 'get',
    })
    const data = await response.json()
    // console.log(data)
    setProductDetail(data.detail[0])
    setProductRelated(data.related)

    let discountState = ''
    if (data.detail[0].discount.toString().length === 4) {
      discountState = `${data.detail[0].discount * 100}折`
    } else if (data.detail[0].discount.toString().length === 3) {
      discountState = `${data.detail[0].discount * 10}折`
    } else {
      discountState = '原價'
    }
    setDiscountDisplay(discountState)
  }

  // didMount
  useEffect(() => {
    getProductDetail()
  }, [])

  // didUpdate
  useEffect(() => {
    // 寫入localstorage
    const recent = localStorage.getItem('recentlyViewed_sid')
      ? JSON.parse(localStorage.getItem('recentlyViewed_sid'))
      : []
    let idNow = +props.match.params.sid
    if (recent.indexOf(idNow) === -1) {
      recent.unshift(idNow)
    }
    localStorage.setItem('recentlyViewed_sid', JSON.stringify(recent))
    // 並記錄 recentlyViewed state
    setRecentlyViewed(recent)
    // 執行傳送 localstorage to node
    sendRecentlyViewed()
    // get 資料
    getProductDetail()
  }, [props.match.params.sid])

  const productDetailDisplay = (
    <>
      <div className="container-fluid wei-bg-white">
        <div className="row position-relative">
          <div className="wei-detail-icons d-flex flex-column">
            <button className="wei-detail-icon wei-detail-heart mb-2">
              <FaHeart className="wei-detail-heart-icon" />
            </button>
            <button className="wei-detail-icon wei-detail-share">
              <FaShare className="wei-detail-share-icon" />
            </button>
          </div>
          <div className="col-12">
            <MultiLevelBreadCrumb class="breadcrumb wei-breadcrumb" />
          </div>
          <div className="col-12 col-md-5 wei-detail-left text-center mt-5">
            <div className="wei-detail-pic mx-auto mb-5">
              <img
                className="w-100"
                src={
                  `http://localhost:3000/images/books/` +
                  productDetail.book_pics
                }
                alt=""
              />
            </div>
            {productDetail.readtrial ? (
              <Button
                variant="primary"
                onClick={() => setModalShow(true)}
                className="btn-md-dark wei-read-trial"
              >
                <FaBookOpen className="mr-3" />
                試閱
              </Button>
            ) : (
              ''
            )}
            <ReadTrialModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              title="試閱"
              message={productDetail.readtrial}
            />
          </div>
          <div className="col-12 col-md-7 wei-detail-right pt-5">
            <h4 className="wei-detail-title">{productDetail.title}</h4>
            <h5 className="wei-detail-subtitle">{productDetail.title_eng}</h5>
            <hr className="wei-line" />
            <span className="wei-stars">
              <FaStar
                className={
                  `mr-1 wei-star ` + (+productDetail.stars > 0 ? 'yellow' : '')
                }
              />
              <FaStar
                className={
                  `mr-1 wei-star ` + (productDetail.stars > 1 ? 'yellow' : '')
                }
              />
              <FaStar
                className={
                  `mr-1 wei-star ` + (productDetail.stars > 2 ? 'yellow' : '')
                }
              />
              <FaStar
                className={
                  `mr-1 wei-star ` + (productDetail.stars > 3 ? 'yellow' : '')
                }
              />
              <FaStar
                className={
                  `mr-3 wei-star ` + (productDetail.stars > 4 ? 'yellow' : '')
                }
              />
            </span>
            <span className="wei-reviews">{productDetail.reviews} Reviews</span>
            <h6 className="wei-detail-author mt-3">
              作者：{productDetail.author}
            </h6>
            <h6 className="wei-detail-publication">
              出版社：{productDetail.publication}
            </h6>
            <h6 className="wei-detail-pub-year">
              出版年份：{productDetail.pub_year}
            </h6>
            <h6 className="wei-detail-language">
              語言：{productDetail.language}
            </h6>
            <h6 className="wei-detail-isbn">ISBN：{productDetail.ISBN}</h6>
            <div className="wei-detail-pricearea d-flex my-4">
              <h5 className="wei-detail-final-price">
                NT$ {productDetail.final_price}
              </h5>
              <div className="wei-detail-badge mx-4">{discountDisplay}</div>
              <h6 className="wei-detail-price">
                <del>NT ${productDetail.price}</del>
              </h6>
            </div>
            <button
              className="btn-lg wei-add-to-cart"
              // aw-購物車按鈕
              onClick={() =>
                updateCartToLocalStorage({
                  ISBN: productDetail.ISBN,
                  price: productDetail.final_price,
                  // amount: 1,
                  book_id: productDetail.book_pics,
                })
              }
            >
              <FaShoppingCart className="mr-5" />
              放入購物車
            </button>
          </div>
        </div>
        <div className="row">
          <div className="holder d-none d-lg-block mx-auto wei-holder">
            <Tabs defaultActiveKey="bookOverview" id="uncontrolled-tab-example">
              <Tab eventKey="bookOverview" title="內容簡介">
                <div class="panel-title">內容簡介</div>
                <p>{productDetail.book_overview}</p>
              </Tab>
              {productDetail.author_intro ? (
                <Tab eventKey="authorIntro" title="作者介紹">
                  <div class="panel-title">作者介紹</div>
                  <p>{productDetail.author_intro}</p>
                </Tab>
              ) : (
                ''
              )}
              {productDetail.list ? (
                <Tab eventKey="bookList" title="書籍目錄">
                  <div class="panel-title">書籍目錄</div>
                  <p>{productDetail.list}</p>
                </Tab>
              ) : (
                ''
              )}
            </Tabs>
          </div>
          <div className="holder-mobile d-lg-none wei-holder-mobile">
            <Accordion defaultActiveKey="10">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="10">
                    內容簡介
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    <p>{productDetail.book_overview}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {productDetail.author_intro ? (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="11">
                      作者介紹
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="11">
                    <Card.Body>
                      <p>{productDetail.author_intro}</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ) : (
                ''
              )}
              {productDetail.list ? (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="12">
                      書籍目錄
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="12">
                    <Card.Body>
                      <p>{productDetail.list}</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ) : (
                ''
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {productDetailDisplay}
      <div className="container-fluid wei-detail-books">
        <h6 className="wei-detail-books-subtitle">你可能也會喜歡</h6>
        <div className="row justify-content-center">
          <div className="col-10">
            <ProductCarousel productRelated={productRelated} />
          </div>
        </div>
        <h6 className="wei-detail-books-subtitle">最近瀏覽</h6>
        <div className="row justify-content-center">
          <div className="col-10">
            <ProductHistoryCarousel
              productHistory={productHistory}
              setProductHistory={setProductHistory}
              getProductDetail={getProductDetail}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductDetail)
