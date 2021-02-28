import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
import ChangeBooksIcon1 from './../components/ChangeBooksIcon1'
import ChangeBooksIcon2 from './../components/ChangeBooksIcon2'

function UsedBooksIndex() {
  return (
    <>
      <div className="container my-5">
        {/* 麵包屑 */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-honki">
              <Link to="#">首頁</Link>
            </li>
            <li className="active" aria-current="page">
              二手交換
            </li>
          </ol>
        </nav>
        {/* 首頁 */}
        <h5 className="jill-index-title">選擇模式</h5>
        <div className="jill-index-bg "></div>
        <div className="row">
          <div className="jill-changemode">
            {/* 一般交換圖片 */}
            {/* <ChangeBooksIcon1 /> */}
            {/* 隨機交換圖片 */}
            <ChangeBooksIcon2 />
          </div>
        </div>
        <div className="row">
          <div className="jill-modebtn">
            {/* <Link to="./NormalIndex">
              <button className="btn-md-dark jill-normalbtn">一般交換</button>
            </Link> */}
            <Link to="./NormalIndex">
              <button className="btn-md-dark jill-randombtn">隨機交換</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsedBooksIndex
