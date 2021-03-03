import React, { useState, useEffect } from 'react'
import '../Style/chia_changebook.scss'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Aos from 'aos'
// data - aos="flip-right"
function ChangeBook() {
  useEffect(() => {
    Aos.init({ duration: 1100 })

    $(Window).on('scroll', function () {
      const changepage = $(this).scrollTop()
      if (changepage < 1600) {
        $('.chia_a').addClass('d-none')
      } else {
        $('.chia_a').removeClass('d-none')
      }
    })
  }, [])

  return (
    <>
      <div className="chia_changeable">
        <Container fluid className="chia_changpaji">
          <div className="chia_springterm"></div>
          <div className="chia_bookstoreword d-flex">
            <div className="chia_a">也</div>

            <div className="chia_a">有</div>

            <div className="chia_a chia_b">繁</div>

            <div className="chia_a">星</div>

            <div className="chia_a">般</div>

            <div className="chia_a">的</div>

            <div className="chia_a">藏</div>

            <div className="chia_a">書</div>

            <div className="chia_a">任</div>

            <div className="chia_a">君</div>

            <div className="chia_a">挑</div>

            <div className="chia_a">選</div>
          </div>
          <div className="chia_bookstore ml-auto"></div>
        </Container>
      </div>
    </>
  )
}

export default ChangeBook
