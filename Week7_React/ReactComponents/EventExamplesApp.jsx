import React, { useState } from 'react';

const EventExamplesApp = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  // Method to increment counter
  const incrementValue = () => {
    setCounter(prev => prev + 1);
  };

  // Method to say hello with static message
  const sayHello = () => {
    setMessage('Hello! Welcome to React Events!');
  };

  // Method to handle increment button (multiple methods)
  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  // Method to decrement counter
  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  // Method to say welcome with argument
  const sayWelcome = (welcomeMsg) => {
    setMessage(`${welcomeMsg} to React Events!`);
  };

  // Synthetic event handler
  const handleOnPress = (e) => {
    e.preventDefault();
    setMessage('I was clicked');
  };

  // Currency converter methods
  const handleInputChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = (e) => {
    if (rupees && !isNaN(rupees)) {
      // Conversion rate: 1 EUR = 90 INR (approximate)
      const convertedEuros = (parseFloat(rupees) / 90).toFixed(2);
      setEuros(convertedEuros);
    } else {
      alert('Please enter a valid amount in rupees');
    }
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '30px', 
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333', 
        marginBottom: '40px',
        fontSize: '2.5rem'
      }}>
        React Event Handling Examples
      </h1>

      {/* Counter Section */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        marginBottom: '30px', 
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#495057', marginBottom: '20px' }}>Counter Example</h2>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            fontSize: '3rem', 
            color: '#007bff', 
            margin: '20px 0',
            fontWeight: 'bold'
          }}>
            {counter}
          </h3>
          <div style={{ gap: '15px', display: 'flex', justifyContent: 'center' }}>
            <button 
              onClick={handleIncrement}
              style={{
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              Increment
            </button>
            <button 
              onClick={handleDecrement}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>

      {/* Say Welcome Section */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        marginBottom: '30px', 
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#495057', marginBottom: '20px' }}>Welcome Message Example</h2>
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={() => sayWelcome('Welcome')}
            style={{
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            Say Welcome
          </button>
        </div>
      </div>

      {/* Synthetic Event Section */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        marginBottom: '30px', 
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#495057', marginBottom: '20px' }}>Synthetic Event Example</h2>
        <div style={{ textAlign: 'center' }}>
          <button 
            onPress={handleOnPress}
            onClick={handleOnPress}
            style={{
              backgroundColor: '#6f42c1',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Click Me (OnPress Event)
          </button>
        </div>
      </div>

      {/* Message Display */}
      {message && (
        <div style={{ 
          backgroundColor: '#d4edda', 
          border: '1px solid #c3e6cb',
          color: '#155724',
          padding: '20px', 
          marginBottom: '30px', 
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '1.2rem',
          fontWeight: 'bold'
        }}>
          {message}
        </div>
      )}

      {/* Currency Converter Component */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#495057', marginBottom: '20px', textAlign: 'center' }}>
          Currency Converter (INR to EUR)
        </h2>
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ 
              display: 'block', 
              marginBottom: '10px', 
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#495057'
            }}>
              Enter amount in Indian Rupees:
            </div>
            <input
              type="number"
              value={rupees}
              onChange={handleInputChange}
              placeholder="Enter amount in INR"
              style={{
                padding: '12px',
                fontSize: '1rem',
                border: '2px solid #ced4da',
                borderRadius: '5px',
                width: '300px',
                textAlign: 'center'
              }}
            />
          </div>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#fd7e14',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            Convert to EUR
          </button>
          
          {euros && (
            <div style={{
              backgroundColor: '#f8f9fa',
              border: '2px solid #007bff',
              padding: '20px',
              borderRadius: '10px',
              marginTop: '20px'
            }}>
              <h3 style={{ color: '#007bff', margin: 0 }}>
                ₹{parseFloat(rupees).toLocaleString()} = €{euros}
              </h3>
              <p style={{ color: '#6c757d', margin: '10px 0 0 0' }}>
                Exchange Rate: 1 EUR = 90 INR (approximate)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventExamplesApp;