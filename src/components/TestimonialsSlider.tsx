'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, Building2 } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  industry: string;
  content: string;
  rating: number;
  metric: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'FinVault Global',
    industry: 'FinTech',
    content: 'OSINC Infobit completely transformed our legacy core banking software into a high-concurrency microservices platform. Their AI automated compliance engine reduced our transaction audit times by 65%. Exceptional engineering precision.',
    rating: 5,
    metric: '65% Faster Compliance Audits'
  },
  {
    id: 2,
    name: 'Dr. Elena Rostova',
    role: 'VP of Product Engineering',
    company: 'MediHealth AI',
    industry: 'HealthTech',
    content: 'The machine learning RAG model developed by OSINC Infobit allowed our clinical research team to analyze millions of anonymized patient records in seconds. Their HIPAA compliance knowledge was top-tier.',
    rating: 5,
    metric: '10x Faster Clinical Data Querying'
  },
  {
    id: 3,
    name: 'David Sterling',
    role: 'Founder & CEO',
    company: 'OmniCart Commerce',
    industry: 'E-Commerce',
    content: 'We migrated our entire e-commerce infrastructure to Next.js and AWS with OSINC Infobit. Our mobile conversion rates jumped by 42% and page load speeds hit sub-300ms across North America.',
    rating: 5,
    metric: '+42% Mobile Conversion Boost'
  }
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Client Success</span>
          </div>
          <h2>Trusted By Leaders <span className="gradient-text">Across the Globe</span></h2>
          <p>
            Here is how OSINC Infobit empowers Fortune 500 enterprises and hyper-growth tech startups.
          </p>
        </div>

        {/* Carousel Card */}
        <div style={{ maxWidth: '880px', margin: '0 auto', position: 'relative' }}>
          <div className="glass-card" style={{
            padding: '3rem 3.5rem',
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(13, 17, 39, 0.9) 0%, rgba(20, 28, 58, 0.9) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            boxShadow: 'var(--shadow-luxe)'
          }}>
            
            <Quote size={48} color="var(--accent-indigo)" style={{ opacity: 0.3, position: 'absolute', top: '2rem', right: '2.5rem' }} />

            {/* Metric Callout Tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--accent-emerald)',
              fontWeight: 600,
              fontSize: '0.85rem',
              marginBottom: '1.75rem'
            }}>
              <Building2 size={16} />
              <span>{current.metric}</span>
            </div>

            {/* Rating Stars */}
            <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.25rem' }}>
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="var(--accent-amber)" color="var(--accent-amber)" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p style={{
              color: '#ffffff',
              fontSize: '1.25rem',
              lineHeight: '1.7',
              fontStyle: 'italic',
              marginBottom: '2rem',
              fontFamily: 'var(--font-inter)'
            }}>
              "{current.content}"
            </p>

            {/* Author Info */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '1.15rem', color: '#ffffff' }}>
                  {current.name}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {current.role} • <span style={{ color: 'var(--accent-cyan)' }}>{current.company}</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={prev}
                  aria-label="Previous Testimonial"
                  suppressHydrationWarning
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={next}
                  aria-label="Next Testimonial"
                  suppressHydrationWarning
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--gradient-brand)',
                    border: 'none',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
