import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Courses } from './Courses';
import Spinner from './Spinner.gif';
import './SingleCourse.css';

export default function SingleCourse() {
    const [course, setCourse] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const courseId = parseInt(id, 10);
        const selectedCourse = Courses.find(course => course.id === courseId);
        setCourse(selectedCourse);
    }, [id]);

    if (!course) {
        return (
            <div className='spinner-container'>
                <img src={Spinner} alt="Loading spinner" />
                <h5>Loading</h5>
            </div>
        );
    }
    //if image is not exist in the file then i handle the exception other wise if out default image
    let imagename = 'default.png';
    try {
        require(`./image/${course.thumbnail}`);
        imagename = course.thumbnail;
    } catch (error) {
        imagename = 'default.png';
    }

    return (
        <div className='container'>
            <Link to='/' className='back-link'>Back</Link>
            <div className='course-header'>
                <h1>{course.name}</h1>
                <p>Instructor: {course.instructor}</p>
            </div>
            <div className='course-details'>
                <p>{course.description}</p>
                <p>Enrollment Status: {course.enrollmentStatus}</p>
                <img src={require(`./image/${imagename}`)} alt={course.name} />
                <p>Duration: {course.duration}</p>
                <p>Schedule: {course.schedule}</p>
                <p>Location: {course.location}</p>
                <h3>Prerequisites:</h3>
                <ul>
                    {course.prerequisites.map((prerequisite, index) => (
                        <li key={index}>{prerequisite}</li>
                    ))}
                </ul>
                <h3>Syllabus:</h3>
                <ul>
                    {course.syllabus.map((week, index) => (
                        <li key={index}>
                            <strong>Week {week.week}: {week.topic}</strong>
                            <p>{week.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}