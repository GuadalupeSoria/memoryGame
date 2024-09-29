import React from 'react';
import { useAppContext } from '../context/AppContext.tsx';
import { motion } from 'framer-motion';

const Scoreboard = () => {
  const { score, highScore } = useAppContext();

  return (
    <motion.div 
      className="flex justify-around mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl font-bold">
        <span className="text-gray-600">Score:</span> <span className="text-primary">{score}</span>
      </div>
      <div className="text-2xl font-bold">
        <span className="text-gray-600">High Score:</span> <span className="text-secondary">{highScore}</span>
      </div>
    </motion.div>
  );
};

export default Scoreboard;