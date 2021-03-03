import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { SVG_FACES } from '../Component/constant'
import { SVG_HAIR } from '../Component/constant'
import { SVG_CLOTH } from '../Component/constant'
import { SVG_ACC } from '../Component/constant'
import { SVG_TERMS } from '../Component/constant'

function Chiasmallmodalreply(props) {
  const commentid = props.c_sid
  const replyid = props.r_sid
  const reviewnickname = props.nickname
  const commentniakname = props.r_nickname
  const [reply, setReply] = useState('')
  let curFace = props.curFace
  let curHair = props.curHair
  let curTerms = props.curTerms
  let curAcc = props.curAcc
  let curCloth = props.curCloth

  //   console.log(props)
  async function addReply() {
    const newData = {
      reply,
      replyid,
      commentid,
      reviewnickname,
      commentniakname,
      curFace,
      curHair,
      curTerms,
      curAcc,
      curCloth,
    }

    const url = 'http://localhost:3333/reviews/comment/reply'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))
    const response = await fetch(request)
    const data = await response.json()

    console.log('This is the result', data)
  }
  console.log(props.r_nickname)
  const commentArea = (
    <>
      <div className="chia_c-tai d-flex" style={{ border: 'none' }}>
        <div className="chia_memberbox">
          <div className="chia_memeberimg ">
            <div className="chia_avatar_bg">
              <img
                className="chia_advatar"
                src={SVG_TERMS[props.curTerms]}
                alt=""
              />
            </div>
            <div className="chia_avatar_hair">
              <img
                className="chia_advatar"
                src={SVG_HAIR[props.curHair]}
                alt=""
              />
            </div>
            <div className="chia_avatar_face">
              <img
                className="chia_advatar"
                src={SVG_FACES[props.curFace]}
                alt=""
              />
            </div>
            <div className="chia_avatar_cloth">
              <img
                className="chia_advatar"
                src={SVG_CLOTH[props.curCloth]}
                alt=""
              />
            </div>
            <div className="chia_avatar_acc">
              <img
                className="chia_advatar"
                src={SVG_ACC[props.curAcc]}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="chia_c-box">
          <div className="chia_membername">{props.nickname}</div>
          <div className="chia_content ">
            <form
              action=""
              className="d-flex flex-column justify-content-center chia_commenttry"
            >
              <textarea
                name=""
                id=""
                style={{ width: '425px', height: '100px' }}
                onChange={(e) => {
                  setReply(e.target.value)
                }}
              ></textarea>
              <br />
              <button
                className="chia_commentbtn mx-auto"
                onClick={() => {
                  addReply()
                }}
              >
                我要留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
  return (
    <>
      <Modal
        {...props}
        size="lg"
        show={props.isshow}
        onHide={props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>回覆留言</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: '16px' }}>{commentArea}</Modal.Body>
        {/* <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.deleteContent()
            }}
          >
            {props.answer}
          </Button>
       
        </Modal.Footer>  */}
      </Modal>
    </>
  )
}

export default Chiasmallmodalreply
