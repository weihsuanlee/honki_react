import React, { useEffect, useState } from 'react'
import { withRouter, Link, Switch, NavLink } from 'react-router-dom'
import { BsArrowLeftShort, BsArrowRightShort, BsSearch } from 'react-icons/bs'
import $ from 'jquery'
import ReviewPagination from './ReviewPagination'

function Reviewlistbody(props) {
  let searchParams = new URLSearchParams(props.location.search)
  let url = props.match.url
  // let pagekazo = Number(searchParams.get('page'))
  console.log(props)
  // console.log(url)
  const [list, setList] = useState([])
  const [fliterdata, setfilterdata] = useState([])
  const [loading, setLoading] = useState(false)
  //page part
  const [currentPage, setCurrentPage] = useState(1)
  const [listPerPage, setListPerPage] = useState('')
  const [isactive, setIsActive] = useState(false)

  //page part try 2

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState('')

  //search part
  const [isturon, setIsturnon] = useState(false)
  const [search, setSearch] = useState('')
  const [isSearch, setIsSearch] = useState('')

  //likes part
  const [likekazo, setLikeKazo] = useState([])

  //ranking
  const [Ranking, setRanking] = useState([])
  const [isRanking, setIsRanking] = useState(false)

  useEffect(() => {
    fetchList()
    fetchLike()
  }, [])

  useEffect(() => {
    if (isturon) {
      $('.chia_searchmember').removeClass('d-none')
      $('.chia_memberid').css({ backgroundColor: '#1c1b1b', color: '#fff' })
    } else {
      $('.chia_searchmember').addClass('d-none')
      $('.chia_memberid').css({
        backgroundColor: 'transparent',
        color: '#1c1b1b',
      })
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
      setTotalPages(data.totalPages)
      setListPerPage(data.totalPages)
      setfilterdata(data.v_rows)
    }
    searchProduct()
    console.log(isturon)
  }, [
    isturon,
    props.location,
    isactive,
    isSearch,
    search,
    currentPage,
    isRanking,
  ])

  console.log(isRanking)
  function searchItem() {
    const queryString = `?${isSearch}=${search}`
    props.history.push(`/reviews${queryString}`)
  }

  function PageChange() {
    const queryString = `?${isSearch}=${search}&page=${currentPage}`
    props.history.push(`/reviews${queryString}`)
  }
  function RankingChange() {
    const queryString = `?ranking=?`
    props.history.push(`/reviews${queryString}`)
  }
  function TimeChange() {
    const queryString = `?time=?`
    props.history.push(`/reviews${queryString}`)
  }

  // console.log(props.location.search)
  // console.log(currentPage)

  const fetchList = async () => {
    setLoading(true)
    const fetchURL = 'http://localhost:3333/reviews/test'
    const res = await fetch(fetchURL)
    res.json().then((res) => {
      setList(res.rows)
      setRanking(res.r_rows)
      setListPerPage(res.totalPages)
      setLoading(false)
    })
  }

  const fetchLike = async () => {
    const fetchURL = 'http://localhost:3333/reviews/content/likelike'
    const res = await fetch(fetchURL)
    res
      .json()
      .then((res) => {
        setLikeKazo(res.t_rows)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fliterdata.forEach((v, i) => {
    v.like = likekazo.filter((s, i) => {
      return s.likesid === v.sid
    })
  })

  // console.log(isSearch)

  const Searchbar = (
    <>
      <div className="chia_reviewsearchsection col-4">
        <div className="chia_searchbox">
          <div className="chia_btntitle chia_botan">篩選 | 搜尋</div>
          <div className="chia_search">
            <input
              type="text"
              className="chia_searchbody text-center"
              name="chia_searchbody"
              placeholder="輸入節氣或是書名"
              onChange={(e) => {
                setSearch(e.target.value)
                setIsSearch('search')
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  searchItem()
                  PageChange()
                }
              }}
            />
            <button
              className="chia_searchbtn"
              onClick={() => {
                searchItem()
              }}
            >
              <BsSearch />
            </button>
          </div>
          <div
            className="chia_memberid chia_botannobgc"
            onClick={() => {
              {
                !isturon ? setIsturnon(true) : setIsturnon(false)
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            會員名稱
          </div>
          <div className="chia_search chia_searchmember d-none">
            <input
              type="text"
              className="chia_searchmemberid text-center"
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
              className="chia_searchbtn chia_memberidbtn"
              onClick={() => {
                searchItem()
              }}
            >
              送出
            </button>
          </div>

          <div
            className="chia_rankings chia_botannobgc"
            onClick={() => {
              RankingChange()
            }}
            style={{ cursor: 'pointer' }}
          >
            評分
          </div>
          <div
            className="chia_rankings chia_botannobgc"
            onClick={() => {
              TimeChange()
            }}
            style={{ cursor: 'pointer' }}
          >
            時間
          </div>
        </div>
      </div>
    </>
  )

  let pageitems = []
  for (let i = 1; i < listPerPage + 1; i++) {
    pageitems.push(i)
  }

  const List = (
    <>
      <div className="chia_reviewbody col-8">
        <div className="chia_reviewtable">
          <table className="chia_table table">
            <thead className="chia_reviewtablehead">
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

            <tbody className="chia_reviewtablebody">
              {fliterdata.map((v, i) => (
                <tr className="chia_reviewtr" key={i}>
                  <td scope="col" className="chia_reviewtd">
                    <p className="chia_content ">{v.review_nickname}</p>
                  </td>
                  <td scope="col" className="chia_reviewtd">
                    <p className="chia_content">{v.category}</p>
                  </td>
                  <td
                    className="chia_title chia_reviewtd chia_content"
                    scope="col"
                  >
                    <Switch>
                      <p className="chia_content">
                        <NavLink to={`${props.path}/${v.sid}`}>
                          {v.booktitle}
                        </NavLink>
                      </p>
                    </Switch>
                  </td>
                  <td scope="col" className="chia_reviewtd">
                    <p className="chia_content">{v.ranking}&#9733;</p>
                  </td>

                  <td scope="col" className="chia_reviewtd">
                    <p className="chia_content">{v.like.length}</p>
                  </td>
                  <td scope="col" className="chia_reviewtd">
                    <p className="chia_content">{v.creatdate}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReviewPagination
            totalPages={totalPages}
            page={page}
            setPage={setPage}
          />
          {/* {PageNum} */}
        </div>
      </div>
    </>
  )

  const withnoresult = (
    <>
      <div className="mx-auto mt-5">
        <h6 className="text-center my-5">是不是打錯字了呢?</h6>
      </div>
    </>
  )

  return (
    <>
      {Searchbar}
      {fliterdata.length > 0 ? List : withnoresult}
    </>
  )
}

export default withRouter(Reviewlistbody)
