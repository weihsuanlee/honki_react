import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import NormalAdd from '../components/NormalAdd'

// 二手書scss
import '../styles/used-books.scss'

// 二手書svg
// import NormalBee from './../components/NormalBee'
import DancingImg from '../components/DancingImg'

function NormalInsert() {
  return (
    <>
      <NormalAdd />
    </>
  )
}

export default NormalInsert
