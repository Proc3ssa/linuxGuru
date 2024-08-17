import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='search'>
        <input type="text"  placeholder='./search for commands'/>
      <CiSearch style={{
        color:'black', 
        fontSize:'20px',
        backgroundColor: 'white',
        border: "1px solid white",
        height:"40px",
        borderRadius : "0 30px 30px 0",
        width: "50px"
        }} />


    </div>
  )
}

export default Search
