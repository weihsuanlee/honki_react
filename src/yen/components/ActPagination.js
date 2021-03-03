import { Pagination } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ActPagination(props) {
  let urlPage = new URLSearchParams(props.location.search)
  const { totalPages, page, setPage, setQueryPage } = props
  const pagePrev = page - 1 > 0 ? page - 1 : 1
  const pageNext = page + 1 < totalPages ? page + 1 : totalPages

  const [active, setActive] = useState(page)

  useEffect(() => {
    if (!urlPage.has('page')) {
      setPage(1)
      pageButtonClick(1)
      setActive(1)
    }
  }, [urlPage])

  function pageButtonClick(newPage) {
    if (urlPage.has('page')) {
      urlPage.set('page', newPage)
    } else {
      urlPage.append('page', newPage)
    }
    const queryPage = {
      pathname: props.match.url,
      search: '?' + urlPage.toString(),
    }
    setQueryPage(queryPage)
    props.history.push(queryPage)
    // console.log(queryPage)
  }

  //let active = page
  let items = []

  for (let number = page - 5; number <= page + 5; number++) {
    if (number >= 1 && number <= totalPages) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => {
            setPage(number)
            pageButtonClick(number)
            setActive(number)
          }}
        >
          {number}
        </Pagination.Item>
      )
    }
  }

  return (
    <>
      <Pagination>
        <Pagination.Prev
          onClick={() => {
            setPage(pagePrev)
            pageButtonClick(pagePrev)
            setActive(pagePrev)
          }}
        >
          ←
        </Pagination.Prev>
        {page - 5 > 0 ? <Pagination.Ellipsis /> : ''}
        {items}
        {page + 3 < totalPages ? <Pagination.Ellipsis /> : ''}

        <Pagination.Next
          onClick={() => {
            setPage(pageNext)
            pageButtonClick(pageNext)
            setActive(pageNext)
          }}
        >
          →
        </Pagination.Next>
      </Pagination>
    </>
  )
}

export default withRouter(ActPagination)
