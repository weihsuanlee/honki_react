import { FaCaretUp, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import '../styles/footer.scss'
import { BrowserRouter as Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="desktopfooter">
        <div className="top d-flex">
          <img
            src="http://localhost:3000/images/components/footeritem.svg"
            width="185px"
            height="118px"
            alt=""
          />
          {/* <div className="circle mt-4 ml-3 d-flex flex-column">
            <FaCaretUp className="fas fa-caret-up mx-auto" />
            <span className="top_v">TOP</span>
          </div> */}
        </div>
        <div className="container">
          <div className="row justify-content-around footer_head">
            <div className="footer-info d-flex flex-cloumn col-12 col-md">
              <Link to="/" className="logo">
                <img
                  src="http://localhost:3000/images/components/logo.svg"
                  width="72px"
                  height="55px"
                  alt=""
                />
              </Link>
            </div>
            <div className="footer-info d-flex flex-cloumn col-12 col-md">
              <dl>
                <dt className="contactus">聯絡我們</dt>
                <dd>
                  <Link to="/" className="footer-link">
                    服務電話
                  </Link>
                </dd>
                <dd>
                  <Link to="/" className="footer-link">
                    honki@mail.com
                  </Link>
                </dd>
                <dd>台灣台北市</dd>
              </dl>
            </div>
            <div className="footer-info d-flex flex-cloumn col-12 col-md">
              <dl>
                <dt className="contactus">書城服務</dt>
                <dd>
                  <Link to="/" className="footer-link">
                    加入會員
                  </Link>
                </dd>
                <dd>
                  <Link to="/" className="footer-link">
                    查詢帳號密碼
                  </Link>
                </dd>
                <dd>
                  <Link to="/" className="footer-link">
                    訂單查詢
                  </Link>
                </dd>
                <dd>
                  <Link to="/" className="footer-link">
                    退換貨
                  </Link>
                </dd>
              </dl>
            </div>
            <div className="footer-info d-flex flex-cloumn col-12 col-md">
              <dl>
                <dt className="contactus">更多資訊</dt>
                <dd>
                  <Link to="/" className="footer-link">
                    關於HONKI
                  </Link>
                </dd>
                <dd>
                  <Link to="/" className="footer-link">
                    工作機會
                  </Link>
                </dd>
                <dd>
                  <Link to="/" className="footer-link">
                    服務條款
                  </Link>
                </dd>
                <dd>
                  <Link to="/" className="footer-link">
                    合作洽談
                  </Link>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="container-fluid snsbox ">
          <div className="row sns align-items-center">
            <div className="copyright mr-auto">
              <p className="cp-w">&copy; HONKI 2020</p>
            </div>
            <div className="sns-icon-box">
              <ul className="sns-icon d-flex  justify-content-around">
                <li>
                  <FaInstagram className="fab fa-instagram" />
                </li>
                <li>
                  <FaFacebookF className="fab fa-facebook-f" />
                </li>
                <li>
                  <FaTwitter className="fab fa-twitter" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="tabletfooter">
        <div className="top d-flex">
          <img
            className="topimg"
            src="http://localhost:3000/images/components/footeritem.svg"
            alt=""
          />
          {/* <div className="circle mt-4 ml-3 d-flex flex-column">
            <FaCaretUp className="fas fa-caret-up mx-auto" />
            <span className="top_v">TOP</span>
          </div> */}
        </div>
        <div className="container">
          <div className="row justify-content-center footer_head">
            <div className="footer-header d-flex flex-cloumn col-12 col-md justify-content-center">
              <Link to="/" className="logo">
                <img
                  src="http://localhost:3000/images/components/logo.svg"
                  width="48px"
                  height="37px"
                  alt=""
                />
              </Link>
            </div>

            <div className="sns-icon-box d-flex justify-content-center">
              <ul className="sns-icon d-flex  justify-content-around ">
                <li>
                  <FaInstagram className="fab fa-instagram" />
                </li>
                <li>
                  <FaFacebookF className="fab fa-facebook-f" />
                </li>
                <li>
                  <FaTwitter className="fab fa-twitter" />
                </li>
              </ul>
            </div>
            <div className="footer-info d-flex col-12 justify-content-center">
              <dl className="infomation d-flex ">
                <div className="contact a">
                  <dt
                    className="contactus"
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
                  className="footer-link service"
                  style={{ marginLeft: '-5px', marginRight: '-24px' }}
                >
                  <dd>
                    <Link to="/" className="footer-link">
                      服務電話
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" className="footer-link">
                      honki@mail.com
                    </Link>
                  </dd>
                  <dd className="footer-link">台灣台北市</dd>
                </div>
              </dl>
            </div>
            <div className="footer-info d-flex  col-12 justify-content-center">
              <dl className="infomation d-flex">
                <div className="contact a">
                  <dt className="contactus">書城服務</dt>
                </div>
                <div className="test " style={{ display: 'inline' }}>
                  <dd>
                    <Link to="/" className="footer-link">
                      加入會員
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" className="footer-link">
                      查詢帳號密碼
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" className="footer-link">
                      訂單查詢
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" className="footer-link">
                      退換貨
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="footer-info d-flex d-flex col-12 justify-content-center ">
              <dl className="infomation d-flex">
                <div className="contact a">
                  <dt
                    className="contactus"
                    style={{ marginRight: '25px', marginLeft: '-20px' }}
                  >
                    更多資訊
                  </dt>
                </div>
                <div
                  className="footer-link service"
                  style={{ marginLeft: '-25px' }}
                >
                  <dd>
                    <Link to="/" className="footer-link">
                      關於HONKI
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" className="footer-link">
                      工作機會
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" className="footer-link">
                      服務條款
                    </Link>
                  </dd>
                  <dd>
                    <Link to="/" className="footer-link">
                      合作洽談
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="container-fluid snsbox ">
          <div className="row sns align-items-center">
            <div className="copyright mx-auto">
              <p className="cp-w">&copy; HONKI 2020</p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="mobilefooter">
        <div className="top d-flex">
          <img
            className="topimg"
            src="http://localhost:3000/images/components/footeritem.svg"
            alt=""
          />
          {/* <div className="circle mt-4 ml-3 d-flex flex-column">
            <FaCaretUp className="fas fa-caret-up mx-auto" />
            <span className="top_v">TOP</span>
          </div> */}
        </div>
        <div className="container-fluid ">
          <div className="row justify-content-center footer_head">
            <div className="footer-header d-flex flex-cloumn col-12 col-md justify-content-center">
              <Link to="/" className="logo">
                <img
                  src="http://localhost:3000/images/components/logo.svg"
                  width="48px"
                  height="37px"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="sns-icon-box d-flex justify-content-center">
            <ul className="sns-icon d-flex  justify-content-around ">
              <li>
                <FaInstagram className="fab fa-instagram" />
              </li>
              <li>
                <FaFacebookF className="fab fa-facebook-f" />
              </li>
              <li>
                <FaTwitter className="fab fa-twitter" />
              </li>
            </ul>
          </div>

          <div className="footer-info   col-12 ">
            <div className="infomation d-flex justify-content-center">
              <div className="contact a">
                <p
                  className="contactus"
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
              <div className="test" style={{ marginLeft: '3px' }}>
                <Link to="/" className="footer-link">
                  服務電話
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  honki@mail.com
                </Link>
                <br />
                <p
                  className="footer-link"
                  href="#"
                  style={{ marginBottom: '0px' }}
                >
                  台灣台北市
                </p>
                <br />
              </div>
            </div>
          </div>
          <div
            className="footer-info   col-12"
            style={{ marginBottom: '55px' }}
          >
            <div className="infomation d-flex justify-content-center">
              <div className="contact a">
                <p
                  className="contactus"
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
              <div className="test ">
                <Link to="/" className="footer-link">
                  加入會員
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  查詢帳號密碼
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  訂單查詢
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  退換貨
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-info   col-12">
            <div className="infomation d-flex justify-content-center">
              <div className="contact a">
                <p
                  className="contactus"
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
              <div className="test ">
                <Link to="/" className="footer-link">
                  關於HONKI
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  工作機會
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  服務條款
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  合作洽談
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid snsbox ">
          <div className="row sns align-items-center">
            <div className="copyright mx-auto mt-2">
              <p className="cp-w">&copy; HONKI 2020</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
