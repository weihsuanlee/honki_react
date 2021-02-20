import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// 各區
import IndexAllEvent from '../components/IndexAllEvent'
import IndexHeader from '../components/IndexHeader'
import IndexHot from '../components/IndexHot'
import IndexNew from '../components/IndexNew'

function ActIndex(props) {
  const [eventLists, setEventLists] = useState([])

  // 總頁數
  const [totalPages, setTotalPages] = useState('')

  // 每頁
  const [page, setPage] = useState(1)

  // query string page
  const [queryPage, setQueryPage] = useState('')

  // query string
  // let searchParams = new URLSearchParams(props.location.search)

  // TODO: 分頁有抓到data但沒有辦法map
  // useEffect(() => {
  //   console.log(props)
  //   let pathName = props.location.pathname
  //   let pageNow = props.location.search

  //   async function newPages() {
  //     const url = pathName + pageNow
  //     // 和伺服器要資料
  //     const response = await fetch('http://localhost:3333' + url, {
  //       method: 'GET',
  //     })
  //     const data = await response.json()
  //     console.log('data page', response)
  //     console.log('data', data)
  //     setEventLists(data.rows)
  //     setTotalPages(data.totalPages)
  //   }
  //   newPages()
  // }, [queryPage])

  // window.scrollBy(0, 100 * window.innerHeight)

  // 所有活動
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
    setTotalPages(data.totalPages)
    setEventLists(data)
    // console.log(eventLists)
  }

  useEffect(() => {
    getAllEventFromServer()
  }, [])

  // 熱門活動
  const [hotLists, setHotLists] = useState([])
  const [hotAddClass, setHotAddClass] = useState('')
  async function getHotEventFromServer() {
    // 開啟載入指示

    // 連接的伺服器資料網址
    const url = 'http://localhost:3333/activity/hot'

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
    console.log(data)
    setHotLists(data)
    // console.log(data)
  }

  useEffect(() => {
    getHotEventFromServer()
  }, [])

  return (
    <>
      <IndexHeader />
      <IndexHot hotLists={hotLists} hotAddClass={hotAddClass} />
      <IndexNew />
      <IndexAllEvent
        eventLists={eventLists}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        queryPage={queryPage}
        setQueryPage={setQueryPage}
        setEventLists={setEventLists}
      />
    </>
  )
}

export default withRouter(ActIndex)
