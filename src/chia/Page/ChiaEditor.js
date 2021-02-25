import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import ChiaSelectbook from '../Component/ChiaSelectbook'
import chiaEditcircle from '../image/circledot/circle-big.svg'
import '../Style/chiaeditor.scss'
import Aos from 'aos'

function ChiaEditor() {
  const [isspring, setIsSpring] = useState(true)
  const [isInterview, setIsInterview] = useState(false)
  const [isTravel, setIsTravel] = useState(false)
  const [isDiscount, setIsDiscount] = useState(false)
  const [isExam, setIsExam] = useState(false)

  //useEffect
  useEffect(() => {
    // console.log(isspring)
    Aos.init({ duration: 1200 })
    // console.log('travel',isTravel)
  }, [])
  useEffect(() => {
    console.log('spring', isspring)
    console.log('interview', isInterview)
    console.log('travel', isTravel)
    if (isspring) {
      $('.spring').css({ border: '1px solid #000', padding: '5px' })
    } else {
      $('.spring').css({ border: 'none' })
    }
    if (isInterview) {
      $('.interview').css({ border: '1px solid #000', padding: '5px' })
    } else {
      $('.interview').css({ border: 'none' })
    }
    if (isTravel) {
      $('.travel').css({ border: '1px solid #000', padding: '5px' })
    } else {
      $('.travel').css({ border: 'none' })
    }
    if (isDiscount) {
      $('.onlinebook').css({ border: '1px solid #000', padding: '5px' })
    } else {
      $('.onlinebook').css({ border: 'none' })
    }
    if (isExam) {
      $('.natioinalexam').css({ border: '1px solid #000', padding: '5px' })
    } else {
      $('.natioinalexam').css({ border: 'none' })
    }
  }, [isspring, isInterview, isTravel, isExam, isDiscount])

  //onMouseLeave={()=>{setIsSpring(false)}}

  return (
    <>
      <div
        className="chia_editorselect"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <div className="chia_editcircle">
          <img src={chiaEditcircle} />
        </div>
        <div className="container-fluid">
          <div className="chia_editrow row">
            <div className="chia_editorheader mx-auto">
              <p>編輯推薦</p>
            </div>
          </div>
          <div className="chia_selectbox row mx-auto">
            <div className="chia_selecttitle d-flex justify-content-around align-items-center">
              <div className="chia_effect d-flex flex-column justify-content-center text-center">
                <p
                  className="spring"
                  onMouseEnter={() => {
                    setIsSpring(true)
                    setIsExam(false)
                    setIsDiscount(false)
                    setIsTravel(false)
                    setIsInterview(false)
                  }}
                >
                  學生初春必讀
                </p>
                <div className="chia_effectname"></div>
              </div>
              <p
                className="interview"
                onMouseEnter={() => {
                  setIsInterview(true)
                  setIsSpring(false)
                  setIsExam(false)
                  setIsDiscount(false)
                  setIsTravel(false)
                }}
              >
                年後面試好書
              </p>
              <p
                className="travel"
                onMouseEnter={() => {
                  setIsTravel(true)
                  setIsDiscount(false)
                  setIsExam(false)
                  setIsInterview(false)
                  setIsSpring(false)
                }}
              >
                驚蟄初春出遊
              </p>
              <p
                className="onlinebook"
                onMouseEnter={() => {
                  setIsDiscount(true)
                  setIsTravel(false)
                  setIsInterview(false)
                  setIsSpring(false)
                  setIsExam(false)
                }}
              >
                春天甜點好時節
              </p>
              {/* <p className="natioinalexam" onMouseEnter={() => {
                                setIsExam(true)
                                setIsDiscount(false)
                                setIsTravel(false)
                                setIsInterview(false)
                                setIsSpring(false)
                            }}>公職考試好簡單</p> */}
            </div>
            <ChiaSelectbook
              isspring={isspring}
              setIsSpring={setIsSpring}
              isInterview={isInterview}
              setIsInterview={setIsInterview}
              isTravel={isTravel}
              setIsTravel={setIsTravel}
              isDiscount={isDiscount}
              isExam={isExam}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChiaEditor
