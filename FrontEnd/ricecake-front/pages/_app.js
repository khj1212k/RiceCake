import '../styles/globals.css'
import './Calendars.css'
import React, { useState } from "react";
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp 


