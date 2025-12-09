import React, { useState } from 'react';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [softwareBackground, setSoftwareBackground] = useState('');
  const [hardwareBackground, setHardwareBackground] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          software_background: softwareBackground ? JSON.parse(softwareBackground) : {},
          hardware_background: hardwareBackground ? JSON.parse(hardwareBackground) : {},
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Signup successful! You can now sign in.');
        // Clear form
        setUsername('');
        setEmail('');
        setPassword('');
        setSoftwareBackground('');
        setHardwareBackground('');
      } else {
        setMessage(`Signup failed: ${data.detail}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('An error occurred during signup.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <textarea
        placeholder="Software Background (JSON, e.g., {'languages': ['Python', 'JS']})"
        value={softwareBackground}
        onChange={(e) => setSoftwareBackground(e.target.value)}
        rows="3"
      ></textarea>
      <textarea
        placeholder="Hardware Background (JSON, e.g., {'platforms': ['ROS2', 'Jetson']})"
        value={hardwareBackground}
        onChange={(e) => setHardwareBackground(e.target.value)}
        rows="3"
      ></textarea>
      <button type="submit">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default SignupForm;