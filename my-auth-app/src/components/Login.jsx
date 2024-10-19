import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            console.log('Login Success:', response.data);
            // Store JWT token in local storage
            localStorage.setItem('token', response.data.token);
            // Call the onLoginSuccess function to update the app state
            onLoginSuccess();
            toast.success('Login Successful!'); // Success message
        } catch (error) {
            console.error('Error during login:', error.response?.data || error.message);
            if (error.response) {
                // Show error message based on server response
                toast.error(error.response.data.message || 'Invalid credentials');
            } else {
                toast.error('Network error. Please try again.');
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <ToastContainer /> {/* Toast Container for notifications */}
        </div>
    );
};

export default Login;
