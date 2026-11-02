import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50" style={{
      fontFamily: "'DM Sans', sans-serif",
      background: 'linear-gradient(180deg, rgba(8,14,28,0.98) 0%, rgba(10,18,35,0.92) 100%)',
      borderBottom: '0.5px solid rgba(100,140,255,0.18)',
      backdropFilter: 'blur(18px)',
      boxShadow: '0 1px 32px rgba(0,0,0,0.35), 0 0 0 0.5px rgba(80,120,255,0.08) inset',
      position: 'relative',
    }}>
      {/* Top shimmer line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(99,179,255,0.4) 30%, rgba(56,220,200,0.4) 70%, transparent 100%)',
      }} />

      <div className="max-w-6xl mx-auto px-6" style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '1.15rem',
            fontWeight: 600,
            background: 'linear-gradient(120deg, #63b3ff 0%, #38dcc8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.01em',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Viraj Somani
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ gap: '2px' }}>
          {menuItems.map((item) => (
            <NavButton key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </NavButton>
          ))}
        </nav>

        {/* Social icons (desktop) */}
        

        {/* CTA */}
        <button
          className="hidden md:block"
          onClick={() => scrollToSection('contact')}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.78rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#0a0e1c',
            border: 'none',
            background: 'linear-gradient(120deg, #63b3ff 0%, #38dcc8 100%)',
            padding: '8px 18px',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'opacity 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Contact
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(180,200,230,0.8)', padding: '6px',
          }}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden" style={{
          background: 'rgba(8,14,28,0.97)',
          borderTop: '0.5px solid rgba(100,140,255,0.15)',
          padding: '1rem 1.5rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { scrollToSection(item.id); setIsOpen(false); }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 400,
                color: 'rgba(180,200,230,0.75)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: '0.5px solid rgba(100,140,255,0.08)',
                width: '100%',
                transition: 'color 0.2s, padding-left 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(99,179,255,0.95)'; e.currentTarget.style.paddingLeft = '8px'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(180,200,230,0.75)'; e.currentTarget.style.paddingLeft = '0'; }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

// Extracted nav button with hover underline effect
const NavButton = ({ onClick, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.8rem',
        fontWeight: 400,
        color: hovered ? 'rgba(220,235,255,0.95)' : 'rgba(180,200,230,0.75)',
        padding: '8px 14px',
        borderRadius: '6px',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        position: 'relative',
        transition: 'color 0.2s',
      }}
    >
      {children}
      <span style={{
        position: 'absolute', bottom: '4px', left: '14px', right: '14px',
        height: '1.5px',
        background: 'linear-gradient(90deg, #63b3ff, #38dcc8)',
        borderRadius: '2px',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
      }} />
    </button>
  );
};

export default Header;