import React, { useEffect, useState } from 'react'
import '../Style/chiacategory.scss'
import $ from 'jquery'
import Aos from 'aos'
import { Link } from 'react-router-dom'

import chiaCategorycircle from '../image/circledot/circle-big.svg'

//component

function Chiacategory() {
  //const Button Link to
  // const[isAble, setIsAble]=useState('disabled')
  useEffect(() => {
    Aos.init({ duration: 1200 })
    // $('.bbtn').on('mouseenter', function () {
    //     $(this).siblings().removeClass('d-none');

    // })
    // $('.chia_categoryblock').on('mouseleave', function () {
    //     $(this).addClass('d-none')

    // })
  }, [])

  // useEffect(()=>{

  // },[isAble])
  return (
    <>
      <div className="chia_bookcategory">
        <div className="container">
          <div className="categoryrow row">
            <div className="chia_category_circle">
              <img src={chiaCategorycircle} />
            </div>
            <div class="categoryheader mx-auto" data-aos="fade-right">
              <p>書籍分類</p>
            </div>
          </div>
          <div className="row justify-content-center chia_category_beta">
            <div
              className="chia_categorybutton d-flex flex-wrap justify-content-center chia-1024category"
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <Link to="/product/lifestyle">
                <button className="chia_bbtn life">生活風格</button>
              </Link>
              <Link to="/product/literature">
                <button className="chia_bbtn novel">文學小說</button>
              </Link>
              <Link to="/product/business">
                <button className="chia_bbtn business">商業理財</button>
              </Link>

              <Link to="/product/arts">
                <button className="chia_bbtn artdesign">藝術設計</button>
              </Link>

              <Link to="/product/self-help">
                <button className="chia_bbtn psychology">心靈勵志</button>
              </Link>

              <Link to="/product/comics">
                <button className="chia_bbtn comic">輕小說/漫畫</button>
              </Link>
              <Link to="/product/education">
                <button className="chia_bbtn language">語言考試</button>
              </Link>
              <Link to="/product/parenting">
                <button className="chia_bbtn childeducation">親子教養</button>
              </Link>

              <Link to="/product/children">
                <button className="chia_bbtn childbook">童書</button>
              </Link>

              <Link to="/product/foods">
                <button className="chia_bbtn food">飲食</button>
              </Link>

              <Link to="/product/travel">
                <button className="chia_bbtn travel">旅遊</button>
              </Link>

              <Link to="/product/foreign">
                <button className="chia_bbtn foreignbook">外文書</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chiacategory
