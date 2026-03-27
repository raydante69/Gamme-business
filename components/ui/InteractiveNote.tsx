import React from 'react';
import { Lightbulb, AlertTriangle, Settings, Info } from 'lucide-react';

interface InteractiveNoteProps {
  type: 'tip' | 'warning' | 'config' | 'info';
  title?: string;
  children?: React.ReactNode;
}

export const InteractiveNote: React.FC<InteractiveNoteProps> = ({ type, title, children }) => {
  let icon = <Info size={24} />;
  let baseColor = "bg-blue-50/80 border-blue-200 text-blue-900";
  let iconColor = "text-blue-600 bg-white";
  let defaultTitle = "Information";

  switch (type) {
    case 'tip':
      icon = <Lightbulb size={24} />;
      baseColor = "bg-sky-50/80 border-sky-200 text-sky-900";
      iconColor = "text-sky-500 bg-white";
      defaultTitle = "Astuce Pro";
      break;
    case 'warning':
      icon = <AlertTriangle size={24} />;
      baseColor = "bg-red-50/80 border-red-200 text-red-900";
      iconColor = "text-red-500 bg-white";
      defaultTitle = "Attention";
      break;
    case 'config':
      icon = <Settings size={24} />;
      baseColor = "bg-teal-50/80 border-teal-200 text-teal-900";
      iconColor = "text-myu-teal bg-white";
      defaultTitle = "Configuration";
      break;
  }

  const finalTitle = title || defaultTitle;

  return (
    <div className={`relative w-full my-6 z-10 rounded-2xl p-6 border ${baseColor} backdrop-blur-sm shadow-sm`}>
        <div className="flex items-start gap-4">
            <div className={`p-2 rounded-xl shadow-sm shrink-0 ${iconColor}`}>
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-lg mb-2">{finalTitle}</h4>
                <div className="text-sm leading-relaxed opacity-90 font-medium">
                    {children}
                </div>
            </div>
        </div>
    </div>
  );
};