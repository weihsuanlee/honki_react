import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Hero_3 from '../image/030504.gif'
// import Hero_2 from '../image/030502.jpg'
import Hero_1 from '../image/Hero_1.jpg'

function HonkiHeroContext(props) {
  const [isToggler, setIstoggler] = useState(false)
  useEffect(() => {
    if (isToggler) {
      $('.chia_hero-image')
        .css('background', `url('${Hero_3}') no-repeat`)
        .css({ transition: '.2s', backgroundSize: 'cover' })
    } else {
      $('.chia_hero-image').css({
        background: `url('${Hero_1}')`,
        transition: '.2s',
      })
    }

    $(Window).on('scroll', function () {
      let scroll = $(this).scrollTop()
      if (scroll > 150) {
        $('.chia_mouse_scrolldown').addClass('d-none')
      } else {
        $('.chia_mouse_scrolldown').removeClass('d-none')
      }
      if (scroll > 900) {
        setIstoggler(false)
      }
    })
  }, [isToggler])

  const HonkiIntro = (
    <>
      <div className="chia_solar-box mx-auto ">
        <div className="chia_solar_term d-flex">
          <p className="d-flex flex-column chia_hidden ">
            <Link className="chia_i">
              讓<span className="chia_solar_index">HONKI</span>用24節氣
            </Link>
            <Link className="chia_i">帶你遨遊書中世界</Link>
            <Link className="chia_i">現在是3月5日</Link>
            <Link
              className="chia_staler_ex chia_i"
              onClick={(e) => {
                setIstoggler(true)
              }}
            >
              <span className="chia_solar_index">驚蟄</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  )

  const HonkiStalter = (
    <>
      <div className="chia_0305_box d-flex mx-auto">
        <div className="chia_0305">
          <p style={{ color: '#e83015' }}>驚蟄</p>
          <p>
            寓意為<span>自我成長</span>
            <br />
            <span>自我突破</span>
            <br />
            <span>自我重生</span>
            <br />
          </p>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="chia_heroword ml-auto d-flex align-items-center col-5">
        {!isToggler ? HonkiIntro : HonkiStalter}
      </div>
    </>
  )
}

export default HonkiHeroContext
