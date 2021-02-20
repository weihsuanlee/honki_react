import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// 各區
import IndexAllEvent from '../components/IndexAllEvent'
import IndexHeader from '../components/IndexHeader'
import IndexHot from '../components/IndexHot'
import IndexNew from '../components/IndexNew'

function ActIndex() {
  const [eventLists, setEventLists] = useState([])

  async function getAllEventFromServer() {
    // 開啟載入指示

    // 連接的伺服器資料網址
    const url = 'http://localhost:3333/activity'

    // header的資料格式
    const request = new Request(url, {
      method: 'GET',
      header: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    setEventLists(data)
    console.log(eventLists)
  }

  useEffect(() => {
    getAllEventFromServer()
  }, [])

  return (
    <>
      <IndexHeader />
      <IndexHot />
      <IndexNew />
      <IndexAllEvent eventLists={eventLists} />
    </>
  )
}

export default withRouter(ActIndex)
