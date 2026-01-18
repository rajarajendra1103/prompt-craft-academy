import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courseData';
import { ArrowRight, Code, Zap, Layers } from 'lucide-react';

const Home = () => {
    // Calculate totals
    const totalModules = courses.reduce((acc, course) => acc + course.modules.length, 0);
    const totalLessons = courses.reduce((acc, course) => {
        return acc + course.modules.reduce((mAcc, module) => mAcc + module.lessons.length, 0);
    }, 0);

    return (
        <div className="container">
            {/* Hero Section */}
            <section style={{
                textAlign: 'center',
                padding: '60px 20px',
                background: 'linear-gradient(180deg, var(--bg-main) 0%, var(--bg-sidebar) 100%)',
                borderRadius: '24px',
                marginBottom: '40px'
            }}>
                <span style={{
                    background: 'var(--bg-card)',
                    color: 'var(--accent)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    border: '1px solid var(--border)'
                }}>
                    ✨ Free & Open Source
                </span>
                <h1 style={{
                    fontSize: '3.5rem',
                    margin: '24px 0 16px',
                    lineHeight: '1.2',
                    background: 'linear-gradient(45deg, var(--text-primary), var(--accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Master the Art of <br /> Prompt Engineering
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 32px' }}>
                    {totalModules} modules, {totalLessons} lessons. Transform your ideas into production-ready code with structured AI prompting.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <Link to="/courses" className="btn btn-primary" style={{ padding: '12px 32px', fontSize: '1.1rem' }}>
                        Start Learning <ArrowRight size={20} />
                    </Link>
                    <Link to="/library" className="btn btn-outline" style={{ padding: '12px 32px', fontSize: '1.1rem' }}>
                        Browse Templates
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', padding: '40px 0' }}>
                <FeatureCard
                    icon={<Code size={32} />}
                    title="Structured to Code"
                    desc="Learn the exact syntax to get usable HTML, CSS, and JS from any LLM."
                />
                <FeatureCard
                    icon={<Layers size={32} />}
                    title="Full Stack Modules"
                    desc="From Database Schemas to React Components. We cover the entire stack."
                />
                <FeatureCard
                    icon={<Zap size={32} />}
                    title="Instant Feedback"
                    desc="Compare 'Before' and 'After' prompts to see the massive difference in output quality."
                />
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ color: 'var(--accent)' }}>{icon}</div>
        <h3 style={{ fontSize: '1.5rem', marginTop: '0' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{desc}</p>
    </div>
);

export default Home;
