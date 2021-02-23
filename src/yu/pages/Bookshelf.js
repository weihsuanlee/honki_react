import '../styles/members-bookshelf.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SVG_FACES } from '../constants'
import { SVG_HAIR } from '../constants'
import { SVG_CLOTH } from '../constants'
import { SVG_ACC } from '../constants'
import { SVG_TERMS } from '../constants'
import { Container, Row, Col } from 'react-bootstrap'

function Bookshelf() {
  const [curFace, setCurFace] = useState(0)
  const [curHair, setCurHair] = useState(0)
  const [curCloth, setCurCloth] = useState(0)
  const [curAcc, setCurAcc] = useState(0)
  const [curTerms, setCurTerms] = useState(0)

  useEffect(() => {
    setCurFace(localStorage.getItem('curFace') || 0)
    setCurHair(localStorage.getItem('curHair') || 0)
    setCurCloth(localStorage.getItem('curCloth') || 0)
    setCurAcc(localStorage.getItem('curAcc') || 0)
    setCurTerms(localStorage.getItem('curTerms') || 0)
  }, [])

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb yu-book-breadcrumb">
          <li className="breadcrumb-honki">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-honki">
            <Link to="/menu">會員中心</Link>
          </li>
          <li className="breadcrumb-honki active" aria-current="page">
            節氣書櫃
          </li>
        </ol>
      </nav>
      {/* <!-- 紅圓點 --> */}
      <div className="yu-book-redpoint"></div>
      <div className="yu-book-question">
        <p>?</p>
      </div>
      <div className="yu-book-buyitnow">
        <Link to="/product">馬上購買</Link>
      </div>
      {/* <!-- <div className="yu-wood"><img src="../../images/members/wood.png" alt="" /></div> --> */}

      {/* <!-- 標題 --> */}
      <Container className="my-5">
        <Row className="d-flex justify-content-between">
          <Col className="yu-book-general-bookshelf col-8 ">
            {/* <!-- 每本書的設定 --> */}
            {/* <!-- book1 --> */}
            <div className="yu-books yu-book-1 text-center">
              <span className="yu-dots">•</span>
              <p>立春</p>
            </div>
            {/* <!-- book2 --> */}
            <div className="yu-books yu-book-2 text-center">
              <span className="yu-dots">•</span>
              <p>雨水</p>
            </div>
            {/* <!-- book3 --> */}
            <div className="yu-books yu-book-3 text-center">
              <span className="yu-dots">•</span>
              <p>驚蟄</p>
            </div>
            {/* <!-- book4 --> */}
            <div className="yu-books yu-book-4 text-center">
              <span className="yu-dots">•</span>
              <p>春分</p>
            </div>
            {/* <!-- book5 --> */}
            <div className="yu-books yu-book-5 text-center">
              <span className="yu-dots">•</span>
              <p>清明</p>
            </div>
            {/* <!-- book6 --> */}
            <div className="yu-books yu-book-6 text-center">
              <span className="yu-dots">•</span>
              <p>穀雨</p>
            </div>
            {/* <!-- book7 --> */}
            <div className="yu-books yu-book-7 text-center">
              <span className="yu-dots">•</span>
              <p>立夏</p>
            </div>
            {/* <!-- book8 --> */}
            <div className="yu-books yu-book-8 text-center">
              <span className="yu-dots">•</span>
              <p>小滿</p>
            </div>
            {/* <!-- book9 --> */}
            <div className="yu-books yu-book-9 text-center">
              <span className="yu-dots">•</span>
              <p>芒種</p>
            </div>
            {/* <!-- book10 --> */}
            <div className="yu-books yu-book-10 text-center">
              <span className="yu-dots">•</span>
              <p>夏至</p>
            </div>
            {/* <!-- book11 --> */}
            <div className="yu-books yu-book-11 text-center">
              <span className="yu-dots">•</span>
              <p>小暑</p>
            </div>
            {/* <!-- book12 --> */}
            <div className="yu-books yu-book-12 text-center">
              <span className="yu-dots">•</span>
              <p>大暑</p>
            </div>
            {/* <!-- book13 --> */}
            <div className="yu-books yu-book-13 text-center">
              <span className="yu-dots">•</span>
              <p>立秋</p>
            </div>
            {/* <!-- book14 --> */}
            <div className="yu-books yu-book-14 text-center">
              <span className="yu-dots">•</span>
              <p>處暑</p>
            </div>
            {/* <!-- book15 --> */}
            <div className="yu-books yu-book-15 text-center">
              <span className="yu-dots">•</span>
              <p>白露</p>
            </div>
            {/* <!-- book16 --> */}
            <div className="yu-books yu-book-16 text-center">
              <span className="yu-dots">•</span>
              <p>秋分</p>
            </div>
            {/* <!-- book17 --> */}
            <div className="yu-books yu-book-17 text-center">
              <span className="yu-dots">•</span>
              <p>寒露</p>
            </div>
            {/* <!-- book18 --> */}
            <div className="yu-books yu-book-18 text-center">
              <span className="yu-dots">•</span>
              <p>霜降</p>
            </div>
            {/* <!-- book19 --> */}
            <div className="yu-books yu-book-19 text-center">
              <span className="yu-dots">•</span>
              <p>立冬</p>
            </div>
            {/* <!-- book20 --> */}
            <div className="yu-books yu-book-20 text-center">
              <span className="yu-dots">•</span>
              <p>小雪</p>
            </div>
            {/* <!-- book21 --> */}
            <div className="yu-books yu-book-21 text-center">
              <span className="yu-dots">•</span>
              <p>大雪</p>
            </div>
            {/* <!-- book22 --> */}
            <div className="yu-books yu-book-22 text-center">
              <span className="yu-dots">•</span>
              <p>冬至</p>
            </div>
            {/* <!-- book23 --> */}
            <div className="yu-books yu-book-23 text-center">
              <span className="yu-dots">•</span>
              <p>小寒</p>
            </div>
            {/* <!-- book24 --> */}
            <div className="yu-books yu-book-24 text-center">
              <span className="yu-dots">•</span>
              <p>大寒</p>
            </div>

            <img
              className="w-100"
              src="http://localhost:3000/images/yu/general-bookshelf.png"
              alt=""
            />
          </Col>
          <div className="col-4">
            <div>
              <h5 className="yu-book-member-menu-title">會員中心</h5>
              {/* <!-- 個人頭貼 --> */}
              <div className="mx-auto">
                <div className="yu-book-member-photo-bg">
                  {/* <!-- 個人頭貼-bg --> */}
                  <img src={SVG_TERMS[curTerms]} alt="" />
                </div>
                <div className="yu-book-member-photo-hair">
                  {/* <!-- 個人頭貼-hair --> */}
                  <img src={SVG_HAIR[curHair]} alt="" />
                </div>
                <div className="yu-book-member-photo-face">
                  {/* <!-- 個人頭貼-face --> */}
                  <img src={SVG_FACES[curFace]} alt="" />
                </div>
                <div className="yu-book-member-photo-cloth">
                  {/* <!-- 個人頭貼-cloth --> */}
                  <img src={SVG_CLOTH[curCloth]} alt="" />
                </div>
                <div className="yu-book-member-photo-acc">
                  {/* <!-- 個人頭貼-acc --> */}
                  <img src={SVG_ACC[curAcc]} alt="" />
                </div>
              </div>
              {/* <!-- 會員等級 --> */}
              <div className="yu-book-member-info d-flex justify-content-center mt-3">
                <div className="yu-book-general-member mr-3">一般會員</div>
                <div className="yu-general-member-name">凱莉</div>
              </div>
            </div>
            <div className="yu-new-book text-center">
              <p>新購買的二十四節氣書籍</p>
              <div className="yu-new-book-pic mx-auto">
                <img
                  src="http://localhost:3000/images/books/9789863984740.jpg"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="yu-book-ladybug">
                <img
                  className="w-100"
                  src="http://localhost:3000/images/yu/ladybug.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Bookshelf
