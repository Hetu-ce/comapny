'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Send, 
  BookOpen, 
  Code2, 
  BrainCircuit, 
  Cloud, 
  Smartphone, 
  Palette, 
  ShieldCheck, 
  User, 
  MapPin, 
  Building2,
  Award,
  Check,
  AlertTriangle
} from 'lucide-react';

export interface DomainOption {
  id: string;
  title: string;
  category: string;
  icon: any;
  duration: string;
  techTags: string[];
  desc: string;
}

export const internshipDomains: DomainOption[] = [
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Engineering',
    category: 'Development',
    icon: Code2,
    duration: '3 - 6 Months',
    techTags: ['Next.js 15', 'React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    desc: 'Master modern frontend & backend architectures by building real-world enterprise web portals.'
  },
  {
    id: 'ai-ml',
    title: 'AI, Machine Learning & LLMs',
    category: 'Artificial Intelligence',
    icon: BrainCircuit,
    duration: '3 - 6 Months',
    techTags: ['Python', 'PyTorch', 'LangChain', 'RAG', 'FastAPI'],
    desc: 'Work on cutting-edge AI models, fine-tuning LLMs, vector search, and intelligent automation.'
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile App Dev',
    category: 'Mobile Engineering',
    icon: Smartphone,
    duration: '3 - 6 Months',
    techTags: ['React Native', 'Flutter', 'iOS/Android', 'REST APIs'],
    desc: 'Build high-performance native mobile applications for iOS and Android devices.'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Architecture & DevOps',
    category: 'Infrastructure',
    icon: Cloud,
    duration: '3 - 6 Months',
    techTags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    desc: 'Learn cloud infrastructure provisioning, container orchestrations, and automated deployment pipelines.'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    category: 'Design',
    icon: Palette,
    duration: '3 - 6 Months',
    techTags: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
    desc: 'Craft intuitive user journeys, wireframing, high-fidelity prototypes, and component design systems.'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    category: 'Security',
    icon: ShieldCheck,
    duration: '3 - 6 Months',
    techTags: ['OWASP', 'Penetration Testing', 'Network Security', 'IAM'],
    desc: 'Perform vulnerability assessments, security compliance audits, and system threat analysis.'
  }
];

const GOOGLE_SCRIPT_WEBHOOK = 'https://script.google.com/macros/s/AKfycbw1iVsL_WZhxbqdZIzx0kQzFZJSLQkvYZVDx1b5aoaqoLqIJBXwD5i6bi2g5Nea280R3w/exec';

