import { Github, Instagram, Linkedin, MapPin, Phone, MessageSquare } from 'lucide-react';

const footerLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#pricing', label: 'Planos' },
  { href: '#contact', label: 'Contato' },
];

const services = ['Landing pages', 'Sites institucionais', 'Sistemas web', 'Otimização digital'];
const phoneDisplay = '+55 11 93068-9539';
const whatsappUrl = 'https://wa.me/5511930689539';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-950 dark:border-white/10 dark:bg-primary dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-bold text-brand mb-4">LS Stars</h3>
            <p className="max-w-sm text-slate-600 dark:text-gray-400">
              Agência digital especializada em sites, landing pages e soluções web para empresas que
              querem crescer online.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition-colors hover:border-brand hover:text-brand dark:border-white/10 dark:text-gray-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition-colors hover:border-brand hover:text-brand dark:border-white/10 dark:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition-colors hover:border-brand hover:text-brand dark:border-white/10 dark:text-gray-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3 text-slate-600 dark:text-gray-300">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand dark:hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3 text-slate-600 dark:text-gray-300">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-slate-600 dark:text-gray-300">
              <li className="flex items-center">
                <MessageSquare size={16} className="mr-2 text-brand" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand dark:hover:text-accent break-all"
                >
                  WhatsApp: {phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-brand" />
                <a href="tel:+5511930689539" className="hover:text-brand dark:hover:text-accent">
                  {phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-brand" /> São Paulo, SP
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-gray-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LS Stars. Todos os direitos reservados.</p>
          <p>Sites modernos, rápidos e prontos para crescer.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
