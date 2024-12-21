import React from 'react';
import { BarChart2, Database, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-4 mb-6">
            <Database className="h-8 w-8 text-blue-400" />
            <BarChart2 className="h-8 w-8 text-blue-400" />
            <TrendingUp className="h-8 w-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portfólio de Análise de Dados
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Transformando dados brutos em insights acionáveis através de análises avançadas,
            visualização e pensamento estratégico.
          </p>
          <div className="flex gap-4">
            <a
              href="#contato"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Entre em Contato
            </a>
            <a
              href="#projetos"
              className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-900/30 transition-colors"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}