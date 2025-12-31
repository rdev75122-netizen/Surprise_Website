import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import SurprisePage from './pages/SurprisePage';
import GreetingCardPage from './pages/GreetingCardPage';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [names, setNames] = useState({ name: '', partnerName: '' });

    const handleLogin = (name, partnerName) => {
        setNames({ name, partnerName });
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<WelcomePage onLogin={handleLogin} />}
                />
                <Route
                    path="/surprise"
                    element={
                        isAuthenticated ? (
                            <SurprisePage names={names} />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />
                <Route
                    path="/greeting"
                    element={
                        isAuthenticated ? (
                            <GreetingCardPage names={names} />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
