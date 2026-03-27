import React from 'react';
import { useParams } from 'react-router-dom';
import { manualData } from '../data/manualData';

export default function Content() {
  const { id } = useParams();
  const chapter = id ? (manualData as any)[id] : null;
  
  if (!chapter) {
    return <div className="text-center mt-20 text-gray-600">Chapitre non trouvé.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-4">{chapter.title}</h2>
      <div className="prose prose-slate" dangerouslySetInnerHTML={{ __html: chapter.content }} />
    </div>
  );
}
