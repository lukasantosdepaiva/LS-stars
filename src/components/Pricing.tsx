import { motion } from 'framer-motion';
import { Check, Clock, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

const plans = [
  {
    name: 'Plano Start',
    price: 'R$ 1.499',
    deadline: 'até 7 dias',
    description: 'Ideal para validar uma oferta ou lançar uma campanha com rapidez.',
    features: ['Landing page', 'Design profissional', 'Responsivo', 'Publicação'],
    highlighted: false,
  },
  {
    name: 'Plano Business',
    price: 'R$ 3.299',
    deadline: 'até 15 dias',
    description: 'Para empresas que precisam de presença digital completa e clara.',
    features: ['Site completo', 'Mais páginas', 'Formulários', 'SEO básico'],
    highlighted: true,
  },
  {
    name: 'Plano Premium',
    price: 'Sob consulta',
    deadline: 'escopo sob medida',
    description: 'Para sistemas, integrações e experiências digitais personalizadas.',
    features: ['Sistemas personalizados', 'Integrações', 'Recursos avançados', 'Suporte dedicado'],
    highlighted: false,
  },
];

const Pricing = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-slate-50 text-slate-950 dark:bg-primary dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Investimento sem enrolação
          </motion.p>
          <motion.h2
            className="font-display text-4xl font-bold"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Nossos Planos
          </motion.h2>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={item}>
              <TiltCard
                className={`relative h-full rounded-lg border p-8 shadow-lg hover:shadow-2xl ${
                  plan.highlighted
                    ? 'border-accent bg-brand text-white md:-translate-y-4'
                    : 'border-slate-200 bg-white dark:border-white/10 dark:bg-gray-900'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute right-5 top-5 inline-flex items-center rounded-md bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    <Sparkles size={14} className="mr-1" />
                    recomendado
                  </div>
                )}
                <h3 className="pr-20 text-2xl font-semibold mb-3">{plan.name}</h3>
                <p className="font-display text-4xl font-bold mb-3">{plan.price}</p>
                <p
                  className={`mb-5 text-sm ${plan.highlighted ? 'text-white/80' : 'text-slate-600 dark:text-gray-300'}`}
                >
                  {plan.description}
                </p>
                <div
                  className={`mb-6 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold ${plan.highlighted ? 'bg-white/12 text-white' : 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-gray-200'}`}
                >
                  <Clock size={16} className="mr-2" />
                  {plan.deadline}
                </div>
                <ul className="mb-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check size={16} className="mr-2 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`inline-block w-full rounded-md px-4 py-3 text-center font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-accent text-primary hover:bg-white'
                      : 'bg-brand text-white hover:bg-accent hover:text-primary'
                  }`}
                >
                  Solicitar proposta
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
