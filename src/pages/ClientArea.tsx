import React from 'react';
import { motion } from 'framer-motion';

/**
 * Placeholder page for the client area. In the future this will be a protected
 * area (requires authentication via Supabase Auth) where the client can view
 * project status, exchange files, and communicate.
 */
const ClientArea: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-8">Área do cliente</h1>
        <p className="text-lg mb-4">
          Esta é uma área reservada para clientes autenticados. Em breve será possível visualizar
          projetos, acompanhar o andamento, enviar arquivos e conversar com a equipe.
        </p>
        <p className="text-gray-400">
          Para acessar, faça login via Supabase Auth (a ser implementado).
        </p>
      </motion.div>
    </section>
  );
};

export default ClientArea;
