'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Code2, 
  BrainCircuit, 
  Cloud, 
  Smartphone, 
  ShieldAlert, 
  Palette, 
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: any;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  techUsed: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Enterprise Software',
    category: 'Engineering',
    icon: Code2,
    shortDesc: 'Tailor-made scalable enterprise SaaS platforms, microservices architecture, and legacy system modernization.',
    fullDesc: 'We design and build mission-critical enterprise platforms engineered for high throughput, seamless integration, and long-term maintainability. From complex ERP/CRM engines to distributed real-time backend microservices.',
    benefits: ['Scalable Microservices Architecture', 'High-Concurrency API Engine', 'Seamless Database Migration', '99.99% Reliability SLA'],
    techUsed: ['Java / Spring Boot', 'Node.js / TypeScript', 'PostgreSQL / Redis', 'Kafka', 'Docker / Kubernetes'],
    image: '/images/software_dev.jpg'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Solutions',
    category: 'Artificial Intelligence',
    icon: BrainCircuit,
    shortDesc: 'Custom LLM agents, predictive analytics, computer vision, and retrieval-augmented generation (RAG) models.',
    fullDesc: 'Empower your enterprise with custom trained AI solutions. We build intelligent recommendation engines, automated NLP workflows, agentic AI assistants, and enterprise RAG systems trained on your private domain data.',
    benefits: ['Private & Secure Domain Fine-Tuning', 'Reduced Operational Overhead', 'Real-Time Predictive Analytics', 'Custom RAG Architectures'],
    techUsed: ['PyTorch / TensorFlow', 'LangChain / LlamaIndex', 'OpenAI / Claude API', 'Pinecone / Milvus', 'Python FastAPI'],
    image: '/images/services_ai_cloud.jpg'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Architecture & DevOps',
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    shortDesc: 'AWS, Azure, & GCP multi-cloud deployment, CI/CD automation pipelines, serverless, and Kubernetes management.',
    fullDesc: 'Accelerate your deployment pipeline and optimize cloud infrastructure costs. We handle cloud migration, IaC Terraform scripting, zero-downtime deployment pipelines, and 24/7 cluster monitoring.',
    benefits: ['Up to 40% Infrastructure Cost Reduction', 'Automated CI/CD Workflows', 'Zero-Downtime Deployment', 'Proactive Threat Monitoring'],
    techUsed: ['AWS / Azure / GCP', 'Terraform / Ansible', 'Kubernetes / Helm', 'GitHub Actions / Jenkins', 'Prometheus / Datadog'],
    image: '/images/hero_tech_bg.jpg'
  },
  {
    id: 'web-mobile-app',
    title: 'Full-Stack Web & Mobile Engineering',
    category: 'Engineering',
    icon: Smartphone,
    shortDesc: 'Ultra-fast Next.js web applications and native cross-platform iOS & Android mobile apps.',
    fullDesc: 'Delivering pixel-perfect, lightning-fast web applications and mobile experiences using modern frameworks like React, Next.js, React Native, and Flutter.',
    benefits: ['Sub-second Page Load Times', 'Cross-Platform iOS & Android Codebase', 'SEO & Core Web Vitals Optimization', 'Offline First Architecture'],
    techUsed: ['Next.js 15 / React', 'React Native / Expo', 'Flutter / Dart', 'GraphQL / REST APIs', 'Tailwind / Vanilla CSS'],
    image: '/images/software_dev.jpg'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    category: 'Cloud & Infrastructure',
    icon: ShieldAlert,
    shortDesc: 'Vulnerability assessment, penetration testing, SOC-2 compliance, zero-trust security architecture.',
    fullDesc: 'Protect your enterprise digital assets against cyber threats. We conduct comprehensive security audits, penetration testing, IAM access controls, and data encryption protocols.',
    benefits: ['SOC-2 & GDPR Compliance Ready', 'Zero-Trust IAM Security', 'Continuous Vulnerability Scans', 'Data Breach Prevention'],
    techUsed: ['OWASP Top 10 Audit', 'Vault / Key Management', 'WAF & DDoS Mitigation', 'SIEM Threat Detection'],
    image: '/images/services_ai_cloud.jpg'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    category: 'Design & Product',
    icon: Palette,
    shortDesc: 'Human-centered product design, wireframing, high-fidelity prototypes, and comprehensive design systems.',
    fullDesc: 'We turn complex workflows into intuitive, beautiful user interfaces that boost conversion rates, lower onboarding friction, and delight users.',
    benefits: ['User Journey & Persona Analysis', 'Design System & Component Library', 'Interactive High-Fidelity Prototypes', 'A/B Test UX Optimization'],
    techUsed: ['Figma / Framer', 'Design Tokens & CSS Systems', 'User Testing / Heatmaps', 'Accessibility (WCAG 2.1)'],
    image: '/images/portfolio_dashboard.jpg'
  }
];

export default function ServicesOverview({ showTitle = true, limit = 6 }: { showTitle?: boolean; limit?: number }) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const displayedServices = servicesData.slice(0, limit);

  return (
    <section style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {showTitle && (
          <div className="section-header">
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} />
              <span>Core Expertise</span>
            </div>
            <h2>Enterprise <span className="gradient-text">IT Services & Solutions</span></h2>
            <p>
              From strategy to execution, OSINC Infobit delivers scalable engineering solutions tailored to accelerate your business growth.
            </p>
          </div>
        )}

        {/* Services Cards Grid */}
        <div className="grid-3">
          {displayedServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedService(service)}
              >
                <div>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    marginBottom: '1.5rem'
                  }}>
                    <Icon size={26} />
                  </div>

                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                    {service.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {service.shortDesc}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginTop: '1rem'
                }}>
                  <span>Explore Capabilities</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Service Details */}
        {selectedService && (
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
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2.5rem',
              position: 'relative',
              background: '#0d1127'
            }}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  flexShrink: 0
                }}>
                  {React.createElement(selectedService.icon, { size: 30 })}
                </div>
                <div>
                  <span className="badge" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                    {selectedService.category}
                  </span>
                  <h3 style={{ fontSize: '1.6rem', color: '#ffffff' }}>{selectedService.title}</h3>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {selectedService.fullDesc}
              </p>

              {/* Service Benefits */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1rem' }}>Key Enterprise Benefits</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
                  {selectedService.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--accent-emerald)" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Used */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1rem' }}>Core Technologies</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedService.techUsed.map((tech, tIdx) => (
                    <span key={tIdx} style={{
                      padding: '0.4rem 0.8rem',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      color: 'var(--accent-cyan)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                <Link href="/contact" className="btn-primary" style={{ width: '100%' }}>
                  <span>Request Proposal for {selectedService.title}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
