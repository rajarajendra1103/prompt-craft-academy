import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Courses', path: '/courses' },
        { name: 'Library', path: '/library' },
        { name: 'UI Dictionary', path: '/ui-dictionary' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{
                background: 'var(--bg-card)',
                borderBottom: '1px solid var(--border)',
                padding: '16px 0',
                position: 'sticky',
                top: 0,
                zIndex: 50
            }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold', fontSize: '1.3rem' }}>
                        <div style={{
                            background: 'var(--accent)',
                            color: 'white',
                            padding: '8px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px -2px var(--accent)'
                        }}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {/* Chat Bubble representing 'Prompting' */}
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                {/* Code Brackets representing 'Software Dev' */}
                                <polyline points="9 10 7 12 9 14" />
                                <polyline points="15 10 17 12 15 14" />
                            </svg>
                        </div>
                        <span style={{ color: 'var(--text-primary)' }}>Prompt Craft Academy</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav style={{ display: 'none', gap: '24px', md: { display: 'flex' } }} className="desktop-nav">
                        {/* Note: In pure CSS JS, media queries are hard in inline styles. I'll rely on a class. */}
                        <style>{`
               @media (min-width: 768px) {
                 .desktop-nav { display: flex !important; }
                 .mobile-menu-btn { display: none !important; }
               }
               @media (max-width: 767px) {
                 .desktop-nav { display: none !important; }
               }
             `}</style>

                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    color: location.pathname === link.path ? 'var(--accent)' : 'var(--text-secondary)',
                                    fontWeight: location.pathname === link.path ? '600' : '400'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <ThemeSwitcher />
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{ background: 'none', border: 'none', color: 'var(--text-primary)' }}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div style={{
                        background: 'var(--bg-card)',
                        borderBottom: '1px solid var(--border)',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    color: location.pathname === link.path ? 'var(--accent)' : 'var(--text-secondary)',
                                    fontWeight: location.pathname === link.path ? '600' : '400',
                                    fontSize: '1.1rem'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </header>

            <main style={{ flex: 1, padding: '24px 0' }}>
                <Outlet />
            </main>

            <footer style={{ background: 'var(--bg-sidebar)', padding: '32px 0', marginTop: 'auto' }}>
                <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <p>© 2024 PromptCraft Academy. Open Source & Free.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
