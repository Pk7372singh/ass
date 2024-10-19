import React from 'react';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
    const history = useHistory();

    const handleLogin = () => {
        history.push('/login'); // Redirect to login page
    };

    const handleSignup = () => {
        history.push('/signup'); // Redirect to signup page
    };

    return (
        <div>
            <h1>Welcome to the Application</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default MainPage;
