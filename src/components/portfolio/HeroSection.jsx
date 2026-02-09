import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

const AnimatedCircle = memo(({ className }) => (
  <div className={`absolute ${className} rounded-full bg-indigo-500/10 blur-xl`} />
));

export default function HeroSection() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* Optimized animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedCircle className="-top-32 -right-32 w-64 h-64" />
        <AnimatedCircle className="-bottom-32 -left-32 w-64 h-64" />
        <AnimatedCircle className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Available for projects badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300"> {t('availableForProjects')}</span>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Federico
            <span className="block text-[#115e59]">Beltramino</span>
          </h1>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-lg scale-105" />
              <img
                src="/avatar-retro.png"
                alt="Federico Beltramino"
                loading="lazy"
                className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border border-white/10 object-cover"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-xl md:text-2xl text-slate-400 mb-4 font-light"
          >
            Software Developer
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-base md:text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t('professionalDescription', { returnObjects: true }).map((text, index) => (
              <p key={index} className="text-slate-600 leading-relaxed">
                {text}
              </p>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10"
            >
              {t('viewProjects')}
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-slate-600 text-slate-900 hover:bg-white/10 hover:text-white px-8 py-6 text-base font-medium rounded-full transition-all duration-300"
            >
              {t('contactMe')}
            </Button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex items-center justify-center gap-6"
          >
            <a href={t('githubLink')} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href={t('linkedinLink')} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('frbeltra2@gmail.com');
                toast.success(t('emailCopied'));
              }}
              aria-label="Copiar email"
              title="Copiar email"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-6 h-6 text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
