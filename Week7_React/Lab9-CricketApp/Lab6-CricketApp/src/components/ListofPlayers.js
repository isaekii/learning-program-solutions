import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 92 },
    { name: "MS Dhoni", score: 78 },
    { name: "Hardik Pandya", score: 65 },
    { name: "Shikhar Dhawan", score: 88 },
    { name: "KL Rahul", score: 45 },
    { name: "Rishabh Pant", score: 52 },
    { name: "Jasprit Bumrah", score: 25 },
    { name: "Mohammed Shami", score: 18 },
    { name: "Yuzvendra Chahal", score: 35 },
    { name: "Ravindra Jadeja", score: 75 }
  ];

  const lowScorePlayers = players.filter(player => player.score < 70);

  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    margin: '20px'
  };

  const titleStyle = {
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px'
  };

  const sectionStyle = {
    marginBottom: '30px'
  };

  const playerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    margin: '5px 0',
    backgroundColor: '#ecf0f1',
    borderRadius: '5px',
    border: '1px solid #bdc3c7'
  };

  const scoreStyle = (score) => ({
    fontWeight: 'bold',
    color: score >= 70 ? '#27ae60' : '#e74c3c'
  });

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>List of Players Component</h2>
      
      <div style={sectionStyle}>
        <h3 style={{color: '#2980b9'}}>All Players (Using map() function):</h3>
        {players.map((player, index) => (
          <div key={index} style={playerStyle}>
            <span>{player.name}</span>
            <span style={scoreStyle(player.score)}>{player.score}</span>
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <h3 style={{color: '#e74c3c'}}>Players with Score Below 70 (Using filter() with arrow functions):</h3>
        {lowScorePlayers.map((player, index) => (
          <div key={index} style={playerStyle}>
            <span>{player.name}</span>
            <span style={scoreStyle(player.score)}>{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListofPlayers;