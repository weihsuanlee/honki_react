import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

function Favorite(props) {
  const bookId = props.bookId
  const userId = props.userId

  const [Favorited, setFavorited] = useState(false)

  const onClickFavorite = () => {
    // if (user.userData && !user.userData.isAuth) {
    //   return alert('Please Log in first')
    // }

    if (Favorited) {
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
          setFavorited(!Favorited)
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
          setFavorited(!Favorited)
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
          className={`wei-detail-heart-icon ` + (!Favorited ? 'wei-grey' : '')}
        />
      </button>
    </>
  )
}

export default Favorite
