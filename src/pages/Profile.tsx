import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext.tsx';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Profile: React.FC = () => {
  const { userName, setUserName, highScore, theme, setTheme, gamesPlayed } = useAppContext();
  const [tempName, setTempName] = useState(userName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserName(tempName);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold text-center text-primary mb-8">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
            <input
              type="text"
              id="userName"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
            Save
          </button>
        </form>
        <div className="mt-6 space-y-2">
          <p className="text-lg font-semibold">High Score: {highScore}</p>
          <p className="text-lg font-semibold">Games Played: {gamesPlayed}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Theme</span>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
          >
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;