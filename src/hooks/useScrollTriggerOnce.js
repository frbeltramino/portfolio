import { useEffect, useState } from 'react';

export function useScrollTriggerOnce(ref, offset = 0) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || visible) return;

      const rect = ref.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight - offset;

      if (rect.top <= triggerPoint) {
        setVisible(true);
      }
    };

    handleScroll(); // Verifica al montar
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, offset, visible]);

  return visible;
}