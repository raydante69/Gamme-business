
export interface QuizQuestion {
    question: string;
    options: string[];
    correct: number;
    explanation?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
}

export const QUIZ_DATA: Record<string, QuizQuestion[]> = {
    'maitriser-business': [
        {
            question: "Où peut-on consulter le chiffre d'affaires en temps réel ?",
            options: ["Dans le menu Paramètres", "Sur le tableau de bord (Page d'accueil)", "Uniquement dans le module Comptabilité"],
            correct: 1,
            explanation: "Le tableau de bord sur la page d'accueil affiche l'évolution du CA en temps réel."
        },
        {
            question: "Comment créer un prospect ?",
            options: ["Depuis le menu CRM/Ventes puis liste des prospects", "Depuis la liste des clients", "Depuis le tableau de bord"],
            correct: 0,
            explanation: "La création de prospect se fait via le menu CRM/Ventes > Liste des prospects."
        },
        {
            question: "Peut-on créer un produit sans gestion de stock dans l'offre Start ?",
            options: ["Non, c'est impossible", "Oui, depuis le menu Stocks Produits", "Uniquement avec l'offre Performance"],
            correct: 1,
            explanation: "L'offre Start permet la création de produits, mais sans la gestion avancée des stocks."
        },
        {
            question: "Comment créer une facture d'acompte ?",
            options: ["Depuis la liste des factures", "Depuis le devis initial", "Depuis le module CRM"],
            correct: 1,
            explanation: "Une facture d'acompte se génère généralement à partir d'un devis accepté."
        },
        {
            question: "Le bon de commande fournisseur est disponible dans quelle offre ?",
            options: ["Start", "Business", "Performance"],
            correct: 0,
            explanation: "Le bon de commande fournisseur est accessible dès l'offre Start."
        },
        {
            question: "Comment créer un paiement à partir d'une facture ?",
            options: ["Depuis l'onglet mes factures, cliquer sur ajouter un paiement", "Depuis le menu Paramètres", "Depuis le tableau de bord"],
            correct: 0,
            explanation: "Dans la liste des factures, vous pouvez ajouter un règlement directement sur la ligne concernée."
        },
        {
            question: "Qu'est-ce que MyU Compte Pro ?",
            options: ["Un outil de gestion de stock", "Le cockpit financier de l'entreprise", "Un module de comptabilité"],
            correct: 1,
            explanation: "MyU Compte Pro centralise les flux financiers et permet une gestion agile de la trésorerie."
        },
        {
            question: "Comment ouvrir son Compte Pro MyUnisoft ?",
            options: ["Menu en haut à gauche, icône Compte Pro", "Depuis le menu Paramètres", "Depuis la liste des clients"],
            correct: 0,
            explanation: "L'accès au Compte Pro se fait via l'icône dédiée dans le menu principal."
        },
        {
            question: "Peut-on ajouter une nouvelle carte de paiement virtuelle et physique ?",
            options: ["Non, uniquement virtuelle", "Non, uniquement physique", "Oui, les deux sont possibles"],
            correct: 2,
            explanation: "MyU Compte Pro permet de commander des cartes physiques et de générer des cartes virtuelles."
        },
        {
            question: "Comment créer un bon de livraison à partir d'un devis ?",
            options: ["C'est impossible", "Depuis le devis, menu de création de document", "Depuis le menu Stocks"],
            correct: 1,
            explanation: "Un devis peut être transformé en BL via le bouton 'Créer un document'."
        },
        {
            question: "Quelle est la limite de stockage d'un document dans MyU ?",
            options: ["10 Mo", "1 Mo", "100 Mo"],
            correct: 1,
            explanation: "Chaque document stocké est limité à 1 Mo pour optimiser les performances."
        },
        {
            question: "Dans quel menu peut-on modifier les périodes d'analyse du tableau de bord ?",
            options: ["Menu Paramètres", "En cliquant sur la roue dentée (⚙️) du tableau de bord", "Menu CRM"],
            correct: 1,
            explanation: "La roue dentée permet de personnaliser les périodes (mois, année, etc.)."
        },
        {
            question: "Comment exporter la liste des dernières factures créées ?",
            options: ["Au format .csv depuis la page d'accueil", "Au format .pdf uniquement", "Via le menu Comptabilité"],
            correct: 0,
            explanation: "L'export CSV est disponible directement depuis le widget des factures récentes."
        },
        {
            question: "Quelles informations sont obligatoires lors de la création d'un prospect ?",
            options: ["Uniquement le nom", "Les rubriques marquées d'un astérisque rouge (*)", "Toutes les rubriques"],
            correct: 1,
            explanation: "Les champs obligatoires sont signalés par un astérisque rouge."
        },
        {
            question: "Où se trouve l'accès rapide pour créer un client ?",
            options: ["Dans le menu Stocks", "Sur la page d'accueil à droite", "Dans le menu CRM"],
            correct: 1,
            explanation: "Le volet d'accès rapide à droite permet de créer rapidement un client."
        },
        {
            question: "Quels sont les deux modes de visualisation de la liste des clients ?",
            options: ["Simple et Avancée", "Liste et Grille", "Standard et Expert"],
            correct: 0,
            explanation: "L'utilisateur peut basculer entre une vue simple et une vue détaillée (avancée)."
        },
        {
            question: "Peut-on ajouter un commercial rattaché à une fiche client ?",
            options: ["Non", "Oui, dans la fiche détaillée", "Uniquement en offre Performance"],
            correct: 1,
            explanation: "Le suivi commercial permet d'assigner un collaborateur à chaque client."
        },
        {
            question: "Quel menu permet d'accéder à la liste des produits ?",
            options: ["CRM/Ventes", "Stocks Produits", "Paramètres"],
            correct: 1,
            explanation: "La gestion des produits se trouve dans le module Stocks Produits."
        },
        {
            question: "Comment ajouter une nouvelle ligne dans un devis ?",
            options: ["Cliquer sur 'ajouter un produit' ou utiliser les '...'", "Appuyer sur Entrée", "C'est automatique"],
            correct: 0,
            explanation: "Le bouton 'Ajouter un produit' ou le menu contextuel permettent d'ajouter des lignes."
        },
        {
            question: "Quelles actions sont possibles sur un devis depuis son aperçu ?",
            options: ["Uniquement imprimer", "Envoyer par email, imprimer, créer un document", "Supprimer uniquement"],
            correct: 1,
            explanation: "L'aperçu offre toutes les options de gestion et de transformation du document."
        },
        {
            question: "Que permet l'onglet 'Emails' dans le détail d'un devis ?",
            options: ["Rédiger un nouveau mail", "Consulter le suivi (date d'envoi et de lecture)", "Supprimer les mails envoyés"],
            correct: 1,
            explanation: "Cet onglet permet de savoir si le client a bien reçu et ouvert le devis."
        },
        {
            question: "Comment transformer un devis en facture ?",
            options: ["Cliquer sur 'créer un document' puis 'créer une facture'", "Supprimer le devis et créer une facture", "Le devis se transforme tout seul"],
            correct: 0,
            explanation: "La transformation est semi-automatique via le bouton 'Créer un document'."
        },
        {
            question: "Quels sont les types de règlement disponibles lors de la création d'une facture ?",
            options: ["Uniquement comptant", "À facturation, 30 jours, 50% à la commande, etc.", "Uniquement virement"],
            correct: 1,
            explanation: "Plusieurs conditions de règlement standards sont proposées."
        },
        {
            question: "À quoi sert le bouton 'crayon' sur une facture ?",
            options: ["À supprimer la facture", "À modifier une facture au statut 'brouillon'", "À changer le logo"],
            correct: 1,
            explanation: "Une facture validée n'est plus modifiable, seul le brouillon l'est."
        },
        {
            question: "Peut-on dupliquer une facture existante ?",
            options: ["Non", "Oui, avec le bouton 'copier' (📄)", "Uniquement les factures payées"],
            correct: 1,
            explanation: "La duplication permet de gagner du temps pour des factures récurrentes."
        },
        {
            question: "Où peut-on ajouter des pénalités de retard sur un devis ?",
            options: ["Dans les notes en bas de page", "Dans l'objet du devis", "C'est impossible"],
            correct: 0,
            explanation: "Les mentions légales et pénalités se saisissent dans les notes de bas de page."
        },
        {
            question: "Quel module est considéré comme le 'cockpit financier' ?",
            options: ["CRM", "MyU Compte Pro", "Stocks"],
            correct: 1,
            explanation: "MyU Compte Pro offre une vision 360° de la situation financière."
        },
        {
            question: "Peut-on créer un saut de page dans un devis ?",
            options: ["Non", "Oui, via le menu '...'", "Uniquement en PDF"],
            correct: 1,
            explanation: "Le menu '...' sur une ligne permet d'insérer un saut de page pour la mise en forme PDF."
        },
        {
            question: "Que signifie le statut 'Accepté (acompte)' pour un devis ?",
            options: ["Le devis est refusé", "Un acompte a été versé pour ce devis", "Le devis est totalement payé"],
            correct: 1,
            explanation: "Ce statut indique qu'une partie du devis a déjà fait l'objet d'une facturation d'acompte."
        },
        {
            question: "Comment personnaliser les colonnes de la liste des factures ?",
            options: ["Cliquer sur les '...'", "Aller dans les paramètres généraux", "On ne peut pas"],
            correct: 0,
            explanation: "Les '...' en haut à droite de la liste permettent de choisir les colonnes affichées."
        },
        {
            question: "Quelle offre MyU Gestion est la première étape pour un client ?",
            options: ["Performance", "Start", "Business"],
            correct: 1,
            explanation: "Start est l'offre d'entrée de gamme, idéale pour débuter la gestion commerciale."
        },
        {
            question: "Peut-on ajouter des fichiers joints à un devis ?",
            options: ["Oui, dans l'onglet 'Fichiers joints'", "Non", "Uniquement des images"],
            correct: 0,
            explanation: "L'onglet dédié permet d'associer des documents complémentaires au devis."
        },
        {
            question: "À quoi sert l'onglet 'Historique du dossier' ?",
            options: ["À voir les anciens clients", "À retracer les différentes actions réalisées sur le dossier", "À voir le chiffre d'affaires"],
            correct: 1,
            explanation: "Il permet un audit complet des modifications effectuées sur un document."
        },
        {
            question: "Comment accéder à la fiche détaillée d'un client ?",
            options: ["En cliquant sur son nom dans la liste", "En le supprimant", "Via le menu Paramètres"],
            correct: 0,
            explanation: "Un clic sur le nom du client ouvre sa fiche complète."
        },
        {
            question: "Quel bouton permet de valider la création d'un client ?",
            options: ["Annuler", "Valider", "Suivant"],
            correct: 1,
            explanation: "Le bouton 'Valider' enregistre les informations saisies."
        },
        {
            question: "Peut-on créer un produit depuis le menu CRM ?",
            options: ["Oui", "Non, c'est dans Stocks Produits", "Uniquement les services"],
            correct: 1,
            explanation: "La création de produits est centralisée dans le module Stocks Produits."
        },
        {
            question: "Que permet de faire le bouton 'Actions' sur une facture ?",
            options: ["Uniquement supprimer", "Accéder à diverses opérations (modifier, copier, alertes...)", "Changer de client"],
            correct: 1,
            explanation: "Le menu 'Actions' regroupe toutes les fonctions de gestion du document."
        },
        {
            question: "Où peut-on voir si un email de devis a été lu ?",
            options: ["Dans l'onglet 'Emails' du devis", "On ne peut pas le savoir", "Dans la boîte mail personnelle"],
            correct: 0,
            explanation: "Le tracking des emails est intégré directement dans MyUnisoft."
        },
        {
            question: "Peut-on gérer plusieurs agences dans MyU Gestion Start ?",
            options: ["Non", "Oui, via les paramètres de base", "Uniquement en Business"],
            correct: 1,
            explanation: "La gestion multi-agences est disponible pour organiser l'activité."
        },
        {
            question: "Quelle est la couleur dominante de l'interface MyUnisoft ?",
            options: ["Rouge", "Teal (Bleu-vert)", "Jaune"],
            correct: 1,
            explanation: "Le 'Teal' est la couleur identitaire de MyUnisoft."
        },
        {
            question: "Comment ajouter un sous-total dans une facture ?",
            options: ["Cliquer on '...' sur une ligne", "C'est automatique à la fin", "On ne peut pas"],
            correct: 0,
            explanation: "Les sous-totaux s'insèrent manuellement via le menu contextuel des lignes."
        },
        {
            question: "À quoi servent les commentaires sur un devis ?",
            options: ["À discuter avec le client ou collaborer en interne", "À faire des calculs", "À rien"],
            correct: 0,
            explanation: "Les commentaires favorisent la collaboration autour du dossier client."
        },
        {
            question: "Où retrouve-t-on les activités récentes sur un dossier ?",
            options: ["Dans l'onglet 'Activités'", "Sur la page d'accueil", "Dans les paramètres"],
            correct: 0,
            explanation: "L'onglet 'Activités' liste les derniers événements liés au document."
        },
        {
            question: "Peut-on dupliquer une ligne dans un devis ?",
            options: ["Oui, via le menu '...'", "Non", "Uniquement les produits"],
            correct: 0,
            explanation: "La duplication de ligne évite de ressaisir des informations identiques."
        },
        {
            question: "Que permet de faire la barre de recherche dans la liste des devis ?",
            options: ["Rechercher par mots-clés", "Filtrer par date uniquement", "Supprimer des devis"],
            correct: 0,
            explanation: "La recherche est globale sur les noms, références et montants."
        },
        {
            question: "Comment modifier l'objet d'une facture ?",
            options: ["Dans le champ 'Objet' lors de la création ou modification", "On ne peut pas le changer", "Via le menu CRM"],
            correct: 0,
            explanation: "L'objet est éditable tant que la facture est en brouillon."
        },
        {
            question: "Qu'est-ce qu'une facture d'acompte ?",
            options: ["Une facture finale", "Une facture partielle émise avant la prestation complète", "Une facture gratuite"],
            correct: 1,
            explanation: "Elle permet de sécuriser la trésorerie avant le début des travaux."
        },
        {
            question: "Peut-on importer des clients depuis un fichier ?",
            options: ["Oui, via les paramètres d'importation", "Non", "Uniquement manuellement"],
            correct: 0,
            explanation: "L'importation de masse est possible via des fichiers CSV/Excel."
        },
        {
            question: "Où s'affiche l'évolution du CA ?",
            options: ["Dans le menu Stocks", "Sur le tableau de bord de la page d'accueil", "Dans la liste des clients"],
            correct: 1,
            explanation: "Le graphique d'évolution du CA est un élément clé du tableau de bord."
        },
        {
            question: "Comment ouvrir le menu des modules ?",
            options: ["En haut à gauche", "En bas à droite", "Il est toujours ouvert"],
            correct: 0,
            explanation: "Le menu 'burger' ou l'icône en haut à gauche permet de naviguer entre les modules."
        },
        {
            question: "Quelle est la fréquence de mise à jour du tableau de bord ?",
            options: ["Une fois par jour", "En temps réel", "Une fois par semaine"],
            correct: 1,
            explanation: "Les données sont synchronisées instantanément à chaque action."
        },
        {
            question: "Comment gérer les remises sur une facture ?",
            options: ["En pourcentage ou en montant sur chaque ligne", "Uniquement sur le total", "C'est impossible"],
            correct: 0,
            explanation: "MyUnisoft permet des remises à la ligne pour plus de flexibilité."
        },
        {
            question: "Qu'est-ce que le lettrage dans MyUnisoft ?",
            options: ["Changer la police d'écriture", "Associer un règlement à une facture", "Écrire des lettres aux clients"],
            correct: 1,
            explanation: "Le lettrage permet de suivre l'état de paiement des factures."
        },
        {
            question: "Peut-on créer des factures récurrentes ?",
            options: ["Oui, via les abonnements", "Non", "Uniquement manuellement"],
            correct: 0,
            explanation: "Le module d'abonnements automatise la facturation périodique."
        }
    ],
    'home': [
        {
            question: "Quelle est la mission principale de MyUnisoft ?",
            options: [
                "Vendre des ordinateurs",
                "Accompagner les experts-comptables dans leur transformation",
                "Créer des jeux vidéo",
                "Gérer des réseaux sociaux"
            ],
            correct: 1,
            explanation: "MyUnisoft est une plateforme conçue par et pour des experts-comptables."
        },
        {
            question: "Qui a conçu la plateforme MyUnisoft ?",
            options: ["Des banquiers", "Des experts-comptables", "Des agences de marketing", "Le gouvernement"],
            correct: 1,
            explanation: "La plateforme est née de la volonté d'experts-comptables de reprendre la main sur leurs outils."
        },
        {
            question: "MyUnisoft est-elle une solution Cloud ?",
            options: ["Oui, accessible partout", "Non, installation locale uniquement", "Uniquement sur CD-ROM"],
            correct: 0,
            explanation: "C'est une solution SaaS (Software as a Service) 100% Cloud."
        },
        {
            question: "Quel est l'avantage principal du mode SaaS pour un cabinet ?",
            options: ["Pas d'installation physique et mises à jour automatiques", "Devoir acheter des serveurs", "Utiliser des disquettes", "Travailler uniquement au bureau"],
            correct: 0,
            explanation: "Le SaaS permet une accessibilité totale et une maintenance simplifiée."
        },
        {
            question: "MyUnisoft est-elle une plateforme française ?",
            options: ["Oui", "Non, elle est américaine", "Non, elle est allemande", "Non, elle est japonaise"],
            correct: 0,
            explanation: "MyUnisoft est une solution souveraine développée en France."
        },
        {
            question: "Que signifie l'acronyme SaaS ?",
            options: ["Software as a Service", "System and Application Software", "Security as a Standard", "Service and Apple System"],
            correct: 0,
            explanation: "Le SaaS désigne un logiciel exploité à distance via le cloud."
        },
        {
            question: "La plateforme permet-elle la collaboration en temps réel ?",
            options: ["Oui, entre le cabinet et ses clients", "Non, il faut envoyer des fichiers par mail", "Uniquement pour le comptable", "Seulement la nuit"],
            correct: 0,
            explanation: "La collaboration est au cœur de l'ADN de MyUnisoft."
        },
        {
            question: "Quel est le principal gain de temps promis par MyUnisoft ?",
            options: ["L'automatisation de la saisie comptable", "La vitesse de frappe au clavier", "Le temps de pause café", "La suppression des impôts"],
            correct: 0,
            explanation: "L'automatisation libère du temps pour le conseil."
        },
        {
            question: "Peut-on accéder à MyUnisoft sur tablette ?",
            options: ["Oui, via un navigateur ou l'application", "Non, uniquement sur PC fixe", "Seulement sur iPad Pro", "Uniquement en magasin"],
            correct: 0,
            explanation: "La plateforme est multi-support et responsive."
        },
        {
            question: "La sécurité des données est-elle garantie ?",
            options: ["Oui, avec des serveurs hautement sécurisés et redondés", "Non, c'est risqué", "Seulement pour les gros clients", "Uniquement par mot de passe"],
            correct: 0,
            explanation: "MyUnisoft applique les plus hauts standards de sécurité informatique."
        },
        {
            question: "MyUnisoft propose-t-elle des outils de gestion commerciale ?",
            options: ["Oui, pour les devis et factures", "Non, uniquement de la compta", "Seulement pour les experts", "Uniquement pour l'export"],
            correct: 0,
            explanation: "La gestion commerciale est un module clé pour les clients du cabinet."
        },
        {
            question: "Qui sont les actionnaires de MyUnisoft ?",
            options: ["Des centaines de cabinets d'expertise comptable", "Une grande banque internationale", "Un fonds d'investissement étranger", "Une seule personne"],
            correct: 0,
            explanation: "C'est une solution créée par la profession pour la profession."
        },
        {
            question: "L'interface MyUnisoft est-elle personnalisable ?",
            options: ["Oui, avec le logo et les couleurs du cabinet", "Non, elle est fixe", "Seulement le fond d'écran", "Uniquement pour les administrateurs"],
            correct: 0,
            explanation: "La marque blanche permet au cabinet de valoriser son image."
        },
        {
            question: "Quel est le but ultime de l'automatisation chez MyUnisoft ?",
            options: ["Réduire les tâches à faible valeur ajoutée", "Remplacer les humains", "Augmenter le prix des licences", "Complexifier le travail"],
            correct: 0,
            explanation: "L'objectif est de se concentrer sur l'analyse et l'accompagnement."
        },
        {
            question: "MyUnisoft est-elle adaptée aux petites entreprises ?",
            options: ["Oui, parfaitement", "Non, uniquement aux multinationales", "Seulement aux associations", "Uniquement aux auto-entrepreneurs"],
            correct: 0,
            explanation: "La solution est scalable et s'adapte à toutes les tailles de structures."
        }
    ],

    'espace-collaboratif': [
        {
            question: "Comment le client transmet-il ses factures ?",
            options: [
                "Par pigeon voyageur",
                "Via l'espace collaboratif (web ou mobile)",
                "Il ne peut pas les transmettre",
                "Par fax uniquement"
            ],
            correct: 1,
            explanation: "L'espace collaboratif simplifie la collecte des pièces."
        },
        {
            question: "Quel est l'objectif principal de l'espace collaboratif ?",
            options: [
                "Jouer en ligne",
                "Fluidifier les échanges entre le cabinet et l'entreprise",
                "Remplacer les emails personnels",
                "Stocker des photos de vacances"
            ],
            correct: 1,
            explanation: "L'espace collaboratif centralise les documents et les échanges pour plus d'efficacité."
        },
        {
            question: "Le client peut-il voir ses indicateurs de gestion en temps réel ?",
            options: ["Oui, via le tableau de bord partagé", "Non, il doit attendre la fin du mois", "Seulement s'il appelle le cabinet", "Uniquement sur papier"],
            correct: 0,
            explanation: "La transparence et le temps réel sont au cœur de l'expérience collaborative."
        },
        {
            question: "Le client peut-il chatter avec son comptable ?",
            options: ["Oui, via la messagerie intégrée", "Non, il faut appeler", "Seulement par courrier", "Uniquement le week-end"],
            correct: 0,
            explanation: "La messagerie facilite les échanges quotidiens et le suivi."
        },
        {
            question: "Peut-on partager des documents volumineux sur l'espace ?",
            options: ["Oui, via la GED intégrée", "Non, limité à 1Mo", "Seulement par WeTransfer", "Uniquement des images"],
            correct: 0,
            explanation: "La GED permet de stocker et partager tous types de fichiers."
        },
        {
            question: "Le client reçoit-il une notification pour une nouvelle tâche ?",
            options: ["Oui, par email ou notification push", "Non, il doit vérifier lui-même", "Seulement s'il est connecté", "Uniquement par SMS"],
            correct: 0,
            explanation: "Les notifications assurent une réactivité optimale."
        },
        {
            question: "Peut-on valider des factures d'achat sur l'espace ?",
            options: ["Oui, via le workflow de validation", "Non, c'est uniquement comptable", "Seulement par l'expert", "Uniquement sur papier"],
            correct: 0,
            explanation: "Le client garde le contrôle sur ses paiements."
        },
        {
            question: "Le client peut-il voir ses dettes fournisseurs en temps réel ?",
            options: ["Oui, dans le module achats", "Non, il faut attendre le bilan", "Seulement s'il demande", "Uniquement les factures payées"],
            correct: 0,
            explanation: "La visibilité sur les dettes aide à gérer la trésorerie."
        },
        {
            question: "Peut-on créer des dossiers partagés dans la GED ?",
            options: ["Oui, pour organiser les documents par catégorie", "Non, c'est une liste simple", "Seulement pour le comptable", "Uniquement un dossier par an"],
            correct: 0,
            explanation: "Une GED organisée facilite la recherche d'information."
        },
        {
            question: "Le client peut-il exporter ses données comptables ?",
            options: ["Oui, en format Excel ou PDF", "Non, c'est bloqué", "Seulement en format texte", "Uniquement par capture d'écran"],
            correct: 0,
            explanation: "L'export permet au client d'analyser ses données librement."
        },
        {
            question: "Existe-t-il un calendrier partagé pour les échéances ?",
            options: ["Oui, pour suivre les dates fiscales et sociales", "Non", "Seulement pour les vacances", "Uniquement pour le cabinet"],
            correct: 0,
            explanation: "Le calendrier aide à ne rater aucune échéance importante."
        },
        {
            question: "Le client peut-il saisir ses variables de paie sur l'espace ?",
            options: ["Oui, via le module social dédié", "Non, c'est par mail", "Seulement pour les nouveaux employés", "Uniquement le gérant"],
            correct: 0,
            explanation: "La saisie directe évite les ressaisies et les erreurs."
        },
        {
            question: "Le comptable peut-il demander un document manquant via l'espace ?",
            options: ["Oui, via le système de requêtes", "Non, il doit appeler", "Seulement par courrier recommandé", "Uniquement lors du bilan"],
            correct: 0,
            explanation: "Les requêtes simplifient la collecte des pièces."
        },
        {
            question: "Le client voit-il les mêmes graphiques que le comptable ?",
            options: ["Oui, si les droits sont ouverts par le cabinet", "Non, jamais", "Seulement en noir et blanc", "Uniquement les graphiques de vente"],
            correct: 0,
            explanation: "Le partage d'indicateurs renforce le rôle de conseil."
        },
        {
            question: "Peut-on personnaliser l'accueil du client avec des widgets ?",
            options: ["Oui, pour afficher les infos les plus pertinentes", "Non, c'est fixe", "Seulement la couleur", "Uniquement le logo"],
            correct: 0,
            explanation: "Un dashboard personnalisé améliore l'expérience utilisateur."
        }
    ],
    'connecteurs': [
        {
            question: "À quoi servent les connecteurs bancaires ?",
            options: [
                "À charger son téléphone",
                "À automatiser la récupération des relevés",
                "À payer ses impôts",
                "À écouter de la musique"
            ],
            correct: 1,
            explanation: "Les connecteurs évitent la saisie manuelle des relevés bancaires."
        },
        {
            question: "Comment fonctionnent les connecteurs bancaires ?",
            options: [
                "Ils demandent une saisie manuelle chaque jour",
                "Ils récupèrent automatiquement les flux bancaires via API ou EBICS",
                "Ils nécessitent l'envoi de relevés papier",
                "Ils ne fonctionnent qu'avec les banques en ligne"
            ],
            correct: 1,
            explanation: "Les connecteurs automatisent la récupération des données bancaires en toute sécurité."
        },
        {
            question: "Quel est l'avantage de la synchronisation automatique ?",
            options: ["Éviter la saisie manuelle et les erreurs", "Gagner au loto", "Changer de banque", "Supprimer les frais bancaires"],
            correct: 0,
            explanation: "L'automatisation garantit la fiabilité des données financières."
        },
        {
            question: "Combien de banques sont compatibles avec MyUnisoft ?",
            options: ["La quasi-totalité des banques françaises", "Seulement 2 ou 3", "Uniquement les banques en ligne", "Aucune"],
            correct: 0,
            explanation: "MyUnisoft couvre un très large panel d'établissements financiers."
        },
        {
            question: "Qu'est-ce que la directive DSP2 ?",
            options: ["Une norme de sécurité pour l'accès aux données bancaires", "Un nouveau type de carte bleue", "Un code secret", "Une marque d'ordinateur"],
            correct: 0,
            explanation: "La DSP2 sécurise les échanges entre banques et plateformes tierces."
        },
        {
            question: "Faut-il rafraîchir la connexion bancaire régulièrement ?",
            options: ["Oui, généralement tous les 90 jours pour la sécurité", "Non, c'est à vie", "Tous les jours", "Uniquement quand on y pense"],
            correct: 0,
            explanation: "Le rafraîchissement périodique est une obligation légale de sécurité."
        },
        {
            question: "Peut-on importer des relevés manuellement si besoin ?",
            options: ["Oui, en format OFX, QIF ou CSV", "Non, uniquement automatique", "Seulement par photo", "Uniquement en format Word"],
            correct: 0,
            explanation: "L'import manuel reste possible pour les cas particuliers."
        },
        {
            question: "Les connecteurs récupèrent-ils les images des chèques ?",
            options: ["Certains connecteurs avancés le permettent", "Non, jamais", "Uniquement les chèques de banque", "Seulement en noir et blanc"],
            correct: 0,
            explanation: "La richesse des données dépend du type de connexion."
        },
        {
            question: "Peut-on lier plusieurs comptes d'une même banque ?",
            options: ["Oui, tous les comptes autorisés par le client", "Non, un seul par banque", "Seulement le compte courant", "Uniquement les comptes pro"],
            correct: 0,
            explanation: "Vous pouvez centraliser toute votre gestion bancaire."
        },
        {
            question: "Le solde affiché est-il le solde réel ou comptable ?",
            options: ["Les deux sont affichés pour comparaison", "Uniquement le réel", "Uniquement le comptable", "Aucun des deux"],
            correct: 0,
            explanation: "Le rapprochement bancaire est facilité par cette double vue."
        },
        {
            question: "Peut-on automatiser l'affectation des lignes bancaires ?",
            options: ["Oui, via des règles d'affectation intelligentes", "Non, c'est manuel", "Seulement pour les virements", "Uniquement pour les frais"],
            correct: 0,
            explanation: "Les règles d'affectation automatisent la comptabilisation."
        },
        {
            question: "Les connecteurs fonctionnent-ils avec PayPal ou Stripe ?",
            options: ["Oui, ce sont des connecteurs de paiement supportés", "Non", "Seulement PayPal", "Uniquement Stripe"],
            correct: 0,
            explanation: "MyUnisoft se connecte aussi aux plateformes de paiement en ligne."
        },
        {
            question: "La récupération des flux est-elle sécurisée ?",
            options: ["Oui, cryptage de bout en bout", "Non", "Seulement en Wifi", "Uniquement avec un VPN"],
            correct: 0,
            explanation: "La sécurité bancaire est au cœur du système."
        },
        {
            question: "Peut-on voir les transactions en attente ?",
            options: ["Oui, selon les données fournies par la banque", "Non", "Seulement les prélèvements", "Uniquement les CB"],
            correct: 0,
            explanation: "L'anticipation est clé pour une bonne gestion de trésorerie."
        },
        {
            question: "Comment supprimer un connecteur bancaire ?",
            options: ["Dans les paramètres de connexion bancaire", "En appelant la banque", "En supprimant son compte MyUnisoft", "On ne peut pas"],
            correct: 0,
            explanation: "Vous gardez le contrôle total sur vos connexions."
        }
    ],
    'appli-mobile': [
        {
            question: "Quelle fonctionnalité est clé sur l'appli mobile MyUnisoft ?",
            options: [
                "Le scan de factures en temps réel",
                "Le montage vidéo",
                "La météo",
                "Le GPS"
            ],
            correct: 0,
            explanation: "Le scan mobile permet une comptabilité au fil de l'eau."
        },
        {
            question: "L'application mobile est-elle disponible sur iOS et Android ?",
            options: ["Oui", "Non, seulement iOS", "Non, seulement Android", "Seulement sur tablettes"],
            correct: 0,
            explanation: "L'accessibilité multi-plateforme est essentielle pour la mobilité des entrepreneurs."
        },
        {
            question: "Peut-on consulter son tableau de bord sur mobile ?",
            options: ["Oui, pour suivre ses indicateurs clés partout", "Non, uniquement sur PC", "Seulement en mode paysage", "Uniquement le soir"],
            correct: 0,
            explanation: "Le pilotage de l'entreprise se fait aussi en mobilité."
        },
        {
            question: "Peut-on valider un virement depuis l'appli ?",
            options: ["Oui, avec MyU Compte Pro", "Non", "Seulement les petits montants", "Uniquement vers son comptable"],
            correct: 0,
            explanation: "La gestion des paiements est intégrée à l'offre mobile."
        },
        {
            question: "L'appli permet-elle de voir le CA du jour ?",
            options: ["Oui, sur le dashboard mobile", "Non", "Seulement celui du mois dernier", "Uniquement les ventes HT"],
            correct: 0,
            explanation: "Suivez votre activité commerciale en temps réel."
        },
        {
            question: "Peut-on créer un nouveau client en déplacement ?",
            options: ["Oui, directement depuis l'appli", "Non", "Seulement le consulter", "Uniquement avec une connexion 5G"],
            correct: 0,
            explanation: "L'appli mobile est un véritable outil de gestion nomade."
        },
        {
            question: "Le scan mobile gère-t-il les documents multi-pages ?",
            options: ["Oui, on peut ajouter plusieurs photos à un document", "Non, une seule page", "Seulement en PDF", "Uniquement en format paysage"],
            correct: 0,
            explanation: "La numérisation s'adapte à tous vos documents."
        },
        {
            question: "Peut-on envoyer un message à son comptable via l'appli ?",
            options: ["Oui, via la messagerie intégrée", "Non", "Seulement par email classique", "Uniquement en laissant un message vocal"],
            correct: 0,
            explanation: "La communication avec le cabinet est simplifiée."
        },
        {
            question: "L'appli supporte-t-elle le FaceID ou TouchID ?",
            options: ["Oui, pour une connexion rapide et sécurisée", "Non", "Seulement sur Android", "Uniquement sur iPhone 15"],
            correct: 0,
            explanation: "La biométrie allie confort et sécurité."
        },
        {
            question: "Peut-on consulter ses documents stockés en GED ?",
            options: ["Oui, accès complet à la GED mobile", "Non", "Seulement les factures d'achat", "Uniquement les documents récents"],
            correct: 0,
            explanation: "Vos archives vous suivent partout."
        },
        {
            question: "Reçoit-on des notifications push sur mobile ?",
            options: ["Oui, pour les alertes et les messages", "Non", "Seulement si l'appli est ouverte", "Uniquement pour la pub"],
            correct: 0,
            explanation: "Restez informé des événements importants de votre dossier."
        },
        {
            question: "Peut-on faire une note de frais avec une simple photo ?",
            options: ["Oui, c'est l'usage principal", "Non, il faut scanner", "Seulement pour les repas", "Uniquement pour les transports"],
            correct: 0,
            explanation: "La gestion des frais devient un jeu d'enfant."
        },
        {
            question: "L'appli fonctionne-t-elle hors connexion ?",
            options: ["Consultation limitée, synchronisation au retour du réseau", "Non, pas du tout", "Oui, à 100%", "Uniquement pour le scan"],
            correct: 0,
            explanation: "L'appli gère intelligemment les zones blanches."
        },
        {
            question: "Peut-on signer des documents électroniquement sur mobile ?",
            options: ["Oui, si l'option est activée", "Non", "Seulement avec un stylet", "Uniquement les contrats de travail"],
            correct: 0,
            explanation: "La signature électronique accélère vos processus."
        },
        {
            question: "Comment mettre à jour l'application mobile ?",
            options: ["Via l'App Store ou Google Play Store", "En branchant le téléphone au PC", "C'est automatique à distance", "Il faut racheter l'appli"],
            correct: 0,
            explanation: "Les mises à jour apportent régulièrement de nouvelles fonctions."
        }
    ],
    'appli-mobile-collab': [
        {
            question: "Que peut faire un collaborateur sur l'appli mobile ?",
            options: [
                "Uniquement consulter ses mails",
                "Saisir ses notes de frais et scanner ses justificatifs",
                "Changer le mot de passe de l'expert-comptable",
                "Rien du tout"
            ],
            correct: 1,
            explanation: "L'appli mobile permet aux collaborateurs de gagner du temps sur la gestion administrative."
        },
        {
            question: "Comment le scan intelligent fonctionne-t-ils ?",
            options: ["Il faut tout taper à la main", "Il utilise l'OCR pour extraire automatiquement les données", "Il envoie une photo à un humain", "Il ne fonctionne pas"],
            correct: 1,
            explanation: "L'OCR (Reconnaissance Optique de Caractères) automatise la saisie des données clés."
        },
        {
            question: "Un collaborateur peut-il voir les salaires de ses collègues ?",
            options: ["Non, sauf s'il a les droits RH spécifiques", "Oui, tout est public", "Seulement celui de son manager", "Uniquement s'il est admin"],
            correct: 0,
            explanation: "La confidentialité des données RH est strictement respectée."
        },
        {
            question: "Comment soumettre une demande de congé sur mobile ?",
            options: ["Via le module absence de l'appli", "En envoyant un SMS", "En criant dans le bureau", "On ne peut pas"],
            correct: 0,
            explanation: "La demande est transmise directement au manager pour validation."
        },
        {
            question: "Peut-on suivre ses heures de travail sur l'appli ?",
            options: ["Oui, via le module temps", "Non", "Seulement les heures sup", "Uniquement le temps de pause"],
            correct: 0,
            explanation: "Le suivi d'activité est simplifié pour tous."
        },
        {
            question: "Le manager peut-il valider les frais sur mobile ?",
            options: ["Oui, d'un simple clic", "Non, uniquement sur PC", "Seulement par téléphone", "Uniquement le vendredi"],
            correct: 0,
            explanation: "Le workflow de validation est fluide, même en déplacement."
        },
        {
            question: "Peut-on consulter son bulletin de paie sur l'appli ?",
            options: ["Oui, dans son espace personnel sécurisé", "Non", "Seulement le montant net", "Uniquement si on l'imprime"],
            correct: 0,
            explanation: "Le coffre-fort numérique salarié est accessible 24/7."
        },
        {
            question: "L'appli permet-elle de badger virtuellement ?",
            options: ["Oui, si l'option de pointage est activée", "Non", "Seulement avec un badge physique", "Uniquement à l'entrée du bâtiment"],
            correct: 0,
            explanation: "Le pointage mobile est idéal pour le télétravail."
        },
        {
            question: "Peut-on mettre à jour ses informations personnelles (RIB, adresse) ?",
            options: ["Oui, pour faciliter la gestion RH", "Non", "Seulement le RIB", "Uniquement l'adresse"],
            correct: 0,
            explanation: "Le collaborateur est acteur de son dossier RH."
        },
        {
            question: "Le collaborateur reçoit-il une alerte si sa note de frais est refusée ?",
            options: ["Oui, avec le motif du refus", "Non", "Seulement s'il demande", "Uniquement par courrier"],
            correct: 0,
            explanation: "La transparence du workflow évite les malentendus."
        },
        {
            question: "Peut-on partager un document avec son équipe via l'appli ?",
            options: ["Oui, dans les dossiers partagés autorisés", "Non", "Seulement avec son manager", "Uniquement des photos"],
            correct: 0,
            explanation: "Le collaboratif s'étend à toute l'équipe."
        },
        {
            question: "L'appli gère-t-elle les indemnités kilométriques ?",
            options: ["Oui, calcul auto via trajet ou GPS", "Non", "Seulement le prix du litre", "Uniquement pour les vélos"],
            correct: 0,
            explanation: "Le calcul des IK est automatisé et conforme."
        },
        {
            question: "Peut-on voir l'organigramme de l'entreprise ?",
            options: ["Oui, pour mieux connaître ses collègues", "Non", "Seulement sa propre équipe", "Uniquement les noms"],
            correct: 0,
            explanation: "L'organigramme favorise la cohésion interne."
        },
        {
            question: "Comment contacter un collègue via l'appli ?",
            options: ["Via l'annuaire interne intégré", "En cherchant sur Google", "On ne peut pas", "Uniquement par pigeon"],
            correct: 0,
            explanation: "L'annuaire facilite les contacts professionnels."
        },
        {
            question: "Peut-on accéder au planning de l'équipe ?",
            options: ["Oui, pour coordonner les présences", "Non", "Seulement son propre planning", "Uniquement les jours fériés"],
            correct: 0,
            explanation: "La visibilité sur le planning améliore l'organisation."
        }
    ]
};

export const START_QUIZ_POOL = QUIZ_DATA['maitriser-start'];
