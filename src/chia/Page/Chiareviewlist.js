import React, { useEffect, useState } from 'react'
import { withRouter, Link, Switch, Route } from 'react-router-dom'
import ReviewContent from '../Page/ChiaRevoewContent'
import ReviewWrite from '../Page/ChiaReviewWrite'
import '../Style/chiareviewlist.scss'
// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import Reviewlistbody from '../Component/Reviewlistbody'

function Chiareviewlist() {
  // console.log(props)
  return (
    <>
      <Switch>
        <Route path="/reviews/content/:sid?" component={ReviewContent} />
        <Route path="/reviews/edit" component={ReviewWrite} />
        <div className="reviewsection">
          <div className="container ">
            <div className="reviewtitle row">
              <div className="reviewheader">讀者感言</div>
              <div className="chia_writereview">
                <Link to="/reviews/edit" className="chia_write">
                  撰寫留言
                </Link>
              </div>
            </div>
            <div className="reviewmainsection d-flex row">
              <Reviewlistbody path="/reviews/content" />
            </div>
          </div>
        </div>
      </Switch>
    </>
  )
}

export default withRouter(Chiareviewlist)
