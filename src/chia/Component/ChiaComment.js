import React from 'react'

function ChiaComment() {
  //useEffect
  return (
    <>
      <div className="chia_reviewcomment">
        <div className="container">
          <div className="chia_commentheader row justify-content-center">
            <div className="chia_commenttitle">留言回覆</div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="chia_commentbox row justify-content-center">
              <div className="chia_comment d-flex">
                <div className="chia_memberbox">
                  <div className="chia_memeberimg ">
                    <img
                      className="chia_advatar"
                      src="./image/050501.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="chia_c-box">
                  <div className="chia_membername">TOWA</div>
                  <div className="chia_content">daisuki</div>
                  <div classname="chia_time">2021.02.28 12:35</div>
                </div>
              </div>

              <div className="chia_comment d-flex">
                <div className="chia_memberbox">
                  <div className="chia_memeberimg ">
                    <img
                      className="chia_advatar"
                      src="./image/050501.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="chia_c-box">
                  <div className="chia_membername">TOWA</div>
                  <div className="chia_content">daisuki</div>
                  <div classname="chia_time">2021.02.28 12:35</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chia_commenttai row justify-content-center">
          <div className="chia_c-tai d-flex">
            <div className="chia_memberbox">
              <div className="chia_memeberimg ">
                <img className="chia_advatar" src="./image/050501.jpg" alt="" />
              </div>
            </div>

            <div className="chia_c-box">
              <div className="chia_membername">TOWA</div>
              <div className="chia_content ">
                <form
                  action=""
                  className="d-flex flex-column justify-content-center chia_commenttry"
                >
                  <textarea
                    name=""
                    id=""
                    style={{ width: '425px', height: '100px' }}
                  ></textarea>
                  <br />
                  <button className="chia_commentbtn mx-auto">我要留言</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChiaComment
