
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Construction } from 'lucide-react';
import { PageQuiz } from '../components/PageQuiz';

export const Connectors = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative min-h-[60vh] flex flex-col items-center justify-center text-center">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-myu-teal/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-8 left-8 inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:border-myu-teal cursor-pointer"
      >
        <ArrowLeft size={16} />
        Retour
      </button>

      <div className="p-12 bg-white rounded-[3rem] shadow-xl border border-gray-100 max-w-2xl">
          <div className="w-24 h-24 bg-myu-teal/10 rounded-3xl flex items-center justify-center text-myu-teal mx-auto mb-8 animate-float">
            <Share2 size={48} />
          </div>
          <h1 className="text-4xl font-display font-black text-gray-900 mb-6">c) Les connecteurs MyU Gestion</h1>
          <div className="flex items-center justify-center gap-2 text-myu-teal font-bold mb-8 uppercase tracking-widest text-sm bg-myu-teal/10 px-4 py-2 rounded-full w-fit mx-auto">
             <Construction size={18} />
             Section en cours de construction
          </div>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Nous préparons une présentation détaillée de tous les connecteurs et intégrations API disponibles pour MyU Gestion Financière.
          </p>
      </div>

      <div className="mt-16 w-full max-w-2xl">
        <PageQuiz pageId="connecteurs" title="Quiz : Connecteurs" />
      </div>
    </div>
  );
};
