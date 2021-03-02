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
        <div className="jill-change-rules">
          <h6>隨機交換-規則說明：</h6>
          <p>
            首先，進入首頁，上方是我的二手書區塊，下面是隨機魚池，可以看看裡面有什麼！如果有看到你想要的，新增一本二手書，此時，你的書還沒進入隨機魚池，接著，按下隨機交換按鈕，你的書便會放入隨機魚池，並從魚池裡面拿起一本書，不用擔心會抽到自己的書，快點跟著我們一起來交換吧！！
          </p>
          <h6>書本寄送方式：</h6>
          <p>
            按下隨機交換，換到書以後，請於7天內寄送您的二手書本到本公司，否則將取消此筆交換，在我們收到您的書本後，會再將書本寄送給您，此次運費採收貨人付款，如有問題，請聯絡我們。
          </p>
        </div>
      </div>
    </>
  )
}

export default UsedBooksIndex
