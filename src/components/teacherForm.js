import React, { useState } from 'react';
import { createTeacher, updateTeacher } from '../services/teacherService';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeacherForm = ({ teacher , fetchTeachers }) => {
    const [formData, setFormData] = useState(teacher || { name: '', email: '', course: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === 'course' ? parseInt(value, 10) : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = { ...formData, major: parseInt(formData.course, 10) };
        if (formDataToSend.id) {
            await updateTeacher(formDataToSend.id, formDataToSend);
        } else {
            await createTeacher(formDataToSend);
        }
        fetchTeachers();
        setFormData({ name: '', email: '', course: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded">
            <h2 className="mb-4">Teacher Form</h2>
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
                <label>Course</label>
                <input
                    type="number"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Course"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    );
};

export default TeacherForm;
