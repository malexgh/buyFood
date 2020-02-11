import React, { useState } from 'react';
import api from '../services/api';
import './Login.scss';
import logo from '../logo.svg';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(event) {
    event.preventDefault();
    setError('');
    try {
      const res = await api.post('/api/login', {
        email, password
      });
      console.log(res);
      if (res.status === 200) {
        const token = res.data.token;
        console.log(token);
        history.push('/main', { token });
      }
      else {
        setError('Login failed');
      }
    } catch (error) {
      console.log(error);
      setError('Login failed');
    }
  }

  return (
    < div className="Login">
      <header>
        <img src={logo} alt="Logo" className="logo"></img>
      </header>
      <main >
        <form onSubmit={handleLogin}>
          <label htmlFor="email"><b>Email</b></label>
          <input type="email"
            className="input-login"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="password"><b>Password</b></label>
          <input type="password"
            className="input-login"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit" >
            Login
          </button>
        </form>
      </main>
      {error && <footer >
        <p>{error}</p>
      </footer>}
    </ div>
  );
}
