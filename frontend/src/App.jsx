import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPanel from './components/admin/AdminPanel';
import AdminLoginModal from './components/admin/AdminLoginModal';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<AdminLoginModal />} />
          <Route path="/admin" element={<AdminPanel />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;