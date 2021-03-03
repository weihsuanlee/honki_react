import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaHeart, FaStar } from 'react-icons/fa'
import React from 'react'
import Slider from 'react-slick'
import { withRouter } from 'react-router-dom'

function ProductHistoryCarousel(props) {
  const { productHistory, favorites, fetchFavoriteList } = props
  const userId = localStorage.getItem('userId')

  const onClickFavorite = (bookId) => {
    // 如果會員沒登入就按收藏 先掰
    if (!userId) {
      window.location.href = 'http://localhost:3000/member'
      return
    }

    if (favorites.indexOf(bookId) > -1) {
      // 已經是愛心
      const removeFavorite = async () => {
        const url = 'http://localhost:3333/product/favorite/removeFavorite'
        const request = new Request(url, {
          method: 'POST',
          body: JSON.stringify({
            bookId: bookId,
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
          fetchFavoriteList()
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
            bookId: bookId,
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
          fetchFavoriteList()
          console.log(data, 'Add to Favorite')
        } else {
          alert('Failed to add to Favorite')
        }
      }
      addFavorite()
    }
  }
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  }
  const productDisplay = (
    <>
      <Slider {...settings} className="wei-left-slick">
        {productHistory.map((v, i) => (
          <div className="wei-card position-relative wei-slick" key={i}>
            <div
              className={
                `wei-card-icon ` +
                (v.tag ? 'd-block ' : 'd-none ') +
                (v.tag === 'SALE' ? 'theme-color' : '')
              }
            >
              {v.tag}
            </div>
            <div className="wei-card-pic position-relative">
              <div
                className="wei-book-pic"
                onClick={() => {
                  props.history.push('/products/' + v.sid)
                }}
              >
                <img
                  className="w-100"
                  src={`http://localhost:3000/images/books/` + v.book_pics}
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart
                  className={
                    `wei-heart ` +
                    (favorites.indexOf(v.sid) > -1 ? 'wei-coral' : '')
                  }
                  onClick={() => {
                    onClickFavorite(v.sid)
                  }}
                />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">{v.title}</p>
              <p className="wei-book-author">{v.author}</p>
              <div className="d-flex justify-content-between">
                <span className="wei-stars wei-product-stars">
                  <FaStar
                    className={`mr-1 wei-star ` + (v.stars > 0 ? 'yellow' : '')}
                  />
                  <FaStar
                    className={`mr-1 wei-star ` + (v.stars > 1 ? 'yellow' : '')}
                  />
                  <FaStar
                    className={`mr-1 wei-star ` + (v.stars > 2 ? 'yellow' : '')}
                  />
                  <FaStar
                    className={`mr-1 wei-star ` + (v.stars > 3 ? 'yellow' : '')}
                  />
                  <FaStar
                    className={`mr-1 wei-star ` + (v.stars > 4 ? 'yellow' : '')}
                  />
                </span>
                <del>NT ${v.price}</del>
              </div>
              <div className="wei-book-price">NT$ {v.final_price}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
  return <>{productDisplay}</>
}

export default withRouter(ProductHistoryCarousel)
