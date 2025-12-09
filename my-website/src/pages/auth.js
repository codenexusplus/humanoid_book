import React, { useState } from 'react';
import Layout from '@theme/Layout';
import SigninForm from '../components/Auth/SigninForm';
import SignupForm from '../components/Auth/SignupForm';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('access_token'));

  const handleLogin = (newToken) => {
    setToken(newToken);
    // Optionally redirect or show user info
    alert('Logged in successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setToken(null);
    alert('Logged out!');
  };

  return (
    <Layout title="Authentication" description="Sign up or Sign in to the Physical AI Textbook">
      <main>
        <div style={{ margin: 'auto', maxWidth: '600px', padding: '20px', textAlign: 'center' }}>
          {token ? (
            <div>
              <h2>Welcome back!</h2>
              <p>You are currently logged in.</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <>
              {isLogin ? (
                <SigninForm onLogin={handleLogin} />
              ) : (
                <SignupForm />
              )}
              <p style={{ marginTop: '20px' }}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <a href="#" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </a>
              </p>
            </>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default AuthPage;