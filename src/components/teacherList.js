import React, { useState, useEffect } from 'react';
import { getTeachers, deleteTeacher } from '../services/teacherService';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {
            const response = await getTeachers();
            console.log(response.data); // Log for debugging
            setTeachers(Array.isArray(response.data.data) ? response.data.data : []);
        } catch (error) {
            console.error("Error fetching teachers:", error);
            setTeachers([]); // Initialize to empty array if there's an error
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteTeacher(id);
            fetchTeachers();
        } catch (error) {
            console.error("Error deleting teacher:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Teacher List</h2>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.length > 0 ? (
                        teachers.map(teacher => (
                            <tr key={teacher.id}>
                                <td>{teacher.id}</td>
                                <td>{teacher.name}</td>
                                <td>{teacher.email}</td>
                                <td>{teacher.course}</td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(teacher.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No teachers available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherList;
