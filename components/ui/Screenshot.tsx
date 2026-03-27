
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImageOff, Loader2, ZoomIn, X, Maximize2 } from 'lucide-react';

interface ScreenshotProps {
  src?: string;
  alt: string;
  caption?: string;
  imageId?: number;
  variant?: 'default' | 'yellow';
}

export const Screenshot: React.FC<ScreenshotProps> = ({ src, alt, caption, imageId, variant = 'default' }) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  
  const extensions = ['png', 'jpg', 'jpeg', 'PNG', 'JPG', 'gif', 'webp'];
  const [retryIndex, setRetryIndex] = useState(0);

  useEffect(() => {
    let url = '';
    if (src) {
      url = src;
    } else if (imageId) {
      url = `/assets/guide/image_${imageId}.jpg`;
    }
    setImgSrc(url);
    setIsLoading(true);
    setHasError(false);
    setRetryIndex(0);
  }, [src, imageId]);

  const handleError = () => {
    if (src && src.startsWith('http')) {
        const lastDot = src.lastIndexOf('.');
        if (lastDot !== -1) {
            const baseUrl = src.substring(0, lastDot);
            const originalExt = src.substring(lastDot + 1);
            let nextIndex = retryIndex;
            if (extensions[nextIndex] === originalExt) {
                nextIndex++;
            }
            if (nextIndex < extensions.length) {
                const nextExt = extensions[nextIndex];
                setImgSrc(`${baseUrl}.${nextExt}`);
                setRetryIndex(nextIndex + 1);
                return;
            }
        }
    }
    setIsLoading(false);
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const zoomedContent = isZoomed ? (
    <div 
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
      onClick={() => setIsZoomed(false)}
    >
      <button 
        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
        onClick={() => setIsZoomed(false)}
      >
        <X size={32} />
      </button>
      <img 
        src={imgSrc} 
        alt={alt} 
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  ) : null;

  return (
    <div className="my-12 group break-inside-avoid w-full max-w-5xl mx-auto">
      {isZoomed && createPortal(zoomedContent, document.body)}
      <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
        {/* Browser Header Bar */}
        <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="flex-grow text-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              {alt}
            </span>
          </div>
          <div className="w-12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
             <Maximize2 size={14} className="text-gray-400" />
          </div>
        </div>

        {/* Content Area */}
        <div 
            className="relative flex items-center justify-center min-h-[150px] cursor-zoom-in bg-gray-50/30"
            onClick={() => !hasError && !isLoading && setIsZoomed(true)}
        >
             {isLoading && (
               <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-50/50">
                 <Loader2 className="w-8 h-8 text-myu-teal animate-spin" />
               </div>
             )}

             {hasError ? (
                <div className="flex flex-col items-center justify-center p-12 text-center w-full min-h-[300px]">
                    <ImageOff size={32} className="text-gray-300 mb-4" />
                    <p className="text-sm font-bold text-gray-500">Aperçu non disponible</p>
                </div>
             ) : (
                <div className="w-full p-1 md:p-2 bg-white">
                    <img 
                        src={imgSrc} 
                        alt={alt} 
                        className={`max-w-full h-auto mx-auto object-contain transition-all duration-700 ${isLoading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`} 
                        loading="lazy"
                        onLoad={handleLoad}
                        onError={handleError}
                    />
                    
                    {/* Hover Hint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 backdrop-blur text-gray-900 px-5 py-2.5 rounded-full font-bold text-xs shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 border border-gray-100">
                            <ZoomIn size={14} /> CLIQUER POUR AGRANDIR
                        </div>
                    </div>
                </div>
             )}
        </div>
      </div>
      {caption && (
          <div className="flex justify-center mt-4">
            <div className="bg-gray-100/50 text-gray-500 text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-gray-200/50">
                {caption}
            </div>
          </div>
      )}
    </div>
  );
};
