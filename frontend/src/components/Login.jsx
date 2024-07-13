import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {login} = useGlobalContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login(email,password);
      navigate('/dashboard');
      console.log("Login Success");
    } catch (error) {
      console.error('Error logging in', error);
      alert('Login failed. Please check your credentials and try again.');
    }
    // console.log(res.data.token);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <p className='ml-2 mt-2 text-center text-base text-black/60'>
          Don&apos;t have an account?&nbsp;
          <Link
            to={"/signup"}
            className='font-medium text-primary transition-all duration-200 hover:underline'
          >
            Sign Up
          </Link>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
