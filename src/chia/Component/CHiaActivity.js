import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'

function CHiaAcitvity(props) {
  const [isEvent, setEvent] = useState([])
  const [isErr, setIsErr] = useState([])
  const one = 'fade-down-right'
  const two = 'fade-up'
  const three = 'fade-up-left'
  const One = props.one
  const Two = props.two
  const Three = props.three
  let chia_effect
  let chia_effect_1 = ['fade-down-right', 'fade-up', 'fade-up-left']

  switch (true) {
    case One:
      chia_effect = one
      break

    case Two:
      chia_effect = two
      break

    case Three:
      chia_effect = three
      break

    default:
      break
  }

  async function fetchEvent() {
    const fetchURL = 'http://localhost:3333/reviews/honkiindex/event'
    const res = await fetch(fetchURL)
    res
      .json()
      .then((res) => {
        setEvent(res.e_rows)
      })
      .catch((err) => {
        setIsErr(err)
      })
  }

  useEffect(() => {
    Aos.init({ duration: 1500 })
    fetchEvent()
  }, [])

  return (
    <>
      {isEvent.map((v, i) => (
        <div className="chia_eventitem" data-aos={chia_effect}>
          <div className="chia_eventimfo d-flex flex-column" key={i}>
            <div className="chia_eventimg">
              <img
                src={`http://localhost:3000/images/yen/event/${v.act_name}/0.jpg`}
              />
            </div>
            <div className="d-flex">
              <div className="chia_eventdate">{v.act_time}</div>
              <div className="chia_eventtype">{v.event_city}</div>
            </div>
          </div>
          <div className="chia_eventcontent d-flex justify-content-center align-items-center">
            <div className="chia_e-content">
              <p>{v.act_name}</p>
              <p>
                活動價
                <span style={{ color: '#e83015', fontWeight: '700' }}>
                  {v.act_price}
                </span>
              </p>
            </div>
            <div className="chia_e-link">
              <Link to={`/activity/event/${v.act_sid}`}>VIEW MORE...</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CHiaAcitvity
