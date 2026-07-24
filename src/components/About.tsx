import { motion } from 'framer-motion';

const About = () => {
  const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="py-20 bg-slate-50 text-slate-950 dark:bg-primary dark:text-white"
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-center mb-8"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Sobre a LS Stars
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center mb-12 text-slate-600 dark:text-gray-300"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <strong>Fundador:</strong> Lukas Santos De Paiva
        </motion.p>
        <motion.div
          className="grid md:grid-cols-3 gap-8 text-center"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 text-brand">Missão</h3>
            <p className="text-slate-600 dark:text-gray-300">
              Ajudar empresas a saírem do básico e terem uma presença digital profissional,
              utilizando tecnologia moderna, design estratégico e inteligência artificial.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-brand">Visão</h3>
            <p className="text-slate-600 dark:text-gray-300">
              Ser referência nacional em soluções digitais inovadoras que potencializam o
              crescimento de nossos clientes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-brand">Valores</h3>
            <p className="text-slate-600 dark:text-gray-300">
              Profissionalismo • Inovação • Confiança • Transparência • Qualidade
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
