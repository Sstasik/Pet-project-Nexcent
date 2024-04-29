import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/userSlice';
import { useAppDispatch } from '../hooks/hooks';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}
const Login: React.FC<LoginProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  if (!isOpen) return null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('login', { email, password });

    dispatch(login({ email, password })).then((action) => {
      localStorage.setItem('accessToken', action.payload.token);
      navigate('/');
      onClose();
    });

    if (!email || !password) {
      alert('Fill all fields');
      return;
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-lime-600/35
      }`}>
      <div className="absolute "></div>
      <form
        className={`bg-slate-200 w-96 p-4 rounded-xl ${
          isOpen ? 'animate-slideCenter' : 'animate-slideTop'
        }`}
        onSubmit={onSubmit}>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl mb-[10px]">Login</h1>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 p-1 rounded-md outline-0"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-4 p-1 rounded-md outline-0"
          />
        </div>
        <div className="flex justify-evenly">
          <button onClick={onClose}>Close</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
