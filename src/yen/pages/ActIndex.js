import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// 各區
import IndexAllEvent from '../components/IndexAllEvent'
import IndexHeader from '../components/IndexHeader'
import IndexHot from '../components/IndexHot'
import IndexNew from '../components/IndexNew'

function ActIndex(props) {
  // 總活動列表
  const [eventLists, setEventLists] = useState([])
  // 總頁數
  const [totalPages, setTotalPages] = useState('')
  // 每頁
  const [page, setPage] = useState(1)
  // 熱門活動
  const [hotLists, setHotLists] = useState([])
  const [hotAddClass, setHotAddClass] = useState('')
  // 最新活動
  const [newLists, setNewLists] = useState([])
  // query string page
  const [queryPage, setQueryPage] = useState('')
  // query string select
  const [querySelect, setQuerySelect] = useState('')
  // query string class
  const [queryClass, setQueryClass] = useState('')

  // 活動篩選
  useEffect(() => {
    let pathName = props.location.pathname
    // console.log('props', props)
    // console.log('queryClass', queryClass)

    async function newClassPages() {
      const url = pathName + queryClass

      // 和伺服器要資料
      const response = await fetch('http://localhost:3333' + url, {
        method: 'GET',
        header: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const data = await response.json()
      // console.log('new data page', response, data)
      setEventLists(data)
    }
    newClassPages()
  }, [queryClass])

  // 換頁
  useEffect(() => {
    // console.log(props)
    let pathName = props.location.pathname
    let pageNow = props.location.search

    async function newPages() {
      const url = pathName + pageNow
      // 和伺服器要資料
      const response = await fetch('http://localhost:3333' + url, {
        method: 'GET',
        header: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const data = await response.json()
      // console.log('data page', response, data)
      //setEventLists(data.rows)
      setEventLists(data)
      setTotalPages(data.totalPages)
    }
    // window.scrollY()
    newPages()
  }, [queryPage])

  // 所有活動
  async function getAllEventFromServer() {
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
  async function getHotEventFromServer() {
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
    // console.log(data)
    setHotLists(data)
    // console.log(data)
  }

  useEffect(() => {
    getHotEventFromServer()
  }, [])

  // 最新活動篩選
  useEffect(() => {
    let pathName = '/activity/new'
    // let pageSelect = props.location.search
    // console.log(pathName + pageSelect)

    async function newSelectPages() {
      const url = pathName + querySelect

      // 和伺服器要資料
      const response = await fetch('http://localhost:3333' + url, {
        method: 'GET',
        header: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const data = await response.json()
      // console.log('new data page', response, data)
      setNewLists(data)
    }
    newSelectPages()
  }, [querySelect])

  // 最新活動
  async function getNewEventFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:3333/activity/new'

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
    setNewLists(data)
    // console.log(data)
  }

  useEffect(() => {
    getNewEventFromServer()
  }, [])

  return (
    <>
      <IndexHeader />
      <IndexHot
        hotLists={hotLists}
        hotAddClass={hotAddClass}
        queryPage={queryPage}
      />
      <IndexNew
        newLists={newLists}
        setQuerySelect={setQuerySelect}
        querySelect={querySelect}
      />
      <IndexAllEvent
        eventLists={eventLists}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        queryPage={queryPage}
        setQueryPage={setQueryPage}
        setEventLists={setEventLists}
        setQueryClass={setQueryClass}
        queryClass={queryClass}
      />
    </>
  )
}

export default withRouter(ActIndex)
