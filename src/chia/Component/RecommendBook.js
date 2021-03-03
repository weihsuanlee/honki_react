import React, { Component, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import '../Style/chia_mainbook.scss'
import Book from '../Component/Book'
import $ from 'jquery'
import Aos from 'aos'

import HonkiHeroContext from '../Component/HonkHeroContext'

import { FaMouse } from 'react-icons/fa'

// import Navbar from '../Component/Navbar'
import BookCover from '../image/Book/00Main.jpg'
import FoodBook from '../image/Book/01Food.jpg'
import ClothBook from '../image/Book/02cloth.jpg'
import HomeBook from '../image/Book/03Home.jpg'
import WalkBook from '../image/Book/04Walk.jpg'
import EducationBook from '../image/Book/05Education.jpg'
import AmusementBook from '../image/Book/06Amusement.jpg'
function RecommendBook() {
  // const [isDown, setIsDown] = useState(false)
  // const [startX, setStartx] = useState('')
  // const [scrollLeft, setScrollLeft] = useState('')

  useEffect(() => {
    Aos.init({ duration: 1200 })
    let isDown = false
    let startX
    let scrollLeft
    const slider = document.querySelector('.chia_bookitems')
    const end = () => {
      isDown = false
      slider.classList.remove('chia_active')
    }

    const start = (e) => {
      isDown = true
      slider.classList.add('chia_active')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }
    const move = (e) => {
      if (!isDown) return

      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const dist = x - startX
      slider.scrollLeft = scrollLeft - dist
    }

    ;(() => {
      slider.addEventListener('mousedown', start)
      slider.addEventListener('touchstart', start)
      slider.addEventListener('mousemove', move)
      slider.addEventListener('touchmove', move)
      slider.addEventListener('mouseleave', end)
      slider.addEventListener('mouseup', end)
      slider.addEventListener('touchend', end)
    })()

    let cursor = $('.chia_cursor')

    $(window).on('mousemove', function (e) {
      cursor.css({
        top: e.clientY - cursor.height() / 2,
        left: e.clientX - cursor.width() / 2,
      })
    })
    $(window).on('mouseleave', function () {
      cursor.css({
        opacity: '0',
      })
    })
    $(window).on('mouseenter', function () {
      cursor.css({
        opacity: '1',
      })
    })
    $(window).on('mousedown', function () {
      cursor.css({
        transform: 'scale(.2)',
      })
    })
    $(window).on('mouseup', function () {
      cursor.css({
        transform: 'scale(1)',
      })
    })
    $('a')
      .mouseenter(function () {
        cursor.css({
          transform: 'scale(3.2)',
        })
      })
      .mouseleave(function () {
        cursor.css({
          transform: 'scale(1)',
        })
      })
  }, [])
  const HONKI = (
    <>
      <div className="col-7 d-flex justify-content-center chia_honki align-items-center">
        <h1 className="chia_honkititle">HONKI</h1>
      </div>
    </>
  )

  const IndexIntro = (
    <>
      <div className="chia_hero-image">
        <div className="container-fluid">
          {/* <HonkiLogo /> */}
          {/* < className="chia_index">
            {/* <video id="chia_myvideo" controls>
              <source src={HonkiVideo} type="video/mp4" />
            </video> */}
          {/* <HonkiindexButton /> */}

          {/* {HONKI} */}
          <HonkiHeroContext
            solar="24節氣"
            slogan="帶你暢遊書中世界"
            satler="現在是3月5日"
            solarterm="驚蟄"
            meaning="寓意"
            context1="新生"
            context2="自我突破"
            context3="自我成長"
          />
          <div className="chia_mouse_scrolldown ">
            SCROLL
            <FaMouse />
            DOWN
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {IndexIntro}
      <div className="chia_main_book">
        <Container fluid className="chia_main d-flex flex-column">
          <div className="chia_cursor"></div>
          {/* <div className="test_nav"></div> */}
          <div className="chia_main_row row">
            <div className="chia_header" data-aos="fade-right">
              <p classNamw="chia_header_word">本次精選</p>
            </div>
          </div>
          <div
            className="chia_mainbook justify-content-center row"
            data-aos="fade-left"
          >
            <div className="chia_recbook">
              <ul className="chia_bookitems ">
                <li className="chia_item">
                  <Book
                    BookCover={BookCover}
                    Name="種日子的人"
                    Title="主推"
                    Subtitle="Main"
                    BookSlogan=" 種日子的人"
                    Subslogan="帶給你破土而出的"
                    Caption="勇氣"
                    Intro="二〇一〇年，曾經待過電視、廣播、雜誌、出版、餐飲等不同領域的陳慶祐，辭去工作，四方尋覓，最終落腳新竹小縱谷中一處綠意環繞的小山坳，打造一個給自己和「農夫」、小狗一起生活的「綠色庇護所」。「綠色庇護所」是一個會長大的空間，漸漸長出鸚鵡，茶花園，老松柏，一大缸魚；長出訪客，孩子，老朋友新朋友，形形色色鄰居和故事；長出時間，身而為人的享樂與憂傷，一瞬示現的風花與體悟。十年間，陳慶祐持續以智慧型手機（三台與時並進的iPhone）紀錄文字..."
                    booklink="/products/18"
                  />
                </li>
                <li className="chia_item">
                  <Book
                    BookCover={FoodBook}
                    Name="酸女孩 第一輯：四季料理知識書(春季刊)春天來吃辛香料"
                    Title="食"
                    Subtitle="Food"
                    BookSlogan=" 春天的到來"
                    Subslogan="讓辛香料調味你的"
                    Caption="每一餐"
                    Intro="春天來吃辛香料！！
                                生機盎然的，回春大地的，在辛香家族裡有希望的味道！
                                
                                春天飲食，配合氣機的改變，以辛味食材為主，有助散去周遭阻礙氣機的寒與濕，配合性質平和的甘味食材，緩和辛味的燥烈。辛味並不只有辣味，具有濃烈香氣的食材，多半屬於辛味，例如紫蘇、生薑，或是各種香草植物。最適合春天的是隱身在形形色色的調味料中的辛香食材了。初春替你驅散寒氣，春末幫忙宣散濕邪，常見的辛香小隊，現身！..."
                    booklink="/products/19"
                  />
                </li>
                <li className="chia_item">
                  <Book
                    BookCover={ClothBook}
                    Name="嬉遊的春 純淨＆簡單的棉麻手感，輕鬆愜意玩布作"
                    Title="衣"
                    Subtitle="Cloth"
                    BookSlogan=" 初春好心情"
                    Subslogan="學習棉麻製品讓自己"
                    Caption="舒適"
                    Intro="　DIY手作族【入門 / 進階】兩用超聖典「Cotton friend手作誌」是一本專門介紹各類手作的專業雜誌，從繽紛的美麗拼布、縫紉作品的教學、基礎刺繡、布偶縫製與設計、小物與家飾品的製作等，皆搭配精采的圖文詳細解說。而每集必附的原寸紙型可供縫製時描繪之用，不但能夠可縮短作品的製作期，還能自行選擇所需的規格及尺寸。本誌不僅是手作新手必備書，熟手們也是愛不釋手，想進入手作界，這一定是您不可或缺參考用書。"
                    booklink="/products/62"
                  />
                </li>
                <li className="chia_item">
                  <Book
                    BookCover={HomeBook}
                    Name="合作住宅指南：用自決、永續、共居開啟生活新提案"
                    Title="住"
                    Subtitle="Home"
                    BookSlogan=" 春天來了神知道"
                    Subslogan="合作住宅教你如何"
                    Caption="新生活"
                    Intro="1989年8月26日的台北，數萬人聚集在忠孝東路上過夜，抗議受到財團炒作而狂飆的房地產價格。這是台灣自政治解嚴以來，由人民自發而起、最龐大的一次都市社會運動—無殼蝸牛運動。隨著時間的過去，房價仍持續升高，「廣建國宅」與「擴大購屋貸款」政策成效不彰。在居住議題上，市場失靈、政府失靈，人們該怎麼辦？「共同形構都會空間」的概念由此而生。「合作住宅」模式帶領大家尋求另一種住宅的可能。不僅住宅的位置（WHERE）重要，住宅怎麼形成的（HOW）也很重要。人們如何過活，還有他們怎麼住在公寓或樓房裡，表現了他們的習慣、價值觀和願景。住宅形式反映了人們在城市生活中的角色，也成為文化和生活方式的關鍵表徵。"
                    booklink="/products/20"
                  />
                </li>
                <li className="chia_item">
                  <Book
                    BookCover={WalkBook}
                    Name="Made In Forest 山林製造：來自山村 八款剛剛好就好的森活態度"
                    Title="行"
                    Subtitle="Walk"
                    BookSlogan="初春驚蟄好天氣"
                    Subslogan="用山林製造換個人生"
                    Caption="新態度"
                    Intro="你今天被森林服務了嗎？賴以為生的空氣、土壤、水，好吃的高山甜柿、段木香菇，用國產材製作原木家具，近年來老少咸宜的生態旅遊、步道健行，到部落體驗原住民文化、享受在地餐桌......不管你身在城市、海邊或山村，每人每天領受森林的賜予無所不在，但我們卻很少去思維：台灣山村真正的樣貌。走過八條有故事的山村之路，看見「剛剛好就好的」山村哲學，取之自然，用之自然，新林業如何以經營取代禁止？讓人與動植物、自然共生共榮，重返森林的家，那是蘊育生命、生產糧食、傳承文化的根基，為了環境永續，生活／旅行台灣，我們應該有更好的選擇。"
                    booklink="/products/13"
                  />
                </li>
                <li className="chia_item">
                  <Book
                    BookCover={EducationBook}
                    Name="閃電崩盤：一兆美元的真相！全球追捕，史上最神祕的金融罪犯"
                    Title="育"
                    Subtitle="Education"
                    BookSlogan="驚蟄一聲"
                    Subslogan="教你如何成為"
                    Caption="金融大王"
                    Intro="一個賺錢成癮，卻不愛花錢的操盤天才，如何以一人之力撼動美國金融市場，造成讓全球財經專家百思不得其解的「閃電崩盤」？在這噬人的逐利場上，他究竟是金融犯罪的主謀，或只是幕後操盤高手的替罪羔羊？2010年5月6日星期四，全球金融市場無預警瞬間直墜，道瓊指數在5分鐘之內暴跌600多點，市場瞬間蒸發了一兆美元，創下歷史性的紀錄。全世界財經專家、政府官員、調查單位都在問同一個問題：到底發生了什麼事？2015年4月，倫敦期貨交易員納凡德．薩勞在爸媽家遭到逮捕，有關當局聲稱他就是閃電崩盤的始作俑者，美國政府要求將他引渡至國內受審，最高可求處380年的刑期。嫌犯落網原本值得慶賀，然而這起逮捕事件卻引發了軒然大波。如果美國政府說的是實話，為什麼花了這麼多年才採取行動？為什麼之前所有的官方調查報告，皆未懷疑有人在操弄市場？所謂的「罪魁禍首」又是怎麼騙過所有的交易程式、演算法和人工智慧？難道一個人光靠著個人電腦和網路連線，就可以顛覆世界，引發這麼大的災難？"
                    booklink="/products/14"
                  />
                </li>
                <li className="chia_item">
                  <Book
                    BookCover={AmusementBook}
                    Name="蜜蜂與遠雷"
                    Title="樂"
                    Subtitle="Amusement"
                    BookSlogan="驚蟄與蜜蜂"
                    Subslogan="再給你一次勇氣"
                    Caption="追夢"
                    Intro="　不知從哪兒傳來蜜蜂的振翅聲……那是祝福世界的聲音，也是拚命蒐集生命光輝的聲音。每三年舉行一次的芳江國際鋼琴大賽已然成為年輕音樂家踏進專業領域的叩門磚，並屢屢發掘出樂壇新秀，因此越來越受到矚目。第六屆比賽也依然集結許多極具個人特色、富有魅力的參賽者：宛如璞玉般純真，卻引發眾人種種不可思議反應的「天然」少年；過去曾被捧為「天才」，但在母親去世後突然逃離舞臺的少女；一度放棄音樂家之夢，直到孩子出生，才再次挑戰比賽的平凡上班族；以及從外表到琴藝無不完美，有自信能讓所有聽眾傾心於他的青年。以這四人為首，近百名懷抱夢想、經過多年苦練，甚至不乏「天才」稱號的參賽者們聚集於此。比起體力上的極大負荷，因比賽而浮現的自我懷疑和怯懦退縮或許更令人煎熬；但唯有不斷克服難關與考驗，才能舉步向前，看見自己想看見的音樂風景、成為自己想成為的樣子。經過重重關卡，最後受得到音樂之神眷顧的會是誰？藉由這次比賽，這四個人又將為彼此的人生帶來什麼樣的火花？以鋼琴大賽為舞臺，寫盡人間才能與命運、深刻描繪音樂的青春群像小說！"
                    booklink="/products/21"
                  />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default RecommendBook
