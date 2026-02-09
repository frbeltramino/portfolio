import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';

export default function ProjectsSection() {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true });


  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider">{t('portfolio')}</span>
            <div className="h-px w-12 bg-indigo-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('featuredProjects')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('projectsDescription')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}