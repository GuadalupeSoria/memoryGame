import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext.tsx';
import Home from './pages/Home.tsx';
import Profile from './pages/Profile.tsx';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-primary p-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/profile" className="text-white hover:text-gray-200 transition duration-300">Profile</Link>
              </li>
            </ul>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </motion.div>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;