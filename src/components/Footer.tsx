import React from 'react';
import { Database } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Database className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">AnalistaDados</span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Vitor Silvestre. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}