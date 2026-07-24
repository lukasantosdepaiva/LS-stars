import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import TiltCard from './TiltCard';

const testimonials = [
  {
    name: 'Ana Silva',
    company: 'Boutique XYZ',
    result: '+38% em pedidos pelo site',
    comment: 'A LS Stars entregou um site lindo e que converte muito mais que o antigo.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
  },
  {
    name: 'Pedro Oliveira',
    company: 'Consultoria Oliveira',
    result: 'Mais autoridade comercial',
    comment: 'Processo muito profissional, do briefing ao suporte pós-lançamento.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
  },
  {
    name: 'Marina Costa',
    company: 'Startup Tech',
    result: 'Dashboard aprovado por investidores',
    comment: 'A equipe da LS Stars nos ajudou a criar um dashboard que impressiona investidores.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
  },
];

const Testimonials = () => {
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
      id="testimonials"
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
            Prova social
          </motion.p>
          <motion.h2
            className="font-display text-4xl font-bold"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Depoimentos
          </motion.h2>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={item}>
              <TiltCard className="h-full rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-lg hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-primary">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={30} className="text-brand/30" />
                </div>
                <p className="mb-5 text-slate-700 dark:text-gray-200">
                  &#8220;{testimonial.comment}&#8221;
                </p>
                <div className="mb-5 rounded-md bg-brand/10 px-3 py-2 text-sm font-semibold text-brand dark:bg-white/10 dark:text-accent">
                  {testimonial.result}
                </div>
                <div className="flex items-center">
                  <div className="image-zoom-blur mr-3 h-12 w-12 rounded-full">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-brand">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
