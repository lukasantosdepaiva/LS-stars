import { motion } from 'framer-motion';
import { Code, LayoutPanelTop, Rocket, Search } from 'lucide-react';
import TiltCard from './TiltCard';

const steps = [
  {
    title: 'Análise',
    description: 'Entendemos o negócio, a oferta e o melhor caminho para vender mais.',
    icon: <Search size={34} />,
  },
  {
    title: 'Planejamento',
    description: 'Definimos estrutura, copy, visual, páginas e integrações necessárias.',
    icon: <LayoutPanelTop size={34} />,
  },
  {
    title: 'Desenvolvimento',
    description: 'Construímos a experiência com performance, responsividade e animações.',
    icon: <Code size={34} />,
  },
  {
    title: 'Entrega',
    description: 'Publicamos, revisamos os detalhes finais e acompanhamos os primeiros passos.',
    icon: <Rocket size={34} />,
  },
];

const Process = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="process"
      className="relative overflow-hidden py-20 bg-slate-100 text-slate-950 dark:bg-gray-800 dark:text-white"
    >
      <div className="absolute inset-x-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Fluxo de execução
          </motion.p>
          <motion.h2
            className="font-display text-4xl font-bold"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Como funciona
          </motion.h2>
        </div>
        <motion.div
          className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={item}>
              <TiltCard className="relative h-full rounded-lg border border-slate-200 bg-white p-6 shadow-lg hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-primary">
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-brand text-white shadow-lg shadow-brand/20">
                    {step.icon}
                  </div>
                  <span className="font-display text-5xl font-bold text-slate-200 dark:text-white/10">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand">{step.title}</h3>
                <p className="text-slate-600 dark:text-gray-300">{step.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
