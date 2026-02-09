import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const LanguageButton = ({ lang, label, isScrolled, variant }) => {
  const { i18n } = useTranslation();
  const isActive = i18n.language.startsWith(lang);

  // Estilos diferentes para mobile o desktop
  let baseClasses = 'px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300';
  let variantClasses = '';

  if (variant === 'mobile-menu') {
    variantClasses = isActive
      ? 'w-full bg-indigo-500 text-white shadow-md'
      : 'w-full bg-indigo-50 text-slate-900 hover:bg-indigo-100';
  } else {
    // default / desktop
    variantClasses = isActive
      ? 'bg-indigo-500 text-white shadow-md'
      : isScrolled
        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
        : 'text-slate-300 hover:text-white hover:bg-white/10';
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => i18n.changeLanguage(lang)}
      className={`${baseClasses} ${variantClasses}`}
      aria-pressed={isActive}
    >
      {label}
    </motion.button>
  );
};