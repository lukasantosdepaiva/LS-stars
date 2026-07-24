import { motion } from 'framer-motion';
import { BarChart, Code, FileText, Globe, Settings } from 'lucide-react';
import TiltCard from './TiltCard';

const services = [
  {
    title: 'Landing Pages',
    description:
      'Páginas focadas em conversão, ideais para captar leads e vender produtos ou serviços.',
    icon: <FileText size={48} className="text-brand" />,
  },
  {
    title: 'Sites Institucionais',
    description:
      'Sites corporativos e institucionais que apresentam a marca, serviços e informações de forma profissional.',
    icon: <Globe size={48} className="text-brand" />,
  },
  {
    title: 'Sistemas Web',
    description:
      'Plataformas customizadas que automatizam processos e entregam funcionalidades sob medida.',
    icon: <Code size={48} className="text-brand" />,
  },
  {
    title: 'Otimização Digital',
    description: 'Melhorias de performance, SEO básico, velocidade e experiência do usuário.',
    icon: <BarChart size={48} className="text-brand" />,
  },
  {
    title: 'Manutenção',
    description: 'Atualizações, correções, suporte contínuo e acompanhamento pós-lançamento.',
    icon: <Settings size={48} className="text-brand" />,
  },
];

const Services = () => {
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
      id="services"
      className="py-20 bg-white text-slate-950 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-display text-4xl font-bold text-center mb-12"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Nossos Serviços
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <TiltCard className="h-full rounded-lg border border-slate-200 bg-slate-50 p-6 text-center shadow-lg hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-primary">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-brand">{service.title}</h3>
                <p className="text-slate-600 dark:text-gray-300">{service.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
