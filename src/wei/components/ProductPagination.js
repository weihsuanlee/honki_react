import { Pagination } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

function ProductPagination(props) {
  const { totalPages, page, setPage } = props
  const pagePrev = page - 1 ? page - 1 : 1
  const pageNext = page + 1 < totalPages ? page + 1 : totalPages

  let active = page
  let items = []

  for (let number = page - 3; number <= page + 3; number++) {
    if (number >= 1 && number <= totalPages) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => {
            props.history.push('?page=' + number)
            setPage(number)
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
            props.history.push('?page=' + pagePrev)
            setPage(pagePrev)
          }}
        >
          ←
        </Pagination.Prev>
        {page - 4 > 0 ? <Pagination.Ellipsis /> : ''}
        {items}
        {page + 3 < totalPages ? <Pagination.Ellipsis /> : ''}

        <Pagination.Next
          onClick={() => {
            props.history.push('?page=' + pageNext)
            setPage(pageNext)
          }}
        >
          →
        </Pagination.Next>
      </Pagination>
    </>
  )
}

export default withRouter(ProductPagination)
