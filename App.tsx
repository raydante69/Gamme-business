import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { MasteringBusiness } from './pages/MasteringBusiness';
import { CollaborativeSpace } from './pages/CollaborativeSpace';
import { Connectors } from './pages/Connectors';
import { MobileApp } from './pages/MobileApp';
import { MobileAndCollab } from './pages/MobileAndCollab';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // Si il y a une ancre (#section), on essaie de scroller vers elle
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100); // Petit délai pour laisser le temps au rendu de se faire
    } else {
      // Sinon on remonte tout en haut
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] glass-nav border-b border-white/20 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-display font-black text-2xl text-gray-900 tracking-tighter group-hover:text-myu-teal transition-colors">Business</span>
          </Link>
        </div>
      </header>
    </>
  );
};

const Footer = () => (
  <footer className="glass-panel border-t border-white/20 py-12 mt-auto relative overflow-hidden z-10">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
         <span className="font-bold text-gray-900 font-display text-lg">Business</span>
      </div>
      <p className="text-gray-600 text-sm font-medium">© {new Date().getFullYear()} Business</p>
    </div>
  </footer>
);

const AppContent = () => {
  const location = useLocation();
  const isMobileCollabPage = location.pathname === '/appli-mobile-collab';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 pt-24 selection:bg-myu-teal selection:text-white relative overflow-hidden">
      
      {/* COLORED BACKGROUND - NO WHITE */}
      {!isMobileCollabPage && (
        <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none overflow-hidden bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-teal-100/50">
             
             {/* Organic Floating Shapes */}
             <div className="absolute top-[-10%] left-[-5%] w-[70vw] h-[70vw] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-[60px] animate-blob"></div>
             <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-teal-300/30 rounded-full mix-blend-multiply filter blur-[60px] animate-blob animation-delay-2000"></div>
             <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-[60px] animate-blob animation-delay-4000"></div>
             
             {/* Subtle SVG Texture for depth */}
             <svg className="absolute top-0 left-0 w-full h-full opacity-[0.4]" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.1"/>
             </svg>
        </div>
      )}

      <Header />
      <main className="flex-grow relative z-20">
        <div className="w-full relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maitriser-business" element={<MasteringBusiness />} />
            <Route path="/espace-collaboratif" element={<CollaborativeSpace />} />
            <Route path="/connecteurs" element={<Connectors />} />
            <Route path="/appli-mobile" element={<MobileApp />} />
            <Route path="/appli-mobile-collab" element={<MobileAndCollab />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <style>{`
        .animation-delay-2000 { animation-delay: 5s; }
        .animation-delay-3000 { animation-delay: 8s; }
        .animation-delay-4000 { animation-delay: 12s; }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

const MainApp = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppContent />
    </HashRouter>
  );
};

const App = () => {
  return (
    <MainApp />
  );
};

export default App;