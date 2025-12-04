const manipulacaostrings = {
    id: "manipulacao-strings",
    title: "Strings e Texto",
    description: "Manipulação de caracteres e palavras.",
    difficulty: "Médio",
    icon: "type",
    color: "bg-pink-50 text-pink-600",
    questions: [
      {
        question: "Como acessar a primeira letra da string s = 'OBI'?",
        options: ["s[1]", "s[0]", "s.first()", "s(0)"],
        answer: 1
      },
      {
        question: "O que o método .upper() faz?",
        options: ["Transforma em minúsculas", "Transforma em maiúsculas", "Apaga o texto", "Inverte o texto"],
        answer: 1
      },
      {
        question: "Qual o resultado de 'Ba' + 'na' * 2?",
        options: ["Bana2", "Banana", "Bananana", "Erro"],
        answer: 1
      },
      {
        question: "Para separar uma frase em palavras, usamos:",
        options: [".split()", ".break()", ".cut()", ".separate()"],
        answer: 0
      },
      {
        question: "Como verificar se 'a' está na string 'casa'?",
        options: ["'a'.in('casa')", "find('a', 'casa')", "'a' in 'casa'", "contains('a')"],
        answer: 2
      },
      {
        question: "O que é uma string?",
        options: ["Um número inteiro", "Uma sequência de caracteres", "Uma lista de números", "Um comando"],
        answer: 1
      },
      {
        question: "A string é mutável em Python (pode alterar uma letra diretamente)?",
        options: ["Sim", "Não", "Às vezes", "Depende do tamanho"],
        answer: 1
      },
      {
        question: "O que len('Ola') retorna?",
        options: ["4", "3", "2", "Ola"],
        answer: 1
      },
      {
        question: "Como converter o número 123 para string?",
        options: ["int(123)", "str(123)", "text(123)", "string(123)"],
        answer: 1
      },
      {
        question: "O que faz o slicing s[1:3] em 'Python'?",
        options: ["Py", "yt", "yth", "y"],
        answer: 1
      }
    ]
}

export default manipulacaostrings;