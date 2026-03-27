const fs = require('fs');

let content = fs.readFileSync('./pages/MobileAndCollab.tsx', 'utf8');

const regex = /onClick=\{\(\) => \{\s*setReadChapters\(prev => \{\s*const newSet = new Set\(prev\);\s*newSet\.add\('([^']+)'\);\s*return newSet;\s*\}\);\s*\/\/\s*Show toast\s*const newProgress = Math\.round\(\(\(readChapters\.size \+ \(readChapters\.has\('[^']+'\) \? 0 : 1\)\) \/ 12\) \* 100\);\s*setToastMessage\(`Chapitre validé ! Progression : \$\{newProgress\}%`\);\s*setShowToast\(true\);\s*setTimeout\(\(\) => setShowToast\(false\), 3000\);\s*\/\/\s*Go to next chapter\s*const currentIndex = chapters\.findIndex\(c => c\.id === '[^']+'\);\s*if \(currentIndex < chapters\.length - 1 && chapters\[currentIndex \+ 1\]\.id !== 'quiz-section'\) \{\s*setActiveChapter\(chapters\[currentIndex \+ 1\]\.id\);\s*\} else \{\s*setActiveChapter\(null\);\s*\}\s*\}\}/g;

let matchCount = 0;
content = content.replace(regex, (match, p1) => {
    matchCount++;
    return `onClick={() => handleMarkAsRead('${p1}')}`;
});

fs.writeFileSync('./pages/MobileAndCollab.tsx', content);
console.log(`Replaced ${matchCount} occurrences.`);
