import { FaHeart, FaStar } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductCardDisplay(props) {
  const { books } = props
  const [favorites, setFavorites] = useState([])

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
      setFavorites(favs)
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
  return (
    <>
      {books.map((v, i) => (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 wei-card" key={i}>
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
    </>
  )
}

export default withRouter(ProductCardDisplay)
