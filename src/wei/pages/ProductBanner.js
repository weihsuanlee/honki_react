import { FaSearch } from 'react-icons/fa'

function ProductBanner() {
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
          <div className="col-12 px-0">
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
          <div className="col-12 wei-bookshelf"></div>
        </div>
      </div>
    </>
  )
}

export default ProductBanner
