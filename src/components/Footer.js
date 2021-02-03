function Footer() {
  return (
    <>
      <footer class="desktopfooter">
        <div class="top d-flex">
          <img
            src="http://localhost:3000/images/components/footeritem.svg"
            width="185px"
            height="118px"
          />
          <div class="circle mt-4 ml-3 d-flex flex-column">
            <i class="fas fa-caret-up"></i>
            <sapn class="top_v">TOP</sapn>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-around footer_head">
            <div class="footer-info d-flex flex-cloumn col-12 col-md">
              <a href="#" class="logo">
                <img
                  src="http://localhost:3000/images/components/logo.svg"
                  width="72px"
                  height="55px"
                />
              </a>
            </div>
            <div class="footer-info d-flex flex-cloumn col-12 col-md">
              <dl>
                <dt class="contactus">聯絡我們</dt>
                <dd>
                  <a class="footer-link" href="#">
                    服務電話
                  </a>
                </dd>
                <dd>
                  <a class="footer-link" href="#">
                    honki@mail.com
                  </a>
                </dd>
                <dd>台灣台北市</dd>
              </dl>
            </div>
            <div class="footer-info d-flex flex-cloumn col-12 col-md">
              <dl>
                <dt class="contactus">書城服務</dt>
                <dd>
                  <a class="footer-link" href="#">
                    加入會員
                  </a>
                </dd>
                <dd>
                  <a class="footer-link" href="#">
                    查詢帳號密碼
                  </a>
                </dd>
                <dd>
                  <a class="footer-link" href="#">
                    訂單查詢
                  </a>
                </dd>
                <dd>
                  <a class="footer-link" href="#">
                    退換貨
                  </a>
                </dd>
              </dl>
            </div>
            <div class="footer-info d-flex flex-cloumn col-12 col-md">
              <dl>
                <dt class="contactus">更多資訊</dt>
                <dd>
                  <a class="footer-link" href="#">
                    關於HONKI
                  </a>
                </dd>
                <dd>
                  <a class="footer-link" href="#">
                    工作機會
                  </a>
                </dd>
                <dd>
                  <a class="footer-link" href="#">
                    服務條款
                  </a>
                </dd>
                <dd>
                  <a class="footer-link" href="#">
                    合作洽談
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="container-fluid snsbox ">
          <div class="row sns align-items-center">
            <div class="copyright mr-auto">
              <p class="cp-w">&copy; HONKI 2020</p>
            </div>
            <div class="sns-icon-box">
              <ul class="sns-icon d-flex  justify-content-around">
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
                <li>
                  <i class="fab fa-facebook-f"></i>
                </li>
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer class="tabletfooter">
        <div class="top d-flex">
          <img
            class="topimg"
            src="http://localhost:3000/images/components/footeritem.svg"
          />
          <div class="circle mt-4 ml-3 d-flex flex-column">
            <i class="fas fa-caret-up"></i>
            <sapn class="top_v">TOP</sapn>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center footer_head">
            <div class="footer-header d-flex flex-cloumn col-12 col-md justify-content-center">
              <a href="#" class="logo">
                <img
                  src="http://localhost:3000/images/components/logo.svg"
                  width="48px"
                  height="37px"
                />
              </a>
            </div>

            <div class="sns-icon-box d-flex justify-content-center">
              <ul class="sns-icon d-flex  justify-content-around ">
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
                <li>
                  <i class="fab fa-facebook-f"></i>
                </li>
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
              </ul>
            </div>
            <div class="footer-info d-flex col-12 justify-content-center">
              <dl class="infomation d-flex ">
                <div class="contact a">
                  <dt
                    class="contactus"
                    style={{
                      width: '80px',
                      marginRight: '-8px',
                      marginLeft: '-18px',
                      marginTop: '-1px',
                    }}
                  >
                    聯絡我們
                  </dt>
                </div>
                <div
                  class="footer-link service"
                  style={{ marginLeft: '-5px', marginRight: '-24px' }}
                >
                  <dd>
                    <a class="footer-link" href="#">
                      服務電話
                    </a>
                  </dd>
                  <dd>
                    <a class="footer-link" href="#">
                      honki@mail.com
                    </a>
                  </dd>
                  <dd class="footer-link">台灣台北市</dd>
                </div>
              </dl>
            </div>
            <div class="footer-info d-flex  col-12 justify-content-center">
              <dl class="infomation d-flex">
                <div class="contact a">
                  <dt class="contactus">書城服務</dt>
                </div>
                <div class="test " style={{ display: 'inline' }}>
                  <dd>
                    <a class="footer-link" href="#">
                      加入會員
                    </a>
                  </dd>
                  <dd>
                    <a class="footer-link" href="#">
                      查詢帳號密碼
                    </a>
                  </dd>
                  <dd>
                    <a class="footer-link" href="#">
                      訂單查詢
                    </a>
                  </dd>
                  <dd>
                    <a class="footer-link" href="#">
                      退換貨
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div class="footer-info d-flex d-flex col-12 justify-content-center ">
              <dl class="infomation d-flex">
                <div class="contact a">
                  <dt
                    class="contactus"
                    style={{ marginRight: '25px', marginLeft: '-20px' }}
                  >
                    更多資訊
                  </dt>
                </div>
                <div
                  class="footer-link service"
                  style={{ marginLeft: '-25px' }}
                >
                  <dd>
                    <a class="footer-link" href="#">
                      關於HONKI
                    </a>
                  </dd>
                  <dd>
                    <a class="footer-link" href="#">
                      工作機會
                    </a>
                  </dd>
                  <dd>
                    <a class="footer-link" href="#">
                      服務條款
                    </a>
                  </dd>
                  <dd>
                    <a class="footer-link" href="#">
                      合作洽談
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="container-fluid snsbox ">
          <div class="row sns align-items-center">
            <div class="copyright mx-auto">
              <p class="cp-w">&copy; HONKI 2020</p>
            </div>
          </div>
        </div>
      </footer>
      <footer class="mobilefooter">
        <div class="top d-flex">
          <img
            class="topimg"
            src="http://localhost:3000/images/components/footeritem.svg"
          />
          <div class="circle mt-4 ml-3 d-flex flex-column">
            <i class="fas fa-caret-up"></i>
            <sapn class="top_v">TOP</sapn>
          </div>
        </div>
        <div class="container-fluid ">
          <div class="row justify-content-center footer_head">
            <div class="footer-header d-flex flex-cloumn col-12 col-md justify-content-center">
              <a href="#" class="logo">
                <img
                  src="http://localhost:3000/images/components/logo.svg"
                  width="48px"
                  height="37px"
                />
              </a>
            </div>
          </div>
          <div class="sns-icon-box d-flex justify-content-center">
            <ul class="sns-icon d-flex  justify-content-around ">
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
            </ul>
          </div>

          <div class="footer-info   col-12 ">
            <div class="infomation d-flex justify-content-center">
              <div class="contact a">
                <p
                  class="contactus"
                  style={{
                    width: '80px',
                    marginRight: '0px',
                    marginLeft: '5px',
                    marginTop: '-1px',
                  }}
                >
                  聯絡我們
                </p>
              </div>
              <div class="test" style={{ marginLeft: '3px' }}>
                <a class="footer-link" href="#">
                  服務電話
                </a>
                <br />
                <a class="footer-link" href="#">
                  honki@mail.com
                </a>
                <br />
                <p class="footer-link" href="#" style={{ marginBottom: '0px' }}>
                  台灣台北市
                </p>
                <br />
              </div>
            </div>
          </div>
          <div class="footer-info   col-12" style={{ marginBottom: '55px' }}>
            <div class="infomation d-flex justify-content-center">
              <div class="contact a">
                <p
                  class="contactus"
                  style={{
                    width: '80px',
                    marginLeft: '-1px',
                    marginRight: '2px',
                    marginTop: '-1px',
                  }}
                >
                  書城服務
                </p>
              </div>
              <div class="test ">
                <a class="footer-link" href="#">
                  加入會員
                </a>
                <br />
                <a class="footer-link" href="#">
                  查詢帳號密碼
                </a>
                <br />
                <a class="footer-link" href="#">
                  訂單查詢
                </a>
                <br />
                <a class="footer-link" href="#">
                  退換貨
                </a>
              </div>
            </div>
          </div>

          <div class="footer-info   col-12">
            <div class="infomation d-flex justify-content-center">
              <div class="contact a">
                <p
                  class="contactus"
                  style={{
                    width: '80px',
                    marginLeft: '-20px',
                    marginRight: '0px',
                    marginTop: '-1px',
                  }}
                >
                  更多資訊
                </p>
              </div>
              <div class="test ">
                <a class="footer-link" href="#">
                  關於HONKI
                </a>
                <br />
                <a class="footer-link" href="#">
                  工作機會
                </a>
                <br />
                <a class="footer-link" href="#">
                  服務條款
                </a>
                <br />
                <a class="footer-link" href="#">
                  合作洽談
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid snsbox ">
          <div class="row sns align-items-center">
            <div class="copyright mx-auto mt-2">
              <p class="cp-w">&copy; HONKI 2020</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
