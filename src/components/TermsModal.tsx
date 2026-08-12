import React, { useEffect } from 'react';
import { X, FileText, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-terms-title"
    >
      <div 
        className="relative w-full max-w-2xl my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-800 dark:text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-purple-600 dark:text-purple-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 id="modal-terms-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Terms and Conditions</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Anas Mahmud Personal Portfolio Website</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-h-[60vh] overflow-y-auto pr-2">
          <p>
            Welcome to the personal portfolio website of <strong>Anas Mahmud</strong>. By accessing or using this website, you agree to comply with and be bound by the following Terms and Conditions.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base pt-2">1. Educational & Learner Scope</h3>
          <p>
            All content, sample materials, and services described on this website represent student and beginner-level skill development activities as part of studies at As-Sunnah Skill Development Institute (SBMC Course).
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base pt-2">2. Intellectual Property</h3>
          <p>
            All portfolio code, layout design, branding elements, and written materials are owned by or licensed to Anas Mahmud unless otherwise specified.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base pt-2">3. Acceptable Use</h3>
          <p>
            You agree to use this website solely for lawful purposes, such as learning about my skills, reviewing my work, or submitting legitimate inquiries through the contact form. Spamming or submitting automated form submissions is prohibited.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base pt-2">4. Disclaimers</h3>
          <p>
            This website and its content are provided "as is" for information and skill demonstration purposes. Services described are provided at a beginner level while undergoing practical learning.
          </p>

          <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center gap-3 text-xs text-purple-700 dark:text-purple-300 mt-6">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Effective Date: August 2026. Terms subject to periodic updates.</span>
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-purple-900/30"
          >
            Accept & Close
          </button>
        </div>
      </div>
    </div>
  );
};
