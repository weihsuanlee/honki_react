import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Chiasmallmodal(props) {
  const One = props.one
  const Two = props.two
  const Three = props.three

  return (
    <>
      <Modal {...props} show={props.isshow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>訊息:</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: '16px' }}>{props.content}</Modal.Body>
        <Modal.Footer>
          {Two ? (
            <Button
              variant="secondary"
              onClick={() => {
                props.deleteContent()
              }}
            >
              {props.answer}
            </Button>
          ) : (
            ''
          )}

          {/* <Button onClick={props.deleteContent()}></Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Chiasmallmodal
