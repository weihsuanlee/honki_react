import { FaHeart, FaStar } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

function ProductListDisplay(props) {
  const { books } = props
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
          <div
            className="wei-card-list-pic d-flex my-auto"
            onClick={() => {
              props.history.push('/products/' + v.sid)
            }}
          >
            <div className="wei-list-book-pic my-auto mx-auto">
              <img
                className="w-100"
                src={`http://localhost:3000/images/books/` + v.book_pics}
                alt=""
              />
            </div>
            <div className="wei-list-heart-bg">
              <FaHeart className="fas fa-heart wei-list-heart" />
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
