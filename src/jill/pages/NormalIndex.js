import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'

// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
import NormalBee from './../components/NormalBee'
import NormalButterfly from './../components/NormalButterfly'

function NormalIndex() {
  const [changeData, setChangeData] = useState([])
  // 測試撈會員資料
  const [memberData, setMemberData] = useState([])
  // 撈我的交換單(編號15)
  const [mybook_rows, setMybook_rows] = useState([])

  // 分頁 pagination
  const [totalPages, setTotalPages] = useState('')
  const [page, setPage] = useState(1)

  const getDataFromServer = async () => {
    // 先開起載入指示器
    // setIsLoading(true)
    // 模擬和伺服器要資料，先寫死
    // 注意header資料格式要設定，伺服器才知道是json格式
    const response = await fetch('http://localhost:3333/normal-index', {
      method: 'get',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const data = await response.json()

    // 最後設定到狀態中
    // setOrderDisplay(data)
    // let arr = []
    //  arr.push(data)
    // 因為有好幾個項目，所以要.rows才可以只把rows叫出來
    setChangeData(data.rows)

    // 測試撈會員資料
    setMemberData(data.m_rows)
    // setTotalRows(data.TotalRows)
    // let TRows = { setTotalRows }
    // let x = 0
    // for (x = 0; x < TRows; x++) {
    //   x += 1
    // }

    setMybook_rows(data.mybook_rows[0])

    console.log(data)
    // 3秒後關閉指示器
    setTimeout(() => {
      // setIsLoading(false)
    }, 3000)
  }
  // 模擬componentDidMout
  useEffect(() => {
    getDataFromServer()
  }, [])

  return (
    <>
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
              一般交換
            </li>
          </ol>
        </nav>

        {/* 一般交換首頁 */}

        {/* 我的交換單 */}
        <div className="jill-mylist-area">
          <div className="jill-myNchange-area">
            <h4 className="jill-myNchange-title">我的交換單</h4>

            <div className="jill-myNchangelist">
              <div className="form-group ">
                <div className="formItems row d-flex">
                  <select
                    className="form-control formInput col-7"
                    id="exampleFormControlSelect1"
                  >
                    {/* 到時候要撈資料庫，member_sid_o是登入的人session */}

                    {mybook_rows.map((m) => (
                      <option>{m.book_name}</option>
                    ))}
                  </select>
                  <Link to="./NormalInsert">
                    <button className="btn-md-dark jill-myNchange-add-btn">
                      新增
                    </button>
                  </Link>
                </div>
              </div>

              <div className="jill-myNchange-display d-flex">
                {/* 蜜蜂svg */}
                <NormalBee />
                <img
                  src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                  alt=""
                />

                <ul className="">
                  <div className="jill-underline"></div>
                  <li>9789869507776</li>
                  <div className="jill-underline"></div>
                  <li>
                    外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生
                  </li>
                  <div className="jill-underline"></div>
                  <li>5成新</li>
                  <div className="jill-underline"></div>
                  <li>無塗改</li>
                  <div className="jill-underline"></div>
                  <li>鄭瑪莉</li>
                </ul>
              </div>
              <Link to="./NormalEdit">
                <button className="btn-md-dark jill-normal-seemyList">
                  查看
                </button>
              </Link>
            </div>
            {/* 我的交換單右邊區塊 */}
            <div className="jill-mystatus">
              {/* 我想跟別人換 */}
              <h5> 我想跟別人換</h5>
              <div className="jill-IwantChangeList d-flex">
                <div className="slider-aria d-flex">
                  <div className="slider jill-Iwant-slider-L">
                    <Link to="#">
                      <FaChevronLeft className="fas fa-chevron-left" />
                    </Link>
                  </div>
                  <div className="slider jill-Iwant-slider-R">
                    <Link to="#">
                      <FaChevronRight className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
                <div className="jill-mycard d-flex">
                  <img
                    src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                    alt=""
                  />
                  <ul>
                    <div className="jill-underline"></div>
                    <li>9789869507776</li>
                    <div className="jill-underline"></div>
                    <li>外科醫生</li>
                    <div className="jill-underline"></div>
                    <li>5成新</li>
                    <div className="jill-underline"></div>
                    <li>無塗改</li>
                    <div className="jill-underline"></div>
                    <li>鄭瑪莉</li>
                  </ul>
                  <Link to="./IWantChange">
                    <button className="btn-md-dark jill-card-btn-status">
                      查看
                    </button>
                  </Link>
                </div>
                <div className="jill-mycard d-flex">
                  <img
                    src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                    alt=""
                  />
                  <ul>
                    <div className="jill-underline"></div>
                    <li>9789869507776</li>
                    <div className="jill-underline"></div>
                    <li>外科醫生</li>
                    <div className="jill-underline"></div>
                    <li>5成新</li>
                    <div className="jill-underline"></div>
                    <li>無塗改</li>
                    <div className="jill-underline"></div>
                    <li>鄭瑪莉</li>
                  </ul>
                  <Link to="./IWantChange">
                    <button className="btn-md-dark jill-card-btn-status2">
                      查看
                    </button>
                  </Link>
                </div>
              </div>
              {/* 別人想跟我換 */}
              <h5 className="jill-PeoplewantChange-title"> 別人想跟我換</h5>
              <div className="jill-PeoplewantChangeList  d-flex">
                <div className="slider-aria d-flex">
                  <div className="slider jill-Peoplewant-slider-L">
                    <Link to="#">
                      <FaChevronLeft className="fas fa-chevron-left" />
                    </Link>
                  </div>
                  <div className="slider jill-Peoplewant-slider-R">
                    <Link to="#">
                      <FaChevronRight className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
                <div className="jill-mycard d-flex">
                  <img
                    src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                    alt=""
                  />
                  <ul>
                    <div className="jill-underline"></div>
                    <li>9789869507776</li>
                    <div className="jill-underline"></div>
                    <li>
                      外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生
                    </li>
                    <div className="jill-underline"></div>
                    <li>5成新</li>
                    <div className="jill-underline"></div>
                    <li>無塗改</li>
                    <div className="jill-underline"></div>
                    <li>鄭瑪莉</li>
                  </ul>
                  <Link to="./PeopleWantChange">
                    <button className="btn-md-dark jill-card-btn-status3">
                      查看
                    </button>
                  </Link>
                </div>

                <div className="jill-mycard d-flex">
                  <img
                    src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                    alt=""
                  />
                  <ul>
                    <div className="jill-underline"></div>
                    <li>9789869507776</li>
                    <div className="jill-underline"></div>
                    <li>外科醫生</li>
                    <div className="jill-underline"></div>
                    <li>5成新</li>
                    <div className="jill-underline"></div>
                    <li>無塗改</li>
                    <div className="jill-underline"></div>
                    <li>鄭瑪莉</li>
                  </ul>
                  <Link to="./PeopleWantChange">
                    <button className="btn-md-dark jill-card-btn-status4">
                      查看
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 其他人在換什麼 */}
        {/* 標題開始 */}
        <div className="container my-5">
          <h5 className="jill-otherbooks-area-title">
            其他人在換什麼
            {/* 蝴蝶SVG */}
            <NormalButterfly />
          </h5>
          {/* 標題結束 */}

          {/* 其他二手書區域  */}
          <div className="row">
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
                  {memberData.map((m) => (
                    <li>{m[index].nickname}</li>
                  ))}
                </ul>
                <Link to="./SendIWantChange">
                  <button className="btn-md-dark jill-want-btn">
                    我想交換
                  </button>
                </Link>
              </div>
            ))}

            {/* <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>

            <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>
            <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>
            <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>
            <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>
            <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>
            <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>
            <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>
            <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>
            <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>
            <div className="jill-mycard d-flex jill-other-card">
              <img
                src="http://localhost:3000/images/books/5fe1e0d53a3c6.png"
                alt=""
              />
              <ul>
                <div className="jill-underline"></div>
                <li>9789869507776</li>
                <div className="jill-underline"></div>
                <li>外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./SendIWantChange">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div> */}
          </div>

          {/* 頁數選項 */}
          <ul className="jill-pagination pagination d-flex justify-content-center">
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
    </>
  )
}

export default NormalIndex
