import React from 'react'
import "./App.css"
import Footer from './Footer'
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'
const App = () => {
  return (
    <>
      
      <Search/>
      <Pagination/>
      <Stories/>
      <Footer/> 

    </>
  )
}

export default App
