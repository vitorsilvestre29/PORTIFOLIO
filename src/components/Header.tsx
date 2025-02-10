import React from 'react';
import { Database } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold text-white">AnalistaDados</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-300 hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#habilidades" className="text-gray-300 hover:text-blue-400 transition-colors">Habilidades</a>
            <a href="#projetos" className="text-gray-300 hover:text-blue-400 transition-colors">Projetos</a>
            <a href="#contato" className="text-gray-300 hover:text-blue-400 transition-colors">Contato</a>
          </div>
        </div>
      </nav>
    </header>
  );
}