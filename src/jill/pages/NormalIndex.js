import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
import NormalBee from './../components/NormalBee'
import NormalButterfly from './../components/NormalButterfly'

function NormalIndex() {
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
                    {/* 到時候要撈資料庫 */}
                    <option>外科醫生(單號:1)</option>
                    <option>閃電崩盤(單號:11)</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
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
                  <Link to="./normal-IwantChange.html">
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
                  <Link to="./normal-IwantChange.html">
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
                  <Link to="./normal-PeoplewantChange.html">
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
                  <Link to="./normal-PeoplewantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
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
                <li>外科醫生外科醫生外科醫生外科醫生外科醫生外科醫生</li>
                <div className="jill-underline"></div>
                <li>5成新</li>
                <div className="jill-underline"></div>
                <li>無塗改</li>
                <div className="jill-underline"></div>
                <li>鄭瑪莉</li>
              </ul>
              <Link to="./normal-Send-IwantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
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
              <Link to="./normal-Send-IwantChange.html">
                <button className="btn-md-dark jill-want-btn">我想交換</button>
              </Link>
            </div>
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
