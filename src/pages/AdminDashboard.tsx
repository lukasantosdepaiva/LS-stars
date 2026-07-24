import React from 'react';
import { motion } from 'framer-motion';

/**
 * Placeholder admin dashboard – intended for future management of clients,
 * portfolio, services, content, etc. Access should be protected by authentication
 * (Supabase Auth) and role‑based authorization.
 */
const AdminDashboard: React.FC = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20">
      <motion.div
        className="max-w-5xl mx-auto px-4"
        variants={item}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <p className="text-lg mb-4">
          Esta é a área administrativa da LS Stars. Em desenvolvimento, será utilizada para
          gerenciar clientes, projetos, conteúdo e configurações.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Gerenciar clientes</li>
          <li>Gerenciar portfólio</li>
          <li>Criar/alterar serviços</li>
          <li>Atualizar conteúdo do site</li>
          <li>Gerenciar precificação e planos</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default AdminDashboard;
