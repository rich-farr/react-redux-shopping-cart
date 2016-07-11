import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import ProductList from './product-list.jsx'
import ProductDetail from './product-detail.jsx'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={ProductList} />
    <Route path='/products/:id' component={ProductDetail}/>
  </Router>
)
