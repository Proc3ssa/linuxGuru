import React, {useEffect, useState} from 'react'

const CommandData = ({command="Command"}) => {

    const [data, setData] = useState();
    useEffect(()=>{

        const fetchdata = async ()=>{
            const res = await fetch(`https://cht.sh/${command}`);
            const dataf = await res.json();
            setData(dataf)
            console.log(dataf)
        }

        fetchdata();

    },[])
   

  return (
    <div className='commandData'>
        <h1 style={{color:"white"}}>{command}</h1>
        <div className="data">
        <p><a style={{color:"red"}}>┌─[</a><span style={{color:"green"}}>processor</span><span style={{color:"yellow"}}>@</span><span style={{color:"cyan"}}>linux</span><a style={{color:"red"}}>]─[<span style={{color:"#07ad5a"}}>~</span>]</a></p>
        <p style={{marginTop:"-12px"}}><a style={{color:"red"}}>└──$</a> {command}</p>

         {data}
        </div>
      
    </div>
  )
}

export default CommandData
