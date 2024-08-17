import React from 'react';
import commandsData from './commands.json'; 
const Commands = () => {

  function handleclick(e){
    const command = e.target.textContent
    window.location.href = `/command?cmd=${command}`
  }

  return (
    <div className='command'>
        <h1 style={{color:"white", textAlign:"center"}}>Commands</h1>
      
      <div className="commands">
        <ul>
          {commandsData.commands.map((command, index) => (
            <button onClick={handleclick} >{command}</button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Commands;
