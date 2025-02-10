import React from 'react';
import { Database, BarChart2, Brain, Code2, PieChart, TrendingUp } from 'lucide-react';

const skills = [
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Gestão de Dados',
    description: 'SQL, PostgreSQL, Limpeza de Dados, Processos ETL'
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: 'Visualização de Dados',
    description: 'Power BI, Python, SQL'
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Análise Estatística',
    description: 'Teste de Hipóteses, Análise de Regressão, Testes A/B'
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Programação',
    description: 'Python, Pandas, NumPy'
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: 'Business Intelligence',
    description: 'Desenvolvimento de KPIs, Criação de Dashboards, Relatórios'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Análise Preditiva',
    description: 'Previsões, Machine Learning, Análise de Tendências'
  }
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-lg hover:shadow-xl transition-shadow border border-gray-700"
            >
              <div className="text-blue-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}