import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Code2, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();
  const highlightsData = [
    { icon: Briefcase, key: 'highlights.0' },
    { icon: Code2, key: 'highlights.1' },
    { icon: Users, key: 'highlights.2' }
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider">{t('about')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('professionalProfile')}
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('professionalDescription.0')}
              </p>

              <div className="flex items-center gap-2 text-slate-500 pt-4">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <span>{t('location')}</span>
              </div>
            </div>

            <div className="space-y-4">
              {highlightsData.map((item, index) => {
                const highlight = t(`${item.key}`, { returnObjects: true });
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-indigo-100">
                      <item.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{highlight.label}</p>
                      <p className="text-sm text-slate-500">{highlight.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}