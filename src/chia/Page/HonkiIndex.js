import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import {Container} from 'react-bootstrap'
//component
import HonkiHeroContext from '../Component/HonkHeroContext'
import HonkiindexButton from '../Component/HonkiIndexButton'
import HonkiLogo from '../Component/HonkiLogo'
import '../Style/chia_honkiindex.scss'
//page
import Mainbook from './Mainbook'

function HonkiIndex(props) {
  // setTimeout('window.location="/bookstoreindex"', 15000);

  return (
    <>
      <div className="chia_hero-image">
        <div className="container-fluid">
          <HonkiLogo />
          <HonkiHeroContext
            solar="24節氣"
            slogan="帶你暢遊書中世界"
            satler="現在是3月5日"
            solarterm="驚蟄"
            meaning="寓意"
            context1="新生"
            context2="自我突破"
            context3="自我成長"
          />
          <HonkiindexButton />
        </div>
      </div>
    </>
  )
}

export default HonkiIndex
