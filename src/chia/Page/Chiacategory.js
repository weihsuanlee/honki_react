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
              <div className="chia_categorybox">
                <button className="chia_bbtn life">生活風格</button>
                <div className="chia_categoryblock d-none ">
                  <ul className="list-unstyled chia_category_detail">
                    <li>
                      <Link to="#">手作設計</Link>
                    </li>
                    <li>
                      <Link to="#">影視娛樂</Link>
                    </li>
                    <li>
                      <Link to="#">戶外活動/運動</Link>
                    </li>
                    <li>
                      <Link to="#">美妝/時尚</Link>
                    </li>
                    <li>
                      <Link to="#">品味/指南</Link>
                    </li>
                    <li>
                      <Link to="#">武術</Link>
                    </li>
                    <li>
                      <Link to="#">休閒/嗜好</Link>
                    </li>
                    <li>
                      <Link to="#">其他生活風格</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chia_categorybox">
                <button className="chia_bbtn novel">文學小說</button>
                <div className="chia_categoryblock d-none ">
                  <ul className="list-unstyled chia_category_detail">
                    <li>
                      <Link to="#">現代華文創作</Link>
                    </li>
                    <li>
                      <Link to="#">現代翻譯文學</Link>
                    </li>
                    <li>
                      <Link to="#">推理／犯罪小說</Link>
                    </li>
                    <li>
                      <Link to="#">恐怖／驚悚小說</Link>
                    </li>
                    <li>
                      <Link to="#">奇幻／科幻小說</Link>
                    </li>
                    <li>
                      <Link to="#">歷史／武俠小說</Link>
                    </li>
                    <li>
                      <Link to="#">愛情小說</Link>
                    </li>
                    <li>
                      <Link to="#">國學／古詩詞</Link>
                    </li>
                    <li>
                      <Link to="#">文學總論／研究</Link>
                    </li>
                    <li>
                      <Link to="#">世界古典文學</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chia_categorybox">
                <button className="chia_bbtn business">商業理財</button>
                <div className="chia_categoryblock d-none ">
                  <ul className="list-unstyled chia_category_detail">
                    <li>
                      <Link to="#">領導／管理</Link>
                    </li>
                    <li>
                      <Link to="#">傳記／實例</Link>
                    </li>
                    <li>
                      <Link to="#">管理實務</Link>
                    </li>
                    <li>
                      <Link to="#">投資理財</Link>
                    </li>
                    <li>
                      <Link to="#">職場工作術</Link>
                    </li>
                    <li>
                      <Link to="#">創業／電商</Link>
                    </li>
                    <li>
                      <Link to="#">全球／科技趨勢</Link>
                    </li>
                    <li>
                      <Link to="#">國學／古詩詞</Link>
                    </li>
                    <li>
                      <Link to="#">經濟／金融</Link>
                    </li>
                    <li>
                      <Link to="#">其他財經企管</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chia_categorybox">
                <button className="chia_bbtn artdesign">藝術設計</button>
                <div className="chia_categoryblock d-none ">
                  <ul className="list-unstyled chia_category_detail">
                    <li>
                      <Link to="#">領導／管理</Link>
                    </li>
                    <li>
                      <Link to="#">傳記／實例</Link>
                    </li>
                    <li>
                      <Link to="#">管理實務</Link>
                    </li>
                    <li>
                      <Link to="#">投資理財</Link>
                    </li>
                    <li>
                      <Link to="#">職場工作術</Link>
                    </li>
                    <li>
                      <Link to="#">創業／電商</Link>
                    </li>
                    <li>
                      <Link to="#">全球／科技趨勢</Link>
                    </li>
                    <li>
                      <Link to="#">國學／古詩詞</Link>
                    </li>
                    <li>
                      <Link to="#">經濟／金融</Link>
                    </li>
                    <li>
                      <Link to="#">其他財經企管</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="chia_bbtn psychology">心靈勵志</button>
              <button className="chia_bbtn comic">輕小說/漫畫</button>
              <button className="chia_bbtn language">語言考試</button>
              <button className="chia_bbtn childeducation">親子教養</button>
              <button className="chia_bbtn travel">旅遊</button>
              <button className="chia_bbtn food">飲食</button>
              <button className="chia_bbtn childbook">童書</button>
              <button className="chia_bbtn foreignbook">外文書</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chiacategory
