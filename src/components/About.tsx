import React from 'react';
import { User, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Sobre Mim</h2>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8 shadow-xl">
          <div className="space-y-6 text-gray-300">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
              <p>
                Sou estudante de Sistemas de Informação com paixão por dados e sua capacidade de gerar insights. Tenho experiência em Gestão de Dados, Análise Estatística e Business Intelligence, utilizando ferramentas como SQL, PostgreSQL, Python (Pandas, NumPy) e Power BI.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <Briefcase className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
              <p>
                Meu foco está em transformar dados brutos em informações acionáveis, criando desde relatórios interativos até modelos preditivos. Busco sempre desafios que me permitam aplicar minhas habilidades para ajudar empresas a melhorar processos e alcançar objetivos, com ênfase em transformação de dados, dashboards e KPIs.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <User className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
              <p>
                Estou comprometido em continuar evoluindo na área de Business Intelligence e Análise de Dados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
