import React, { useEffect, useState } from 'react'
import { withRouter, Link, Switch, Route } from 'react-router-dom'
import Chiareviewmodal from '../Component/Chiareviewmodal'
import Chiasmallmodal from '../Page/Chiasmallmodal'
import '../Style/chia_reviewcontent.scss'
import $ from 'jquery'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { FaThumbsUp } from 'react-icons/fa'

import MultiLevelBreadCrumb from '../Component/MultipleBreadCrumb'

import ChiaComment from '../Component/ChiaComment'

function ChiaReviewContent(props) {
  let commentaccount
  let commentname
  let nickname
  if (localStorage.getItem('userLogin')) {
    commentaccount = localStorage.getItem('userLogin')
    commentname = JSON.parse(commentaccount)
    nickname = commentname.body.nickname
  }
  const [show, setShow] = useState(false)
  const [isReview, setIsreview] = useState('')
  const [isError, setIsError] = useState('')
  const [isResult, setIsResult] = useState([])
  const [isData, setIsData] = useState([])
  const [isNum, setIsNum] = useState(Number(props.match.params.sid))
  const [isTransform, setIsTransform] = useState(false)
  const [isLike, setIsLike] = useState('GOOD')

  const [isshow, setIsShow] = useState(false)

  const handleClose = () => setIsShow(false)
  const handleShow = () => setIsShow(true)

  console.log(isResult)

  console.log(typeof props.match.params.sid)

  async function fetchReview() {
    const fetchURl = 'http://localhost:3333/reviews/list/content'
    const res = await fetch(fetchURl)
    res
      .json()
      .then((res) => {
        setIsreview(res)
        setIsResult(res.rows)
      })
      .catch((error) => {
        setIsError(error)
      })
  }

  useEffect(() => {
    fetchReview()
  }, [])

  useEffect(() => {
    if (isTransform) {
      $('.chia_contentborder-r')
        .css('trasnform', 'scale(1.1)')
        .css('transition', '.5s')
    }
    $('.chia_contentborder-r').on('mouseenter', function () {
      $(this).css('trasnform', 'scale(1.1)').css('transition', '.5s')
    })
  }, [isTransform])

  console.log(isLike)

  const newContent = isResult.filter((v) => {
    return v.sid === isNum
  })

  // newContent.map((v, i) => {
  //   console.log(v)
  // })

  async function addLikes() {
    const newData = {
      isLike,
      isNum,
    }

    const url = 'http://localhost:3333/reviews/content/like'

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
  async function deleteContent() {
    const url = 'http://localhost:3333/reviews/list/content/delete/' + isNum

    const request = new Request(url, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    if (!data.id) {
      props.history.push('/reviews')
    }
  }
  const Content = (
    <>
      {newContent.map((v, i) => (
        <div
          className="chia_contentbody chia_scrollable-element"
          key={i}
          onMouseEnter={() => setIsTransform(true)}
        >
          <p>{v.review}</p>
        </div>
      ))}
    </>
  )

  const editcontent = (
    <>
      <div className="chia_pencil">
        <Link onClick={setShow}>
          <BsPencil />
        </Link>
      </div>
      <div className="chia_pencil">
        <Link>
          <BsFillTrashFill
            style={{ color: '#e83015' }}
            onClick={() => {
              // deleteContent()
              setIsShow(true)
            }}
          />
        </Link>
      </div>
    </>
  )
  const ContentTop = (
    <>
      {newContent.map((v, i) => (
        <table className="chia_r-content">
          <tr className="d-flex justify-content-between chia_con">
            {nickname === v.review_nickname ? editcontent : ''}
            <div className="chia_thumbup">
              <Link
                onClick={() => {
                  setIsLike('GOOD')
                  addLikes()
                }}
                style={{ color: '#1c1b1b' }}
              >
                <FaThumbsUp />
              </Link>
            </div>
          </tr>
          <tr className="chia_membercol">
            <td className="chia_m-title">會員名稱</td>
            <td className="chia_m-content" key={i}>
              {v.review_nickname}
            </td>
          </tr>
          <tr className="chia_membercol">
            <td className="chia_m-title">標題</td>
            <td className="chia_m-content" key={i}>
              {v.booktitle}
            </td>
          </tr>
        </table>
      ))}
    </>
  )

  return (
    <>
      <div className="chia_reviewcontent">
        <div className="container-fluid">
          <div className="bread row">
            <MultiLevelBreadCrumb />
          </div>
        </div>

        <div classname="container">
          <div className="chia_contentbox_c d-flex justify-content-center">
            <div className="chia_contentborder-r  d-flex justify-content-center align-items-center">
              <div className="chia_contentborder-l d-flex justify-content-center">
                <div className="chia_contentheader">
                  {ContentTop}
                  {Content}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChiaComment isNum={isNum} />
      </div>
      {newContent.map((v, i) => (
        <Chiareviewmodal
          show={show}
          onHide={() => setShow(false)}
          isNum={isNum}
          content={v.review}
          category={v.category}
          booktitle={v.booktitle}
          nickname={v.review_nickname}
          ranking={v.ranking}
        />
      ))}
      <Chiasmallmodal
        deleteContent={deleteContent}
        isshow={isshow}
        handleClose={handleClose}
        content="確定要刪除嗎?"
        answer="確定"
        two={true}
      />
    </>
  )
}
export default withRouter(ChiaReviewContent)
