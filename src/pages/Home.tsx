import { useAppContext } from '../context/AppContext.tsx';
import React from 'react';
import Game from '../components/Game.tsx';
import Scoreboard from '../components/Scoreboard.tsx';
import { motion } from 'framer-motion';

const Home = () => {
  const {  theme } = useAppContext()
  return (
    <div className={`min-h-screen ${theme === 'dark' ? ' bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Memory Game</h1>
      <Scoreboard />
      <Game />
    </motion.div>
    </div>
  );
};

export default Home;