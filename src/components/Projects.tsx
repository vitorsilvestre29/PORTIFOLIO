import React from 'react';
import { ExternalLink, Github, LineChart, Package, MessageCircle } from 'lucide-react';

const projects = [
  {
    title: 'Análise de Dados de Vendas Simples',
    description: 'Análise de conjunto de dados de vendas identificando produtos mais vendidos, receita total e sazonalidade. Inclui limpeza de dados, análise de métricas básicas e visualizações.',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800',
    tags: ['Excel', 'Python', 'Power BI'],
    icon: <LineChart className="h-8 w-8 text-blue-400" />,
    github: '#',
    demo: '#'
  },
  {
    title: 'Sistema de Análise de Estoque',
    description: 'Sistema de análise de dados de estoque com insights sobre produtos mais vendidos, estoque mínimo e sazonalidade. Inclui modelagem de dados e dashboards interativos.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Power BI', 'PostgreSQL'],
    icon: <Package className="h-8 w-8 text-blue-400" />,
    github: '#',
    demo: '#'
  },
  {
    title: 'Análise de Reclamações de Consumidores',
    description: 'Análise de dados de SAC identificando padrões, principais problemas e tempo médio de resolução. Utiliza técnicas de limpeza de dados e visualizações interativas.',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'MySQL', 'Power BI'],
    icon: <MessageCircle className="h-8 w-8 text-blue-400" />,
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-gray-900 p-2 rounded-full shadow-lg">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}