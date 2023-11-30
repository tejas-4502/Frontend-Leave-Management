import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });
    const [errors, setErrors] = useState({});
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Client-side validation logic
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = 'Valid email is required';
        }
        if (!formData.password || !/(?=.*[A-Z])(?=.*\d)(?=.*\W)/.test(formData.password)) {
            newErrors.password =
                'Password must contain at least one uppercase letter, one digit, and one special character';
        }
        if (Object.keys(newErrors).length === 0) {
            // If no errors, you can proceed with form submission or further processing
            console.log('Form data submitted:', formData);
        } else {
            // If there are errors, update the state to display them
            setErrors(newErrors);
        }
    };
    return (
        <div className="container pt-5">
                <h1>Log in</h1>
                <h2>Use a local account to log in.</h2>

                            <section>
                                <form onSubmit={handleSubmit}>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            autoComplete="emails"
                                            aria-required="true"
                                        />
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <span className="text-danger">{errors.email}</span>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            aria-required="true"
                                        />
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <span className="text-danger">{errors.password}</span>
                                    </div>
                                    <div className="checkbox mb-3">
                                        <input
                                            type="checkbox"
                                            name="rememberMe"
                                            id="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleInputChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="rememberMe" className="form-label">Remember Me</label>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-100 btn btn-lg btn btn-primary">
                                            Log in
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
    );
};
export default Login;