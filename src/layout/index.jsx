import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from '../router/router'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <article>
        <AppRoute />
      </article>
      <Footer />
    </BrowserRouter>
  )
}

export default Layout
