import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Aos from "aos"

function CHiaAcitvity(props){
    const one = "fade-down-right"
    const two = "fade-up"
    const three = "fade-up-left"
    const One = props.one;
    const Two = props.two;
    const Three = props.three;
    let chia_effect;

   switch (true) {
       case One:
           chia_effect = one
           break;
   
       case Two:
           chia_effect = two
           break;
   
       case Three:
           chia_effect = three
           break;
   
       default:
           break;
   }
    useEffect(() => {
        Aos.init({ duration: 1500 })
    })
    return(
        <>
            <div className="chia_eventitem" data-aos={chia_effect}>
                <div className="eventimg">
                    <img src="./image/eventimage/event1.jpg" />
                </div>
                <div className="eventimfo d-flex">
                    <div className="eventdate">2021.03.05</div>
                    <div className="eventtype">講座</div>
                </div>
                <div className="eventcontent d-flex justify-content-center align-items-center">
                    <div className="e-content">
                        <p>跟著童書遊世界</p>
                        <p>車馬費:200元</p>
                    </div>
                    <div className=" e-link">
                        <Link to="#">VIEW MORE...</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CHiaAcitvity