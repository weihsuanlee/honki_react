import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Spring01 from '../image/soloarterm/solar01.png'
import Spring02 from '../image/soloarterm/solar02.jpg'
import Spring03 from '../image/soloarterm/solar03.jpg'
import Spring04 from '../image/soloarterm/solar04.jpg'
import Spring05 from '../image/soloarterm/solar05.jpg'
import Spring06 from '../image/soloarterm/solar06.jpg'
import Summer01 from '../image/soloarterm/solar07.jpg'
import Summer02 from '../image/soloarterm/solar08.jpg'
import Summer03 from '../image/soloarterm/solar09.jpg'
import Summer04 from '../image/soloarterm/solar10.png'
import Summer05 from '../image/soloarterm/solar11.jpg'
import Summer06 from '../image/soloarterm/solar12.png'
import Autumn01 from '../image/soloarterm/solar13.png'
import Autumn02 from '../image/soloarterm/solar14.jpg'
import Autumn03 from '../image/soloarterm/solar15.jpg'
import Autumn04 from '../image/soloarterm/solar16.jpg'
import Autumn05 from '../image/soloarterm/solar17.jpg'
import Autumn06 from '../image/soloarterm/solar18.jpg'
import Winter01 from '../image/soloarterm/solar19.jpg'
import Winter02 from '../image/soloarterm/solar20.jpg'
import Winter03 from '../image/soloarterm/solar21.jpg'
import Winter04 from '../image/soloarterm/solar22.jpg'
import Winter05 from '../image/soloarterm/solar23.jpg'
import Winter06 from '../image/soloarterm/solar24.jpg'

function Chia24term(props) {
  const haru01 = props.haru01
  const haru02 = props.haru02
  const haru03 = props.haru03
  const haru04 = props.haru04
  const haru05 = props.haru05
  const haru06 = props.haru06
  const natsu01 = props.natsu01
  const natsu02 = props.natsu02
  const natsu03 = props.natsu03
  const natsu04 = props.natsu04
  const natsu05 = props.natsu05
  const natsu06 = props.natsu06
  const aki01 = props.aki01
  const aki02 = props.aki02
  const aki03 = props.aki03
  const aki04 = props.aki04
  const aki05 = props.aki05
  const aki06 = props.aki06
  const fuyu01 = props.fuyu01
  const fuyu02 = props.fuyu02
  const fuyu03 = props.fuyu03
  const fuyu04 = props.fuyu04
  const fuyu05 = props.fuyu05
  const fuyu06 = props.fuyu06
  let solar
  let sectitle
  switch (true) {
    case haru01:
      solar = Spring01
      sectitle = '立春'
      break
    case haru02:
      solar = Spring02
      sectitle = '雨水'
      break
    case haru03:
      solar = Spring03
      sectitle = '驚蟄'
      break
    case haru04:
      solar = Spring04
      sectitle = '春分'
      break
    case haru05:
      solar = Spring05
      sectitle = '清明'
      break
    case haru06:
      solar = Spring06
      sectitle = '穀雨'
      break
    case natsu01:
      solar = Summer01
      sectitle = '立夏'
      break
    case natsu02:
      solar = Summer02
      sectitle = '小滿'
      break
    case natsu03:
      solar = Summer03
      sectitle = '芒種'
      break
    case natsu04:
      solar = Summer04
      sectitle = '夏至'
      break
    case natsu05:
      solar = Summer05
      sectitle = '小暑'
      break
    case natsu06:
      solar = Summer06
      sectitle = '大暑'
      break

    case aki01:
      solar = Autumn01
      sectitle = '立秋'
      break
    case aki02:
      solar = Autumn02
      sectitle = '處暑'
      break
    case aki03:
      solar = Autumn03
      sectitle = '白露'
      break
    case aki04:
      solar = Autumn04
      sectitle = '秋分'
      break
    case aki05:
      solar = Autumn05
      sectitle = '寒露'
      break
    case aki06:
      solar = Autumn06
      sectitle = '霜降'
      break
    case fuyu01:
      solar = Winter01
      sectitle = '霜降'
      break

    case fuyu02:
      solar = Winter02
      sectitle = '小雪'
      break
    case fuyu03:
      solar = Winter03
      sectitle = '大雪'
      break
    case fuyu04:
      solar = Winter04
      sectitle = '冬至'
      break
    case fuyu05:
      solar = Winter05
      sectitle = '小寒'
      break

    case fuyu06:
      solar = Winter06
      sectitle = '大寒'
      break

    default:
      break
  }

  return (
    <>
      <div className="chia_one d-flex flex-column justify-content-center">
        <div className="chia_oneimg mx-auto">
          <Link to="#">
            <img src={solar} alt="" />
          </Link>
        </div>
        <div className="chia_oneword text-center ">{sectitle}</div>
      </div>
    </>
  )
}

export default Chia24term
