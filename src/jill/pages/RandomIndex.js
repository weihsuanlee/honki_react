import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaTimes, FaFeatherAlt } from 'react-icons/fa'
// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
// import ChangeBooksIcon1 from '../components/ChangeBooksIcon1'
// import ChangeBooksIcon2 from '../components/ChangeBooksIcon2'

function RandomIndex() {
  return (
    <>
      <div className="container my-5">
        {/* <!-- 麵包屑 --> */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-honki">
              <Link to="#">首頁</Link>
            </li>
            <li className="breadcrumb-honki">
              <Link to="used-books-index.html">二手交換</Link>
            </li>
            <li className="breadcrumb-honki active" aria-current="page">
              隨機交換
            </li>
          </ol>
        </nav>
        {/* <!-- 隨機交換區塊 --> */}
        <div className="jill-random-index-bg-area"></div>
        <Link to="./RandomSuccess">
          <button className="btn-md-dark jill-random-index-btn1">
            開始交換
          </button>
        </Link>
        <Link to="./RandomInsert">
          <button className="btn-md-dark jill-random-index-btn2">
            新增二手書
          </button>
        </Link>
        {/* <!-- 我的二手書 --> */}
        <div className="jill-myRbook-area d-flex row">
          <div className="jill-myRbook">
            <img
              src="http://localhost:3000/images/books/5fe1e889675b4.png"
              alt=""
            />
            <Link to="./RandomEdit">
              <FaFeatherAlt className="fas fa-feather-alt jill-edit-icon" />
            </Link>
            <Link to="#">
              <FaTimes className="fas fa-times jill-delect-icon" />
            </Link>
          </div>
          <div className="jill-myRbook">
            <img
              src="http://localhost:3000/images/books/5fe1e889675b4.png"
              alt=""
            />
            <Link to="./RandomEdit">
              <FaFeatherAlt className="fas fa-feather-alt jill-edit-icon" />
            </Link>
            <Link to="#">
              <FaTimes className="fas fa-times jill-delect-icon" />
            </Link>
          </div>
          <div className="jill-myRbook">
            <img
              src="http://localhost:3000/images/books/5fe1e889675b4.png"
              alt=""
            />
            <Link to="./RandomEdit">
              <FaFeatherAlt className="fas fa-feather-alt jill-edit-icon" />
            </Link>
            <Link to="#">
              <FaTimes className="fas fa-times jill-delect-icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default RandomIndex
