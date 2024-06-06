import axios from 'axios';

const API_URL = 'http://localhost:8080/api/school/majors';

export const getMajors = () => {
    return axios.get(API_URL);
};

export const createMajor = (major) => {
    return axios.post(API_URL, major);
};

export const updateMajor = async (id, major) => {
    return await axios.put(`${API_URL}/${id}`, major);
};

export const deleteMajor = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
