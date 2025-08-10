import React from 'react';

const OfficeSpaceRentalApp = () => {
  // Create an object of office details
  const office = {
    name: "Premium Business Center",
    rent: 45000,
    address: "123 Business District, Downtown"
  };

  // Create a list of office objects
  const officeList = [
    {
      id: 1,
      name: "Premium Business Center",
      rent: 45000,
      address: "123 Business District, Downtown",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Modern Tech Hub",
      rent: 75000,
      address: "456 Innovation Street, Tech Park",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Executive Suites",
      rent: 35000,
      address: "789 Corporate Avenue, Financial District",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Creative Workspace",
      rent: 65000,
      address: "321 Design Plaza, Creative Quarter",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Heading element */}
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333', 
        marginBottom: '30px',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
        Office Space Rental
      </h1>

      {/* Single office details */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        marginBottom: '30px', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#555', marginBottom: '15px' }}>Featured Office</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop"
            alt="Office Space"
            style={{ 
              width: '300px', 
              height: '200px', 
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
          <div>
            <h3 style={{ color: '#333', margin: '10px 0' }}>Name: {office.name}</h3>
            <p style={{ 
              color: office.rent < 60000 ? 'red' : 'green', 
              fontSize: '1.2rem', 
              fontWeight: 'bold',
              margin: '10px 0'
            }}>
              Rent: ₹{office.rent.toLocaleString()}
            </p>
            <p style={{ color: '#666', margin: '10px 0' }}>Address: {office.address}</p>
          </div>
        </div>
      </div>

      {/* List of offices */}
      <div>
        <h2 style={{ color: '#555', marginBottom: '20px' }}>Available Office Spaces</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '20px' 
        }}>
          {officeList.map((office) => (
            <div 
              key={office.id}
              style={{ 
                backgroundColor: 'white', 
                padding: '20px', 
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.closest('div').style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.target.closest('div').style.transform = 'translateY(0)'}
            >
              <img 
                src={office.image}
                alt={`${office.name} office space`}
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ color: '#333', margin: '10px 0' }}>
                {office.name}
              </h3>
              <p style={{ 
                color: office.rent < 60000 ? 'red' : 'green', 
                fontSize: '1.3rem', 
                fontWeight: 'bold',
                margin: '10px 0'
              }}>
                Rent: ₹{office.rent.toLocaleString()}
              </p>
              <p style={{ color: '#666', margin: '10px 0' }}>
                {office.address}
              </p>
              <button style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                marginTop: '10px'
              }}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeSpaceRentalApp;