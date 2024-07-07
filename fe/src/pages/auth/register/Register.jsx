import React, { useState } from 'react';
import '../Auth.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role }),
      });

      if (response.ok) {
        alert('Registration successful');
        window.location.href = '/Login';  // Redirect to login page
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container register">
      <div className="auth-form">
        <h1>Register</h1>
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
          <div className="input-group">
          <label htmlFor="role">Role:</label>
            <div className="custom-select">
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user" data-icon="path-to-user-icon.svg">User</option>
                <option value="admin" data-icon="path-to-admin-icon.svg">Admin</option>
              </select>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="btn-group">
            <button type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
          <div className="auth-links">
            <a href="/Login">Already have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
