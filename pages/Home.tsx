import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { UpsellSection } from '../components/ui/UpsellSection';
import { FileText, Settings, Layers, Sliders, ArrowRight, Sparkles, MoveRight, BookOpen, Search, ChevronRight, CornerDownRight, Users, Share2, Smartphone, ShieldCheck, ClipboardCheck, Info } from 'lucide-react';

const CARDS_DATA = [
  {
    id: 'maitriser',
    to: "/maitriser-business",
    title: "Maîtriser la gamme Business",
    icon: <ArrowRight size={32} />, 
    description: "Pilotage, gestion des tiers, produits, devis, facturation et suivi des règlements.",
    variant: "yellow",
    colSpan: "xl:col-span-2",
    isSpecial: true
  },
  {
    id: 'mobile-collab',
    to: "/appli-mobile-collab",
    title: "Application mobile et espace collaboratif",
    icon: <Smartphone size={32} />,
    description: "Espace collaboratif, fonctionnalités, application mobile, connexion et création de documents.",
    variant: "purple",
    colSpan: "xl:col-span-2"
  }
];

// INDEX DE RECHERCHE GLOBAL
const GLOBAL_SEARCH_INDEX = [
    // --- MAITRISER BUSINESS ---
    { title: "1. Pilotage de l'entreprise", category: "Maîtriser Business", path: "/maitriser-business", hash: "#chapter-1", keywords: "dashboard, ca, tableau de bord, chiffres clés, pilotage, indicateurs" },
    { title: "2. Gestion des tiers", category: "Maîtriser Business", path: "/maitriser-business", hash: "#chapter-2", keywords: "prospect, client, fournisseur, tiers, contact" },
    { title: "3. Gestion des produits", category: "Maîtriser Business", path: "/maitriser-business", hash: "#chapter-3", keywords: "produit, service, catalogue, article, bien" },
    { title: "4. Devis et facturation", category: "Maîtriser Business", path: "/maitriser-business", hash: "#chapter-4", keywords: "devis, facture, acompte, remise, vente, facturation" },
    { title: "6. Suivi des règlements", category: "Maîtriser Business", path: "/maitriser-business", hash: "#chapter-6", keywords: "paiement, encaissement, règlement, rapprochement, banque" },
    { title: "7. Compte pro et carte de paiement", category: "Maîtriser Business", path: "/maitriser-business", hash: "#chapter-7", keywords: "banque, carte, mastercard, compte pro, virement" },
    { title: "Auto évaluez vous ! (Business)", category: "Maîtriser Business", path: "/maitriser-business", hash: "#quiz-section", keywords: "quiz, test, validation, certification, qcm" },

    // --- ESPACE COLLABORATIF ET APPLI MOBILE ---
    { title: "A. Télécharger l’appli mobile MyUnisoft", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-a", keywords: "télécharger, ios, android, app store, google play, installation" },
    { title: "B. Les avantages de MyU Application mobile", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-b", keywords: "avantages, bénéfices, fonctionnalités, pourquoi utiliser" },
    { title: "C. Se connecter à l’application mobile", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-c", keywords: "connexion, login, identifiant, se connecter, accès" },
    { title: "D. Générer un nouveau mot de passe", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-d", keywords: "mot de passe oublié, réinitialiser, mdp, sécurité" },
    { title: "E. Découvrir la page d’accueil", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-e", keywords: "accueil, dashboard, interface, menu principal" },
    { title: "F. Envoyer un justificatif", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-f", keywords: "justificatif, photo, scan, document, note de frais, achat" },
    { title: "G. Consulter les demandes", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-g", keywords: "demande, Expert-Comptable, document manquant, notification" },
    { title: "H. Créer un client", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-h", keywords: "créer client, nouveau client, contact, crm" },
    { title: "I. Créer un produit", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-i", keywords: "créer produit, nouveau produit, service, catalogue" },
    { title: "J. Créer un devis", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-j", keywords: "créer devis, nouveau devis, proposition commerciale" },
    { title: "K. Créer une facture", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#section-k", keywords: "créer facture, nouvelle facture, facturation mobile" },
    { title: "L. Espace collaboratif MyUnisoft", category: "Espace Collaboratif", path: "/appli-mobile-collab", hash: "#section-collab", keywords: "espace collaboratif, client, Expert-Comptable, indicateurs, temps réel, ged, messagerie" },
    { title: "Auto évaluez vous ! (Mobile)", category: "Appli Mobile", path: "/appli-mobile-collab", hash: "#quiz-section", keywords: "quiz, test, validation, certification, qcm" },
];

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<typeof GLOBAL_SEARCH_INDEX>([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
        setResults([]);
        return;
    }

    const lowerTerm = searchTerm.toLowerCase();
    const filtered = GLOBAL_SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(lowerTerm) || 
        item.keywords.toLowerCase().includes(lowerTerm) ||
        item.category.toLowerCase().includes(lowerTerm)
    );
    setResults(filtered);
  }, [searchTerm]);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Hero Section */}
      <div className="relative pt-8 pb-8 z-10">
        <div className="flex flex-col items-center text-center w-full mx-auto space-y-8 animate-fade-in-up">
          
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default hover:scale-105 duration-300">
             <Sparkles size={16} className="text-myu-yellow fill-myu-yellow animate-pulse" />
             <span className="text-xs font-bold uppercase tracking-widest font-display text-gray-800">Utilisateurs finaux</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-gray-900 tracking-tight leading-none text-center cursor-default">
            <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-myu-teal hover:to-myu-purple transition-all duration-500">Maîtriser la gamme Business</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mt-8">
             Transformez l'obligation de la réforme en opportunité.<br/>
             Formez vous sur notre <span className="text-myu-teal font-bold">gamme Business</span>.
          </p>

          {/* SEARCH BAR */}
          <div className="w-full max-w-xl relative group z-50">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400 group-focus-within:text-myu-teal transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-6 py-5 bg-white/90 backdrop-blur-xl border border-white/50 text-gray-900 rounded-3xl focus:ring-4 focus:ring-myu-teal/20 focus:border-myu-teal shadow-xl shadow-gray-200/50 placeholder-gray-400 transition-all font-medium text-lg"
              placeholder="Rechercher un module, un sujet, un mot-clé..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
                <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                    <span className="text-sm font-bold bg-gray-100 px-2 py-1 rounded-md">Echap</span>
                </button>
            )}
          </div>

        </div>
      </div>

      {/* SEARCH RESULTS VIEW */}
      {searchTerm !== "" ? (
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-white shadow-2xl p-8 min-h-[400px] animate-fade-in">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Search className="text-myu-teal" />
                  {results.length} Résultat{results.length > 1 ? 's' : ''} pour "{searchTerm}"
              </h2>
              
              {results.length > 0 ? (
                  <div className="space-y-4">
                      {results.map((item, index) => (
                          <Link 
                            key={index} 
                            to={`${item.path}${item.hash}`} 
                            className="group block bg-white border border-gray-100 rounded-2xl p-6 hover:border-myu-teal hover:shadow-lg hover:shadow-myu-teal/10 transition-all duration-300 transform hover:-translate-x-1"
                          >
                              <div className="flex items-start justify-between">
                                  <div>
                                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                                          <span className="text-myu-teal bg-myu-teal/10 px-2 py-0.5 rounded">{item.category}</span>
                                          <ChevronRight size={12} />
                                          <span>Résultat pertinent</span>
                                      </div>
                                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-myu-teal transition-colors mb-2">
                                          {item.title}
                                      </h3>
                                      <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                                          <CornerDownRight size={14} className="text-gray-300" />
                                          Mots-clés : {item.keywords}
                                      </p>
                                  </div>
                                  <div className="bg-gray-50 text-gray-400 p-2 rounded-full group-hover:bg-myu-teal group-hover:text-white transition-all">
                                      <MoveRight size={20} />
                                  </div>
                              </div>
                          </Link>
                      ))}
                  </div>
              ) : (
                  <div className="text-center py-12">
                      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                          <Search size={40} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun résultat trouvé</h3>
                      <p className="text-gray-500 max-sm mx-auto">
                          Nous n'avons rien trouvé correspondant à "{searchTerm}". Essayez des mots plus généraux comme "facture", "email", ou "paramètres".
                      </p>
                  </div>
              )}
          </div>
      ) : (
        /* ORIGINAL GRID VIEW */
        <>
            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr relative z-10">
            {CARDS_DATA.map((card) => (
                <div key={card.id} className={card.colSpan}>
                {card.isSpecial ? (
                    <Link to={card.to} className={`group relative block h-full rounded-4xl py-5 px-8 md:px-12 overflow-hidden transition-all duration-500 hover:-translate-y-2 border ring-4 ring-transparent ${card.id === 'prescrire' ? 'bg-[#fe3a5e] border-[#fe3a5e] hover:shadow-[0_30px_60px_-15px_rgba(254,58,94,0.3)] hover:ring-[#fe3a5e]/30' : 'bg-myu-yellow border-myu-yellow hover:shadow-[0_30px_60px_-15px_rgba(255,212,6,0.4)] hover:ring-myu-yellow/30'}`}>
                    
                    <div className={`absolute top-0 right-0 w-96 h-96 bg-white ${card.id === 'prescrire' ? 'opacity-20' : 'opacity-40'} rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700`}></div>
                    
                    {card.id !== 'prescrire' && (
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400 opacity-20 rounded-full blur-3xl -ml-20 -mb-20"></div>
                    )}
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 h-full">
                        <div className="max-w-xl">
                            <div className={`${card.id === 'prescrire' ? 'bg-white text-[#fe3a5e]' : 'bg-black text-white'} font-bold text-xs px-4 py-1.5 rounded-full inline-block mb-6 uppercase tracking-wider border border-black/10 shadow-sm group-hover:scale-105 transition-transform`}>Module Principal</div>
                            <h2 className={`text-4xl md:text-5xl font-display font-black ${card.id === 'prescrire' ? 'text-black' : 'text-black'} mb-4 leading-[0.9]`}>
                                {card.title.split('MyU').map((part, i) => i === 0 ? <React.Fragment key={i}>{part}</React.Fragment> : <React.Fragment key={i}>MyU{part}</React.Fragment>)}
                            </h2>
                            <p className={`${card.id === 'prescrire' ? 'text-black/80' : 'text-black/80'} font-medium text-xl max-w-md`}>
                                {card.description}
                            </p>
                        </div>
                        <div className={`${card.id === 'prescrire' ? 'bg-black text-white' : 'bg-black text-white'} w-24 h-24 rounded-full flex items-center justify-center shrink-0 group-hover:rotate-45 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-2xl group-hover:scale-110`}>
                            <ArrowRight size={40} />
                        </div>
                    </div>
                    </Link>
                ) : (
                    <Card 
                    to={card.to} 
                    title={card.title} 
                    icon={card.icon}
                    description={card.description}
                    variant={card.variant as any}
                    />
                )}
                </div>
            ))}
            </div>
        </>
      )}

      {/* Upsell Section */}
      <UpsellSection />
    </div>
  );
};
