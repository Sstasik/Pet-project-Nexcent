import React, { useState } from 'react';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}
const Login: React.FC<LoginProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Fill all fields');
      return;
    }
    alert(`Login sucess ! \nHello ${username}`);
    onClose();
    setUsername('');
    setPassword('');
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-lime-600/35
      }`}>
      <div className="absolute"></div>
      <form
        className={`bg-slate-200 w-96 p-4 rounded-xl ${
          isOpen ? 'animate-slideCenter' : 'animate-slideTop'
        }`}
        onSubmit={onSubmit}>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl mb-[10px]">Login</h1>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
