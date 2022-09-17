import React from 'react'
import "./App.css"
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'
const App = () => {
  return (
    <>
      <h2>Dbsmandal Tech news website </h2>
      <Search/>
      <Pagination/>
      <Stories/>

    </>
  )
}

export default App
