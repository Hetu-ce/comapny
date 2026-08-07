'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Award, 
  Globe2, 
  TrendingUp,
  GraduationCap
} from 'lucide-react';

export default function Hero() {
  const stats = [
    { label: 'Enterprise Projects', value: '250+', icon: TrendingUp },
    { label: 'Cloud Uptime SLA', value: '99.99%', icon: Zap },
    { label: 'Global Tech Awards', value: '15+', icon: Award },
    { label: 'Active Clients', value: '50+', icon: Globe2 },
  ];

  return (
    <section style={{
      position: 'relative',
      paddingTop: '8.5rem',
      paddingBottom: '5rem',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at top, #0f172a 0%, #070913 70%)'
    }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 80%)',
        pointerEvents: 'none',
        filter: 'blur(60px)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Announcement Badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div className="badge animate-glow" style={{ display: 'inline-flex', cursor: 'pointer' }}>
            <Sparkles size={14} />
            <span>OSINC INFOBIT • AI & Cloud Solutions & Student Internships</span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 2.5rem auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            lineHeight: '1.15',
            color: '#ffffff',
            marginBottom: '1.25rem',
            fontFamily: 'var(--font-outfit)',
            fontWeight: 800
          }}>
            Building High-Performance Digital Products & <span className="gradient-text">Intelligent AI Solutions</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            maxWidth: '740px',
            margin: '0 auto 2.5rem auto'
          }}>
            OSINC Infobit provides end-to-end IT consulting, custom software development, AI models, and student industrial internship training programs.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1.25rem' }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </Link>

            <Link href="/internship" className="btn-secondary" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              <GraduationCap size={18} color="var(--accent-cyan)" />
              <span>Apply for Internship</span>
            </Link>
          </div>
        </div>

        {/* Featured Hero Visual Showcase */}
        <div style={{
          position: 'relative',
          maxWidth: '1080px',
          margin: '0 auto 4rem auto',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(99, 102, 241, 0.25)',
          background: 'rgba(15, 23, 42, 0.8)'
        }}>
          <div style={{ position: 'relative', width: '100%', height: '480px' }}>
            <Image
              src="/images/hero_tech_bg.jpg"
              alt="OSINC Infobit AI & Cloud Tech Architecture"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            {/* Dark gradient overlay for text legibility */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(7, 9, 19, 0.95) 0%, rgba(7, 9, 19, 0.2) 60%, transparent 100%)'
            }} />
          </div>

          {/* Floating UI Badge Overlay */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            background: 'rgba(13, 17, 39, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem 2rem',
            borderRadius: 'var(--radius-md)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'var(--accent-emerald)',
                boxShadow: '0 0 12px var(--accent-emerald)'
              }} />
              <div>
                <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                  Enterprise Engineering & Student Training Hub
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  Microservices, AI LLM Models & Hands-On Industrial Internship Training
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem' }}>
              <ShieldCheck size={18} />
              <span>100% Industry Recognized Certifications</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                  color: 'var(--accent-cyan)'
                }}>
                  <Icon size={22} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.2rem'
                }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
