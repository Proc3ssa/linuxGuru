import React, { useEffect, useState } from 'react';

const url = new URL (window.location.href);
const params = new URLSearchParams(url.search);
const command = params.get('cmd');

const CommandData = () => {

  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  //fetching

  useEffect(()=>{
    const fetching = async () => {

      try {
        const FETCH = await fetch(`http://localhost:666/?id=${command}`, 
          {
          method : "GET",
          header : {
            'Content-Type' : 'application/json'
          }
        });



        const result = await FETCH.json();
        if(result.status){
          setData(result.data);
          console.log(result);
        }
        else{
          setError(true);

        }
        
      } catch (error) {
        
      }
    }
    fetching();
  },[command])

 if(error) { 
  return (
    <div className='commandData'>
        <h1 style={{ color: "white" }}>{command}</h1>
        <div className="data">
          <p><a style={{ color: "red" }}>┌─[</a><span style={{ color: "green" }}>processor</span><span style={{ color: "yellow" }}>@</span><span style={{ color: "cyan" }}>linux</span><a style={{ color: "red" }}>]─[<span style={{ color: "#07ad5a" }}>~</span>]</a></p>
          <p style={{ marginTop: "-12px" }}><a style={{ color: "red" }}>└──$</a> {`bash: ${command} not found`}</p>
        </div>
      </div>
  )
}

  else{
    return (
        <div className='commandData'>
          <h1 style={{ color: "white" }}>{data.name}</h1>
          <div className="data">
            <p><a style={{ color: "red" }}>┌─[</a><span style={{ color: "green" }}>processor</span><span style={{ color: "yellow" }}>@</span><span style={{ color: "cyan" }}>linux</span><a style={{ color: "red" }}>]─[<span style={{ color: "#07ad5a" }}>~</span>]</a></p>
            <p style={{ marginTop: "-12px" }}><a style={{ color: "red" }}>└──$</a> {command}</p>
    
            <p><i style={{ color: "#6466ec" }}>Description: </i>{data.description}</p>
            <i>Usage</i>
            
              {
                <ol>
                <li  style={{ color: "white" }}>{data.examples0}</li>

                <li  style={{ color: "white" }}>{data.examples1}</li>

                <li  style={{ color: "white" }}>{data.examples2}</li>

                <li  style={{ color: "white" }}>{data.examples3} </li>

                <li  style={{ color: "white" }}>{data.examples4} </li>
                 </ol>
              }
           
          </div>
        </div>
      );
    
    
  }
}

export default CommandData


        
        

  
  
    
  

 
 
