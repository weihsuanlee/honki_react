import React, { useEffect, useState } from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import Chiaeditorbook from '../Component/Chiaeditorbook'
import $ from 'jquery'

//image

import Student01 from '../image/Book/Student01.jpg'
import student02 from '../image/Book/Student02.jpg'
import student03 from '../image/Book/Student03.jpg'
import student04 from '../image/Book/Student04.jpg'
import Student05 from '../image/Book/Student05.jpg'
import student06 from '../image/Book/Student06.jpg'
import student07 from '../image/Book/Student07.jpeg'
import student08 from '../image/Book/Student08.jpg'
import interview01 from '../image/Book/Interview01.jpg'
import interview02 from '../image/Book/Interview02.jpg'
import interview03 from '../image/Book/Interview03.jpg'
import interview04 from '../image/Book/Interview04.jpg'
import interview05 from '../image/Book/Interview05.jpg'
import interview06 from '../image/Book/Interview06.jpg'
import interview07 from '../image/Book/Interview07.jpg'
import interview08 from '../image/Book/Interview08.jpg'
import Discount01 from '../image/Book/Discount01.jpg'
import Discount02 from '../image/Book/Discount02.jpg'
import Discount03 from '../image/Book/Discount03.jpg'
import Discount04 from '../image/Book/Discount04.jpg'
import Discount05 from '../image/Book/Discount05.jpg'
import Discount06 from '../image/Book/Discount06.jpg'
import Discount07 from '../image/Book/Discount07.jpg'
import Discount08 from '../image/Book/Discount08.jpg'
import Travel01 from '../image/Book/travel01.jpg'
import Travel02 from '../image/Book/travel02.jpg'
import Travel03 from '../image/Book/travel03.jpg'
import Travel04 from '../image/Book/travel04.jpg'
import Travel05 from '../image/Book/travel05.jpg'
import Travel06 from '../image/Book/travel06.jpg'
import Travel07 from '../image/Book/travel07.jpg'
import Travel08 from '../image/Book/travel08.jpg'

