import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const AdminLoginModal = ({ onClose, onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate function for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the admin login endpoint
      const response = await axios.post('http://localhost:5000/api/admin/login', credentials);
      const { token } = response.data;

      // Store the token in localStorage for future requests
      localStorage.setItem('authToken', token);

      // Call the onLogin function passed from the parent
      onLogin(token);

      // Close the modal
      onClose();

      // Redirect to the /admin page after successful login
      navigate('/admin');
    } catch (error) {
      // Handle login error
      setErrorMessage(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginModal;
