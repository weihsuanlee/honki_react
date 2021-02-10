import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

// 二手書scss
import '../styles/used-books.scss'

// 二手書svg

// import ReadingImg from '../components/ReadingImg'

function NormalSuccess() {
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
              一般交換
            </li>
          </ol>
        </nav>
        <div className="jill-normal-success">
          <button
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            點我
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog jill-modal-dialog">
              <div className="modal-content jill-normal-success-area">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <i className="fas fa-exclamation-circle">   您有新通知</i>
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fas fa-times"></i>
                    </span>
                  </button>
                </div>
                {/* <!-- <h5 className="modal-subtitle"></h5> --> */}
                <div className="modal-body jill-normal-success-msbg">
                  <h5 className="jill-normal-success-title">恭喜配對成功</h5>
                  {/* <!-- 紅色三角形 --> */}
                  <div className="jill-triangle"> </div>
                  {/* <!-- 左邊(自己的書) --> */}
                  <div className="jill-normal-success-message-L">
                    <h5>您的</h5>
                    <h4> 外科醫生</h4>
                  </div>
                  <div className="jill-normal-success-message-L-img">
                    <img
                      src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                      alt=""
                    />
                  </div>
                  {/* <!-- 右邊(對方的書) --> */}
                  <div className="jill-normal-success-message-R">
                    <h5>換到了</h5>
                    <h5>蔡吉兒的</h5>
                    <h4> 運動基因</h4>
                  </div>
                  <div className="jill-normal-success-message-R-img">
                    <img
                      src="http://localhost:3000/images/books/5fe1e25e7712a.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="modal-footer jill-success-exit d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NormalSuccess
