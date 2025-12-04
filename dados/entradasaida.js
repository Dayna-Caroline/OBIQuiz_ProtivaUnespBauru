const entradasaida = {
    id: "entrada-saida",
    title: "Entrada e Saída (I/O)",
    description: "Interagindo com o usuário e o sistema.",
    difficulty: "Fácil",
    icon: "monitor",
    color: "bg-gray-50 text-gray-600",
    questions: [
      {
        question: "Qual função exibe dados na tela em Python?",
        options: ["write()", "echo()", "print()", "show()"],
        answer: 2
      },
      {
        question: "Qual função lê dados do teclado?",
        options: ["read()", "scan()", "input()", "get()"],
        answer: 2
      },
      {
        question: "A função input() retorna os dados sempre como:",
        options: ["Inteiro", "String (Texto)", "Float", "Lista"],
        answer: 1
      },
      {
        question: "Para ler um número inteiro do teclado, devemos fazer:",
        options: ["input(int)", "int(input())", "read_int()", "input()"],
        answer: 1
      },
      {
        question: "Como imprimir 'Olá' e 'Mundo' na mesma linha separados por espaço?",
        options: ["print('Olá Mundo')", "print('Olá', 'Mundo')", "Ambos funcionam", "Nenhum funciona"],
        answer: 2
      },
      {
        question: "O parâmetro 'end' no print serve para:",
        options: ["Terminar o programa", "Definir o que é impresso ao final (evitar quebra de linha)", "Limpar a tela", "Cancelar a impressão"],
        answer: 1
      },
      {
        question: "O que f-string (f'...') permite fazer?",
        options: ["Formatar strings com variáveis dentro", "Criar funções", "Forçar erro", "Fazer loops"],
        answer: 0
      },
      {
        question: "Como ler dois números na mesma linha separados por espaço?",
        options: ["input().split()", "input(2)", "read(2)", "scan()"],
        answer: 0
      },
      {
        question: "O caractere especial '\\n' serve para:",
        options: ["Tabulação", "Nova linha (pular linha)", "Espaço", "Aspas"],
        answer: 1
      },
      {
        question: "Em problemas da OBI, a saída deve ser:",
        options: ["Exatamente como no exemplo (formatada)", "Qualquer coisa", "Colorida", "Em janela pop-up"],
        answer: 0
      }
    ]
};

export default entradasaida;