import React, { useEffect, useState } from 'react';
import Spinner from './Spinner.gif';
import { Link } from 'react-router-dom';
import { Courses } from './Courses';

export default function ListCourse() {
    const [course, setCourse] = useState([]);
    const [search, setSearch] = useState('');
    let no = 1;

    useEffect(() => {
        setCourse(Courses);
    }, []);
    //filter the data based on the name, Instructor, Duration, enrollmentStatus
    const filteredCourses = course.filter((e) => {
        const searchLower = search.toLowerCase();
        return (
            e.name.toLowerCase().includes(searchLower) ||
            e.instructor.toLowerCase().includes(searchLower) ||
            e.duration.toLowerCase().includes(searchLower) ||
            e.enrollmentStatus.toLowerCase().includes(searchLower)
        );
    });

    return (
        <div className='mt-4'>
            {course.length > 0 ? (
                <>
                    {/* smart search here */}
                    <input
                        className='form-control border border-3'
                        onChange={(e) => setSearch(e.target.value)}
                        type='text'
                        placeholder='Search by name, Instructor, Duration, enrollmentStatus'
                    />
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col' className='bg-primary text-light'>#</th>
                                <th scope='col' className='bg-primary text-light'>Name</th>
                                <th scope='col' className='bg-primary text-light'>Instructor</th>
                                <th scope='col' className='bg-primary text-light'>Duration</th>
                                <th scope='col' className='bg-primary text-light'>enrollmentStatus</th>
                                <th scope='col' className='bg-primary text-light'>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCourses.map((e) => (
                                <tr key={e.id}>
                                    <th scope='row'>{no++}</th>
                                    <td>{e.name}</td>
                                    <td>{e.instructor}</td>
                                    <td>{e.duration}</td>
                                    <td>{e.enrollmentStatus}</td>
                                    <td>
                                        <Link to={`/coursedetails/${e.id}`}>
                                            <i className='fa-solid fa-eye'></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                //if data is not load the loader is working
                <div className='text-center mt-5 pt-5'>
                    <img src={Spinner} className='mt-3 pt-5' alt='' style={{ height: '200px' }} />
                    <h5>Loading</h5>
                </div>
            )}
        </div>
    );
}
