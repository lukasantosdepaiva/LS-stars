import { motion } from 'framer-motion';
import { Gauge, Headphones, Rocket, TrendingUp } from 'lucide-react';
import TiltCard from './TiltCard';

const results = [
  {
    value: '+30',
    label: 'projetos entregues',
    icon: <Rocket size={26} />,
  },
  {
    value: '7 dias',
    label: 'para lançar sua landing',
    icon: <Gauge size={26} />,
  },
  {
    value: '+42%',
    label: 'potencial de conversão',
    icon: <TrendingUp size={26} />,
  },
  {
    value: 'Suporte',
    label: 'pós-entrega incluso',
    icon: <Headphones size={26} />,
  },
];

const Results = () => {
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white dark:bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(37,99,235,0.24),transparent_38%,rgba(250,204,21,0.12))]" />
      <motion.div
        className="relative mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {results.map((result) => (
          <motion.div key={result.label} variants={item}>
            <TiltCard className="h-full rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent text-primary">
                {result.icon}
              </div>
              <p className="font-display text-3xl font-bold text-white">{result.value}</p>
              <p className="mt-2 text-sm font-medium text-gray-300">{result.label}</p>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Results;