function ChiaSelectbook(props) {
  const spring = props.isspring
  const interview = props.isInterview
  const travel = props.isTravel
  const discount = props.isDiscount
  let bookimage1
  let bookimage2
  let bookimage3
  let bookimage4
  let bookimage5
  let bookimage6
  let bookimage7
  let bookimage8
  let price01
  let price02
  let price03
  let price04
  let price05
  let price06
  let price07
  let price08
  let bookname1
  let bookname2
  let bookname3
  let bookname4
  let bookname5
  let bookname6
  let bookname7
  let bookname8
  let discount1
  let discount2
  let discount3
  let discount4
  let discount5
  let discount6
  let discount7
  let discount8

  switch (true) {
    case spring:
      bookimage1 = Student01
      bookimage2 = student02
      bookimage3 = student03
      bookimage4 = student04
      bookimage5 = Student05
      bookimage6 = student06
      bookimage7 = student07
      bookimage8 = student08
      price01 = '175'
      price02 = '180'
      price03 = '245'
      price04 = '269'
      price05 = '284'
      price06 = '190'
      price07 = '789'
      price08 = '284'
      bookname1 = '人間愉快'
      bookname2 = '我的天才夢'
      bookname3 = '當你問我刺蝟也能擁抱嗎？'
      bookname4 = '山茶花文具店'
      bookname5 = '在咖啡冷掉之前'
      bookname6 = '別來無恙'
      bookname7 = '無垠祕典'
      bookname8 = '流浪的月'
      discount1 = '7'
      discount2 = '9'
      discount3 = '79'
      discount4 = '79'
      discount5 = '79'
      discount6 = '79'
      discount7 = '79'
      discount8 = '79'
      break
    case interview:
      bookimage1 = interview01
      bookimage2 = interview02
      bookimage3 = interview03
      bookimage4 = interview04
      bookimage5 = interview05
      bookimage6 = interview06
      bookimage7 = interview07
      bookimage8 = interview08
      price01 = '277'
      price02 = '554'
      price03 = '324'
      price04 = '342'
      price05 = '304'
      price06 = '210'
      price07 = '224'
      price08 = '252'
      bookname1 = '一開口，全世界都想聽你說'
      bookname2 = '提升程式設計師的面試力'
      bookname3 = '外商．百大英文面試勝經'
      bookname4 = '日文面試一週完勝攻略'
      bookname5 = '如何準備英語面試'
      bookname6 = '求職面試快速充電寶典'
      bookname7 = '33個說話技巧'
      bookname8 = '面試零痛點這樣口說最高分'
      discount1 = '79'
      discount2 = '9'
      discount3 = '9'
      discount4 = '9'
      discount5 = '95'
      discount6 = '7'
      discount7 = '7'
      discount8 = '6'
      break
    case travel:
      bookimage1 = Travel01
      bookimage2 = Travel02
      bookimage3 = Travel03
      bookimage4 = Travel04
      bookimage5 = Travel05
      bookimage6 = Travel06
      bookimage7 = Travel07
      bookimage8 = Travel08
      price01 = '300'
      price02 = '315'
      price03 = '300'
      price04 = '266'
      price05 = '385'
      price06 = '224'
      price07 = '316'
      price08 = '442'
      bookname1 = '你所說的流浪，就是我的歸途'
      bookname2 = '跟著狗狗去旅行'
      bookname3 = '臺灣國家公園無障礙旅遊攻略'
      bookname4 = '一年四季賞花輕旅行'
      bookname5 = '熱血露營家的不敗野炊'
      bookname6 = '山林生活教科書 '
      bookname7 = '巷弄裡的台灣味'
      bookname8 = '風起臺灣Be Sky Taiwan'
      discount1 = '79'
      discount2 = '75'
      discount3 = '79'
      discount4 = '7'
      discount5 = '7'
      discount6 = '7'
      discount7 = '79'
      discount8 = '79'
      break
    case discount:
      bookimage1 = Discount01
      bookimage2 = Discount02
      bookimage3 = Discount03
      bookimage4 = Discount04
      bookimage5 = Discount05
      bookimage6 = Discount06
      bookimage7 = Discount07
      bookimage8 = Discount08
      price01 = '332'
      price02 = '537'
      price03 = '160'
      price04 = '324'
      price05 = '284'
      price06 = '315'
      price07 = '332'
      price08 = '210'
      bookname1 = '就愛那抹綠！抹茶食光'
      bookname2 = 'Mont St. Clair的甜點典藏食譜'
      bookname3 = '15種花漾瑪德蓮'
      bookname4 = '微奢華豆沙裱花甜點'
      bookname5 = '甜點奶油醬調理聖經'
      bookname6 = '頂尖甜點師的磅蛋糕自信作'
      bookname7 = '田安石的低醣廚房'
      bookname8 = '史多倫聖誕麵包教科書'
      discount1 = '79'
      discount2 = '79'
      discount3 = '5'
      discount4 = '9'
      discount5 = '7'
      discount6 = '7'
      discount7 = '79'
      discount8 = '5'
      break

    default:
      break
  }

  useEffect(() => {
    $('.chia_slidebtn-l').on('click', function () {
      $('.chia_selectbook_x').css({ left: '0px', transition: '1.5s' })
    })
    $('.chia_slidebtn-r').on('click', function () {
      $('.chia_selectbook_x').css({ left: '-1190px', transition: '1.5s' })
    })
  }, [])

  return (
    <>
      <div className="chia_slidebtn-l">
        <div className="chia_arrowbtn  d-flex align-items-center justify-content-center ">
          <BsChevronLeft />
        </div>
      </div>
      <div className="chia_book_editor mt-4">
        <div className="chia_selectbook_x d-flex ">
          <Chiaeditorbook
            image={bookimage1}
            price={price01}
            name={bookname1}
            discount={discount1}
          />
          <Chiaeditorbook
            image={bookimage2}
            price={price02}
            name={bookname2}
            discount={discount2}
          />
          <Chiaeditorbook
            image={bookimage3}
            price={price03}
            name={bookname3}
            discount={discount3}
          />
          <Chiaeditorbook
            image={bookimage4}
            price={price04}
            name={bookname4}
            discount={discount4}
          />
          <Chiaeditorbook
            image={bookimage5}
            price={price05}
            name={bookname5}
            discount={discount5}
          />
          <Chiaeditorbook
            image={bookimage6}
            price={price06}
            name={bookname6}
            discount={discount6}
          />
          <Chiaeditorbook
            image={bookimage7}
            price={price07}
            name={bookname7}
            discount={discount7}
          />
          <Chiaeditorbook
            image={bookimage8}
            price={price08}
            name={bookname8}
            discount={discount8}
          />
        </div>
      </div>
      <div className="chia_slidebtn-r">
        <div className="chia_arrowbtn  d-flex align-items-center justify-content-center chia_arrowbtnr">
          <BsChevronRight />
        </div>
      </div>
    </>
  )
}

export default ChiaSelectbook
