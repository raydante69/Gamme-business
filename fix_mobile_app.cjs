const fs = require('fs');

let content = fs.readFileSync('./pages/MobileApp.tsx', 'utf8');

// A1: expert-comptable -> Expert-Comptable
content = content.replace(/expert-comptable/g, 'Expert-Comptable');
content = content.replace(/Expert-comptable/g, 'Expert-Comptable');

// A2: identifiant et mot de passe -> identifiants de connexion habituels
content = content.replace(/Renseignez votre identifiant et mot de passe/g, 'Renseignez vos identifiants de connexion habituels');

// A3 & A4: Remove discussion/échange, déclarations, indicateurs
content = content.replace(/\{ icon: Eye, text: "Vision à 360° de votre activité : suivez vos ventes, règlements, dépenses et indicateurs clés en toute sérénité" \},/g, '{ icon: Eye, text: "Vision à 360° de votre activité : suivez vos ventes, règlements et dépenses en toute sérénité" },');
content = content.replace(/\s*\{ icon: Users, text: "Communication intégrée : échangez avec votre cabinet depuis l’espace collaboratif" \},/g, '');
content = content.replace(/\s*\{ icon: Zap, text: "Alerte et notifications intelligentes : soyez informé immédiatement" \},/g, '');

// F1 & F2: Justif à EC
content = content.replace(/Cette fonctionnalité est valable sur l’ensemble des offres MYU Gestion Financière y compris freemium\. La seule différence est que vous n’aurez pas accès à l’onglet mes factures, situés dans le cadran rouge, avec l’offre Freemium\./g, 'Cette fonctionnalité est valable sur l’ensemble des offres MyU Gestion Financière y compris Start. La seule différence est que vous n’aurez pas accès à l’onglet <strong>Mes factures</strong>, situé dans le cadran rouge, avec l’offre Start.');

// F3: appli mobile -> application mobile (in text)
content = content.replace(/appli mobile/g, 'application mobile');
content = content.replace(/Appli mobile/g, 'Application mobile');
content = content.replace(/Appli Mobile/g, 'Application Mobile');
content = content.replace(/application%20mobile/g, 'appli%20mobile'); // Fix URLs

// F4: importer un document -> d'importer un document
content = content.replace(/ou encore importer un document/g, "ou encore d'importer un document");

// F5: bold UI elements in F
content = content.replace(/sélectionnez le type de document, note de frais, facture d’achat, facture de vente/g, 'sélectionnez le type de document : <strong>Note de frais</strong>, <strong>Facture d’achat</strong>, <strong>Facture de vente</strong>');

// H1: si besoin et si vous le souhaitez
content = content.replace(/si besoin, si vous le souhaitez/g, 'si vous le souhaitez');

// H2: retrouver le client
content = content.replace(/En tapant les premières lettres de la raison sociale, vous pourrez retrouver votre client/g, 'En tapant les premières lettres de la raison sociale, vous pourrez retrouver votre client (recherche effectuée parmi vos clients existants et la base SIRENE)');

// Help Center Link
content = content.replace(/href="https:\/\/myunisoft\.fr"/g, 'href="https://support.myunisoft.fr/"');

fs.writeFileSync('./pages/MobileApp.tsx', content);
console.log('MobileApp.tsx updated');
