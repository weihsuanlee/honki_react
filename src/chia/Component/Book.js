import React, { useState, useEffect } from 'react'
import ChiaModal from './ChiaModal'
import $ from 'jquery'

// import BookCover from '../image/Book/01.jpg'

function Book(props) {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="chia_book chia-1024book ">
        <div className="chia_bookup">
          <img
            src={props.BookCover}
            style={{ width: '225px', height: '300px' }}
          />
        </div>
        <div
          className="chia_bookdown d-flex flex-wrap text-center justify-content-around align-items-center"
          onClick={() => setShow(true)}
        >
          <div className="chia_booktitle">
            {props.Title}
            <br />
            {props.Subtitle}
          </div>
          <div>
            {props.BookSlogan}，<br />
            {props.Subslogan}
            <span className="chia_courage">{props.Caption}</span>
          </div>
        </div>
      </div>
      <ChiaModal
        show={show}
        onHide={() => setShow(false)}
        BookCover={props.BookCover}
        Intro={props.Intro}
        Name={props.Name}
        view={props.booklink}
      />
    </>
  )
}

export default Book
