import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import ServiceIntro from './pages/ServiceIntro';
import SolutionDetails from './pages/SolutionDetails';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<ServiceIntro />} />
                <Route path="/solutions" element={<SolutionDetails />} />
            </Routes>
        </HashRouter>
    );
};

export default App;