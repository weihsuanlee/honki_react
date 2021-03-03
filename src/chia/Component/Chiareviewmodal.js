import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import $ from 'jquery'
import Chiasmallmodal from '../Page/Chiasmallmodal'

function Chiareviewmodal(props) {
  const [reviewnickname, setReviewNickname] = useState(props.nickname)
  const [reviewcategory, setReviewCategory] = useState('')
  const [reviewbooktitle, setReviewBooktitle] = useState(props.booktitle)
  const [reviewRanking, setReviewRanking] = useState('')
  const [reviewContent, setReviewContent] = useState(props.content)
  const [isNum, setIsNum] = useState(props.isNum)
  const [isshow, setIsShow] = useState(false)

  const handleClose = () => setIsShow(false)
  const handleShow = () => setIsShow(true)

  console.log(props)

  const solarterm = [
    '立春',
    '雨水',
    '驚蟄',
    '春分',
    '清明',
    '穀雨',
    '立夏',
    '小滿',
    '芒種',
    '夏至',
    '小暑',
    '大暑',
    '立秋',
    '處暑',
    '白露',
    '秋分',
    '寒露',
    '霜降',
    '立冬',
    '小雪',
    '大雪',
    '冬至',
    '小寒',
    '大寒',
  ]

  const selectbar = (
    <>
      {solarterm.map((v, i) => (
        <option className="chia_solarselect" value={v} key={i}>
          {v}
        </option>
      ))}
    </>
  )

  useEffect(() => {
    $('.chia_rankingselect').on('change', function () {
      setReviewRanking(this.value)
      console.log(reviewRanking)
    })
    $('.chia_solarselect ').on('change', function () {
      setReviewCategory(this.value)
    })
  }, [reviewcategory, reviewRanking])

  console.log(reviewRanking)

  console.log(reviewcategory)
  async function editreview() {
    const newData = {
      reviewnickname,
      reviewcategory,
      reviewbooktitle,
      reviewRanking,
      reviewContent,
      isNum,
    }

    const url = 'http://localhost:3333/reviews/list/content/update'

    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()
    let backurl = `'/reviews/content/${isNum}'`
    setTimeout(() => {
      setIsShow(true)
      window.location = '/reviews'
    }, 1000)
    console.log('This is the data', data)
  }

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        {...props}
        className="chiaeditareastart"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">編輯心得</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="chia_editreviewbox d-flex justify-content-center">
            <div
              action=""
              className="chia_editreview d-flex justify-content-center chia_form"
              method="javascript:"
              style={{ padding: '15px' }}
            >
              <div class="form-box d-flex flex-column">
                <div class="form-group .e-m chia_form_g">
                  <label for="" className="chia_member">
                    會員名稱
                  </label>
                  <br />
                  <input type="text" value={props.nickname} readOnly />
                </div>
                <div className="form-group .e-m chia_form_g">
                  <label for="" className="chia_e-title">
                    標題
                  </label>
                  <br />
                  <input
                    type="text"
                    style={{ width: '545px' }}
                    value={reviewbooktitle}
                    onChange={(e) => {
                      setReviewBooktitle(e.target.value)
                    }}
                  />
                </div>
                <div className="chia_selectionbar d-flex justify-content-between">
                  <div className="chia_category d-flex">
                    <label className="chia_categorysolar">節氣</label>
                    <select
                      name=""
                      id=""
                      className="chia_solarselect chia_select"
                    >
                      {selectbar}
                    </select>
                  </div>
                  <div className="chia_category d-flex">
                    <label className="chia_categoryranking">評分</label>
                    <select
                      name=""
                      id=""
                      className="chia_rankingselect chia_select"
                    >
                      <option className="chiaranking" value="5">
                        5&#9733;
                      </option>
                      <option className="chiaranking" value="4">
                        4&#9733;
                      </option>
                      <option className="chiaranking" value="3">
                        3&#9733;
                      </option>
                      <option className="chiaranking" value="2">
                        2&#9733;
                      </option>
                      <option className="chiaranking" value="1">
                        1&#9733;
                      </option>
                    </select>
                  </div>
                </div>

                <textarea
                  name="review"
                  id=""
                  className="chia_reviewarea chia_editrarea"
                  cols="30"
                  rows="15"
                  onChange={(e) => {
                    setReviewContent(e.target.value)
                  }}
                >
                  {reviewContent}
                </textarea>
                <button
                  className="chia_reviewtbtn mx-auto"
                  onClick={() => {
                    editreview()
                    // setIsShow(true)
                  }}
                >
                  送出
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
      <Chiasmallmodal
        isshow={isshow}
        handleClose={handleClose}
        content="更改成功"
        answer="確定"
      />
    </>
  )
}

export default Chiareviewmodal
