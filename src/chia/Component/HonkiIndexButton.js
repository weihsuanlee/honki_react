import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function HonkiindexButton() {
  return (
    <div className="chia_index_button">
      <Link to="/bookstoreindex" className="chia_index_enter">
        Enter
      </Link>
    </div>
  )
}

export default HonkiindexButton
