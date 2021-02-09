import { FaHeart } from 'react-icons/fa'
import { withRouter, NavLink } from 'react-router-dom'
import '../styles/product.scss'
import ProductCards from './ProductCards'

function ProductCardsList(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="d-none d-lg-block col-2">
            <div className="wei-categories">
              <h6 className="wei-categories-title">書籍分類</h6>
              <ul>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/lifestyle"
                >
                  <p>生活風格</p>
                </NavLink>

                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/literature"
                >
                  <p>文學小說</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/business"
                >
                  <p>商業理財</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/arts"
                >
                  <p>藝術設計</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/self-help"
                >
                  <p>心理勵志</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/comics"
                >
                  <p>輕小說 漫畫</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/education"
                >
                  <p>語言考試</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/parenting"
                >
                  <p>親子教養</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/travel"
                >
                  <p>旅遊</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/foods"
                >
                  <p>飲食</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/children"
                >
                  <p>童書</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/foreign"
                >
                  <p>外文書</p>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-10 d-flex flex-column">
            <div class="wei-card-list position-relative">
              <div class="wei-list-icon">NEW</div>
              <div class="wei-card-list-pic mr-5">
                <div class="wei-list-book-pic">
                  <img
                    class="w-100"
                    src="/images/books/5ffd7ab5a282a.jpg"
                    alt=""
                  />
                </div>
                <div class="wei-list-heart-bg">
                  <FaHeart className="fas fa-heart wei-list-heart" />
                </div>
              </div>
              <div class="wei-book-text">
                <p class="wei-book-title">
                  婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
                </p>
                <p class="wei-book-author">約翰．伯格</p>
                <div class="wei-book-price wei-book-list-price">$300</div>
              </div>
            </div>
            <div class="wei-card-list position-relative">
              <div class="wei-list-icon">NEW</div>
              <div class="wei-card-list-pic mr-5">
                <div class="wei-list-book-pic">
                  <img
                    class="w-100"
                    src="/images/books/5ffd7ab5a282a.jpg"
                    alt=""
                  />
                </div>
                <div class="wei-list-heart-bg">
                  <FaHeart className="fas fa-heart wei-list-heart" />
                </div>
              </div>
              <div class="wei-book-text">
                <p class="wei-book-title">
                  婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
                </p>
                <p class="wei-book-author">約翰．伯格</p>
                <div class="wei-book-price wei-book-list-price">$300</div>
              </div>
            </div>{' '}
            <div class="wei-card-list position-relative">
              <div class="wei-list-icon">NEW</div>
              <div class="wei-card-list-pic mr-5">
                <div class="wei-list-book-pic">
                  <img
                    class="w-100"
                    src="/images/books/5ffd7ab5a282a.jpg"
                    alt=""
                  />
                </div>
                <div class="wei-list-heart-bg">
                  <FaHeart className="fas fa-heart wei-list-heart" />
                </div>
              </div>
              <div class="wei-book-text">
                <p class="wei-book-title">
                  婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
                </p>
                <p class="wei-book-author">約翰．伯格</p>
                <div class="wei-book-price wei-book-list-price">$300</div>
              </div>
            </div>{' '}
            <div class="wei-card-list position-relative">
              <div class="wei-list-icon">NEW</div>
              <div class="wei-card-list-pic mr-5">
                <div class="wei-list-book-pic">
                  <img
                    class="w-100"
                    src="/images/books/5ffd7ab5a282a.jpg"
                    alt=""
                  />
                </div>
                <div class="wei-list-heart-bg">
                  <FaHeart className="fas fa-heart wei-list-heart" />
                </div>
              </div>
              <div class="wei-book-text">
                <p class="wei-book-title">
                  婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
                </p>
                <p class="wei-book-author">約翰．伯格</p>
                <div class="wei-book-price wei-book-list-price">$300</div>
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-10 col-xl-9">
            <ProductCards />
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductCardsList)
