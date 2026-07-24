import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Results from './components/Results';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Blog from './pages/Blog';
import ClientArea from './pages/ClientArea';
import AdminDashboard from './pages/AdminDashboard';
import SiteVsLanding from './pages/SiteVsLanding';
import ComoFunciona from './pages/ComoFunciona';
import Orcamento from './pages/Orcamento';

/**
 * Main application component. The base landing page is assembled here using
 * sections that are linked via hash anchors in the navigation bar.
 * Additional routes are provided for future expansibility (blog, client area,
 * admin). They currently render simple placeholder components.
 */
const App: React.FC = () => {
  return (
    <Router>
      {/* Global layout */}
      <ScrollProgress />
      <Navbar />
      {/* Additional routes */}
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/cliente" element={<ClientArea />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/site-vs-landing-page" element={<SiteVsLanding />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/orcamento" element={<Orcamento />} />
      </Routes>
      {/* Main landing page (home) */}
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Results />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
