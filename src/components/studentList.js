import React, { useState, useEffect } from 'react';
import { getStudents, deleteStudent } from '../services/studentService';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await getStudents();
            console.log(response.data); // Log for debugging
            setStudents(Array.isArray(response.data.data) ? response.data.data : []);
        } catch (error) {
            console.error("Error fetching students:", error);
            setStudents([]); // Initialize to empty array if there's an error
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteStudent(id);
            fetchStudents();
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Student List</h2>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Major</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.major}</td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No students available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
