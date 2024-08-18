import React from 'react'
import logo from '../assets/images/logo.png'
import { FaGithub, FaX, FaHashnode } from 'react-icons/fa6'


const About = () => {
  const style ={
    color:"black",
    width:"200px",
    padding: "10px"
  }
  return (
    <div className='about'>
      <img src={logo} alt="logo"/>
      <p>By</p>
      <a href="https://portfolio-two-blond-68.vercel.app/">Faisal</a>

      <div className="info">
      <p>
      <b>Linux Guru</b> is an open-source project designed to provide comprehensive and detailed information about a wide array of Linux commands. Our goal is to create a resource that serves both new users and experienced administrators by offering clear, accessible, and extensive documentation on various Linux commands and utilities.
      </p>

 
       <p>
       <b>Linux Guru</b> includes in-depth descriptions, practical usage examples, and advanced tips for commands that are essential for navigating, managing, and automating tasks within the Linux operating system. Whether you need to understand basic commands like <code>ls</code> for listing directory contents or more complex utilities like <code>awk</code> for text processing, our project aims to be a one-stop resource for all your command-line needs.
        </p> 


        <p>
           <b>Key Features:</b>

           <ul>
            <li><b>Detailed Command Descriptions</b>: Learn what each command does and how it fits into the broader Linux ecosystem.</li>
            <li><b>Practical Usage Examples</b>: See real-world examples of how commands are used in various scenarios, from simple tasks to advanced operations.</li>
            <li><b>Advanced Tips and Tricks</b>: Discover lesser-known options and techniques to enhance your command-line efficiency.</li>
            
           </ul>
        </p>
        </div>

        <div className="socials">
          
          <p style={{color:"blue"}}><b><i>Let's connect</i></b></p>
          <a style={style} href="https://github.com/Proc3ssa">{<FaGithub />}</a>
          <a style={style} href="https://x.com/processor_911">{<FaX />}</a>
          <a style={style} href="https://x.com/processor_911">{<FaHashnode />}</a>
          <p>Faisal &copy; 2024</p>
        </div>

    </div>
  )
}

export default About
