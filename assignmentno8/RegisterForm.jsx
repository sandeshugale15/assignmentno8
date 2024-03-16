
import React, { useState } from 'react';
import './styles/styles.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Implement form submission logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
           
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
