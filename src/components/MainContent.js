import React, { useState, useEffect } from 'react'

function MainContent(props) {
  return (
    <>
      <main role="main" className="flex-shrink-0">
        <body class="main-content-body">{props.children}</body>
      </main>
    </>
  )
}

export default MainContent
