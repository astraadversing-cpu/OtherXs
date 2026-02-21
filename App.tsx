import React, { useState, useEffect } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userEmail = "ClienteX"; // Changed to ClienteX

  useEffect(() => {
    // Check session storage for persistence during refresh (optional, but good UX)
    const sessionAuth = sessionStorage.getItem('otherx_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('otherx_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('otherx_auth');
  };

  return (
    <div className="font-sans antialiased">
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} userEmail={userEmail} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;