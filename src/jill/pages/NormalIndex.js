import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'

// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
import NormalBee from './../components/NormalBee'
import NormalButterfly from './../components/NormalButterfly'
import ChangeBooksIcon2 from './../components/ChangeBooksIcon2'
// 我的交換單選單選完重新渲染
import MyChangeBooks from './../components/MyChangeBooks'

function NormalIndex() {
  const [changeData, setChangeData] = useState([])

  // 撈我的交換單
  const [mybook_rows, setMybook_rows] = useState([])
  // 測試useEffect
  // const [myrows, setMyrows] = useState([])

  // 分頁 pagination(尚未完成)
  const [totalPages, setTotalPages] = useState('')
  const [page, setPage] = useState(1)

  // 卸載
  const [show, setShow] = useState(true)

  const [dataLoading, setDataLoading] = useState(false)

  const getDataFromServer = async () => {
    // 先開起載入指示器
    setDataLoading(true)
    // setIsLoading(true)
    // 模擬和伺服器要資料，先寫死
    // 注意header資料格式要設定，伺服器才知道是json格式
    const response = await fetch('http://localhost:3333/normal-index', {
      method: 'get',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = await response.json()

    // 開啟載入指示
    // setDataLoading(true)

    // 最後設定到狀態中
    // setOrderDisplay(data)
    // let arr = []
    //  arr.push(data)
    // 因為有好幾個項目，所以要.rows才可以只把rows叫出來
    setChangeData(data.rows)

    // setTotalRows(data.TotalRows)
    // let TRows = { setTotalRows }
    // let x = 0
    // for (x = 0; x < TRows; x++) {
    //   x += 1
    // }

    setMybook_rows(data.mybook_rows[0])

    console.log(data)
  }

  // 模擬componentDidMount
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1800)
    getDataFromServer()

    // 5秒後關閉指示器
  }, [])

  // 測試函式型元件模擬componentDidMount跟componentDidUpload
  // 必須要有相依性對應
  // 意即要諄對哪個狀態或傳入props做更新才呼叫
  // []寫在陣列裡的狀態有改變再呼叫
  useEffect(() => {
    // const subscription = props.value.subscribe()
    // return () => {
    //   subscription.unsubscribe()
    // }
    console.log('Func componentDidMount')
    console.log('mybook_rows有值變化:')
  }, [mybook_rows.book_name])
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border aw-spinner" role="status">
          <span className="sr-only aw-spinner">Loading...</span>
        </div>
      </div>
    </>
  )
  const display = (
    <>
      {/* 測試類別型元件卸載畫面 */}

      <div className="container-fluid my-5">
        {/* 麵包屑 */}
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

        {/* 一般交換首頁 */}

        {/* 我的交換單 */}
        <div className="jill-mylist-area">
          <div className="jill-myNchange-area">
            <h4 className="jill-myNchange-title">我的交換單</h4>
            <MyChangeBooks myrows={mybook_rows} />
          </div>
        </div>
        {/* <p className="jill-try-css">測試動畫</p> */}
        {/* 往上飛的書動畫 */}
        {/* 第一遍map */}
        <div className="jill-slider_container">
          <div className="row">
            {changeData.map((item, index) => (
              <div className="d-flex jill-pics">
                <img
                  src={`http://localhost:3000/images/books/` + item.book_pics}
                  alt=""
                />
              </div>
            ))}
            {/* 第二遍map */}
            {changeData.map((item, index) => (
              <div className="d-flex jill-pics">
                <img
                  src={`http://localhost:3000/images/books/` + item.book_pics}
                  alt=""
                />
              </div>
            ))}

            {/* 第三遍map */}
            {changeData.map((item, index) => (
              <div className="d-flex jill-pics">
                <img
                  src={`http://localhost:3000/images/books/` + item.book_pics}
                  alt=""
                />
              </div>
            ))}

            {/* 第四遍map */}
            {changeData.map((item, index) => (
              <div className="d-flex jill-pics">
                <img
                  src={`http://localhost:3000/images/books/` + item.book_pics}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        {/* 其他人在換什麼 */}
        {/* 標題開始 */}
        <div className="container my-5">
          <h5 className="jill-otherbooks-area-title">
            看看裡面有什麼
            {/* 蝴蝶SVG */}
            <NormalButterfly />
          </h5>
          {/* 標題結束 */}

          {/* 其他二手書區域  */}
          <div className="row jill-other-row">
            {/* 測試 */}
            {changeData.map((item, index) => (
              <div className="jill-mycard d-flex jill-other-card">
                <img
                  src={`http://localhost:3000/images/books/` + item.book_pics}
                  alt=""
                />
                <ul>
                  <div className="jill-underline"></div>
                  <li>{item.ISBN}</li>
                  <div className="jill-underline"></div>
                  <li>{item.book_name}</li>
                  <div className="jill-underline"></div>
                  <li>{item.book_condition}</li>
                  <div className="jill-underline"></div>
                  <li>{item.written_or_not}</li>
                  <div className="jill-underline"></div>

                  <li>{item.nickname}</li>
                </ul>
                <Link to={'/SendIWantChange/' + item.c_sid}>
                  <button className="btn-md-dark jill-want-btn">查看</button>
                </Link>
              </div>
            ))}
          </div>

          {/* 頁數選項 */}
          <div className="jill-pagination">
            <ul className="pagination d-flex justify-content-center">
              <li className="page-item page-left disabled">
                <Link
                  className="page-link"
                  href="#pagination"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  ←
                </Link>
              </li>
              <li className="page-item page-num page-start active">
                <Link className="page-link" href="#pagination">
                  1
                </Link>
              </li>
              <li className="page-item page-num">
                <Link className="page-link" href="#pagination">
                  2
                </Link>
              </li>
              <li className="page-item page-num page-end">
                <Link className="page-link" href="#pagination">
                  3
                </Link>
              </li>
              <li className="page-item page-right">
                <Link
                  className="page-link"
                  href="#pagination"
                  aria-disabled="true"
                >
                  →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
  return dataLoading ? loading : display
}

export default NormalIndex
