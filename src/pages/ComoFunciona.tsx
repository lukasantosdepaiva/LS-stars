import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  FileText,
  LayoutDashboard,
  Rocket,
  Search,
  Shield,
  Users,
  Zap,
} from 'lucide-react';
import TiltCard from '../components/TiltCard';
import { Link } from 'react-router-dom';

const etapas = [
  {
    numero: '01',
    titulo: 'Diagnóstico & Estratégia',
    descricao:
      'Entendemos seu negócio, oferta, público e metas. Definimos KPIs, posicionamento e o melhor formato (site, landing, sistema).',
    icone: Search,
    duracao: '1-2 dias',
    entregaveis: [
      'Briefing completo',
      'Mapa de empatia do cliente',
      'Estrutura de páginas recomendada',
      'Definição de MVP vs Fase 2',
    ],
  },
  {
    numero: '02',
    titulo: 'Arquitetura da Informação & Copy',
    descricao:
      'Estruturamos o conteúdo: sitemap, fluxos de usuário, wireframes de baixa fidelidade e copywriting focado em conversão.',
    icone: FileText,
    duracao: '3-5 dias',
    entregaveis: [
      'Sitemap navegável',
      'Wireframes mobile/desktop',
      'Copy das páginas principais',
      'Definição de CTAs e microcopy',
    ],
  },
  {
    numero: '03',
    titulo: 'Design System & UI Design',
    descricao:
      'Criamos identidade visual aplicada: paleta, tipografia, componentes, estados. Entregamos protótipo navegável no Figma para aprovação.',
    icone: LayoutDashboard,
    duracao: '5-8 dias',
    entregaveis: [
      'Design system (tokens, componentes)',
      'Protótipo Figma clicável',
      'Guidelines de acessibilidade',
      'Assets exportados (SVG, WebP)',
    ],
  },
  {
    numero: '04',
    titulo: 'Desenvolvimento Front-end',
    descricao:
      'Codificamos com React + TypeScript + Tailwind: responsivo, acessível, performático, animações suaves, SEO técnico on-page.',
    icone: Code,
    duracao: '7-15 dias',
    entregaveis: [
      'Código versionado (Git)',
      'Build otimizado (Vite)',
      'Testes cross-browser',
      'Lighthouse > 90',
    ],
  },
  {
    numero: '05',
    titulo: 'Integrações & Backend (se houver)',
    descricao:
      'Conectamos formulários (Web3Forms/Resend), CRM, automações (n8n/Make), analytics, pixel, domínio, SSL, hospedagem (Vercel/Netlify).',
    icone: Zap,
    duracao: '2-5 dias',
    entregaveis: [
      'Formulários funcionando',
      'Automações de lead',
      'GA4 + eventos configurados',
      'Deploy em produção',
    ],
  },
  {
    numero: '06',
    titulo: 'Validação, Treinamento & Entrega',
    descricao:
      'Revisão final com checklist 50+ itens. Treinamento para você gerenciar conteúdo. Entrega de documentação e acessos. Suporte 30 dias.',
    icone: Rocket,
    duracao: '1-2 dias',
    entregaveis: [
      'Checklist QA assinado',
      'Vídeo de treinamento (Loom)',
      'Doc de manutenção',
      'Acessos (repo, hospedagem, analytics)',
    ],
  },
];

const garantias = [
  {
    icone: Shield,
    titulo: 'Código é seu',
    desc: 'Repositório privado no GitHub transferido no final. Sem vendor lock-in.',
  },
  {
    icone: Clock,
    titulo: 'Prazo combinado é lei',
    desc: 'Se atrasar sem culpa sua, 10% de desconto por semana de atraso (máx 30%).',
  },
  {
    icone: Users,
    titulo: 'Suporte real pós-entrega',
    desc: '30 dias de ajustes, dúvidas e correções inclusos. Depois, plano de manutenção opcional.',
  },
  {
    icone: CheckCircle,
    titulo: 'Revisões inclusas',
    desc: '2 rodadas de revisão de design + 1 de código no escopo. Extras combinados à parte.',
  },
];

const ComoFunciona = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section
        id="como-funciona"
        className="relative overflow-hidden py-20 bg-slate-50 text-slate-950 dark:bg-gray-900 dark:text-white"
      >
        <div className="absolute inset-x-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <motion.p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Fluxo de execução transparente
            </motion.p>
            <motion.h2
              className="font-display text-4xl font-bold"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Como funciona — do briefing ao deploy
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-slate-600 dark:text-gray-300"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Sem caixa preta. Você sabe exatamente o que acontece em cada etapa, quando entrega e o
              que recebe.
            </motion.p>
          </div>

          <motion.div
            className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {etapas.map((etapa) => (
              <motion.div key={etapa.numero} variants={item}>
                <TiltCard className="relative h-full rounded-lg border border-slate-200 bg-white p-6 shadow-lg hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-gray-800">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-brand text-white shadow-lg shadow-brand/20">
                      <etapa.icone size={34} />
                    </div>
                    <span className="font-display text-5xl font-bold text-slate-200 dark:text-white/10">
                      {etapa.numero}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-brand">{etapa.titulo}</h3>
                  <p className="text-slate-600 dark:text-gray-300 mb-4">{etapa.descricao}</p>
                  <div className="mb-4 inline-flex items-center rounded-md px-3 py-1 text-sm font-semibold bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-gray-200">
                    <Clock size={14} className="mr-1" />
                    {etapa.duracao}
                  </div>
                  <ul className="space-y-2 text-sm">
                    {etapa.entregaveis.map((ent) => (
                      <li key={ent} className="flex items-center text-slate-600 dark:text-gray-300">
                        <CheckCircle size={14} className="mr-2 shrink-0 text-accent" />
                        {ent}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-100 text-slate-950 dark:bg-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <motion.p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent">
              Sua segurança
            </motion.p>
            <motion.h2 className="font-display text-4xl font-bold">
              Garantias que tiram o risco das suas costas
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {garantias.map((g, _i) => (
              <motion.div
                key={g.titulo}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={item}
              >
                <TiltCard className="h-full rounded-lg border border-slate-200 bg-white p-6 text-center shadow-lg hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-gray-800">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-brand text-white shadow-lg shadow-brand/20 mb-4">
                    <g.icone size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-brand">{g.titulo}</h3>
                  <p className="text-slate-600 dark:text-gray-300">{g.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar seu projeto?
          </motion.h2>
          <motion.p className="text-white/80 mb-8 text-lg">
            Agende uma call de 15 min (sem compromisso) para alinhar escopo, prazo e investimento.
          </motion.p>
          <motion.div className="flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="https://wa.me/5511930689539?text=Ol%C3%A1%20Lukas%2C%20gostaria%20de%20agendar%20uma%20call%20para%20conversar%20sobre%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-brand transition-colors hover:bg-slate-100"
            >
              <ArrowRight size={20} className="ml-2" />
              Agendar no WhatsApp
            </a>
            <Link
              to="/orcamento"
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver orçamento estimado
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ComoFunciona;
