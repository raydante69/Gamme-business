const fs = require('fs');
let content = fs.readFileSync('./pages/MasteringStart.tsx', 'utf8');
content = content.replace(/const headerOffset = 120;/g, 'const headerOffset = 100;');
fs.writeFileSync('./pages/MasteringStart.tsx', content);
console.log('MasteringStart.tsx updated');
