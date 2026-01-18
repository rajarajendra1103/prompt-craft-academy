import React, { useState } from 'react';
import { promptTemplates } from '../data/courseData';
import { Copy, Search, Tag, Eye, Filter } from 'lucide-react';

const PromptLibrary = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [copiedId, setCopiedId] = useState(null);

    // Get unique categories
    const categories = ['All', ...new Set(promptTemplates.map(p => p.category))];

    const filtered = promptTemplates.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.content.toLowerCase().includes(search.toLowerCase()) ||
            p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ marginBottom: '16px' }}>Prompt Library</h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    {promptTemplates.length}+ production-ready templates. Search, copy, and deploy.
                </p>

                {/* Search Bar */}
                <div style={{
                    maxWidth: '600px',
                    margin: '32px auto 24px',
                    position: 'relative'
                }}>
                    <Search style={{ position: 'absolute', left: '16px', top: '12px', color: 'var(--text-secondary)' }} size={20} />
                    <input
                        type="text"
                        placeholder="Search templates by title, content, or tag..."
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

                {/* Category Filters */}
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                padding: '6px 16px',
                                borderRadius: '20px',
                                border: '1px solid var(--border)',
                                background: selectedCategory === cat ? 'var(--accent)' : 'var(--bg-card)',
                                color: selectedCategory === cat ? 'white' : 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                transition: 'all 0.2s'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid Layout */}
            <div className="masonry-grid" style={{ columnGap: '24px' }}>
                <style>{`
           @media (max-width: 900px) { .masonry-grid { column-count: 2 !important; } }
           @media (max-width: 600px) { .masonry-grid { column-count: 1 !important; } }
           .masonry-grid { column-count: 3; }
           .template-card:hover { transform: translateY(-4px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
         `}</style>
                {filtered.map(p => (
                    <div key={p.id} className="card template-card" style={{ breakInside: 'avoid', marginBottom: '24px', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                        {/* Header: Category & Copy */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <div style={{
                                background: 'var(--bg-main)',
                                padding: '4px 10px',
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                color: 'var(--accent)',
                                fontWeight: 'bold'
                            }}>
                                {p.category}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                <Eye size={14} /> {p.usageCount.toLocaleString()}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 style={{ marginTop: 0, fontSize: '1.2rem', marginBottom: '12px' }}>{p.title}</h3>

                        {/* Preview */}
                        <div className="code-block" style={{
                            fontSize: '0.85rem',
                            whiteSpace: 'pre-wrap',
                            marginBottom: '16px',
                            maxHeight: '150px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            {/* Fade out effect */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '40px',
                                background: 'linear-gradient(to bottom, transparent, var(--code-bg))'
                            }}></div>
                            {p.content}
                        </div>

                        {/* Tags */}
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                            {p.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-secondary)',
                                    background: 'var(--bg-main)',
                                    padding: '2px 8px',
                                    borderRadius: '4px'
                                }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Footer Action */}
                        <button
                            className="btn btn-outline"
                            onClick={() => handleCopy(p.content, p.id)}
                            style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}
                        >
                            {copiedId === p.id ? 'Copied to Clipboard!' : <><Copy size={16} /> Copy Template</>}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromptLibrary;
