import React from 'react';
import '../stylesheets/mystyle.css';

const CalculateScore = (props) => {
  const { name, school, total, goal } = props;
  
  const calculateAverage = () => {
    return ((total / goal) * 100).toFixed(2);
  };

  const average = calculateAverage();

  return (
    <div className="score-container">
      <h2 className="student-name">{name}</h2>
      <div className="score-details">
        <p><strong>School:</strong> {school}</p>
        <p><strong>Total Score:</strong> {total}</p>
        <p><strong>Goal:</strong> {goal}</p>
        <p><strong>Average Score:</strong> {average}%</p>
      </div>
      <div className={`result ${average >= 75 ? 'excellent' : average >= 60 ? 'good' : 'needs-improvement'}`}>
        <p>
          {average >= 75 ? 'Excellent Performance!' : 
           average >= 60 ? 'Good Performance!' : 
           'Needs Improvement'}
        </p>
      </div>
    </div>
  );
};

export default CalculateScore;