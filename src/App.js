// 套件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Product from './wei/pages/Product'
import ProductDetail from './wei/pages/ProductDetail'
// import Login from './yu/pages/Login'
// import Register from './yu/pages/Register'
// import Menu from './yu/pages/Menu'
// import Edit from './yu/pages/Edit'
// import Bookshelf from './yu/pages/Bookshelf'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'

// react-icons Fontawesome 對齊
import { IconContext } from 'react-icons'

function App() {
  function updateCartNum() {
    let cartItems = JSON.parse(localStorage.getItem('cart5566')) || 0
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].amount
    }
    setCartNum(total)
  }
  useEffect(() => {
    updateCartNum()
  }, [])
  const [navSearchShow, setNavSearchShow] = useState(true)
  // 購物車數量狀態紀錄
  const [cartNum, setCartNum] = useState(0)
  // const [vip, setVip] = useState(false)
  return (
    <Router>
      <>
        <BackToTop />
        <Navbar navSearchShow={navSearchShow} cartNum={cartNum} />
        <MainContent>
          <ScrollToTop>
            <IconContext.Provider
              value={{ style: { transform: 'translateY(-2px)' } }}
            >
              <Switch>
                <Route path="/products/:sid?">
                  <ProductDetail updateCartNum={updateCartNum} />
                </Route>
                <Route path="/:category?">
                  <Product
                    navSearchShow={navSearchShow}
                    setNavSearchShow={setNavSearchShow}
                  />
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
