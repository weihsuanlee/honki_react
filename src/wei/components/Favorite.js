import { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'

function Favorite(props) {
  const bookId = props.bookId
  const userId = props.userId

  const [favorited, setFavorited] = useState(false)
  useEffect(() => {
    fetchFavoriteList()
  }, [bookId])

  const fetchFavoriteList = async () => {
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
      console.log(favs, bookId, favs.indexOf(+bookId))

      if (favs.indexOf(+bookId) !== -1) {
        setFavorited(true)
      } else {
        setFavorited(false)
      }
      // console.log(data, 'get favorite list')
    } else {
      alert('Failed to get favorite list')
    }
  }
  const onClickFavorite = () => {
    // if (user.userData && !user.userData.isAuth) {
    //   return alert('Please Log in first')
    // }

    if (favorited) {
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
          setFavorited(!favorited)
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
      <button
        className="wei-detail-icon wei-detail-heart mb-2"
        onClick={onClickFavorite}
      >
        <FaHeart
          className={`wei-detail-heart-icon ` + (!favorited ? 'wei-grey' : '')}
        />
      </button>
    </>
  )
}

export default Favorite
