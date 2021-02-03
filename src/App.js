// 套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// pages
import Product from './wei/pages/Product'
import ProductDetail from './wei/pages/ProductDetail'
import Home from './pages/Home'

// components(navbar, footer..)
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <>
        {/* <Navbar/> */}
        <Link to="/">Home</Link>
        <Link to="/product">所有商品</Link>
        <Link to="/product-detail">商品內頁</Link>
        <MainContent>
          <ScrollToTop>
            <Switch>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/product-detail">
                <ProductDetail />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </ScrollToTop>
        </MainContent>
        <Footer />
      </>
    </Router>
  )
}

export default App
