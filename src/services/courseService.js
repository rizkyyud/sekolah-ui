import axios from 'axios';

const API_URL = 'http://localhost:8080/api/school/courses';

export const getCourses = () => {
    return axios.get(API_URL);
};

export const createCourse = (course) => {
    return axios.post(API_URL, course);
};

export const updateCourse = async (id, course) => {
    return await axios.put(`${API_URL}/${id}`, course);
};

export const deleteCourse = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
