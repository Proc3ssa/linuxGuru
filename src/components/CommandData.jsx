import React from 'react';
import commands from '../components/commands.json';
import { FaGithub, FaX } from 'react-icons/fa6';

const CommandData = ({ commandname }) => {
  // Find the command
  const data = commands.find(command => command.name === commandname);

  // Handle case when the command is not found
  if (!data) {
    return (
      <div className='commandData'>
        <h1 style={{ color: "white" }}>{commandname}</h1>
        <div className="data">
          <p><a style={{ color: "red" }}>┌─[</a><span style={{ color: "green" }}>processor</span><span style={{ color: "yellow" }}>@</span><span style={{ color: "cyan" }}>linux</span><a style={{ color: "red" }}>]─[<span style={{ color: "#07ad5a" }}>~</span>]</a></p>
          <p style={{ marginTop: "-12px" }}><a style={{ color: "red" }}>└──$</a> bash: {commandname} not found</p>
        </div>
      </div>
    );
  }

  // If command is found, display its data
  return (
    <div className='commandData'>
      <h1 style={{ color: "white" }}>{commandname}</h1>
      <div className="data">
        <p><a style={{ color: "red" }}>┌─[</a><span style={{ color: "green" }}>processor</span><span style={{ color: "yellow" }}>@</span><span style={{ color: "cyan" }}>linux</span><a style={{ color: "red" }}>]─[<span style={{ color: "#07ad5a" }}>~</span>]</a></p>
        <p style={{ marginTop: "-12px" }}><a style={{ color: "red" }}>└──$</a> {commandname}</p>

        <p><i style={{ color: "#6466ec" }}>Description: </i>{data.description}</p>
        <i>Usage</i>

        <ol>
          {data.examples.map((example, index) => (
            <li key={index} style={{ color: "white" }}>{example}</li>
          ))}
        </ol>
      </div>

      <p style={{ color: "white" }}>Let's connect</p>
      <p>
        <a href="https://github.com/Proc3ssa"><FaGithub /></a> --
        <a href="https://x.com/processor_911"><FaX /></a>
      </p>
    </div>
  );
};

export default CommandData;
