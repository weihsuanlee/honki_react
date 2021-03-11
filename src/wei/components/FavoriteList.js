import '../styles/product.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { FaTimesCircle } from 'react-icons/fa'


function FavoriteList(props) {
  const [favorites, setFavorites] = useState([])
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    fetchFavoriteList()
  }, [])
  const noResults = (
    <>
      <div className="mx-auto mt-5">
        <h6 className="text-center mt-5">你的收藏書櫃 空空如也</h6>
        <div className="d-flex justify-content-center mb-5 mt-3">
          <Link to="/product" className="btn btn-md-dark wei-link">
            去書城逛逛
          </Link>
        </div>
        <div className="mx-auto mb-5" style={{ width: '15%' }}>
          <img
            // src="http://localhost:3000/images/wei/unboxing.svg"
            src="http://localhost:3000/images/wei/mushroom-cleaning.gif"
            className="w-100 img-full"
            alt=""
          />
        </div>
      </div>
    </>
  )
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
      setFavorites(data.rows)
      // console.log(data, 'get favorite list')
    } else {
      alert('Failed to get favorite list')
    }
  }
  const removeFavorite = async (bookId, userId) => {
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
    } else {
      alert('Failed to remove from Favorite')
    }
  }

  const renderCards = favorites.map((favorite, index) => {
    return (
      <>
        <div
          className="wei-card-list position-relative w-100 wei-card-list-favorite"
          key={index}
        >
          <div
            className="wei-card-list-pic d-flex my-auto"
            onClick={() => {
              props.history.push('/products/' + favorite.sid)
            }}
          >
            <div className="wei-list-book-pic my-auto mx-auto">
              <img
                className="w-100"
                src={`http://localhost:3000/images/books/` + favorite.book_pics}
                alt=""
              />
            </div>
          </div>
          <div className="wei-card-list-text">
            <p className="wei-book-title w-100">{favorite.title}</p>{' '}
            <div className="wei-text-wrapper w-100 mt-2">
              <div className="wei-book-text-left">
                <p className="wei-book-author">{favorite.author}</p>
                <div className="wei-book-price wei-book-list-price">
                  NT$ {favorite.final_price}
                  <span className="wei-detail-badge mx-4 px-3 py-1">
                    {favorite.discount.toString().length === 4
                      ? `${favorite.discount * 100}折`
                      : favorite.discount.toString().length === 3
                      ? `${favorite.discount * 10}折`
                      : '原價'}
                  </span>
                  <del className="wei-del-price">NT ${favorite.price}</del>
                </div>
              </div>
              <div className="wei-book-text-right">
                <p className="wei-book-pub">出版社：{favorite.publication}</p>
                <p className="wei-book-pub">出版年份：{favorite.pub_year}</p>
              </div>
            </div>
          </div>
          <button
            className="wei-delete-btn"
            onClick={() => {
              removeFavorite(favorite.sid, userId)
            }}
          >
            <FaTimesCircle />
          </button>
        </div>
      </>
    )
  })

  return <>{favorites.length > 0 ? renderCards : noResults}</>
}

export default withRouter(FavoriteList)
