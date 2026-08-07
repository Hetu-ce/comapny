'use client';

import React from 'react';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import TechStackGrid from '@/components/TechStackGrid';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, GraduationCap, Sparkles, Send } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <Hero />

      {/* About Spotlight Teaser */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="badge" style={{ marginBottom: '0.8rem' }}>
                <span>Who We Are</span>
              </div>
              <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '1rem' }}>
                Engineering Digital Excellence <span className="gradient-text">In Chennai</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                <strong>OSINC Infobit</strong> is an innovation-driven software engineering firm. We bridge the gap between enterprise challenges and scalable digital platforms through modern cloud native engineering, AI, and student talent cultivation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.75rem' }}>
                {[
                  '100% In-House Agile Engineering & Design Teams',
                  'Dedicated AI/ML Innovation Lab & Student Training',
                  'ISO 27001 Security & Data Compliance Standards'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-secondary">
                <span>Learn More About OSINC Infobit</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Office Visual Artwork */}
            <div className="glass-card" style={{ padding: '0.75rem', overflow: 'hidden' }}>
              <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <Image
                  src="/images/company_office.jpg"
                  alt="OSINC Infobit Headquarters & Workspace"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Services Spotlight (Limit to 3 items for compact home page) */}
      <section style={{ padding: '4rem 0' }}>
        <ServicesOverview showTitle={true} limit={3} />
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/services" className="btn-secondary">
            <span>Explore All 6 Services</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Tech Ecosystem Section */}
      <TechStackGrid />

      {/* Student Internship Spotlight Banner (Clean Promo Banner leading to /internship) */}
      <section style={{ padding: '4.5rem 0', background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, var(--bg-primary) 70%)' }}>
        <div className="container">
          <div className="glass-card" style={{
            padding: '3rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(13, 17, 39, 0.95) 0%, rgba(20, 30, 60, 0.95) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <div className="badge" style={{ marginBottom: '1rem' }}>
                <GraduationCap size={16} />
                <span>OSINC Infobit Academy</span>
              </div>
              <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '1rem' }}>
                Launch Your Tech Career With Our <span className="gradient-text">Student Internship Program</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                3 to 6 months hands-on industrial training in Full-Stack Web Dev (Next.js), AI/ML, Mobile App Dev, Cloud DevOps, and UI/UX Design. Get certified with live project experience.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Full-Stack Web', 'AI & ML', 'Mobile Apps', 'Cloud & DevOps', 'UI/UX Design'].map((d, i) => (
                  <span key={i} style={{ padding: '0.35rem 0.8rem', background: 'rgba(255,255,255,0.06)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ flexShrink: 0 }}>
              <Link href="/internship" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
                <GraduationCap size={18} />
                <span>Apply for Internship</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <TestimonialsSlider />

      {/* Connect Us Spotlight Banner (Clean CTA leading to /contact) */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-secondary)', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 style={{ fontSize: '2.3rem', color: '#ffffff', marginBottom: '1rem' }}>
            Ready to Build Your <span className="gradient-text">Enterprise Technology?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
            Connect with our lead software architects at Chennai HQ to discuss your custom project requirements or technical advisory.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}>
            <span>Connect With Us</span>
            <Send size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
