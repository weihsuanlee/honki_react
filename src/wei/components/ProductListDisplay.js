import { FaHeart, FaStar } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductListDisplay(props) {
  const { books } = props
  const [favoritesList, setFavoritesList] = useState([])
  const userId = localStorage.getItem('userId')
  useEffect(() => {
    fetchFavoriteList()
  }, [])

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
      setFavoritesList(favs)
      console.log(favs)
      // console.log(data, 'get favorite list')
    } else {
      alert('Failed to get favorite list')
    }
  }
  const onClickFavorite = (bookId) => {
    // 如果會員沒登入就按收藏 先掰
    if (!userId) {
      window.location.href = 'http://localhost:3000/member'
      return
    }

    if (favoritesList.indexOf(bookId) > -1) {
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
  return (
    <>
      {books.map((v, i) => (
        <div className="wei-card-list position-relative w-100" key={i}>
          <div
            className={
              `wei-list-icon ` +
              (v.tag ? 'd-block ' : 'd-none ') +
              (v.tag === 'SALE' ? 'theme-color' : '')
            }
          >
            {v.tag}
          </div>
          <div className="wei-card-list-pic d-flex my-auto">
            <div className="wei-list-book-pic my-auto mx-auto">
              <img
                className="w-100"
                src={`http://localhost:3000/images/books/` + v.book_pics}
                alt=""
                onClick={() => {
                  props.history.push('/products/' + v.sid)
                }}
              />
            </div>
            <div className="wei-list-heart-bg">
              <FaHeart
                className={
                  `wei-list-heart ` +
                  (favoritesList.indexOf(v.sid) > -1 ? 'wei-coral' : '')
                }
                onClick={() => {
                  onClickFavorite(v.sid)
                }}
              />
            </div>
          </div>
          <div className="wei-card-list-text">
            <p className="wei-book-title w-100">{v.title}</p>{' '}
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
            <div className="wei-text-wrapper w-100 mt-2">
              <div className="wei-book-text-left">
                <p className="wei-book-author">{v.author}</p>
                <div className="wei-book-price wei-book-list-price">
                  NT$ {v.final_price}
                  <span className="wei-detail-badge mx-4 px-3 py-1">
                    {v.discount.toString().length === 4
                      ? `${v.discount * 100}折`
                      : v.discount.toString().length === 3
                      ? `${v.discount * 10}折`
                      : '原價'}
                  </span>
                  <del className="wei-del-price">NT ${v.price}</del>
                </div>
              </div>
              <div className="wei-book-text-right">
                <p className="wei-book-pub">出版社：{v.publication}</p>
                <p className="wei-book-pub">出版年份：{v.pub_year}</p>
              </div>
            </div>
            <div className="wei-book-overview mt-2">
              簡介：
              <br /> {v.book_overview}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default withRouter(ProductListDisplay)
