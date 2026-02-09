import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
              href="https://github.com/frbeltramino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}