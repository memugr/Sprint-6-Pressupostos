import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { HomeProvider } from './pages/Home/contexts/HomeContext';

const App: React.FC = () => {
    return (
        <Router>
            <HomeProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </HomeProvider>
        </Router>
    );
};

export default App;

