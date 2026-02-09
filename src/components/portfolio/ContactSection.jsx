import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: t('contact.emailSubject'),
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      toast.success(t('contact.successTitle'));
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@federicobeltramino.dev');
    toast.success('Email copied to clipboard');
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/frbeltramino?tab=repositories', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/federico-beltramino-5b174215b/', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider">{t('contactMenu')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mb-16">
            {t('contact.description')}
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300 cursor-pointer"
                  onClick={copyEmail}
                >
                  <div className="p-4 rounded-xl bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 mb-1">{t('contact.email')}</p>
                    <p className="font-medium text-slate-900">frbeltra2@gmail.com</p>
                  </div>
                  <Copy className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <div className="p-4 rounded-xl bg-indigo-100">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{t('contact.location')}</p>
                    <p className="font-medium text-slate-900">{t('location')}</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-4">{t('contact.findMeOn')}</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl bg-slate-900 text-white hover:bg-indigo-600 transition-colors duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100"
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('contact.successTitle')}</h3>
                  <p className="text-slate-600">{t('contact.successMessage')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700">{t('contact.form.name')}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact.form.placeholder.name')}
                      required
                      className="h-12 rounded-xl border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.form.placeholder.email')}
                      required
                      className="h-12 rounded-xl border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('contact.form.placeholder.message')}
                      required
                      rows={5}
                      className="rounded-xl border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-medium transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t('contact.form.sending')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        {t('contact.form.send')}
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}