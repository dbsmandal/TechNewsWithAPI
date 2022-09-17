import React from 'react'
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'
import { useGlobalContext } from './Context'
const App = () => {
  const data =useGlobalContext();
  return (
    <>
      <h2>Dbsmandal Tech news website {data}</h2>
      <Search/>
      <Pagination/>
      <Stories/>

    </>
  )
}

export default App
