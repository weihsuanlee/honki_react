import { withRouter } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { DropdownButton, Dropdown, Button } from 'react-bootstrap'

function ProductBanner(props) {
  const {
    searchSelect,
    setSearchSelect,
    search,
    setSearch,
    setSearchTitle,
    searchTitle,
  } = props
  function searchButtonClick() {
    const queryString = `?${searchSelect}search=${search}`
    props.history.push(`/product${queryString}`)
    setSearch('')
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row wei-bg-black">
          <div className="col-12 wei-searcharea">
            <div className="search-box wei-search-box">
              <div className="d-flex search-bar">
                <DropdownButton id="dropdown-basic-button" title={searchTitle}>
                  <Dropdown.Item
                    onClick={() => {
                      setSearchSelect('title_')
                      setSearchTitle('書名')
                    }}
                  >
                    書名
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSearchSelect('author_')
                      setSearchTitle('作者')
                    }}
                  >
                    作者
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSearchSelect('publication_')
                      setSearchTitle('出版社')
                    }}
                  >
                    出版社
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSearchSelect('')
                      setSearchTitle('全部')
                    }}
                  >
                    全部
                  </Dropdown.Item>
                </DropdownButton>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') searchButtonClick()
                  }}
                  searchButtonClick
                  placeholder="Search"
                />
                <Button
                  className="wei-search-btn"
                  onClick={() => {
                    if (search.trim()) {
                      searchButtonClick()
                    }
                  }}
                >
                  <FaSearch className="fas fa-search" />
                </Button>
              </div>
            </div>
            <div className="wei-hotsearch"></div>
          </div>
          <div className="col-12 px-0">
            {/* <!-- 1 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/64')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5fe1e6b4a812e.png"
                alt=""
              />
            </div>
            {/* <!-- 2 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/242')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd774fed874.jpg"
                alt=""
              />
            </div>
            {/* <!-- 3 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/61')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5fe1e25e7712a.png"
                alt=""
              />
            </div>
            {/* <!-- 4 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/205')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd4315e718e.png"
                alt=""
              />
            </div>
            {/* <!-- 5 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/240')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd76f536e17.jpg"
                alt=""
              />
            </div>
            {/* <!-- 6 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/72')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5fe1ece65a1ed.jpg"
                alt=""
              />
            </div>
            {/* <!-- 7 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/6')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5fe2b8f3e050e.jpg"
                alt=""
              />
            </div>
            {/* <!-- 8 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/208')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd494742e81.jpg"
                alt=""
              />
            </div>
            {/* <!-- 9 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/265')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd8432b6bea.png"
                alt=""
              />
            </div>
            {/* <!-- 10 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/128')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5fe424a314978.png"
                alt=""
              />
            </div>
            {/* <!-- 11 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/110')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5fe3efd8f1856.jpg"
                alt=""
              />
            </div>
            {/* <!-- 12 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/204')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ff2c60b2dd5d.jpg"
                alt=""
              />
            </div>
            {/* <!-- 13 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/226')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5ffd6044c062c.jpg"
                alt=""
              />
            </div>
            {/* <!-- 14 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/10')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5fe44c4c1f286.png"
                alt=""
              />
            </div>
            {/* <!-- 15 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/141')
              }}
            >
              <img
                className="w-100"
                src="http://localhost:3000/images/books/5fe4544c89b6f.jpg"
                alt=""
              />
            </div>
            {/* <!-- 16 --> */}
            <div
              className="wei-book"
              onClick={() => {
                props.history.push('/products/158')
              }}
            >
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

export default withRouter(ProductBanner)
