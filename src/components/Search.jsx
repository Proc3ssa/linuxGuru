import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import commands from '../components/commands.json';
import { CiSearch } from 'react-icons/ci';

const Search = () => {
  const [result, setResult] = useState(null);
  const [cmd, setCmd] = useState('');
  const [searched, setSearched] = useState(false); 
  const search = () => {
    const res = commands.find((command) => command.name === cmd);
    setResult(res || null);
    setSearched(true); 
  };

  return (
    <div className='searchs'>
      <div className="search">
        <input
          type="text"
          id="searchbox"
          value={cmd}
          placeholder="./search for commands"
          onChange={(e) => {
            setCmd(e.target.value);
            setSearched(false); 
          }}
        />
        <button
          type="submit"
          id="searchbtn"
          style={{
            color: 'black',
            fontSize: '20px',
            backgroundColor: 'white',
            border: '1px solid white',
            height: '42px',
            borderRadius: '0 30px 30px 0',
            width: '50px',
          }}
          onClick={search}
        >
          <CiSearch />
        </button>
      </div>

      <div className="results">
        {searched && ( 
          result ? (
            <div>
            
            <div className="commands">
            <Link to={`/command/${result.name}`}> <button>{result.name}</button></Link>
            </div>
              
            </div>
          ) : (
            <p style={{ color: 'red' }}>No command found</p>
          )
        )}
      </div>
    </div>
  );
};

export default Search;
