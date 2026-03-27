import React from 'react';
import { Link } from 'react-router-dom';

const chapters = [
  { id: '1', title: '1. Pilotage de l’entreprise' },
  { id: '2', title: '2. Gestion des tiers' },
  { id: '3', title: '3. Gestion des produits' },
  { id: '4', title: '4. Devis et facturation' },
  { id: '5', title: '5. Suivi de travaux' },
  { id: '6', title: '6. Bons de commande, bons de livraison et réception' },
  { id: '7', title: '7. Suivi des règlements' },
  { id: '8', title: '8. CRM intégré' },
  { id: '9', title: '9. Compte pro et carte de paiement' },
];

export default function Sidebar() {
  return (
    <nav className="w-64 bg-white border-r border-gray-200 p-4">
      <h1 className="text-xl font-bold mb-6 text-gray-800">Manuel Business</h1>
      <ul>
        {chapters.map(chapter => (
          <li key={chapter.id} className="mb-2">
            <Link to={`/chapter/${chapter.id}`} className="text-gray-600 hover:text-blue-600 block p-2 rounded hover:bg-blue-50">
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}