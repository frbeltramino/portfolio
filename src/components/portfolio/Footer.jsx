import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© {currentYear} Federico Beltramino.</span>
            <span className="hidden md:inline">{t('footer.rights')}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>{t('footer.builtWith')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>{t('footer.andReact')}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={t('githubLink')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={t('linkedinLink')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('frbeltra2@gmail.com');
                toast.success(t('emailCopied'));
              }}
              aria-label={t('copyEmail')}
              title={t('copyEmail')}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}