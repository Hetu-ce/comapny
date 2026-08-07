'use client';

import React from 'react';
import InternshipForm from '@/components/InternshipForm';
import ConnectUsForm from '@/components/ConnectUsForm';
import { GraduationCap } from 'lucide-react';

export default function InternshipPage() {
  return (
    <div style={{ paddingTop: '6rem' }}>
      
      {/* Header */}
      <section style={{
        padding: '4rem 0 2rem 0',
        background: 'radial-gradient(ellipse at top, #0f172a 0%, #070913 100%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <GraduationCap size={16} />
            <span>Industrial Training Program</span>
          </div>
          <h1 style={{ fontSize: '3rem', color: '#ffffff', marginBottom: '1rem' }}>
            Student Internship & <span className="gradient-text">Skill Accelerator</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Apply for 3 to 6 months industrial internship in Web Engineering, AI/ML, Cloud DevOps, Mobile Apps, UI/UX, or Cybersecurity.
          </p>
        </div>
      </section>

      {/* Main Internship Form */}
      <InternshipForm />

      {/* Contact Form */}
      <ConnectUsForm />

    </div>
  );
}
