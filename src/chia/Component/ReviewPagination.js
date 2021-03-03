import { Pagination } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

function ReviewPagination(props) {
  console.log(props)
  let searchParams = new URLSearchParams(props.location.search)
  const { totalPages, page, setPage } = props
  const pagePrev = page - 1 ? page - 1 : 1
  const pageNext = page + 1 < totalPages ? page + 1 : totalPages

  function pageButtonClick(newPage) {
    if (searchParams.has('page')) {
      searchParams.set('page', newPage)
    } else {
      searchParams.append('page', newPage)
    }
    const queryString = {
      pathname: props.match.url,
      search: '?' + searchParams.toString(),
    }
    // setQueryString(queryString)
    props.history.push(queryString)
    // console.log(queryString)
  }

  let active = page
  let items = []

  for (let number = page - 3; number <= page + 3; number++) {
    if (number >= 1 && number <= totalPages) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => {
            setPage(number)
            pageButtonClick(number)
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
          }}
        >
          ←
        </Pagination.Prev>
        {page - 4 > 0 ? <Pagination.Ellipsis /> : ''}
        {items}
        {page + 3 < totalPages ? <Pagination.Ellipsis /> : ''}

        <Pagination.Next
          onClick={() => {
            setPage(pageNext)
            pageButtonClick(pageNext)
          }}
        >
          →
        </Pagination.Next>
      </Pagination>
    </>
  )
}

export default withRouter(ReviewPagination)
