import React from 'react'

function HonkiHeroContext(props) {
  return (
    <div className="chia_heroword ml-auto d-flex align-items-center col-5">
      <div className="chia_solar-box ml-auto">
        <p className="chia_solar_term">
          <span className="chia_solar_term_1">{props.solar}</span>
          <br />
          <span className="chia_solar_term_2">{props.slogan}</span>
          <br />
        </p>
        <br />
        <p>
          <span className="chia_solar_term_3">
            {props.satler} 「
            <span className="chia_satler">{props.solarterm}</span>」
          </span>
          <br />
          <span className="chia_solar_term_4">
            {props.meaning}{' '}
            <span className="chia_satler">{props.context1}</span>、
            <span className="chia_satler">{props.context2}</span>、
            <span className="chia_satler">{props.context3}</span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default HonkiHeroContext
