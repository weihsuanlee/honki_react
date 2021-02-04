import { BrowserRouter as Link } from 'react-router-dom'
import { FaCaretUp } from 'react-icons/fa'
import '../styles/backtotop.scss'
import { useEffect } from 'react'
import $ from 'jquery'

function BackToTop() {
  useEffect(() => {
    $('.backtoTop').on('click', function () {
      window.scrollTo(0, 0)
    })
  }, [])
  return (
    <>
      <div class="backtoTop">
        <FaCaretUp className="fas fa-caret-up" />
        <p class="top-text">TOP</p>
      </div>
    </>
  )
}

export default BackToTop
