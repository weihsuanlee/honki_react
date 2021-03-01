import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/chiaactivity.scss'
import Aos from 'aos'
import $ from 'jquery'

import CHiaAcitvity from '../Component/CHiaActivity'

import SecondHand from '../image/secondhandbook.jpg'
import Chiahugecircle from '../image/circledot/hugecircle.svg'

function ChiaActivity() {
  const [ismoving, setIsMoving] = useState(false)
  const [isuping, setIsUping] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1200 })

    if (ismoving) {
      $('.chia_accirclebig').css({
        transform: 'translateY(-10px)',
        transition: '.5s',
      })
    } else {
      $('.chia_accirclebig').css({
        transform: 'translateY(0px)',
        transition: '.5s',
      })
    }
    if (isuping) {
      $('.chia_accircle').css({
        transform: 'translateX(-10px)',
        transition: '.5s',
      })
    } else {
      $('.chia_accircle').css({
        transform: 'translateX(0px)',
        transition: '.5s',
      })
    }
  }, [ismoving, isuping])

  return (
    <>
      <div className="chia_activity">
        <div className="container">
          <div className="chia_accircle">
            <img
              src={Chiahugecircle}
              onMouseEnter={() => {
                setIsUping(true)
              }}
              onMouseLeave={() => {
                setIsUping(false)
              }}
            />
          </div>
          <div className="chia_accirclebig">
            <img
              src={Chiahugecircle}
              onMouseEnter={() => {
                setIsMoving(true)
              }}
              onMouseLeave={() => {
                setIsMoving(false)
              }}
            />
          </div>
          <div className="chia_event row">
            <div className="chia_eventheader" data-aos="fade-right">
              <p>HONKI活動</p>
            </div>
          </div>
          <div className="chia_eventactivity row d-flex justify-content-center">
            <div className="chia_eventbox  d-flex ">
              <CHiaAcitvity one={true} />
              <div className="chia_eventitem" data-aos="fade-up-left">
                <div className="chia_eventimfo d-flex flex-column">
                  <div className="chia_eventimg">
                    <img src={SecondHand} />
                  </div>
                  <div className="d-flex">
                    <div className="chia_eventdate">2021-03</div>
                    <div className="chia_eventtype">線上</div>
                  </div>
                </div>
                <div className="chia_eventcontent d-flex justify-content-center align-items-center">
                  <div className="chia_e-content">
                    <p>
                      想要為自己的舊書找一個新家嗎?那就來看看HONKI二手書吧!!
                    </p>
                    <p></p>
                  </div>
                  <div className="chia_e-link">
                    <Link to="/used-books">VIEW MORE...</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChiaActivity
