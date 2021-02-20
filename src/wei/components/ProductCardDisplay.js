import { FaHeart, FaStar } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

function ProductCardDisplay(props) {
  const { books } = props
  return (
    <>
      {books.map((v, i) => (
        <div
          onClick={() => {
            props.history.push('/products/' + v.sid)
          }}
          className="col-6 col-sm-6 col-md-4 col-lg-3 wei-card"
          key={i}
        >
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
            <div className="wei-book-pic">
              <img
                className="w-100"
                src={`http://localhost:3000/images/books/` + v.book_pics}
                alt=""
              />
            </div>
            <div className="wei-heart-bg">
              <FaHeart className="wei-heart" />
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
