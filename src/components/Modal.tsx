import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { forwardRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, children, size = 'lg' }, ref) => {
    const sizes = {
      sm: 'max-w-md',
      md: 'max-w-2xl',
      lg: 'max-w-4xl',
      xl: 'max-w-6xl',
      full: 'max-w-[90vw]',
    };

    if (!isOpen) return null;

    return (
      <motion.div
        ref={ref}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-hidden="true"
        />
        <motion.div
          className={`relative w-full ${sizes[size]} bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden`}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {title && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur z-10">
              {title && (
                <h2
                  id="modal-title"
                  className="text-xl font-semibold text-slate-900 dark:text-white"
                >
                  {title}
                </h2>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>
          )}
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-6">{children}</div>
        </motion.div>
      </motion.div>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;
