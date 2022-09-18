import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const {query, searchPost}=useGlobalContext();
  return (
    <>
    <h1>Dbsmandal React Project Number 2</h1>

    <form onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input 
        type="text"
        placeholder='Search Here'
        value={query}
        onChange={(e)=>searchPost(e.target.value)}
        />
      </div>
    </form>
    </>
  )
}

export default Search
