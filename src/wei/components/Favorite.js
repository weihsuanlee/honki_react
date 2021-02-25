import { FaHeart } from 'react-icons/fa'

function Favorite(props) {
  const { favorited, onClickFavorite } = props

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
