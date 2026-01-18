import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, Moon, Sun, Check } from 'lucide-react';

const ThemeSwitcher = () => {
    const { mode, toggleMode, colorTheme, setColorTheme, themes } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
                className="btn btn-outline"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change Theme"
                style={{ padding: '8px', minWidth: '40px', display: 'flex', justifyContent: 'center' }}
            >
                <Palette size={20} />
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '120%',
                    right: 0,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '8px',
                    marginTop: '8px',
                    zIndex: 1000,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    width: '220px',
                    color: 'var(--text-primary)'
                }}>
                    <div style={{ padding: '8px 8px 4px', fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                        Color Theme
                    </div>

                    <div style={{ display: 'grid', gap: '4px' }}>
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setColorTheme(t.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    background: colorTheme === t.id ? 'var(--bg-sidebar)' : 'transparent',
                                    border: 'none',
                                    padding: '8px 12px',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    width: '100%',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                <div style={{
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    background: t.color,
                                    border: '1px solid var(--border)'
                                }} />
                                <span style={{ fontSize: '0.9rem', flex: 1, textAlign: 'left' }}>{t.name}</span>
                                {colorTheme === t.id && <Check size={14} color="var(--accent)" />}
                            </button>
                        ))}
                    </div>

                    <div style={{ height: '1px', background: 'var(--border)', margin: '8px 0' }}></div>

                    <button
                        onClick={toggleMode}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: 'transparent',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            width: '100%',
                            color: 'var(--text-primary)'
                        }}
                    >
                        <div style={{
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--bg-main)',
                            borderRadius: '6px',
                            border: '1px solid var(--border)'
                        }}>
                            {mode === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
                        </div>
                        <span style={{ fontSize: '0.9rem', textAlign: 'left' }}>
                            {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThemeSwitcher;
