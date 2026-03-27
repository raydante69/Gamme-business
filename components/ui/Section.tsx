import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'white' | 'teal' | 'yellow' | 'purple' | 'pink';
}

export const Section: React.FC<SectionProps> = ({ title, children, className = '', id, variant = 'white' }) => {
  let bgClass = 'bg-white border-gray-100';
  let titleClass = 'text-gray-900 border-gray-100';
  let backgroundElement = null;
  
  switch (variant) {
    case 'teal':
      bgClass = 'bg-myu-light/30 border-myu-light';
      titleClass = 'text-myu-teal border-myu-light';
      backgroundElement = (
        <>
          <div className="absolute top-0 right-0 w-64 h-64 bg-myu-teal/5 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-200/20 rounded-full blur-3xl -ml-10 -mb-10 animate-blob pointer-events-none"></div>
        </>
      );
      break;
    case 'yellow':
      bgClass = 'bg-myu-yellow-light border-myu-yellow/20';
      titleClass = 'text-yellow-800 border-myu-yellow/20';
      backgroundElement = (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-transparent via-yellow-100/30 to-transparent opacity-50 animate-spin-slow" style={{ animationDuration: '30s' }}></div>
        </div>
      );
      break;
    case 'purple':
      bgClass = 'bg-myu-purple-light border-myu-purple/20';
      titleClass = 'text-myu-purple-dark border-myu-purple/20';
      backgroundElement = (
        <>
           <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300/20 rounded-full blur-xl animate-float pointer-events-none"></div>
           <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-300/20 rounded-full blur-xl animate-float animation-delay-2000 pointer-events-none"></div>
        </>
      );
      break;
    case 'pink':
      bgClass = 'bg-myu-pink-light border-myu-pink/20';
      titleClass = 'text-myu-pink-dark border-myu-pink/20';
      backgroundElement = (
        <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-myu-pink/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
      );
      break;
    default:
      bgClass = 'bg-white border-gray-100';
  }

  return (
    <div id={id} className={`rounded-3xl shadow-sm border p-6 sm:p-8 mb-8 relative overflow-hidden ${bgClass} ${className}`}>
      {backgroundElement}
      <div className="relative z-10">
        <h2 className={`text-2xl font-bold mb-6 pb-4 border-b ${titleClass}`}>
            {title}
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
            {children}
        </div>
      </div>
    </div>
  );
};

export const InfoBox: React.FC<{ title?: string; children: React.ReactNode; variant?: 'teal' | 'blue' | 'purple' }> = ({ title, children, variant = 'blue' }) => {
  let colorClasses = "bg-sky-50 border-sky-400 text-sky-700";
  let titleClasses = "text-sky-800";

  if (variant === 'teal') {
    colorClasses = "bg-myu-light/50 border-myu-teal text-teal-800";
    titleClasses = "text-myu-teal";
  } else if (variant === 'purple') {
     colorClasses = "bg-myu-purple-light border-myu-purple text-purple-900";
     titleClasses = "text-myu-purple-dark";
  }

  return (
    <div className={`${colorClasses} border-l-4 p-5 rounded-r-2xl my-6`}>
      {title && <h4 className={`font-bold mb-2 ${titleClasses}`}>{title}</h4>}
      <div className="text-sm font-medium">
        {children}
      </div>
    </div>
  );
};

export const Step: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div className="flex gap-4 mb-6 last:mb-0 group">
    <div className="flex-shrink-0 w-10 h-10 bg-white border-2 border-myu-teal text-myu-teal rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-myu-teal group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-transform">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 text-lg mb-2">{title}</h4>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  </div>
);