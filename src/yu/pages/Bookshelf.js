import '../styles/members-bookshelf.scss'
import { Link } from 'react-router-dom'

function Bookshelf() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb yu-breadcrumb">
          <li class="breadcrumb-honki">
            <Link to="/">首頁</Link>
          </li>
          <li class="breadcrumb-honki">
            {' '}
            <Link to="/">會員中心</Link>
          </li>
          <li class="breadcrumb-honki active" aria-current="page">
            節氣書櫃
          </li>
        </ol>
      </nav>
      {/* <!-- 紅圓點 --> */}
      <div class="yu-redpoint"></div>
      <div class="yu-buyitnow">
        <p>馬上購買</p>
      </div>
      {/* <!-- <div class="yu-wood"><img src="../../images/members/wood.png" alt="" /></div> --> */}

      {/* <!-- 標題 --> */}
      <div class="container my-5">
        <div class="row d-flex justify-content-between">
          <div class="yu-general-bookshelf col-8 ">
            {/* <!-- 每本書的設定 --> */}
            {/* <!-- book1 --> */}
            <div class="yu-books yu-book-1 text-center">
              <span class="yu-dots">•</span>
              <p>立春</p>
            </div>
            {/* <!-- book2 --> */}
            <div class="yu-books yu-book-2 text-center">
              <span class="yu-dots">•</span>
              <p>雨水</p>
            </div>
            {/* <!-- book3 --> */}
            <div class="yu-books yu-book-3 text-center">
              <span class="yu-dots">•</span>
              <p>驚蟄</p>
            </div>
            {/* <!-- book4 --> */}
            <div class="yu-books yu-book-4 text-center">
              <span class="yu-dots">•</span>
              <p>春分</p>
            </div>
            {/* <!-- book5 --> */}
            <div class="yu-books yu-book-5 text-center">
              <span class="yu-dots">•</span>
              <p>清明</p>
            </div>
            {/* <!-- book6 --> */}
            <div class="yu-books yu-book-6 text-center">
              <span class="yu-dots">•</span>
              <p>穀雨</p>
            </div>
            {/* <!-- book7 --> */}
            <div class="yu-books yu-book-7 text-center">
              <span class="yu-dots">•</span>
              <p>立夏</p>
            </div>
            {/* <!-- book8 --> */}
            <div class="yu-books yu-book-8 text-center">
              <span class="yu-dots">•</span>
              <p>小滿</p>
            </div>
            {/* <!-- book9 --> */}
            <div class="yu-books yu-book-9 text-center">
              <span class="yu-dots">•</span>
              <p>芒種</p>
            </div>
            {/* <!-- book10 --> */}
            <div class="yu-books yu-book-10 text-center">
              <span class="yu-dots">•</span>
              <p>夏至</p>
            </div>
            {/* <!-- book11 --> */}
            <div class="yu-books yu-book-11 text-center">
              <span class="yu-dots">•</span>
              <p>小暑</p>
            </div>
            {/* <!-- book12 --> */}
            <div class="yu-books yu-book-12 text-center">
              <span class="yu-dots">•</span>
              <p>大暑</p>
            </div>
            {/* <!-- book13 --> */}
            <div class="yu-books yu-book-13 text-center">
              <span class="yu-dots">•</span>
              <p>立秋</p>
            </div>
            {/* <!-- book14 --> */}
            <div class="yu-books yu-book-14 text-center">
              <span class="yu-dots">•</span>
              <p>處暑</p>
            </div>
            {/* <!-- book15 --> */}
            <div class="yu-books yu-book-15 text-center">
              <span class="yu-dots">•</span>
              <p>白露</p>
            </div>
            {/* <!-- book16 --> */}
            <div class="yu-books yu-book-16 text-center">
              <span class="yu-dots">•</span>
              <p>秋分</p>
            </div>
            {/* <!-- book17 --> */}
            <div class="yu-books yu-book-17 text-center">
              <span class="yu-dots">•</span>
              <p>寒露</p>
            </div>
            {/* <!-- book18 --> */}
            <div class="yu-books yu-book-18 text-center">
              <span class="yu-dots">•</span>
              <p>霜降</p>
            </div>
            {/* <!-- book19 --> */}
            <div class="yu-books yu-book-19 text-center">
              <span class="yu-dots">•</span>
              <p>立冬</p>
            </div>
            {/* <!-- book20 --> */}
            <div class="yu-books yu-book-20 text-center">
              <span class="yu-dots">•</span>
              <p>小雪</p>
            </div>
            {/* <!-- book21 --> */}
            <div class="yu-books yu-book-21 text-center">
              <span class="yu-dots">•</span>
              <p>大雪</p>
            </div>
            {/* <!-- book22 --> */}
            <div class="yu-books yu-book-22 text-center">
              <span class="yu-dots">•</span>
              <p>冬至</p>
            </div>
            {/* <!-- book23 --> */}
            <div class="yu-books yu-book-23 text-center">
              <span class="yu-dots">•</span>
              <p>小寒</p>
            </div>
            {/* <!-- book24 --> */}
            <div class="yu-books yu-book-24 text-center">
              <span class="yu-dots">•</span>
              <p>大寒</p>
            </div>

            <img
              class="w-100"
              src="http://localhost:3000/images/yu/general-bookshelf.png"
              alt=""
            />
          </div>
          <div class="col-4">
            <div>
              <h5 class="yu-member-menu-title">會員中心</h5>
              {/* <!-- 個人頭貼 --> */}
              <div class="yu-member-photo mx-auto">
                <img
                  class="w-100"
                  src="http://localhost:3000/images/yu/personalphoto.svg"
                  alt=""
                />
              </div>
              {/* <!-- 會員等級 --> */}
              <div class="yu-member-info d-flex justify-content-center mt-3">
                <div class="yu-general-member mr-3">一般會員</div>
                <div class="yu-general-member-name">凱莉</div>
              </div>
            </div>
            <div class="yu-new-book text-center">
              <p>新購買的二十四節氣書籍</p>
              <div class="yu-new-book-pic mx-auto">
                <img
                  src="http://localhost:3000/images/books/9789863984740.jpg"
                  class="w-100"
                  alt=""
                />
              </div>
              <div class="yu-ladybug">
                <img
                  class="w-100"
                  src="http://localhost:3000/images/yu/ladubug.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookshelf
