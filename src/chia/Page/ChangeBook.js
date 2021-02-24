import React, { useState, useEffect } from 'react'
import '../Style/chia_changebook.scss'
import { Container } from 'react-bootstrap'
import $ from 'jquery'
import Aos from 'aos'

function ChangeBook() {
  useEffect(() => {
    Aos.init({ duration: 1100 })
  }, [])

  // useEffect(()=>{

  //   let index = 0;
  //   $('.chia_slidedot li').first().css('background', "#fff");
  //   $('.chia_slidedot li').hover(function(){
  //       console.log('hover', $(this).index())
  //       index = $(this).index()
  //       $(this).css('background', '#fff').siblings().css('background', 'none');
  //       $('.chia_box').css('top',-800*index)
  //   });

  //     setInterval(() => {
  //         if (index > 4) {
  //             index = 0;
  //         }
  //         $('.chia_slidedot li').eq(index).css('background', '#fff').siblings().css('background', 'none');
  //         $('.chia_box').css('top', -800 * index)
  //         index++;
  //     }, 1000);

  // },[])
  return (
    <>
      <div className="chia_changeable">
        <Container fluid className="chia_changpaji">
          {/* <div className="chia_herowordA mr-auto">
            <div className="chia_herowordB">
                            <div className="chia_ofcourse" data-aos="zoom-in-right" data-aos-mirror="true">
                    <span >我們也有</span>
        </div>
                            <div className="chia_stillhave" data-aos="zoom-out-left" data-aos-mirror="true">
                            <span>宛如行星般的藏書</span>
        </div>
                            <div className="chia_letyouchoose" data-aos="zoom-in-right" data-aos-mirror="true">
                            <span>推薦給您</span>
        </div>
            </div>
        </div> */}

          <div className="chia_springterm"></div>
          <div className="chia_bookstoreword">也有繁星般的藏書任君挑選</div>
          <div className="chia_bookstore ml-auto"></div>

          {/* <div className="row">
<div className="chia_wrap" >
<ul className="chia_box list-unstyled c-box d-flex flex-column">
<li><img src={Hero3}  alt="Books"/></li>
<li><img src={Hero2}  alt="Books"/></li>
<li><img src={Hero3}  alt="Books"/></li>
<li><img src={Hero2}  alt="Books"/></li>

</ul>
<div className="chia_slide_dot">
<ul className="list-unstyled chia_slidedot">
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
</div>
</div>
        </div> */}
        </Container>
      </div>
    </>
  )
}

export default ChangeBook
