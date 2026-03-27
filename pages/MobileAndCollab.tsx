import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Smartphone, 
  ArrowLeft, 
  Info,
  FileText,
  ExternalLink,
  Layout,
  CreditCard,
  FolderOpen,
  MessageSquare,
  ChevronDown,
  Check,
  CheckCircle2,
  Trophy
} from 'lucide-react';
import { Screenshot } from '../components/ui/Screenshot';
import { PageQuiz } from '../components/PageQuiz';

const IMG_BASE = "https://www2.myunisoft.fr/outils/o/MyUGFi/section_application_mobile/";

const chapters = [
    { id: 'section-a', title: 'A. Télécharger l’appli' },
    { id: 'section-b', title: 'B. Avantages' },
    { id: 'section-c', title: 'C. Connexion' },
    { id: 'section-d', title: 'D. Mot de passe oublié' },
    { id: 'section-e', title: 'E. Page d’accueil' },
    { id: 'section-f', title: 'F. Envoyer justificatif' },
    { id: 'section-g', title: 'G. Demandes Expert-Comptable' },
    { id: 'section-h', title: 'H. Créer un client' },
    { id: 'section-i', title: 'I. Créer un produit' },
    { id: 'section-j', title: 'J. Créer un devis' },
    { id: 'section-k', title: 'K. Créer une facture' },
    { id: 'section-collab', title: 'L. Espace collaboratif' },
    { id: 'quiz-section', title: 'Auto évaluez vous !' },
];

