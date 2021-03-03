import React, { useState, useEffect } from 'react'
import $ from 'react'
import '../Style/Chiaavatar.scss'
import Chiareplyarea from '../Component/Chia_replyarea'
import { Link } from 'react-router-dom'
import { SVG_FACES } from './constant'
import { SVG_HAIR } from './constant'
import { SVG_CLOTH } from './constant'
import { SVG_ACC } from './constant'
import { SVG_TERMS } from './constant'
import { FaReply } from 'react-icons/fa'

import Chiasmallmodalreply from '../Page/Chiasmallmodalreply'
import Chiasmallmodal from '../Page/Chiasmallmodal'

function ChiaComment(props) {
  let commentaccount
  let commentname
  let nickname
  let curFace = ''
  let curHair = ''
  let curTerms = ''
  let curAcc = ''
  let curCloth = ''
  if (localStorage.getItem('userLogin')) {
    commentaccount = localStorage.getItem('userLogin')
    commentname = JSON.parse(commentaccount)
    nickname = commentname.body.nickname
    curFace = localStorage.getItem('curFace')
    curHair = localStorage.getItem('curHair')
    curTerms = localStorage.getItem('curTerms')
    curAcc = localStorage.getItem('curAcc')
    curCloth = localStorage.getItem('curCloth')
  }
  console.log(nickname)
  //useEffect
  const [commentNickname, setCommentNickname] = useState(nickname)
  const [comment, setComment] = useState('')
  const [commentsid, setCommentSid] = useState(props.isNum)
  // console.log(commentNickname)
  const [isshow, setIsShow] = useState(false)
  const [show, setShow] = useState(false)
  const [sid, setSid] = useState('')
  const [rname, setRname] = useState('')

  const handleClose = () => setIsShow(false)
  const handleShow = () => setIsShow(true)
  // console.log(commentname.body.nickname)

  async function addComment() {
    const newData = {
      commentsid,
      commentNickname,
      comment,
      curFace,
      curHair,
      curTerms,
      curAcc,
      curCloth,
    }

    const url = 'http://localhost:3333/reviews/content/comment'
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
    // setShow(true)
    setTimeout(() => {
      setShow(true)
      window.location = '/reviews'
    }, 1500)
    console.log('This is the result', data)
  }

  const [getcomment, setGetComment] = useState([])
  const [err, setErr] = useState('')

  async function fetchcomment() {
    const fetchURL = 'http://localhost:3333/reviews/content/getcomment'
    const res = await fetch(fetchURL)
    res
      .json()
      .then((res) => {
        setGetComment(res.c_rows)
      })
      .catch((err) => {
        setErr(err)
      })
  }

  useEffect(() => {
    fetchcomment()
  }, [])

  console.log(getcomment)

  const newGetComment = getcomment.filter((v) => {
    return v.commentsid === commentsid
  })

  // console.log(newGetComment)
  const commentArea = (
    <>
      <div className="chia_commenttai row justify-content-center">
        <div className="chia_c-tai d-flex">
          <div className="chia_memberbox">
            <div className="chia_memeberimg ">
              <div className="chia_avatar_bg">
                <img
                  className="chia_advatar"
                  src={SVG_TERMS[curTerms]}
                  alt=""
                />
              </div>
              <div className="chia_avatar_hair">
                <img className="chia_advatar" src={SVG_HAIR[curHair]} alt="" />
              </div>
              <div className="chia_avatar_face">
                <img className="chia_advatar" src={SVG_FACES[curFace]} alt="" />
              </div>
              <div className="chia_avatar_cloth">
                <img
                  className="chia_advatar"
                  src={SVG_CLOTH[curCloth]}
                  alt=""
                />
              </div>
              <div className="chia_avatar_acc">
                <img className="chia_advatar" src={SVG_ACC[curAcc]} alt="" />
              </div>
            </div>
          </div>
          <div className="chia_c-box">
            <div className="chia_membername">{nickname}</div>
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
                    setComment(e.target.value)
                  }}
                ></textarea>
                <br />
                <button
                  className="chia_commentbtn mx-auto"
                  onClick={() => {
                    addComment()
                  }}
                >
                  我要留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const withoutlogin = (
    <>
      <div className="chia_commenttai row justify-content-center">
        <div className="chia_c-tai d-flex">
          <div className="chia_c-box">
            <div className="chia_content chia_withoutlogin">
              <p>請先登入後再留言</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="chia_reviewcomment">
        <div className="container">
          <div className="chia_commentheader row justify-content-center">
            <div className="chia_commenttitle">留言回覆</div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="chia_commentbox row justify-content-center">
              {newGetComment.map((v, i) => (
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
                    <div className="chia_membername" key={v.sid}>
                      {v.review_nickname}
                    </div>
                    <div className="chia_content">{v.comment}</div>
                    <div classname="chia_time">{v.writtentime}</div>
                  </div>
                  <div className="chia_commentedit ml-auto">
                    {nickname === v.review_nickname ? (
                      ''
                    ) : (
                      <Link
                        onClick={() => {
                          let x = v.sid
                          let y = v.review_nickname
                          setIsShow(true)
                          setSid(x)
                          setRname(y)
                        }}
                      >
                        {' '}
                        {nickname ? (
                          <FaReply style={{ color: '#1c1b1b' }} />
                        ) : (
                          ''
                        )}
                      </Link>
                    )}
                    <Chiasmallmodalreply
                      r_nickname={rname}
                      r_sid={sid}
                      c_sid={props.isNum}
                      isshow={isshow}
                      handleClose={handleClose}
                      nickname={nickname}
                      curTerms={curTerms}
                      curHair={curHair}
                      curFace={curFace}
                      curCloth={curCloth}
                      curAcc={curAcc}
                    />
                  </div>
                </div>
              ))}
              {newGetComment.map((v, i) => (
                <Chiareplyarea sid={v.sid} />
              ))}
            </div>
          </div>
        </div>

        {nickname ? commentArea : withoutlogin}
      </div>
      <Chiasmallmodal
        commentsid={commentsid}
        isshow={show}
        handleClose={handleClose}
        content="留言成功"
      />
    </>
  )
}

export default ChiaComment
