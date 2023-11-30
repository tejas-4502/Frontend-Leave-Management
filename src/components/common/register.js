import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        birthday: '',
        joindate: '',
        email: '',
        password: '',
        password2: '',
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
        const passwordRegex = /(?=.*[A-Z])(?=.*\d)(?=.*\W)/;
        if (!formData.firstname) {
            newErrors.firstname = 'firstname is required';
        }
        if (!formData.lastname) {
            newErrors.lastname = 'lastname is required';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = 'Valid email is required';
        }
        if (!formData.password || !passwordRegex.test(formData.password)) {
            newErrors.password =
                'Password must contain at least one uppercase letter, one digit, and one special character';
        }
        if (formData.password !== formData.password2) {
            newErrors.password2 = 'Passwords do not match';
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
            <h1>Register</h1>
            <h2>Create a new account.</h2>
            <hr />
            <section>
                <form onSubmit={handleSubmit}>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={formData.firstname}
                            onChange={handleInputChange}
                            className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                            aria-required="true"
                        />
                        <label htmlFor="firstname" className="form-label">
                            First Name
                        </label>
                        <span className="text-danger">{errors.firstname}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={formData.lastname}
                            onChange={handleInputChange}
                            className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                            aria-required="true"
                        />
                        <label htmlFor="lastname" className="form-label">
                            Last Name
                        </label>
                        <span className="text-danger">{errors.lastname}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="date"
                            name="birthday"
                            id="birthday"
                            value={formData.birthday}
                            onChange={handleInputChange}
                            className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                            aria-required="true"
                        />
                        <label htmlFor="birthday" className="form-label">
                            Birth Date
                        </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="date"
                            name="joindate"
                            id="joindate"
                            value={formData.joindate}
                            onChange={handleInputChange}
                            className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                            aria-required="true"
                        />
                        <label htmlFor="joindate" className="form-label">
                            Join Date
                        </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            autoComplete="given-name"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
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
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            name="password2"
                            id="password2"
                            value={formData.password2}
                            onChange={handleInputChange}
                            className={`form-control ${errors.password2 ? 'is-invalid' : ''}`}
                            aria-required="true"
                        />
                        <label htmlFor="password2" className="form-label">
                            Confirm Password
                        </label>
                        <span className="text-danger">{errors.password2}</span>
                    </div>
                    <div>
                        <button type="submit" className="w-100 btn btn-lg btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};
export default Register;