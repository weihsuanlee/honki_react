// 套件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages
// import Home from './chia/pages/Home'
//chia section
import HonkiIndex from './chia/Page/HonkiIndex'
import Home from './chia/Page/Mainbook'
import Review from './chia/Page/Chiareviewlist'
//
import Product from './wei/pages/Product'
import ProductDetail from './wei/pages/ProductDetail'
import Login from './yu/pages/Login'
import Register from './yu/pages/Register'
import Menu from './yu/pages/Menu'
import Edit from './yu/pages/Edit'
import Bookshelf from './yu/pages/Bookshelf'
import ActIndex from './yen/pages/ActIndex'
import ActEvent from './yen/pages/ActEvent'
// import ActAllSignUp from './yen/pages/ActAllSignUp'
// import ActCheckSignUp from './yen/pages/ActCheckSignUp'
import OldSeasons from './hans/pages/OldSeasons'
import UsedBooksIndex from './jill/pages/UsedBooksIndex'
import NormalIndex from './jill/pages/NormalIndex'
import NormalInsert from './jill/pages/NormalInsert'
import NormalEdit from './jill/pages/NormalEdit'
import IWantChange from './jill/pages/IWantChange'
import PeopleWantChange from './jill/pages/PeopleWantChange'
import SendIWantChange from './jill/pages/SendIWantChange'
import NormalSuccess from './jill/pages/NormalSuccess'
import RandomIndex from './jill/pages/RandomIndex'
import RandomInsert from './jill/pages/RandomInsert'
import RandomEdit from './jill/pages/RandomEdit'
import RandomSuccess from './jill/pages/RandomSuccess'
import RandSuccessStatus from './jill/pages/RandSuccessStatus'
import Cart from './aw/pages/Cart'
import CartItems from './aw/pages/CartItems'
import CartInput from './aw/pages/CartInput'
import CartConfirm from './aw/pages/CartConfirm'
import CartOrder from './aw/pages/CartOrder'

// components(navbar, footer..)
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
  const [vip, setVip] = useState(false)
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
                <Route path="/" exact component={Home} />
                {/* <Route path="/bookstoreindex" component={Home} /> */}
                <Route path="/member">
                  <Login />
                </Route>
                <Route path="/bookshelf">
                  <Bookshelf vip={vip} setVip={setVip} />
                </Route>
                <Route path="/edit">
                  <Edit />
                </Route>
                <Route path="/menu">
                  <Menu vip={vip} setVip={setVip} />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/cart">
                  <Cart updateCartNum={updateCartNum} />
                </Route>
                <Route path="/CartItems">
                  <CartItems updateCartNum={updateCartNum} />
                </Route>
                <Route path="/CartInput">
                  <CartInput updateCartNum={updateCartNum} />
                </Route>
                <Route path="/CartConfirm">
                  <CartConfirm updateCartNum={updateCartNum} />
                </Route>
                <Route path="/CartOrder">
                  <CartOrder
                    updateCartNum={updateCartNum}
                    setCartNum={setCartNum}
                  />
                </Route>
                <Route path="/activity/event/:sid">
                  <ActEvent />
                </Route>
                <Route path="/activity">
                  <ActIndex />
                </Route>
                {/* <Route path="/allsignup">
                  <ActAllSignUp />
                </Route>
                <Route path="/checksignup">
                  <ActCheckSignUp />
                </Route> */}
                <Route path="/old-seasons">
                  <OldSeasons updateCartNum={updateCartNum} />
                </Route>
                <Route path="/reviews">
                  <Review />
                </Route>
                <Route path="/used-books">
                  <UsedBooksIndex />
                </Route>
                <Route path="/NormalIndex">
                  <NormalIndex />
                </Route>
                <Route path="/NormalInsert">
                  <NormalInsert />
                </Route>
                <Route path="/NormalEdit/:c_sid?">
                  <NormalEdit />
                </Route>
                <Route path="/IWantChange">
                  <IWantChange />
                </Route>
                <Route path="/PeopleWantChange">
                  <PeopleWantChange />
                </Route>
                <Route path="/SendIWantChange/:c_sid?">
                  <SendIWantChange />
                </Route>
                <Route path="/NormalSuccess">
                  <NormalSuccess />
                </Route>
                <Route path="/RandomIndex">
                  <RandomIndex />
                </Route>
                <Route path="/RandomInsert">
                  <RandomInsert />
                </Route>
                <Route path="/RandomEdit">
                  <RandomEdit />
                </Route>
                <Route path="/RandomSuccess/:c_sid?">
                  <RandomSuccess />
                </Route>
                <Route path="/RandSuccessStatus">
                  <RandSuccessStatus />
                </Route>
                <Route path="/products/:sid?">
                  <ProductDetail updateCartNum={updateCartNum} />
                </Route>
                <Route path="/product/:category?">
                  <Product
                    navSearchShow={navSearchShow}
                    setNavSearchShow={setNavSearchShow}
                  />
                </Route>

                {/* <Route exact path="/">
                  <Home />
                </Route> */}
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
