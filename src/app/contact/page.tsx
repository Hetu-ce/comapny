'use client';

import React from 'react';
import ConnectUsForm from '@/components/ConnectUsForm';
import { Sparkles } from 'lucide-react';

export default function ContactPage() {
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
            <Sparkles size={14} />
            <span>Connect Us</span>
          </div>
          <h1 style={{ fontSize: '3rem', color: '#ffffff', marginBottom: '1rem' }}>
            Let&apos;s Build Something <span className="gradient-text">Extraordinary Together</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Have a project in mind, need technical advisory, or want to discuss enterprise software & AI solutions? Reach out to OSINC Infobit team.
          </p>
        </div>
      </section>

      {/* Main Connect Us Form */}
      <ConnectUsForm />

    </div>
  );
}
