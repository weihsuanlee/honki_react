// 套件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// pages
import Home from './chia/pages/Home'
import Product from './wei/pages/Product'
import ProductDetail from './wei/pages/ProductDetail'
import Login from './yu/pages/Login'
import Register from './yu/pages/Register'

// components(navbar, footer..)
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'

// react-icons Fontawesome 對齊
import { IconContext } from 'react-icons'

function App() {
  return (
    <Router>
      <>
        <BackToTop />
        <Navbar />
        <MainContent>
          <ScrollToTop>
            <IconContext.Provider
              value={{ style: { transform: 'translateY(-2px)' } }}
            >
              <Switch>
                <Route path="/member">
                  <Login />
                </Route>
                <Route path="/cart">
                  <Home />
                </Route>
                <Route path="/activity">
                  <Home />
                </Route>
                <Route path="/old-seasons">
                  <Home />
                </Route>
                <Route path="/reviews">
                  <Home />
                </Route>
                <Route path="/used-books">
                  <Home />
                </Route>
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
            </IconContext.Provider>
          </ScrollToTop>
        </MainContent>
        <Footer />
      </>
    </Router>
  )
}

export default App
