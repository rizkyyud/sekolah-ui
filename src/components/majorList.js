import React, { useState, useEffect } from 'react';
import { getMajors, deleteMajor } from '../services/majorService';
import 'bootstrap/dist/css/bootstrap.min.css';

const MajorList = () => {
    const [majors, setMajors] = useState([]);

    useEffect(() => {
        fetchMajors();
    }, []);

    const fetchMajors = async () => {
        try {
            const response = await getMajors();
            console.log(response.data);
            setMajors(Array.isArray(response.data.data) ? response.data.data : []);
        } catch (error) {
            console.error("Error fetching majors:", error);
            setMajors([]);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteMajor(id);
            fetchMajors();
        } catch (error) {
            console.error("Error deleting major:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Major List</h2>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {majors.length > 0 ? (
                        majors.map(major => (
                            <tr key={major.id}>
                                <td>{major.id}</td>
                                <td>{major.name}</td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(major.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No Majors available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MajorList;
