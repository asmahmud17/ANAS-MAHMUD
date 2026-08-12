import React, { useEffect } from 'react';
import { X, Shield, Lock, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<Props> = ({ isOpen, onClose }) => {
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
      aria-labelledby="modal-privacy-title"
    >
      <div 
        className="relative w-full max-w-2xl my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-800 dark:text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-purple-600 dark:text-purple-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h2 id="modal-privacy-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Privacy Policy</h2>
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
            Your privacy is important. This Privacy Policy outlines how information sent through this personal portfolio website of <strong>Anas Mahmud</strong> is handled.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base pt-2">1. Information Collection</h3>
          <p>
            When you send a message through the contact form, you voluntarily provide information such as your name, email address, subject, and message content. No personal tracking data or cookies are sold or distributed.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base pt-2">2. Use of Information</h3>
          <p>
            Information provided via the contact form is used solely for responding to your inquiry, project discussion, or networking request.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base pt-2">3. Data Security</h3>
          <p>
            Reasonable precautions are taken to protect your information. No private API keys, credentials, or sensitive user passwords are saved or exposed on this site.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base pt-2">4. Third-Party Links</h3>
          <p>
            This website may contain links to external sites or social media profiles. We are not responsible for the privacy practices of external websites.
          </p>

          <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center gap-3 text-xs text-purple-700 dark:text-purple-300 mt-6">
            <Lock className="w-4 h-4 shrink-0" />
            <span>Last Updated: August 2026. For privacy questions, contact via the portfolio form.</span>
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-purple-900/30"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
