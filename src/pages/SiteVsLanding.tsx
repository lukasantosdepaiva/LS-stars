import { motion } from 'framer-motion';
import { Code, Search, Zap, Check, ArrowRight, Users } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import { Link } from 'react-router-dom';

const comparacao = [
  {
    criterio: 'Objetivo Principal',
    site: 'Presença digital completa, autoridade, SEO, mostrar portfólio/serviços/equipe',
    landing: 'Conversão única: capturar lead, vender produto, inscrição em evento, download',
    vencedor: 'Depende do objetivo',
  },
  {
    criterio: 'Quantidade de Páginas',
    site: '5+ páginas (Home, Sobre, Serviços, Blog, Contato, Cases, Privacidade...)',
    landing: '1 página longa (scroll vertical) com seções bem definidas',
    vencedor: 'Site = mais conteúdo; Landing = foco total',
  },
  {
    criterio: 'Prazo de Entrega',
    site: '15 a 30 dias (conteúdo + design + dev + revisões + SEO + testes)',
    landing: '3 a 7 dias (copy + design + dev + publicação)',
    vencedor: 'Landing page é 3-5x mais rápido',
  },
  {
    criterio: 'Investimento Inicial',
    site: 'R$ 3.000 a R$ 15.000+ (conforme páginas, integrações, CMS, blog)',
    landing: 'R$ 1.500 a R$ 4.000 (foco em conversão, menos complexidade)',
    vencedor: 'Landing page cabe no bolso para testar oferta',
  },
  {
    criterio: 'SEO e Tráfego Orgânico',
    site: 'Forte — múltiplas páginas indexáveis, blog, autoridade de domínio',
    landing: 'Limitado — 1 página, foco em tráfego pago/email/social',
    vencedor: 'Site ganha no longo prazo',
  },
  {
    criterio: 'Manutenção',
    site: 'Contínua — blog, atualizações, segurança, backups, LGPD',
    landing: 'Baixa — alterações pontuais no copy/design, A/B tests',
    vencedor: 'Landing exige menos dedicação',
  },
  {
    criterio: 'Quando Escolher',
    site: 'Empresa estabelecida, múltiplos serviços, quer autoridade, vende consultoria/recorrência',
    landing: 'Lançamento de produto, campanha paga, captação de lead, validação de oferta, evento',
    vencedor: 'Contexto define',
  },
];

const quandoSite = [
  'Você já tem oferta validada e quer escalar com autoridade',
  'Vende serviços de alto ticket (consultoria, B2B, agências)',
  'Precisa de blog para atrair tráfego orgânico constante',
  'Tem equipe, cases, depoimentos, certificações para mostrar',
  'Quer rankear no Google para palavras-chave do seu nicho',
  'Vende recorrência (assinaturas, retainers, mensalidades)',
];

const quandoLanding = [
  'Vai lançar produto/serviço novo e precisa validar rápido',
  'Vai rodar tráfego pago (Meta Ads, Google Ads, TikTok Ads)',
  'Precisa captar leads para equipe comercial ligar depois',
  'Faz lançamento tipo PL, webinar, desafio, evento',
  'Tem uma oferta única e clara (ex: ebook, curso, mentoria, software)',
  'Orçamento enxuto e prazo curto (menos de 2 semanas)',
];

