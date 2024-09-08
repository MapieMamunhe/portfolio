import {addProjectAndReinitialize} from "../script.js";
  
const projects = [
  {
    title: "Plataforma de Pagamentos Escrow (PAGOW)",
    description: "Desenvolvi um sistema usando React Native para o frontend e ExpressJS para o backend, aplicando técnicas de testes automatizados com Jest. Este projeto foi a conclusão do meu curso e demonstra habilidades em desenvolvimento mobile e backend, com ênfase em testes para garantir a qualidade do software.",
    technologies: ["React Native", "ExpressJS", "Jest"],
    projectUrl: "https://pagow.vercel.app/",
    sourceInfo: "github",
    sourceCodeUrl: "https://github.com/MapieMamunhe/pagow",
    imageUrl: "assets/images/work/final-project.png",
    imageAlt: "Screenshot for Final Project"
  },
  {
    title: "Sistema de gestão de reservas",
    description: "Sistema de gestão de reservas de quartos de hotel: Gerir facilmente quartos e clientes com atribuições automáticas de quartos por tipo. Notificações instantâneas sobre a disponibilidade de quartos e um painel de administração com informações importantes. Geração de recibos personalizados para cada hóspede",
    technologies: ["PHP", "MYSQL", "Laravel", "Bootstrap", "Vite", "Hospedagem em Servidor compartilhado"],
    imageUrl: "assets/images/work/reservation-system.png",
    imageAlt: "Screenshot for Reservation System"
  },
  {
    title: "Sistema de Vendas",
    description: "Um sistema de vendas personalizável que aprimora suas operações com uma interface intuitiva e relatórios semanais detalhados. Adaptável aos seus fluxos de trabalho específicos, utiliza AWS, Spring Boot, AngularJS, Docker e Java para otimizar processos e auxiliar na tomada de decisões informadas.",
    technologies: ["Hospedagem - AWS EC2", "Spring Boot", "AngularJS", "Docker", "Java"],
    imageUrl: "assets/images/work/sale-system.png",
    imageAlt: "Screenshot for Sales System"
  },
  {
    title: "API de Loteria",
    description: "Desenvolvi uma API robusta em Node.js com TypeScript para gerenciamento de loterias. Suporta criação e consulta de palpites e resultados, com autenticação JWT segura. A documentação é gerada automaticamente pelo Swagger e a validação é feita com Zod para garantir a integridade dos dados. Utiliza SQL Server para armazenamento e é hospedada em um VPS, oferecendo alta disponibilidade e controle total do ambiente.",
    technologies: ["Node.js", "TypeScript", "JWT", "Swagger", "Zod", "SQL Server", "Hospedagwm VPS"],
    imageUrl: "assets/images/work/lottery-api.png",
    imageAlt: "Screenshot for Lottery API"
  },
];

projects.forEach(project => addProjectAndReinitialize(project));

