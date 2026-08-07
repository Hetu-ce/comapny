'use client';

import React from 'react';
import ServicesOverview from '@/components/ServicesOverview';
import TechStackGrid from '@/components/TechStackGrid';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '5.5rem' }}>
      
      {/* Page Banner */}
      <section style={{
        padding: '3rem 0 2rem 0',
        background: 'radial-gradient(ellipse at top, #0f172a 0%, #070913 100%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="badge" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} />
            <span>End-to-End Capabilities</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>
            Services & <span className="gradient-text">Technical Solutions</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto 1.5rem auto' }}>
            Discover how OSINC Infobit helps businesses innovate, automate, and scale with enterprise software, AI algorithms, and resilient cloud architectures.
          </p>
        </div>
      </section>

      {/* Services Grid with Modal capability */}
      <ServicesOverview showTitle={false} limit={6} />

      {/* Tech Stack Grid */}
      <TechStackGrid />

      {/* Simple CTA Section (No duplicated form) */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-secondary)', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.8rem' }}>
            Ready to Build Your <span className="gradient-text">Enterprise Solution?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
            Speak directly with our senior software architects at Chennai HQ to discuss your project requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Connect With Us Today</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
