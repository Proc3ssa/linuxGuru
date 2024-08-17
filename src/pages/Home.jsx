import React from 'react'
import Nav from '../components/Nav'
import Search from '../components/Search'
import Commands from '../components/Commands'

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <Search />
      <Commands />
    </div>
  )
}

export default Home