export const MobileAndCollab = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeChapter, setActiveChapter] = useState<string | null>(null);
    const [readChapters, setReadChapters] = useState<Set<string>>(new Set([]));
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            setActiveChapter(id);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const toggleChapter = (id: string) => {
        setActiveChapter(prev => {
            if (prev === id) return null;
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
            return id;
        });
    };

    const scrollToChapter = (id: string) => {
        setActiveChapter(id);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const offset = 100;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    const handleMarkAsRead = (id: string) => {
        setReadChapters(prev => {
            const newSet = new Set(prev);
            newSet.add(id);
            
            // Show toast
            const newProgress = Math.round(((newSet.size) / 12) * 100);
            setToastMessage(`Chapitre validé ! Progression : ${newProgress}%`);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);

            return newSet;
        });
        
        const currentIndex = chapters.findIndex(c => c.id === id);
        if (currentIndex < chapters.length - 1 && chapters[currentIndex + 1].id !== 'quiz-section') {
            scrollToChapter(chapters[currentIndex + 1].id);
        } else {
            setActiveChapter(null);
            setTimeout(() => {
                const element = document.getElementById('quiz-section');
                if (element) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    };

    const handleStoreClick = (e: React.MouseEvent) => {
        e.preventDefault();
        alert('Bientôt disponible sur les stores !');
    };

    const progressPercentage = Math.round((readChapters.size / 12) * 100);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
            <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:border-myu-teal cursor-pointer"
            >
                <ArrowLeft size={16} /> Retour
            </button>

            <div className="mb-8 max-w-7xl">
                <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-6 tracking-tight w-full max-w-[1200px]">
                    Application mobile et espace collaboratif
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    Découvrez comment utiliser l'application mobile MyUnisoft et l'espace collaboratif pour gérer votre activité.
                </p>
            </div>

            {/* PROGRESS BAR */}
            <div className="mb-12 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-myu-teal/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-4">
                         <div>
                             <h3 className="text-lg font-bold text-gray-900 mb-1">Votre progression</h3>
                             <p className="text-sm text-gray-500">{readChapters.size} sur 12 chapitres validés</p>
                         </div>
                         <div className="text-3xl font-black text-myu-teal">{progressPercentage}%</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-myu-teal to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(9,167,167,0.3)]"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start relative">
                <div className="flex-1 w-full min-w-0 space-y-6">
                    {/* Sticky Chapter Header */}
                    {activeChapter && (
                        <div className="sticky top-24 z-30 bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl p-4 flex items-center gap-4 transition-all animate-fade-in-down mb-6">
                            <div className="w-10 h-10 rounded-lg bg-myu-teal text-white flex items-center justify-center shrink-0 shadow-sm">
                                {React.createElement(Smartphone)}
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-myu-teal">Chapitre en cours</div>
                                <h3 className="font-bold text-gray-900 leading-tight">{chapters.find(c => c.id === activeChapter)?.title}</h3>
                            </div>
                        </div>
                    )}

                    {/* SECTION A */}
                <div 
                            key="section-a" 
                            id="section-a"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-a' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-a');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-a') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-a') ? <Check size={28}/> : 'A'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">A. Télécharger l’application mobile MyUnisoft</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-a' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-a' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="mb-12"><Screenshot src={`${IMG_BASE}appli%20mobile.png`} alt="application mobile" /></div>
                        
                        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
                            <a href="#" onClick={handleStoreClick} className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg">
                                <Smartphone size={24} />
                                <div className="text-left">
                                    <p className="text-[10px] uppercase font-bold opacity-70 leading-none mb-1">Disponible sur</p>
                                    <p className="text-lg font-black leading-none">App Store</p>
                                </div>
                            </a>
                            <a href="#" onClick={handleStoreClick} className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg">
                                <Smartphone size={24} />
                                <div className="text-left">
                                    <p className="text-[10px] uppercase font-bold opacity-70 leading-none mb-1">Disponible sur</p>
                                    <p className="text-lg font-black leading-none">Google Play</p>
                                </div>
                            </a>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>L’ application est disponible en iOs, Android et responsive sur ordi, tablettes, portables</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}appli%20mobile%202.png`} alt="application mobile 2" />
                        
                        <div className="pt-8 border-t border-gray-100 text-center">
                            <a 
                                href="https://www2.myunisoft.fr/outils/o/MyUGFi/section_application_mobile/Fiche-pratique-application-mobile-1225.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 text-myu-teal font-black text-xl hover:underline group bg-myu-teal/5 p-6 rounded-3xl border border-myu-teal/10"
                            >
                                <FileText size={32} className="text-myu-teal" />
                                <span>Fiche pratique application mobile</span>
                                <ExternalLink size={20} className="text-gray-400" />
                            </a>
                        </div>
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-a')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-a')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-a') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION B */}
                <div 
                            key="section-b" 
                            id="section-b"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-b' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-b');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-b') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-b') ? <Check size={28}/> : 'B'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">B. Les avantages de MyU Application mobile</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-b' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-b' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vision à 360° de votre activité : suivez vos ventes, règlements et dépenses en temps réel</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Envoi instantané de documents : transmettez vos factures, justificatifs et documents depuis votre smartphone</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Demandes en temps réel : recevez et traitez les requêtes de votre Expert-Comptable sans attendre</span>
                        </div>
                        
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Sécurité garantie : authentification renforcée et synchronisation avec votre espace MyU Gestion</span>
                        </div>
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-b')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-b')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-b') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION C */}
                <div 
                            key="section-c" 
                            id="section-c"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-c' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-c');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-c') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-c') ? <Check size={28}/> : 'C'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">C. Se connecter à l’application mobile MyU Gestion Financière</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-c' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-c' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Voici à quoi ressemble l’écran de l’application</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20connexion%20MyU%20Gestion%20Fi.png`} alt="connexion application mobile" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Lorsque vous vous connectez sur l’application mobile, vous arrivez sur cette fenêtre de connexion</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20page%20de%20connexion%20%c3%a9cran%20mobile.png`} alt="page de connexion écran mobile" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Renseignez vos identifiants de connexion habituels puis cliquez sur le bouton <strong>se connecter</strong></span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran-%20login%20appli%20mobile.png`} alt="login application mobile" />
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-c')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-c')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-c') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION D */}
                <div 
                            key="section-d" 
                            id="section-d"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-d' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-d');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-d') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-d') ? <Check size={28}/> : 'D'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">D. Générer un nouveau de mot passe</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-d' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-d' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Attention, si vous avez oublié votre mot de passe et que vous effectuez trois tentatives successives de mots de passe erronés, vous devrez réinitialiser votre mot de passe en cliquant sur le bouton <strong>“mot de passe oublié”</strong>.</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vous atterrissez sur cette nouvelle page, renseignez votre adresse email, puis cliquez sur le bouton <strong>Envoyer le nouveau lien</strong></span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-mot%20de%20passe%20oubli%c3%a9%20appli%20mobile.png`} alt="mot de passe oublié" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vous pourrez alors générer un nouveau mot de passe</span>
                        </div>
                        <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/Start/PA/nouveau%20mot%20de%20passe%20(2).png" alt="nouveau mot de passe" />
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-d')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-d')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-d') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION E */}
                <div 
                            key="section-e" 
                            id="section-e"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-e' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-e');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-e') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-e') ? <Check size={28}/> : 'E'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">E. Découvrir la page d’accueil - application mobile</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-e' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-e' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Une fois connecté sur l’appli, vous arrivez sur cette page si vous disposez de l’offre SCI, Start, Business, Performance</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>En haut de votre écran, apparaissent un bandeau avec vos notifications en cours (si vous en avez)</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vous disposez d’un accès rapide à certaines fonctionnalités comme : créer une facture, créer un client et envoyer un document.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20envoyer%20un%20justificatif%20%c3%a0%20son%20expert%20comptable%20(3).png`} alt="envoyer justificatif Expert-Comptable" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span><strong>Si vous disposez de la gamme First:</strong> Vous n’avez pas accès à l’onglet factures.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}page%20accueil%20appli%20mobile%20-%20first.png`} alt="page accueil offre First" />
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-e')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-e')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-e') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION F */}
                <div 
                            key="section-f" 
                            id="section-f"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-f' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-f');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-f') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-f') ? <Check size={28}/> : 'F'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">F. Envoyer un justificatif à son Expert-Comptable</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-f' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-f' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Cette fonctionnalité est valable sur l’ensemble des offres MyU Gestion Financière y compris Start. La seule différence est que vous n’aurez pas accès à l’onglet <strong>Mes factures</strong>, situé dans le cadran rouge, avec l’offre Start.</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Sur l’écran principal de votre application mobile, cliquez en bas de l’écran sur le bouton <strong>Envoyer</strong></span>
                        </div>
                        <Screenshot src={`${IMG_BASE}envoyer%20un%20justificatif%20%c3%a0%20son%20expert%20V2.png`} alt="envoyer un justificatif à son Expert-Comptable V2" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Il vous est proposé soit de prendre une photo, soit d'importer une image depuis votre téléphone ou encore d'importer un document</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20envoi%20documents%20appli%20mobile%20(1).png`} alt="envoi documents application mobile (1)" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Une fois votre document téléchargé, sélectionnez le type de document : <strong>Note de frais</strong>, <strong>Facture d’achat</strong>, <strong>Facture de vente</strong></span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20s%c3%a9lectionner%20type%20de%20documents%20-appli%20mobile.png`} alt="sélection type de documents" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vous avez la possibilité de pouvoir renommer votre document avant de pouvoir l’envoyer à votre Expert-Comptable</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20renommer%20document%20%c3%a0%20envoyer%20appli%20mobile.png`} alt="renommer document à envoyer" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Votre document atterrit sur votre liste de justificatifs, au sein du bouton justificatifs en bas de votre écran</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20liste%20justificatifs%20-%20appli%20mobile.png`} alt="liste justificatifs" />
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-f')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-f')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-f') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION G */}
                <div 
                            key="section-g" 
                            id="section-g"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-g' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-g');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-g') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-g') ? <Check size={28}/> : 'G'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">G. Consulter les demandes de justificatifs de son Expert-Comptable</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-g' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-g' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 mb-8">
                            <p className="text-amber-900 font-bold">Visualisez les demandes de documents manquants directement depuis votre application.</p>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20envoyer%20un%20justificatif%20%c3%a0%20son%20expert%20comptable%20(2).png`} alt="demande Expert-Comptable" />
                        <p className="text-center font-bold text-gray-500">(en attente de la présentation application mobile par Astrid le 20/02)</p>
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-g')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-g')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-g') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION H */}
                <div 
                            key="section-h" 
                            id="section-h"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-h' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-h');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-h') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-h') ? <Check size={28}/> : 'H'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">H. Créer un client</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-h' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-h' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Depuis votre page d’accueil, cliquez sur le bouton <strong>créer un client</strong></span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20envoyer%20un%20justificatif%20%c3%a0%20son%20expert%20comptable%20(1).png`} alt="créer un client" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Pour créer un client <strong>particulier</strong>, renseignez les informations personnelles de votre client : civilité, email, téléphone, adresse, pays.</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vous avez la possibilité d’ajouter une note interne et de définir une adresse de livraison différente si vous le souhaitez.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20cr%c3%a9er%20un%20client%20particulier%20appli%20mobile.png`} alt="créer un client particulier application mobile" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Pour créer un client <strong>professionnel</strong>, complétez la raison sociale, numéro de SIRET, numéro de TVA, l’email de votre client, numéro de téléphone et adresse.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20cr%c3%a9er%20un%20client%20professionnel%20appli%20mobile.png`} alt="créer un client professionnel" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>En tapant les premières lettres de la raison sociale, vous pourrez retrouver votre client (recherche effectuée parmi vos clients existants et la base SIRENE)</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}liste%20recherche%20client%20professionnel%20-%20appli%20mobile.png`} alt="liste recherche client professionnel" />
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-h')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-h')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-h') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION I */}
                <div 
                            key="section-i" 
                            id="section-i"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-i' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-i');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-i') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-i') ? <Check size={28}/> : 'I'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">I. Créer un produit</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-i' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-i' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Pour créer un produit, cliquez sur le bouton <strong>factures</strong> en bas à gauche de votre écran.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20envoyer%20un%20justificatif%20%c3%a0%20son%20expert%20comptable%20(3).png`} alt="clic créer un produit" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Un onglet produits apparaît en haut à droite de votre écran. Cliquez dessus pour faire apparaître votre liste de produits, qui est vide, lors de la création de votre premier produit.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}liste%20de%20produit%20vide%20-%20appli.png`} alt="liste produit vide" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Pour créer un nouveau produit, vous aurez la possibilité soit de créer un bien ou service.</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900">Créer un bien</h3>
                                <p className="text-gray-600">Sélectionnez le bouton <strong>“créer un produit bien”</strong> . Renseignez le libellé du produit, son prix unitaire HT, la valeur de l’unité, le taux de TVA correspondant et une description. Puis cliquez sur le bouton <strong>“créer le produit”</strong>.</p>
                                <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20creer%20un%20produit%20(bien).png`} alt="créer bien" />
                            </div>
                            <div className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900">Créer un service</h3>
                                <p className="text-gray-600">Pour créer un service, même procédé : renseignez le libellé de votre service, le prix unitaire HT, la valeur de l’unité, le taux de TVA correspondant et une description au besoin. Cliquez sur le bouton <strong>“créer le produit”</strong> une fois terminé.</p>
                                <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20cr%c3%a9er%20un%20produit%20service.png`} alt="créer service" />
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Une fois votre produit créé, vous pouvez le retrouvez dans votre liste de produits.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20liste%20de%20produits.png`} alt="consulter liste produits" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Si vous souhaitez modifier un produit, vous pouvez accéder à son détail en cliquant sur le bouton <strong>voir plus d’informations sur le produit</strong>.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20d%c3%a9tail%20produit%20.png`} alt="détail produit" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Si vous souhaitez modifier le détail d’un produit, cliquez sur les <strong>…</strong></span>
                        </div>
                        <Screenshot src={`${IMG_BASE}modification%20detail%20produit.png`} alt="modification détail produit" />
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-i')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-i')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-i') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION J */}
                <div 
                            key="section-j" 
                            id="section-j"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-j' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-j');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-j') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-j') ? <Check size={28}/> : 'J'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">J. Créer un devis</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-j' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-j' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Pour créer un devis, vous devez vous rendre en bas de votre écran sur le bouton <strong>Ventes</strong>.</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>En fonction de l’offre choisie, votre affichage diffère.</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4 text-center">
                                <p className="font-bold text-gray-900">Affichage MyU Gestion First</p>
                                <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20devis%20vide%20sans%20compte%20pro.png`} alt="devis vide sans compte pro" />
                            </div>
                            <div className="space-y-4 text-center">
                                <p className="font-bold text-gray-900">Affichage MyU Gestion Start +</p>
                                <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20devis%20vide.png`} alt="écran devis vide" />
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Puis, sélectionnez directement votre client</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran-%20%20nouveau%20devis%20.png`} alt="écran - nouveau devis" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Commencez par taper la première lettre de votre client. Reprenons l’exemple précédent de l’entreprise Apolis.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20nouveau%20devis%20recherche%20client.png`} alt="écran nouveau devis - recherche client" />
                        
                        <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100 flex items-start gap-4">
                            <Info size={24} className="text-sky-600 shrink-0 mt-1" />
                            <p className="text-sky-900 font-bold">
                                La croix sert à réinitialiser le champ de recherche et à afficher la liste des clients entier à nouveau.
                            </p>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Une fois que vous avez sélectionné votre client, les informations de celui-ci s’affichent sur la page suivante. Cliquez sur le bouton <strong>“continuer”</strong> pour poursuivre la création de votre devis.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20nouveau%20devis%20infos%20du%20client.png`} alt="nouveau devis infos du client" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Si vous devez renseigner une adresse de livraison différente, cochez la case correspondante.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20nouveau%20devis%20nouvelle%20adresse%20de%20livraison.png`} alt="nouveau devis nouvelle adresse de livraison" />

                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vous arrivez à l’étape 2 de la création de votre devis. Complétez les informations demandées à savoir : la date d’émission du devis et sa date d’échéance, le délai de règlement et l’article/les articles relié(s) à votre devis.</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>En cliquant sur le bouton <strong>“ajouter une ligne”</strong>, une nouvelle fenêtre apparaît</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20nouveau%20devis%20fenetre%20article.png`} alt="nouveau devis fenêtre article" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Si vous choisissez d’ajouter un article biens & services , la fenêtre suivante apparaît</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20ajouter%20biens%20et%20services%20facture%20appli.png`} alt="ajouter un article biens et services" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="font-bold text-gray-900">Si à l’inverse, vous souhaitez ajouter un article avec une désignation libre, la fenêtre suivante apparaît</p>
                                <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20ajouter%20un%20article%20designation%20libre%20appli.png`} alt="ajouter un article désignation libre" />
                            </div>
                            <div className="space-y-4">
                                <p className="font-bold text-gray-900">Si vous souhaitez plutôt ajouter une description, la fenêtre suivante apparaît</p>
                                <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20nouveau%20devis%20ajouter%20une%20description.png`} alt="ajouter une description" />
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Lorsque vous ajoutez un article, une fenêtre avec le détail de l’article apparaît; Complétez les options du produit : unité de mesure, quantité, valeur remise si besoin. Cliquez sur le bouton “valider” pour pouvoir enregistrer votre saisie.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20ajouter%20un%20article%20d%c3%a9tail.png`} alt="ajouter un article détail" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vous pouvez sélectionner plusieurs articles à ajouter à votre devis.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20ajouter%20un%20article%20multiple%20facture%20appli.png`} alt="ajouter articles multiples" />

                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Par ailleurs, vous avez la possibilité d’appliquer une remise globale à votre devis. Dans ce cas, cochez la case correspondante.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20compl%c3%a9ter%20le%20devis.png`} alt="compléter le devis" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>En cochant sur cette case, la fenêtre s’élargit. Complétez le montant de votre remise et l’unité correspondante.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20nouveau%20devis%20remise%20globale.png`} alt="nouveau devis - remise globale" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>N’oubliez pas de cliquer sur le bouton “enregistrer le devis”, pour enregistrer votre saisie. Vous pouvez l’enregistrer comme brouillon, si vous souhaitez le finaliser plus tard.</span>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Votre article est désormais ajouté et apparaît dans votre fenêtre. Vérifiez bien l’ensemble des informations saisies puis cliquez sur le bouton <strong>“Créer le devis”</strong>.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20articles%20ajout%c3%a9s%20nouveau%20devis.png`} alt="articles ajoutés - création devis" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Dès que vous cliquez sur créer le devis, vous arrivez sur une page d’aperçu de votre devis. Vous pouvez choisir d’envoyer votre devis ou de le télécharger au format PDF.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20envoi%20devis%20.png`} alt="écran envoi devis" />
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-j')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-j')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-j') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION K */}
                <div 
                            key="section-k" 
                            id="section-k"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-k' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-k');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-k') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-k') ? <Check size={28}/> : 'K'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">K. Créer une facture depuis l’application mobile</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-k' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-k' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Depuis votre page d’accueil dans le menu actions rapides, cliquez sur le bouton <strong>créer une facture</strong>.</span>
                        </div>
                        <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/section_application_mobile/envoyer%20un%20justificatif%20%c3%a0%20son%20expert%20V2.png" alt="créer une facture appli" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Par défaut, votre liste de factures est vide, vous allez pouvoir créer votre première facture. Cliquez sur le bouton <strong>créer une facture</strong></span>
                        </div>
                        <Screenshot src={`${IMG_BASE}cr%c3%a9er%20une%20premi%c3%a8re%20facture%20V2.png`} alt="écran créer première facture V2" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Commencez par rechercher votre client dans la barre de recherche pour le sélectionner. Si vous ne l’avez pas créé au préalable, reportez-vous à la section créer un client depuis l’application mobile.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}recherche%20client%20pour%20facture%20V2.png`} alt="recherche client pour facture V2" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>En tapant la première lettre du nom de l'entreprise recherchée, celle-ci s’affiche. Ici, nous allons prendre l’exemple de l’entreprise Apolis, en tapant la lettre A.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20recherche%20client%20cr%c3%a9er%20une%20facture%20appli%20(1).png`} alt="recherche client" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Les informations de votre client s’affichent sur votre page. Si vous souhaitez définir une adresse de livraison différente de votre adresse de facturation, cliquez sur l’option <strong>définir une adresse de livraison différente</strong>.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20information%20client%20facture%20appli.png`} alt="informations client facture" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Renseignez la date d’émission et date d’échéance puis sélectionner les délais de règlement. Puis ajoutez un article à votre facture puis cliquez sur le bouton <strong>“Enregistrer la facture.”</strong></span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-remplir%20sa%20facture%20appli%20mobile.png`} alt="remplir sa facture" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Si vous choisissez d’ajouter un article via l’onglet <strong>“biens et services”</strong>, la liste de tous vos derniers services et produits apparaît sur cette page avec leurs tarifs.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20ajouter%20biens%20et%20services%20facture%20appli.png`} alt="ajouter biens et services" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Depuis cette liste, vous pourrez sélectionner votre article et l’ajouter directement à votre facture.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20ajouter%20un%20article%20facture%20appli.png`} alt="ajouter un article" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vous pouvez également sélectionner plusieurs articles en même temps et les ajouter directement à votre facture.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20ajouter%20un%20article%20multiple%20facture%20appli%20(1).png`} alt="ajouter un article multiple" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vos articles sont ajoutés à votre facture. Vérifiez puis cliquez sur le bouton <strong>“ Créer la facture”</strong>.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20articles%20ajout%c3%a9s%20facture%20appli.png`} alt="article ajoutés" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Si vous cliquez sur vos articles, vous avez la possibilité de modifier les valeurs de cet article ou de le supprimer de la facture.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20modification%20articles%20ajout%c3%a9s%20facture%20appli.png`} alt="modification articles ajoutés" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Vous arrivez sur une page d’aperçu de votre facture. Vous pouvez l’envoyer directement en cliquant sur le bouton <strong>“envoyer la facture “</strong> ou la télécharger au format PDF.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20aper%c3%a7u%20facture.png`} alt="aperçu facture" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Votre facture a bien été envoyée à votre client Apolis. Vous pouvez revenir sur votre liste de facture en cliquant sur le bouton <strong>“voir la liste des factures”</strong>.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}%c3%a9cran%20-%20confirmation%20envoi%20facture.png`} alt="confirmation envoi facture" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span><strong>Autre possibilité :</strong> Vous pouvez également choisir de saisir librement vos articles via l’onglet désignation libre. Remplissez les différentes sections puis cliquez sur le bouton <strong>“ajouter à la facture”</strong>.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}ajouter%20un%20article%20designation%20libre%20appli.png`} alt="ajouter un article désignation libre 2" />
                        
                        <div className="flex gap-4 items-start">
                            <div className="min-w-6 h-6 rounded bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-xs mt-1">❐</div>
                            <span>Pour consulter votre liste de factures, cliquez sur le bouton accueil, puis cliquez sur le bouton <strong>“factures”</strong>. L’ensemble de vos factures apparaît dans cette liste.</span>
                        </div>
                        <Screenshot src={`${IMG_BASE}consulter%20liste%20des%20factures%20V2.png`} alt="consulter liste des factures V2" />
                    
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-k')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-k')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-k') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                {/* SECTION COLLAB */}
                <div 
                            key="section-collab" 
                            id="section-collab"
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === 'section-collab' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('section-collab');
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has('section-collab') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has('section-collab') ? <Check size={28}/> : 'L'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">L. Espace collaboratif MyUnisoft</h2>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeChapter === 'section-collab' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {activeChapter === 'section-collab' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                                        
                                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">a) Tour d’horizon de l’espace collaboratif MyU</h3>
                                        <p className="flex gap-2 items-start">
                                            <span className="font-bold">❐</span>
                                            <span>Grâce à l’espace collaboratif MyU, votre client et vous accédez en temps réel aux indicateurs clés.</span>
                                        </p>
                                        <p>
                                            Les échanges sont fluides et instantanés, votre client peut se concentrer pleinement sur le développement de son activité.
                                        </p>

                                        <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/section_espace_collaboratif/MyU%20espace%20collaboratif.png" alt="MyU Espace collaboratif" />

                                        <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">b) Les fonctionnalités de l’espace collaboratif</h3>
                                        
                                        <div className="space-y-6">
                                            <div>
                                                <p className="font-bold flex gap-2 items-start"><span className="font-bold">❐</span> Tableaux de bords intuitifs</p>
                                                <p>La gestion de l’entreprise est simplifiée grâce à nos tableaux de bord intuitifs.</p>
                                                <p>Votre client a un visuel en temps réel sur son chiffre d’affaires, sa marge, ses dettes fournisseurs, ses créances clients et sa trésorerie prévisionnelle.</p>
                                            </div>

                                            <div>
                                                <p className="font-bold flex gap-2 items-start"><span className="font-bold">❐</span> Gestion des paiements et prélèvements</p>
                                                <p>La collecte des dates d’échéances des factures clients et fournisseurs est automatique.</p>
                                                <p>À partir de cet échéancier, il peut générer les prélèvements clients et les paiements fournisseurs.</p>
                                            </div>

                                            <div>
                                                <p className="font-bold flex gap-2 items-start"><span className="font-bold">❐</span> Accès direct aux documents</p>
                                                <p>La transmission des documents et notes de frais est rapide et sécurisée.</p>
                                                <p>Grâce à la GED (Gestion Électronique de Documents) partagée avec le cabinet, votre client peut consulter ses documents où qu’il soit.</p>
                                            </div>

                                            <div>
                                                <p className="font-bold flex gap-2 items-start"><span className="font-bold">❐</span> Les échanges sont simplifiés</p>
                                                <p>Gagnez du temps en échangeant avec votre client via notre messagerie sécurisée.</p>
                                                <p>Recevez des pièces jointes sans avoir besoin de vous déplacer.</p>
                                                <p>Chaque discussion est rattachée à son dossier, permettant de cerner d’un coup d'œil le besoin de votre interlocuteur.</p>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">c) les connecteurs MyU Gestion</h3>
                                        <p>Il faut tout d’abord vous connecter à votre compte MyUnisoft grâce à vos identifiants et mot de passe.</p>
                                        <p>Une fois la connexion établie vous serez redirigé sur la « Vue d’ensemble ».</p>
                                        <p>Accéder par le biais d’un clic au dernier panneau « Paramètres » présent dans le menu de navigation sur la gauche de votre écran, puis cliquez sur connecteurs cabinet.</p>

                                        <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/section_espace_collaboratif/connecteur%20cabinet%20.png" alt="connecteur cabinet" />

                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleMarkAsRead('section-collab')}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                                                    readChapters.has('section-collab')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }`}
                                            >
                                                {readChapters.has('section-collab') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                </div>

                {/* Sidebar Navigation (Desktop) */}
                <div className="hidden lg:block w-80 shrink-0 flex flex-col gap-6">
                    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 flex flex-col min-h-0 flex-1">
                        <h3 className="font-display font-bold text-gray-900 mb-4 px-2 shrink-0">Sommaire</h3>
                        <div className="space-y-1 overflow-y-auto custom-scrollbar pr-2 flex-1">
                            {chapters.map((chapter) => (
                                <button
                                    key={chapter.id}
                                    onClick={() => scrollToChapter(chapter.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
                                        activeChapter === chapter.id 
                                        ? 'bg-[#00c4b4] text-white shadow-md shadow-[#00c4b4]/20' 
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    <span className="truncate">{chapter.title}</span>
                                    {activeChapter === chapter.id && (
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-white/20">
                                            <Check size={12} />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Help Box */}
                    <div className="shrink-0 bg-gradient-to-br from-myu-purple to-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                        <div className="relative z-10">
                            <h3 className="font-bold text-lg mb-2">Besoin d'aide ?</h3>
                            <p className="text-indigo-100 text-sm mb-4">Retrouvez toutes nos ressources sur le centre d'aide MyUnisoft.</p>
                            <a 
                                href="https://support.myunisoft.fr/" 
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full bg-white text-indigo-600 text-center py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors"
                            >
                                Centre d'aide
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quiz Section */}
            <div className="mt-12 scroll-mt-28" id="quiz-section">
                <PageQuiz 
                    pageId="appli-mobile-collab" 
                    title="Auto évaluez vous !" 
                    description="Testez vos connaissances pour valider le module." 
                />
            </div>

        {/* Toast Notification */}
        <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-500 z-[9999] ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
            <CheckCircle2 className="text-emerald-400" size={20} />
            <span className="font-medium">{toastMessage}</span>
        </div>
    </div>
    );
};