export default function InternshipForm() {
  const [selectedDomain, setSelectedDomain] = useState<string>('fullstack-web');
  const [internshipType, setInternshipType] = useState<string>('6 Months Industrial Training');
  
  const [studentData, setStudentData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeName: '',
    degreeCourse: 'B.Tech / B.E (Computer / IT)',
    currentYear: '3rd Year',
    currentSem: '6th Semester',
    cityAddress: 'Chennai',
    fullAddress: '',
    githubUrl: '',
    skills: '',
    coverNote: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [appId, setAppId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const generatedId = 'OSINC-INT-' + Math.floor(100000 + Math.random() * 900000);
    const selectedDomainObj = internshipDomains.find(d => d.id === selectedDomain) || internshipDomains[0];

    const payload = {
      appId: generatedId,
      domain: selectedDomainObj.title,
      internshipType,
      fullName: studentData.fullName,
      email: studentData.email,
      phone: studentData.phone,
      collegeName: studentData.collegeName,
      degreeCourse: studentData.degreeCourse,
      currentYear: studentData.currentYear,
      currentSem: studentData.currentSem,
      cityAddress: studentData.cityAddress,
      fullAddress: studentData.fullAddress,
      submittedAt: new Date().toLocaleString()
    };

    try {
      const res = await fetch('/api/internship', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      if (!res.ok || result.duplicate) {
        setErrorMsg(result.message || 'This email or phone number has already been used for an internship application. Each student can apply only once.');
        setLoading(false);
        return;
      }

      setAppId(generatedId);
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error('Submit error:', err);
      setErrorMsg('Something went wrong. Please check your internet connection and try again.');
      setLoading(false);
    }
  };

  const selectedDomainObj = internshipDomains.find(d => d.id === selectedDomain) || internshipDomains[0];

  return (
    <section id="internship-form" style={{ padding: '3.5rem 0', position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <div className="badge" style={{ marginBottom: '0.8rem' }}>
            <GraduationCap size={16} />
            <span>OSINC Infobit Academy • Chennai HQ</span>
          </div>
          <h2>Student Internship & <span className="gradient-text">Industrial Training Program</span></h2>
          <p>
            Select your domain and complete your application to join our engineering teams in Chennai or remote.
          </p>
        </div>

        {/* Step 1: Select Internship Domain */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-outfit)' }}>
            <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--gradient-brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: '#fff' }}>1</span>
            <span>Choose Internship Domain</span>
          </h3>

          <div className="grid-3">
            {internshipDomains.map((domain) => {
              const Icon = domain.icon;
              const isSelected = selectedDomain === domain.id;
              return (
                <div
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain.id)}
                  className="glass-card"
                  style={{
                    padding: '1.4rem',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(99, 102, 241, 0.15)' : 'var(--bg-card)',
                    border: isSelected ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                    boxShadow: isSelected ? '0 0 20px rgba(56, 189, 248, 0.25)' : 'var(--shadow-card)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {isSelected && (
                    <div style={{
                      position: 'absolute',
                      top: '0.8rem',
                      right: '0.8rem',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan)',
                      color: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Check size={14} />
                    </div>
                  )}

                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: isSelected ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    marginBottom: '1rem'
                  }}>
                    <Icon size={20} />
                  </div>

                  <span className="badge" style={{ fontSize: '0.68rem', marginBottom: '0.3rem' }}>{domain.category}</span>
                  <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '0.4rem' }}>{domain.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.4', marginBottom: '1rem' }}>
                    {domain.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {domain.techTags.map((tech, tIdx) => (
                      <span key={tIdx} style={{
                        fontSize: '0.7rem',
                        padding: '0.15rem 0.5rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        color: 'var(--accent-cyan)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Student Application Form */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-outfit)' }}>
            <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--gradient-brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: '#fff' }}>2</span>
            <span>Student Academic & Personal Information</span>
          </h3>

          <div className="glass-card" style={{ padding: '2rem', background: '#0d1127' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '2px solid var(--accent-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                  color: 'var(--accent-emerald)'
                }}>
                  <CheckCircle2 size={36} />
                </div>

                <div className="badge" style={{ marginBottom: '1rem', background: 'rgba(56, 189, 248, 0.15)' }}>
                  <span>Application ID: {appId}</span>
                </div>

                <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                  Application Received!
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
                  Congratulations <strong>{studentData.fullName}</strong>! Your application for <strong>{selectedDomainObj.title}</strong> has been submitted.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStudentData({
                      fullName: '',
                      email: '',
                      phone: '',
                      collegeName: '',
                      degreeCourse: 'B.Tech / B.E (Computer / IT)',
                      currentYear: '3rd Year',
                      currentSem: '6th Semester',
                      cityAddress: 'Chennai',
                      fullAddress: '',
                      githubUrl: '',
                      skills: '',
                      coverNote: ''
                    });
                  }}
                  suppressHydrationWarning
                  className="btn-secondary"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} suppressHydrationWarning style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Duplicate / Error Banner */}
                {errorMsg && (
                  <div style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: '#fca5a5',
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    <AlertTriangle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, color: '#ef4444', marginBottom: '0.25rem' }}>Application Already Exists</div>
                      <span>{errorMsg}</span>
                    </div>
                  </div>
                )}
                
                {/* Selected Domain Banner */}
                <div style={{
                  padding: '0.85rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <BookOpen size={18} color="var(--accent-cyan)" />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Selected Domain:</div>
                      <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>{selectedDomainObj.title}</div>
                    </div>
                  </div>

                  <select
                    value={internshipType}
                    onChange={(e) => setInternshipType(e.target.value)}
                    suppressHydrationWarning
                    className="form-select"
                    style={{ fontSize: '0.82rem', padding: '0.45rem 0.75rem', width: 'auto' }}
                  >
                    <option value="6 Months Industrial Training">6 Months Industrial Training</option>
                    <option value="3 Months Summer Internship">3 Months Summer Internship</option>
                    <option value="Final Year Project Training">Final Year Project Training</option>
                  </select>
                </div>

                {/* Section A: Personal */}
                <div>
                  <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <User size={16} />
                    <span>A. Personal Information</span>
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={studentData.fullName}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="anand.k@student.edu.in"
                        value={studentData.email}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={studentData.phone}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Section B: Academic */}
                <div>
                  <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Building2 size={16} />
                    <span>B. College & Academic Information</span>
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem', marginBottom: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        College / University Name *
                      </label>
                      <input
                        type="text"
                        name="collegeName"
                        required
                        placeholder="e.g. Anna University / SRM Institute / VIT / GTU"
                        value={studentData.collegeName}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        Degree / Course *
                      </label>
                      <select
                        name="degreeCourse"
                        value={studentData.degreeCourse}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-select"
                      >
                        <option value="B.Tech / B.E (Computer / IT)">B.Tech / B.E (Computer / IT)</option>
                        <option value="BCA (Bachelor of Computer Apps)">BCA (Bachelor of Computer Apps)</option>
                        <option value="MCA (Master of Computer Apps)">MCA (Master of Computer Apps)</option>
                        <option value="M.Tech / M.E (Software Eng)">M.Tech / M.E (Software Eng)</option>
                        <option value="Diploma Engineering (CS/IT)">Diploma Engineering (CS/IT)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        Academic Year *
                      </label>
                      <select
                        name="currentYear"
                        value={studentData.currentYear}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-select"
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year (Final Year)">4th Year (Final Year)</option>
                        <option value="Passed Out Graduate">Passed Out Graduate</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        Semester *
                      </label>
                      <select
                        name="currentSem"
                        value={studentData.currentSem}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-select"
                      >
                        <option value="Sem 1">Sem 1</option>
                        <option value="Sem 2">Sem 2</option>
                        <option value="Sem 3">Sem 3</option>
                        <option value="Sem 4">Sem 4</option>
                        <option value="Sem 5">Sem 5</option>
                        <option value="Sem 6">Sem 6</option>
                        <option value="Sem 7">Sem 7</option>
                        <option value="Sem 8">Sem 8</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section C: Location & Skills */}
                <div>
                  <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={16} />
                    <span>C. Address & Skills</span>
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.85rem', marginBottom: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        City / Town *
                      </label>
                      <input
                        type="text"
                        name="cityAddress"
                        required
                        placeholder="e.g. Chennai / Coimbatore"
                        value={studentData.cityAddress}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        Residential Address *
                      </label>
                      <input
                        type="text"
                        name="fullAddress"
                        required
                        placeholder="Street, Area, Pincode"
                        value={studentData.fullAddress}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        GitHub / LinkedIn Link
                      </label>
                      <input
                        type="url"
                        name="githubUrl"
                        placeholder="https://github.com/yourprofile"
                        value={studentData.githubUrl}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                        Programming Skills
                      </label>
                      <input
                        type="text"
                        name="skills"
                        placeholder="e.g. Java, Python, C++, React, SQL"
                        value={studentData.skills}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald)', fontSize: '0.8rem' }}>
                  <Award size={15} />
                  <span>Includes Official Industrial Internship Certificate & Live Project Experience Letter.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  suppressHydrationWarning
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.9rem', marginTop: '0.4rem', fontSize: '0.95rem' }}
                >
                  {loading ? (
                    <span>Processing Your Application...</span>
                  ) : (
                    <>
                      <span>Submit Internship Application</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
