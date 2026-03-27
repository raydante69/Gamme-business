import React from 'react';
import { ArrowUpRight, Zap, Award, ChevronRight, Sparkles } from 'lucide-react';

export const UpsellSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-myu-teal/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-myu-purple/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            <Sparkles size={14} className="text-myu-yellow" />
            <span>Gestion financière</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 tracking-tight">
            Allez plus loin dans votre <span className="text-myu-teal">transformation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Vous maîtrisez les bases ? Découvrez nos offres avancées pour propulser votre cabinet et vos clients vers de nouveaux sommets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gamme Business */}
          <div className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-myu-teal/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-myu-teal/10 rounded-2xl flex items-center justify-center mb-8 text-myu-teal group-hover:bg-myu-teal group-hover:text-white transition-all duration-500 shadow-inner">
                <Zap size={32} />
              </div>
              
              <h3 className="text-3xl font-display font-black text-gray-900 mb-4">Gamme Business</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                Passez à la vitesse supérieure. Automatisez vos processus, gérez des volumes plus importants et accédez à des outils de pilotage avancés pour votre croissance.
              </p>
              
              <ul className="space-y-3 mb-10">
                {['Automatisation avancée', 'Gestion multi-sociétés', 'Analyses prédictives', 'Tableaux de bord personnalisés'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-myu-teal/20 flex items-center justify-center text-myu-teal shrink-0">
                      <ChevronRight size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-4 px-6 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-myu-teal transition-all duration-300 group/btn shadow-lg">
                Découvrir l'offre Business
                <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Gamme Perfectionnement */}
          <div className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-myu-purple/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-myu-purple/10 rounded-2xl flex items-center justify-center mb-8 text-myu-purple group-hover:bg-myu-purple group-hover:text-white transition-all duration-500 shadow-inner">
                <Award size={32} />
              </div>
              
              <h3 className="text-3xl font-display font-black text-gray-900 mb-4">Gamme Perfectionnement</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                L'excellence opérationnelle. Maîtrisez chaque détail de votre gestion, optimisez votre rentabilité et devenez un expert incontesté de la plateforme MyU.
              </p>
              
              <ul className="space-y-3 mb-10">
                {['Expertise approfondie', 'Optimisation fiscale & flux', 'Reporting sur-mesure', 'Support prioritaire expert'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-myu-purple/20 flex items-center justify-center text-myu-purple shrink-0">
                      <ChevronRight size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-4 px-6 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-myu-purple transition-all duration-300 group/btn shadow-lg">
                Atteindre le Perfectionnement
                <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
