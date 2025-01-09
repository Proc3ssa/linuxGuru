import React from 'react';
import commands from './commands.json'; 
import {Link} from 'react-router-dom';
const Commands = () => {

  console.log(commands);

  return (
    <div className='command'>
        <h1 style={{color:"white", textAlign:"center"}}>Commands</h1>
      
      <div className="commands">
        <ul>
          {commands.map((command, index) => (
           <Link to={`/command/${command.name}`}> <button>{command.name}</button></Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Commands;
