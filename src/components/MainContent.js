import React, { useState, useEffect } from 'react'

function MainContent(props) {
  return (
    <>
      <main role="main" className="flex-shrink-0">
        <div class="main-content-body wei-main-content-body">
          {props.children}
        </div>
      </main>
    </>
  )
}

export default MainContent
