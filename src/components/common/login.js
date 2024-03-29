import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import Navbar from './navbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [birthday] = useState('');
    const [joindate] = useState('');
    const [name] = useState('');
    // const [loginStatus, setLoginStatus] = useState('');
    const [, setLoginStatus] = useState('');

    // const navigate = useNavigate();

    const adminUsername = 'admin@gmail.com';
    const adminPassword = 'P@ssword1';


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (username === adminUsername && password === adminPassword) {
                toast.success('Login successful!');
                setLoginStatus('Login successful!');
                // Storing user data as temp session storage
                sessionStorage.setItem('loggedInAdmin', JSON.stringify({ username }));
                // navigation after login
                window.location.reload();
                window.location.href = '/homeadmin';
                // navigate('/homeadmin');
            } else {
                const response = await axios.post('https://localhost:44372/api/User/login', {
                    username,
                    password,
                    birthday,
                    joindate,
                    name
                });

                if (response.data === 'Login successful') {
                    toast.success('Login successful!');
                    setLoginStatus('Login successful!');
                    // Storing user data as temp session storage
                    sessionStorage.setItem('loggedInUser', JSON.stringify({ username }));
                    // navigation after login
                    window.location.reload();
                    window.location.href = '/homeuser';
                    // navigate('homeuser');
                } else {
                    setLoginStatus('Invalid credentials');
                }
            }
        } catch (error) {
            toast.error('Login Failed!');
            console.error('Login failed:', error);
            setLoginStatus('Login failed');
        }
    };

    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg p-4">
                            <h1 className="text-center mb-4 text-success">Login</h1> <hr />
                            <form onSubmit={handleSubmit}>
                                <div className="p-field">
                                    <div className="p-inputgroup flex-1">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-user"></i>
                                        </span>
                                        <InputText value={username} placeholder="Username/Email" onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <div className="p-field">
                                    <div className="p-inputgroup flex-1">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-lock"></i>
                                        </span>
                                        <Password value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} feedback={false} />
                                    </div>
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            {/* {loginStatus && <p className="text-danger mt-3">{loginStatus}</p>} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
