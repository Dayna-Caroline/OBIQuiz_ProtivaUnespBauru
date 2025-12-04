const desafios = {
    id: "desafios",
    title: "Desafios & Algoritmos",
    description: "Questões estilo prova teórica e pensamento computacional.",
    difficulty: "Difícil",
    icon: "trophy",
    color: "bg-yellow-100 text-yellow-800",
    questions: [
      {
        question: "Numa fila, quem entra primeiro sai primeiro. Isso é:",
        options: ["LIFO (Pilha)", "FIFO (Fila)", "Lista", "Árvore"],
        answer: 1
      },
      {
        question: "Qual a complexidade de um algoritmo que percorre uma lista uma vez?",
        options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
        answer: 1
      },
      {
        question: "Em uma pilha (Stack), qual a regra de remoção?",
        options: ["Primeiro a entrar, primeiro a sair", "Último a entrar, primeiro a sair", "Aleatório", "Pelo meio"],
        answer: 1
      },
      {
        question: "O algoritmo 'Bubble Sort' serve para:",
        options: ["Buscar um item", "Ordenar uma lista", "Somar números", "Criar gráficos"],
        answer: 1
      },
      {
        question: "Busca Binária só funciona se a lista estiver:",
        options: ["Vazia", "Ordenada", "Aleatória", "Cheia de strings"],
        answer: 1
      },
      {
        question: "O que é 'força bruta'?",
        options: ["Quebrar o computador", "Testar todas as possibilidades", "Usar o melhor algoritmo", "Adivinhar"],
        answer: 1
      },
      {
        question: "Em um grafo, o que conecta dois vértices?",
        options: ["Um nó", "Uma aresta", "Um pixel", "Um vetor"],
        answer: 1
      },
      {
        question: "Qual variável geralmente controla um loop 'for'?",
        options: ["Contador (i)", "Acumulador", "String", "Booleano"],
        answer: 0
      },
      {
        question: "Se você tem 3 camisas e 2 calças, quantas combinações pode fazer?",
        options: ["5", "6", "3", "2"],
        answer: 1
      },
      {
        question: "O Problema do Caixeiro Viajante busca:",
        options: ["O caminho mais longo", "O caminho mais curto passando por todos os pontos", "Qualquer caminho", "O hotel mais barato"],
        answer: 1
      }
    ]
};

export default desafios;