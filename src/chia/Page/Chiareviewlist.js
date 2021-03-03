import React, { useEffect, useState } from 'react'
import { withRouter, Link, Switch, Route } from 'react-router-dom'
import ReviewContent from '../Page/ChiaRevoewContent'
import ReviewWrite from '../Page/ChiaReviewWrite'
import Chiasmallmodalreply from './Chiasmallmodalreply'
import '../Style/chiareviewlist.scss'
// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import Reviewlistbody from '../Component/Reviewlistbody'

function Chiareviewlist() {
  let commentaccount
  let commentname
  let nickname
  if (localStorage.getItem('userLogin')) {
    commentaccount = localStorage.getItem('userLogin')
    commentname = JSON.parse(commentaccount)
    nickname = commentname.body.nickname
  }

  const writereview = (
    <>
      <div className="chia_writereview">
        <Link to="/reviews/edit" className="chia_write">
          撰寫心得
        </Link>
      </div>
    </>
  )
  return (
    <>
      <Switch>
        <Route path="/reviews/content/:sid?" component={ReviewContent} />
        <Route path="/reviews/edit" component={ReviewWrite} />
        <Route
          path="/reviews/content/reply/:sid"
          component={Chiasmallmodalreply}
        />
        <div className="chia_reviewsection">
          <div className="container ">
            <div className="chia_reviewtitle row">
              <div className="chia_reviewheader">讀者感言</div>
              {nickname ? writereview : ''}
            </div>
            <div className="chia_reviewmainsection d-flex row">
              <Reviewlistbody path="/reviews/content" />
            </div>
          </div>
        </div>
      </Switch>
    </>
  )
}

export default withRouter(Chiareviewlist)
