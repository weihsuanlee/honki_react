import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaTimes, FaFeatherAlt } from 'react-icons/fa'
// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
// import ChangeBooksIcon1 from '../components/ChangeBooksIcon1'
// import ChangeBooksIcon2 from '../components/ChangeBooksIcon2'

function RandomSuccess() {
  return (
    <>
      <div className="container-fluid my-5">
        {/* <!-- 麵包屑 --> */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-honki">
              <Link to="#">首頁</Link>
            </li>
            <li className="breadcrumb-honki">
              <Link to="./used-books">二手交換</Link>
            </li>
            <li className="breadcrumb-honki active" aria-current="page">
              隨機交換
            </li>
          </ol>
        </nav>
        <div className="jill-random-success-area">
          <div className="jill-random-success-title-area">
            <h4 className="jill-gong-xi">
              恭<br />喜<br />！<br />您<br />抽<br />中<br />了
            </h4>
          </div>
          <div className="jill-postcard d-flex justify-content-center">
            {/* <!-- 明信片底圖 --> */}
            <img
              src="http://localhost:3000/images/jill/postcard-random.png"
              alt=""
            />
            {/* <!-- 抽中的書 --> */}
            <div className="jill-random-success-book">
              <img
                src="http://localhost:3000/images/books/5fe29d1d6361c.png"
                alt=""
              />
            </div>
            {/* <!-- 抽中的訊息 --> */}
            <div className="jill-random-success-msg">
              <h5 className="jill-random-success-book-name">
                刻意學，一年頂十年
              </h5>
              <h6 className="jill-random-success-words">
                很喜歡這本書，希望你看完這本書也可以和我一樣，一年頂十年。
              </h6>
              <h6 className="jill-random-success-name">鄭瑪莉</h6>
            </div>
          </div>
        </div>
        <div className="jill-random-success-btn">
          <button className="btn-md-dark jill-rand-succ-download">
            下載明信片
          </button>
          <br />
          <Link to="./RandSuccessStatus">
            <button className="btn-md-dark jill-rand-succ-status">查看</button>
          </Link>
          <br />
          <Link to="./used-books">〉〉回二手書交換</Link>
        </div>
      </div>
    </>
  )
}

export default RandomSuccess
