import axios from 'axios';

const API_URL = 'http://localhost:8080/api/school/teachers';

export const getTeachers = () => {
    return axios.get(API_URL);
};

export const createTeacher = (teacher) => {
    return axios.post(API_URL, teacher);
};

export const updateTeacher = async (id, teacher) => {
    return await axios.put(`${API_URL}/${id}`, teacher);
};

export const deleteTeacher = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};

