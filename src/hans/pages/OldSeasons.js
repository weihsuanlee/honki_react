import '../styles/old-seasons.scss'

function OldSeasons() {
  return (
    <>
      <div class="container-fluid w-100 old-season-container">
        <div class="row justify-content-center">
          <div class="col">
            <div class="row justify-content-center">
              {/* <!-- 節氣圓盤 Start --> */}
              <ul class="solar-term-plate-v2 rotate">
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li class="slice">
                  <div class="slice-contents"></div>
                </li>
                <li>
                  <div class="red-center">
                    <div class="red-center-bg-color"></div>
                  </div>
                </li>
              </ul>
              {/* <!-- 節氣圓盤 end --> */}
            </div>
            <div class="row solar-term-plate-filler"></div>
            <i class="title-pointer fas fa-caret-up fa-3x"></i>
            <br />

            <div class="row justify-content-start">
              <div class="title-bg">
                <h3 class="title">一個節氣，選一本書</h3>
              </div>
              <div class="title-bg">
                <h3 class="title">屬於你的四季</h3>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="row justify-content-center osb-book-col">
              {/* <!-- book card start --> */}
              <div class="book-card">
                <div class="book-base">
                  <img
                    class="book-img"
                    src="/images/hans/dummy-book-130x180.jpg"
                    alt=""
                  />
                </div>
                <div class="book-description">
                  {/* <!-- 書名 28 字以內 --> */}
                  <div class="book-name">書卡範例：書名（最多 28 字）</div>
                  <div class="book-solar-term-year">節氣 年份</div>
                </div>
              </div>
              {/* <!-- book card end --> */}
              {/* <!-- book card start --> */}
              <div class="book-card">
                <div class="book-base">
                  <img
                    class="book-img"
                    src="/images/hans/dummy-book-130x180.jpg"
                    alt=""
                  />
                </div>
                <div class="book-description">
                  {/* <!-- 書名 28 字以內 --> */}
                  <div class="book-name">
                    一二三四五六七八九十一二三四五六七八九十一二三四五六七八
                  </div>
                  <div class="book-solar-term-year">節氣 年份</div>
                </div>
              </div>
              {/* <!-- book card end --> */}

              {/* <!-- book card start --> */}
              <div class="book-card">
                <div class="book-base">
                  <img
                    class="book-img"
                    src="/images/hans/dummy-book-130x180.jpg"
                    alt=""
                  />
                </div>
                <div class="book-description">
                  {/* <!-- 書名 28 字以內 --> */}
                  <div class="book-name">一二三四五</div>
                  <div class="book-solar-term-year">節氣 年份</div>
                </div>
              </div>
              {/* <!-- book card end --> */}
              {/* <!-- book card start --> */}
              <div class="book-card">
                <div class="book-base">
                  <img
                    class="book-img"
                    src="/images/hans/dummy-book-130x180.jpg"
                    alt=""
                  />
                </div>
                <div class="book-description">
                  {/* <!-- 書名 28 字以內 --> */}
                  <div class="book-name">一二三四五</div>
                  <div class="book-solar-term-year">節氣 年份</div>
                </div>
              </div>
              {/* <!-- book card end --> */}
              {/* <!-- book card start --> */}
              <div class="book-card">
                <div class="book-base">
                  <img
                    class="book-img"
                    src="/images/hans/dummy-book-130x180.jpg"
                    alt=""
                  />
                </div>
                <div class="book-description">
                  {/* <!-- 書名 28 字以內 --> */}
                  <div class="book-name">一二三四五</div>
                  <div class="book-solar-term-year">節氣 年份</div>
                </div>
              </div>
              {/* <!-- book card end --> */}
              {/* <!-- book card start --> */}
              <div class="book-card">
                <div class="book-base">
                  <img
                    class="book-img"
                    src="/images/hans/dummy-book-130x180.jpg"
                    alt=""
                  />
                </div>
                <div class="book-description">
                  {/* <!-- 書名 28 字以內 --> */}
                  <div class="book-name">一二三四五</div>
                  <div class="book-solar-term-year">節氣 年份</div>
                </div>
              </div>
              {/* <!-- book card end --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OldSeasons
