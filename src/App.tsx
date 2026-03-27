import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">
          <Routes>
            <Route path="/chapter/:id" element={<Content />} />
            <Route path="/" element={<div className="text-center mt-20 text-gray-600">Sélectionnez un chapitre pour commencer.</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
