import React from 'react'
import history from './utils/history'
import { Router, Route, Switch } from "react-router-dom"

import HambugerList from "./pages/HambugerList/HambugerList"
import Login from './pages/Login/Login'
import Orders from './pages/Orders/Orders'
import Checkout from './pages/Checkout/Checkout'

function BrowserRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HambugerList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/order" component={Orders} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  )
}

export default BrowserRouter
