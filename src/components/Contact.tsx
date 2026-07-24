import { motion } from 'framer-motion';
import { Clock, Phone, ShieldCheck, MessageSquare, Zap } from 'lucide-react';
import TiltCard from './TiltCard';

const phoneDisplay = '+55 11 93068-9539';
const whatsappUrl = 'https://wa.me/5511930689539';

const Contact = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-100 text-slate-950 dark:bg-gray-800 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent"
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Próximo passo
          </motion.p>
          <motion.h2
            className="font-display text-4xl font-bold"
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Entre em contato
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-slate-600 dark:text-gray-300"
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Tudo via WhatsApp — orçamento, dúvidas, briefing. Nosso chatbot coleta o necessário e a
            gente agenda a call.
          </motion.p>
        </div>
        <div className="max-w-xl mx-auto">
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TiltCard className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-primary sm:p-8">
              <h3 className="font-display text-2xl font-bold">Fale com Lukas Santos De Paiva</h3>
              <p className="mt-3 text-slate-600 dark:text-gray-300">
                No WhatsApp o chatbot já qualifica seu projeto e agenda a call.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg bg-brand p-4 font-semibold text-white transition-colors hover:bg-accent hover:text-primary group"
                >
                  <MessageSquare
                    size={20}
                    className="mr-3 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span>
                    <strong>WhatsApp (Chatbot)</strong>
                    <span className="block text-sm opacity-80 mt-0.5">{phoneDisplay}</span>
                  </span>
                  <Zap
                    size={18}
                    className="ml-auto group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
              <div className="mt-8">
                <div className="rounded-lg bg-slate-100 p-4 dark:bg-white/10">
                  <ShieldCheck size={22} className="mb-3 text-brand dark:text-accent" />
                  <p className="font-semibold">Entrega acompanhada</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-gray-300">
                    Revisões e suporte pós-entrega.
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
