import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Calculator, CheckCircle, HelpCircle, XCircle } from 'lucide-react';
import TiltCard from './TiltCard';

type TipoProjeto = 'landing' | 'site' | 'sistema' | '';
type Recurso =
  | 'seo'
  | 'blog'
  | 'cms'
  | 'automacao'
  | 'pagamento'
  | 'area-cliente'
  | 'multi-idioma'
  | 'dashboard';

const TIPOS = {
  landing: {
    label: 'Landing Page',
    base: 1499,
    prazo: '5-7 dias',
    desc: '1 página, foco conversão, formulário, WhatsApp',
  },
  site: {
    label: 'Site Institucional',
    base: 3299,
    prazo: '15-25 dias',
    desc: '5+ páginas, blog, SEO, CMS, responsivo',
  },
  sistema: {
    label: 'Sistema Web / App',
    base: 8000,
    prazo: '30-60 dias',
    desc: 'Login, dashboard, API, banco de dados, regras de negócio',
  },
};

const RECURSOS: Record<Recurso, { label: string; preco: number; compativel: TipoProjeto[] }> = {
  seo: {
    label: 'SEO Avançado (schema, sitemap, meta tags)',
    preco: 500,
    compativel: ['site', 'sistema'],
  },
  blog: { label: 'Blog + CMS (Markdown/MDX)', preco: 800, compativel: ['site'] },
  cms: {
    label: 'CMS Headless (Contentful/Sanity/Strapi)',
    preco: 1200,
    compativel: ['site', 'sistema'],
  },
  automacao: {
    label: 'Automações (n8n/Make: email, CRM, planilha)',
    preco: 600,
    compativel: ['landing', 'site', 'sistema'],
  },
  pagamento: {
    label: 'Integração Pagamento (Stripe/Mercado Pago)',
    preco: 1000,
    compativel: ['landing', 'site', 'sistema'],
  },
  'area-cliente': {
    label: 'Área do Cliente / Painel Admin',
    preco: 1500,
    compativel: ['site', 'sistema'],
  },
  'multi-idioma': { label: 'Multi-idioma (i18n)', preco: 800, compativel: ['site', 'sistema'] },
  dashboard: { label: 'Dashboard Analytics / Relatórios', preco: 1200, compativel: ['sistema'] },
};

