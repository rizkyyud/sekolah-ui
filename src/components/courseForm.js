import React, { useState } from 'react';
import { createCourse } from '../services/courseService';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseForm = ({ fetchCourses }) => {
    const [formData, setFormData] = useState({ name: '', credits: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === 'credits' ? parseInt(value, 10) : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCourse(formData);
            fetchCourses();
            setFormData({ name: '', credits: '' });
        } catch (error) {
            alert('Error creating course: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded">
            <h2 className="mb-4">Course Form</h2>
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
            <div className="form-group">
                <label>Credits</label>
                <input
                    type="number"
                    name="credits"
                    value={formData.credits}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Credits"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    );
};

export default CourseForm;
