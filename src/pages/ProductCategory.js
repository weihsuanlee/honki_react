import { Route, withRouter, NavLink, Switch } from 'react-router-dom'
import Product from './Product'

function ProductCategory(props) {
  // 利用match來取得url與path (記得App元件中的Route要先定義)
  console.log(props.match.pathname)

  const url = props.match.url
  const path = props.match.path
  return (
    <>
      <nav class="nav nav-pills">
        <NavLink
          activeClassName="active"
          className="nav-link"
          to={`${url}/literature`}
        >
          文學小說
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to={`${url}/lifestyle`}
        >
          生活風格
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to={`${url}/arts`}
        >
          藝術設計
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to={`${url}/travel`}
        >
          旅遊
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to={`${url}/business`}
        >
          商業理財
        </NavLink>
      </nav>

      <Switch>
        <Route exact path={path}>
          <h3>請選擇子分類</h3>
        </Route>
        <Route path={`${path}/:type?/:id?`}>
          <Product />
        </Route>
      </Switch>
    </>
  )
}
export default withRouter(ProductCategory)
