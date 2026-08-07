'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, TrendingUp, CheckCircle, X } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  metric: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  techUsed: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'finbank-core',
    title: 'Next-Gen FinTech Banking Engine & Fraud AI',
    category: 'FinTech',
    client: 'Global FinVault Ltd',
    metric: '65% Faster Audit & zero fraud downtime',
    summary: 'Built high-concurrency ledger backend handling 50,000+ API calls/sec with automated AI fraud detection.',
    challenge: 'Legacy core banking system experienced high latency during peak trading hours and suffered long compliance audit cycles.',
    solution: 'Engineered event-driven microservices architecture on AWS EKS with PyTorch real-time anomaly detection models.',
    impact: [
      'Sub-50ms API response time globally',
      'Processed $4.2B in annualized transaction volume',
      'SOC-2 Type II and PCI-DSS compliance certified'
    ],
    techUsed: ['Java Spring Boot', 'Kafka', 'PyTorch', 'AWS EKS', 'PostgreSQL'],
    image: '/images/portfolio_dashboard.jpg'
  },
  {
    id: 'health-rag',
    title: 'HIPAA Medical AI Knowledge Base & RAG Assistant',
    category: 'HealthTech',
    client: 'MediCare Diagnostics',
    metric: '10x Faster Clinical Data Lookup',
    summary: 'Custom RAG model enabling doctors to query millions of clinical papers and patient histories securely.',
    challenge: 'Physicians spent 2+ hours daily sifting through unstructured medical charts and scientific literature.',
    solution: 'Designed private vector database indexing clinical records with fine-tuned Llama-3 model behind encrypted API.',
    impact: [
      'Reduced document retrieval time from 15 mins to 2 seconds',
      '100% HIPAA compliant data pipeline',
      'Adopted by 1,200+ active medical practitioners'
    ],
    techUsed: ['Python FastAPI', 'Milvus Vector DB', 'LangChain', 'Llama-3', 'Docker'],
    image: '/images/services_ai_cloud.jpg'
  },
  {
    id: 'omnicart-next',
    title: 'Global Headless E-Commerce Platform',
    category: 'E-Commerce',
    client: 'OmniCart Enterprise',
    metric: '+42% Mobile Conversion Rate',
    summary: 'Headless Next.js storefront powering 100,000+ SKU catalog across North America and Europe.',
    challenge: 'Monolithic legacy web shop had slow 4.5s load times on mobile devices, causing high cart abandonment.',
    solution: 'Rebuilt storefront using Next.js App Router, edge caching, and serverless payment APIs.',
    impact: [
      '99/100 Google Lighthouse Performance Score',
      'Page load time reduced to sub-300ms',
      '+42% increase in mobile checkout conversions'
    ],
    techUsed: ['Next.js 15', 'TypeScript', 'Stripe API', 'Redis', 'Vercel Edge'],
    image: '/images/software_dev.jpg'
  },
  {
    id: 'smartcity-iot',
    title: 'Smart Energy & IoT Cloud Operations Center',
    category: 'Smart City & SaaS',
    client: 'EcoGrid Technologies',
    metric: '30% Energy Savings Across 5 Cities',
    summary: 'IoT telemetry pipeline processing sensor data from 500,000 smart energy meters in real-time.',
    challenge: 'Inability to aggregate high-frequency IoT streaming telemetry from distributed electrical grid sensors.',
    solution: 'Created distributed MQTT broker with Apache Flink real-time streaming dashboard for grid operators.',
    impact: [
      'Ingested 1B daily data points reliably',
      'Prevented 14 potential regional grid outages',
      'Saved 30% in peak load power costs'
    ],
    techUsed: ['Golang', 'Apache Flink', 'TimescaleDB', 'Kubernetes', 'Grafana'],
    image: '/images/hero_tech_bg.jpg'
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'FinTech', 'HealthTech', 'E-Commerce', 'Smart City & SaaS'];

  const filteredStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === selectedCategory);

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      
      {/* Header Banner */}
      <section style={{
        padding: '3rem 0 2rem 0',
        background: 'radial-gradient(ellipse at top, #0f172a 0%, #070913 100%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="badge" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} />
            <span>Proven Track Record</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>
            Featured Work & <span className="gradient-text">Case Studies</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto' }}>
            Explore how OSINC Infobit partners with enterprise organizations to solve complex technical challenges.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          
          {/* Category Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  border: selectedCategory === cat ? '1px solid var(--accent-indigo)' : '1px solid var(--border-color)',
                  background: selectedCategory === cat ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.04)',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-2">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="glass-card"
                style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                onClick={() => setActiveCaseStudy(study)}
              >
                <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '0.8rem',
                    left: '0.8rem',
                    background: 'rgba(7, 9, 19, 0.85)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {study.category}
                  </div>
                </div>

                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      <TrendingUp size={15} />
                      <span>{study.metric}</span>
                    </div>

                    <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                      {study.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                      {study.summary}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.85rem' }}>
                    <span>Read Case Study</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for Case Study Details */}
          {activeCaseStudy && (
            <div style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(7, 9, 19, 0.85)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}>
              <div className="glass-card" style={{
                maxWidth: '750px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '2rem',
                position: 'relative',
                background: '#0d1127'
              }}>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: 'none',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <X size={18} />
                </button>

                <span className="badge" style={{ marginBottom: '0.5rem' }}>{activeCaseStudy.category} • {activeCaseStudy.client}</span>
                <h2 style={{ color: '#ffffff', fontSize: '1.6rem', marginBottom: '0.75rem' }}>{activeCaseStudy.title}</h2>

                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.85rem 1rem', borderRadius: '10px', color: 'var(--accent-emerald)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  Impact: {activeCaseStudy.metric}
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <h4 style={{ color: '#ffffff', marginBottom: '0.3rem', fontSize: '0.95rem' }}>The Challenge</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', fontSize: '0.9rem' }}>{activeCaseStudy.challenge}</p>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <h4 style={{ color: '#ffffff', marginBottom: '0.3rem', fontSize: '0.95rem' }}>OSINC Infobit Solution</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', fontSize: '0.9rem' }}>{activeCaseStudy.solution}</p>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <h4 style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Key Measurable Outcomes</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {activeCaseStudy.impact.map((imp, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontSize: '0.85rem' }}>
                        <CheckCircle size={15} color="var(--accent-cyan)" />
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <Link href="/contact" className="btn-primary" style={{ width: '100%' }}>
                    Build Similar Solution With OSINC Infobit
                  </Link>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* Simple CTA Banner */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-secondary)', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.8rem' }}>
            Have a Project in Mind?
          </h2>
          <Link href="/contact" className="btn-primary">
            <span>Connect With Us</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
