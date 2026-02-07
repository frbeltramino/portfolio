import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Code2, Users } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { icon: Briefcase, label: '6+ Years', desc: 'Professional Experience' },
    { icon: Code2, label: 'Frontend', desc: 'Specialist' },
    { icon: Users, label: 'Banking', desc: 'Industry Expert' },
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
            <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional Profile
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Software developer with over 6 years of experience in web and mobile banking projects.
                Expert in Frontend technologies such as JavaScript, HTML, and CSS, consuming REST services
                and using agile methodologies (Scrum/Kanban).
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Passionate about continuous learning, currently improving skills in React, Express, and MongoDB,
                and actively working on English proficiency. I thrive in collaborative environments and enjoy
                mentoring team members while delivering high-quality, scalable solutions.
              </p>

              <div className="flex items-center gap-2 text-slate-500 pt-4">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <span>Benidorm, Spain</span>
              </div>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
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
                    <p className="font-semibold text-slate-900">{item.label}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}