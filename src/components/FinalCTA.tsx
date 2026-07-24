import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';

const whatsappUrl = 'https://wa.me/5511930689539';

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white dark:bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(37,99,235,0.32),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(250,204,21,0.18),transparent_30%)]" />
      <motion.div
        className="relative mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-md bg-accent text-primary shadow-lg shadow-accent/20">
          <Sparkles size={26} />
        </div>
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Vamos tirar sua ideia do papel?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
          Envie sua ideia e receba uma direção clara de escopo, prazo e investimento para lançar com
          mais confiança.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-semibold text-primary transition-colors hover:bg-white"
          >
            <MessageCircle size={20} className="mr-2" />
            Chamar no WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            Solicitar orçamento
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
