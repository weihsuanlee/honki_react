import '../styles/product.scss'
import { FaThLarge, FaListUl, FaHeart, FaSearch } from 'react-icons/fa'
import { Route, withRouter, NavLink, Switch, matchPath } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import ProductBanner from './ProductBanner'
import ProductCards from './ProductCards'

function Product(props) {
  // 利用match來取得url與path (記得App元件中的Route要先定義)
  console.log(props.match.path)

  const url = props.match.url
  const path = props.match.path
  return (
    <>
      <ProductBanner />
      <div className="container-fluid my-5">
        <div className="row justify-content-between align-items-center wei-breadcrumb-section">
          <div className="col-12 col-md-6 ">
            <MultiLevelBreadCrumb />
          </div>
          <div className="col-12 col-md-6 wei-button-group">
            <button className="btn-rounded-dark mr-1">出版日期</button>
            <button className="btn-rounded-dark mr-1">
              <FaListUl />
            </button>
            <button className="btn-rounded-dark">
              <FaThLarge />
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="d-none d-lg-block col-2">
            <div className="wei-categories">
              <h6 className="wei-categories-title">書籍分類</h6>
              <ul>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/lifestyle"
                >
                  <p>生活風格</p>
                </NavLink>

                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/literature"
                >
                  <p>文學小說</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/business"
                >
                  <p>商業理財</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to={`${url}/arts`}
                >
                  <p>藝術設計</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/self-help"
                >
                  <p>心理勵志</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/comics"
                >
                  <p>輕小說 漫畫</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/education"
                >
                  <p>語言考試</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/parenting"
                >
                  <p>親子教養</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/travel"
                >
                  <p>旅遊</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/foods"
                >
                  <p>飲食</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/children"
                >
                  <p>童書</p>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="wei-category"
                  to="/product/foreign"
                >
                  <p>外文書</p>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="col-11 col-lg-10 col-xl-9">
            <Switch>
              <Route exact path={path}>
                <h3>請選擇子分類</h3>
              </Route>
              <Route path={`${path}/:category?`}>
                <ProductCards />
              </Route>
            </Switch>
          </div>
        </div>
        <div className="row justify-content-end ">
          <div className="col-11 col-lg-10 col-xl-9">
            <ul className="pagination wei-pagination">
              <li className="page-item page-left disabled">
                <a
                  className="page-link"
                  href="#pagination"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  ←
                </a>
              </li>
              <li className="page-item page-num page-start active">
                <a className="page-link" href="#pagination">
                  1
                </a>
              </li>
              <li className="page-item page-num">
                <a className="page-link" href="#pagination">
                  2
                </a>
              </li>
              <li className="page-item page-num page-end">
                <a className="page-link" href="#pagination">
                  3
                </a>
              </li>
              <li className="page-item page-right">
                <a
                  className="page-link"
                  href="#pagination"
                  aria-disabled="true"
                >
                  →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Product)
