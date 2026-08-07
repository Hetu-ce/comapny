'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Cpu, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Internship', path: '/internship' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Connect Us', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--gradient-brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)'
          }}>
            <Cpu size={24} color="#ffffff" />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 800,
              fontSize: '1.4rem',
              letterSpacing: '-0.02em',
              color: '#ffffff',
              display: 'block',
              lineHeight: 1.1
            }}>
              OSINC<span style={{ color: 'var(--accent-cyan)' }}>.</span>
            </span>
            <span style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              display: 'block'
            }}>
              INFOBIT
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.95rem',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '0.4rem 0',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    borderRadius: '2px',
                    background: 'var(--gradient-brand)',
                    boxShadow: '0 0 8px var(--accent-indigo)'
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/contact" className="btn-primary" style={{ padding: '0.65rem 1.3rem', fontSize: '0.9rem' }}>
            <Sparkles size={16} />
            <span>Connect Us</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: pathname === link.path ? 'var(--accent-cyan)' : 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem',
                borderRadius: '8px',
                background: pathname === link.path ? 'rgba(99, 102, 241, 0.1)' : 'transparent'
              }}
            >
              <span>{link.name}</span>
              <ChevronRight size={18} color="var(--text-muted)" />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
