import { BrowserRouter as Link } from 'react-router-dom'
import { FaCaretUp } from 'react-icons/fa'
import '../styles/backtotop.scss'
import { useEffect } from 'react'
import $ from 'jquery'

function BackToTop() {
  useEffect(() => {
    $('.backtoTop').on('click', function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    })
  }, [])
  return (
    <>
      <div className="backtoTop">
        <FaCaretUp className="fas fa-caret-up" />
        <p className="top-text">TOP</p>
      </div>
    </>
  )
}

export default BackToTop
