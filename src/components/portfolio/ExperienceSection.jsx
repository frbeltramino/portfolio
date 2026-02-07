import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const experience = {
    title: "Frontend Developer",
    company: "GlobalLogic",
    period: "June 2018 - August 2025",
    description: [
      "Development, testing, and documentation of banking features for web and mobile apps (Android / iOS).",
      "Bug fixing and production incident support (hotfixes).",
      "Extensive knowledge of project-specific technologies and banking business rules.",
      "Informal mentoring to team members on technical and functional questions.",
      "Active participation in Scrum teams: planning, refinement, daily standups, retrospectives."
    ]
  };

  return (
    <section id="experience" className="py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider">Experience</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16">
            Work History
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 gap-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-lg transform -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2" />

              {/* Left side - Date */}
              <div className="hidden md:flex justify-end pr-12">
                <div className="text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="md:pl-12">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{experience.title}</h3>
                      <p className="text-indigo-600 font-medium">{experience.company}</p>
                      <p className="text-sm text-slate-500 md:hidden mt-1">{experience.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {experience.description.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}