import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ project, index }) {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 hover:-translate-y-2">

        {/* Image/Carousel Container */}
        <div className="relative aspect-video bg-slate-100 overflow-hidden">
          <img
            key={activeImage}
            src={project.images[activeImage]}
            alt={`${project.title} screenshot ${activeImage + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Carousel controls */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex gap-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              {project.video && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-medium hover:bg-indigo-100 transition-all"
                >
                  <Play className="w-4 h-4" />
                  Watch Demo
                </button>
              )}
            </div>
          </div>

          {/* Tech badges floating */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm text-slate-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>

          <div className="space-y-3 mb-6">
            {project.description.slice(0, 3).map((desc, i) => (
              <p key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                {desc}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              {t('repository')}
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-2"
            >
              {t('demo')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && project.video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              src={project.video}
              controls
              autoPlay
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
