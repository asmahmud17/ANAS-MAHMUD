import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { db } from '../lib/firebase';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required.';

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    if (formData.honeypot.trim() !== '') {
      newErrors.honeypot = 'Spam submission detected.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm() || submitting) return;

    setSubmitting(true);

    try {
      await addDoc(collection(db, 'messages'), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
        source: 'portfolio-contact-form',
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitError('Sorry, your message could not be sent. Please try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-3 font-hind">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-hind text-slate-900 dark:text-white">
            Let’s Create Something Meaningful
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Have a question, a project idea, or an opportunity to discuss? Feel free to send me a message through the contact form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 font-hind">Direct Contact Information</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Feel free to send a message using the interactive contact form.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block font-hind">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white block font-hind">{personal.location}</span>
                </div>
              </div>

              <div className="p-4 bg-purple-500/5 dark:bg-purple-950/40 border border-purple-500/20 rounded-2xl flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-slate-900 dark:text-white block mb-0.5 font-hind">Secure Contact Form</span>
                  <p className="leading-relaxed text-[11px]">Includes client-side validation and anti-bot spam protection. Messages are securely stored in Firebase Firestore.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6 font-hind">Send Me a Message</h3>

              {submitted ? (
                <div className="bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/30 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white font-hind">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-purple-600 dark:text-purple-400 font-hind font-bold">{formData.name}</strong>. Your message has been securely recorded.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError('');
                      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
                    }}
                    className="mt-4 bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-900/30"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Your Name <span className="text-purple-600 dark:text-purple-400">*</span></label>
                    <input id="contact-name" type="text" placeholder="e.g. John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full bg-slate-50 dark:bg-slate-950 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-purple-500'} rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`} />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Your Email Address <span className="text-purple-600 dark:text-purple-400">*</span></label>
                    <input id="contact-email" type="email" placeholder="e.g. john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full bg-slate-50 dark:bg-slate-950 border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-purple-500'} rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`} />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Subject <span className="text-purple-600 dark:text-purple-400">*</span></label>
                    <input id="contact-subject" type="text" placeholder="e.g. Project Inquiry / Practice Video Editing Request" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={`w-full bg-slate-50 dark:bg-slate-950 border ${errors.subject ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-purple-500'} rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`} />
                    {errors.subject && <p className="text-red-500 text-[11px] mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Message <span className="text-purple-600 dark:text-purple-400">*</span></label>
                    <textarea id="contact-message" rows={5} placeholder="Write your message here..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`w-full bg-slate-50 dark:bg-slate-950 border ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-purple-500'} rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`} />
                    {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                  </div>

                  {submitError && (
                    <div role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-600 dark:text-red-300">{submitError}</div>
                  )}

                  <button type="submit" disabled={submitting} className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
