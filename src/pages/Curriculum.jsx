import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courseData';
import { ArrowRight } from 'lucide-react';

const Curriculum = () => {
    return (
        <div className="container">
            <h1 style={{ marginBottom: '32px' }}>All Courses</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                {courses.map(course => (
                    <div key={course.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'var(--bg-sidebar)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px',
                            color: 'var(--accent)'
                        }}>
                            <course.icon size={24} />
                        </div>

                        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>
                            {course.title}
                        </h2>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flex: 1 }}>
                            {course.description}
                        </p>

                        <div style={{ marginTop: 'auto' }}>
                            <div style={{
                                display: 'flex',
                                gap: '12px',
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '24px'
                            }}>
                                <span>{course.modules.length} Modules</span>
                                <span>•</span>
                                <span>{course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons</span>
                            </div>

                            <Link
                                to={`/course/${course.id}`}
                                className="btn btn-primary"
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                View Curriculum <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Curriculum;
