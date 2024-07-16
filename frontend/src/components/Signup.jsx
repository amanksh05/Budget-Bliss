import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { register } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      navigate('/login');
    } catch (error) {
      console.error('Error signing up', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className='flex justify-center flex-col items-center bg-slate-50 mt-11 mx-auto  py-4 px-10 max-w-min rounded-lg' >
      <h2 className='font-semibold text-black'>Register to continue</h2>
      <form onSubmit={handleSubmit} className='w-full mt-4'>
      <div className='flex flex-col justify-center items-center gap-3'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='w-80 pl-4 py-2 text-base font-normal  rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 '
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='w-80 pl-4 py-1 text-base  rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 '
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='w-80 pl-4 py-1 text-base  rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 '
        />
        <p className="mt-2 text-center text-sm text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        <button type="submit" className='bg-black text-base px-5 py-2 rounded-md w-80'>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
