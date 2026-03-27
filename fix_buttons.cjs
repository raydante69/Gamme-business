const fs = require('fs');

let content = fs.readFileSync('./pages/MobileAndCollab.tsx', 'utf8');

const regex = /<button\s+onClick=\{\(\) => handleMarkAsRead\('([^']+)'\)\}\s+className="inline-flex items-center gap-2 bg-myu-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-600 transition-colors shadow-lg shadow-myu-teal\/20"\s*>\s*<CheckCircle2 size=\{20\} \/>\s*Valider ce chapitre\s*<\/button>/g;

let matchCount = 0;
content = content.replace(regex, (match, p1) => {
    matchCount++;
    return `<button
                                                onClick={() => handleMarkAsRead('${p1}')}
                                                className={\`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg \${
                                                    readChapters.has('${p1}')
                                                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                                    : 'bg-myu-teal text-white hover:bg-teal-600 shadow-myu-teal/20'
                                                }\`}
                                            >
                                                {readChapters.has('${p1}') ? (
                                                    <>
                                                        <CheckCircle2 size={20} /> Chapitre validé
                                                    </>
                                                ) : (
                                                    <>
                                                        Valider ce chapitre <ChevronDown size={20} className="-rotate-90" />
                                                    </>
                                                )}
                                            </button>`;
});

fs.writeFileSync('./pages/MobileAndCollab.tsx', content);
console.log(`Replaced ${matchCount} occurrences.`);
