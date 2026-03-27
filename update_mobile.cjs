const fs = require('fs');

const filePath = './pages/MobileAndCollab.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the chevron container
content = content.replace(/<div className=\{`p-2 rounded-full transition-all duration-300 \$\{activeChapter === '([^']+)' \? 'bg-myu-teal text-white rotate-180' : 'bg-gray-200 text-gray-500 group-hover:bg-myu-teal\/10 group-hover:text-myu-teal'\}`\}>\s*<ChevronDown size=\{20\} \/>\s*<\/div>/g, 
  `<div className={\`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 \${activeChapter === '$1' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}\`}>
                                    <ChevronDown size={24} />
                                </div>`);

// Add the sticky header
if (!content.includes('Sticky Chapter Header')) {
    const stickyHeader = `
                    {/* Sticky Chapter Header */}
                    {activeChapter && (
                        <div className="sticky top-24 z-30 bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl p-4 flex items-center gap-4 transition-all animate-fade-in-down mb-6">
                            <div className="w-10 h-10 rounded-lg bg-myu-teal text-white flex items-center justify-center shrink-0 shadow-sm">
                                {React.createElement(chapters.find(c => c.id === activeChapter)?.icon || Smartphone)}
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-myu-teal">Chapitre en cours</div>
                                <h3 className="font-bold text-gray-900 leading-tight">{chapters.find(c => c.id === activeChapter)?.title}</h3>
                            </div>
                        </div>
                    )}
`;
    content = content.replace('<div className="flex-1 w-full min-w-0 space-y-6">\n                    {/* SECTION A */}', '<div className="flex-1 w-full min-w-0 space-y-6">' + stickyHeader + '\n                    {/* SECTION A */}');
}

fs.writeFileSync(filePath, content);
console.log('Updated MobileAndCollab.tsx');
