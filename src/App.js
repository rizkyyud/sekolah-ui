import React, { useState } from 'react';
import StudentList from './components/studentList';
import MajorList from './components/majorList';
import TeacherList from './components/teacherList';
import CourseList from './components/courseList';
import StudentForm from './components/studentForm';
import MajorForm from './components/majorForm';
import TeacherForm from './components/teacherForm';
import CourseForm from './components/courseForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const fetchStudents = () => {
        setRefresh(!refresh);
    };

    const fetchMajors = () => {
        setRefresh(!refresh);
    };

    const fetchTeachers = () => {
        setRefresh(!refresh);
    };

    const fetchCourses = () => {
        setRefresh(!refresh);
    };

    return (
        <div className="container">
            <h1 className="mt-4 mb-4">School Management System</h1>
            <div className="row">
                <div className="col-md-6">
                    <MajorForm fetchMajors={fetchMajors} />
                </div>
                <div className="col-md-6">
                    <MajorList key={refresh} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <StudentForm fetchStudents={fetchStudents} />
                </div>
                <div className="col-md-6">
                    <StudentList key={refresh} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                  <CourseForm fetchCourses={fetchCourses} />
                </div>
                <div className="col-md-6">
                  <CourseList key={refresh} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                  <TeacherForm fetchTeachers={fetchTeachers} />
                </div>
                <div className="col-md-6">
                  <TeacherList key={refresh} />
                </div>
            </div>
        </div>
    );
};

export default App;
