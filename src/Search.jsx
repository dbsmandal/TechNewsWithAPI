import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const SearchData=useGlobalContext();
  return (
    <div>
      <h3>Welcome Search funtionality {SearchData}</h3>
    </div>
  )
}

export default Search
