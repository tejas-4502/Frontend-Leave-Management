import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [joindate, setJoindate] = useState('');
    const [name, setName] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const navigate = useNavigate();


    const hardcodedUsername = 'admin@gmail.com';
    const hardcodedPassword = 'admin';



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (username === hardcodedUsername && password === hardcodedPassword) {
                setLoginStatus('Login successful!');
                navigate('/admin');
                // After upon successful login
            } else {
                const response = await axios.post('http://localhost:5219/api/User/login', {
                    username,
                    password,
                    birthday,
                    joindate,
                    name
                });

                // When returns a success message upon successful login
                if (response.data === 'Login successful') {
                    setLoginStatus('Login successful!');
                    navigate('/user');
                    // Further actions upon successful login
                } else {
                    setLoginStatus('Invalid credentials');
                }
            }
        } catch (error) {
            console.error('Login failed:', error);
            setLoginStatus('Login failed');
        }
    };

    return (
        <>
            <Navbar />
            <div className="container pt-5">
                <h1>Log in</h1>
                <h2>Use a local account to log in.</h2> <hr />
                <section>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="text" value={username} className='form-control' onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="email" className="form-label">Username/Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password" className="form-label">Password</label>
                        </div>
                        <br />
                        <button type="submit" className="w-100 btn btn-lg btn btn-primary">Login</button>
                    </form>
                    {loginStatus && <p>{loginStatus}</p>}
                </section>
            </div>
        </>
    );
};

export default Login;
