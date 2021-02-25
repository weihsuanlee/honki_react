import React, { useEffect, useState } from 'react'
import '../Style/chiasolar.scss'
import Aos from 'aos'
import Chia24term from '../Component/Chia24term'

function Chiasolar() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])
  return (
    <>
      <div className="chia_pastsolar">
        <div className="container">
          <div className="pastsl row">
            <div className="chia_pastslheader" data-aos="fade-down">
              <p>過往節氣</p>
            </div>
          </div>
          <div className="chia_solarterm row justify-content-center">
            <div className="haru d-flex" data-aos="fade-left">
              <Chia24term haru01={true} />
              <Chia24term haru02={true} />
              <Chia24term haru03={true} />
              <Chia24term haru04={true} />
              <Chia24term haru05={true} />
              <Chia24term haru06={true} />
            </div>
            <div className="natsu d-flex" data-aos="fade-right">
              <Chia24term natsu01={true} />
              <Chia24term natsu02={true} />
              <Chia24term natsu03={true} />
              <Chia24term natsu04={true} />
              <Chia24term natsu05={true} />
              <Chia24term natsu06={true} />
            </div>
            <div className="aki d-flex" data-aos="fade-left">
              <Chia24term aki01={true} />
              <Chia24term aki02={true} />
              <Chia24term aki03={true} />
              <Chia24term aki04={true} />
              <Chia24term aki05={true} />
              <Chia24term aki06={true} />
            </div>
            <div className="fuyu d-flex" data-aos="fade-right">
              <Chia24term fuyu01={true} />
              <Chia24term fuyu02={true} />
              <Chia24term fuyu03={true} />
              <Chia24term fuyu04={true} />
              <Chia24term fuyu05={true} />
              <Chia24term fuyu06={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chiasolar
