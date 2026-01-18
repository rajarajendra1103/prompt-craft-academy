import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courseData';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const CourseCurriculum = () => {
    const { courseId } = useParams();
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return <div className="container">Course not found.</div>;
    }

    return (
        <div className="container">
            <Link to="/courses" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
                <ArrowLeft size={20} /> Back to Courses
            </Link>

            <h1 style={{ marginBottom: '16px' }}>{course.title} Curriculum</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.2rem' }}>
                {course.description}
            </p>

            <div style={{ display: 'grid', gap: '16px' }}>
                {course.modules.length > 0 ? (
                    course.modules.map(module => (
                        <div key={module.id} style={{
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                padding: '16px',
                                background: 'var(--bg-sidebar)',
                                fontWeight: '600'
                            }}>
                                {module.title}
                            </div>
                            <div>
                                {module.lessons.map(lesson => (
                                    <Link
                                        key={lesson.id}
                                        to={`/course/${course.id}/${lesson.id}`}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            padding: '12px 16px',
                                            borderTop: '1px solid var(--border)',
                                            color: 'var(--text-primary)',
                                            transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-main)'}
                                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                    >
                                        <span>{lesson.title}</span>
                                        <ChevronRight size={18} color="var(--text-secondary)" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{ padding: '20px', textAlign: 'center', background: 'var(--bg-main)', borderRadius: '8px', color: 'var(--text-secondary)' }}>
                        Coming Soon!
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseCurriculum;
