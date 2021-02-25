import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/Chiareview.scss'
import Aos from 'aos'
import $ from 'jquery'
import chiaReviewcircle from '../image/circledot/circle-big.svg'
import ChiaReviewhugecircle from '../image/circledot/hugecircle.svg'
import Chiareviewbox from '../Component/Chiareviewbox'

function ChiaReview() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <>
      <div className="chia_review">
        <div className="container-fluid">
          <div className="chia_reviewtitle row">
            <div className="chia_reviewcircle" data-aos="fade-left">
              <img src={chiaReviewcircle} />
            </div>

            <div className="chia_reviewheader" data-aos="fade-left">
              <p>精選心得</p>
            </div>
          </div>
          <div
            className="chia_reviewcontainer row justify-content-center"
            data-aos="flip-down"
          >
            <Chiareviewbox Bee={true} />

            <Chiareviewbox Bug={true} />

            <Chiareviewbox Stalter={true} />

            <div className="chia2" data-aos="fade-right">
              <img src={ChiaReviewhugecircle} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChiaReview
