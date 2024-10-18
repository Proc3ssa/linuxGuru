import React from 'react'

import { CiSearch } from "react-icons/ci";

const Search = () => {

  const mouseenter = () =>{
    const inputbox = document.getElementById('searchbtn');
    const searchbox = document.getElementById('searchbox');
    inputbox.style.height = searchbox.style.height;
  }

  // mouseenter();

  return (
    <div className='search'>
        <input type="text" id="searchbox" onMouseEnter={mouseenter} placeholder='./search for commands' />
      <button id="searchbtn" style={{
        color:'black', 
        fontSize:'20px',
        backgroundColor: 'white',
        border: "1px solid white",
        height:"42px",
        borderRadius : "0 30px 30px 0",
        width: "50px"
        }} ><CiSearch /></button>


    </div>
  )
}

export default Search
