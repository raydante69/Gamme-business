import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Smartphone, 
  Download, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2, 
  Check, 
  Eye, 
  Zap, 
  UserPlus, 
  Package, 
  FileText, 
  Layout, 
  ChevronDown,
  Info,
  Menu,
  Key,
  Mail,
  Send,
  Plus,
  Search,
  ChevronRight,
  ExternalLink,
  Bell,
  Users,
  ArrowDown
} from 'lucide-react';
import { Screenshot } from '../components/ui/Screenshot';
import { InteractiveNote } from '../components/ui/InteractiveNote';
import { PageQuiz } from '../components/PageQuiz';

const IMG_MOBILE_BASE = "https://www2.myunisoft.fr/outils/o/MyUGFi/section_application_mobile/";

const FileEdit = FileText;

const sections = [
    { id: 'section-a', title: "A. Télécharger l’application mobile", icon: Download },
    { id: 'section-b', title: "B. Les avantages", icon: Zap },
    { id: 'section-c', title: "C. Se connecter", icon: Key },
    { id: 'section-d', title: "D. Réinitialisation mot de passe", icon: ShieldCheck },
    { id: 'section-e', title: "E. Page d’accueil", icon: Layout },
    { id: 'section-f', title: "F. Envoyer un justificatif", icon: Send },
    { id: 'section-g', title: "G. Créer un client", icon: UserPlus },
    { id: 'section-h', title: "H. Créer un produit", icon: Package },
    { id: 'section-i', title: "I. Créer un devis", icon: FileEdit },
    { id: 'section-j', title: "J. Créer une facture", icon: FileText },
    { id: 'section-k', title: "K. Gérer les demandes", icon: Bell },
    { id: 'section-l', title: "L. Page profil & Société", icon: Menu },
];

