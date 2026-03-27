const fs = require('fs');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Case insensitive replacement for "Quiz de validation" -> "Auto évaluez vous !"
    content = content.replace(/Quiz de validation/gi, 'Auto évaluez vous !');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
}

replaceInFile('./pages/MasteringStart.tsx');
replaceInFile('./pages/MobileAndCollab.tsx');
replaceInFile('./pages/Home.tsx');
