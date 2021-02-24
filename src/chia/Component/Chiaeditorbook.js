import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

import student02 from '../image/Book/01Food.jpg'

function Chiaeditorbook(props){
    return(
        <>
        
            <div className="selectbookgroup ">
                <div className="selectbookbox d-flex justify-content-center align-items-center">
                    <div className="selectbooktop ">
                        <img src={props.image } />
                    </div>
                </div>
                <div className="selectbookbottom d-flex flex-column">
                    <Link className="chia_selectbooktitle">{props.name}</Link>
                    <div className="chia_selectbookword d-flex justify-content-around align-items-center">
                        <div>
                            <p className="selecbookprice text-center"><span>{props.discount}折</span>{props.price}元</p>
                        </div>
                        <div>
                            <Link className="nav-link selectcart" href="#"><FaShoppingCart /></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Chiaeditorbook