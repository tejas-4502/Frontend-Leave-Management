import React, { useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './navbar';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [joindate, setJoindate] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send registration data to the backend
            const response = await axios.post('http://localhost:5219/api/User/register', {
                username,
                password,
                birthday,
                joindate,
                name
            });

            if (response.status === 200) {
                toast.success('Registration successful');
                console.log(response.data);
            }
        } catch (error) {
            console.error('Registration failed:', error);
            toast.error('Registration failed');
        }

    };

    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="container pt-5">
                <h1>Register</h1>
                <h2>Create a new account.</h2>
                <hr />
                <section>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                value={name}
                                className='form-control'
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="name" className="form-label">Name</label>
                        </div>
                        <Row>
                            <Col>
                                <div className="form-floating mb-3">
                                    <input
                                        type="date"
                                        value={birthday}
                                        className='form-control'
                                        onChange={(e) => setBirthday(e.target.value)}
                                    />
                                    <label htmlFor="name" className="form-label">Birth Date</label>
                                </div>
                            </Col>
                            <Col>
                                <div className="form-floating mb-3">
                                    <input
                                        type="date"
                                        value={joindate}
                                        className='form-control'
                                        onChange={(e) => setJoindate(e.target.value)}
                                    />
                                    <label htmlFor="name" className="form-label">Join Date</label>
                                </div>
                            </Col>
                        </Row>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                value={username}
                                className='form-control'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="name" className="form-label">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                value={password}
                                className='form-control'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="name" className="form-label">Password</label>
                        </div>


                        <br />
                        <button type="submit" className="w-100 btn btn-lg btn btn-primary">Register</button>
                    </form>
                    <br /><br />
                </section>
            </div>
        </>
    );
};

export default Register;