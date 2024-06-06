import React, { useState, useEffect } from 'react';
import { getCourses, deleteCourse } from '../services/courseService';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await getCourses();
            console.log(response.data); // Log for debugging
            setCourses(Array.isArray(response.data.data) ? response.data.data : []);
        } catch (error) {
            console.error("Error fetching courses:", error);
            setCourses([]); // Initialize to empty array if there's an error
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteCourse(id);
            fetchCourses();
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Course List</h2>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Credits</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.length > 0 ? (
                        courses.map(course => (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <td>{course.credits}</td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(course.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No Courses available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CourseList;
