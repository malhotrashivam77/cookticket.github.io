import React, { useState } from 'react';
import AdminLoginModal from './AdminLoginModal'; // Import the modal component

const ParentComponent = () => {
  const [authToken, setAuthToken] = useState(null); // State to store the auth token

  // This function will handle the login and store the token
  const handleLogin = (token) => {
    setAuthToken(token); // Store the received token in the state
    console.log('Logged in with token:', token); // For debugging, you can log the token
  };

  return (
    <div>
      {/* Pass the handleLogin function as the onLogin prop to AdminLoginModal */}
      <AdminLoginModal onClose={() => {}} onLogin={handleLogin} />
    </div>
  );
};

export default ParentComponent;