const SiteVsLanding = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 dark:bg-primary dark:text-white flex items-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_78%_30%,rgba(250,204,21,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0),rgba(37,99,235,0.08))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_78%_30%,rgba(250,204,21,0.22),transparent_28%),linear-gradient(180deg,#050505,#020617)]" />
        <motion.div
          className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand dark:text-accent"
            variants={item}
          >
            Guia Decisivo
          </motion.p>
          <motion.h1
            className="font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            variants={item}
          >
            Site Institucional <span className="text-brand"> vs </span> Landing Page
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl dark:text-gray-300"
            variants={item}
          >
            A diferença não é técnica — é estratégica. Escolha errado e você gasta tempo/dinheiro no
            que não converte. Escolha certo e acelera suas vendas.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            variants={item}
          >
            <Link
              to="#comparacao"
              className="inline-block rounded-md bg-accent px-8 py-4 font-semibold text-primary transition-colors hover:bg-brand hover:text-white"
            >
              Ver Comparação Completa
            </Link>
            <Link
              to="/orcamento"
              className="inline-block rounded-md border border-brand px-8 py-4 font-semibold text-brand transition-colors hover:bg-brand hover:text-white dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-primary"
            >
              Simular Meu Orçamento
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="comparacao"
        className="py-20 bg-white text-slate-950 dark:bg-gray-900 dark:text-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent">
              Tabela Comparativa
            </p>
            <h2 className="font-display text-4xl font-bold">Tudo lado a lado para você decidir</h2>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10">
                  <th className="pb-3 font-semibold text-slate-700 dark:text-gray-300">Critério</th>
                  <th className="pb-3 font-semibold text-slate-700 dark:text-gray-300">
                    Site Institucional
                  </th>
                  <th className="pb-3 font-semibold text-slate-700 dark:text-gray-300">
                    Landing Page
                  </th>
                  <th className="pb-3 font-semibold text-slate-700 dark:text-gray-300">Veredito</th>
                </tr>
              </thead>
              <tbody>
                {comparacao.map((row, i) => (
                  <tr
                    key={row.criterio}
                    className={`border-b border-slate-100 dark:border-white/5 ${i % 2 === 0 ? 'bg-slate-50 dark:bg-gray-800/50' : ''}`}
                  >
                    <td className="py-4 font-medium text-brand">{row.criterio}</td>
                    <td className="py-4 text-slate-600 dark:text-gray-300">{row.site}</td>
                    <td className="py-4 text-slate-600 dark:text-gray-300">{row.landing}</td>
                    <td className="py-4">
                      <span className="inline-flex items-center rounded-md bg-brand/10 px-3 py-1 text-sm font-semibold text-brand dark:bg-brand/20 dark:text-accent">
                        {row.vencedor}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section
        id="quando-site"
        className="py-20 bg-slate-50 text-slate-950 dark:bg-primary dark:text-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent">
              Escolha Site Se
            </p>
            <h2 className="font-display text-4xl font-bold">
              Você precisa de autoridade e presença completa
            </h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {quandoSite.map((motivo, _i) => (
              <motion.div key={motivo} variants={item}>
                <TiltCard className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-lg hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand text-white">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-600 dark:text-gray-300">{motivo}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="quando-landing"
        className="py-20 bg-white text-slate-950 dark:bg-gray-900 dark:text-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent">
              Escolha Landing Page Se
            </p>
            <h2 className="font-display text-4xl font-bold">
              Você precisa converter AGORA, com foco total
            </h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {quandoLanding.map((motivo, _i) => (
              <motion.div key={motivo} variants={item}>
                <TiltCard className="h-full rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-lg hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                      <Zap size={20} />
                    </div>
                    <p className="text-slate-600 dark:text-gray-300">{motivo}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="estrategia-hibrida"
        className="py-20 bg-slate-100 text-slate-950 dark:bg-gray-800 dark:text-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent">
              A Melhor Estratégia
            </p>
            <h2 className="font-display text-4xl font-bold">
              Muitos clientes fazem os DOIS (e na ordem certa)
            </h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <TiltCard className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-lg text-center hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-primary">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand dark:bg-brand/20 dark:text-accent">
                  <Search size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-brand">
                  1. Valide com Landing Page
                </h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Lance rápido, teste oferta, capture leads, valide preço. Baixo risco, feedback
                  real em dias.
                </p>
              </TiltCard>
            </motion.div>
            <motion.div variants={item}>
              <TiltCard className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-lg text-center hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-primary">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent dark:text-accent">
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-brand">
                  2. Construa Autoridade com Site
                </h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Com oferta validada, expanda para site completo: blog, cases, SEO, múltiplos
                  serviços. Investe no que já vende.
                </p>
              </TiltCard>
            </motion.div>
            <motion.div variants={item}>
              <TiltCard className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-lg text-center hover:border-brand hover:shadow-2xl dark:border-white/10 dark:bg-primary">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                  <ArrowRight size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-brand">3. Conecte Tudo</h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Site envia tráfego para landing pages de campanhas. Landing pages alimentam funil
                  do site. Ecossistema que se retroalimenta.
                </p>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="cta-final" className="py-20 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            className="font-display text-4xl font-bold mb-6"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Ainda na dúvida? Vamos diagnosticar juntos.
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 mb-8"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Em 15 minutos eu te digo exatamente o que você precisa — site, landing page, ou os dois
            — e quanto custa. Sem compromisso.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row justify-center"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <a
              href="https://wa.me/5511930689539?text=Ol%C3%A1%2C%20vi%20o%20guia%20de%20Site%20vs%20Landing%20Page%20e%20gostaria%20de%20entender%20o%20melhor%20para%20meu%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-4 font-semibold text-primary transition-colors hover:bg-brand hover:text-white"
            >
              <Users size={20} className="mr-2" />
              Falar no WhatsApp
            </a>
            <Link
              to="/orcamento"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:border-brand hover:bg-white/5"
            >
              Simular Orçamento
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SiteVsLanding;
