// app/data/questions.ts
export type Option = {
  id: number;
  text: string;
  correct: boolean;
  feedback: string;
};

export type Question = {
  id: number;
  phase: number; // 1..4
  question: string; // texto da pergunta
  options: Option[]; // até 6 opções
};

// Banco com 12 perguntas (4 fases x 3 perguntas)
// Formato: questions: Question[]
export const questions: Question[] = [
  // Fase 1
  {
    id: 1,
    phase: 1,
    question: "Qual é o principal objetivo da ISO/IEC 20000?",
    options: [
      { id: 1, text: "Garantir qualidade na gestão de serviços de TI", correct: true, feedback: "Correto — ISO 20000 define práticas para gestão de serviços de TI." },
      { id: 2, text: "Aumentar a velocidade da rede", correct: false, feedback: "Incorreto — desempenho de rede não é o foco da norma." },
      { id: 3, text: "Fornecer software open-source", correct: false, feedback: "Incorreto — a norma não impõe tipo de software." },
    ],
  },
  {
    id: 2,
    phase: 1,
    question: "O que representa 'serviço' na ISO 20000?",
    options: [
      { id: 1, text: "Um conjunto de funções para entregar valor ao cliente", correct: true, feedback: "Correto — serviço entrega valor e resultados desejados." },
      { id: 2, text: "Somente hardware e infraestrutura", correct: false, feedback: "Incorreto — infraestrutura pode suportar, mas não é o serviço em si." },
      { id: 3, text: "Uma licença de software", correct: false, feedback: "Incorreto — licença isolada não define um serviço." },
    ],
  },
  {
    id: 3,
    phase: 1,
    question: "Qual benefício direto a ISO 20000 costuma trazer?",
    options: [
      { id: 1, text: "Melhoria na consistência da entrega de serviços", correct: true, feedback: "Exato — a norma promove processos consistentes e controlados." },
      { id: 2, text: "Eliminação imediata de incidentes", correct: false, feedback: "Não — ela reduz probabilidade e impacto, mas não elimina todos incidentes." },
      { id: 3, text: "Aumento automático de receita", correct: false, feedback: "Benefício financeiro é indireto." },
    ],
  },

  // Fase 2
  {
    id: 4,
    phase: 2,
    question: "Qual processo é responsável por restaurar o serviço após um incidente?",
    options: [
      { id: 1, text: "Gerenciamento de Incidentes", correct: true, feedback: "Correto — objetivo é restaurar o serviço rapidamente." },
      { id: 2, text: "Gerenciamento de Mudanças", correct: false, feedback: "Incorreto — mudanças cuidam de alterações controladas." },
      { id: 3, text: "Gerenciamento de Configuração", correct: false, feedback: "Configuração registra itens de configuração, não gerencia restauração." },
    ],
  },
  {
    id: 5,
    phase: 2,
    question: "O que é uma RFC (Request for Change)?",
    options: [
      { id: 1, text: "Um pedido formal para implementar uma mudança", correct: true, feedback: "Certo — RFC descreve a mudança, riscos e impacto." },
      { id: 2, text: "Um tipo de incidente crítico", correct: false, feedback: "Incorreto — não é incidente, é pedido de mudança." },
      { id: 3, text: "Relatório financeiro do serviço", correct: false, feedback: "Incorreto — não tem relação." },
    ],
  },
  {
    id: 6,
    phase: 2,
    question: "Qual a finalidade do gerenciamento de problemas?",
    options: [
      { id: 1, text: "Identificar causa raiz e prevenir reincidência", correct: true, feedback: "Correto — é tratamento proativo para reduzir incidentes futuros." },
      { id: 2, text: "Instalar atualizações automaticamente", correct: false, feedback: "Incorreto — atualizações são ações, não o objetivo do processo." },
      { id: 3, text: "Gerenciar contratos com fornecedores", correct: false, feedback: "Isso pertence ao gerenciamento de fornecedores." },
    ],
  },

  // Fase 3
  {
    id: 7,
    phase: 3,
    question: "Um incidente afeta 50% dos usuários — qual ação priorizar?",
    options: [
      { id: 1, text: "Ativar procedimento de resposta para restauração rápida", correct: true, feedback: "Correto — priorize mitigação e restauração do serviço." },
      { id: 2, text: "Abrir RFC antes de qualquer ação", correct: false, feedback: "Incorreto — RFC é importante, mas ação imediata costuma ser necessária." },
      { id: 3, text: "Notificar fornecedores e aguardar", correct: false, feedback: "Incorreto — esperar pode agravar o impacto." },
    ],
  },
  {
    id: 8,
    phase: 3,
    question: "Após resolver incidente crítico, qual é o próximo passo?",
    options: [
      { id: 1, text: "Realizar análise de causa raiz e ações preventivas", correct: true, feedback: "Correto — previne reincidência." },
      { id: 2, text: "Arquivar o ticket sem investigação", correct: false, feedback: "Incorreto — ignora aprendizado." },
      { id: 3, text: "Aumentar preço do serviço", correct: false, feedback: "Incorreto — não relevante." },
    ],
  },
  {
    id: 9,
    phase: 3,
    question: "Em mudança com risco de interrupção, o que fazer antes de executar?",
    options: [
      { id: 1, text: "Avaliar riscos e planejar rollback", correct: true, feedback: "Certo — planejamento minimiza impacto." },
      { id: 2, text: "Executar em horário de pico para testar", correct: false, feedback: "Incorreto — horário de pico aumenta risco." },
      { id: 3, text: "Manter mudança sem documentação", correct: false, feedback: "Incorreto — documentação é essencial." },
    ],
  },

  // Fase 4
  {
    id: 10,
    phase: 4,
    question: "Como medir se um serviço atinge níveis acordados?",
    options: [
      { id: 1, text: "Através de métricas e SLAs definidos e monitorados", correct: true, feedback: "Correto — SLAs e KPIs são a base da medição." },
      { id: 2, text: "Pela opinião de um único gerente", correct: false, feedback: "Incorreto — medição objetiva é necessária." },
      { id: 3, text: "Somente por relatórios anuais", correct: false, feedback: "Incorreto — medição contínua é preferível." },
    ],
  },
  {
    id: 11,
    phase: 4,
    question: "Qual benefício de gerenciar mudanças formalmente?",
    options: [
      { id: 1, text: "Reduz riscos e interrupções não planejadas", correct: true, feedback: "Certo — controle de mudanças diminui impactos." },
      { id: 2, text: "Garante que testes sempre falhem", correct: false, feedback: "Incorreto — objetivo é testes adequados." },
      { id: 3, text: "Elimina necessidade de comunicação", correct: false, feedback: "Incorreto — comunicação é essencial." },
    ],
  },
  {
    id: 12,
    phase: 4,
    question: "Qual prática melhora retenção do aprendizado após uma fase?",
    options: [
      { id: 1, text: "Dar feedback imediato com explicação pedagógica", correct: true, feedback: "Correto — feedback educativo reforça aprendizado." },
      { id: 2, text: "Reiniciar sem explicar erros", correct: false, feedback: "Incorreto — explicar é crucial." },
      { id: 3, text: "Ignorar resultados do jogador", correct: false, feedback: "Incorreto — perder oportunidade de melhoria." },
    ],
  },
];
