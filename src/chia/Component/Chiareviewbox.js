import React, { useEffect, useState } from 'react'
import { Link, Switch } from 'react-router-dom'
import $ from 'jquery'
import BeeSpring from '../image/Book/06Amusement.jpg'
import BugSpring from '../image/Book/Review01.jpg'
import StalterSpring from '../image/Book/Review02.jpg'

function Chiareviewbox(props) {
  const [isuping, setIsUping] = useState(false)

  const Bee = props.Bee
  const Bug = props.Bug
  const Stalter = props.Stalter
  let Bookcover
  let BookContent
  let path
  switch (true) {
    case Bee:
      Bookcover = BeeSpring
      BookContent =
        '《蜜蜂與遠雷》這本小說描述四位鋼琴音樂家參與芳江國際鋼琴大賽的逐夢故《蜜蜂與遠雷》這本小說描述四位鋼琴音樂家參與芳江國際鋼琴大賽的逐夢故'
      path = '/reviews/content/83'
      break
    case Bug:
      Bookcover = BugSpring
      BookContent =
        '依稀記得從小到大，無論是爸媽朋友、老師、親戚或者家人，對我的評價中，大多都會有「獨立」。獨立是什麼？獨立代表什麼？獨立又有什麼意義？第一次聽見這些詞彙時，雖然不解，但是從媽媽略為驕傲的神情中，我聯想到「獨立代表我很厲害，是非常值得開心的讚賞」，並總是以自己的獨立為傲。'
      path = '/reviews/content/41'
      break
    case Stalter:
      Bookcover = StalterSpring
      BookContent =
        '這本書是在某個課堂上與友人傳紙條時他向我推薦的。從他手中接過這本書時第一眼就被封面上的「驚蟄」所吸引，書不厚，若在心無旁鶩的情況下，約一個半小時就能閱讀完畢——我本這麼以為的，可當我抬起頭看向窗外卻已經到了放學降旗時間。沉溺在書中情境的我，沒意料到自早上第三節課翻開書頁，醒過神來卻已然到了傍晚。朋友問我說你在看什麼這麼認真，連考試都沒見你這麼專心的在看書，我笑著，意猶未盡地再望向此書一眼。'
      path = '/reviews/content/75'
      break

    default:
      break
  }

  useEffect(() => {}, [])
  useEffect(() => {
    if (isuping) {
      $('.chia_reviewbox').on('mouseenter', function () {
        $(this).css({ transform: 'rotate(5deg)', transition: '.5s' })
      })
    } else {
      $('.chia_reviewbox').on('mouseleave', function () {
        $(this).css({ transform: 'rotate(0deg)', transition: '.5s' })
      })
    }
  }, [isuping])
  return (
    <>
      <div
        className="chia_reviewbox"
        onMouseEnter={() => {
          setIsUping(true)
        }}
        onMouseLeave={() => {
          setIsUping(false)
        }}
      >
        <div className="chia_reviewborder">
          <div className="chia_reviewborder-b">
            <div className="chia_reviewborder-i">
              <div className="chia_reviewtop d-flex justify-content-center align-items-center">
                <div className="chia_reviewimg">
                  <img src={Bookcover} alt="" />
                </div>
              </div>
              <div className="chia_reviewbottom">
                <div className="chia_reviewcontent_box">
                  <p>{BookContent}</p>
                </div>
                <div className="chia_reviewlink">
                  <Link to={path}>VIEW MORE...</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chiareviewbox
