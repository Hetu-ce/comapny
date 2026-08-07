'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'AI & Data' | 'Mobile';
  level: string;
  iconText: string;
}

export const techStackData: TechItem[] = [
  { name: 'Next.js 15', category: 'Frontend', level: 'Core Competency', iconText: 'N' },
  { name: 'React 19', category: 'Frontend', level: 'Expert', iconText: 'R' },
  { name: 'TypeScript', category: 'Frontend', level: 'Standard', iconText: 'TS' },
  { name: 'Vue.js / Nuxt', category: 'Frontend', level: 'Proficient', iconText: 'V' },

  { name: 'Node.js', category: 'Backend', level: 'Expert', iconText: 'Node' },
  { name: 'Python FastAPI', category: 'Backend', level: 'Expert', iconText: 'Py' },
  { name: 'Java Spring Boot', category: 'Backend', level: 'Enterprise', iconText: 'J' },
  { name: 'Go (Golang)', category: 'Backend', level: 'High Throughput', iconText: 'Go' },
  { name: 'PostgreSQL', category: 'Backend', level: 'Database', iconText: 'PG' },
  { name: 'Redis', category: 'Backend', level: 'In-Memory Cache', iconText: 'RD' },

  { name: 'Amazon Web Services', category: 'Cloud & DevOps', level: 'AWS Partner', iconText: 'AWS' },
  { name: 'Docker & Kubernetes', category: 'Cloud & DevOps', level: 'Containerized', iconText: 'K8s' },
  { name: 'Terraform', category: 'Cloud & DevOps', level: 'Infrastructure as Code', iconText: 'TF' },
  { name: 'Google Cloud Platform', category: 'Cloud & DevOps', level: 'GCP Cloud', iconText: 'GCP' },

  { name: 'PyTorch & TensorFlow', category: 'AI & Data', level: 'Deep Learning', iconText: 'AI' },
  { name: 'OpenAI / Claude APIs', category: 'AI & Data', level: 'LLM Agents', iconText: 'LLM' },
  { name: 'LangChain & LlamaIndex', category: 'AI & Data', level: 'RAG Systems', iconText: 'LC' },
  { name: 'Milvus & Pinecone', category: 'AI & Data', level: 'Vector DB', iconText: 'Vec' },

  { name: 'React Native', category: 'Mobile', level: 'Cross-Platform', iconText: 'RN' },
  { name: 'Flutter & Dart', category: 'Mobile', level: 'Native Speed', iconText: 'FL' },
  { name: 'iOS Swift', category: 'Mobile', level: 'Apple Ecosystem', iconText: 'Swift' },
];

export default function TechStackGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Cloud & DevOps', 'AI & Data', 'Mobile'];

  const filteredTech = activeCategory === 'All'
    ? techStackData
    : techStackData.filter(t => t.category === activeCategory);

  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Modern Tech Stack</span>
          </div>
          <h2>Powering Innovation With <span className="gradient-text">Proven Technologies</span></h2>
          <p>
            We leverage cutting-edge frameworks, robust cloud architectures, and battle-tested databases to build high-performance enterprise systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              suppressHydrationWarning
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-outfit)',
                fontWeight: 600,
                fontSize: '0.9rem',
                border: activeCategory === cat ? '1px solid var(--accent-indigo)' : '1px solid var(--border-color)',
                background: activeCategory === cat ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.04)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === cat ? '0 4px 15px rgba(99, 102, 241, 0.3)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-outfit)',
                fontWeight: 800,
                color: 'var(--accent-cyan)',
                fontSize: '1rem',
                flexShrink: 0
              }}>
                {tech.iconText}
              </div>

              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.2rem' }}>
                  {tech.name}
                </h4>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                  {tech.level}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
