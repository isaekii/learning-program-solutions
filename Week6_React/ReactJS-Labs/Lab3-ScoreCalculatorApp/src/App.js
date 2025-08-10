import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        name="John Doe"
        school="ABC High School"
        total={450}
        goal={500}
      />
      <CalculateScore 
        name="Jane Smith"
        school="XYZ Academy"
        total={380}
        goal={400}
      />
    </div>
  );
}

export default App;