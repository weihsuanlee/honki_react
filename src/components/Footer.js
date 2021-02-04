import { FaCaretUp, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import '../styles/footer.scss'
import { BrowserRouter as Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer class="desktopfooter">
        <div class="top d-flex">
          <img
            src="http://localhost:3000/images/components/footeritem.svg"
            width="185px"
            height="118px"
            alt=""
          />
          <div class="circle mt-4 ml-3 d-flex flex-column">
            <FaCaretUp className="fas fa-caret-up mx-auto" />
            <span class="top_v">TOP</span>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-around footer_head">
            <div class="footer-info d-flex flex-cloumn col-12 col-md">
              <Link to="/" class="logo">
                <img
                  src="http://localhost:3000/images/components/logo.svg"
                  width="72px"
                  height="55px"
                  alt=""
                />
              </Link>
            </div>
            <div class="footer-info d-flex flex-cloumn col-12 col-md">
              <dl>
                <dt class="contactus">聯絡我們</dt>
                <dd>
                  <Link to="/" class="footer-link">
                    服務電話
                  </Link>
                </dd>
                <dd>
                  <Link to="/" class="footer-link">
                    honki@mail.com
                  </Link>
                </dd>
                <dd>台灣台北市</dd>
              </dl>
            </div>
            <div class="footer-info d-flex flex-cloumn col-12 col-md">
              <dl>
                <dt class="contactus">書城服務</dt>
                <dd>
                  <Link to="/" class="footer-link">
                    加入會員
                  </Link>
                </dd>
                <dd>
                  <Link to="/" class="footer-link">
                    查詢帳號密碼
                  </Link>
                </dd>
                <dd>
                  <Link to="/" class="footer-link">
                    訂單查詢
                  </Link>
                </dd>
                <dd>
                  <Link to="/" class="footer-link">
                    退換貨
                  </Link>
                </dd>
              </dl>
            </div>
            <div class="footer-info d-flex flex-cloumn col-12 col-md">
              <dl>
                <dt class="contactus">更多資訊</dt>
                <dd>
                  <Link to="/" class="footer-link">
                    關於HONKI
                  </Link>
                </dd>
                <dd>
                  <Link to="/" class="footer-link">
                    工作機會
                  </Link>
                </dd>
                <dd>
                  <Link to="/" class="footer-link">
                    服務條款
                  </Link>
                </dd>
                <dd>
                  <Link to="/" class="footer-link">
                    合作洽談
                  </Link>
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
                  <FaInstagram class="fab fa-instagram" />
                </li>
                <li>
                  <FaFacebookF class="fab fa-facebook-f" />
                </li>
                <li>
                  <FaTwitter class="fab fa-twitter" />
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
            alt=""
          />
          <div class="circle mt-4 ml-3 d-flex flex-column">
            <FaCaretUp class="fas fa-caret-up mx-auto" />
            <span class="top_v">TOP</span>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center footer_head">
            <div class="footer-header d-flex flex-cloumn col-12 col-md justify-content-center">
              <Link to="/" class="logo">
                <img
                  src="http://localhost:3000/images/components/logo.svg"
                  width="48px"
                  height="37px"
                  alt=""
                />
              </Link>
            </div>

            <div class="sns-icon-box d-flex justify-content-center">
              <ul class="sns-icon d-flex  justify-content-around ">
                <li>
                  <FaInstagram class="fab fa-instagram" />
                </li>
                <li>
                  <FaFacebookF class="fab fa-facebook-f" />
                </li>
                <li>
                  <FaTwitter class="fab fa-twitter" />
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
                    <Link to="/" class="footer-link">
                      服務電話
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" class="footer-link">
                      honki@mail.com
                    </Link>
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
                    <Link to="/" class="footer-link">
                      加入會員
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" class="footer-link">
                      查詢帳號密碼
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" class="footer-link">
                      訂單查詢
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" class="footer-link">
                      退換貨
                    </Link>
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
                    <Link to="/" class="footer-link">
                      關於HONKI
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" class="footer-link">
                      工作機會
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" class="footer-link">
                      服務條款
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" class="footer-link">
                      合作洽談
                    </Link>
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
            alt=""
          />
          <div class="circle mt-4 ml-3 d-flex flex-column">
            <FaCaretUp class="fas fa-caret-up mx-auto" />
            <span class="top_v">TOP</span>
          </div>
        </div>
        <div class="container-fluid ">
          <div class="row justify-content-center footer_head">
            <div class="footer-header d-flex flex-cloumn col-12 col-md justify-content-center">
              <Link to="/" class="logo">
                <img
                  src="http://localhost:3000/images/components/logo.svg"
                  width="48px"
                  height="37px"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div class="sns-icon-box d-flex justify-content-center">
            <ul class="sns-icon d-flex  justify-content-around ">
              <li>
                <FaInstagram class="fab fa-instagram" />
              </li>
              <li>
                <FaFacebookF class="fab fa-facebook-f" />
              </li>
              <li>
                <FaTwitter class="fab fa-twitter" />
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
                <Link to="/" class="footer-link">
                  服務電話
                </Link>
                <br />
                <Link to="/" class="footer-link">
                  honki@mail.com
                </Link>
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
                <Link to="/" class="footer-link">
                  加入會員
                </Link>
                <br />
                <Link to="/" class="footer-link">
                  查詢帳號密碼
                </Link>
                <br />
                <Link to="/" class="footer-link">
                  訂單查詢
                </Link>
                <br />
                <Link to="/" class="footer-link">
                  退換貨
                </Link>
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
                <Link to="/" class="footer-link">
                  關於HONKI
                </Link>
                <br />
                <Link to="/" class="footer-link">
                  工作機會
                </Link>
                <br />
                <Link to="/" class="footer-link">
                  服務條款
                </Link>
                <br />
                <Link to="/" class="footer-link">
                  合作洽談
                </Link>
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
