import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // Ensure you have a CSS file for styling

const Register = () => {
    const [formData, setFormData] = useState({
        businessName: "",
        email: "",
        warehouseLocation: "",
        password: "",
        confirmPassword: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post("http://localhost:8080/api/auth/register", formData);
            setMessage(`✅ Registration Successful! Welcome, ${response.data.businessName}`);
        } catch (error) {
            setMessage(error.response?.data?.message || "❌ Error during registration");
        }
    };

    return (
        <div className="register-container">
            <h2>Register Your Business</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="warehouseLocation"
                    placeholder="Warehouse Location"
                    value={formData.warehouseLocation}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
