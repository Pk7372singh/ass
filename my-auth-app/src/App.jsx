// src/App.jsx
import  { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import './styles.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="app">
            <h1>Authentication System</h1>
            <div className="form-container">
                {!isLoggedIn ? (
                    <>
                        <h2>Sign Up</h2>
                        <Signup />
                        <h2>Login</h2>
                        <Login onLoginSuccess={handleLoginSuccess} />
                    </>
                ) : (
                    <UserDetails />
                )}
            </div>
        </div>
    );
};

export default App;
