'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

function FormInner() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'Custom Enterprise Software',
    budget: '$10k - $25k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const pType = searchParams?.get('projectType');
    const pCost = searchParams?.get('estimatedCost');
    if (pType || pCost) {
      setFormData(prev => ({
        ...prev,
        serviceType: pType || prev.serviceType,
        message: pCost ? `Estimated Project Scope from Tool: ${pType} | Estimated Budget: ${pCost}. Please send a detailed technical proposal.` : prev.message
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      serviceType: formData.serviceType,
      budget: formData.budget,
      message: formData.message,
      submittedAt: new Date().toLocaleString()
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      if (!res.ok) {
        setErrorMsg(result.message || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error('Submit error:', err);
      setErrorMsg('Something went wrong. Please check your internet connection and try again.');
      setLoading(false);
    }
  };

  return submitted ? (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'rgba(16, 185, 129, 0.15)',
        border: '2px solid var(--accent-emerald)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.5rem auto',
        color: 'var(--accent-emerald)'
      }}>
        <CheckCircle2 size={36} />
      </div>
      <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.75rem' }}>
        Thank You for Connecting!
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
        We have received your message. A dedicated Senior Solutions Architect from <strong>OSINC Infobit Chennai HQ</strong> will review your requirements and get back to you.
      </p>
      <button
        onClick={() => {
          setSubmitted(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            company: '',
            serviceType: 'Custom Enterprise Software',
            budget: '$10k - $25k',
            message: ''
          });
        }}
        suppressHydrationWarning
        className="btn-secondary"
      >
        Send Another Inquiry
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} suppressHydrationWarning style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
        Send Us a Direct Message
      </h3>

      {/* Error Banner */}
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
            <div style={{ fontWeight: 700, color: '#ef4444', marginBottom: '0.25rem' }}>Submission Failed</div>
            <span>{errorMsg}</span>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            suppressHydrationWarning
            className="form-input"
          />
        </div>

        <div>
          <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
            Work Email *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            suppressHydrationWarning
            className="form-input"
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            suppressHydrationWarning
            className="form-input"
          />
        </div>

        <div>
          <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
            Company / Organization
          </label>
          <input
            type="text"
            name="company"
            placeholder="Acme Tech Inc."
            value={formData.company}
            onChange={handleChange}
            suppressHydrationWarning
            className="form-input"
          />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
          Inquiry Category *
        </label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          suppressHydrationWarning
          className="form-select"
        >
          <option value="Custom Enterprise Software">Custom Enterprise Software</option>
          <option value="AI & Machine Learning Solutions">AI & Machine Learning Solutions</option>
          <option value="Cloud Architecture & DevOps">Cloud Architecture & DevOps</option>
          <option value="Full-Stack Web & Mobile App">Full-Stack Web & Mobile App</option>
          <option value="Cybersecurity & Compliance Audit">Cybersecurity & Compliance Audit</option>
          <option value="General Technical Consultation">General Technical Consultation</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
          Target Project Budget Range
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          suppressHydrationWarning
          className="form-select"
        >
          <option value="<$10k">Under $10,000 USD</option>
          <option value="$10k - $25k">$10,000 - $25,000 USD</option>
          <option value="$25k - $50k">$25,000 - $50,000 USD</option>
          <option value="$50k+">$50,000+ Enterprise Scope</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
          Project Requirements / Details *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project goals, technical requirements, or timeline..."
          value={formData.message}
          onChange={handleChange}
          suppressHydrationWarning
          className="form-textarea"
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        <ShieldCheck size={16} color="var(--accent-emerald)" />
        <span>Strict NDA guaranteed. We protect your enterprise intellectual property.</span>
      </div>

      <button
        type="submit"
        disabled={loading}
        suppressHydrationWarning
        className="btn-primary"
        style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', fontSize: '1rem' }}
      >
        {loading ? (
          <span>Submitting Your Inquiry...</span>
        ) : (
          <>
            <span>Submit Inquiry</span>
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}

export default function ConnectUsForm() {
  const [selectedOffice, setSelectedOffice] = useState<'chennai' | 'us' | 'uk'>('chennai');

  const offices = {
    chennai: {
      city: 'Chennai (Global HQ)',
      address: 'OSINC Infobit Tech Hub, Rajiv Gandhi Salai (OMR), Taramani IT Corridor, Chennai 600113, Tamil Nadu, India',
      phone: '+91 (044) 4900-8800',
      email: 'chennai.hq@osincinfobit.com',
      hours: '09:00 AM - 08:00 PM IST'
    },
    us: {
      city: 'San Francisco (Americas Hub)',
      address: '500 Howard Street, Suite 400, Financial District, San Francisco, CA 94105, USA',
      phone: '+1 (415) 890-3210',
      email: 'us.sales@osincinfobit.com',
      hours: '08:00 AM - 06:00 PM PST'
    },
    uk: {
      city: 'London (EMEA Hub)',
      address: '30 St Mary Axe, City of London, London EC3A 8EP, United Kingdom',
      phone: '+44 20 7946 0912',
      email: 'uk.office@osincinfobit.com',
      hours: '09:00 AM - 06:00 PM GMT'
    }
  };

  return (
    <section id="connect-us" style={{ padding: '4rem 0', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Get In Touch</span>
          </div>
          <h2>Connect With <span className="gradient-text">OSINC Infobit Team</span></h2>
          <p>
            Have a project in mind, need technical advisory, or want to explore custom software & AI solutions? Reach out to our solutions team today.
          </p>
        </div>

        {/* Live Status Header Strip */}
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto 2.5rem auto',
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          padding: '0.85rem 1.5rem',
          borderRadius: 'var(--radius-full)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.9rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 10px var(--accent-emerald)' }} />
            <span>OSINC Technical Advisory Team (Chennai HQ) is Currently Online</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
            <Clock size={16} color="var(--accent-cyan)" />
            <span>Average initial response time: <strong>&lt; 15 Minutes</strong></span>
          </div>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          
          {/* Left: Contact Form wrapped in Suspense */}
          <div className="glass-card" style={{ padding: '2.5rem', background: '#0d1127' }}>
            <Suspense fallback={<div style={{ color: 'var(--text-secondary)', padding: '2rem 0' }}>Loading contact form...</div>}>
              <FormInner />
            </Suspense>
          </div>

          {/* Right: Office & Direct Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Global Locations Switcher */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-outfit)' }}>
                Global Offices & Hubs
              </h4>

              {/* Office Selector Tabs */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                {(['chennai', 'us', 'uk'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedOffice(key)}
                    suppressHydrationWarning
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      background: selectedOffice === key ? 'var(--gradient-brand)' : 'transparent',
                      color: selectedOffice === key ? '#ffffff' : 'var(--text-secondary)'
                    }}
                  >
                    {key === 'chennai' ? '🇮🇳 Chennai HQ' : key === 'us' ? '🇺🇸 USA Hub' : '🇬🇧 UK Office'}
                  </button>
                ))}
              </div>

              {/* Selected Office Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1.1rem' }}>
                  {offices[selectedOffice].city}
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{offices[selectedOffice].address}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={18} color="var(--accent-cyan)" />
                  <span>{offices[selectedOffice].phone}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail size={18} color="var(--accent-cyan)" />
                  <span>{offices[selectedOffice].email}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Clock size={18} color="var(--accent-amber)" />
                  <span>Working Hours: {offices[selectedOffice].hours}</span>
                </div>
              </div>
            </div>

            {/* Why Reach Out to OSINC Infobit */}
            <div className="glass-card" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(13, 17, 39, 0.6) 100%)' }}>
              <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1rem' }}>
                What Happens Next?
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>1.</span>
                  <span><strong>Discovery Call:</strong> 30-minute free technical consultation with our Lead Architect.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>2.</span>
                  <span><strong>Architecture Plan:</strong> Detailed scope breakdown, technology recommendation & roadmap.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>3.</span>
                  <span><strong>Transparent Estimate:</strong> Milestones, clear pricing model, and dedicated project team allocation.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
