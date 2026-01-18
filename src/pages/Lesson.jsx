import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courseData';
import { ArrowLeft, CheckCircle, AlertCircle, PlayCircle, FileText } from 'lucide-react';

const Lesson = () => {
    const { courseId, lessonId } = useParams();

    // Find data
    const course = courses.find(c => c.id === courseId);
    // Flatten modules to find lesson
    let lesson = null;
    let module = null;

    if (course) {
        for (const m of course.modules) {
            const l = m.lessons.find(l => l.id === lessonId);
            if (l) {
                lesson = l;
                module = m;
                break;
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [lessonId]);

    if (!course || !lesson) {
        return <div className="container" style={{ padding: '40px' }}>Lesson not found.</div>;
    }

    return (
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '32px' }}>

            {/* Sidebar Navigation */}
            <aside style={{ display: 'none', md: { display: 'block' } }} className="lesson-sidebar">
                <style>{`
           @media (max-width: 900px) { .lesson-sidebar { display: none !important; } }
           @media (min-width: 901px) { .lesson-sidebar { display: block !important; } }
         `}</style>
                <div style={{ position: 'sticky', top: '100px' }}>
                    <h3 style={{ fontSize: '1.2rem', paddingBottom: '12px', borderBottom: '2px solid var(--border)' }}>
                        {course.title}
                    </h3>
                    <div style={{ marginTop: '16px' }}>
                        <div style={{ fontWeight: '600', marginBottom: '8px', color: 'var(--text-secondary)' }}>{module.title}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {module.lessons.map(l => (
                                <Link
                                    key={l.id}
                                    to={`/course/${course.id}/${l.id}`}
                                    style={{
                                        padding: '8px 12px',
                                        borderRadius: '6px',
                                        background: l.id === lessonId ? 'var(--accent)' : 'transparent',
                                        color: l.id === lessonId ? 'white' : 'var(--text-primary)',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    {l.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div style={{ maxWidth: '800px' }}>
                <Link to={`/course/${course.id}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> Back to Curriculum
                </Link>

                <div style={{
                    marginBottom: '24px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    {module.title}
                </div>

                <h1 style={{ marginBottom: '24px' }}>{lesson.title}</h1>

                {/* Objectives */}
                <div style={{
                    background: 'var(--bg-sidebar)',
                    padding: '24px',
                    borderRadius: '12px',
                    marginBottom: '32px'
                }}>
                    <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle size={20} color="var(--success)" /> Learning Objectives
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: '24px', lineHeight: '1.6' }}>
                        {lesson.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                    </ul>
                </div>

                {/* Summary */}
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '40px' }}>
                    {lesson.summary}
                </p>

                {/* Theory */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '16px', marginBottom: '24px' }}>Core Concept</h2>
                    <p style={{ lineHeight: '1.7' }}>{lesson.theory}</p>
                </section>

                {/* Task / Prompt Sandbox */}
                <section style={{ marginBottom: '48px' }}>
                    <h2>Prompt Transformation</h2>
                    <p>{lesson.task.description}</p>

                    <div style={{ display: 'grid', gap: '24px', marginTop: '24px' }}>
                        {/* Before */}
                        <div className="card" style={{ borderColor: 'var(--accent)', borderStyle: 'dashed' }}>
                            <div style={{
                                background: '#ffcdd2',
                                color: '#b71c1c',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                display: 'inline-block',
                                marginBottom: '12px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>
                                ❌ BEFORE (Weak Prompt)
                            </div>
                            <code style={{ display: 'block', fontSize: '1rem' }}>{lesson.task.before}</code>
                        </div>

                        {/* After */}
                        <div className="card" style={{ border: '2px solid var(--success)' }}>
                            <div style={{
                                background: '#c8e6c9',
                                color: '#1b5e20',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                display: 'inline-block',
                                marginBottom: '12px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>
                                ✅ AFTER (Structured Prompt)
                            </div>
                            <code style={{ display: 'block', whiteSpace: 'pre-wrap', lineHeight: '1.5', fontFamily: 'monospace' }}>
                                {lesson.task.after}
                            </code>
                        </div>
                    </div>
                </section>

                {/* Keywords */}
                <section style={{ marginBottom: '48px' }}>
                    <h3>Keywords</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                        {lesson.keywords.map((k, i) => (
                            <div key={i} style={{ background: 'var(--bg-main)', padding: '16px', borderRadius: '8px' }}>
                                <div style={{ fontWeight: 'bold', color: 'var(--accent)', marginBottom: '4px' }}>{k.term}</div>
                                <div style={{ fontSize: '0.9rem' }}>{k.definition}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resources & Instructor Notes */}
                <div style={{ display: 'grid', gap: '24px', md: { gridTemplateColumns: '1fr 1fr' } }}>
                    <div>
                        <h3>Resources</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {lesson.resources.map((r, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>
                                    <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {r.type === 'video' ? <PlayCircle size={16} /> : <FileText size={16} />}
                                        {r.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ background: 'var(--code-bg)', color: 'var(--code-text)', padding: '20px', borderRadius: '8px' }}>
                        <h4 style={{ marginTop: 0, color: 'var(--accent)' }}>Instructor Note</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem' }}>{lesson.instructorNotes}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Lesson;
