import React, { useState } from 'react';

function SigninForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    // Using URLSearchParams to match application/x-www-form-urlencoded
    // required by OAuth2PasswordRequestForm
    const formBody = new URLSearchParams();
    formBody.append('username', username);
    formBody.append('password', password);

    try {
      const response = await fetch('/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Login successful!');
        if (onLogin) onLogin(data.access_token);
        // Store token (e.g., in localStorage)
        localStorage.setItem('access_token', data.access_token);
      } else {
        setMessage(`Login failed: ${data.detail}`);
      }
    } catch (error) {
      console.error('Error during signin:', error);
      setMessage('An error occurred during signin.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default SigninForm;