'use client';

import React, { useState } from 'react';
import { Sparkles, MapPin, Clock, ArrowRight, CheckCircle2, X } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  desc: string;
  requirements: string[];
}

const openPositions: JobPosition[] = [
  {
    id: 'lead-next-eng',
    title: 'Senior Full-Stack Engineer (Next.js & Node.js)',
    department: 'Engineering',
    type: 'Full-Time / Hybrid',
    location: 'Chennai HQ (OMR)',
    experience: '5+ Years',
    desc: 'Lead the architecture of enterprise web applications using Next.js 15, TypeScript, Tailwind/CSS modules, and GraphQL backend microservices.',
    requirements: [
      'Deep mastery of React 19, Next.js App Router, SSR, and Server Components',
      'Strong proficiency with Node.js/TypeScript REST & GraphQL APIs',
      'Experience with PostgreSQL, Redis, Docker, and AWS deployments',
      'Track record of building sub-second web platforms'
    ]
  },
  {
    id: 'ai-ml-architect',
    title: 'Senior AI & LLM Systems Architect',
    department: 'Artificial Intelligence',
    type: 'Full-Time',
    location: 'Chennai HQ / Hybrid',
    experience: '4+ Years',
    desc: 'Design and deploy production RAG pipelines, fine-tune open-weight LLM models (Llama 3, Mistral), and build AI agent workflows.',
    requirements: [
      'Hands-on experience with PyTorch, LangChain, LlamaIndex, Vector DBs (Milvus/Pinecone)',
      'Proficiency in Python FastAPI and asynchronous data pipelines',
      'Understanding of prompt engineering, fine-tuning, and model quantization',
      'Published AI research or production AI applications'
    ]
  },
  {
    id: 'cloud-devops-lead',
    title: 'DevOps & Cloud Infrastructure Lead',
    department: 'Cloud & Infrastructure',
    type: 'Full-Time',
    location: 'Chennai HQ / Remote',
    experience: '6+ Years',
    desc: 'Manage multi-cloud AWS/GCP Kubernetes clusters, automate IaC Terraform scripts, and ensure SOC-2 security compliance.',
    requirements: [
      'Expertise in Kubernetes (EKS/GKE), Helm charts, and Service Mesh',
      'Proficiency in Terraform, GitHub Actions CI/CD pipelines',
      'Deep knowledge of cloud security, IAM, Vault, and DDoS mitigation',
      'AWS Certified Solutions Architect certification preferred'
    ]
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applied, setApplied] = useState(false);

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
            <span>Join OSINC Infobit</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '0.8rem' }}>
            Build the Future of <span className="gradient-text">Software & AI</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto' }}>
            Work alongside top-tier engineers, AI researchers, and cloud architects in Chennai, India.
          </p>
        </div>
      </section>

      {/* Open Positions List */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>Current Open <span className="gradient-text">Positions</span></h2>
            <p>Explore opportunities to join OSINC Infobit team in Chennai.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '850px', margin: '0 auto' }}>
            {openPositions.map((job) => (
              <div key={job.id} className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem' }}>
                <div>
                  <span className="badge" style={{ fontSize: '0.7rem', marginBottom: '0.4rem' }}>{job.department}</span>
                  <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.3rem' }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={14} />{job.location}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} />{job.type}</span>
                  </div>
                </div>

                <button onClick={() => setSelectedJob(job)} className="btn-primary" style={{ padding: '0.65rem 1.3rem', fontSize: '0.85rem' }}>
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Job Application Modal */}
          {selectedJob && (
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
                maxWidth: '650px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '2rem',
                position: 'relative',
                background: '#0d1127'
              }}>
                <button
                  onClick={() => { setSelectedJob(null); setApplied(false); }}
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

                {applied ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <CheckCircle2 size={44} color="var(--accent-emerald)" style={{ margin: '0 auto 1rem auto' }} />
                    <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Application Submitted!</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Our HR team at Chennai HQ will review your profile within 3 business days.</p>
                  </div>
                ) : (
                  <div>
                    <span className="badge" style={{ marginBottom: '0.4rem' }}>{selectedJob.department}</span>
                    <h2 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{selectedJob.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1.25rem', fontSize: '0.9rem' }}>{selectedJob.desc}</p>

                    <h4 style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Requirements:</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                      {selectedJob.requirements.map((req, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.85rem' }}>
                          <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>

                    <button onClick={() => setApplied(true)} className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                      Submit Quick Application
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
