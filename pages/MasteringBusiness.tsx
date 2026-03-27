import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PageQuiz } from '../components/PageQuiz';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  BarChart3, 
  Users2, 
  FileEdit, 
  Truck, 
  ChevronDown,
  ArrowLeft,
  Euro,
  CheckCircle2,
  Check,
  Search,
  Briefcase,
  Trophy,
  AlertCircle,
  XCircle,
  HelpCircle,
  CreditCard,
  Mail,
  Zap,
  ExternalLink,
  ArrowDown
} from 'lucide-react';
import { InteractiveNote } from '../components/ui/InteractiveNote';
import { Screenshot } from '../components/ui/Screenshot';
import { UpsellSection } from '../components/ui/UpsellSection';

// Base URLs for images
const IMG_BASE = "https://www2.myunisoft.fr/outils/o/MyUGFi/section%20%20_%20MyU%20Gestion%20Business/";
const IMG_PA_BASE = "https://www2.myunisoft.fr/outils/o/MyUGFi/section_PA/";
const IMG_START_BASE = "https://www2.myunisoft.fr/outils/o/MyUGFi/Start/Myu%20Gestion%20start/";

const Badge = ({ children, color = 'gray' }: { children?: React.ReactNode, color?: 'gray'|'teal'|'red'|'blue'|'purple'|'orange' }) => {
    const styles = {
        gray: 'bg-gray-100 text-gray-700 border-gray-200',
        teal: 'bg-[#00c4b4]/10 text-[#00c4b4] border-[#00c4b4]/20',
        red: 'bg-red-50 text-red-700 border-red-200',
        blue: 'bg-blue-50 text-blue-700 border-blue-200',
        purple: 'bg-purple-50 text-purple-700 border-purple-200',
        orange: 'bg-orange-50 text-orange-700 border-orange-200',
    };
    return <span className={`border px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide inline-flex items-center gap-1 ${styles[color]}`}>{children}</span>;
};

const chapters = [
  { id: 1, title: "Pilotage de l'entreprise", icon: BarChart3 },
  { id: 2, title: "Gestion des tiers", icon: Users2 },
  { id: 3, title: "Gestion des produits", icon: FileEdit },
  { id: 4, title: "Devis et facturation", icon: FileEdit },
  { id: 5, title: "Suivi de travaux", icon: FileEdit },
  { id: 6, title: "Bons de commande, bons de livraison et réception", icon: Truck },
  { id: 7, title: "Suivi des règlements", icon: Euro },
  { id: 8, title: "CRM intégré", icon: Briefcase },
  { id: 9, title: "Compte pro et carte de paiement", icon: CreditCard }
];

