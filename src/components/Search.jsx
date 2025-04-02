import React from 'react'

const Search = ({searchTerm, setSearchterm}) => {
  return (
    <div className='search'>
        <img src="search.svg" alt="search" />
        <input type="text" placeholder='Search Movie' value={searchTerm} onChange={(event) => setSearchterm(event.target.value)} />
    </div>
  )
} 

export default Search