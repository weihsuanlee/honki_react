import React from 'react'
// 高階元件樣式(HOC)，增強元件用的
import { withRouter, Link } from 'react-router-dom'
// 中文路徑對照陣列，移出到config/index.js中設定
import { pathnameList, pathnameTextList } from '../config'

function MultiLevelBreadCrumb(props) {
  const { location, match } = props

  //console.log(props)

  // find index
  const findPathnameIndex = (pathname) =>
    pathnameList.findIndex((v, i) => v === pathname)

  // 有一個項目和二個項目的情況
  const formatText = (index) => {
    if (index === -1) return ''

    // '/產品/嬰兒/初生兒' -> ['','產品','嬰兒', '初生兒']
    const textArray = pathnameTextList[index].split('/')

    // '/product/baby/birth' -> ['','product','baby', 'birth']
    const pathArray = pathnameList[index].split('/')

    const listArray = textArray.map((v, i, array) => {
      if (i === 0) return ''

      if (i === array.length - 1) {
        return (
          <li
            key={i}
            className="breadcrumb-item active breadcrumb-honki"
            aria-current="page"
          >
            {v}
          </li>
        )
      }

      return (
        <li key={i} className="breadcrumb-item breadcrumb-honki">
          <Link to={pathArray.slice(0, i + 1).join('/')}>{v}</Link>
        </li>
      )
    })

    return listArray
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item breadcrumb-honki">
            <Link to="/">首頁</Link>
          </li>
          {formatText(findPathnameIndex(location.pathname))}
          {formatText(findPathnameIndex(match.path))}
        </ol>
      </nav>
    </>
  )
}

export default withRouter(MultiLevelBreadCrumb)