export const MasteringBusiness = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeChapter, setActiveChapter] = useState<number | null>(null);
    const [readChapters, setReadChapters] = useState<Set<number>>(new Set([]));
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        if (location.hash) {
            const hash = location.hash.substring(1);
            if (hash.startsWith('chapter-')) {
                const id = parseInt(hash.split('-')[1], 10);
                if (!isNaN(id)) {
                    setActiveChapter(id);
                    setTimeout(() => {
                        const element = document.getElementById(hash);
                        if (element) {
                            const headerOffset = 100;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            
                            window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                            });
                        }
                    }, 300);
                }
            } else if (hash === 'quiz-section') {
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        const headerOffset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }, 300);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const scrollToChapter = (id: number) => {
        setActiveChapter(id);
        setTimeout(() => {
            const element = document.getElementById(`chapter-${id}`);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 100);
    };

    const toggleChapter = (id: number) => {
        if (activeChapter === id) {
            setActiveChapter(null); 
        } else {
            setActiveChapter(id);
        }
    };

    useEffect(() => {
        // We handle scrolling in the location.hash effect now, but we can keep this for manual toggles
        if (activeChapter !== null && !location.hash) {
            const element = document.getElementById(`chapter-${activeChapter}`);
            if (element) {
                setTimeout(() => {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 100);
            }
        }
    }, [activeChapter, location.hash]);

    const handleMarkAsRead = (id: number) => {
        setReadChapters(prev => {
            const newSet = new Set(prev);
            newSet.add(id);
            
            // Show toast
            const newProgress = Math.round(((newSet.size) / chapters.length) * 100);
            setToastMessage(`Chapitre validé ! Progression : ${newProgress}%`);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);

            // Confetti effect
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#00c4b4', '#10b981', '#3b82f6']
            });

            if (newSet.size === chapters.length) {
                // Big confetti if all chapters are read
                setTimeout(() => {
                    confetti({
                        particleCount: 300,
                        spread: 150,
                        origin: { y: 0.5 },
                        colors: ['#00c4b4', '#10b981', '#3b82f6', '#f59e0b', '#ef4444']
                    });
                }, 500);
            }

            return newSet;
        });
        
        const currentIndex = chapters.findIndex(c => c.id === id);
        if (currentIndex < chapters.length - 1) {
            setActiveChapter(null);
            setTimeout(() => {
                const element = document.getElementById(`chapter-${chapters[currentIndex + 1].id}`);
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        } else {
            setActiveChapter(null);
            setTimeout(() => {
                const element = document.getElementById('quiz-section');
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        }
    };

    const progressPercentage = Math.round((readChapters.size / chapters.length) * 100);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
            <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:border-myu-teal cursor-pointer"
            >
                <ArrowLeft size={16} /> Retour
            </motion.button>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8 mx-auto text-center flex flex-col items-center max-w-4xl"
            >
                <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4 tracking-tight">Maîtriser la gamme Business</h1>
                <div className="bg-gradient-to-r from-myu-light/30 to-transparent p-6 rounded-2xl border border-myu-light text-left w-full">
                    <p className="text-xl text-gray-800 font-medium mb-4 leading-relaxed">
                        La réforme de la facturation électronique entre en vigueur dès septembre 2026 et impose à toutes les entreprises de se mettre en conformité.
                    </p>
                    <p className="text-sm text-gray-600 bg-white/50 p-4 rounded-xl border border-white leading-relaxed">
                        Désormais, il devient indispensable de proposer de vous former à notre gamme Business pour gérer votre cycle de facturation.<br/>
                        C’est pourquoi, il est nécessaire de faire évoluer vos clients actuellement sous Limpyd vers la nouvelle offre MyU Gestion Business.<br/>
                        Ce guide est en soutien de la formation Gestion financière de 5h qui vous accompagne dans l'offre MyU Gestion financière.
                    </p>
                </div>
            </motion.div>

            {/* PROGRESS BAR */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-myu-teal/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-4">
                         <div>
                             <h3 className="text-lg font-bold text-gray-900 mb-1">Votre progression</h3>
                             <p className="text-sm text-gray-500">{readChapters.size} sur {chapters.length} chapitres validés</p>
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
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 items-start relative">
                
                {/* Main Content */}
                <div className="flex-1 w-full min-w-0 space-y-6">
                    
                    {/* Sticky Chapter Header */}
                    <AnimatePresence>
                    {activeChapter && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="sticky top-24 z-30 bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl p-4 flex items-center gap-4 transition-all"
                        >
                            <div className="w-10 h-10 rounded-lg bg-myu-teal text-white flex items-center justify-center shrink-0 shadow-sm">
                                {React.createElement(chapters.find(c => c.id === activeChapter)?.icon || BarChart3)}
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-myu-teal">Chapitre en cours</div>
                                <h3 className="font-bold text-gray-900 leading-tight">{chapters.find(c => c.id === activeChapter)?.title}</h3>
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>

                    {chapters.map((chapter, index) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={chapter.id} 
                            id={`chapter-${chapter.id}`}
                            className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activeChapter === chapter.id ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter(chapter.id);
                                }}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 ${readChapters.has(chapter.id) ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}`}>
                                        {readChapters.has(chapter.id) ? <Check size={28}/> : chapter.id}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">{chapter.title}</h2>
                                </div>
                                <div className={`p-2 rounded-full transition-all duration-300 ${activeChapter === chapter.id ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-200 text-gray-500 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}`}>
                                    <ChevronDown size={20} />
                                </div>
                            </button>

                            {activeChapter === chapter.id && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-8 pb-12 pt-4"
                                >
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">
                                        
                                        {/* CHAPITRE 1 : PILOTAGE DE L'ENTREPRISE */}
                                        {chapter.id === 1 && (
                                            <>
                                                <p className="text-lg text-gray-800 font-medium mb-8">
                                                    ❐ Ce chapitre est destiné à la consultation des indicateurs clés de gestion, analyse et prise de décision. Il est le point de départ pour évaluer la santé de votre entreprise
                                                </p>
                                                
                                                <div className="pl-4 border-l-4 border-myu-teal mt-8">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">a) consultation des chiffres clés</h4>
                                                    <p>
                                                        ❐ Dans la formation Maîtriser la gamme Start, nous voyons comment accéder depuis la page d’accueil à un tableau de bord pour accéder aux chiffres clés de l’entreprise en temps réel.
                                                    </p>
                                                </div>
                                                
                                                <Screenshot src={`${IMG_BASE}chiffres%20cl%c3%a9s.png`} alt="chiffres clés" />
                                                
                                                <p className="flex items-center gap-2 flex-wrap mt-6">
                                                    ❐ En cliquant sur la ⚙️, vous avez la possibilité de pouvoir modifier les périodes à consulter: sur 1 mois, sur 6 mois, sur 1 an, ce mois-ci, cette semaine, ce mois-ci.
                                                </p>
                                                
                                                <Screenshot src={`${IMG_BASE}liste%20des%20p%c3%a9riodes%20d_analyses.png`} alt="liste des périodes d’analyses" />

                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/section%20%20_%20MyU%20Gestion%20Business/evolution%20CA.png" alt="évolution CA" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">b) consultation du chiffre d’affaires</h4>
                                                    <p>
                                                        ❐ De plus, sur ce même tableau de bord, vous avez accès à l’évolution du chiffre d'affaires facturé de l’entreprise en temps réel.
                                                    </p>
                                                </div>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">c) consulter les dernières factures créées</h4>
                                                    <p>
                                                        ❐ Enfin, vous pouvez également retrouver en page d’accueil l’état des dernières factures créées, qui peuvent être exportées au format .csv
                                                    </p>
                                                    <p className="mt-4">
                                                        ❐ Pour modifier l’agencement et la personnalisation des colonnes, cliquez sur les …
                                                    </p>
                                                </div>
                                                <Screenshot src={`${IMG_BASE}dernieres%20factures%20cr%c3%a9%c3%a9es.png`} alt="dernieres factures créées" />
                                            </>
                                        )}

                                        {/* CHAPITRE 2 : GESTION DES TIERS */}
                                        {chapter.id === 2 && (
                                            <>
                                                <p className="text-lg text-gray-800 font-medium mb-8">Ce chapitre couvre la gestion des entités (clients, prospects) et les actions commerciales de base.</p>
                                                
                                                <div className="pl-4 border-l-4 border-myu-teal mt-8">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">a) créer un prospect</h4>
                                                    <p>
                                                        ❐ Pour créer un prospect, cliquez sur le menu CRM/Ventes puis sur liste des prospects, puis sur le bouton .
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/section%20%20_%20MyU%20Gestion%20Business/liste%20des%20prospects-clients.png" alt="liste prospects clients" />
                                                
                                                <p className="mt-6">❐ Vous devez à minima renseigner les rubriques obligatoires, représentés avec un *</p>
                                                <Screenshot src={`${IMG_BASE}ajout%20d_un%20prospect.png`} alt="ajout d’un prospect" />

                                                <div className="my-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-myu-teal/10 rounded-xl flex items-center justify-center text-myu-teal">
                                                        <Zap size={24} />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 italic">Pour aller plus loin :</p>
                                                        <a href="https://drive.google.com/file/d/1jgWw2YaBtSlh7H3ABQP2FZtsItNoYSXJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-myu-teal underline hover:text-myu-teal/80 font-medium flex items-center gap-2">découvrez la vidéo pour créer un prospect <ExternalLink size={14}/></a>
                                                    </div>
                                                </div>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">b) créer un client</h4>
                                                    <p>
                                                        ❐ Pour créer un prospect, cliquez sur l’accès rapide depuis votre page d’accueil
                                                    </p>
                                                </div>
                                                <Screenshot src={`${IMG_BASE}acc%c3%a8s%20rapide.png`} alt="accès rapide" />
                                                
                                                <p className="mt-6">
                                                    ❐ Remplissez à minima les informations de numéro de compte, représentés avec un *, pour créer votre client puis cliquez sur le bouton .
                                                </p>
                                                <Screenshot src={`${IMG_BASE}ajout%20d_un%20client.png`} alt="ajout d’un client" />

                                                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 mt-12">
                                                    <h4 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2"><Search size={20}/> ❐ Où retrouver mes clients une fois créés ?</h4>
                                                    <p className="mb-4">
                                                        Depuis l’accès rapide, en haut à droite de votre écran, vous pouvez retrouver la liste de tous vos clients créés au sein de l’application.
                                                    </p>
                                                    <Screenshot src={`${IMG_BASE}acc%c3%a8s%20rapide%20mes%20clients.png`} alt="accès rapide mes clients" />
                                                    
                                                    <p className="mt-6 text-sm">
                                                        Deux modes de visualisation de cette liste sont possibles selon vos préférences : une liste simple et une liste avancée.
                                                    </p>
                                                    <p className="mt-4 text-sm">
                                                        ❐ Cliquez sur le nom d’un de vos clients, pour retrouver sa fiche détaillée. Vous y retrouvez tous les éléments saisis lors de la création et d’autres onglets pour éditer certaines informations.
                                                    </p>
                                                    <Screenshot src={`${IMG_BASE}fiche%20client%20d%c3%a9taill%c3%a9e.png`} alt="fiche client détaillée" />
                                                    <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/section%20%20_%20MyU%20Gestion%20Business/creer%20client%20-%20bas%20de%20page.png" alt="creer client bas de page" />
                                                    
                                                    <p className="mt-6 text-sm">
                                                        Vous pouvez ajouter également le nom du commercial rattaché à ce client et l’agence correspondante.
                                                    </p>

                                                    <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                                                        <div className="w-12 h-12 bg-myu-teal/10 rounded-xl flex items-center justify-center text-myu-teal">
                                                            <Zap size={24} />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 italic">Pour aller plus loin :</p>
                                                            <a href="https://drive.google.com/file/d/1OllX0iHrvPp5pSUVsH8cCeqXDhtwTstd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-myu-teal underline hover:text-myu-teal/80 font-medium flex items-center gap-2">découvrez la video créer un client <ExternalLink size={14}/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* CHAPITRE 3 : GESTION DES PRODUITS */}
                                        {chapter.id === 3 && (
                                            <>
                                                <p className="text-lg text-gray-800 font-medium mb-8">Une fois que vous avez créé votre client, il est important que vous puissiez créer un produit avant de pouvoir passer à la création de vos pièces commerciales.</p>
                                                
                                                <div className="pl-4 border-l-4 border-myu-teal mt-8">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">a) créer un produit</h4>
                                                    <p>
                                                        ❐ Cliquez sur le menu Stocks Produits. Au sein de la gamme Start, vous n’avez pas accès à la gestion de stocks. Vous pouvez toutefois créer un produit.
                                                    </p>
                                                </div>
                                                <Screenshot src={`${IMG_BASE}menu%20modules.png`} alt="menu modules" />
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/Gestion%20des%20produits/liste%20des%20produits%20(1).png" alt="liste des produits" />
                                                
                                                <p className="mt-6">
                                                    ❐ Cliquez sur la liste des produits. Une fois que vous arrivez sur cette page, cliquez sur le bouton <Badge color="teal">+ Nouveau</Badge>
                                                </p>

                                                <p className="mt-6">
                                                    ❐ Pour ajouter un produit, commencez par compléter la référence de votre produit, le nom du produit et sa description.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Vous pouvez également ajouter quelques informations complémentaires, telles que la marque, la garantie et le numéro EAN.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Vous pouvez télécharger, si vous le souhaitez, un visuel.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Pour valider la création de votre produit, vous devez également compléter son prix de vente HT et la TVA par défaut.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Enfin, choisissez la famille de produits (Conseils, déplacements, formations, postes fixes, prestations) et la catégorie (bureaux, laboratoire, terrain).
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/Gestion%20des%20produits/ajouter%20un%20produit%20(1).png" alt="ajouter un produit" />
                                                <p className="mt-4">
                                                    ❐ Vérifiez toujours vos informations avant de cliquer sur le bouton Valider
                                                </p>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">b) consulter une fiche produit</h4>
                                                    <p>
                                                        ❐ Pour retrouver votre produit nouvellement créé, vous revenez sur la page précédente qui correspond à la liste des produits.
                                                    </p>
                                                    <p className="mt-4">
                                                        ❐ Pour consulter la fiche de votre produit, cliquez sur la ligne correspond à votre produit puis sur le nom de votre produit (ex : café)
                                                    </p>
                                                    <p className="mt-4">
                                                        ❐ Votre fiche produit apparaît ainsi
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/Gestion%20des%20produits/fiche%20produit%20%20(1).png" alt="fiche produit" />
                                                
                                                <p className="mt-6">
                                                    ❐ Si vous souhaitez modifier un élément de votre fiche produit, cliquez sur l’icône crayon
                                                </p>
                                                
                                                <p className="mt-6">
                                                    ❐ Vous arrivez sur la page d’édition d’un produit. Vous pouvez à ce stade modifier l’élément souhaité. Pensez à bien cliquer sur le bouton Valider en bas à droite de votre écran.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/Gestion%20des%20produits/%c3%a9diter%20un%20produit%20(1).png" alt="éditer un produit" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">c) créer une grille de tarifs</h4>
                                                    <p>
                                                        ❐ Vous pouvez créer une grille de tarifs
                                                    </p>
                                                </div>
                                            </>
                                        )}

                                        {/* CHAPITRE 4 : DEVIS ET FACTURATION */}
                                        {chapter.id === 4 && (
                                            <>
                                                <p className="text-lg text-gray-800 font-medium mb-8">Ce chapitre explique comment créer des devis, les transformer en factures, et les envoyer aux clients.</p>
                                                
                                                <div className="pl-4 border-l-4 border-myu-teal mt-8">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">a) créer un devis</h4>
                                                    <p>
                                                        ❐ Pour créer un devis, cliquez sur l’accès rapide depuis la page d’accueil à droite de l’écran.
                                                    </p>
                                                </div>
                                                <Screenshot src={`${IMG_BASE}acc%c3%a8s%20rapide.png`} alt="Accès rapide" />
                                                <Screenshot src={`${IMG_BASE}cr%c3%a9er%20un%20devis.png`} alt="Créer un devis" />
                                                
                                                <p className="mt-4">
                                                    ❐ Une fois arrivé sur la page, remplissez les différents champs : client, type de règlement, mode de règlement, objet.
                                                </p>
                                                <p className="bg-yellow-50 p-3 rounded border border-yellow-100 text-sm my-2 flex items-start gap-2">
                                                    <Search size={16} className="shrink-0 text-yellow-600 mt-0.5"/> 
                                                    <span>Sélectionnez votre client dans le menu déroulant. S’il n’est pas référencé, vous pouvez soit le rechercher à l’aide de la loupe ou le créer en cliquant sur le symbole +</span>
                                                </p>
                                                
                                                <p>
                                                    ❐ Ajoutez les lignes qui correspondent aux produits à inscrire au devis avec la référence produit, la description, l’unité (forfait, horaire, jour, unité), la quantité, le prix unitaire, le taux de TVA correspondant, la remise en % si existante.
                                                </p>
                                                <Screenshot src={`${IMG_BASE}ligne%20devis.png`} alt="Ligne devis" />
                                                
                                                <p className="mt-4 font-bold">❐ Pour ajouter une nouvelle ligne dans un devis :</p>
                                                <p>cliquez sur le bouton <strong>"ajouter un produit ou des produits"</strong> ou bien avec les 3 petits points on peut le faire aussi.</p>
                                                
                                                <div className="mt-6">
                                                    <p className="font-bold">❐ Pour personnaliser votre devis :</p>
                                                    <p>ajouter un saut de page, un sous-total ou dupliquer une ligne ou encore supprimer une ligne, cliquez sur les <span className="font-bold tracking-widest text-lg">...</span></p>
                                                    <Screenshot src={`${IMG_BASE}personnaliser%20devis.png`} alt="Personnaliser devis" />
                                                </div>
                                                
                                                <p className="mt-6">
                                                    <span className="font-bold">Bas de page du devis :</span> Vous devez renseigner l’agence rattachée à votre devis. Pour cela, sélectionnez l’agence ou référez-vous au chapitre paramètres de base - gestion des agences pour en créer une.
                                                </p>
                                                <p>
                                                    Vous pouvez également y ajouter vos pénalités applicables en cas d’incident de paiement dans les notes.
                                                </p>
                                                <p>Une fois que vous avez saisi tous vos éléments, cliquez sur le bouton <Badge color="teal">Valider</Badge>.</p>
                                                
                                                <Screenshot src={`${IMG_BASE}divers%20devis.png`} alt="Divers devis" />

                                                <InteractiveNote type="tip" title="Tuto Vidéo">
                                                    Vous pouvez également consulter ce tuto vidéo sur la création d’un devis <a href="https://drive.google.com/file/d/1OllX0iHrvPp5pSUVsH8cCeqXDhtwTstd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline font-bold text-myu-teal">ici</a>
                                                </InteractiveNote>

                                                <div className="my-12">
                                                    <p className="font-bold text-lg mb-4">
                                                        ❐ Pour visualiser l’ensemble de vos devis créés, cliquez sur le menu “liste de vos devis” dans le menu latéral de gauche.
                                                    </p>
                                                    <Screenshot src={`${IMG_BASE}documents%20-%20liste%20devis.png`} alt="Liste des devis" />
                                                    
                                                    <div className="bg-gray-50 p-6 rounded-2xl text-sm space-y-3 border border-gray-100">
                                                        <p><span className="font-bold text-gray-900">Simple et avancée :</span> Vous avez la possibilité de visualiser vos devis soit dans le mode simple ou soit dans le mode avancé selon vos préférences.</p>
                                                        <p><span className="font-bold text-gray-900">Nouveau :</span> bouton pour créer un nouveau devis</p>
                                                        <p><span className="font-bold text-gray-900">Barre de recherche :</span> vous pouvez rechercher un ou plusieurs devis grâce à des mots clés</p>
                                                        <p><span className="font-bold text-gray-900">Exporter :</span> fonctionnalité pour exporter l’ensemble des devis au format CSV</p>
                                                        <p><span className="font-bold text-gray-900">Statut :</span> vous avez la possibilité de suivre le statut de chaque devis : accepté, accepté facturé, refusé, remis, accepté (acompte)</p>
                                                    </div>
                                                </div>
                                                
                                                <p>
                                                    ❐ En cliquant sur sa référence, arrivé sur votre devis, cliquez sur le bouton pour le visualiser et accéder à son détail. Vous pourrez y retrouver les actions telles que envoyer un devis par email, imprimer un devis ou encore créer un document depuis votre devis
                                                </p>
                                                <Screenshot src={`${IMG_BASE}aper%c3%a7u%20devis%20.png`} alt="Aperçu devis" />
                                                
                                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-sm mt-6">
                                                    <p className="font-bold mb-4 text-blue-900 text-base">Tout en haut de votre devis se trouve un menu avec plusieurs onglets</p>
                                                    <ul className="space-y-4">
                                                        <li><span className="font-bold text-gray-900">Document :</span> vous retrouverez votre devis détaillé. La solution MyU Gestion Financière est une solution collaborative, vous avez la possibilité d’apposer des commentaires en bas de votre devis.</li>
                                                        <li className="bg-white/60 p-3 rounded-lg border border-blue-200">
                                                            <div className="flex items-center gap-2 mb-1"><Mail size={16} className="text-blue-600"/><span className="font-bold text-gray-900">Emails :</span></div>
                                                            <p>Vous pouvez consulter le suivi de votre mail avec la date d'envoi et de lecture par le destinataire.</p>
                                                        </li>
                                                        <li><span className="font-bold text-gray-900">Dossier :</span> vous pouvez retrouver le dossier rattaché à votre devis (facture, bons de commande, bons de livraison)</li>
                                                        <li><span className="font-bold text-gray-900">Historique du dossier :</span> vous pouvez retracer l’historique des différentes actions réalisées sur votre dossier</li>
                                                        <li><span className="font-bold text-gray-900">Commentaires :</span> vous pouvez ajouter un commentaire pour préciser certaines actions et le rendre visible en cliquant sur le bouton publier</li>
                                                        <li><span className="font-bold text-gray-900">Fichiers joints :</span> vous pouvez inclure des pièces jointes en complément de votre devis</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="bg-purple-600 text-white p-4 rounded-xl mt-6">
                                                    <span className="font-bold">Activités :</span> vous retrouvez ici l’ensemble des activités récentes sur votre dossier
                                                </div>

                                                <div className="my-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-myu-teal/10 rounded-xl flex items-center justify-center text-myu-teal">
                                                        <Zap size={24} />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 italic">pour aller plus loin : découvrez la vidéo pour créer un devis</p>
                                                        <a href="https://drive.google.com/file/d/1OllX0iHrvPp5pSUVsH8cCeqXDhtwTstd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-myu-teal underline hover:text-myu-teal/80 font-medium flex items-center gap-2">Lien vers la vidéo <ExternalLink size={14}/></a>
                                                    </div>
                                                </div>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">b) transformer un devis en facture</h4>
                                                    <p>
                                                        ❐ En cliquant sur le bouton “<span className="font-bold">créer un document</span>”, vous avez la possibilité de transformer votre devis en facture. Nous verrons un peu plus loin comment créer une facture.
                                                    </p>
                                                    <p>❐ Sélectionnez "créer une facture" pour transformer le devis.</p>
                                                    <Screenshot src={`${IMG_BASE}devis%20en%20facture.png`} alt="Devis en facture" />
                                                </div>
                                                
                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">c) importer des devis</h4>
                                                    <p>Pour importer des devis, veuillez vous référer à la section paramètres de base.</p>
                                                </div>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">d) où retrouver vos devis rapidement ?</h4>
                                                    <p>Depuis l’accès rapide, vous pouvez avoir accès à des listes, que vous pouvez personnaliser.</p>
                                                    <Screenshot src={`${IMG_BASE}acc%c3%a8s%20rapide%20mes%20devis.png`} alt="Accès rapide mes devis" />
                                                </div>
                                                
                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">d) personnaliser le design de son devis</h4>
                                                    <p>Pour personnaliser le design de votre devis, consultez le chapitre configuration logiciel - paramétrages de documents</p>
                                                </div>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">e) créer une facture</h4>
                                                    <p>
                                                        Nous avons vu comment transformer un devis en facture, nous allons aborder plus précisément dans la création d’une facture.
                                                    </p>
                                                    <p>
                                                        ❐ Pour cela, sélectionnez l’accès rapide depuis votre page d’accueil et cliquez sur <span className="font-bold">créer une facture</span>
                                                    </p>
                                                </div>
                                                <Screenshot src={`${IMG_BASE}acc%c3%a8s%20rapide.png`} alt="Accès rapide" />
                                                
                                                <p>
                                                    ❐ Commencez par ajouter un client en remplissant le secteur d’activité, le type de règlement, le mode de règlement, l’objet, date d’émission, date limite de règlement
                                                </p>
                                                <Screenshot src={`${IMG_BASE}creer%20une%20facture%201.png`} alt="Créer une facture" />
                                                
                                                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-sm space-y-4">
                                                    <p><span className="font-bold text-indigo-900">Client :</span> Vous pouvez soit sélectionner vos clients depuis le menu déroulant (s’ils sont déjà renseignés) ou soit les rechercher via la loupe ou encore en créer en cliquant sur le bouton +.</p>
                                                    <p><span className="font-bold text-indigo-900">Type de règlement :</span> Ajustez ici le type de règlement : soit à facturation, soit à 30 jours date de facturation, soit à 30 jours fin de mois, soit à 50% à la commande et le solde à livraison.</p>
                                                    <p><span className="font-bold text-indigo-900">Mode de règlement :</span> indique le moyen que vous demandez pour régler votre facture : carte bleue, chèque, espèce, prélèvement, traite, virement</p>
                                                    <div className="bg-indigo-600 text-white p-4 rounded-xl mt-4">
                                                        <p><span className="font-bold">Objet :</span> indique la période concernée pour la facture en question</p>
                                                        <p><span className="font-bold">Date :</span> indique la date d’émission de votre facture</p>
                                                        <p><span className="font-bold">Date de règlement :</span> indique la date limite pour régler votre facture</p>
                                                    </div>
                                                </div>
                                                
                                                <p className="mt-8">
                                                    ❐ Remplissez les lignes de factures avec la référence du produit, la description, l’unité, la quantité, le prix unitaire, la TVA correspondante, remise s’il y en a.
                                                </p>
                                                <Screenshot src={`${IMG_BASE}creer%20une%20facture%202.png`} alt="Créer une facture suite" />
                                                
                                                <p>
                                                    Tout comme la création d’un devis, cliquez sur les ... pour personnaliser le corps de la facture comme ajouter un produit, un texte, un saut de page, un sous-total, dupliquer une ligne ou encore supprimer une ligne.
                                                </p>
                                                <p>
                                                    ❐ vous pouvez visualiser l’ensemble de vos factures en cliquant en haut à gauche de votre écran sur retour à la liste
                                                </p>
                                                <p>
                                                    ❐ Arrivé dans la liste des factures, cliquez sur la référence pour afficher le détail
                                                </p>
                                                <p>Nous allons prendre par exemple la facture FA251100017</p>
                                                <Screenshot src={`${IMG_BASE}liste%20des%20factures.png`} alt="Liste des factures" />
                                                
                                                <p>Nous arrivons dans le détail de cette facture</p>
                                                <Screenshot src={`${IMG_BASE}d%c3%a9tail%20facture.png`} alt="Détail facture" />
                                                
                                                <p>
                                                    ❐ Plusieurs boutons apparaissent dans un menu en haut de l’écran. Vous pouvez effectuer différentes actions sur votre facture en cliquant sur le bouton <span className="font-bold text-myu-teal">“actions”</span>.
                                                </p>
                                                <Screenshot src={`${IMG_BASE}boutons%20actions%20facture.png`} alt="Boutons actions facture" />
                                                
                                                <ul className="space-y-4 my-6 list-none pl-0">
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-xl shrink-0">✏️</span>
                                                        <span className="pt-1">le bouton “crayon” sert plutôt à modifier une facture qui est encore au statut <strong>“brouillon”</strong></span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-xl shrink-0">📄</span>
                                                        <span className="pt-1">le bouton “copier” sert à dupliquer une facture déjà existante</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-xl shrink-0">⏰</span>
                                                        <span className="pt-1">le bouton “alertes” sert à ajouter une alerte sur une facture</span>
                                                    </li>
                                                </ul>

                                                <InteractiveNote type="info" title="À retenir">
                                                    Une fois validée, une facture ne peut plus être éditée. Une facture est validée lorsqu’elle passe du statut Brouillon par défaut à “à traiter” ou “remise”.
                                                </InteractiveNote>
                                                
                                                <p>
                                                    ❐ Lorsqu’une facture remise est statuée en retard de paiement, une alerte avec un voyant rouge s’affiche. Une fois la facture réglée, vous avez la possibilité d’ajouter un paiement qui permettra de mieux gérer vos relances.
                                                </p>
                                                <Screenshot src={`${IMG_PA_BASE}acceptation%20facture%20fournisseur%20first%20web%20.png`} alt="Ajout paiement facture" />

                                                <div className="bg-indigo-900 text-white p-6 rounded-2xl mt-8 space-y-3 shadow-lg">
                                                    <p><span className="font-bold text-indigo-300">Document :</span> retrace le détail de votre facture pour pouvoir visualiser l’ensemble des éléments ajoutés</p>
                                                    <li className="bg-white/10 p-3 rounded-lg border border-white/20">
                                                        <div className="flex items-center gap-2 mb-1 text-white"><Mail size={16}/><span className="font-bold">Emails :</span></div>
                                                        <p className="text-indigo-100">Vous pouvez consulter le suivi de votre mail avec la date d'envoi et de lecture par le destinataire.</p>
                                                    </li>
                                                    <p><span className="font-bold text-indigo-300">Dossier :</span> liste toutes les pièces commerciales rattachées à une facture</p>
                                                    <p><span className="font-bold text-indigo-300">Historique du dossier :</span> retrace l’ensemble des actions réalisées mois par mois sur un dossier</p>
                                                    <p><span className="font-bold text-indigo-300">Commentaires :</span> rubrique qui sert à apposer des commentaires sur une facture. Appuyer sur le bouton publier pour rendre le commentaire visible.</p>
                                                    <p><span className="font-bold text-indigo-300">Paiements :</span> retrace l’ensemble des paiements effectués pour une facture</p>
                                                    <p><span className="font-bold text-indigo-300">Fichiers joints :</span> ajout d’une PJ dans le dossier ou tout autre document complémentaire</p>
                                                </div>
                                                
                                                <div className="bg-orange-500 text-white p-4 rounded-xl mt-4">
                                                     <p className="font-bold underline">MyUnisoft :</p> passerelle pour synchroniser les écritures vers MyU Gestion Production comptable
                                                </div>
                                                <div className="bg-purple-600 text-white p-4 rounded-xl mt-4">
                                                    <p><span className="font-bold">Activités :</span> récapitule toutes les activités relatives à une facture (paiements, documents attachés, email, création de factures, copie de factures...)</p>
                                                </div>

                                                <div className="my-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-myu-teal/10 rounded-xl flex items-center justify-center text-myu-teal">
                                                        <Zap size={24} />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 italic">pour aller plus loin</p>
                                                        <a href="https://drive.google.com/file/d/1Y4HexYqxJhiRfTW9S5YbFTE_DOb-dPt7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-myu-teal underline hover:text-myu-teal/80 font-medium flex items-center gap-2">Découvrez la vidéo pour créer une facture <ExternalLink size={14}/></a>
                                                    </div>
                                                </div>
                                                
                                                <InteractiveNote type="tip" title="Tuto Vidéo">
                                                    Vous trouverez dans cette vidéo un exemple de création de facture <a href="https://drive.google.com/file/d/1Y4HexYqxJhiRfTW9S5YbFTE_DOb-dPt7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline font-bold text-myu-teal">ici</a>
                                                </InteractiveNote>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">f) créer une facture d’acompte</h4>
                                                    <p>
                                                        ❐ Pour créer une facture d’acompte, vous devez créer en premier lieu un devis.
                                                    </p>
                                                </div>
                                                
                                                <InteractiveNote type="info" title="À retenir">
                                                    Depuis votre liste de factures, vous ne trouverez pas le bouton pour générer manuellement une facture d'acompte.
                                                </InteractiveNote>

                                                <p>
                                                    Une fois votre devis créé, dans votre liste de devis, cliquez sur créer un document puis créer une facture d’acompte
                                                </p>
                                                <Screenshot src={`${IMG_BASE}creer%20facture%20acompte.png`} alt="Créer facture acompte" />
                                                
                                                <p>❐ Indiquez ensuite l’acompte en % du prix total TTC <span className="font-bold">OU</span> l'acompte en montant puis cliquez sur le bouton “confirmer".</p>
                                                <Screenshot src={`${IMG_BASE}montant%20facture%20acompte.png`} alt="Montant facture acompte" />
                                                
                                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm italic my-4">
                                                    la saisie en montant fixe TTC n’est possible que si le taux de TVA utilisé dans le devis est unique. Dans le cas d'une saisie de devis, avec multiples TVA, seule la saisie de l’acompte en % est disponible.
                                                </div>

                                                <p>
                                                    ❐ Une fois la saisie terminée, l’application va générer automatiquement une facture d’acompte en mode brouillon, modifiable si besoin que vous pourrez valider comme une facture.
                                                </p>
                                                
                                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm italic my-4">
                                                    Vous pouvez créer autant de de factures d’acompte que vous le souhaitez dans la limite des 100% de transformation du montant total du devis. Pour cela, vous devez suivre la même procédure : repartir de votre devis et créer une nouvelle facture d’acompte.
                                                </div>

                                                <p>
                                                    ❐ Pour générer la facture finale d'acompte (facture de solde), repartez à nouveau du devis initial et cliquez sur le bouton “Facturer ce devis”
                                                </p>
                                                <Screenshot src={`${IMG_BASE}bouton%20facturer%20ce%20devis.png`} alt="Bouton facturer ce devis" />
                                                
                                                <p>
                                                    Les acomptes précédemment saisis et validés seront automatiquement reportés sur la facture de solde et déduit du montant total pour ne facturer que le "reste à payer".
                                                </p>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">h) créer une remise sur une facture</h4>
                                                    <p>
                                                        ❐ Vous avez la possibilité d’ajouter une remise sur votre facture. Pour cela, dans l’onglet liste de vos factures, cliquez sur le bouton nouveau
                                                    </p>
                                                    <p>
                                                        Dans la colonne ligne de factures, ajoutez un produit, puis ajoutez votre remise en %.
                                                    </p>
                                                </div>
                                                
                                                <p>Prenons l’ensemble d’un café comme produit auquel vous souhaitez ajouter 10% de remise.</p>
                                                <p>Ajoutez votre produit dans la case référence produit, la description, unité, TVA adéquate.</p>
                                                <p>Écrivez 10 dans la colonne remise en % puis cliquez sur le bouton <Badge color="teal">Valider</Badge></p>
                                                <p>Vous atterrissez dans le détail de la facture.</p>
                                                
                                                <p>
                                                    Cliquez sur le bouton “imprimer” pour visualiser la remise sur votre facture. La remise en euros est bien appliquée sur votre facture mais n’apparaît pas en colonne dans la ligne de facture.
                                                </p>
                                                <Screenshot src={`${IMG_BASE}ajout%20paiement%20facture.png`} alt="Ajout paiement" />
                                                
                                                <p>
                                                    Pour afficher la colonne remise, vous devez effectuer le paramètre suivant. Cliquez sur le bouton actions puis sur le bouton option d’impression
                                                </p>
                                                <Screenshot src={`${IMG_BASE}d%c3%a9tail%20facture.png`} alt="Détail facture" />
                                                
                                                <p>
                                                    Une nouvelle fenêtre s’ouvre, déroulez jusqu’à tomber sur la ligne afficher la colonne remise puis activez-la.
                                                </p>
                                                <p>
                                                    Cliquez à nouveau sur le bouton imprimer pour visualiser la nouvelle colonne. Vous avez également la possibilité d’activer cet affichage depuis le menu tous les paramètres {">>"} documents {">>"} factures {">>"} options
                                                </p>
                                                <Screenshot src={`${IMG_START_BASE}corps%20de%20page%20-%20documents%20de%20vente.png`} alt="Corps de page" />
                                            </>
                                        )}

                                        {/* CHAPITRE 5 : SUIVI DE TRAVAUX */}
                                        {chapter.id === 5 && (
                                            <>
                                                <div className="pl-4 border-l-4 border-myu-teal">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">a) suivi de travaux : facture de situation</h4>
                                                    <p>
                                                        ❐ Une facture de situation (ou également appelée facture d’avancement ou facture intermédiaire) est un document comptable utilisé majoritairement dans le secteur de l’artisanat et du BTP pour facturer au fur à mesure l’avancement des travaux ou projets long terme. Elle est établie souvent à la fin de chaque mois ou à une date spécifique.
                                                    </p>
                                                    <p className="mt-4">
                                                        ❐ Pour créer une facture de situation, vous devez créer votre devis en amont. Une fois votre devis créé, cliquez sur créer un document puis facture de situation.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/5/creer%20une%20facture%20de%20situation.png" alt="facture de situation" />
                                                
                                                <p className="mt-6">
                                                    Une nouvelle fenêtre pour créer votre facture de situation. Vérifiez l’ensemble des lignes de facture, quantité, prix, TVA, remise puis cliquer sur le bouton <Badge color="teal">Valider</Badge>.
                                                </p>
                                            </>
                                        )}

                                        {/* CHAPITRE 6 : BONS DE COMMANDE, BONS DE LIVRAISON ET RÉCEPTION */}
                                        {chapter.id === 6 && (
                                            <>
                                                <div className="pl-4 border-l-4 border-myu-teal">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">a) créer un bon de commande</h4>
                                                    <p>
                                                        Pour créer un bon de commande, cliquez sur CRM/Ventes puis Documents - Bons de commande.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/creer%20un%20BC.png" alt="créer un BC" />
                                                
                                                <p className="mt-6">
                                                    ❐ Commencez par remplir le nom de votre client. Vous pouvez sélectionner un client via le menu déroulant s’il figure déjà dans votre liste de client ou sinon en créer un nouveau en cliquant sur le symbole +
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Continuez en sélectionnant le type de règlement, le mode de règlement et la date d'émission du bon de commande et la date limite de validité. Vous pouvez également renseigner la date de livraison.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Complétez l’objet du bon de commande avec le poids des articles et poids du colis
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/ajout%20BC%20partie%201.png" alt="ajout BC 1/2" />
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/ajout%20BC%20partie%202.png" alt="ajout BC 2/2" />
                                                
                                                <p className="mt-6">
                                                    ❐ Ajouter ensuite les lignes de votre commande avec la référence produit, la description correspondante, l’unité, la quantité, prix unitaire, TVA, remise en % s’il y en a et le total.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Terminez par compléter l’agence et écrivez une note si besoin d’ajouter un commentaire particulier. Cliquez sur le bouton <Badge color="teal">Valider</Badge> pour sauvegarder.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Une fois que vous aurez terminé, vous pouvez retrouver votre bon de commande dans la liste des bons de commande
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/liste%20des%20bons%20de%20commande.png" alt="liste des bons de commande" />
                                                
                                                <p className="mt-6">
                                                    ❐ Tout comme la liste des devis et factures, vous pouvez avoir deux modes de visualisation : un mode simple et un mode avancé.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Cliquez sur la colonne référence de votre bon de commande pour obtenir le détail
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/liste%20des%20bons%20de%20commande%20client%202.png" alt="liste des bons de commande client" />
                                                
                                                <p className="mt-6">
                                                    ❐ Pour procéder à des modifications, impressions ou copies de bons de commandes, suppressions, cliquez sur le bouton “Voir”.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/bouton%20voir%20BC.png" alt="bouton voir" />
                                                
                                                <p className="mt-6">
                                                    ❐ Si vous souhaitez créer un nouveau bon de commande, cliquez sur le bouton <Badge color="teal">Nouveau</Badge>
                                                </p>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">b) créer un bon de commande à partir d’un devis</h4>
                                                    <p>
                                                        ❐ Si vous avez préalablement créé un devis, vous avez la possibilité de générer un bon de commande. Cliquez sur le menu liste de vos devis
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/documents%20-%20liste%20devis.png" alt="liste des devis" />
                                                
                                                <p className="mt-6">
                                                    ❐ Choisissez votre devis depuis la liste en cliquant sur sa référence. Arrivé sur votre devis, cliquez sur le bouton Créer un document puis créer un bon de commande client.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/fenetre%20creer%20un%20bon%20de%20commande%20client.png" alt="fenêtre créer un BC client" />
                                                
                                                <p className="mt-6">
                                                    ❐ Votre bon de commande reprendre l’adresse et nom du client, ainsi que références produits mentionnés dans votre devis initial. Procédez de la même manière qu’un bon de commande classique puis cliquez sur le bouton <Badge color="teal">Valider</Badge> pour enregistrer votre saisie.
                                                </p>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">c) créer un bon de livraison à partir d’un devis</h4>
                                                    <p>
                                                        ❐ Si vous avez préalablement créé un devis, vous avez la possibilité de générer un bon de livraison. Cliquez sur Documents / liste de vos devis puis sur créer un document et enfin créer un bon de livraison.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/BL%20%c3%a0%20partir%20devis.png" alt="créer BL à partir d’un devis" />
                                                
                                                <p className="mt-6">
                                                    ❐ Votre bon de livraison rattaché à votre devis reprend le nom de votre client. Compléter les autres champs tels le mode de règlement, objet, poids des articles. Si le nom de votre client n’est pas déjà pré-rempli, vous pouvez soit le rechercher via la loupe ou le créer à partir du symbole +.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/ajout%20bon%20de%20livraison.png" alt="ajout bon de livraison" />
                                                
                                                <p className="mt-6">
                                                    ❐ Puis renseignez les lignes de bons de livraison en complétant la référence produit, la description correspondante, l’unité, la quantité, le prix unitaire, la remise si besoin.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/ligne%20bons%20de%20livraison.png" alt="lignes bons de livraison" />
                                                
                                                <p className="mt-6">
                                                    ❐ Enfin vous pouvez renseigner la catégorie divers avec votre agence et ajouter une note avec vos indemnités en cas de retard de paiement. Cliquez sur le bouton <Badge color="teal">Valider</Badge> pour enregistrer votre saisie.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/divers%20bons%20de%20livraison.png" alt="divers bons de livraison" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">d) créer un bon de livraison à partir d’un bon de commande</h4>
                                                    <p>
                                                        ❐ Si vous avez préalablement créé un bon de commande, vous avez la possibilité de générer un bon de livraison. Cliquez sur Documents / bons de commande, cliquez sur la référence du bon de commande à partir duquel vous souhaitez créer votre bon de livraison puis cliquez sur créer un document/ créer un bon de livraison.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/BL%20%c3%a0%20partir%20BC.png" alt="bon de livraison à partir d’un bon de commande" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">e) créer un bon de commande fournisseur</h4>
                                                </div>
                                                <InteractiveNote type="info" title="À retenir">
                                                    la création d’un bon de commande fournisseur est disponible uniquement dans l’offre Performance avec la gestion des stocks.
                                                </InteractiveNote>
                                                <p className="mt-6">
                                                    ❐ Pour créer votre bon de commande fournisseur, vous devrez passer par la transformation via un devis. Pour cela, cliquez sur le devis correspondant au bon de commande fournisseur que vous souhaitez créer.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/6/BC%20fournisseur%20partie%201.png" alt="ajout bon de commande fournisseur" />
                                                
                                                <p className="mt-6">
                                                    ❐ Complétez le nom de votre fournisseur soit directement depuis le menu déroulant ou sinon en le créant avec le symbole +
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Choisissez le type et mode de règlement, ainsi que la date d’émission du bon de commande fournisseur et sa date de validité. Vous pouvez également ajouter la date de livraison si vous l’avez.
                                                </p>
                                            </>
                                        )}
                                        
                                        {/* CHAPITRE 7 : SUIVI DES RÈGLEMENTS */}
                                        {chapter.id === 7 && (
                                            <>
                                                <div className="pl-4 border-l-4 border-myu-teal">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">a) Créer un paiement à partir d’une facture</h4>
                                                    <p>
                                                        ❐ Si vous avez déjà généré une facture, vous pouvez générer un paiement à partir de celle-ci. Allez dans votre accès rapide (en haut à droite de votre écran) sur mes factures puis cliquez sur la référence de facture sur où vous souhaitez ajouter un paiement.
                                                    </p>
                                                    <p className="mt-4">
                                                        Prenons le cas d’une facture FA251100017 et cliquez sur ajouter un paiement, à gauche de l’écran.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/exemple%20facture%20ajout%20paiement.png" alt="exemple facture ajout paiement" />
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/ajouter%20un%20paiement.png" alt="ajouter un paiement" />
                                                
                                                <p className="mt-6">
                                                    ❐ L’origine et le numéro de la facture sont repris automatiquement ainsi que le montant. Ajoutez la date de paiement à partir du calendrier, le mode règlement choisi (prélèvement, carte bleue, chèque, traite, espèces virement), la référence. Si vous le souhaitez, vous pouvez ajouter une note. Cliquez sur le bouton <Badge color="teal">Valider</Badge>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/ajout%20paiement%20fenetre.png" alt="ajout paiement fenêtre" />
                                                
                                                <p className="mt-6">
                                                    ❐ Une fois validé, le statut de paiement de votre facture est actualisé.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Si vous cliquez sur le numéro de facture, à l’origine de l’ajout du paiement, vous pourrez atterrir sur le détail du paiement
                                                </p>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">b) Créer un paiement à partir de l’onglet liste de vos paiements</h4>
                                                    <p>
                                                        ❐ Vous avez également la possibilité de créer un paiement depuis votre liste de paiement.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/menu%20r%c3%a8glement.png" alt="menu règlement" />
                                                
                                                <p className="mt-6">
                                                    Cliquer sur le bouton <Badge color="teal">+ Nouveau</Badge> pour ajouter un paiement. Remplissez les différents champs puis cliquez sur le bouton <Badge color="teal">Valider</Badge>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/liste%20des%20paiements.png" alt="liste des paiements" />
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/ajout%20d'un%20paiement%202.png" alt="ajout d'un paiement 2" />
                                                
                                                <p className="mt-6">
                                                    ❐ Vous avez la possibilité d’exporter au format CSV les ajouts de paiements en cliquant sur le bouton <Badge color="gray">Exporter</Badge>.
                                                </p>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">c) consulter la liste des impayés</h4>
                                                    <p>
                                                        ❐ Chaque facture peut être annotée d’un statut pour assurer son suivi : à traiter et remise. Lorsque la date de règlement est échue, la facture se met en sur le statut <Badge color="red">Remise : Retard</Badge>.
                                                    </p>
                                                    <p className="mt-4">
                                                        Pour pouvoir accéder à cette liste, allez dans l’onglet règlement /liste des impayés.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/r%c3%a8glements%20-liste%20impay%c3%a9s.png" alt="liste des impayés" />
                                                
                                                <p className="mt-6">
                                                    Tout en bas de votre liste, vous trouverez les sommes et moyennes totales des impayés en cours en H.T et TTC. Cet export des impayés vous servira à mieux suivre et gérer vos relances.
                                                </p>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">d) créer une relance</h4>
                                                    <p>
                                                        ❐ Pour créer une relance de factures, allez sur l’onglet règlement et cliquez sur le bouton “liste des relances”. Vos impayés apparaîtront dans cette fenêtre.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/r%c3%a8glement%20-%20liste%20des%20relances.png" alt="liste des relances" />
                                                
                                                <p className="mt-6">
                                                    ❐ L’application liste automatiquement les factures en retard par client et vous permet d'envoyer un email de relance groupé, en cliquant sur la case à gauche de la colonne facture. Vous pouvez aussi relancer tous vos clients en retard d'un coup.
                                                </p>
                                                <p className="mt-4">
                                                    Juste à côté se trouve un bouton <Badge color="teal">Création des relances</Badge> pour envoyer directement une relance avec un modèle établi.
                                                </p>
                                                <p className="mt-4">
                                                    Pour organiser vos différentes relances, vous pouvez également les archiver si besoin avec le bouton <Badge color="teal">Archiver</Badge>.
                                                </p>
                                                <p className="mt-4">
                                                    Enfin, vous pouvez supprimer une relance lorsque vous n’en avez plus besoin avec le bouton <Badge color="red">Supprimer</Badge>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/liste%20des%20relances.png" alt="liste des relances" />
                                                
                                                <p className="mt-6">
                                                    ❐ Vous pouvez également personnaliser vos relances et créer des modèles de relance en cliquant sur le bouton <Badge color="teal">Gestion des modèles de relances</Badge>.
                                                </p>
                                                <p className="mt-4">
                                                    Vous arrivez sur cette fenêtre qui répertorie tous les modèles créés. Cliquez sur le bouton <Badge color="teal">+ Nouveau</Badge> pour créer un nouveau modèle.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/ajout%20modele%20relance.png" alt="ajout d’un modèle de relance" />
                                                
                                                <ul className="list-disc pl-8 mt-6 space-y-2">
                                                    <li><strong>Niveau :</strong> vous pouvez choisir le type de relance que vous réalisez → soit nouvelle si c’est la première fois, 1ère relance, 2e relance</li>
                                                    <li><strong>Sujet :</strong> il s’agit de l’objet de votre email qui mettra tout de suite en lumière le contenu de votre relance à votre client.</li>
                                                    <li><strong>Contenu de l’email :</strong> Vous pouvez personnaliser votre modèle de relances avec l’ajout de champs dynamiques. Cliquez sur comment ça marche pour les faire apparaître Les champs dynamiques sont mentionnés juste ci-après. Ils peuvent être utilisés dans les objets d’email de relance et également dans le corps d’email.</li>
                                                </ul>
                                                
                                                <InteractiveNote type="info" title="Note">
                                                    Dans votre email de relance, vous pouvez ajouter une note tout à la fin, si vous avez des remarques ou commentaires à faire remonter.
                                                </InteractiveNote>

                                                <div className="overflow-x-auto mt-6">
                                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                                        <thead>
                                                            <tr className="bg-gray-50 border-b border-gray-200">
                                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-200">
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[CREE_LE]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par la date et heure de création de l'élément</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[MISE_A_JOUR_LE]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par la date et heure de mise à jour de l'élément</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[NOM_PRENOM]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par le nom du client (ex: Mr Dubois Paul)</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[ENTREPRISE]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par le nom de l'entreprise (ex: Airbus)</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[DATE]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par la date (ex: 31/03/2023)</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[REFERENCE]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par la référence</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[OBJET]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par l'objet</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[TOTAL_HT]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par le total HT</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[TOTAL_TTC]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par le total TTC</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[SOLDE]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par le solde(restant à payer)</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[ECHEANCE]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par la date d'échéance de la facture</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[CIVILITE]</td>
                                                                <td className="px-6 py-4 text-sm text-gray-500">Sera remplacé par la civilité du client (ex: M.)</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <p className="mt-6">
                                                    Cliquez sur le bouton <Badge color="teal">Valider</Badge> pour enregistrer votre email. Pour revenir en arrière, cliquez sur le bouton “annuler”.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Une fois votre email rédigé, vous le retrouvez dans la liste des modèles; en sélectionnant sur l’un des modèles avec le bouton et les … , vous disposez de plusieurs options : obtenir un aperçu du modèle, modifier le modèle, copier le modèle, archiver le modèle ou encore supprimer le modèle.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/option%20modeles%20de%20relance.png" alt="options modèle de relance" />
                                                
                                                <p className="mt-6">
                                                    Tout en bas de l’écran s’affiche de nouveaux boutons
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Pour revenir à la liste des relances, cliquez sur le bouton … en dessous du bouton Nouveau
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/7/bouton%20...%20liste%20relance.png" alt="bouton liste de relance" />
                                            </>
                                        )}

                                        {/* CHAPITRE 8 : CRM INTÉGRÉ */}
                                        {chapter.id === 8 && (
                                            <>
                                                <p className="text-lg text-gray-800 font-medium mb-8">Au sein de l’offre MyU Gestion Business, vous avez la possibilité de piloter votre activité commerciale en suivant de près vos prospects à chaque étape de votre cycle de vente.</p>
                                                <p className="text-lg text-gray-800 font-medium mb-8">Si vous avez déjà des prospects, vous avez la possibilité de les importer. (cf. chapitres Paramètres de base)</p>
                                                <p className="text-lg text-gray-800 font-medium mb-8">Pour cela, vous allez devoir commencer par créer une opportunité.</p>
                                                
                                                <div className="pl-4 border-l-4 border-myu-teal mt-8">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">a) créer une opportunité</h4>
                                                    <p>
                                                        ❐ Accédez au module CRM/Vente depuis la page d’accueil puis Ventes et cliquez sur l’onglet “opportunités”.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/menu%20vente.png" alt="menu vente" />
                                                
                                                <p className="mt-6">
                                                    ❐ Vous arrivez sur la liste des opportunité avec 4 colonnes qui suivent les 4 premières étapes de votre cycle de vente. La création de l'opportunité est le point de départ de votre suivi commercial. Elle formalise l'intention de transformer un prospect en client.
                                                </p>
                                                
                                                <ul className="list-disc pl-8 mt-6 space-y-2">
                                                    <li><strong>Nouvelle :</strong> symbolise la création de l’opportunité en étant le plus précis possible : nom du projet avec nom de l’entreprise. Pour créer une nouvelle opportunité,cliquez sur le bouton <Badge color="teal">Nouvelle opportunité</Badge></li>
                                                    <li><strong>Contact :</strong> symbolise l’étape où une première interaction significative a eu lieu avec le prospect (appel téléphonique/visio, rdv découverte)</li>
                                                    <li><strong>Proposition :</strong> symbolise l’étape où une proposition commerciale officiel (devis, bon de commande) est soumise au prospect</li>
                                                    <li><strong>Négociation :</strong> symbolise l’étape où votre prospect a réagi favorablement à votre proposition et souhaite des ajustements (délais, périmètres, prix)</li>
                                                </ul>

                                                <p className="mt-6">
                                                    ❐ En cliquant sur le bouton <Badge color="teal">Mes opportunités</Badge>, vous pouvez apercevoir les opportunités que vous avez créées au sein de l’application.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/tableau%20de%20bord%20opportunit%c3%a9s.png" alt="tableau de bord opportunités" />
                                                
                                                <p className="mt-6">
                                                    Nous allons voir comment créer une nouvelle opportunité. Cliquez sur le bouton <Badge color="teal">Nouvelle opportunité</Badge>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/bouton%20Nouvelle%20opportunit%c3%a9%20.png" alt="bouton nouvelle opportunité" />
                                                
                                                <p className="mt-6">
                                                    ❐ Remplissez les champs ci après :
                                                </p>
                                                <ul className="list-disc pl-8 mt-4 space-y-2">
                                                    <li><strong>le titre</strong> de l’opportunité (soyez le plus précis possible ex : nom du projet avec le nom de l’entreprise)</li>
                                                    <li><strong>le nom</strong> de votre contact à sélectionner depuis le menu déroulant ou à créer en cliquant sur le bouton + ou à rechercher depuis la loupe</li>
                                                    <li><strong>l’étape</strong> de votre opportunité (nouvelle, contact, proposition, négociation, réussite, perdue),</li>
                                                    <li><strong>le montant</strong> de l’opportunité,</li>
                                                    <li><strong>la probabilité de réussite</strong> (pourcentage que vous estimez pour la réussite de conclusion de l’opportunité)</li>
                                                    <li><strong>l'origine</strong> de l’opportunité : email, chat, email, inscription, réseaux sociaux, téléphone</li>
                                                </ul>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/fenetre%20nouvelle%20opportunit%c3%a9.png" alt="fenêtre nouvelle opportunité" />
                                                
                                                <p className="mt-6">
                                                    Puis cliquez sur le bouton <Badge color="teal">Valider</Badge> pour enregistrer votre saisie.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/fenetre%20nouvelle%20opportunit%c3%a9%202.png" alt="fenêtre nouvelle opportunité 2" />
                                                
                                                <p className="mt-6">
                                                    ❐ En cliquant sur le bouton <strong>+</strong> sur la ligne <strong>contact</strong>, une nouvelle fenêtre apparaît. Choisissez s’il s’agit d’un prospect ou client et le <strong>type de tiers</strong> correspondant: professionnel, particulier, collectivité, autre puis renseignez <strong>le nom du contact</strong>. Cliquez sur le bouton <Badge color="teal">Valider</Badge> pour enregistrer votre nouveau contact.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/creer%20nouveau%20contact.png" alt="créer un nouveau contact" />
                                                
                                                <p className="mt-6">
                                                    ❐ En cliquant sur le bouton <strong>+</strong> sur la ligne <strong>produit</strong>, vous allez pouvoir sélectionner un produit à rattacher à votre nouvelle opportunité.
                                                </p>
                                                
                                                <ul className="list-disc pl-8 mt-4 space-y-2">
                                                    <li><strong>Référence :</strong> commencez par indiquer la référence de votre produit, le nom et la description de la référence</li>
                                                    <li><strong>Nom :</strong> puis indiquez le nom de votre produit rattaché à votre opportunité</li>
                                                    <li><strong>Description :</strong> ajoutez une description complète votre produit</li>
                                                </ul>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/s%c3%a9lection%20nouveau%20produit.png" alt="sélection d’un produit" />
                                                
                                                <ul className="list-disc pl-8 mt-6 space-y-2">
                                                    <li><strong>marque :</strong> vous pouvez sélectionner la marque de votre produit depuis le menu déroulant ou en ajouter une via le bouton +</li>
                                                    <li><strong>garantie :</strong> sélectionner la garantie adaptée à votre produit</li>
                                                    <li><strong>EAN :</strong> constitue une suite unique de chiffres qui identifie un objet selon un système européen (EAN signifie « European Article Numbering). Dans les magasins, ces chiffres se retrouvent sur les codes-barres.</li>
                                                </ul>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/s%c3%a9lection%20nouveau%20produit%204.png" alt="sélection de produit 4" />
                                                
                                                <p className="mt-6">
                                                    Si vous souhaitez ajouter une marque non répertoriée dans le menu déroulant, cliquez sur le bouton <strong>+</strong>. Inscrivez le nom de la marque dans l’encart <strong>valeur</strong> puis cliquez sur le bouton <Badge color="teal">Valider</Badge>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/Ajout%20marques.png" alt="ajout marque" />
                                                
                                                <p className="mt-6">
                                                    ❐ Vous avez également d’indiquer si votre produit peut bénéficier ou non d’une remise avec le bouton à activer/désactiver
                                                </p>
                                                <p className="mt-4">
                                                    ❐ En continuant de dérouler, vous avez la possibilité de télécharger une image depuis votre ordinateur pour illustrer votre produit.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/visuel%20produit.png" alt="visuel produit" />
                                                
                                                <p className="mt-6">
                                                    ❐ Vous pouvez également ajouter le prix de vente de votre produit avec :
                                                </p>
                                                <ul className="list-disc pl-8 mt-4 space-y-2">
                                                    <li><strong>le prix de vente HT</strong> (que vous pouvez calculer en cliquant sur la petite calculatrice à partir du prix TTC)</li>
                                                    <li><strong>le prix de revient HT</strong> (même procédure pour calculer le prix de revient à partir du prix TTC)</li>
                                                    <li><strong>la TVA par défaut</strong></li>
                                                    <li><strong>la quantité à ajuster</strong> avec les flèches de haut en bas</li>
                                                </ul>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/d%c3%a9finition%20du%20produit%20de%20vente%20produit.png" alt="définition du prix de vente" />
                                                
                                                <p className="mt-6">
                                                    ❐ Vous pouvez également ajouter les mesures de votre produit si vous les avez. Cette information n’est toutefois pas obligatoire.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/produit%20mesure.png" alt="produit mesures" />
                                                
                                                <p className="mt-6">
                                                    ❐ Vous devez en revanche indiquer la <strong>catégorie de votre produit</strong> : bureaux, laboratoire, terrain. Si la catégorie de votre produit n’est pas indiquée dans le menu déroulant, vous pouvez en créer une nouvelle à partir du bouton <strong>+</strong>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/info%20compl%c3%a9mentaire%20produit.png" alt="informations complémentaires produit" />
                                                
                                                <p className="mt-6">
                                                    Voici la fenêtre qui apparaît lorsque vous cliquez sur le bouton <strong>+</strong> pour ajouter une nouvelle catégorie de produit. Cliquez sur le bouton <Badge color="teal">Valider</Badge> pour enregistrer votre saisie.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/cat%c3%a9gorie%20de%20produit.png" alt="catégorie de produit" />
                                                
                                                <p className="mt-6">
                                                    ❐ Ajoutez la <strong>catégorie de charge</strong> : achat, frais, heure puis le type de charges : laboratoire/essai, machine, personnel. Si votre catégorie de charge n’existe pas dans le menu déroulant, vous pouvez l’ajouter à l’aide du bouton <strong>+</strong>. Continuer sur <Badge color="teal">Valider</Badge>.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Une fois que vous avez terminé de compléter l’ensemble des caractéristiques de votre produit, vous pouvez ajouter une <strong>description</strong> puis cliquer sur le bouton <Badge color="teal">Valider</Badge>. Votre opportunité complète apparaît sur la page des opportunités.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Si vous souhaitez modifier la vue de votre fenêtre des opportunités, cliquez sur les trois petits points
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/cr%c3%a9er%20une%20opportunit%c3%a9.png" alt="créer une opportunité" />
                                                
                                                <p className="mt-6">
                                                    Puis cliquez sur la vue <strong>liste des opportunités</strong>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/liste%20vue%20opportunit%c3%a9s.png" alt="liste vue opportunités" />
                                                
                                                <p className="mt-6">
                                                    L’affichage en mode Kanban se transforme en liste. Choisissez le mode d’affichage qui vous convient le mieux.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/liste%20des%20opportunit%c3%a9s.png" alt="liste des opportunités" />
                                                
                                                <p className="mt-6">
                                                    Pour filtrer les vues, vous pouvez afficher vos opportunités du jour avec le filtre <strong>“aujourd'hui”</strong>, de la semaine en cliquant sur le bouton <strong>“cette semaine”</strong> et les opportunités du mois en cours avec le bouton <strong>“ce mois-ci”</strong>.
                                                </p>
                                                <p className="mt-4">
                                                    ❐ Pour personnaliser et ajuster les différentes étapes (renommer, ajouter de nouvelles opportunités), cliquez sur le bouton <strong>retour à la vue Kanban</strong> puis sur les trois petits points. Vous atterrissez à nouveau sur cet onglet et sélectionnez le bouton <strong>paramètres</strong>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/liste%20vue%20opportunit%c3%a9s%20(1).png" alt="liste vue opportunités" />
                                                
                                                <p className="mt-6">
                                                    Vous arrivez sur cette nouvelle page.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/param%c3%a8tres%20opportunit%c3%a9s.png" alt="paramètres opportunités" />
                                                
                                                <p className="mt-6">
                                                    Pour créer une nouvelle étape d’une opportunité, cliquez sur le bouton <Badge color="teal">+ Nouveau</Badge> puis indiquez le nom de la nouvelle étape dans la case <strong>valeur</strong>.
                                                </p>
                                                <p className="mt-4">
                                                    Si vous souhaitez que cette option soit ouverte, c’est-à-dire apparaître dans le tableau de bord des opportunités, activez la case <strong>option ouverte</strong>.
                                                </p>
                                                <p className="mt-4">
                                                    Puis finissez par le bouton <Badge color="teal">Valider</Badge>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/cr%c3%a9er%20nouvelle%20%c3%a9tape%20opportunit%c3%a9.png" alt="créer nouvelle étape opportunité" />
                                                
                                                <p className="mt-6">
                                                    ❐ Vous avez également la possibilité d’ajouter une origine d’opportunité pour mieux identifier sa provenance. Cliquez sur le bouton <Badge color="teal">+ Nouveau</Badge>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/origine%20opportunit%c3%a9.png" alt="origine opportunité" />
                                                
                                                <p className="mt-6">
                                                    Une nouvelle fenêtre s’affiche. Indiquez la <strong>valeur</strong>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/ajouter%20nouvelle%20origine%20opportunit%c3%a9.png" alt="ajouter nouvelle origine opportunité" />
                                                
                                                <p className="mt-6">
                                                    ❐ Vous pouvez également personnaliser les raisons d’échec d’une opportunité. Cliquez sur l’onglet ci-dessous puis sur le bouton <Badge color="teal">+ Nouveau</Badge>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/echec%20opportunit%c3%a9s.png" alt="échec opportunités" />
                                                
                                                <p className="mt-6">
                                                    ❐ Une nouvelle fenêtre s’ouvre. Indiquez la valeur de la raison de l’échec d’une opportunité. Cliquez sur le bouton <Badge color="teal">Valider</Badge> pour enregistrer les modifications. Une fois terminé, cliquez sur le bouton <strong>retour à la liste</strong>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/valeur%20de%20l'%c3%a9chec%20opportunit%c3%a9.png" alt="valeur echec opportunité" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">b) créer une action commerciale</h4>
                                                    <p>
                                                        ❐ Nous allons voir comment créer une action commerciale pour suivre votre cycle de vente. Sur l’ongle vente, cliquez sur sur <strong>actions commerciales</strong>.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/menu%20vente%20(1).png" alt="menu ventes" />
                                                
                                                <p className="mt-6">
                                                    ❐ Vous arrivez sur la liste des actions commerciales. Cliquez sur le bouton <Badge color="teal">+ Nouveau</Badge> pour commencer.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/liste%20des%20actions%20commerciales.png" alt="liste des actions commerciales" />
                                                
                                                <p className="mt-6">
                                                    ❐ Remplissez les champs suivants:
                                                </p>
                                                <ul className="list-disc pl-8 mt-4 space-y-2">
                                                    <li><strong>date:</strong> ajoutez la date du jour</li>
                                                    <li><strong>tiers :</strong> ajoutez le type de tiers → professionnel, particulier, collectivité, autre. Si vous souhaitez en ajouter, cliquez sur le bouton +</li>
                                                    <li><strong>responsable :</strong> ajoutez la personne en charge de l’action commerciale à réaliser</li>
                                                    <li><strong>intitulé :</strong> ajouter un intitulé pour nommer l’action commerciale (ex: nom entreprise)</li>
                                                    <li><strong>description :</strong> ajouter une description plus détaillée de l’action à mener</li>
                                                    <li><strong>statut :</strong> indiquez l’état d’avancement de l’action commerciale : à faire, annuler, en cours, finie</li>
                                                    <li><strong>type :</strong> choisissez le type d’action à mener → prospection et relance, promotion, communication, publicité</li>
                                                    <li><strong>conclusion :</strong> indiquez la conclusion apportée à l’action → à relancer pour une vente, hors cible, envoi de documentation avec relance, RDV planifié (téléphone ou visio) , refus vente, vente</li>
                                                    <li><strong>date limite :</strong> enfin indiquez une date limite</li>
                                                </ul>
                                                
                                                <p className="mt-6">
                                                    Puis une fois votre saisie terminée, cliquez sur le bouton <Badge color="teal">Valider</Badge>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/ajout%20d'une%20action%20commerciale.png" alt="ajout d’une action commerciale" />
                                                
                                                <p className="mt-6">
                                                    ❐ Si vous le souhaitez, vous pouvez configurer d’autres champs pour compléter votre action commerciale. Pour cela, cliquez sur le bouton <strong>configurer les champs</strong>. Pour activer tous les champs, cliquez sur <strong>tous</strong>. Vous pouvez activer ou désactiver les champs qui vous intéressent d’apparaître, cliquez sur l’onglet <strong>personnalisé</strong>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/champs%20configuration%20action%20commerciale.png" alt="configuration champs action commerciale" />
                                                
                                                <p className="mt-6">
                                                    ❐ Si vous souhaitez créer un champ qui n’existe pas, cliquez sur le bouton <strong>champs personnalisé</strong> puis sur le bouton <strong>ajouter un nouveau champ personnalisé</strong>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/ajouter%20un%20champ%20personnalis%c3%a9%20-%20action%20commerciale.png" alt="ajouter champ personnalisé" />
                                                
                                                <p className="mt-6">
                                                    Indiquez l’intitulé du champ et le type de champs adéquat : titre fixe, texte, texte avancé, texte long, nombre, adresse email, couleur, vrai/faux, date, date et heure, email, fichier,
                                                </p>
                                                <p className="mt-4">
                                                    puis cliquez sur valider pour enregistrer votre nouveau champ personnalisé.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/gestion%20champs%20personnalis%c3%a9.png" alt="gestion champs personnalisé" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">c) recherche d’entreprises</h4>
                                                    <p>
                                                        ❐ Enfin, pour créer de nouvelles opportunités, vous avez la possibilité de rechercher des entreprises de manière ciblée.
                                                    </p>
                                                    <p className="mt-4">
                                                        Pour cela, cliquez sur sur le menu <strong>Ventes</strong> dans le bandeau latéral gauche, puis sur <strong>recherche d'entreprise</strong>
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/menu%20vente%20(2).png" alt="menu ventes" />
                                                
                                                <p className="mt-6">
                                                    Pour affiner votre ciblage, vous pouvez définir vos critères de recherches :
                                                </p>
                                                <ul className="list-disc pl-8 mt-4 space-y-2">
                                                    <li>entreprises créés depuis</li>
                                                    <li>code postal</li>
                                                    <li>catégorie juridique</li>
                                                    <li>code APE</li>
                                                </ul>
                                                <p className="mt-4">
                                                    puis cliquez sur le bouton <Badge color="teal">Rechercher</Badge>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/recherche%20entreprise.png" alt="recherche d’entreprise" />
                                                
                                                <p className="mt-6">
                                                    Une liste d’entreprise apparaît sur la droite de votre écran.
                                                </p>
                                                <p className="mt-4">
                                                    Vous pouvez également sauvegarder une recherche en ajoutant le nom de votre recherche et en cliquant sur le bouton <Badge color="teal">Enregistrer</Badge>
                                                </p>

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">d) créer un événement dans son agenda</h4>
                                                    <p>
                                                        ❐ Pour pouvoir bloquer dans votre agenda une action significative avec l’un de vos prospects, vous avez la possibilité de créer un événement dans votre agenda.
                                                    </p>
                                                    <p className="mt-4">
                                                        Pour cela, cliquez sur CRM Ventes puis sur <strong>calendrier et agenda</strong>
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/calendrier%20-%20agenda.png" alt="calendrier agenda" />
                                                
                                                <p className="mt-6">
                                                    Un calendrier avec vue hebdomadaire apparaît. Vous avez la possibilité de la modifier en cliquant sur les différents boutons, tout à droite de votre agenda.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/vue%20agenda.png" alt="vue agenda" />
                                                
                                                <p className="mt-6">
                                                    ❐ Puis cliquez sur sur le bouton <Badge color="teal">+ Créer un événement</Badge>
                                                </p>
                                                <p className="mt-4">
                                                    Une nouvelle fenêtre apparaît :
                                                </p>
                                                <ul className="list-disc pl-8 mt-4 space-y-2">
                                                    <li><strong>agenda :</strong> vous pouvez sélectionner un agenda depuis le menu déroulant ou ajouter un créer en cliquant sur le bouton <strong>+</strong></li>
                                                </ul>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/s%c3%a9lectionner%20un%20agenda.png" alt="sélection d’un agenda" />
                                                
                                                <p className="mt-6">
                                                    Pour sélectionner un agenda, ajouter un nom et une description (si nécessaire) et la couleur reliée à cet agenda. Puis cliquer sur le bouton <Badge color="teal">Valider</Badge> pour finaliser votre saisie.
                                                </p>
                                                
                                                <ul className="list-disc pl-8 mt-6 space-y-2">
                                                    <li><strong>tiers :</strong> indiquez ici le type de tiers de votre prospect (professionnel, particulier, collectivité, autre) depuis le menu déroulant. Si vous souhaitez en ajouter un nouveau,cliquez sur le bouton <strong>+/</strong> qui vous renvoie à la fenêtre de création d’un tiers.</li>
                                                    <li><strong>responsable :</strong> vous pouvez sélectionner la personne chargée de la création d’un événement depuis le menu déroulant</li>
                                                    <li><strong>statut :</strong> indique si votre événement est confirmé par votre prospect ou annulé</li>
                                                    <li><strong>type :</strong> indique le type d’interaction prévue avec votre prospect → appel, courrier, email, téléphone, visite</li>
                                                    <li><strong>intitulé :</strong> sert à donner un titre précis à votre événement. Ce champ est obligatoirement à renseigner pour créer votre événement.</li>
                                                </ul>
                                                
                                                <p className="mt-6">
                                                    Cliquez sur le bouton <Badge color="teal">Valider</Badge> pour valider la création de votre événement.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/fenetre%20cr%c3%a9er%20un%20%c3%a9venement.png" alt="fenêtre créer un événement" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">e) paramétrer votre agenda</h4>
                                                    <p>
                                                        ❐ Vous avez la possibilité de configurer votre agenda si vous le souhaitez. Cliquez sur le bouton <strong>Gérer les agendas</strong>.
                                                    </p>
                                                    <p className="mt-4">
                                                        Une nouvelle fenêtre apparaît avec la liste de vos agendas existants et le nom de son propriétaire . Pour éditer un agenda, cliquez sur le bouton <Badge color="teal">Voir</Badge>.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/gestion%20agenda.png" alt="gestion agenda" />
                                                
                                                <p className="mt-6">
                                                    La fenêtre présentation d’un agenda s’ouvre. Cliquez ensuite sur le bouton <strong>modifier</strong>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/presentation%20d'un%20agenda.png" alt="présentation d’un agenda" />
                                                
                                                <p className="mt-6">
                                                    La fenêtre d’édition d’un agenda s’ouvre. Inscrivez le nom de l’agenda, sa description et choisissez la couleur que vous souhaitez. Puis cliquez sur le bouton <Badge color="teal">Valider</Badge>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/%c3%a9dition%20d'un%20agenda.png" alt="édition d’un agenda" />
                                                
                                                <p className="mt-6">
                                                    ❐ Si vous souhaitez créer un nouvel agenda, cliquez sur le bouton <Badge color="gray">Nouveau</Badge> Renseignez le bouton
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/8/ajout%20agenda.png" alt="ajouter un agenda" />
                                            </>
                                        )}
                                        {/* CHAPITRE 9 : COMPTE PRO ET CARTE DE PAIEMENT */}
                                        {chapter.id === 9 && (
                                            <>
                                                <div className="pl-4 border-l-4 border-myu-teal mt-8">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">a) Qu'est-ce que MyU Compte Pro ?</h4>
                                                    <p>
                                                        ❐ Avec MyU Compte Pro, gérez votre activité et vos finances depuis un seul espace.
                                                        Inclus dans toutes les offres MyU Gestion, il relie votre solution de facturation, vos flux bancaires et votre comptabilité au sein d’un environnement unique, fluide et automatisé.
                                                    </p>
                                                    <p className="mt-4">
                                                        Vous n'avez plus besoin de multiplier les outils : vos encaissements, paiements et suivis de trésorerie s’effectuent directement depuis votre interface MyU.
                                                    </p>
                                                    <p className="mt-4">
                                                        Simple, rapide et 100 % intégré, MyU Compte Pro devient le centre financier de votre entreprise - sans surcoût, sans complexité et sans compromis sur la sécurité.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/compte%20pro.png" alt="Compte pro" />
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/compte%20pro%202.png" alt="Compte pro 2" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">b) ouvrir son Compte Pro MyUnisoft</h4>
                                                    <p>
                                                        ❐ Connectez-vous sur MyUnisoft Gestion Financière, ouvrez le menu en haut à gauche et cliquez sur l'icône Compte Pro.
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/compte%20pro.webp" alt="icône compte pro" />

                                                <p className="mt-6">
                                                    Si vous n'avez pas encore de Compte Pro, la page suivante s'ouvre automatiquement.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/ouverture%20compte%20pro%20(1).webp" alt="ouverture compte pro" />

                                                <p className="mt-6">
                                                    Il vous suffit de 4 petites étapes pour créer votre compte pro. Cliquez sur le bouton <strong>“Suivant”</strong> pour poursuivre l’ouverture. Nous allons voir ensemble comment procéder.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/ouverture%20compro%20en%204%20%c3%a9tapes%20(1).webp" alt="ouverture compte pro en 4 étapes" />

                                                <p className="mt-6">
                                                    Commencez par renseigner votre adresse email puis cliquez sur sur le bouton <strong>“Suivant”</strong>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/immatriculation%20compte%20pro%20(1).webp" alt="immatriculation compte pro" />

                                                <p className="mt-6">
                                                    Une fois que vous avez renseigné votre adresse email, renseignez les informations de votre organisation : numéro SIRENE, adresse puis cliquez sur le bouton <strong>suivant</strong>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/coordonn%c3%a9es%20entreprise%20-%20compte%20pro%20(1).webp" alt="coordonnées entreprise compte pro" />

                                                <p className="mt-6">
                                                    Complétez l’activité de votre organisation parmi la liste déroulante puis cliquez sur le bouton <strong>suivant</strong>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/liste%20d%c3%a9roulante%20(1).png" alt="liste déroulante" />
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/Finaliser%20(1).png" alt="Finaliser" />

                                                <p className="mt-6">
                                                    Vous avez presque terminé de finaliser l'ouverture de votre compte pro. Munissez-vous de votre téléphone mobile pour poursuivre l’ouverture.
                                                </p>
                                                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl my-8">
                                                    <p className="text-amber-900 font-medium">⚠️ Pensez à bien suivre et compléter chaque étape pour valider l’ouverture de votre compte pro. En cas d’erreur, il est possible de relancer le processus de vérification avec ce lien :</p>
                                                </div>

                                                <p className="mt-6">
                                                    Une fois votre paramétrage terminé sur votre téléphone, la fenêtre ci-dessous indique que la création de votre Compte Pro MyUnisoft a été bien effectuée.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/confirmation%20ouverture%20compte%20pro%20(1).webp" alt="confirmation ouverture compte pro" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-12">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">c) ajouter une nouvelle carte de paiement</h4>
                                                    <p>
                                                        Pour ajouter une nouvelle carte de paiement, cliquez sur le menu <strong>cartes</strong> puis sur le bouton <strong>nouveau</strong>
                                                    </p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/compte%20pro%20nouvelle%20carte%20(1).png" alt="compte pro nouvelle carte" />

                                                <p className="mt-6">
                                                    puis sélectionnez la carte par défaut et cliquez sur le bouton <strong>“suivant“</strong>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/ajout%20nouvelle%20carte%20(1).png" alt="ajout nouvelle carte" />

                                                <p className="mt-6">
                                                    puis sélectionnez le format virtuel et physique et cliquez sur le bouton <strong>“suivant”</strong>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/s%c3%a9lection%20format%20carte%20compte%20pro%20(1).png" alt="sélection format carte" />

                                                <p className="mt-6">
                                                    Une fois votre carte sélectionnée, vous allez pouvoir choisir vos paramètres.
                                                </p>
                                                <p className="mt-4">
                                                    Commencez par ajouter un nom à votre carte, puis vous pouvez configurer votre limite de dépense en déplaçant le curseur vers la gauche.
                                                </p>
                                                <p className="mt-4">
                                                    Vous pouvez aussi configurer le montant de votre limite dans l’encadré.
                                                </p>
                                                <p className="mt-4">
                                                    Enfin choisissez les options que vous souhaitez activer puis cliquez sur le bouton <strong>“suivant”</strong>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/param%c3%a8tres%20compte%20pro%20(1).png" alt="paramètres compte pro" />

                                                <p className="mt-6">
                                                    Vous allez pouvoir sélectionner le destinataire de votre carte. Cliquez ensuite sur le bouton <strong>“suivant.”</strong>
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/destinataire%20compte%20pro%20(1).png" alt="destinataire compte pro" />

                                                <p className="mt-6">
                                                    Confirmez votre adresse postale pour recevoir votre carte physique. Si vous souhaitez la changer, cliquez sur le bouton <strong>“modifier”</strong>.
                                                </p>
                                                <p className="mt-4">
                                                    Dès que c’est fait, cliquez sur le bouton <strong>“suivant”</strong>.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/adresse%20compte%20pro%20(1).png" alt="adresse compte pro" />

                                                <p className="mt-6">
                                                    Une notification apparaît à l’écran pour choisir votre code PIN. Sélectionnez l’option qui vous convient le mieux puis cliquez sur le bouton <strong>“continuer”</strong>.
                                                </p>
                                                <p className="mt-4">
                                                    Vous avez le choix entre définir votre propre code PIN ou avoir la possibilité de se voir attribuer un code PIN.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/choix%20code%20PIN%20compte%20pro%20(1).png" alt="choix code PIN compte pro" />

                                                <p className="mt-6">
                                                    Vous recevrez un lien par SMS sur votre smartphone. Cliquez sur ce lien pour confirmer votre commande.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/consultation%20telephone%20activation%20carte%20compte%20pro%20(1).png" alt="consultation smartphone activation carte" />

                                                <p className="mt-6">
                                                    Votre carte est bien configurée et apparaît dans votre espace.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/confirmation%20activation%20carte%20compte%20pro%20(1).png" alt="confirmation activation carte" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-20">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">d) ajouter un nouvel utilisateur</h4>
                                                    <p>Cliquez sur le menu <strong>membres</strong> puis sur le bouton <strong>“nouveau.”</strong></p>
                                                </div>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/ajouter%20un%20nouvel%20utilisateur%20-%20compte%20pro%20(1).png" alt="ajouter un nouvel utilisateur compte pro" />

                                                <p className="mt-8 font-medium text-gray-700">Une nouvelle fenêtre apparaît. Remplissez les différents champs pour créer votre nouvel utilisateur et cochez les autorisations que vous souhaitez activer.</p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/cr%c3%a9er%20nouvel%20utilisateur%20compte%20pro%20(1).png" alt="créer un nouvel utilisateur compte pro" />

                                                <p className="mt-6">
                                                    Vous recevez une notification pour consulter votre smartphone et ainsi, activer le lien de confirmation de votre demande.
                                                </p>
                                                <p className="mt-4">
                                                    Si vous ne recevez rien, cliquez sur le bouton “ vous n'avez pas reçu le SMS”.
                                                </p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/activation%20telephone%20nouvel%20utilisateur%20compte%20pro%20(1).png" alt="activation nouvel utilisateur compte pro" />

                                                <p className="mt-12 font-black text-lg text-gray-900 text-center italic">Votre nouvel utilisateur est configuré et ajouté à votre espace.</p>
                                                <Screenshot src="https://www2.myunisoft.fr/outils/o/MyUGFi/business/9/confirmation%20activation%20nouvel%20utilisateur%20compte%20pro%20(1).png" alt="confirmation activation nouvel utilisateur" />

                                                <div className="pl-4 border-l-4 border-myu-teal mt-20">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">e) Compte pro et rapprochement bancaire</h4>
                                                    <p>Dans cette vidéo, vous allez pouvoir apprendre comment rapprocher vos paiements reçus à vos factures.</p>
                                                    <div className="mt-6">
                                                        <a href="https://drive.google.com/file/d/1OllX0iHrvPp5pSUVsH8cCeqXDhtwTstd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-myu-teal font-bold hover:underline">
                                                            <ExternalLink size={18} /> Lien vidéo
                                                        </a>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        
                                        {/* MARK AS READ BUTTON */}
                                        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-end">
                                            <motion.button 
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => {
                                                    handleMarkAsRead(chapter.id);
                                                }}
                                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                                                    readChapters.has(chapter.id) 
                                                    ? 'bg-emerald-100 text-emerald-700 cursor-default shadow-none'
                                                    : 'bg-[#00c4b4] text-white shadow-lg hover:shadow-[#00c4b4]/30'
                                                }`}
                                            >
                                                {readChapters.has(chapter.id) ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </motion.button>
                                        </div>

                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
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
                                    <span className="truncate">{chapter.id}. {chapter.title}</span>
                                    {readChapters.has(chapter.id) && (
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${activeChapter === chapter.id ? 'bg-white/20' : 'bg-emerald-100 text-emerald-600'}`}>
                                            <Check size={12} />
                                        </div>
                                    )}
                                </button>
                            ))}
                            <button
                                onClick={() => {
                                    setActiveChapter(null);
                                    setTimeout(() => {
                                        const element = document.getElementById('quiz-section');
                                        if (element) {
                                            const headerOffset = 100;
                                            const elementPosition = element.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                            
                                            window.scrollTo({
                                                top: offsetPosition,
                                                behavior: "smooth"
                                            });
                                        }
                                    }, 100);
                                }}
                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group text-gray-600 hover:bg-gray-50`}
                            >
                                <span className="truncate">Auto évaluez vous !</span>
                            </button>
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
            
            <div className="mt-12 scroll-mt-28" id="quiz-section">
                <PageQuiz 
                    pageId="maitriser-business" 
                    title="Auto évaluez vous !" 
                    description="Testez vos connaissances pour valider le module Business." 
                />
            </div>
            
            <UpsellSection />

            {/* Toast Notification */}
            <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-500 z-[9999] ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
                <CheckCircle2 className="text-emerald-400" size={20} />
                <span className="font-medium">{toastMessage}</span>
            </div>
        </div>
    );
};
