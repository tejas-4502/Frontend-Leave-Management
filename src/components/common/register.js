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

    // validation
    const [validationErrors, setValidationErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!name.trim()) {
            errors.name = 'Name is required';
        }

        if (!birthday) {
            errors.birthday = 'Birth Date is required';
        }

        if (!joindate) {
            errors.joindate = 'Join Date is required';
        }

        if (!username) {
            errors.username = 'Email / Username is required';
        }

        if (!joindate) {
            errors.password = 'Password is required';
        } 

        if (!password) {
            errors.password = 'Password is required';
        } 
        else if (password.length < 8) {
            errors.password = 'Password should be at least 8 characters long';
        }
        else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            errors.password = 'Password should contain at least one uppercase and one lowercase letter';
        }
    

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length === 0) {
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
                    setValidationErrors({});
                }
            } catch (error) {
                console.error('Registration failed:', error);
                toast.error('Registration failed');
            }
        } else {
            setValidationErrors(errors);
        }
    };

    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="container pt-4">
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
                            {validationErrors.name && <span className="text-danger">{validationErrors.name}</span>}
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
                                     {validationErrors.birthday && <span className="text-danger">{validationErrors.birthday}</span>}
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
                                     {validationErrors.joindate && <span className="text-danger">{validationErrors.joindate}</span>}
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
                             {validationErrors.username && <span className="text-danger">{validationErrors.username}</span>}
                         </div>
                         <div className="form-floating mb-3">
                             <input
                                 type="password"
                                 value={password}
                                 className='form-control'
                                 onChange={(e) => setPassword(e.target.value)}
                             />
                             <label htmlFor="name" className="form-label">Password</label>
                             {validationErrors.password && <span className="text-danger">{validationErrors.password}</span>}
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