const OrcamentoModal = ({ onClose }: { onClose: () => void }) => {
  const [tipo, setTipo] = useState<TipoProjeto>('');
  const [recursos, setRecursos] = useState<Recurso[]>([]);
  const [etapa, setEtapa] = useState<1 | 2>(1);

  const base = tipo ? TIPOS[tipo].base : 0;
  const extras = recursos.reduce((acc, r) => acc + RECURSOS[r].preco, 0);
  const total = base + extras;
  const prazo = tipo ? TIPOS[tipo].prazo : '—';

  const formatBRL = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

  const handleToggleRecurso = (recurso: Recurso) => {
    setRecursos((prev) =>
      prev.includes(recurso) ? prev.filter((r) => r !== recurso) : [...prev, recurso]
    );
  };

  const proximo = () => {
    if (etapa === 1 && !tipo) return;
    setEtapa(2);
  };

  const voltar = () => setEtapa(1);

  const whatsappUrl = tipo
    ? `https://wa.me/5511930689539?text=Ol%C3%A1%20Lukas%2C%20simulei%20um%20or%C3%A7amento%3A%20${encodeURIComponent(TIPOS[tipo].label)}%20%28${formatBRL(base)}%29%20%2B%20recursos%20%28${formatBRL(extras)}%29%20%3D%20${formatBRL(total)}.%20Prazo%3A%20${prazo}.%20Quero%20agendar%20a%20call.`
    : `https://wa.me/5511930689539?text=Ol%C3%A1%20Lukas%2C%20gostaria%20de%20entender%20melhor%20os%20valores%20para%20meu%20projeto.`;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="orcamento-title"
    >
      <motion.div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-6 py-4 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
              <Calculator size={24} className="text-brand" />
            </div>
            <div>
              <h2
                id="orcamento-title"
                className="font-display text-xl font-bold text-slate-950 dark:text-white"
              >
                Calculadora de Orçamento
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Escolha, personalize e veja o valor na hora
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
            aria-label="Fechar"
          >
            <XCircle size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <progress
            className="w-full h-1 bg-slate-200 dark:bg-slate-700 appearance-none rounded-full"
            value={etapa}
            max={2}
            style={{ height: 4, borderRadius: 9999 }}
            aria-label={`Etapa ${etapa} de 2`}
          >
            <div
              className="bg-brand h-full rounded-full"
              style={{ width: `${(etapa / 2) * 100}%` }}
            />
          </progress>

          {etapa === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800 dark:border dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-2 text-slate-950 dark:text-white">
                  1. Qual tipo de projeto?
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Escolha o formato que melhor se encaixa na sua necessidade hoje.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(TIPOS).map(([key, t]) => (
                    <button
                      key={key}
                      onClick={() => setTipo(key as TipoProjeto)}
                      className={`relative rounded-xl border-2 p-6 text-left transition-all ${
                        tipo === key
                          ? 'border-brand bg-brand/5 dark:bg-brand/10 shadow-lg shadow-brand/10'
                          : 'border-slate-200 hover:border-brand/50 dark:border-slate-700'
                      }`}
                    >
                      {tipo === key && (
                        <div className="absolute -top-3 -right-3 bg-brand text-white text-xs font-bold px-2 py-1 rounded-full">
                          Selecionado
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-brand">{t.label}</h3>
                      <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">{t.desc}</p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <span className="font-bold text-lg text-slate-950 dark:text-white">
                          {formatBRL(t.base)}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">{t.prazo}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={proximo}
                  disabled={!tipo}
                  className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Próximo <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {etapa === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800 dark:border dark:border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                      2. Recursos adicionais
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300">
                      Marque o que precisa. O valor atualiza em tempo real.
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-brand">{formatBRL(base)}</p>
                    <p className="text-sm text-slate-500">Base do projeto</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {Object.entries(RECURSOS).map(([key, rec]) => {
                    const compativel = !tipo || rec.compativel.includes(tipo);
                    const selecionado = recursos.includes(key as Recurso);
                    return (
                      <label
                        key={key}
                        className={`relative rounded-xl border-2 p-4 cursor-pointer transition-all ${
                          !compativel
                            ? 'opacity-40 border-slate-200 dark:border-slate-700'
                            : selecionado
                              ? 'border-brand bg-brand/5 dark:bg-brand/10'
                              : 'border-slate-200 hover:border-brand/50 dark:border-slate-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selecionado}
                          onChange={() => compativel && handleToggleRecurso(key as Recurso)}
                          disabled={!compativel}
                          className="sr-only peer"
                        />
                        <div className="flex items-start gap-3">
                          <div
                            className={`relative mt-1 flex h-5 w-5 items-center justify-center rounded border-2 transition-colors ${
                              selecionado
                                ? 'border-brand bg-brand'
                                : 'border-slate-300 dark:border-slate-600'
                            }`}
                          >
                            {selecionado && <CheckCircle size={14} className="text-white" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`font-medium ${!compativel ? 'text-slate-400' : 'text-slate-950 dark:text-white'}`}
                            >
                              {rec.label}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                              +{formatBRL(rec.preco)}
                            </p>
                            {!compativel && (
                              <span title="Não compatível com o tipo selecionado">
                                <HelpCircle
                                  size={14}
                                  className="inline-block mt-1 text-slate-400"
                                />
                              </span>
                            )}
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>

                {recursos.length > 0 && (
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600 dark:text-slate-300">Subtotal recursos</span>
                      <span className="font-semibold text-brand">{formatBRL(extras)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-slate-950 dark:text-white border-t border-slate-200 dark:border-slate-700 pt-2">
                      <span>Total estimado</span>
                      <span className="text-brand">{formatBRL(total)}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-center">
                      *Valores referência. Orçamento final após call de alinhamento.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={voltar}
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-brand font-medium"
                >
                  <ArrowRight size={20} className="rotate-180" /> Voltar
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand/90 transition-colors"
                >
                  <Calculator size={20} />
                  Enviar orçamento pro WhatsApp
                  <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>
          )}

          <section className="py-6 border-t border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-center mb-6 text-slate-950 dark:text-white">
              Perguntas frequentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: 'O valor final pode ser diferente da estimativa?',
                  a: 'Sim. Esta calculadora dá uma referência baseada em projetos semelhantes. O valor final depende de detalhes técnicos, integrações específicas, complexidade de design e escopo real alinhado na call.',
                },
                {
                  q: 'O que está incluso no valor base?',
                  a: 'Briefing, arquitetura, copy, design system, UI design, desenvolvimento front-end (React+TS+Tailwind), deploy, SSL, analytics básico, 30 dias de suporte e 2 rodadas de revisão de design.',
                },
                {
                  q: 'Posso parcelar?',
                  a: 'Sim. Entrada de 50% na assinatura do contrato, 25% na aprovação do design e 25% na entrega. Para projetos > R$ 10k, parcelamos em até 6x sem juros.',
                },
                {
                  q: 'E se eu precisar de manutenção depois?',
                  a: 'Ofereço plano de manutenção mensal a partir de R$ 399/mês (atualizações, backups, monitoramento, suporte prioritário, pequenas alterações).',
                },
              ].map((faq, i) => (
                <TiltCard
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800"
                >
                  <h3 className="font-semibold text-lg text-brand mb-2 flex items-center gap-2">
                    <HelpCircle size={20} /> {faq.q}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.a}</p>
                </TiltCard>
              ))}
            </div>
          </section>

          <div className="flex justify-end pt-4">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-lg font-semibold hover:border-brand hover:text-brand transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OrcamentoModal;
