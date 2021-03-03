import React, { useEffect, useState } from 'react'
import { SVG_FACES } from './constant'
import { SVG_HAIR } from './constant'
import { SVG_CLOTH } from './constant'
import { SVG_ACC } from './constant'
import { SVG_TERMS } from './constant'

function Chia_replyarea(props) {
  const [reply, setReply] = useState([])
  const [err, setErr] = useState('')
  async function fetchcomment() {
    const fetchURL = 'http://localhost:3333/reviews/comment/reply/content'
    const res = await fetch(fetchURL)
    res
      .json()
      .then((res) => {
        setReply(res.c_rows)
      })
      .catch((err) => {
        setErr(err)
      })
  }
  let numnum = props.sid
  console.log(props.sid)
  console.log(reply)

  const newReply = reply.filter((v) => {
    return v.replyid === numnum
  })
  console.log(newReply)

  useEffect(() => {
    fetchcomment()
  }, [])

  return (
    <>
      <div
        className="chia_commentbox row justify-content-center"
        style={{ border: 'none' }}
      >
        {newReply.map((v, i) => (
          <div className="chia_comment d-flex">
            <div className="chia_memberbox">
              <div className="chia_memeberimg ">
                <div className="chia_avatar_bg">
                  <img
                    className="chia_advatar"
                    src={SVG_TERMS[v.curTerms]}
                    alt=""
                  />
                </div>
                <div className="chia_avatar_hair">
                  <img
                    className="chia_advatar"
                    src={SVG_HAIR[v.curHair]}
                    alt=""
                  />
                </div>
                <div className="chia_avatar_face">
                  <img
                    className="chia_advatar"
                    src={SVG_FACES[v.curFace]}
                    alt=""
                  />
                </div>
                <div className="chia_avatar_cloth">
                  <img
                    className="chia_advatar"
                    src={SVG_CLOTH[v.curCloth]}
                    alt=""
                  />
                </div>
                <div className="chia_avatar_acc">
                  <img
                    className="chia_advatar"
                    src={SVG_ACC[v.curAcc]}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="chia_c-box">
              <div className="chia_membername">
                {v.review_nickname} to {v.commentnickname}
              </div>
              <div className="chia_content">{v.reply}</div>
              <div classname="chia_time">{v.createtime}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Chia_replyarea
