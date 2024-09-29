import React, { useState, useEffect } from 'react';
import Card from './Card.tsx';
import { useAppContext } from '../context/AppContext.tsx';
import { motion } from 'framer-motion';

const ICONS = [
  'AcademicCapIcon', 'AdjustmentsIcon', 'AnnotationIcon', 'ArchiveIcon',
  'BeakerIcon', 'BellIcon', 'BookmarkIcon', 'BriefcaseIcon'
];

const Game = () => {
  const { score, setScore, highScore, setHighScore, setGamesPlayed } = useAppContext();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledIcons = shuffleArray([...ICONS, ...ICONS]);
    setCards(shuffledIcons);
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
    setGamesPlayed(prevGames => prevGames + 1);
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        setScore(prevScore => {
          const newScore = prevScore + 1;
          if (newScore > highScore) {
            setHighScore(newScore);
          }
          return newScore;
        });
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        {cards.map((icon, index) => (
          <Card
            key={index}
            icon={icon}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <button
        className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary-dark transition duration-300"
        onClick={initializeGame}
      >
        New Game
      </button>
    </motion.div>
  );
};

export default Game;