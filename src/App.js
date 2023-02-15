import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
    return (
        <div className="">
            <AnimatePresence mode='wait'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default App;