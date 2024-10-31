import React, { useState } from 'react';
import MediaList from './components-js/MediaList.js';
import Login from './components-js/Login.js';
import './App.css'

function App() {
  // State to track whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = (status) => {
    setIsLoggedIn(status); 
  };

  return (
    <div className="App">
      <h1>Media Content Management</h1>
      {/* If logged in, show the media list, otherwise show the login screen */}
      {isLoggedIn ? (
        <MediaList />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
