import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function TechnologiesSection() {
  const { t } = useTranslation();

  const technologies = t('technologies', { returnObjects: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="technologies" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-indigo-500" />
            <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider">Skills</span>
            <div className="h-px w-12 bg-indigo-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('technologies&tools')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('technologiesDescription')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${tech.color}`} />
                <span className="text-white font-medium">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional tools section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <h3 className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
            {t('alsoExperiencedWith')}
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-slate-400">
            {['Jira', 'Postman', 'Scrum', 'Kanban', 'Agile', 'VS Code'].map((tool) => (
              <span key={tool} className="hover:text-white transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}