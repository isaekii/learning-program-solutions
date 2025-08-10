import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  const toggleFlag = () => setFlag(!flag);

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '30px'
  };

  const buttonStyle = {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Cricket App - ES6 Features Demo</h1>
      <button style={buttonStyle} onClick={toggleFlag}>
        Toggle Component (Flag: {flag.toString()})
      </button>
      
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;