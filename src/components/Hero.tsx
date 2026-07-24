import { motion } from 'framer-motion';

const particles = [
  { left: '8%', top: '22%', delay: '0s' },
  { left: '18%', top: '68%', delay: '1.4s' },
  { left: '30%', top: '34%', delay: '2.2s' },
  { left: '45%', top: '78%', delay: '0.8s' },
  { left: '58%', top: '20%', delay: '3s' },
  { left: '70%', top: '62%', delay: '1.8s' },
  { left: '82%', top: '32%', delay: '2.8s' },
  { left: '90%', top: '76%', delay: '0.4s' },
];

const Hero = () => {
  const container = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 dark:bg-primary dark:text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_78%_30%,rgba(250,204,21,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0),rgba(37,99,235,0.08))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_78%_30%,rgba(250,204,21,0.22),transparent_28%),linear-gradient(180deg,#050505,#020617)]" />
      <div className="absolute inset-0 opacity-80">
        {particles.map((particle) => (
          <span
            key={`${particle.left}-${particle.top}`}
            className="hero-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-24 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <motion.p
            variants={item}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand dark:text-accent"
          >
            Agência digital com IA
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-tight md:text-6xl"
          >
            Transformamos ideias em experiências digitais que geram resultados.
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl dark:text-gray-300"
          >
            Criamos sites, landing pages e soluções digitais modernas para empresas que querem
            crescer, vender mais e fortalecer sua presença online.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-block rounded-md bg-accent px-6 py-3 font-semibold text-primary transition-colors hover:bg-brand hover:text-white"
            >
              Solicitar orçamento
            </a>
            <a
              href="#portfolio"
              className="inline-block rounded-md border border-brand px-6 py-3 font-semibold text-brand transition-colors hover:bg-brand hover:text-white dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-primary"
            >
              Ver projetos
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
