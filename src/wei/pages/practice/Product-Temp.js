import '../styles/product.scss'
import { FaThLarge, FaListUl, FaHeart, FaSearch } from 'react-icons/fa'
import { Route, withRouter, NavLink, Switch, matchPath } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import Product1 from './Product1'

function Product(props) {
  // 利用match來取得url與path (記得App元件中的Route要先定義)
  console.log(props.match.path)

  const url = props.match.url
  const path = props.match.path
  return (
    <>
      <div className="container-fluid">
        <div className="row wei-bg-black">
          <div className="col-12 wei-searcharea">
            <div className="search-box wei-search-box">
              <form className="d-flex search-bar">
                <div className="select-list">
                  <div className="select-btn selected" value="bookstore">
                    <div className="select-text">
                      書城 <i className="fas fa-caret-down"></i>
                    </div>
                  </div>
                  <div className="select-box d-none">
                    <div
                      className="select-btn used-books"
                      name="usedBooks"
                      value="usedBooks"
                    >
                      <div className="used-books-text">二手書</div>
                    </div>
                    <div
                      className="select-btn bookstore"
                      name="bookstore"
                      value="bookstore"
                    >
                      <div className="bookstore-text">書城</div>
                    </div>
                  </div>
                </div>

                <input
                  className="search-input"
                  id="search-input"
                  placeholder="搜尋"
                ></input>

                <button
                  type="submit"
                  className="btn btn-dark search-submit"
                  id="search-submit"
                >
                  <FaSearch className="fas fa-search" />
                </button>
              </form>
            </div>
            <div className="wei-hotsearch"></div>
          </div>
          <div className="col-12 wei-bookarea">
            <div className="wei-books mx-auto">
              {/* <!-- 1 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5fe1e6b4a812e.png"
                  alt=""
                />
              </div>
              {/* <!-- 2 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5ffd774fed874.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 3 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5fe1e25e7712a.png"
                  alt=""
                />
              </div>
              {/* <!-- 4 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5ffd4315e718e.png"
                  alt=""
                />
              </div>
              {/* <!-- 5 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5ffd76f536e17.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 6 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5fe1ece65a1ed.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 7 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5fe2b8f3e050e.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 8 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5ffd494742e81.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 9 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5ffd8432b6bea.png"
                  alt=""
                />
              </div>
              {/* <!-- 10 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5fe424a314978.png"
                  alt=""
                />
              </div>
              {/* <!-- 11 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5fe3efd8f1856.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 12 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5ff2c60b2dd5d.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 13 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5ffd6044c062c.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 14 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5fe44c4c1f286.png"
                  alt=""
                />
              </div>
              {/* <!-- 15 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5fe4544c89b6f.jpg"
                  alt=""
                />
              </div>
              {/* <!-- 16 --> */}
              <div className="wei-book">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/books/5fe47b1418006.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-12 wei-bookshelf"></div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row justify-content-between align-items-center wei-breadcrumb-section">
          <div className="col-12 col-md-6 ">
            <MultiLevelBreadCrumb />
          </div>
          <div className="col-12 col-md-6 wei-button-group">
            <button className="btn-rounded-dark mr-1">出版日期</button>
            <button className="btn-rounded-dark mr-1">
              <FaListUl />
            </button>
            <button className="btn-rounded-dark">
              <FaThLarge />
            </button>
          </div>
        </div>
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
                  to={`${url}/arts`}
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
          <div className="col-11 col-lg-10 col-xl-9">
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
          </div>
        </div>
        <div className="row justify-content-end ">
          <div className="col-11 col-lg-10 col-xl-9">
            <ul className="pagination wei-pagination">
              <li className="page-item page-left disabled">
                <a
                  className="page-link"
                  href="#pagination"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  ←
                </a>
              </li>
              <li className="page-item page-num page-start active">
                <a className="page-link" href="#pagination">
                  1
                </a>
              </li>
              <li className="page-item page-num">
                <a className="page-link" href="#pagination">
                  2
                </a>
              </li>
              <li className="page-item page-num page-end">
                <a className="page-link" href="#pagination">
                  3
                </a>
              </li>
              <li className="page-item page-right">
                <a
                  className="page-link"
                  href="#pagination"
                  aria-disabled="true"
                >
                  →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h3>請選擇子分類</h3>
        </Route>
        <Route path={`${path}/:type?/:id?`}>
          <Product1 />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(Product)
