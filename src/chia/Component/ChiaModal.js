import React from 'react'
import { Modal, Button } from 'react-bootstrap'
// import BookCover from '../image/Book/01.jpg'
import { Link } from 'react-router-dom'
import { BsXSquareFill } from 'react-icons/bs'

function ChiaModal(props) {
  return (
    <Modal
      size="lg"
      {...props}
      aria-labelledby="example-custom-modal-styling-title"
      id="chia_modal"
      className="chia_modal_content"
      centered
    >
      <Modal.Header className="chia_modal_header" style={{ padding: '5%' }}>
        <Modal.Title
          id="example-custom-modal-styling-title"
          className="chia_modal_title"
          style={{ width: '800px', backgroundColor: '#fff' }}
        >
          {props.Name}
        </Modal.Title>
        <div onClick={props.onHide} className="chiamodalbtn">
          <BsXSquareFill size={24} />
        </div>
      </Modal.Header>
      <Modal.Body className="chia_modal_body" style={{ padding: '5%' }}>
        <div className="chia_modal">
          <div className="chia_bookup_modal">
            <img
              src={props.BookCover}
              style={{ width: '225px', height: '300px' }}
            />
          </div>
          <div className="chia_modal_bookdown">
            <p className="chia_bookcontent">{props.Intro}</p>
          </div>
        </div>
        <div className="chia_purchasebotton">
          <Link className="chia_purchase" to={props.view}>
            View More...
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ChiaModal
