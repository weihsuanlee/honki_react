import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../Style/chiaactivity.scss'
import Aos from "aos"
import $ from 'jquery'

import CHiaAcitvity from '../Component/CHiaActivity'

import Chiahugecircle from '../image/circledot/hugecircle.svg'

function ChiaActivity(){
    const [ismoving, setIsMoving] = useState(false)
    const [isuping, setIsUping] = useState(false)

    useEffect(()=>{
        Aos.init({duration: 1200})
      
    },[])

    useEffect(()=>{
        Aos.init({duration: 1200})
    
        if(ismoving){
            $('.chia_accirclebig').css({transform: 'translateY(-10px)',transition: '.5s'})
        }else{
            $('.chia_accirclebig').css({ transform: 'translateY(0px)', transition: '.5s' })
        }
        if(isuping){
            $('.chia_accircle').css({transform: 'translateX(-10px)',transition: '.5s'})
        }else{
            $('.chia_accircle').css({ transform: 'translateX(0px)', transition: '.5s' })
        }
      
    },[ismoving, isuping])

   
    return(
        <>
            <div className="activity">
                <div className="container">
                <div className="chia_accircle">
        <img src={Chiahugecircle}  onMouseEnter={()=>{setIsUping(true)}} onMouseLeave={()=>{setIsUping(false)}} />
                </div>
                <div className="chia_accirclebig">
        <img src={Chiahugecircle}  onMouseEnter={()=>{setIsMoving(true)}} onMouseLeave={()=>{setIsMoving(false)}}/>
                </div>
                    <div className="event row">
                        <div className="eventheader" data-aos="fade-right">
                            <p>HONKI活動</p>
                        </div>
                    </div>
                    <div className="eventactivity row d-flex justify-content-center" >
                        <div className="eventbox  d-flex ">
                            <CHiaAcitvity one={true}/>
                            <CHiaAcitvity two={true}/>
                           <CHiaAcitvity three={true}/>
              
                                   

                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default ChiaActivity