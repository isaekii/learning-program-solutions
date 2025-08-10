import React, { useState } from 'react';

const TicketBookingApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Flight data
  const flights = [
    {
      id: 1,
      flightNumber: "AI-101",
      from: "Delhi",
      to: "Mumbai",
      departure: "08:30",
      arrival: "10:45",
      price: "₹5,500",
      duration: "2h 15m"
    },
    {
      id: 2,
      flightNumber: "6E-202",
      from: "Bangalore",
      to: "Chennai",
      departure: "14:20",
      arrival: "15:15",
      price: "₹3,200",
      duration: "55m"
    },
    {
      id: 3,
      flightNumber: "SG-303",
      from: "Kolkata",
      to: "Hyderabad",
      departure: "18:45",
      arrival: "20:30",
      price: "₹4,800",
      duration: "1h 45m"
    }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleBookTicket = (flightNumber) => {
    alert(`Ticket booked for flight ${flightNumber}!`);
  };

  // Guest component
  const GuestPage = () => (
    <div>
      <div style={{ 
        backgroundColor: '#e3f2fd', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#1976d2', margin: '0 0 10px 0' }}>Welcome Guest!</h2>
        <p style={{ color: '#555', margin: 0 }}>
          Browse flight details below. Please login to book tickets.
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
      }}>
        {flights.map((flight) => (
          <div 
            key={flight.id}
            style={{ 
              backgroundColor: 'white', 
              padding: '25px', 
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <h3 style={{ color: '#333', margin: 0 }}>{flight.flightNumber}</h3>
              <span style={{ 
                backgroundColor: '#4caf50', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                Available
              </span>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <div>
                  <strong style={{ fontSize: '1.1rem' }}>{flight.from}</strong>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>{flight.departure}</div>
                </div>
                <div style={{ 
                  flex: 1, 
                  textAlign: 'center', 
                  color: '#999',
                  fontSize: '0.9rem'
                }}>
                  ✈️ {flight.duration}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ fontSize: '1.1rem' }}>{flight.to}</strong>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>{flight.arrival}</div>
                </div>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <span style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                color: '#1976d2' 
              }}>
                {flight.price}
              </span>
              <button
                disabled
                style={{
                  backgroundColor: '#ccc',
                  color: '#666',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'not-allowed',
                  fontSize: '1rem'
                }}
              >
                Login to Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // User component
  const UserPage = () => (
    <div>
      <div style={{ 
        backgroundColor: '#e8f5e8', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#2e7d32', margin: '0 0 10px 0' }}>Welcome Back, User!</h2>
        <p style={{ color: '#555', margin: 0 }}>
          You are now logged in. Book your preferred flights below.
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
      }}>
        {flights.map((flight) => (
          <div 
            key={flight.id}
            style={{ 
              backgroundColor: 'white', 
              padding: '25px', 
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <h3 style={{ color: '#333', margin: 0 }}>{flight.flightNumber}</h3>
              <span style={{ 
                backgroundColor: '#4caf50', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                Available
              </span>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <div>
                  <strong style={{ fontSize: '1.1rem' }}>{flight.from}</strong>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>{flight.departure}</div>
                </div>
                <div style={{ 
                  flex: 1, 
                  textAlign: 'center', 
                  color: '#999',
                  fontSize: '0.9rem'
                }}>
                  ✈️ {flight.duration}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ fontSize: '1.1rem' }}>{flight.to}</strong>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>{flight.arrival}</div>
                </div>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <span style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                color: '#1976d2' 
              }}>
                {flight.price}
              </span>
              <button
                onClick={() => handleBookTicket(flight.flightNumber)}
                style={{
                  backgroundColor: '#ff5722',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '30px', 
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#333', margin: 0, fontSize: '2rem' }}>
          Flight Booking System
        </h1>
        
        {/* Conditional rendering of login/logout buttons */}
        {!isLoggedIn ? (
          <button
            onClick={handleLogin}
            style={{
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            Logout
          </button>
        )}
      </div>

      {/* Conditional rendering of pages */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
};

export default TicketBookingApp;
