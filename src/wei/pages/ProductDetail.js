import '../styles/product.scss'
import { withRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'
import ProductCarousel from '../components/ProductCarousel'
import ProductHistoryCarousel from '../components/ProductHistoryCarousel'
import DetailSpinner from '../components/DetailSpinner'
import ProductDetailDisplay from '../components/ProductDetailDisplay'

function ProductDetail(props) {
  const { updateCartNum } = props
  // 此瀏覽單一商品收藏狀態
  const [favorited, setFavorited] = useState(false)
  // 全商品收藏狀態
  const [favorites, setFavorites] = useState([])
  // loading spinner
  const [isLoading, setIsLoading] = useState(true)
  // 此頁商品詳細資訊
  const [productDetail, setProductDetail] = useState([])
  // 折扣數
  const [discountDisplay, setDiscountDisplay] = useState('')
  // 此頁商品的相關商品
  const [productRelated, setProductRelated] = useState([])
  // 近期瀏覽商品紀錄
  const [productHistory, setProductHistory] = useState([])

  // 取得商品sid、會員id
  const sid = props.match.params.sid
  const userId = localStorage.getItem('userId')

  // 取得商品內頁資料
  const getProductDetail = async () => {
    // 先開啟spinner
    setIsLoading(true)
    const response = await fetch('http://localhost:3333/product/book/' + sid, {
      method: 'get',
    })
    const data = await response.json()
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
    // 0.5秒後關閉spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  // didMount
  useEffect(() => {
    getProductDetail()
    fetchFavoriteList()
  }, [])

  // 傳送localstorage近期瀏覽recentlyViewed
  const sendRecentlyViewed = async (recent) => {
    const response = await fetch('http://localhost:3333/product/history', {
      method: 'post',
      body: JSON.stringify(recent),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = await response.json()
    setProductHistory(data.history)
    console.log(data)
  }

  // didUpdate
  useEffect(() => {
    // 近期瀏覽寫入localstorage
    const recent = localStorage.getItem('recentlyViewed_sid')
      ? JSON.parse(localStorage.getItem('recentlyViewed_sid'))
      : []
    let bookId = +props.match.params.sid
    if (recent.indexOf(bookId) === -1) {
      recent.unshift(bookId)
      if (recent.length > 10) {
        recent.pop()
      }
    }
    localStorage.setItem('recentlyViewed_sid', JSON.stringify(recent))
    // 執行傳送 localstorage to node
    sendRecentlyViewed(recent)
    // get 資料
    getProductDetail()
    fetchFavoriteList()
  }, [props.match.params.sid])

  // 取得會員收藏書單資料
  const fetchFavoriteList = async () => {
    if (!userId) return
    const url = 'http://localhost:3333/product/favorite/favoriteList'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
      }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    if (data.success) {
      let favs = []
      data.rows.map((favorite, index) => {
        return favs.push(favorite.sid)
      })
      setFavorites(favs)
      console.log(favs, sid, favs.indexOf(+sid))

      if (favs.indexOf(+sid) !== -1) {
        setFavorited(true)
      } else {
        setFavorited(false)
      }
      // console.log(data, 'get favorite list')
    } else {
      alert('Failed to get favorite list')
    }
  }
  // 點選愛心收藏事件處理
  const onClickFavorite = () => {
    // 如果會員沒登入就按收藏 先掰
    if (!userId) {
      window.location.href = 'http://localhost:3000/member'
      return
    }
    if (favorited) {
      // 已經是愛心
      const removeFavorite = async () => {
        const url = 'http://localhost:3333/product/favorite/removeFavorite'
        const request = new Request(url, {
          method: 'POST',
          body: JSON.stringify({
            bookId: sid,
            userId: userId,
          }),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        })
        const response = await fetch(request)
        const data = await response.json()
        if (data.success) {
          setFavorited(!favorited)
          console.log(data, 'remove from Favorite')
        } else {
          alert('Failed to remove from Favorite')
        }
      }
      removeFavorite()
    } else {
      // 如果不是愛心
      const addFavorite = async () => {
        const url = 'http://localhost:3333/product/favorite/addFavorite'
        const request = new Request(url, {
          method: 'POST',
          body: JSON.stringify({
            bookId: sid,
            userId: userId,
          }),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        })
        const response = await fetch(request)
        const data = await response.json()
        if (data.success) {
          setFavorited(!favorited)
          console.log(data, 'Add to Favorite')
        } else {
          alert('Failed to add to Favorite')
        }
      }
      addFavorite()
    }
  }
  const detailSpinner = <DetailSpinner show="true" />
  const productDetailDisplay = (
    <ProductDetailDisplay
      favorited={favorited}
      setFavorited={setFavorited}
      onClickFavorite={onClickFavorite}
      productDetail={productDetail}
      updateCartNum={updateCartNum}
      discountDisplay={discountDisplay}
    />
  )

  return (
    <>
      {isLoading ? detailSpinner : productDetailDisplay}
      <div className="container-fluid wei-detail-books">
        <h6 className="wei-detail-books-subtitle">你可能也會喜歡</h6>
        <div className="row justify-content-center wei-carousel">
          <div className="col-10">
            <ProductCarousel
              productRelated={productRelated}
              favorites={favorites}
              fetchFavoriteList={fetchFavoriteList}
            />
          </div>
        </div>
        <h6 className="wei-detail-books-subtitle">最近瀏覽</h6>
        <div className="row justify-content-center">
          <div className="col-10">
            <ProductHistoryCarousel
              productHistory={productHistory}
              productRelated={productRelated}
              favorites={favorites}
              fetchFavoriteList={fetchFavoriteList}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductDetail)
