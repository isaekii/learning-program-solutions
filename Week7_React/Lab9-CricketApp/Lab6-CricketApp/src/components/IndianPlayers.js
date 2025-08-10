import React from 'react';

const IndianPlayers = () => {
  const teamPlayers = [
    "Virat Kohli", "Rohit Sharma", "MS Dhoni", "Hardik Pandya", 
    "Shikhar Dhawan", "KL Rahul", "Rishabh Pant", "Jasprit Bumrah"
  ];

  const T20players = ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "Hardik Pandya"];
  const RanjiTrophyPlayers = ["Cheteshwar Pujara", "Ajinkya Rahane", "Hanuma Vihari", "Wriddhiman Saha"];

  const [first, second, third, fourth, fifth, sixth, seventh, eighth] = teamPlayers;
  
  const oddPlayers = [first, third, fifth, seventh];
  const evenPlayers = [second, fourth, sixth, eighth];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    margin: '20px'
  };

  const titleStyle = {
    color: '#e67e22',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px'
  };

  const sectionStyle = {
    marginBottom: '25px',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #dee2e6'
  };

  const playerListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
    marginTop: '10px'
  };

  const playerItemStyle = {
    padding: '8px 12px',
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    textAlign: 'center'
  };

  const oddTeamStyle = {
    ...playerItemStyle,
    backgroundColor: '#d1ecf1',
    borderColor: '#bee5eb'
  };

  const evenTeamStyle = {
    ...playerItemStyle,
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Indian Players Component</h2>
      
      <div style={sectionStyle}>
        <h3 style={{color: '#17a2b8', marginBottom: '15px'}}>Destructuring - Odd Team Players:</h3>
        <div style={playerListStyle}>
          {oddPlayers.map((player, index) => (
            <div key={index} style={oddTeamStyle}>
              {player}
            </div>
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <h3 style={{color: '#28a745', marginBottom: '15px'}}>Destructuring - Even Team Players:</h3>
        <div style={playerListStyle}>
          {evenPlayers.map((player, index) => (
            <div key={index} style={evenTeamStyle}>
              {player}
            </div>
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <h3 style={{color: '#6f42c1', marginBottom: '15px'}}>Merged Players (T20 + Ranji Trophy using Spread Operator):</h3>
        <div style={{marginBottom: '10px'}}>
          <strong>T20 Players:</strong> {T20players.join(', ')}
        </div>
        <div style={{marginBottom: '10px'}}>
          <strong>Ranji Trophy Players:</strong> {RanjiTrophyPlayers.join(', ')}
        </div>
        <div style={{marginTop: '15px'}}>
          <strong>Merged Team:</strong>
          <div style={playerListStyle}>
            {mergedPlayers.map((player, index) => (
              <div 
                key={index} 
                style={{
                  ...playerItemStyle,
                  backgroundColor: index < T20players.length ? '#fff3cd' : '#d1ecf1',
                  borderColor: index < T20players.length ? '#ffeaa7' : '#bee5eb'
                }}
              >
                {player}
                <small style={{display: 'block', fontSize: '12px', color: '#6c757d'}}>
                  {index < T20players.length ? '(T20)' : '(Ranji)'}
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianPlayers;