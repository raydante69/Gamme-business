import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Share2 } from 'lucide-react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  to: string;
  description?: string;
  variant?: 'light' | 'dark' | 'teal' | 'yellow' | 'purple' | 'pink';
  tags?: string[];
}

const getTagStyles = (tag: string, variant: string) => {
  const palettes = [
    'bg-blue-100 text-blue-700 border-blue-200',
    'bg-emerald-100 text-emerald-700 border-emerald-200',
    'bg-orange-100 text-orange-700 border-orange-200',
    'bg-indigo-100 text-indigo-700 border-indigo-200',
    'bg-rose-100 text-rose-700 border-rose-200',
  ];
  
  const lowerTag = tag.toLowerCase();
  if (lowerTag.includes('strat')) return 'bg-myu-purple-light text-myu-purple-dark border-myu-purple/20';
  if (lowerTag.includes('gamme')) return 'bg-myu-teal/10 text-myu-teal border-myu-teal/20';
  
  if (variant === 'dark') return 'bg-white/20 text-white border-white/10';
  
  const index = tag.length % palettes.length;
  return palettes[index];
};

export const Card: React.FC<CardProps> = ({ title, icon, to, description, variant = 'light', tags }) => {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  
  const baseClasses = "glass-panel group relative flex flex-col justify-between py-5 px-6 rounded-4xl transition-all duration-500 ease-out h-full overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-t border-white/50";
  
  let variantClasses = "";
  let iconClasses = "";
  let textClasses = "";
  let descClasses = "";
  let arrowClasses = "";
  let graphicElement = null;
  let glowColor = "rgba(255, 255, 255, 0.2)";

  switch (variant) {
    case 'dark':
      variantClasses = "bg-gray-900 border-gray-900 hover:shadow-gray-900/30";
      textClasses = "text-white";
      descClasses = "text-gray-400";
      iconClasses = "bg-white/10 text-white group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-6";
      arrowClasses = "bg-white text-black";
      glowColor = "rgba(255, 255, 255, 0.1)";
      graphicElement = <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700 animate-pulse"></div>;
      break;
    case 'teal':
      variantClasses = "bg-myu-teal border-myu-teal hover:shadow-myu-teal/40";
      textClasses = "text-white";
      descClasses = "text-myu-light";
      iconClasses = "bg-white/20 text-white group-hover:bg-white/30 group-hover:scale-110 group-hover:-rotate-6";
      arrowClasses = "bg-white text-myu-teal";
      glowColor = "rgba(255, 255, 255, 0.25)";
      graphicElement = <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mb-10 -mr-10 transition-transform group-hover:scale-125 duration-700 animate-pulse"></div>;
      break;
    case 'yellow':
      variantClasses = "bg-myu-yellow border-myu-yellow hover:shadow-myu-yellow/40";
      textClasses = "text-gray-900";
      descClasses = "text-gray-800";
      iconClasses = "bg-black/10 text-gray-900 group-hover:bg-black/20 group-hover:scale-110 group-hover:rotate-3";
      arrowClasses = "bg-black text-white";
      glowColor = "rgba(255, 255, 255, 0.4)";
      graphicElement = <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>;
      break;
    case 'purple':
      variantClasses = "bg-myu-purple border-myu-purple hover:shadow-myu-purple/40";
      textClasses = "text-gray-900"; 
      descClasses = "text-gray-800";
      iconClasses = "bg-white/30 text-gray-900 group-hover:bg-white/40 group-hover:scale-110 group-hover:rotate-6";
      arrowClasses = "bg-gray-900 text-white";
      glowColor = "rgba(255, 255, 255, 0.3)";
      graphicElement = (
        <>
           <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -mr-5 -mt-5 animate-float"></div>
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl -ml-10 -mb-10"></div>
        </>
      );
      break;
    case 'pink':
      variantClasses = "bg-myu-pink border-myu-pink hover:shadow-myu-pink/40";
      textClasses = "text-white";
      descClasses = "text-pink-100";
      iconClasses = "bg-white/20 text-white group-hover:bg-white/30 group-hover:scale-110 group-hover:-rotate-6";
      arrowClasses = "bg-white text-myu-pink";
      glowColor = "rgba(255, 255, 255, 0.25)";
      graphicElement = <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-orange-400/30 to-transparent rounded-full blur-xl group-hover:rotate-45 transition-transform duration-700 animate-pulse"></div>;
      break;
    default: // light
      variantClasses = "bg-white/60 hover:border-myu-teal hover:bg-white/90 hover:shadow-lg hover:shadow-myu-teal/10";
      textClasses = "text-gray-900";
      descClasses = "text-gray-600";
      iconClasses = "bg-white shadow-sm border border-gray-100 text-myu-teal group-hover:bg-myu-teal group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300";
      arrowClasses = "bg-gray-900 text-white group-hover:bg-myu-teal transition-colors duration-300";
      glowColor = "rgba(9, 167, 167, 0.1)"; 
      graphicElement = (
        <div className="absolute top-8 right-8 w-24 h-16 bg-white border-2 border-dashed border-blue-300 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12 group-hover:scale-125 opacity-30"></div>
      );
  }

  return (
    <Link 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      to={to} 
      className={`${baseClasses} ${variantClasses}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {graphicElement}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={`${iconClasses} p-4 rounded-2xl transition-transform duration-500 ease-out`}>
              {icon}
          </div>
          <div className="flex gap-2">
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (navigator.share) {
                  navigator.share({
                    title: title,
                    text: description || title,
                    url: window.location.origin + to,
                  }).catch(console.error);
                } else {
                  navigator.clipboard.writeText(window.location.origin + to);
                  alert('Lien copié dans le presse-papiers !');
                }
              }}
              className={`p-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${arrowClasses} opacity-0 group-hover:opacity-100`}
              title="Partager"
            >
              <Share2 size={20} />
            </button>
            <div className={`p-2.5 rounded-full shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 ${arrowClasses}`}>
               <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
        
        <h3 className={`text-2xl font-display font-bold mb-3 tracking-tight ${textClasses}`}>
          {title}
        </h3>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
             {tags.map((tag, i) => (
               <span key={i} className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${getTagStyles(tag, variant)}`}>
                 {tag}
               </span>
             ))}
          </div>
        )}

        {description && (
          <p className={`text-sm leading-relaxed font-medium ${descClasses}`}>
            {description}
          </p>
        )}
      </div>

      <div className={`mt-8 pt-6 border-t ${variant === 'light' ? 'border-gray-200' : 'border-white/20'} flex items-center gap-2 text-sm font-bold opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ${textClasses}`}>
         <span className="group-hover:translate-x-1 transition-transform">Découvrir</span>
         <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};