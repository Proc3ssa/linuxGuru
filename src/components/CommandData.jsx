import React, {useEffect, useState} from 'react'
import Commanddata from './commands.json'

const CommandData = ({command="Command"}) => {

  

  let DATA = Commanddata.commands.find(item => item.name === command)

  if(DATA){
    command = DATA.name
  }
  else{
    
  return(
    <div className='commandData'>
    <h1 style={{color:"white"}}>{command}</h1>
    <div className="data">
    <p><a style={{color:"red"}}>┌─[</a><span style={{color:"green"}}>processor</span><span style={{color:"yellow"}}>@</span><span style={{color:"cyan"}}>linux</span><a style={{color:"red"}}>]─[<span style={{color:"#07ad5a"}}>~</span>]</a></p>
    <p style={{marginTop:"-12px"}}><a style={{color:"red"}}>└──$</a> {`bash: ${command} not found`}</p>
    </div>
    
  
</div>)
  }
            
    

  return (
    <div className='commandData'>
        <h1 style={{color:"white"}}>{command}</h1>
        <div className="data">
        <p><a style={{color:"red"}}>┌─[</a><span style={{color:"green"}}>processor</span><span style={{color:"yellow"}}>@</span><span style={{color:"cyan"}}>linux</span><a style={{color:"red"}}>]─[<span style={{color:"#07ad5a"}}>~</span>]</a></p>
        <p style={{marginTop:"-12px"}}><a style={{color:"red"}}>└──$</a> {!DATA ? `bash: ${command} : command not found` : command}</p>

            
              <p><i style={{color:"#6466ec"}}>Description : </i>{DATA.description}</p>
              <i>usage</i>
              <ol>
              {DATA.examples.map(example => <li style={{color:"white"}}>{example}</li>)}
              </ol>
          
        </div>
      
    </div>
  )
}

export default CommandData
