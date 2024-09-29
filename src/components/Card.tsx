import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from '@heroicons/react/24/solid';

const Card = ({ icon, isFlipped, onClick }) => {
  const IconComponent = Icons[icon];

  return (
    <motion.div
      className={`w-24 h-32 cursor-pointer ${isFlipped ? 'bg-primary' : 'bg-gray-300'} rounded-lg shadow-md`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {isFlipped && IconComponent && (
          <IconComponent className="w-12 h-12 text-white" />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Card;