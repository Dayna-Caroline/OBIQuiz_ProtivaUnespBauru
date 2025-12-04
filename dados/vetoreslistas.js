const vetoreslistas = {
    id: "vetores-listas",
    title: "Vetores e Listas",
    description: "Trabalhando com coleções de dados.",
    difficulty: "Difícil",
    icon: "list",
    color: "bg-indigo-50 text-indigo-600",
    questions: [
      {
        question: "Como se declara uma lista vazia em Python?",
        options: ["lista = ()", "lista = []", "lista = {}", "lista = new List()"],
        answer: 1
      },
      {
        question: "Qual o índice do primeiro elemento de uma lista?",
        options: ["1", "0", "-1", "A"],
        answer: 1
      },
      {
        question: "Se lista = [10, 20, 30], qual valor de lista[1]?",
        options: ["10", "20", "30", "Erro"],
        answer: 1
      },
      {
        question: "Qual método adiciona um elemento ao final da lista?",
        options: [".add()", ".insert()", ".append()", ".push()"],
        answer: 2
      },
      {
        question: "Como saber o tamanho de uma lista?",
        options: ["size(lista)", "lista.length", "len(lista)", "count(lista)"],
        answer: 2
      },
      {
        question: "O que faz lista.pop()?",
        options: ["Adiciona um item", "Remove e retorna o último item", "Ordena a lista", "Limpa a lista"],
        answer: 1
      },
      {
        question: "Como acessar o último elemento de uma lista em Python?",
        options: ["lista[last]", "lista[-1]", "lista[len]", "lista[end]"],
        answer: 1
      },
      {
        question: "Se lista = [1, 2, 3], o que faz lista * 2?",
        options: ["Multiplica os itens ([2, 4, 6])", "Repete a lista ([1, 2, 3, 1, 2, 3])", "Erro", "Dobra o tamanho"],
        answer: 1
      },
      {
        question: "Para ordenar uma lista numericamente, usamos:",
        options: [".sort()", ".order()", ".rank()", ".arrange()"],
        answer: 0
      },
      {
        question: "É possível guardar tipos diferentes na mesma lista em Python?",
        options: ["Não, apenas o mesmo tipo", "Sim", "Apenas números", "Apenas strings"],
        answer: 1
      }
    ]
};

export default vetoreslistas;