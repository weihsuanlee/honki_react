import React, { useEffect, useState } from 'react'
import { withRouter, Link, Switch, Route, NavLink } from 'react-router-dom'
import { BsArrowLeftShort, BsArrowRightShort, BsSearch } from 'react-icons/bs'
import Pagenumber from '../Component/Pagenumber'
import $ from 'jquery'

function Reviewlistbody(props) {
  let searchParams = new URLSearchParams(props.location.search)
  let url = props.match.url
  let pagekazo = Number(searchParams.get('page'))
  console.log(props)
  console.log(url)
  const [list, setList] = useState([])
  const [fliterdata, setfilterdata] = useState([])
  const [loading, setLoading] = useState(false)
  //page part
  const [currentPage, setCurrentPage] = useState(1)
  const [listPerPage, setListPerPage] = useState('')
  const [isactive, setIsActive] = useState(false)

  //search part
  const [isturon, setIsturnon] = useState(false)
  const [search, setSearch] = useState('')
  const [isSearch, setIsSearch] = useState('')

  useEffect(() => {
    fetchList()
  }, [])

  useEffect(() => {
    if (isturon) {
      $('.searchmember').removeClass('d-none')
      $('.memberid').css({ backgroundColor: '#1c1b1b', color: '#fff' })
    } else {
      $('.searchmember').addClass('d-none')
      $('.memberid').css({ backgroundColor: 'transparent', color: '#1c1b1b' })
    }

    async function searchProduct() {
      const response = await fetch(
        'http://localhost:3333' +
          props.location.pathname +
          '/test' +
          props.location.search,
        {
          method: 'GET',
        }
      )
      const data = await response.json()
      console.log('after data', data.f_rows)
      console.log('Page data', data.v_rows)
      setList(data.f_rows)
      setListPerPage(data.totalPages)
      setfilterdata(data.v_rows)
    }
    searchProduct()
    console.log(isturon)
  }, [isturon, props.location, isactive, isSearch, search, currentPage])

  function searchItem() {
    const queryString = `?${isSearch}=${search}`
    props.history.push(`/reviews${queryString}`)
  }

  function PageChange() {
    const queryString = `?${isSearch}=${search}&page=${currentPage}`
    props.history.push(`/reviews${queryString}`)
  }

  console.log(props.location.search)
  console.log(currentPage)

  const fetchList = async () => {
    setLoading(true)
    const fetchURL = 'http://localhost:3333/reviews/test'
    const res = await fetch(fetchURL)
    res.json().then((res) => {
      setList(res.rows)
      setListPerPage(res.totalPages)
      setLoading(false)
    })
  }

  //Get current Post
  const indexOfLastPost = currentPage * 6
  const indexOfFirstPost = indexOfLastPost - 6
  const currentList = list.slice(indexOfFirstPost, indexOfLastPost)
  //Change Page

  // const paginate = (pagenumber) => setCurrentPage(pagenumber)

  // console.log(isSearch)

  const Searchbar = (
    <>
      <div className="reviewsearchsection col-4">
        <div className="searchbox">
          <div className="btntitle botan">篩選 | 搜尋</div>
          <div className="search">
            <input
              type="text"
              className="searchbody"
              name="searchbody"
              onChange={(e) => {
                setSearch(e.target.value)
                setIsSearch('search')
                // PageChange()
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  searchItem()
                  // PageChange()
                }
              }}
            />
            <button
              className="searchbtn"
              onClick={() => {
                searchItem()
              }}
            >
              <BsSearch />
            </button>
          </div>
          <div
            className="memberid botannobgc"
            onClick={() => {
              {
                !isturon ? setIsturnon(true) : setIsturnon(false)
              }
            }}
          >
            會員名稱
          </div>
          <div className="search searchmember d-none">
            <input
              type="text"
              className="searchmemberid text-center"
              id="searchmemberid"
              name="searchmemberid"
              placeholder="請輸入會員名稱"
              onChange={(e) => {
                setSearch(e.target.value)
                setIsSearch('member')
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  // searchItem()
                  PageChange()
                }
              }}
            />
            <button
              className="searchbtn memberidbtn"
              onClick={() => {
                searchItem()
              }}
            >
              送出
            </button>
          </div>

          <div className="chia_ranking botannobgc">評分</div>
          <div className="chia_good botannobgc">人氣</div>
          <div className="chia_date botannobgc">日期</div>
        </div>
      </div>
    </>
  )

  let pageitems = []
  for (let i = 1; i < listPerPage + 1; i++) {
    pageitems.push(i)
  }

  console.log(pageitems)

  const PageNum = (
    <>
      <div className="pagenumber d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination text-center  d-flex align-items-center ">
            <li className="chia_page-item">
              <Link
                className="chia_custompage"
                to={
                  props.location.search
                    ? props.location.search
                    : props.location.pathname
                }
                onClick={() => {
                  currentPage - 1
                    ? setCurrentPage(currentPage - 1)
                    : setCurrentPage(1)
                }}
              >
                <BsArrowLeftShort />
              </Link>
            </li>
            {pageitems.map((v) => (
              <li className="page-item ">
                <Link
                  className="chia_custompage"
                  to={
                    props.location.search
                      ? props.location.search
                      : props.location.pathname
                  }
                  onClick={() => {
                    setCurrentPage(v)
                  }}
                  // onChange={() => {
                  //   setCurrentPage(pagekazo)
                  // }}
                >
                  {v}
                </Link>
              </li>
            ))}
            <li className="chia_page-item">
              <Link
                className="chia_custompage"
                to={
                  props.location.search
                    ? props.location.search
                    : props.location.pathname
                }
                onClick={() => {
                  {
                    currentPage + 1 < listPerPage
                      ? setCurrentPage(currentPage + 1)
                      : setCurrentPage(listPerPage)
                    setIsActive(true)
                  }
                  // PageChange()
                }}
              >
                <BsArrowRightShort />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )

  const List = (
    <>
      <div className="reviewbody col-8">
        <div className="reviewtable">
          <table className="table">
            <thead className="reviewtablehead">
              <tr className="mx-auto">
                <th scope="col">會員名稱</th>
                <th scope="col">分類</th>
                <th scope="col" class="chia_title text-center">
                  標題
                </th>
                <th scope="col">評分</th>
                <th scope="col">人氣</th>
                <th scope="col">日期</th>
              </tr>
            </thead>

            <tbody className="reviewtablebody">
              {currentList.map((v, i) => (
                <tr className="reviewtr" key={i}>
                  <td scope="col" className="reviewtd">
                    <p class="content ">{v.review_nickname}</p>
                  </td>
                  <td scope="col" className="reviewtd">
                    <p class="content">{v.category}</p>
                  </td>
                  <td className="chia_title reviewtd chia_content" scope="col">
                    <Switch>
                      <p className="content">
                        <NavLink to={`${props.path}/${v.sid}`}>
                          {v.booktitle}
                        </NavLink>
                      </p>
                    </Switch>
                  </td>
                  <td scope="col" className="reviewtd">
                    <p className="content">{v.ranking}&#9733;</p>
                  </td>
                  <td scope="col" className="reviewtd">
                    <p className="content">30</p>
                  </td>
                  <td scope="col" className="reviewtd">
                    <p className="content">{v.creatdate}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {PageNum}
        </div>
      </div>
    </>
  )

  return (
    <>
      {Searchbar}
      {List}
    </>
  )
}

export default withRouter(Reviewlistbody)
