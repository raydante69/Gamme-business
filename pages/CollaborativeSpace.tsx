
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Monitor, Layout, CreditCard, FolderOpen, MessageSquare, Info } from 'lucide-react';
import { Screenshot } from '../components/ui/Screenshot';
import { PageQuiz } from '../components/PageQuiz';
import { motion } from 'motion/react';

// Updated: Made children optional in the prop type definition to resolve the error where TypeScript 
// incorrectly identifies children as missing from the component's property type.
const FeatureItem = ({ icon: Icon, title, children, delay = 0 }: { icon: any, title: string, children?: React.ReactNode, delay?: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-myu-pink/10 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-myu-pink/10 to-myu-pink/5 rounded-2xl flex items-center justify-center text-myu-pink shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Icon size={28} />
            </div>
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-myu-pink transition-colors">{title}</h4>
                <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
            </div>
        </div>
    </motion.div>
);

export const CollaborativeSpace = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative"
    >
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-myu-pink/10 via-purple-500/5 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-slow"></div>
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-myu-teal/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.button 
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 font-medium bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-gray-100 hover:border-myu-teal cursor-pointer"
      >
        <ArrowLeft size={18} />
        Retour
      </motion.button>

      <div className="mb-16">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
        >
            <h1 className="text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6 tracking-tight flex items-center justify-center gap-4">
                <div className="p-4 bg-myu-pink/10 rounded-2xl">
                    <Users size={48} className="text-myu-pink" />
                </div>
                Espace collaboratif
            </h1>
            <div className="h-2 w-40 bg-gradient-to-r from-myu-pink to-purple-400 rounded-full mb-12 shadow-lg shadow-myu-pink/20"></div>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white shadow-xl shadow-gray-200/50 mb-16 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-myu-pink/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative z-10 flex items-center gap-3">
                <span className="text-myu-pink">a)</span> Tour d’horizon de l’espace collaboratif MyU
            </h2>
            <div className="space-y-6 text-xl text-gray-700 font-medium relative z-10">
                <p className="flex gap-4 items-start">
                    <span className="text-myu-pink font-bold text-2xl mt-1">❐</span>
                    <span className="leading-relaxed">Grâce à l’espace collaboratif MyU, votre client et vous accédez en temps réel aux indicateurs clés.</span>
                </p>
                <p className="pl-10 text-gray-600 leading-relaxed">
                    Les échanges sont fluides et instantanés, votre client peut se concentrer pleinement sur le développement de son activité.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 relative z-10">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                        <Monitor className="text-yellow-600" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Connexions facilitées</h4>
                        <p className="text-gray-600 text-sm mb-2">Échangez automatiquement les différentes pièces comptables et gagnez du temps.</p>
                        <p className="text-gray-900 text-sm font-medium">Votre client accède à plus de 100 connecteurs via MyUnisoft Connected.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <Layout className="text-blue-600" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Solution multiplateforme</h4>
                        <p className="text-gray-600 text-sm mb-2">Profitez d'une interface 100% SaaS accessible depuis la plateforme web sur Mac et PC, ainsi que d'une application disponible sur Android et iOS.</p>
                        <p className="text-gray-900 text-sm font-medium">Gestion de l'entreprise en toute flexibilité, à tout moment et ce quel que soit l'appareil.</p>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* MAIN VISUAL */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 relative group"
        >
            <div className="absolute -inset-4 bg-gradient-to-r from-myu-pink/20 to-purple-500/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <Screenshot 
                src="https://www2.myunisoft.fr/outils/o/MyUGFi/section_espace_collaboratif/MyU%20espace%20collaboratif.png"
                alt="MyU Espace collaboratif"
                caption="Visualisation de l'espace collaboratif MyU"
            />
        </motion.div>

        <div className="mb-24">
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-10 px-4 flex items-center gap-3"
            >
                <span className="text-myu-pink">b)</span> Les fonctionnalités de l’espace collaboratif
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureItem icon={Layout} title="Tableaux de bords intuitifs" delay={0.1}>
                    La gestion de l’entreprise est simplifiée grâce à nos tableaux de bord intuitifs.
                    Votre client a un <strong>visuel en temps réel</strong> sur son chiffre d’affaires, sa marge, ses dettes fournisseurs, ses créances clients et sa trésorerie prévisionnelle.
                </FeatureItem>

                <FeatureItem icon={CreditCard} title="Gestion des paiements et prélèvements" delay={0.2}>
                    La collecte des dates d’échéances des factures clients et fournisseurs est automatique.
                    À partir de cet échéancier, il peut générer les prélèvements clients et les paiements fournisseurs.
                </FeatureItem>

                <FeatureItem icon={FolderOpen} title="Accès direct aux documents" delay={0.3}>
                    La transmission des documents et notes de frais est rapide et sécurisée.
                    Grâce à la GED (Gestion Électronique de Documents) partagée avec le cabinet, votre client peut consulter ses documents où qu’il soit.
                </FeatureItem>

                <FeatureItem icon={MessageSquare} title="Les échanges sont simplifiés" delay={0.4}>
                    Gagnez du temps en échangeant avec votre client via notre messagerie sécurisée.
                    Recevez des pièces jointes sans avoir besoin de vous déplacer.
                    Chaque discussion est rattachée à son dossier, permettant de cerner d’un coup d'œil le besoin de votre interlocuteur.
                </FeatureItem>
            </div>
        </div>

        <div className="mb-20">
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
            >
                <span className="text-myu-pink">c)</span> Les connecteurs MyU Gestion
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white shadow-xl shadow-gray-200/50 mb-12 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-myu-teal/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="space-y-6 text-xl text-gray-700 font-medium relative z-10">
                    <p>Il faut tout d’abord vous connecter à votre compte MyUnisoft grâce à vos identifiants et mot de passe.</p>
                    <p>Une fois la connexion établie vous serez redirigé sur la « Vue d’ensemble ».</p>
                    <p>Accéder par le biais d’un clic au dernier panneau « Paramètres » présent dans le menu de navigation sur la gauche de votre écran, puis cliquez sur <strong>connecteurs cabinet</strong>.</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
            >
                <div className="absolute -inset-4 bg-gradient-to-r from-myu-teal/20 to-blue-500/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Screenshot 
                    src="https://www2.myunisoft.fr/outils/o/MyUGFi/section_espace_collaboratif/connecteur%20cabinet%20.png"
                    alt="Connecteur cabinet"
                    caption="Accès aux connecteurs cabinet depuis les paramètres"
                />
            </motion.div>
        </div>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
        >
          <PageQuiz pageId="espace-collaboratif" title="Quiz : Espace Collaboratif" />
        </motion.div>
      </div>
    </motion.div>
  );
};
