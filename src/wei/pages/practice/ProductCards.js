import { FaHeart } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

function ProductCards(props) {
  return (
    <>
      <h4>用URL Params</h4>
      <h3>產品類型 = {props.match.params.category}</h3>
      <div className="row">
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 wei-card">
          <div className="wei-card-icon">NEW</div>
          <div className="wei-card-pic position-relative">
            <div className="wei-book-pic">
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd7ab5a282a.jpg"
                alt=""
              />
            </div>
            <div className="wei-heart-bg">
              <FaHeart className="wei-heart" />
            </div>
          </div>
          <div className="wei-book-text">
            <p className="wei-book-title">
              婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
            </p>
            <p className="wei-book-author">約翰．伯格</p>
            <div className="wei-book-price">$300</div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 wei-card">
          <div className="wei-card-icon">NEW</div>
          <div className="wei-card-pic position-relative">
            <div className="wei-book-pic">
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd7ab5a282a.jpg"
                alt=""
              />
            </div>
            <div className="wei-heart-bg">
              <FaHeart className="wei-heart" />
            </div>
          </div>
          <div className="wei-book-text">
            <p className="wei-book-title">
              婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
            </p>
            <p className="wei-book-author">約翰．伯格</p>
            <div className="wei-book-price">$300</div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 wei-card">
          <div className="wei-card-icon">NEW</div>
          <div className="wei-card-pic position-relative">
            <div className="wei-book-pic">
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd7ab5a282a.jpg"
                alt=""
              />
            </div>
            <div className="wei-heart-bg">
              <FaHeart className="wei-heart" />
            </div>
          </div>
          <div className="wei-book-text">
            <p className="wei-book-title">
              婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
            </p>
            <p className="wei-book-author">約翰．伯格</p>
            <div className="wei-book-price">$300</div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 wei-card">
          <div className="wei-card-icon">NEW</div>
          <div className="wei-card-pic position-relative">
            <div className="wei-book-pic">
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd7ab5a282a.jpg"
                alt=""
              />
            </div>
            <div className="wei-heart-bg">
              <FaHeart className="wei-heart" />
            </div>
          </div>
          <div className="wei-book-text">
            <p className="wei-book-title">
              婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
            </p>
            <p className="wei-book-author">約翰．伯格</p>
            <div className="wei-book-price">$300</div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 wei-card">
          <div className="wei-card-icon">NEW</div>
          <div className="wei-card-pic position-relative">
            <div className="wei-book-pic">
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd7ab5a282a.jpg"
                alt=""
              />
            </div>
            <div className="wei-heart-bg">
              <FaHeart className="wei-heart" />
            </div>
          </div>
          <div className="wei-book-text">
            <p className="wei-book-title">
              婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
            </p>
            <p className="wei-book-author">約翰．伯格</p>
            <div className="wei-book-price">$300</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductCards)
