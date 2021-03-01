import React, { Component } from 'react'
import { Modal, Container, Row } from 'react-bootstrap'
import '../Style/chia_mainbook.scss'
import Book from '../Component/Book'
// import Navbar from '../Component/Navbar'
import Honkiindex from './HonkiIndex'
import BookCover from './Book/01.jpg'
import RecommendBook from '../Component/RecommendBook'
import ChangeBook from '../Page/ChangeBook'
import Topten from './Topten'
import Chiacategory from './Chiacategory'
import ChiaEditor from './ChiaEditor'
import ChiaActivity from './ChiaActivity'
import ChiaReview from './ChiaReview'
import Chiasolar from './Chiasolar'
import { Children } from 'react'
console.log(BookCover)

function Mainbook() {
  return (
    <>
      {/* <Honkiindex /> */}
      <RecommendBook />
      <ChangeBook />
      <Topten />
      <Chiacategory />
      <ChiaEditor />
      <ChiaActivity />
      <ChiaReview />
      <Chiasolar />
    </>
  )
}
export default Mainbook
