import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { personal } from '../../data/portfolio';
import useScrolled from '../../hooks/useScrolled';

const whatsappUrl = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(personal.whatsappMessage)}`;

/** Bottom-right stack: back-to-top (after scrolling) above a permanent WhatsApp button. */
export default function FloatingActions() {
  const showTop = useScrolled(600);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#home"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-lift backdrop-blur transition-colors hover:text-accent"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.a>
        )}
      </AnimatePresence>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp (opens in a new tab)"
        title="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110"
      >
        <span aria-hidden="true" className="absolute inset-0 animate-soft-ping rounded-full bg-[#25D366] opacity-40" />
        <FaWhatsapp className="relative h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  );
}
