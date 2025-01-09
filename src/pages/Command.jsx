import React from 'react'
import CommandData from '../components/CommandData'
import { useParams } from 'react-router-dom';

const Command = () => {
   const {commandname} = useParams();




  return (
    <div className='command'>
        
      <CommandData commandname={commandname}/>
    </div>
  )
}

export default Command
