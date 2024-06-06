import React, { useState } from 'react';
import { createMajor } from '../services/majorService';
import 'bootstrap/dist/css/bootstrap.min.css';

const MajorForm = ({ fetchMajors }) => {
    const [formData, setFormData] = useState({ name: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMajor(formData);
            fetchMajors();
            setFormData({ name: '' });
        } catch (error) {
            alert('Error creating major: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded">
            <h2 className="mb-4">Major Form</h2>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Name"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    );
};

export default MajorForm;
