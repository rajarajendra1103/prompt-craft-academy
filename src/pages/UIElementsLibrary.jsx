import React, { useState } from 'react';
import { uiElements } from '../data/uiElementsData';
import { Copy, Terminal, Layout, Search } from 'lucide-react';

const UIElementsLibrary = () => {
    const [search, setSearch] = useState('');
    const [copiedId, setCopiedId] = useState(null);

    const filtered = uiElements.filter(el =>
        el.name.toLowerCase().includes(search.toLowerCase()) ||
        el.usage.toLowerCase().includes(search.toLowerCase())
    );

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifySelf: 'center', gap: '12px' }}>
                    <div style={{ background: 'var(--accent)', color: 'white', padding: '8px', borderRadius: '12px' }}>
                        <Layout size={32} />
                    </div>
                    UI Element Dictionary
                </h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    A reference guide for common interface components. Learn their usage, variations, and get instant prompts to generate them.
                </p>

                <div style={{
                    maxWidth: '500px',
                    margin: '32px auto 0',
                    position: 'relative'
                }}>
                    <Search style={{ position: 'absolute', left: '16px', top: '12px', color: 'var(--text-secondary)' }} size={20} />
                    <input
                        type="text"
                        placeholder="Search UI components..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px 12px 12px 48px',
                            borderRadius: '24px',
                            border: '1px solid var(--border)',
                            fontSize: '1rem',
                            outline: 'none',
                            background: 'var(--bg-card)',
                            color: 'var(--text-primary)'
                        }}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                {filtered.map(el => (
                    <div key={el.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                            <h2 style={{ fontSize: '1.4rem', margin: 0 }}>{el.name}</h2>
                        </div>

                        {/* Types Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                            {el.types.map((type, i) => (
                                <span key={i} style={{
                                    fontSize: '0.75rem',
                                    padding: '4px 10px',
                                    borderRadius: '12px',
                                    background: 'var(--bg-sidebar)',
                                    color: 'var(--text-secondary)',
                                    border: '1px solid var(--border)'
                                }}>
                                    {type}
                                </span>
                            ))}
                        </div>

                        {/* Usage Section */}
                        <div style={{ marginBottom: '24px' }}>
                            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                                Usage
                            </h4>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                {el.usage}
                            </p>
                        </div>

                        {/* Prompt Section */}
                        <div style={{ marginTop: 'auto', background: 'var(--bg-sidebar)', borderRadius: '8px', padding: '16px', border: '1px dashed var(--accent)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--accent)' }}>
                                    <Terminal size={16} /> Generation Prompt
                                </div>
                                <button
                                    onClick={() => handleCopy(el.prompt, el.id)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: copiedId === el.id ? 'var(--success)' : 'var(--text-secondary)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        fontSize: '0.8rem'
                                    }}
                                >
                                    {copiedId === el.id ? 'Copied' : 'Copy'} <Copy size={14} />
                                </button>
                            </div>
                            <div style={{
                                fontFamily: 'monospace',
                                fontSize: '0.85rem',
                                color: 'var(--text-primary)',
                                lineHeight: '1.5'
                            }}>
                                {el.prompt}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UIElementsLibrary;
