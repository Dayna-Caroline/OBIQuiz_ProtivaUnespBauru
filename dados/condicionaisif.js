const condicionaisif = {
    id: "condicionais-if",
    title: "Estruturas Condicionais",
    description: "Tomada de decisões com If, Elif e Else.",
    difficulty: "Médio",
    icon: "git-branch",
    color: "bg-yellow-50 text-yellow-600",
    questions: [
      {
        question: "Qual palavra-chave inicia uma estrutura condicional?",
        options: ["loop", "for", "if", "var"],
        answer: 2
      },
      {
        question: "O bloco 'else' é executado quando:",
        options: ["A condição do 'if' é verdadeira", "A condição do 'if' é falsa", "Sempre", "Nunca"],
        answer: 1
      },
      {
        question: "Em Python, o que define o bloco de código dentro de um if?",
        options: ["Chaves {}", "Ponto e vírgula ;", "Indentação", "Parênteses ()"],
        answer: 2
      },
      {
        question: "Qual estrutura verifica múltiplas condições em sequência?",
        options: ["if - else", "if - elif - else", "for - loop", "try - catch"],
        answer: 1
      },
      {
        question: "Se x=10, o que imprime: if x > 5: print('A') else: print('B')?",
        options: ["A", "B", "AB", "Nada"],
        answer: 0
      },
      {
        question: "O operador '!=' significa:",
        options: ["Igual a", "Menor que", "Diferente de", "Não existe"],
        answer: 2
      },
      {
        question: "Para verificar se x está entre 1 e 10 (inclusive), usamos:",
        options: ["x > 1 or x < 10", "1 <= x <= 10", "x == 1 and x == 10", "x in 1..10"],
        answer: 1
      },
      {
        question: "Qual é a sintaxe correta do if em Python?",
        options: ["if (condicao) { }", "if condicao:", "IF condicao THEN", "check condicao"],
        answer: 1
      },
      {
        question: "Pode-se colocar um if dentro de outro if?",
        options: ["Não, dá erro", "Sim, chama-se aninhamento", "Apenas em C++", "Sim, mas não funciona"],
        answer: 1
      },
      {
        question: "O que o operador 'not' faz?",
        options: ["Inverte o valor lógico", "Torna o valor nulo", "Confirma a condição", "Repete o teste"],
        answer: 0
      }
    ]
}

export default condicionaisif;