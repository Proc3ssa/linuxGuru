import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { DNA } from 'react-loader-spinner'
import logo from '../assets/images/logo.png'

const Index = () => {

  const navigate = useNavigate();
 useEffect(()=>{
    setTimeout(()=>{
      navigate('/home');
    }, 2000)
 },[])

  return (
    <div className='welcome'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
  />

          <p>By</p>
          <h3>P R O C E S S O R</h3>
    </div>
  )
}

export default Index
