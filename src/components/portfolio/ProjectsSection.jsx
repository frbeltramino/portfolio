import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: "TuTurno-App",
      description: [
        "A web application developed with React and Bootstrap that allows users to book appointments at a veterinary clinic.",
        "Login system with OTP sent via email and JWT-based authentication.",
        "Consumption of REST services using Axios for communication between frontend and backend.",
        "Database management with MongoDB using NodeJS, Express, and Mongoose.",
        "Automatic appointment confirmation emails."
      ],
      repo: "https://github.com/frbeltramino/tu-turno-app",
      demo: "https://tuturno-app.netlify.app/"
    },
    {
      title: "TuTurno-Admin",
      description: [
        "Web application developed with React and Material-UI for appointment management.",
        "Administrators can manage appointments, services, professionals, and holidays.",
        "Authentication and access control implemented with JWT tokens.",
        "Modern and responsive interface created with Material-UI.",
        "Centralized information management using NodeJS, Express, and MongoDB."
      ],
      repo: "https://github.com/frbeltramino/tu-turno-admin",
      demo: "https://tuturno-admin.netlify.app/auth/login"
    },
    {
      title: "Teslo | Shop",
      description: [
        "A modern e-commerce web application for a clothing store, built with React + TypeScript.",
        "Users can browse products, add items to cart, and complete purchases seamlessly.",
        "Login system with JWT-based authentication, supporting admin and user roles.",
        "Admin dashboard for product management, stock updates, and order handling.",
        "PostgreSQL database with Axios API communication."
      ],
      repo: "https://github.com/frbeltramino/teslo-shop-react-app",
      demo: "https://teslo-shop-react-frb.netlify.app/",
      video: "/TesloShopVideo.webm"
    }
  ];

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
            <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider">Portfolio</span>
            <div className="h-px w-12 bg-indigo-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development capabilities
            with modern technologies and best practices.
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