export const MobileApp = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('section-a');

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
            
            <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:border-myu-teal cursor-pointer"
            >
                <ArrowLeft size={16} /> Retour
            </button>

            <div className="mb-16 max-w-7xl">
                <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-6 tracking-tight leading-tight w-full max-w-[1200px]">
                    <span className="relative">
                        Application
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-myu-teal rounded-full"></div>
                    </span> mobile
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed font-bold max-w-3xl">
                    ❐ Pensée pour les dirigeants qui souhaitent gagner du temps et simplifier leurs échanges avec leurs Experts-Comptables, l’appli MyUnisoft vous accompagne pour piloter votre entreprise en toute sérénité.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-12 items-start relative">
                
                {/* Sidebar Navigation */}
                <div className="hidden lg:block w-80 sticky top-24 shrink-0">
                    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl">
                        <h3 className="font-display font-black text-gray-900 mb-6 px-2 text-lg border-b pb-4">Plan du guide</h3>
                        <div className="space-y-1">
                            {sections.map((sec) => (
                                <button
                                    key={sec.id}
                                    onClick={() => scrollToSection(sec.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-3 group ${
                                        activeSection === sec.id 
                                        ? 'bg-myu-teal text-gray-900 shadow-lg shadow-myu-teal/20' 
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-myu-teal'
                                    }`}
                                >
                                    <sec.icon size={18} className={activeSection === sec.id ? 'text-gray-900' : 'text-gray-400 group-hover:text-myu-teal'} />
                                    <span className="truncate">{sec.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content Areas */}
                <div className="flex-1 w-full min-w-0 space-y-24 pb-24 max-w-4xl mx-auto">
                    
                    {/* SECTION A */}
                    <div id="section-a" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-myu-teal/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="text-myu-teal font-black">a)</span> télécharger l’application mobile MyUnisoft
                            </h2>
                            
                            <div className="mb-12">
                                <Screenshot src={`${IMG_MOBILE_BASE}appli%20mobile.png`} alt="application mobile" />
                            </div>

                            <div className="space-y-8">
                                <p className="text-2xl font-black text-gray-900 border-l-4 border-myu-teal pl-6">
                                    L’ application est disponible sur iOs, Android et responsive sur ordinateur, tablettes, portables
                                </p>
                                <div className="max-w-md mx-auto">
                                    <Screenshot src={`${IMG_MOBILE_BASE}appli%20mobile%202.png`} alt="application mobile 2" />
                                </div>
                                
                                <div className="pt-8 border-t border-gray-100 text-center">
                                    <a 
                                        href="https://www2.myunisoft.fr/outils/o/MyUGFi/section_application_mobile/Fiche-pratique-application-mobile-1225.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-4 text-myu-teal font-black text-2xl hover:underline group"
                                    >
                                        <div className="p-4 bg-myu-teal text-gray-900 rounded-2xl group-hover:scale-110 transition-transform">
                                            <FileText size={32}/>
                                        </div>
                                        Pour aller plus loin : Fiche pratique application mobile
                                        <ExternalLink size={24} className="text-gray-400" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION B */}
                    <div id="section-b" className="scroll-mt-24">
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-myu-teal opacity-10 rounded-full blur-[80px] -ml-20 -mb-20"></div>
                            <h2 className="text-3xl font-display font-black mb-12 flex items-center gap-4">
                                <span className="text-myu-teal font-black">b)</span> les avantages de MyU Application mobile
                            </h2>
                            
                            <div className="space-y-4">
                                {[
                                    { icon: Eye, text: "Vision à 360° de votre activité : suivez vos ventes, règlements et dépenses en toute sérénité" },
                                    { icon: Send, text: "Envoi instantané de documents : transmettez vos factures, justificatifs et documents depuis votre smartphone" },
                                    { icon: Bell, text: "Demandes en temps réel : recevez et traitez les requêtes de votre Expert-Comptable sans attendre" },
                                    { icon: ShieldCheck, text: "Sécurité garantie : authentification renforcée et synchronisation avec votre espace MyU Gestion" }
                                ].map((adv, i) => (
                                    <div key={i} className="flex gap-6 items-center bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors w-full">
                                        <div className="w-12 h-12 bg-myu-teal text-gray-900 rounded-xl flex items-center justify-center shrink-0">
                                            <adv.icon size={24} />
                                        </div>
                                        <p className="font-bold text-lg leading-relaxed italic">● {adv.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SECTION C */}
                    <div id="section-c" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-12 flex items-center gap-4">
                                <span className="text-myu-teal font-black">c)</span> se connecter à l’application mobile MyU Gestion Financière
                            </h2>
                            
                            <div className="space-y-16 relative">
                                <div className="space-y-8 text-center">
                                    <p className="text-xl font-bold text-gray-900 flex items-center justify-center gap-4">
                                        <span className="w-10 h-10 rounded-full bg-myu-teal text-gray-900 flex items-center justify-center font-black">1</span>
                                        ❐ Voici à quoi ressemble l’écran de l’application
                                    </p>
                                    <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-2xl overflow-hidden bg-white aspect-[9/19] ring-4 ring-slate-100 relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                        <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20connexion%20MyU%20Gestion%20Fi.png`} alt="connexion application mobile" />
                                    </div>
                                </div>

                                <div className="flex justify-center text-myu-teal/30">
                                    <ArrowDown size={32} />
                                </div>

                                <div className="space-y-8 text-center">
                                    <p className="text-xl font-bold text-gray-900 flex items-center justify-center gap-4">
                                        <span className="w-10 h-10 rounded-full bg-myu-teal text-gray-900 flex items-center justify-center font-black">2</span>
                                        Lorsque vous vous connectez sur l’application mobile, vous arrivez sur cette fenêtre de connexion
                                    </p>
                                    <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-2xl overflow-hidden bg-white aspect-[9/19] ring-4 ring-slate-100 relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                        <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20page%20de%20connexion%20%c3%a9cran%20mobile.png`} alt="page de connexion écran mobile" />
                                    </div>
                                </div>

                                <div className="bg-myu-light/30 p-10 rounded-[3rem] border border-myu-light text-center w-full shadow-inner space-y-8">
                                    <p className="text-2xl font-black text-gray-900">
                                        Renseignez vos identifiants de connexion habituels puis cliquez sur le bouton <span className="text-myu-teal underline decoration-4 underline-offset-8">se connecter</span>
                                    </p>
                                    <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-2xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                        <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran-%20login%20appli%20mobile.png`} alt="login application mobile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION D */}
                    <div id="section-d" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="text-myu-teal font-black">d)</span> générer un nouveau mot de passe suite à un mot de passe oublié
                            </h2>
                            
                            <div className="space-y-16">
                                <InteractiveNote type="warning" title="Attention">
                                    ❐ Attention, si vous avez oublié votre mot de passe et que vous effectuez trois tentatives successives de mots de passe erronés, vous devrez réinitialiser votre mot de passe en cliquant sur le bouton <strong>“mot de passe oublié”</strong>.
                                </InteractiveNote>

                                <div className="space-y-12 text-center">
                                    <div className="space-y-6">
                                        <p className="text-xl font-bold text-gray-900 max-w-2xl mx-auto">
                                            1. Vous atterrissez sur cette nouvelle page, renseignez votre adresse email, puis cliquez sur le bouton <strong>Envoyer le nouveau lien</strong>
                                        </p>
                                        <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                            <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-mot%20de%20passe%20oubli%c3%a9%20appli%20mobile.png`} alt="mot de passe oublié" />
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-myu-teal/30">
                                        <ArrowDown size={32} />
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-2xl font-black text-myu-teal">
                                            2. Vous pourrez alors générer un nouveau mot de passe
                                        </p>
                                        <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                            <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20nouveau%20mot%20de%20passe%20appli%20.png`} alt="nouveau mot de passe" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION E */}
                    <div id="section-e" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden w-full">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="text-myu-teal font-black">e)</span> découvrir la page d’accueil - application mobile
                            </h2>
                            
                            <div className="space-y-16">
                                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 w-full space-y-12">
                                    <p className="text-2xl font-black text-gray-900 text-center">
                                        ❐ Une fois connecté sur l’appli, vous arrivez sur cette page si vous disposez de l’offre SCI, Start, Business, Performance
                                    </p>
                                    
                                    <div className="space-y-12 text-center">
                                        <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-2xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                            <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20envoyer%20un%20justificatif%20%c3%a0%20son%20expert%20comptable%20(3).png`} alt="envoyer justificatif Expert-Comptable" />
                                        </div>
                                        <div className="space-y-6 max-w-2xl mx-auto text-left">
                                            <p className="text-xl font-bold text-gray-700 flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                                <div className="w-8 h-8 rounded-lg bg-myu-teal text-gray-900 flex items-center justify-center shrink-0 font-black">1</div>
                                                En haut de votre écran, apparaît un bandeau avec vos notifications en cours (si vous en avez)
                                            </p>
                                            <p className="text-xl font-bold text-gray-700 flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                                <div className="w-8 h-8 rounded-lg bg-myu-teal text-gray-900 flex items-center justify-center shrink-0 font-black">2</div>
                                                Vous disposez d’un accès rapide à certaines fonctionnalités comme : créer une facture, créer un client et envoyer un document.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-indigo-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden w-full text-center space-y-10">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                                    <div className="space-y-6">
                                        <p className="text-3xl font-black italic">Si vous disposez de l’offre First (freemium), votre page d’accueil s’affiche ainsi.</p>
                                        <p className="text-indigo-200 text-xl font-bold">Vous n’avez pas accès à l’onglet factures.</p>
                                    </div>
                                    <div className="max-w-[300px] mx-auto border-[10px] border-white/20 rounded-[3.5rem] shadow-2xl overflow-hidden bg-white relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                        <Screenshot src={`${IMG_MOBILE_BASE}page%20accueil%20appli%20mobile%20-%20first.png`} alt="page accueil offre First" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION F */}
                    <div id="section-f" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden w-full">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="text-myu-teal font-black">f)</span> envoyer un justificatif à son Expert-Comptable
                            </h2>
                            
                            <div className="space-y-16">
                                <InteractiveNote type="info" title="Important">
                                    ❐ Cette fonctionnalité est valable sur l’ensemble des offres MyU Gestion Financière y compris freemium. La seule différence est que vous n’aurez pas accès à l’onglet mes factures, situés dans le cadran rouge, avec l’offre Freemium.
                                </InteractiveNote>

                                <div className="space-y-16 text-center">
                                    <div className="space-y-8">
                                        <p className="text-2xl font-black text-gray-900">1. Sur l’écran principal de votre application mobile, cliquez en bas de l’écran sur le bouton <strong>Envoyer</strong></p>
                                        <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                            <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20envoyer%20un%20justificatif%20%c3%a0%20son%20expert%20comptable.png`} alt="envoyer un justificatif à son Expert-Comptable" />
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <p className="text-xl font-bold text-gray-700">2. Il vous est proposé soit de prendre une photo, soit d'importer une image depuis votre téléphone ou encore d'importer un document</p>
                                        <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                            <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20onvoi%20documents%20appli%20mobile.png`} alt="envoi documents application mobile" />
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 space-y-12">
                                        <div className="space-y-6">
                                            <p className="text-xl font-bold text-gray-900">3. Une fois votre document téléchargé, sélectionnez le type de document : note de frais, facture d’achat, facture de vente</p>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20s%c3%a9lectionner%20type%20de%20documents%20-appli%20mobile.png`} alt="sélection type de document" />
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <p className="text-xl font-bold text-gray-900">4. Vous avez la possibilité de pouvoir renommer votre document avant de l’envoyer à votre Expert-Comptable</p>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20renommer%20document%20%c3%a0%20envoyer%20appli%20mobile.png`} alt="renommer document à envoyer" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-myu-teal p-12 rounded-[3rem] text-center shadow-2xl w-full space-y-8">
                                        <p className="text-3xl font-black text-gray-900 italic">5. Votre document atterrit dans votre liste de justificatifs, au sein du bouton justificatifs en bas de votre écran.</p>
                                        <div className="max-w-md mx-auto border-[12px] border-slate-900/10 rounded-[3.5rem] overflow-hidden shadow-2xl ring-4 ring-white/20 relative">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-900/10 rounded-b-2xl z-20"></div>
                                            <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20liste%20justificatifs%20-%20appli%20mobile.png`} alt="liste justificatifs" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION G */}
                    <div id="section-g" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden w-full">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="text-myu-teal font-black">g)</span> créer un client
                            </h2>
                            
                            <div className="space-y-16 w-full text-center">
                                <div className="space-y-6">
                                    <p className="text-2xl font-black text-gray-900">
                                        ❐ Depuis votre page d’accueil, cliquez sur le bouton <strong>créer un client</strong>
                                    </p>
                                    <div className="max-w-md mx-auto">
                                        <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20envoyer%20un%20justificatif%20%c3%a0%20son%20expert%20comptable%20(3).png`} alt="créer un client" />
                                    </div>
                                </div>
                                
                                <div className="space-y-16">
                                    <div className="bg-slate-50 p-10 rounded-[3rem] border border-gray-200 text-center space-y-8">
                                        <h3 className="text-3xl font-black text-myu-teal italic">Client Particulier</h3>
                                        <p className="text-xl font-bold text-gray-900">Pour créer un client particulier, renseignez les informations personnelles de votre client : civilité, email, téléphone, adresse, pays.</p>
                                        <p className="italic text-gray-500 font-medium">Vous avez la possibilité d’ajouter une note interne et de définir une adresse de livraison différente si vous le souhaitez.</p>
                                        <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                            <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20cr%c3%a9er%20un%20client%20particulier%20appli%20mobile.png`} alt="créer un client particulier" />
                                        </div>
                                        <p className="font-black text-2xl">Cliquez ensuite sur le bouton “créer un client”</p>
                                    </div>

                                    <div className="bg-slate-900 text-white p-10 rounded-[3rem] border border-slate-700 text-center space-y-8">
                                        <h3 className="text-3xl font-black text-myu-yellow italic">Client Professionnel</h3>
                                        <p className="text-xl font-bold">Pour créer un client professionnel, complétez la raison sociale, le numéro de SIRET, le numéro de TVA, l’email de votre client, le numéro de téléphone et l'adresse.</p>
                                        <div className="max-w-[300px] mx-auto border-[10px] border-slate-700 rounded-[3.5rem] shadow-xl overflow-hidden bg-white relative">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                            <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20cr%c3%a9er%20un%20client%20professionnel%20appli%20mobile.png`} alt="créer un client professionnel" />
                                        </div>
                                        <div className="bg-white/10 p-8 rounded-3xl border border-white/10 max-w-md mx-auto">
                                            <p className="font-black text-xl mb-6 italic text-myu-yellow">En tapant les premières lettres de la raison sociale, vous pourrez retrouver votre client (recherche effectuée parmi vos clients existants et la base SIRENE)</p>
                                            <Screenshot src={`${IMG_MOBILE_BASE}liste%20recherche%20client%20professionnel%20-%20appli%20mobile.png`} alt="liste recherche client professionnel" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION H */}
                    <div id="section-h" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden w-full">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="text-myu-teal font-black">h)</span> créer un produit
                            </h2>
                            
                            <div className="space-y-16 w-full text-center">
                                <div className="space-y-6">
                                    <p className="text-2xl font-black text-gray-900">
                                        ❐ Pour créer un produit, cliquez sur le bouton <strong>factures</strong> en bas à gauche de votre écran.
                                    </p>
                                    <div className="max-w-md mx-auto border-[12px] border-slate-900/10 rounded-[3.5rem] overflow-hidden shadow-2xl ring-4 ring-slate-50 relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-900/20 rounded-b-2xl z-20"></div>
                                        <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20envoyer%20un%20justificatif%20%c3%a0%20son%20expert%20comptable%20(3).png`} alt="clic créer un produit" />
                                    </div>
                                </div>

                                <div className="bg-myu-light/20 p-10 rounded-[3rem] border border-myu-light shadow-inner w-full text-center space-y-12">
                                    <div className="space-y-6">
                                        <p className="text-xl font-bold text-gray-900">Un onglet produits apparaît en haut à droite de votre écran. Cliquez dessus pour faire apparaître votre liste de produits, qui est vide, lors de la création de votre premier produit.</p>
                                        <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white relative">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                            <Screenshot src={`${IMG_MOBILE_BASE}liste%20de%20produit%20vide%20-%20appli.png`} alt="liste produit vide" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-12">
                                        <p className="text-2xl font-black text-gray-900 italic">Pour créer un nouveau produit, vous aurez la possibilité soit de créer un bien ou un service.</p>
                                        
                                        <div className="space-y-12">
                                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm max-w-md mx-auto space-y-6">
                                                <h4 className="text-2xl font-black mb-6 text-myu-teal underline decoration-myu-teal/20 underline-offset-4 font-black">Créer un bien</h4>
                                                <p className="text-lg font-medium text-gray-700">Sélectionnez le bouton “créer un produit bien”. Renseignez le libellé du produit, son prix unitaire HT, la valeur de l’unité, le taux de TVA correspondant et une description. Puis cliquez sur le bouton “créer le produit”.</p>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20creer%20un%20produit%20(bien).png`} alt="écran créer un produit (bien)" />
                                            </div>
                                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm max-w-md mx-auto space-y-6">
                                                <h4 className="text-2xl font-black mb-6 text-myu-purple underline decoration-myu-purple/20 underline-offset-4 font-black">Créer un service</h4>
                                                <p className="text-lg font-medium text-gray-700">Pour créer un service, même procédé : renseignez le libellé de votre service, le prix unitaire HT, la valeur de l’unité, le taux de TVA correspondant et une description au besoin. Cliquez sur le bouton “créer le produit” une fois terminé.</p>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20cr%c3%a9er%20un%20produit%20service.png`} alt="écran créer un produit (service)" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-16 pt-12 w-full text-center">
                                    <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 w-full space-y-12">
                                        <div className="space-y-6">
                                            <p className="text-3xl font-black text-gray-900 italic">Une fois votre produit créé, vous pouvez le retrouver dans votre liste de produits.</p>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20liste%20de%20produits.png`} alt="consulter liste produits" />
                                            </div>
                                        </div>
                                        <div className="space-y-8">
                                            <p className="text-xl font-bold text-gray-700">Si vous souhaitez modifier un produit, vous pouvez accéder à son détail en cliquant sur le bouton <span className="text-myu-teal italic font-black">voir plus d’informations sur le produit</span>.</p>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20d%c3%a9tail%20produit%20.png`} alt="détail produit" />
                                            </div>
                                            <p className="text-xl font-bold text-gray-900 italic">Si vous souhaitez modifier le détail d’un produit, cliquez sur les <strong>…</strong></p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}modification%20detail%20produit.png`} alt="modification détail produit" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION I */}
                    <div id="section-i" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden w-full">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="text-myu-teal font-black">i)</span> créer un devis
                            </h2>
                            
                            <div className="space-y-16 w-full text-center">
                                <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl relative w-full space-y-12 text-left">
                                    <p className="text-2xl font-bold mb-10">
                                        ❐ Pour créer un devis, vous devez vous rendre en bas de votre écran sur le bouton <strong>Ventes</strong>.
                                    </p>
                                    <p className="text-xl italic text-slate-300">En fonction de l’offre choisie, votre affichage diffère.</p>
                                    
                                    <div className="space-y-12">
                                        <div className="space-y-6 text-center">
                                            <h4 className="text-2xl font-black text-myu-teal">Si vous avez souscrit à l’offre MyU Gestion First, notre offre freemium, votre écran s’affiche ainsi sans le compte pro. Sélectionnez l’onglet Devis</h4>
                                            <p className="text-indigo-200">Affichage de l’appli avec MyU Gestion First</p>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-700 rounded-[3.5rem] shadow-xl overflow-hidden bg-white relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20devis%20vide%20sans%20compte%20pro.png`} alt="devis vide sans compte pro" />
                                            </div>
                                        </div>
                                        <div className="space-y-6 text-center">
                                            <h4 className="text-2xl font-black text-myu-teal">Affichage de l’appli à partir de MyU Gestion Start</h4>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-700 rounded-[3.5rem] shadow-xl overflow-hidden bg-white relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20devis%20vide.png`} alt="écran devis vide" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-16 pt-8 w-full">
                                    <div className="space-y-12">
                                        <div className="space-y-8">
                                            <p className="text-2xl font-black text-gray-900">Puis, sélectionnez directement votre client</p>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran-%20%20nouveau%20devis%20.png`} alt="écran - nouveau devis" />
                                            </div>
                                            <p className="text-xl font-bold text-gray-700 max-w-2xl mx-auto">Commencez par taper la première lettre de votre client. Reprenons l’exemple précédent de l’entreprise Apolis.</p>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white mb-10 ring-4 ring-slate-100 relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20nouveau%20devis%20recherche%20client.png`} alt="écran nouveau devis - recherche client" />
                                            </div>
                                            <InteractiveNote type="info" title="Info recherche">
                                                ℹ️ La croix sert à réinitialiser le champ de recherche et à afficher la liste entière des clients à nouveau.
                                            </InteractiveNote>
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-myu-teal/30">
                                        <ArrowDown size={32} />
                                    </div>

                                    <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 space-y-12">
                                        <div className="space-y-8">
                                            <p className="text-xl font-bold text-gray-900">Une fois que vous avez sélectionné votre client, les informations de celui-ci s’affichent sur la page suivante. Cliquez sur le bouton <strong>“continuer”</strong> pour poursuivre la création de votre devis.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20nouveau%20devis%20infos%20du%20client.png`} alt="nouveau devis infos du client" />
                                            </div>
                                            <p className="text-lg font-bold text-gray-700 italic border-l-4 border-myu-teal pl-6 text-left">Si vous devez renseigner une adresse de livraison différente, cochez la case correspondante.</p>
                                            <p className="text-lg font-medium text-gray-700">Votre écran s’affiche ainsi, une fois cette case cochée. Renseignez les informations demandées, puis cliquez sur le bouton <strong>“continuer”</strong> pour poursuivre la création de votre devis.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20nouveau%20devis%20nouvelle%20adresse%20de%20livraison.png`} alt="nouveau devis nouvelle adresse de livraison" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-16 w-full text-left">
                                        <p className="text-2xl font-bold text-myu-teal italic">Vous arrivez à l’étape 2 de la création de votre devis.</p>
                                        <p className="text-xl font-medium text-gray-700">Complétez les informations demandées à savoir : la date d’émission du devis et sa date d’échéance, le délai de règlement et l’article/les articles relié(s) à votre devis.</p>
                                        
                                        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-gray-200 w-full space-y-12">
                                            <p className="font-black text-2xl text-gray-900">
                                                en cliquant sur le bouton <strong>“ajouter une ligne”</strong>, une nouvelle fenêtre apparaît
                                            </p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20nouveau%20devis%20fenetre%20article.png`} alt="nouveau devis fenêtre article" />
                                            </div>
                                            <p className="text-xl font-bold text-gray-700 italic border-l-4 border-myu-teal pl-6">Si vous choisissez d’ajouter un article biens & services, la fenêtre suivante apparaît :</p>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20ajouter%20biens%20et%20services%20facture%20appli.png`} alt="ajouter un article biens et services" />
                                            </div>
                                        </div>

                                        <div className="flex justify-center text-myu-teal/30">
                                            <ArrowDown size={32} />
                                        </div>

                                        <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm space-y-12">
                                            <div className="space-y-6">
                                                <p className="text-2xl font-black text-gray-900">Si à l'inverse, vous souhaitez ajouter un article avec une désignation libre, la fenêtre suivante apparaît :</p>
                                                <div className="max-w-md mx-auto">
                                                    <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20ajouter%20un%20article%20designation%20libre%20appli.png`} alt="ajouter un article désignation libre" />
                                                </div>
                                                <p className="text-2xl font-black text-gray-900">Si vous souhaitez plutôt ajouter une description, la fenêtre suivante apparaît :</p>
                                                <div className="max-w-md mx-auto">
                                                    <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20nouveau%20devis%20ajouter%20une%20description.png`} alt="ajouter une description" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-center text-myu-teal/30">
                                            <ArrowDown size={32} />
                                        </div>

                                        <div className="bg-myu-teal/5 p-12 rounded-[3.5rem] border border-myu-teal/20 space-y-12 text-center w-full">
                                            <p className="text-2xl font-black text-gray-900">Lorsque vous ajoutez un article, une fenêtre avec le détail de l’article apparaît; Complétez les options du produit : unité de mesure, quantité, valeur remise si besoin.</p>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20ajouter%20un%20article%20d%c3%a9tail.png`} alt="ajouter un article détail" />
                                            </div>
                                            <p className="text-3xl font-black text-myu-teal mt-12">Cliquez sur le bouton “valider” pour pouvoir enregistrer votre saisie.</p>
                                            <p className="text-xl font-bold text-gray-700">Vous pouvez sélectionner plusieurs articles à ajouter à votre devis.</p>
                                            <div className="max-w-[300px] mx-auto border-[10px] border-slate-900 rounded-[3.5rem] shadow-xl overflow-hidden bg-white ring-4 ring-slate-100 relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20ajouter%20un%20article%20multiple%20facture%20appli.png`} alt="ajouter articles multiples" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-[3.5rem] border border-myu-teal shadow-2xl p-12 space-y-16 w-full text-center">
                                        <div className="space-y-12">
                                            <p className="text-2xl font-black text-gray-900">Par ailleurs, vous avez la possibilité d’appliquer une remise globale à votre devis. Dans ce cas, cochez la case correspondante.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20compl%c3%a9ter%20le%20devis.png`} alt="compléter le devis" />
                                            </div>
                                            <p className="text-2xl font-black text-gray-900">En cochant cette case, la fenêtre s’élargit. Complétez le montant de votre remise et l’unité correspondante.</p>
                                            <p className="text-xl font-bold text-gray-700">N’oubliez pas de cliquer sur le bouton <strong>“enregistrer le devis”</strong>, pour enregistrer votre saisie.</p>
                                            <p className="text-xl font-bold text-myu-teal italic">Vous pouvez l’enregistrer comme brouillon, si vous souhaitez le finaliser plus tard.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20nouveau%20devis%20remise%20globale.png`} alt="nouveau devis - remise globale" />
                                            </div>
                                            
                                            <div className="flex justify-center text-myu-teal/30">
                                                <ArrowDown size={32} />
                                            </div>

                                            <p className="text-2xl font-black text-gray-900">Votre article est désormais ajouté et apparaît dans votre fenêtre. Vérifiez bien l’ensemble des informations saisies puis cliquez sur le bouton <strong>“Créer le devis”</strong>.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20articles%20ajout%c3%a9s%20nouveau%20devis.png`} alt="articles ajoutés - création devis" />
                                            </div>
                                        </div>

                                        <div className="bg-slate-900 text-white p-16 rounded-[4rem] text-center shadow-2xl mt-16 w-full space-y-10">
                                            <p className="text-3xl font-black italic">Dès que vous cliquez sur créer le devis, vous arrivez sur une page d’aperçu de votre devis.</p>
                                            <p className="text-2xl font-bold text-myu-teal">Vous pouvez choisir d’envoyer votre devis ou de le télécharger au format PDF.</p>
                                            <div className="max-w-[300px] mx-auto border-[12px] border-white/10 rounded-[4rem] shadow-2xl overflow-hidden relative">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20envoi%20devis%20.png`} alt="écran envoi devis" />
                                            </div>
                                            <div className="inline-flex items-center gap-4 bg-emerald-500 text-white px-10 py-4 rounded-full font-black text-2xl shadow-xl">
                                                <CheckCircle2 size={32}/> Devis créé avec succès
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION J */}
                    <div id="section-j" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden w-full">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="text-myu-teal font-black">j)</span> créer une facture depuis l’application mobile
                            </h2>
                            
                            <div className="space-y-16 w-full text-center">
                                <div className="bg-myu-teal text-gray-900 p-12 rounded-[3.5rem] shadow-2xl w-full space-y-10 text-left">
                                    <p className="text-3xl font-black mb-12">
                                        ❐ Depuis votre page d’accueil dans le menu actions rapides, cliquez sur le bouton <strong>créer une facture</strong>.
                                    </p>
                                    <div className="max-w-[300px] mx-auto border-[10px] border-slate-900/50 rounded-[3.5rem] shadow-2xl overflow-hidden relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900/50 rounded-b-2xl z-20"></div>
                                        <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20cr%c3%a9er%20une%20facture%20appli%20.png`} alt="écran créer une facture - appli" />
                                    </div>
                                </div>

                                <div className="space-y-16 w-full">
                                    <p className="text-2xl font-black text-gray-900 border-l-8 border-myu-teal pl-8 py-2 max-w-xl mx-auto">Par défaut, votre liste de factures est vide, vous allez pouvoir créer votre première facture. Cliquez sur le bouton <span className="text-myu-teal italic font-black">créer une facture</span></p>
                                    <div className="max-w-md mx-auto">
                                        <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20cr%c3%a9er%20premiere%20facture%20appli.png`} alt="écran créer une première facture" />
                                    </div>

                                    <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-200 w-full space-y-12 text-left">
                                        <h3 className="text-3xl font-black text-gray-900 italic">Commencez par rechercher votre client dans la barre de recherche pour le sélectionner.</h3>
                                        <div className="space-y-12">
                                            <p className="text-xl font-bold text-gray-700 italic border-l-4 border-myu-teal pl-6">Si vous ne l’avez pas créé au préalable, reportez-vous à la section créer un client depuis l’application mobile.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20recherche%20client%20cr%c3%a9er%20une%20facture%20appli.png`} alt="recherche client pour facture" />
                                            </div>
                                            <p className="text-xl font-bold text-gray-900">En tapant la première lettre du nom de l'entreprise recherchée, celle-ci s’affiche. Ici, nous allons prendre l’exemple de l’entreprise Apolis, en tapant la lettre A.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20recherche%20client%20cr%c3%a9er%20une%20facture%20appli%20(1).png`} alt="recherche client" />
                                            </div>
                                            <div className="space-y-6">
                                                <p className="text-xl font-bold text-gray-900">Les informations de votre client s’affichent sur votre page</p>
                                                <p className="text-lg font-bold text-gray-700">Si vous souhaitez définir une adresse de livraison différente de votre adresse de facturation, cliquez sur l’option <strong>définir une adresse de livraison différente.</strong></p>
                                                <p className="text-lg font-medium text-gray-500 italic border-l-4 border-myu-teal pl-6">Si cette option est activée, une nouvelle zone de saisie apparaît.</p>
                                                <p className="text-lg font-black text-gray-900">Cliquez sur le bouton <strong>“Continuer”</strong> pour accéder à l’étape suivante pour créer votre facture.</p>
                                                <div className="max-w-md mx-auto">
                                                    <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20information%20client%20facture%20appli.png`} alt="informations client" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl space-y-12 w-full text-center">
                                        <h3 className="text-3xl font-black text-myu-teal italic text-left">Renseignez la date d’émission et la date d’échéance puis sélectionnez les délais de règlement</h3>
                                        <div className="space-y-12">
                                            <p className="text-2xl font-black text-left">Puis ajoutez un article à votre facture et cliquez sur le bouton <strong>“Enregistrer la facture.”</strong></p>
                                            <p className="text-xl font-bold text-indigo-200 text-left italic">Une nouvelle page s’ouvre avec soit un onglet biens et services ou désignation libre</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-remplir%20sa%20facture%20appli%20mobile.png`} alt="remplir sa facture" />
                                            </div>
                                            <p className="text-xl font-black italic text-left">Si vous choisissez d’ajouter un article via l’onglet <strong>“biens et services”</strong>, la liste de tous vos derniers services et produits apparaît sur cette page avec leurs tarifs.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20ajouter%20biens%20et%20services%20facture%20appli.png`} alt="ajouter biens et service" />
                                            </div>
                                            <p className="text-lg italic text-slate-400 border-l-4 border-myu-teal pl-6 text-left">Depuis cette liste, vous pourrez sélectionner votre article et l’ajouter directement à votre facture.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20ajouter%20un%20article%20facture%20appli.png`} alt="ajouter un article" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white border-2 border-dashed border-gray-300 p-12 rounded-[3.5rem] space-y-16 w-full text-center">
                                        <div className="space-y-12 text-left">
                                            <p className="text-2xl font-black text-gray-900 underline underline-offset-8 decoration-myu-teal">Vous pouvez également sélectionner plusieurs articles en même temps et les ajouter directement à votre facture.</p>
                                            <p className="text-lg italic text-gray-500 font-medium">Il vous est proposé d’ajouter les articles sélectionnés en question pour poursuivre la création de votre facture.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20ajouter%20un%20article%20multiple%20facture%20appli%20(1).png`} alt="ajouter un article multiple" />
                                            </div>
                                            <p className="text-xl font-bold text-gray-900">Vos articles sont ajoutés à votre facture. Vérifiez bien l’ensemble des informations saisies puis cliquez sur le bouton <strong>“Créer la facture”</strong>.</p>
                                            <p className="text-lg italic text-gray-500 font-medium">Si vous souhaitez revenir plus tard sur la création de votre facture, cliquez sur le bouton <strong>“Enregistrer comme brouillon”</strong>.</p>
                                            <div className="max-w-md mx-auto">
                                                <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20articles%20ajout%c3%a9s%20facture%20appli.png`} alt="article ajoutés" />
                                            </div>
                                            
                                            <div className="flex justify-center text-myu-teal/30">
                                                <ArrowDown size={32} />
                                            </div>

                                            <div className="space-y-12">
                                                <p className="text-2xl font-black text-gray-900">Si vous cliquez sur vos articles, vous avez la possibilité de les modifier ou de les supprimer avant de valider définitivement votre facture.</p>
                                                <div className="max-w-md mx-auto">
                                                    <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20modifier%20article%20facture%20appli.png`} alt="modifier article" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION K */}
                    <div id="section-k" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="text-myu-teal font-black">k)</span> gérer les demandes
                            </h2>
                            <div className="space-y-8">
                                <p className="text-xl font-bold text-gray-700">
                                    Retrouvez toutes les demandes de votre Expert-Comptable directement dans l'onglet notifications. Vous pouvez y répondre en joignant les documents demandés.
                                </p>
                                <div className="max-w-md mx-auto">
                                    <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20demandes%20appli.png`} alt="gérer les demandes" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION L */}
                    <div id="section-l" className="scroll-mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
                            <h2 className="text-3xl font-display font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="text-myu-teal font-black">l)</span> page profil & société
                            </h2>
                            <div className="space-y-8">
                                <p className="text-xl font-bold text-gray-700">
                                    Accédez à vos paramètres personnels et aux informations de votre société depuis le menu profil. Vous pouvez y modifier vos préférences et consulter vos abonnements.
                                </p>
                                <div className="max-w-md mx-auto">
                                    <Screenshot src={`${IMG_MOBILE_BASE}%c3%a9cran%20-%20profil%20appli.png`} alt="page profil" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <PageQuiz pageId="appli-mobile" title="Quiz : Application Mobile" />
                    </div>
                </div>
            </div>
        </div>
    );
};