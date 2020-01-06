import React, { useState } from 'react';
import './Login.scss';
import logo from '../logo.svg';

const baseUrl = '/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(true);

  async function handleLogin(event) {
    setError('');
    const response = await fetch(`${baseUrl}/sessions/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    //console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data.token);
    }
    else {
      setError('Login failed');
    }
  }

  return (
    <div className="Login">
      <header className="Login-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo"></img>
        </div>
        <label htmlFor="email"><b>Email</b></label>
        <input type="email"
          className="input-email"
          name="email"
          value={email}
          placeholder="Enter Email"
          onChange={(event) => setEmail(event.target.value)}>
        </input>
        <label htmlFor="password"><b>Password</b></label>
        <input type="password"
          className="input-password"
          name="password"
          value={password}
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}>
        </input>
        <button className="button-login" onClick={handleLogin}>
          Login
        </button>
        <label>
          <input type="checkbox"
            className="regular-checkbox"
            name="remember"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}>
          </input>
          Remember me
        </label>
      </header>
      {error && <footer className="Login-footer">
        <p>{error}</p>
      </footer>}
    </div>
  );
}

export default Login;
