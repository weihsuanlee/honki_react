// 套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// pages
import ProductCategory from './pages/ProductCategory'
import Home from './pages/Home'

// components(navbar, footer..)

function App() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/productcategory">Product Category</Link>
        <Switch>
          <Route path="/productcategory">
            <ProductCategory />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
