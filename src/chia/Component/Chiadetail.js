import React from 'react'
import {Link } from 'react-router-dom'

function Chiadetail(){
    return(
        <>
                    <div className="chia_categoryblock d-none ">
                                    <ul className="list-unstyled chia_category_detail">
                                        <li><Link to="#">手作設計</Link></li>
                                        <li><Link to="#">影視娛樂</Link></li>
                                        <li><Link to="#">戶外活動/運動</Link></li>
                                        <li><Link to="#">美妝/時尚</Link></li>
                                        <li><Link to="#">品味/指南</Link></li>
                                        <li><Link to="#">武術</Link></li>
                                        <li><Link to="#">休閒/嗜好</Link></li>
                                        <li><Link to="#">其他生活風格</Link></li>
                                    </ul>
                                </div>
        </>
    )
}