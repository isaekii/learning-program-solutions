import React, { useState } from 'react';

const BloggerApp = () => {
  const [currentView, setCurrentView] = useState('home');

  // Sample data for each component
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic Literature",
      publishedYear: 1925,
      rating: 4.2,
      description: "A classic American novel set in the Jazz Age."
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publishedYear: 1960,
      rating: 4.8,
      description: "A gripping tale of racial injustice and childhood innocence."
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Developer",
      publishedDate: "2024-08-01",
      category: "Technology",
      readTime: "5 min read",
      excerpt: "Learn the basics of React and start building modern web applications."
    },
    {
      id: 2,
      title: "The Future of Web Development",
      author: "Jane Tech",
      publishedDate: "2024-08-05",
      category: "Technology",
      readTime: "8 min read",
      excerpt: "Exploring trends and technologies shaping the future of web development."
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "Prof. Smith",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$299",
      enrolledStudents: 1250,
      description: "Master both frontend and backend development technologies."
    },
    {
      id: 2,
      title: "React Advanced Concepts",
      instructor: "Dr. Johnson",
      duration: "8 weeks",
      level: "Advanced",
      price: "$199",
      enrolledStudents: 890,
      description: "Deep dive into advanced React patterns and performance optimization."
    }
  ];

  // Book Details Component
  const BookDetails = () => (
    <div>
      <h2 style={{ color: '#2c3e50', marginBottom: '25px', textAlign: 'center' }}>
        📚 Book Collection
      </h2>
      <div style={{ 
        display: 'grid', 
        gap: '25px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
      }}>
        {books.map((book) => (
          <div 
            key={book.id}
            style={{ 
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              border: '1px solid #e8e8e8',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.closest('div').style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.target.closest('div').style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <h3 style={{ color: '#34495e', margin: 0, fontSize: '1.4rem' }}>{book.title}</h3>
              <span style={{ 
                backgroundColor: '#3498db', 
                color: 'white', 
                padding: '4px 10px', 
                borderRadius: '15px',
                fontSize: '0.8rem'
              }}>
                ⭐ {book.rating}
              </span>
            </div>
            <p style={{ color: '#7f8c8d', margin: '8px 0', fontStyle: 'italic' }}>
              by {book.author}
            </p>
            <p style={{ color: '#95a5a6', margin: '8px 0', fontSize: '0.9rem' }}>
              {book.genre} • {book.publishedYear}
            </p>
            <p style={{ color: '#555', lineHeight: '1.6', margin: '15px 0' }}>
              {book.description}
            </p>
            <button style={{
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Blog Details Component
  const BlogDetails = () => (
    <div>
      <h2 style={{ color: '#8e44ad', marginBottom: '25px', textAlign: 'center' }}>
        📝 Latest Blog Posts
      </h2>
      <div style={{ 
        display: 'grid', 
        gap: '25px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
      }}>
        {blogs.map((blog) => (
          <div 
            key={blog.id}
            style={{ 
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              border: '1px solid #e8e8e8',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.closest('div').style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.target.closest('div').style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <h3 style={{ color: '#8e44ad', margin: 0, fontSize: '1.4rem' }}>{blog.title}</h3>
              <span style={{ 
                backgroundColor: '#e67e22', 
                color: 'white', 
                padding: '4px 10px', 
                borderRadius: '15px',
                fontSize: '0.8rem'
              }}>
                {blog.category}
              </span>
            </div>
            <p style={{ color: '#7f8c8d', margin: '8px 0', fontSize: '0.9rem' }}>
              by {blog.author} • {blog.publishedDate} • {blog.readTime}
            </p>
            <p style={{ color: '#555', lineHeight: '1.6', margin: '15px 0' }}>
              {blog.excerpt}
            </p>
            <button style={{
              backgroundColor: '#9b59b6',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              Read Full Post
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Course Details Component
  const CourseDetails = () => (
    <div>
      <h2 style={{ color: '#e74c3c', marginBottom: '25px', textAlign: 'center' }}>
        🎓 Available Courses
      </h2>
      <div style={{ 
        display: 'grid', 
        gap: '25px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
      }}>
        {courses.map((course) => (
          <div 
            key={course.id}
            style={{ 
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              border: '1px solid #e8e8e8',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.closest('div').style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.target.closest('div').style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <h3 style={{ color: '#e74c3c', margin: 0, fontSize: '1.4rem' }}>{course.title}</h3>
              <span style={{ 
                backgroundColor: '#27ae60', 
                color: 'white', 
                padding: '4px 10px', 
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {course.price}
              </span>
            </div>
            <p style={{ color: '#7f8c8d', margin: '8px 0' }}>
              Instructor: {course.instructor}
            </p>
            <div style={{ display: 'flex', gap: '15px', margin: '10px 0', fontSize: '0.9rem' }}>
              <span style={{ color: '#95a5a6' }}>📅 {course.duration}</span>
              <span style={{ color: '#95a5a6' }}>📊 {course.level}</span>
              <span style={{ color: '#95a5a6' }}>👥 {course.enrolledStudents} enrolled</span>
            </div>
            <p style={{ color: '#555', lineHeight: '1.6', margin: '15px 0' }}>
              {course.description}
            </p>
            <button style={{
              backgroundColor: '#e67e22',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Method 1: Ternary Operator for conditional rendering
  const renderContentTernary = () => {
    return currentView === 'books' ? <BookDetails /> : 
           currentView === 'blogs' ? <BlogDetails /> : 
           currentView === 'courses' ? <CourseDetails /> : 
           <div style={{ textAlign: 'center', padding: '50px', backgroundColor: 'white', borderRadius: '12px' }}>
             <h2 style={{ color: '#34495e' }}>Welcome to Blogger App!</h2>
             <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Select a category from the navigation above to explore content.</p>
           </div>;
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '30px', 
      backgroundColor: '#ecf0f1',
      minHeight: '100vh'
    }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          color: '#2c3e50', 
          margin: '0 0 20px 0', 
          fontSize: '2.8rem',
          fontWeight: 'bold'
        }}>
          📖 Blogger App
        </h1>
        <p style={{ color: '#7f8c8d', fontSize: '1.1rem', margin: 0 }}>
          Discover Books, Blogs, and Courses - All in One Place
        </p>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        {[
          { key: 'home', label: '🏠 Home', color: '#95a5a6' },
          { key: 'books', label: '📚 Books', color: '#3498db' },
          { key: 'blogs', label: '📝 Blogs', color: '#9b59b6' },
          { key: 'courses', label: '🎓 Courses', color: '#e74c3c' }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setCurrentView(item.key)}
            style={{
              backgroundColor: currentView === item.key ? item.color : 'white',
              color: currentView === item.key ? 'white' : item.color,
              border: `2px solid ${item.color}`,
              padding: '12px 24px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '30px' }}>
        {renderContentTernary()}
      </div>

      <div style={{ 
        textAlign: 'center', 
        padding: '20px',
        backgroundColor: '#34495e',
        color: 'white',
        borderRadius: '10px',
        marginTop: '40px'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          This app demonstrates multiple conditional rendering methods in React:
          <br />
          ✅ Ternary Operators • ✅ Switch Statements • ✅ If-Else Statements • ✅ Object Mapping
        </p>
      </div>
    </div>
  );
};

export default BloggerApp;
