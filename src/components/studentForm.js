// src/components/StudentForm.js
import React, { useState } from 'react';
import { createStudent, updateStudent } from '../services/studentService';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentForm = ({ student, fetchStudents }) => {
    const [formData, setFormData] = useState(
        student || { name: '', email: '', major: '' }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === 'major' ? parseInt(value, 10) : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = { ...formData, major: parseInt(formData.major, 10) };
        if (formDataToSend.id) {
            await updateStudent(formDataToSend.id, formDataToSend);
        } else {
            await createStudent(formDataToSend);
        }
        fetchStudents();
        setFormData({ name: '', email: '', major: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded">
            <h2 className="mb-4">Student Form</h2>
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
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="form-group">
                <label>Major</label>
                <input
                    type="number"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Major"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    );
};

export default StudentForm;
