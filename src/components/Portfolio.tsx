import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';

const projects = [
  {
    title: 'Landing Page Premium',
    category: 'Marketing',
    description: 'Página criada para captação de leads e campanha paga.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    technologies: ['React', 'Tailwind', 'Vite'],
    result: '+38% em conversão',
    liveUrl: '#',
  },
  {
    title: 'Site Institucional',
    category: 'Corporativo',
    description: 'Site responsivo com posicionamento claro para consultoria.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    technologies: ['React', 'Tailwind', 'SEO'],
    result: 'Presença digital premium',
    liveUrl: '#',
  },
  {
    title: 'Dashboard Admin',
    category: 'Sistema',
    description: 'Painel gerencial com métricas, cadastros e visão operacional.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    technologies: ['React', 'Supabase', 'Charts'],
    result: 'Gestão mais rápida',
    liveUrl: '#',
  },
];

const Portfolio = () => {
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
      id="portfolio"
      className="py-20 bg-white text-slate-950 dark:bg-gray-900 dark:text-white"
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
            Projetos com cara de produto
          </motion.p>
          <motion.h2
            className="font-display text-4xl font-bold"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Portfólio visual
          </motion.h2>
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <TiltCard className="group h-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-lg hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-primary">
                <div className="image-zoom-blur relative h-56 bg-slate-900 p-3">
                  <div className="mb-2 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[calc(100%-18px)] w-full rounded-md object-cover"
                  />
                  <div className="absolute inset-x-3 bottom-3 translate-y-4 rounded-md bg-primary/88 p-4 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-accent">{project.result}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold mb-2 text-brand">{project.title}</h3>
                  <p className="text-slate-600 mb-4 dark:text-gray-300">{project.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-gray-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center font-semibold text-brand hover:text-accent"
                  >
                    Ver projeto
                    <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
