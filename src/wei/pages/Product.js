import '../styles/product.scss'
import { FaThLarge, FaListUl, FaHeart, FaSearch } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'

function Product(props) {
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
            {/* <nav aria-label="breadcrumb">
              <ol className="breadcrumb wei-breadcrumb">
                <li className="breadcrumb-honki">
                  <a href="#">首頁</a>
                </li>
                <li className="active" aria-current="page">
                  所有商品
                </li>
              </ol>
            </nav> */}
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
                <li className="wei-category active">生活風格</li>
                <li className="wei-category">文學小說</li>
                <li className="wei-category">商業理財</li>
                <li className="wei-category">藝術設計</li>
                <li className="wei-category">心理勵志</li>
                <li className="wei-category">輕小說 漫畫</li>
                <li className="wei-category">語言考試</li>
                <li className="wei-category">親子教養</li>
                <li className="wei-category">旅遊</li>
                <li className="wei-category">飲食</li>
                <li className="wei-category">童書</li>
                <li className="wei-category">外文書</li>
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
    </>
  )
}

export default withRouter(Product)
