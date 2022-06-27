import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Error404 } from '../pages/Error404'

const RouterApp = () => (
  <Router basename='/portfolio'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<Error404 />} />
    </Routes>
  </Router>
)

export { RouterApp }
