import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Aos from "aos"



function ToptenbookOdd(props){

    useEffect(() => {
       
        Aos.init({ duration: 1200 })

    }, [])
    return(
        <>
        <Link to="#" >
                <div className="rankingbook" data-aos="flip-right" >
                    <div className="chia_rankingbooktop d-flex flex-column justify-content-center chia_rankingbook_odd grey" >

                    <div className="bookcover">
                        <div className="ranking">
                            {props.ranking}
                            </div>
                        <img src={props.ismonth ? props.Monthranking : props.Weekranking} height="100%" />
                    </div>
                </div>
                <div className="rankingbookword">
                    <p className="rankingtitle">{props.ismonth ? props.Monthtitle : props.Weektitle}</p>
                    <p className="rankingprice"><span>79折</span>{props.ismonth ? props.Monthprice : props.Weekprice}元</p>
                </div>
            </div>
        </Link>
        </>
    )
}

export default ToptenbookOdd