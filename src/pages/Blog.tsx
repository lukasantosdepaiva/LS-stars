import React from 'react';
import { motion } from 'framer-motion';

/**
 * Placeholder Blog page – in a real project you would fetch and display
 * articles, maybe using a headless CMS or markdown files.
 */
const Blog: React.FC = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        variants={item}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-lg mb-4">
          Em breve publicaremos artigos sobre tecnologia, marketing digital, desenvolvimento web e
          inteligência artificial.
        </p>
        <p className="text-gray-400">
          Enquanto isso, você pode seguir nossas redes sociais ou entrar em contato para saber mais.
        </p>
      </motion.div>
    </section>
  );
};

export default Blog;
