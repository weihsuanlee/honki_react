import React from 'react'
import HonkiVideo from '../image/honki.mp4'

function HonkiHero() {
  return (
    <>
      <div className="chia_hero">
        <div className="contanier-fluid chia_hero_container">
          <video id="chia_myvideo" preload loop autoplay>
            <source src={HonkiVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}

export default HonkiHero
