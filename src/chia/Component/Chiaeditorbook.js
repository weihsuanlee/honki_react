import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import student02 from '../image/Book/01Food.jpg'

function Chiaeditorbook(props) {
  return (
    <>
      <div className="chia_selectbookgroup ">
        <div className="chia_selectbookbox d-flex justify-content-center align-items-center">
          <div className="chia_selectbooktop ">
            <img src={props.image} />
          </div>
        </div>
        <div className="chia_selectbookbottom d-flex flex-column">
          <Link className="chia_selectbooktitle">{props.name}</Link>
          <div className="chia_selectbookword d-flex justify-content-around align-items-center">
            <div>
              <p className="chia_selecbookprice text-center">
                <span>{props.discount}折</span>
                {props.price}元
              </p>
            </div>
            <div>
              <Link className="nav-link chia_selectcart" href="#">
                <FaShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chiaeditorbook
