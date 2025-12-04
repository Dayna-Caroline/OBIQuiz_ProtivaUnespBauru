# 🧠 CompQuiz

![Status](https://img.shields.io/badge/Status-Funcional%20%26%20Pronto-success)
![Tech](https://img.shields.io/badge/Tech-ES6%20Modules%20%7C%20Tailwind%20%7C%20JS-yellow)

Uma aplicação web de Quiz interativa, leve e moderna. O projeto utiliza uma **arquitetura modular** com ES6 Modules, onde cada quiz é um arquivo separado, facilitando a organização, manutenção e a colaboração no código.

---

## 🔗 Demonstração
### [👉 Clique aqui para acessar o CompQuiz Online](https://dayna-caroline.github.io/OBIQuiz_ProtivaUnespBauru/)

---

## ✨ Funcionalidades

* **🎨 Interface Limpa:** Design minimalista com cores claras e tipografia legível.
* **⏱️ Sistema de Timer:** 60 segundos por pergunta com alertas visuais.
* **🏆 Sistema de Pontuação:** Recompensas por acerto (+10) e penalidades por estouro de tempo (-5).
* **📦 Arquitetura Modular:** Separação clara entre a lógica (`js/`) e o conteúdo (`dados/`).
* **⚡ Feedback Imediato:** Cores indicam acertos e erros instantaneamente.
* **📱 Totalmente Responsivo:** Layout fluido para celulares e desktops.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica.
* **Tailwind CSS (via CDN):** Estilização rápida e responsiva.
* **JavaScript (ES6 Modules):**
    * Uso nativo de `import` e `export`.
    * Organização em pastas separadas para facilitar a escala do projeto.
* **Lucide Icons:** Ícones vetoriais leves.

---

## 🚀 Como Rodar Localmente

⚠️ **Atenção:** Devido ao uso de **Módulos JavaScript (ES6)**, este projeto segue a política de segurança CORS (Cross-Origin Resource Sharing). Isso significa que **você não pode abrir o arquivo `index.html` diretamente** clicando duas vezes nele.

É necessário rodar a aplicação através de um servidor local HTTP. Veja como fazer:

### VS Code (Recomendado)
1. Instale a extensão **Live Server** no VS Code.
2. Abra a pasta raiz do projeto no VS Code.
3. Abra o arquivo `index.html`.
4. Clique no botão **"Go Live"** no canto inferior direito do editor.
   
---

## ⚙️ Como Adicionar Novos Quizzes

### 1. Crie o arquivo de dados
Navegue até a pasta `dados/` e crie um novo arquivo `.js` (ex: `quiz.js`). Cole a estrutura básica e **exporte** a constante:

```javascript
// Arquivo: dados/quiz.js
export const quiz = {
    id: "quiz",
    title: "Quiz",
    description: "Perguntas do quiz.",
    difficulty: "Fácil",
    icon: "quiz", // Ícone do Lucide (lucide.dev)
    color: "bg-red-50 text-red-600",
    questions: [
        {
            question: "Pergunta?",
            options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
            answer: 1 // Índice da resposta correta no array (0, 1, 2, 3...)
        }
    ]
};
```

### 2. Importe no script principal
Abra o arquivo `js/script.js`:

1.  Faça o **import** do novo arquivo no topo:
    ```javascript
    import { quiz } from '../dados/quiz.js';
    ```
2.  Adicione a variável ao array principal `QUIZZES_DATA`:
    ```javascript
    const QUIZZES_DATA = [
        quizJava,
        quizJavaScript,
        quiz // <--- Adicione aqui
    ];
    ```

---

## 📂 Estrutura do Projeto

```text
/
├── index.html          # Ponto de entrada da aplicação
├── css/
│   └── styles.css      # Estilos personalizados
├── js/
│   └── script.js       # Lógica principal e importação dos módulos
└── dados/              # Pasta contendo os arquivos individuais de cada quiz
    ├── quiz-java.js
    ├── quiz-js.js
    ├── quiz-sql.js
    └── ...
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se você quiser adicionar um novo quiz:
1. Faça um **Fork** do projeto.
2. Crie um novo arquivo na pasta `dados/`.
3. Registre-o no `js/script.js`.
4. Envie um **Pull Request**.

---

<p align="center">
  Feito com 💙 para o GitHub Pages
</p>



