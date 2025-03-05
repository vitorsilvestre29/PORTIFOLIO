import { ExternalLink, Github, LineChart, Package, BarChart3, MessageCircle } from 'lucide-react'; 

const projects = [
  {
    title: 'Análise de Dados de Vendas Simples',
    description: 'Análise de conjunto de dados de vendas identificando produtos mais vendidos, receita total e sazonalidade. Inclui limpeza de dados, análise de métricas básicas e visualizações.',
    image: 'https://i.imgur.com/TqFk2Ks.jpeg',
    tags: ['Excel', 'Power BI'],
    icon: <LineChart className="h-8 w-8 text-blue-400" />,
    powerbiLink: 'https://app.powerbi.com/view?r=eyJrIjoiN2FlZTJhMTYtNGUwZS00ODA0LWJiNDgtZjU2MmUxMGUwYWM1IiwidCI6IjM1YTRlNGUxLWIyZDUtNGIxNC1hMTVjLTY0MjA2MTk0OGY0NCJ9&pageName=f22c8ff147d0934b057a'
  },
  {
    title: 'Sistema de Análise de Estoque',
    description: 'Sistema de análise de dados de estoque com insights sobre produtos mais vendidos, estoque mínimo e sazonalidade. Inclui modelagem de dados e dashboards interativos.',
    image: 'https://postimg.cc/87fd6Dcz', // Link direto da imagem
    tags: ['Python', 'Power BI', 'SQL Server'],
    icon: <Package className="h-8 w-8 text-blue-400" />,
    github: 'https://github.com/vitorsilvestre29/dash-estoque', // Link do repositório do projeto Dash
    linkProjeto: 'https://dash-estoque.onrender.com' // Link do projeto Dash
  },
  {
    title: 'Análise de Produtividade Operacional',
    description: 'Análise de Produtividade para medir a eficiência dos processos internos, avaliando SLA, produtividade por colaborador e eficácia de processos manuais.',
    image: 'https://i.postimg.cc/cg9tz8jB/YmU0sbj.jpg', // Link direto da imagem
    tags: ['Python.', 'SQL Server', 'Power BI'],
    icon: <MessageCircle className="h-8 w-8 text-blue-400" />,
    github: '#',
    powerbiLink: 'https://app.powerbi.com/view?r=eyJrIjoiMDdlNjRhYjItNGEzOS00MWMzLWIzZDEtNzdkMDM0NDUyZjQwIiwidCI6IjM1YTRlNGUxLWIyZDUtNGIxNC1hMTVjLTY0MjA2MTk0OGY0NCJ9' //LINK POWERBI
  },
  {
    title: 'Análise de Gestão Financeira',
    description: 'Gestão Financeira Empresarial para monitorar a saúde financeira do negócio, analisando receitas, despesas, fluxo de caixa acumulado e rentabilidade, proporcionando insights para otimização de custos e aumento da lucratividade.',
    image: 'https://i.postimg.cc/nV3Q3nVy/Whats-App-Image-2025-03-05-at-13-22-37.jpg', // Link direto da imagem
    tags: ['SQL Server', 'Power BI'],
    icon: <MessageCircle className="h-8 w-8 text-blue-400" />,
    github: '#',
    powerbiLink: 'https://app.powerbi.com/view?r=eyJrIjoiMDU3YWQzYTItZWVhYi00NTNkLWFjZjctOTU4MzA2YTQ4NTMxIiwidCI6IjM1YTRlNGUxLWIyZDUtNGIxNC1hMTVjLTY0MjA2MTk0OGY0NCJ9' //LINK POWERBI
  },
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
                  {project.tags?.map((tag, tagIndex) => (
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span>Código</span>
                  </a>
                  {project.powerbiLink && (
                    <a
                      href={project.powerbiLink}
                      className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BarChart3 className="h-5 w-5" />
                      <span>Power BI</span>
                    </a>
                  )}

                  {/* Novo botão para o link do projeto Dash */}
                  {project.linkProjeto && (
                    <a
                      href={project.linkProjeto}
                      className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Projeto de Estoque</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
