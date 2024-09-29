import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  score: number;
  highScore: number;
  userName: string;
  theme: string;
  gamesPlayed: number;
  setScore: (score: number) => void;
  setHighScore: (score: number) => void;
  setUserName: (name: string) => void;
  setTheme: (theme: string) => void;
  setGamesPlayed: (games: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC = ({ children }) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useState('light');
  const [gamesPlayed, setGamesPlayed] = useState(0);

  useEffect(() => {
    const storedHighScore = localStorage.getItem('highScore');
    const storedUserName = localStorage.getItem('userName');
    const storedTheme = localStorage.getItem('theme');
    const storedGamesPlayed = localStorage.getItem('gamesPlayed');
    if (storedHighScore) setHighScore(parseInt(storedHighScore, 10));
    if (storedUserName) setUserName(storedUserName);
    if (storedTheme) setTheme(storedTheme);
    if (storedGamesPlayed) setGamesPlayed(parseInt(storedGamesPlayed, 10));
  }, []);

  useEffect(() => {
    localStorage.setItem('highScore', highScore.toString());
    localStorage.setItem('userName', userName);
    localStorage.setItem('theme', theme);
    localStorage.setItem('gamesPlayed', gamesPlayed.toString());
  }, [highScore, userName, theme, gamesPlayed]);

  return (
    <AppContext.Provider value={{ 
      score, setScore, 
      highScore, setHighScore, 
      userName, setUserName,
      theme, setTheme,
      gamesPlayed, setGamesPlayed
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};