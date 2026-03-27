const fs = require('fs');

let content = fs.readFileSync('./pages/MobileAndCollab.tsx', 'utf8');

// 1. Fix toggleChapter to scroll
content = content.replace(
    /const toggleChapter = \(id: string\) => \{\s*setActiveChapter\(prev => prev === id \? null : id\);\s*\};/,
    `const toggleChapter = (id: string) => {
        setActiveChapter(prev => {
            if (prev === id) return null;
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
            return id;
        });
    };`
);

// 2. Remove sticky from sidebar
content = content.replace(
    /<div className="hidden lg:block w-80 sticky top-28 shrink-0 flex flex-col gap-6" style=\{\{ height: 'calc\\(100vh - 8rem\\)' \}\}>/,
    `<div className="hidden lg:block w-80 shrink-0 flex flex-col gap-6">`
);

fs.writeFileSync('./pages/MobileAndCollab.tsx', content);
console.log('MobileAndCollab.tsx updated');
