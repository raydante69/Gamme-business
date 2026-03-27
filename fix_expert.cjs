const fs = require('fs');

let content = fs.readFileSync('./pages/MobileAndCollab.tsx', 'utf8');
content = content.replace(/expert comptable/g, 'Expert-Comptable');
content = content.replace(/Expert comptable/g, 'Expert-Comptable');
content = content.replace(/expert%20comptable/g, 'expert%20comptable'); // keep URLs intact
fs.writeFileSync('./pages/MobileAndCollab.tsx', content);

let content2 = fs.readFileSync('./pages/MobileApp.tsx', 'utf8');
content2 = content2.replace(/expert comptable/g, 'Expert-Comptable');
content2 = content2.replace(/Expert comptable/g, 'Expert-Comptable');
content2 = content2.replace(/expert%20comptable/g, 'expert%20comptable'); // keep URLs intact
fs.writeFileSync('./pages/MobileApp.tsx', content2);

console.log('Fixed expert comptable without hyphen');
