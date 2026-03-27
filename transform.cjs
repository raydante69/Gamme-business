const fs = require('fs');

let content = fs.readFileSync('./pages/MobileAndCollab.tsx', 'utf8');

const regex = /<div id="(section-[a-z]+)" className="bg-white rounded-\[2\.5rem\] border border-gray-100 shadow-xl shadow-gray-200\/40 overflow-hidden mb-8 scroll-mt-28">\s*<button\s*onClick=\{\(\) => toggleChapter\('([^']+)'\)\}\s*className="w-full bg-\[#00c4b4\] text-white px-8 py-6 flex items-center justify-between hover:bg-\[#00b3a4\] transition-colors"\s*>\s*<h2 className="text-2xl font-display font-bold text-left">([^<]+)<\/h2>\s*<ChevronDown\s*className=\{`transform transition-transform duration-300 \$\{activeChapter === '[^']+' \? 'rotate-180' : ''\}`\}\s*size=\{28\}\s*\/>\s*<\/button>\s*\{activeChapter === '[^']+' && \(\s*<div className="p-8 md:p-12 space-y-8 text-gray-700 font-medium leading-relaxed text-lg text-left animate-in slide-in-from-top-4 duration-300">/g;

content = content.replace(regex, (match, id, toggleId, title) => {
    let letter = title.split('.')[0].trim();
    if (id === 'section-collab') letter = 'L';
    
    return `<div 
                            key="${id}" 
                            id="${id}"
                            className={\`bg-white rounded-3xl border transition-all duration-500 overflow-hidden \${activeChapter === '${id}' ? 'border-myu-teal shadow-2xl ring-4 ring-myu-teal/10' : 'border-gray-100 shadow-sm opacity-100 hover:border-gray-300'}\`}
                        >
                            <button 
                                onClick={() => {
                                    toggleChapter('${id}');
                                }}
                                className={\`w-full flex items-center justify-between p-6 md:p-8 text-left bg-gray-50/50 hover:bg-white transition-colors group\`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={\`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all shrink-0 \${readChapters.has('${id}') ? 'bg-emerald-100 text-emerald-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-myu-teal group-hover:text-myu-teal'}\`}>
                                        {readChapters.has('${id}') ? <Check size={28}/> : '${letter}'}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-myu-teal transition-colors">${title}</h2>
                                </div>
                                <div className={\`p-2 rounded-full transition-all duration-300 \${activeChapter === '${id}' ? 'bg-myu-teal text-white rotate-180' : 'bg-gray-200 text-gray-500 group-hover:bg-myu-teal/10 group-hover:text-myu-teal'}\`}>
                                    <ChevronDown size={20} />
                                </div>
                            </button>

                            {activeChapter === '${id}' && (
                                <div className="px-8 pb-12 pt-4 animate-fade-in">
                                    <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed space-y-8">`;
});

// Now replace the end of each section
const endRegex = /<\/div>\s*\)\}\s*<\/div>/g;
let sectionIndex = 0;
const sectionIds = ['section-a', 'section-b', 'section-c', 'section-d', 'section-e', 'section-f', 'section-g', 'section-h', 'section-i', 'section-j', 'section-k', 'section-collab'];

content = content.replace(endRegex, (match) => {
    const id = sectionIds[sectionIndex];
    sectionIndex++;
    if (!id) return match;
    
    return `
                                        <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => {
                                                    setReadChapters(prev => {
                                                        const newSet = new Set(prev);
                                                        newSet.add('${id}');
                                                        return newSet;
                                                    });
                                                    
                                                    // Show toast
                                                    const newProgress = Math.round(((readChapters.size + (readChapters.has('${id}') ? 0 : 1)) / 12) * 100);
                                                    setToastMessage(\`Chapitre validé ! Progression : \${newProgress}%\`);
                                                    setShowToast(true);
                                                    setTimeout(() => setShowToast(false), 3000);

                                                    // Go to next chapter
                                                    const currentIndex = chapters.findIndex(c => c.id === '${id}');
                                                    if (currentIndex < chapters.length - 1 && chapters[currentIndex + 1].id !== 'quiz-section') {
                                                        setActiveChapter(chapters[currentIndex + 1].id);
                                                    } else {
                                                        setActiveChapter(null);
                                                    }
                                                }}
                                                className="inline-flex items-center gap-2 bg-myu-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-600 transition-colors shadow-lg shadow-myu-teal/20"
                                            >
                                                <CheckCircle2 size={20} />
                                                Valider ce chapitre
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>`;
});

fs.writeFileSync('./pages/MobileAndCollab.tsx', content);
console.log("Done");
