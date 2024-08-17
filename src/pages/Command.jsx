import React from 'react'
import CommandData from '../components/CommandData'

const Command = () => {
   
const queryString = window.location.search;


const urlParams = new URLSearchParams(queryString);


const cmd = urlParams.get('cmd');



  return (
    <div className='command'>
        
      <CommandData command={cmd}/>
    </div>
  )
}

export default Command
