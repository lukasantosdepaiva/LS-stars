import { motion } from 'framer-motion';
import { Check, Code, Globe, Search, Zap, Users, Shield, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

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

const SiteVsLandingModal = () => {
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
      <section className="py-8">
        <div className="text-center mb-10">
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand dark:text-accent"
            variants={item}
            initial="hidden"
            animate="show"
          >
            Guia Decisivo
          </motion.p>
          <motion.h1
            className="font-display text-3xl md:text-4xl font-bold leading-tight"
            variants={item}
            initial="hidden"
            animate="show"
          >
            Site Institucional <span className="text-brand"> vs </span> Landing Page
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-gray-300"
            variants={item}
            initial="hidden"
            animate="show"
          >
            A diferença não é técnica — é estratégica. Escolha errado e você gasta tempo/dinheiro no
            que não converte. Escolha certo e acelera suas vendas.
          </motion.p>
        </div>

        <motion.div
          className="overflow-x-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <table className="w-full text-left" role="table">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="pb-3 font-semibold text-slate-700 dark:text-slate-300">Critério</th>
                <th className="pb-3 font-semibold text-slate-700 dark:text-slate-300">
                  Site Institucional
                </th>
                <th className="pb-3 font-semibold text-slate-700 dark:text-slate-300">
                  Landing Page
                </th>
                <th className="pb-3 font-semibold text-slate-700 dark:text-slate-300">Veredito</th>
              </tr>
            </thead>
            <tbody>
              {comparacao.map((row, i) => (
                <tr
                  key={row.criterio}
                  className={`border-b border-slate-100 dark:border-slate-800 ${i % 2 === 0 ? 'bg-slate-50 dark:bg-slate-800/50' : ''}`}
                >
                  <td className="py-4 font-medium text-brand">{row.criterio}</td>
                  <td className="py-4 text-slate-600 dark:text-slate-300">{row.site}</td>
                  <td className="py-4 text-slate-600 dark:text-slate-300">{row.landing}</td>
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
      </section>

      <section className="py-8">
        <div className="text-center mb-10">
          <motion.p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent">
            Escolha Site Se
          </motion.p>
          <motion.h2 className="font-display text-3xl font-bold">
            Você precisa de autoridade e presença completa
          </motion.h2>
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {quandoSite.map((motivo, i) => (
            <motion.div key={motivo} variants={item}>
              <TiltCard className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-lg hover:border-brand hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand text-white">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{motivo}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-8">
        <div className="text-center mb-10">
          <motion.p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent">
            Escolha Landing Page Se
          </motion.p>
          <motion.h2 className="font-display text-3xl font-bold">
            Você precisa converter AGORA, com foco total
          </motion.h2>
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {quandoLanding.map((motivo, i) => (
            <motion.div key={motivo} variants={item}>
              <TiltCard className="h-full rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-lg hover:border-brand hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                    <Zap size={20} />
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{motivo}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-8 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand dark:text-accent">
            A Melhor Estratégia
          </motion.p>
          <motion.h2 className="font-display text-3xl font-bold mb-6">
            Muitos clientes fazem os DOIS (e na ordem certa)
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <TiltCard className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-lg text-center hover:border-brand hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand dark:bg-brand/20 dark:text-accent">
                  <Search size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand">
                  1. Valide com Landing Page
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Lance rápido, teste oferta, capture leads, valide preço. Baixo risco, feedback
                  real em dias.
                </p>
              </TiltCard>
            </motion.div>
            <motion.div variants={item}>
              <TiltCard className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-lg text-center hover:border-brand hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent dark:text-accent">
                  <Code size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand">
                  2. Construa Autoridade com Site
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Com oferta validada, expanda para site completo: blog, cases, SEO, múltiplos
                  serviços. Investe no que já vende.
                </p>
              </TiltCard>
            </motion.div>
            <motion.div variants={item}>
              <TiltCard className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-lg text-center hover:border-brand hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                  <ArrowRight size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand">3. Conecte Tudo</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Site envia tráfego para landing pages de campanhas. Landing pages alimentam funil
                  do site. Ecossistema que se retroalimenta.
                </p>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-brand text-white text-center">
        <motion.h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Ainda na dúvida? Vamos diagnosticar juntos.
        </motion.h2>
        <motion.p className="text-white/80 mb-6 text-lg max-w-xl mx-auto">
          Em 15 minutos eu te digo exatamente o que você precisa — site, landing page, ou os dois —
          e quanto custa. Sem compromisso.
        </motion.p>
        <motion.div className="flex flex-col gap-4 sm:flex-row justify-center">
          <a
            href="https://wa.me/5511930689539?text=Ol%C3%A1%2C%20vi%20o%20guia%20de%20Site%20vs%20Landing%20Page%20e%20gostaria%20de%20entender%20o%20melhor%20para%20meu%20caso."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 font-semibold text-brand transition-colors hover:bg-slate-100"
          >
            <Users size={20} className="mr-2" />
            Falar no WhatsApp
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default SiteVsLandingModal;
