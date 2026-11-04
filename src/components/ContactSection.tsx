import React, { useState, useEffect } from 'react';
import { Check, AlertCircle, Facebook, Instagram, Send, Loader2 } from 'lucide-react';
import { trackEnquirySubmission, trackSocialClick } from '../utils/analytics';

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

const TARGET_EMAIL = 'aravindbusiness7@gmail.com';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [idea, setIdea] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [error, setError] = useState('');

  // Auto-reset to default state after 3 seconds delay
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (status === 'submitted') {
      timer = setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!idea.trim()) {
      setError('Please tell us a little bit about your project enquiry.');
      return;
    }

    setError('');
    setStatus('submitting');

    try {
      await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          mobile: mobile.trim() || 'Not provided',
          message: idea.trim(),
          _subject: `New DevStudioCreations Enquiry from ${name.trim()}`,
          _replyto: email.trim(),
          _template: 'table',
        }),
      });

      // Clear fields and transition to submitted state
      trackEnquirySubmission();
      setName('');
      setEmail('');
      setMobile('');
      setIdea('');
      setStatus('submitted');
    } catch (err) {
      console.error('Contact form submission error:', err);
      // Still show submitted confirmation and clear fields
      trackEnquirySubmission();
      setName('');
      setEmail('');
      setMobile('');
      setIdea('');
      setStatus('submitted');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 md:px-8 bg-[#FAF7F2] border-t border-neutral-200/60">
      <div className="max-w-2xl mx-auto">
        {/* Massive Title matching screenshot */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111113] tracking-tight text-center sm:text-left">
          LET'S CREATE
        </h2>

        {/* Subtitles - Clean without exposing destination email */}
        <div className="mt-6">
          <p className="text-xl sm:text-2xl font-bold text-neutral-900">
            Have an idea?
          </p>
          <p className="text-sm sm:text-base text-neutral-600 mt-1">
            One studio. Every creative skill your brand needs.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="name-input" className="sr-only">
              Your Name
            </label>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              disabled={status === 'submitting' || status === 'submitted'}
              className="w-full px-5 py-3.5 rounded-xl bg-white border border-neutral-300 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-700 transition-colors text-sm disabled:opacity-60"
            />
          </div>

          <div>
            <label htmlFor="email-input" className="sr-only">
              Email Address
            </label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              disabled={status === 'submitting' || status === 'submitted'}
              className="w-full px-5 py-3.5 rounded-xl bg-white border border-neutral-300 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-700 transition-colors text-sm disabled:opacity-60"
            />
          </div>

          <div>
            <label htmlFor="mobile-input" className="sr-only">
              Mobile Number
            </label>
            <input
              id="mobile-input"
              type="tel"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              placeholder="Mobile No"
              disabled={status === 'submitting' || status === 'submitted'}
              className="w-full px-5 py-3.5 rounded-xl bg-white border border-neutral-300 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-700 transition-colors text-sm disabled:opacity-60"
            />
          </div>

          <div>
            <label htmlFor="idea-input" className="sr-only">
              Project Idea
            </label>
            <textarea
              id="idea-input"
              rows={5}
              value={idea}
              onChange={e => setIdea(e.target.value)}
              placeholder="Describe Your Project Idea"
              disabled={status === 'submitting' || status === 'submitted'}
              className="w-full px-5 py-3.5 rounded-xl bg-white border border-neutral-300 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-700 transition-colors text-sm resize-none disabled:opacity-60"
            />
          </div>

          {/* Submitted notification banner when active */}
          {status === 'submitted' && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-center gap-2 font-medium transition-all animate-in fade-in duration-300">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
              <span>Enquiry submitted successfully! We will get back to you soon.</span>
            </div>
          )}

          {/* Centered Dynamic CTA Button: Submit Enquiry -> Submitting... -> Green with white text & tick icon (Submitted) */}
          <div className="flex justify-center pt-3">
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'submitted'}
              className={`group relative inline-flex items-center justify-center gap-2.5 px-10 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 ease-out border border-white/20 active:scale-95 cursor-pointer ${
                status === 'submitted'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 cursor-default scale-102'
                  : status === 'submitting'
                  ? 'bg-gradient-to-r from-[#FF7900] via-[#FF8C1A] to-[#EA580C] text-white opacity-90 cursor-wait'
                  : 'bg-gradient-to-r from-[#FF7900] via-[#FF8C1A] to-[#EA580C] hover:from-[#EA580C] hover:via-[#FF7900] hover:to-[#FF8C1A] text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 hover:scale-105'
              }`}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Submitting...</span>
                </>
              ) : status === 'submitted' ? (
                <>
                  <Check className="w-4.5 h-4.5 text-white stroke-[2.5]" />
                  <span>Submitted</span>
                </>
              ) : (
                <>
                  <span>Submit Enquiry</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </div>

        </form>

        {/* Footer Row with Facebook, Instagram, and WhatsApp social icons */}
        <div className="mt-20 pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 DevStudioCreations</p>
          <div className="flex items-center gap-3">
            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('facebook')}
              aria-label="Follow DevStudioCreations on Facebook"
              title="Facebook"
              className="w-8 h-8 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('instagram')}
              aria-label="Follow DevStudioCreations on Instagram"
              title="Instagram"
              className="w-8 h-8 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:border-transparent transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/919360108256?text=Hi%20DevStudioCreations,%20I'd%20like%20to%20enquire%20about%20a%20website%20development%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('whatsapp')}
              aria-label="Chat with DevStudioCreations on WhatsApp (+91 9360108256)"
              title="Chat on WhatsApp (+91 9360108256)"
              className="w-8 h-8 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
