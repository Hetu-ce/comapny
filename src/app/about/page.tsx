'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { title: 'Engineering Excellence', desc: 'We maintain rigid clean code standards, automated testing suites, and sub-second performance benchmarks.' },
    { title: 'AI-First Mindset', desc: 'Integrating intelligent LLMs, automation, and predictive algorithms into enterprise workflows.' },
    { title: 'Data Privacy & Security', desc: 'ISO 27001, SOC-2, and strict NDA compliance protecting every byte of client intellectual property.' },
    { title: 'Transparent Partnership', desc: 'No hidden fees. Full source code ownership, weekly sprint demos, and direct access to senior developers.' }
  ];

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      
      {/* Header */}
      <section style={{
        padding: '3rem 0 2rem 0',
        background: 'radial-gradient(ellipse at top, #0f172a 0%, #070913 100%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="badge" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} />
            <span>Corporate Identity</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>
            About <span className="gradient-text">OSINC Infobit</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto' }}>
            Headquartered in Chennai, India — OSINC Infobit is a forward-thinking software engineering powerhouse.
          </p>
        </div>
      </section>

      {/* Main Story & Visual */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '1rem' }}>
                Transforming Enterprise Vision Into Scalable Software
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Founded in Chennai&apos;s OMR IT Hub, <strong>OSINC Infobit</strong> has grown into a premier software development and AI consulting partner for enterprises across North America, Europe, and Asia.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Whether it is building multi-tenant cloud platforms, fine-tuning domain-specific AI models, or offering hands-on industrial student training, our team delivers end-to-end excellence.
              </p>

              <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                    250+
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Projects Delivered</div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-purple)' }}>
                    99.99%
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Reliability SLA</div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
                    100%
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>IP Ownership</div>
                </div>
              </div>
            </div>

            {/* Office Visual */}
            <div className="glass-card" style={{ padding: '0.75rem', overflow: 'hidden' }}>
              <div style={{ position: 'relative', width: '100%', height: '340px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <Image
                  src="/images/company_office.jpg"
                  alt="OSINC Infobit Chennai Global Headquarters"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Core <span className="gradient-text">Values & Philosophy</span></h2>
            <p>The principles that guide every line of code we write and every solution we architect.</p>
          </div>

          <div className="grid-2">
            {values.map((v, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', fontSize: '0.9rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Simple CTA banner instead of full duplicated form */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/contact" className="btn-primary">
              <span>Connect With Chennai Team</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
