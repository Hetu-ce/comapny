'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Share2, 
  ShieldCheck
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '3.5rem',
      paddingBottom: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow decoration */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '250px',
        background: 'var(--gradient-glow)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Brand & About */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Cpu size={20} color="#ffffff" />
              </div>
              <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '1.3rem', color: '#ffffff' }}>
                OSINC<span style={{ color: 'var(--accent-cyan)' }}>.</span>INFOBIT
              </span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Architecting enterprise software, AI/ML models, and providing hands-on student industrial training in Chennai.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#" aria-label="Website" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}>
                <Globe size={18} />
              </a>
              <a href="#" aria-label="Share" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}>
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { name: 'Home Landing', path: '/' },
                { name: 'Services & Solutions', path: '/services' },
                { name: 'Portfolio & Case Studies', path: '/portfolio' },
                { name: 'Student Internship Portal', path: '/internship' },
                { name: 'About OSINC Infobit', path: '/about' },
                { name: 'Careers & Life', path: '/careers' },
                { name: 'Connect Us', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.path} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Chennai HQ) */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>
              Chennai Headquarters
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>OSINC Infobit Tech Hub, Rajiv Gandhi Salai (OMR), Taramani IT Corridor, Chennai, Tamil Nadu 600113, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="var(--accent-cyan)" />
                <span>osinciinfobit@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.3rem', color: 'var(--accent-emerald)', fontSize: '0.8rem' }}>
                <ShieldCheck size={16} />
                <span>ISO 27001 & SOC-2 Certified Partner</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>
              Subscribe to Tech Insights
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.85rem', lineHeight: '1.5' }}>
              Get quarterly whitepapers, tech benchmarks, and enterprise software design trends in your inbox.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  style={{ fontSize: '0.85rem', padding: '0.65rem 0.9rem' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.65rem 1.1rem', flexShrink: 0 }}>
                  <ArrowRight size={18} />
                </button>
              </div>
              {subscribed && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  <CheckCircle2 size={14} />
                  <span>Thank you! You are subscribed to OSINC Infobit Insights.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} OSINC Infobit (Chennai, TN). All rights reserved. Built with Next.js.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Security Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
