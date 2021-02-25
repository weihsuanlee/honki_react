import React, { useEffect, useState } from 'react'
import { withRouter, Link, Switch, Route } from 'react-router-dom'
import '../Style/chia_reviewcontent.scss'
import $ from 'jquery'

import ChiaComment from '../Component/ChiaComment'

function ChiaReviewContent(props) {
  const [isReview, setIsreview] = useState('')
  const [isError, setIsError] = useState('')
  const [isResult, setIsResult] = useState([])
  const [isData, setIsData] = useState([])
  const [isNum, setIsNum] = useState(Number(props.match.params.sid))
  const [isTransform, setIsTransform] = useState(false)

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
  }, [isTransform])

  const newContent = isResult.filter((v) => {
    return v.sid === isNum
  })

  newContent.map((v, i) => {
    console.log(v)
  })

  const Content = (
    <>
      {newContent.map((v, i) => (
        <div
          className="chia_contentbody scrollable-element"
          key={i}
          onMouseEnter={() => setIsTransform(true)}
        >
          <p>{v.review}</p>
        </div>
      ))}
    </>
  )
  const ContentTop = (
    <>
      {newContent.map((v, i) => (
        <table className="chia_r-content">
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
            <div className="breadbox">
              <Link to="/">首頁</Link>
              <Link to="/reviews">讀者感言</Link>
              <Link to="#">蜜蜂與遠雷</Link>
            </div>
          </div>
        </div>

        <div classname="container">
          <div className="chia_contentbox d-flex justify-content-center">
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
    </>
  )
}
export default withRouter(ChiaReviewContent)
