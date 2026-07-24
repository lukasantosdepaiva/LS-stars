import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X, BookOpen, Settings, Calculator } from 'lucide-react';
import Modal from './Modal';
import SiteVsLandingModal from './SiteVsLandingModal';
import ComoFuncionaModal from './ComoFuncionaModal';
import OrcamentoModal from './OrcamentoModal';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#process', label: 'Processo' },
  { href: '#pricing', label: 'Planos' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true;
    const savedTheme = localStorage.getItem('ls-stars-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? savedTheme === 'dark' : prefersDark;
  });

  const [modal, setModal] = useState<'sitevs' | 'como' | 'orcamento' | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    localStorage.setItem('ls-stars-theme', nextTheme ? 'dark' : 'light');
  };

  const openModal = (type: 'sitevs' | 'como' | 'orcamento') => {
    setModal(type);
    setOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-primary/90 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="font-display text-2xl font-bold text-brand">
            LS Stars
          </a>

          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-brand transition-colors dark:text-white dark:hover:text-accent"
              >
                {link.label}
              </a>
            ))}

            <div className="hidden md:flex items-center space-x-2 border-l border-slate-200 dark:border-white/10 pl-6 ml-2">
              <button
                onClick={() => openModal('sitevs')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-brand transition-colors dark:text-white dark:hover:text-accent"
              >
                <BookOpen size={16} />
                Site vs Landing
              </button>
              <button
                onClick={() => openModal('como')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-brand transition-colors dark:text-white dark:hover:text-accent"
              >
                <Settings size={16} />
                Como funciona
              </button>
              <button
                onClick={() => openModal('orcamento')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-brand transition-colors dark:text-white dark:hover:text-accent"
              >
                <Calculator size={16} />
                Simular orçamento
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:border-brand hover:text-brand transition-colors dark:border-white/15 dark:text-white dark:hover:border-accent dark:hover:text-accent"
              aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
              title={darkMode ? 'Modo claro' : 'Modo escuro'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => openModal('orcamento')}
              className="bg-accent text-primary px-4 py-2 rounded-md font-semibold hover:bg-brand hover:text-white transition-colors"
            >
              Solicitar orçamento
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 dark:border-white/15 dark:text-white"
              aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-slate-800 dark:text-white"
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white pb-4 dark:border-white/10 dark:bg-primary">
            <div className="px-2 pt-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-slate-700 hover:text-brand px-3 py-2 rounded-md dark:text-white dark:hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-slate-200 dark:border-white/10 my-2 pt-2 space-y-1">
                <button
                  onClick={() => openModal('sitevs')}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-brand px-3 py-2 rounded-md dark:text-white dark:hover:text-accent"
                >
                  <BookOpen size={18} />
                  Site vs Landing
                </button>
                <button
                  onClick={() => openModal('como')}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-brand px-3 py-2 rounded-md dark:text-white dark:hover:text-accent"
                >
                  <Settings size={18} />
                  Como funciona
                </button>
                <button
                  onClick={() => openModal('orcamento')}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-brand px-3 py-2 rounded-md dark:text-white dark:hover:text-accent"
                >
                  <Calculator size={18} />
                  Simular orçamento
                </button>
              </div>
              <button
                onClick={() => {
                  openModal('orcamento');
                  setOpen(false);
                }}
                className="block bg-accent text-primary text-center px-3 py-2 rounded-md mt-2 font-semibold hover:bg-brand hover:text-white"
              >
                Solicitar orçamento
              </button>
            </div>
          </div>
        )}
      </nav>

      {modal === 'sitevs' && (
        <Modal isOpen={true} onClose={() => setModal(null)} title="Site vs Landing Page" size="xl">
          <SiteVsLandingModal />
        </Modal>
      )}
      {modal === 'como' && (
        <Modal isOpen={true} onClose={() => setModal(null)} title="Como funciona" size="xl">
          <ComoFuncionaModal />
        </Modal>
      )}
      {modal === 'orcamento' && (
        <Modal
          isOpen={true}
          onClose={() => setModal(null)}
          title="Calculadora de Orçamento"
          size="lg"
        >
          <OrcamentoModal onClose={() => setModal(null)} />
        </Modal>
      )}
    </>
  );
};

export default Navbar;
