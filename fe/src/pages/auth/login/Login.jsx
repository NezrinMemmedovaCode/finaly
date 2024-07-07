import React, { useState } from 'react';
import '../Auth.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);  // Store token in localStorage
        alert('Login successful');
        window.location.href = '/';  // Redirect to home page or the page the user tried to access
      } else {
        setError('Login failed');
      }
    } catch (error) {
      console.error('Error logging in user:', error);
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container login">
      <div className="auth-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="btn-group">
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          <div className="auth-links">
            <a href="/Register">Don't have an account? Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
