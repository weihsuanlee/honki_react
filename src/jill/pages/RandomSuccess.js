// import React from 'react'
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import { FaTimes, FaFeatherAlt } from 'react-icons/fa'
// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
// import ChangeBooksIcon1 from '../components/ChangeBooksIcon1'
// import ChangeBooksIcon2 from '../components/ChangeBooksIcon2'

function RandomSuccess(props) {
  const c_sid = props.match.params.c_sid
  // 設定隨機成功資料狀態
  const [successdata, setSuccessdata] = useState([])

  // 為了撈出data物件，要用useState定義每個欄位的值，再用set來接
  const [ISBN, setISBN] = useState('')
  const [book_name, setBook_name] = useState('')
  const [book_pics, setBook_pics] = useState('')
  const [nickname, setNickname] = useState('')
  const [Match_c_sid, setMatch_c_sid] = useState('')

  const getDataFromServer = async () => {
    // 先開起載入指示器
    // setIsLoading(true)
    // 模擬和伺服器要資料，先寫死
    // 注意header資料格式要設定，伺服器才知道是json格式
    const response = await fetch(
      'http://localhost:3333/normal-index/random-success/' + c_sid,
      {
        method: 'get',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
    const data = await response.json()

    // 最後設定到狀態中
    // setOrderDisplay(data)
    // let arr = []
    //  arr.push(data)
    // 因為有好幾個項目，所以要.rows才可以只把rows叫出來
    setSuccessdata(data.rows)
    setBook_name(data.book_name)
    setISBN(data.ISBN)
    setBook_pics(data.book_pics)
    setNickname(data.nickname)
    setMatch_c_sid(data.Match_c_sid)

    console.log(data)
    // 3秒後關閉指示器
    setTimeout(() => {
      // setIsLoading(false)
    }, 3000)
  }
  // 模擬componentDidMount
  useEffect(() => {
    getDataFromServer()
  }, [])

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
              {/* 隨機的真圖 */}
              <img
                src={`http://localhost:3000/images/books/` + book_pics}
                alt=""
              />
              {/* 測試時的假圖 */}
              {/* <img
                src="http://localhost:3000/images/books/5fe29d1d6361c.png"
                alt=""
              /> */}
            </div>
            {/* <!-- 抽中的訊息 --> */}
            <div className="jill-random-success-msg">
              <h5 className="jill-random-success-book-name">{book_name}</h5>
              <h6 className="jill-random-success-words">
                細雨柔和美，驚蟄乍出倉，偷得幾日閒，今日開始忙；
                <br />
                驚蟄到，萬物復甦，生機勃勃，你也出來活動活動筋
                <br />
                骨，開始新一年的耕耘吧！祝驚蟄快樂！
              </h6>
              <h6 className="jill-random-success-name">HONKI</h6>
            </div>
          </div>
        </div>
        <div className="jill-random-success-btn">
          {/* <button className="btn-md-dark jill-rand-succ-download">
            下載明信片
          </button> */}
          <br />
          <Link to={'/SendIWantChange/' + Match_c_sid}>
            <button className="btn-md-dark jill-rand-succ-status">查看</button>
          </Link>
          <br />
          <Link to="/NormalIndex">〉〉回二手書交換</Link>
        </div>
      </div>
    </>
  )
}

export default withRouter(RandomSuccess)
