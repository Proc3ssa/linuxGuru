import React from 'react';
import commandsData from './commands.json'; 
import { useNavigate } from 'react-router-dom';
const Commands = () => {
const navigate = useNavigate();
  function handleclick(e){
    const command = e.target.textContent

    navigate(`/command`, { state: { cmd: command } });
    // window.location.href = `/command?cmd=${command}`
  }

  return (
    <div className='command'>
        <h1 style={{color:"white", textAlign:"center"}}>Commands</h1>
      
      <div className="commands">
        <ul>
          {commandsData.commands.map((command, index) => (
            <button onClick={handleclick} >{command.name}</button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Commands;
