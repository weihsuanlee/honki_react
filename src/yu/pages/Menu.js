import '../styles/members-menu.scss'
import {
  FaAddressCard,
  FaEdit,
  FaBookOpen,
  FaCartPlus,
  FaBolt,
  FaChild,
} from 'react-icons/fa'
import { Tabs, Tab } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SVG_FACES } from '../constants'
import { SVG_HAIR } from '../constants'
import { SVG_CLOTH } from '../constants'
import { SVG_ACC } from '../constants'
import { SVG_TERMS } from '../constants'

import FavoriteList from '../../wei/components/FavoriteList'
import ActAllSignUp from '../../yen/components/ActAllSignUp'

function Menu(props) {
  const [curFace, setCurFace] = useState(0)
  const [curHair, setCurHair] = useState(0)
  const [curCloth, setCurCloth] = useState(0)
  const [curAcc, setCurAcc] = useState(0)
  const [curTerms, setCurTerms] = useState(0)

  const { vip, setVip } = props

  const [name, setName] = useState('')

  useEffect(() => {
    setCurFace(localStorage.getItem('curFace') || 0)
    setCurHair(localStorage.getItem('curHair') || 0)
    setCurCloth(localStorage.getItem('curCloth') || 0)
    setCurAcc(localStorage.getItem('curAcc') || 0)
    setCurTerms(localStorage.getItem('curTerms') || 0)
  }, [])

  useEffect(() => {
    let userLogin = JSON.parse(localStorage.getItem('userLogin'))
    console.log(userLogin)
    if (userLogin) {
      //已登入
      setName(userLogin.body.name)
    } else {
      //未登入
    }
  }, [])

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb yu-menu-breadcrumb">
          <li className="breadcrumb-honki">
            <Link to="/">首頁</Link>
          </li>
          <li className="active" aria-current="page">
            會員中心
          </li>
        </ol>
      </nav>
      {/* <!-- 紅圓點 --> */}
      <div className="yu-menu-redpoint"></div>

      {/* <!-- 標題欄 --> */}
      <div className="container-fluid my-5">
        <div className="row d-flex">
          {/* <!-- 標題 --> */}
          <div className="yu-menu-member-menu">
            <h5>會員中心</h5>
          </div>
          <div className="yu-menu-member-photo">
            <div className="yu-menu-member-photo-bg">
              {/* <!-- 個人頭貼-bg --> */}
              <img src={SVG_TERMS[curTerms]} alt="" />
            </div>
            <div className="yu-menu-member-photo-hair">
              {/* <!-- 個人頭貼-hair --> */}
              <img src={SVG_HAIR[curHair]} alt="" />
            </div>
            <div className="yu-menu-member-photo-face">
              {/* <!-- 個人頭貼-face --> */}
              <img src={SVG_FACES[curFace]} alt="" />
            </div>
            <div className="yu-menu-member-photo-cloth">
              {/* <!-- 個人頭貼-cloth --> */}
              <img src={SVG_CLOTH[curCloth]} alt="" />
            </div>
            <div className="yu-menu-member-photo-acc">
              {/* <!-- 個人頭貼-acc --> */}
              <img src={SVG_ACC[curAcc]} alt="" />
            </div>
          </div>
          <div className="yu-menu-general">
            {/* <!-- 會員等級 --> */}
            <div className={`yu-menu-general-member ` + (vip ? 'yu-red' : '')}>
              {vip ? 'VIP會員' : '一般會員'}
            </div>
            {/* <!-- 歡迎詞 --> */}
            <div className="yu-menu-greeting">
              <span>哈囉，</span>
              <span className="yu-menu-member-name">{name}</span>
              <br />
              <div className="yu-menu-member-welcome">
                <span>歡迎回來</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 會員專區收合選單 --> */}
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-center">
          <div className="holder d-none d-lg-block mx-auto yu-menu-panels">
            <Tabs defaultActiveKey="yu-menu-1" id="uncontrolled-tab-example">
              <Tab eventKey="yu-menu-1" title="會員總表">
                <div className="yu-menu-col-2">
                  {/* <!-- 我的帳戶 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaAddressCard className="far fa-address-card yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">我的帳戶</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/edit?page=1">
                            <div className="yu-menu-links">個人資料修改</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/edit?page=2">
                            <div className="yu-menu-links">修改密碼</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/edit?page=3">
                            <div className="yu-menu-links">修改節氣頭貼</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/edit?page=4">
                            <div className="yu-menu-links">刪除帳號</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/bookshelf">
                            <div className="yu-menu-links">節氣書櫃</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 我的收藏 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaEdit className="fas fa-edit yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">我的收藏</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">我的心得</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">我的留言</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">回覆查詢</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">我的書單</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">過往收藏</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 二手交換 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaBookOpen className="fas fa-book-open yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">二手交換</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">交換規章</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">隨機交換</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">上傳書籍</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">交換狀況</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">撰寫評價</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 購物紀錄 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaCartPlus className="fas fa-cart-plus yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">購物紀錄</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">我的訂單</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">購物紀錄</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">退貨查詢</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">出貨狀態</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">下次購買清單</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 專屬優惠 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaBolt className="fas fa-bolt yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">專屬優惠</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">優惠使用紀錄</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">折價券</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">購物金</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">帳戶餘額</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">到期日查詢</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 參與活動 --> */}
                  <div>
                    <div className="d-flex justify-content-center yu-menu-account-1 ">
                      <div className="d-flex justify-content-center yu-menu-account-1-1">
                        <FaChild className="fas fa-child yu-menu-card" />
                        <p className="yu-menu-account-1-1-1">參與活動</p>
                      </div>
                    </div>
                    <div>
                      <ul className="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">活動講座</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">讀書會</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">戶外探索</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">休閒活動</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">節氣推薦</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="yu-menu-2" title="購物紀錄">
                <div className="panel-title">購物紀錄</div>
                <p>購物紀錄</p>
              </Tab>
              <Tab eventKey="yu-menu-3" title="我的收藏">
                <div className="panel-title">我的收藏</div>
                <FavoriteList />
              </Tab>
              <Tab eventKey="yu-menu-4" title="專屬優惠">
                <div className="panel-title">專屬優惠</div>
                <p>專屬優惠</p>
              </Tab>
              <Tab eventKey="yu-menu-5" title="二手交換">
                <div className="panel-title">二手交換</div>
                <p>二手交換</p>
              </Tab>
              <Tab
                className="yen-signup-showbox"
                eventKey="yu-menu-6"
                title="參與活動"
              >
                {/* <ActAllSignUp
                  orderLists={orderLists}
                  setOrderLists={setOrderLists}
                /> */}
                <ActAllSignUp />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
