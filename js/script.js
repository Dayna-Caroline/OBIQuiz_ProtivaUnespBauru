import logicabasica from "../dados/logicabasica.js";
import variaveistipos from "../dados/variaveistipos.js";
import operadoresmatematicos from "../dados/operadoresmatematicos.js";
import condicionaisif from "../dados/condicionaisif.js";
import loopsrepeticao from "../dados/loopsrepeticao.js";
import vetoreslistas from "../dados/vetoreslistas.js";
import manipulacaostrings from "../dados/manipulacaostrings.js";
import funcoesmodulos from "../dados/funcoesmodulos.js";
import entradasaida from "../dados/entradasaida.js";
import desafios from "../dados/desafios.js";

const QUIZZES_DATA = [
    logicabasica, 
    variaveistipos, 
    operadoresmatematicos, 
    condicionaisif, 
    loopsrepeticao, 
    vetoreslistas,
    manipulacaostrings,
    funcoesmodulos,
    entradasaida,
    desafios
];

const app = {
    currentQuiz: null,
    currentQuestionIndex: 0,
    score: 0,
    isAnswering: false,
    
    timerInterval: null,
    timeLeft: 60,
    TIME_LIMIT: 60,

    elements: {
        menuView: document.getElementById('menu-view'),
        quizView: document.getElementById('quiz-view'),
        resultView: document.getElementById('result-view'),
        quizList: document.getElementById('quiz-list'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        progressBar: document.getElementById('progress-bar'),
        progressText: document.getElementById('progress-text'),
        scoreText: document.getElementById('score-text'),
        homeBtn: document.getElementById('home-btn'),
        finalScore: document.getElementById('final-score'),
        totalQuestions: document.getElementById('total-questions'),
        feedbackMessage: document.getElementById('feedback-message'),
        quizBadge: document.getElementById('quiz-badge'),
        timerText: document.getElementById('timer-text'),
        timerContainer: document.getElementById('timer-container'),
        timeoutMessage: document.getElementById('timeout-message')
    },

    init() {
        this.renderMenu();
        lucide.createIcons();
    },

    escapeHtml(text) {
        if (!text) return text;
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    },

    getDifficultyColor(level) {
        switch(level.toLowerCase()) {
            case 'fácil': return 'bg-green-100 text-green-700';
            case 'médio': return 'bg-yellow-100 text-yellow-700';
            case 'difícil': return 'bg-red-100 text-red-700';
            default: return 'bg-slate-100 text-slate-600';
        }
    },

    renderMenu() {
        this.stopTimer(); 
        this.elements.menuView.classList.remove('hidden');
        this.elements.quizView.classList.add('hidden');
        this.elements.resultView.classList.add('hidden');
        this.elements.homeBtn.classList.add('hidden');
        this.elements.timeoutMessage.classList.add('hidden');
        
        this.elements.quizList.innerHTML = QUIZZES_DATA.map(quiz => `
            <div onclick="app.startQuiz('${quiz.id}')" 
                    class="group bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 cursor-pointer transition-all flex items-center gap-4">
                <div class="p-3 rounded-lg ${quiz.color}">
                    <i data-lucide="${quiz.icon}"></i>
                </div>
                <div class="flex-grow">
                    <div class="flex items-center gap-2 mb-1">
                        <h3 class="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">${quiz.title}</h3>
                        <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${this.getDifficultyColor(quiz.difficulty)}">
                            ${quiz.difficulty}
                        </span>
                    </div>
                    <p class="text-sm text-slate-500">${quiz.description}</p>
                </div>
                <i data-lucide="chevron-right" class="text-slate-300 group-hover:text-blue-500"></i>
            </div>
        `).join('');
        lucide.createIcons();
    },

    startQuiz(id) {
        this.currentQuiz = QUIZZES_DATA.find(q => q.id === id);
        this.currentQuestionIndex = 0;
        this.score = 0;
        
        this.elements.menuView.classList.add('hidden');
        this.elements.resultView.classList.add('hidden');
        this.elements.quizView.classList.remove('hidden');
        this.elements.homeBtn.classList.remove('hidden');

        this.elements.quizBadge.className = `text-xs font-bold px-2 py-1 rounded-full ${this.getDifficultyColor(this.currentQuiz.difficulty)}`;
        this.elements.quizBadge.textContent = this.currentQuiz.difficulty;

        this.renderQuestion();
    },

    startTimer() {
        this.stopTimer(); 
        this.timeLeft = this.TIME_LIMIT;
        this.updateTimerUI();

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateTimerUI();

            if (this.timeLeft <= 0) {
                this.handleTimeout();
            }
        }, 1000);
    },

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    },

    updateTimerUI() {
        this.elements.timerText.textContent = `${this.timeLeft}s`;
        
        if (this.timeLeft <= 10) {
            this.elements.timerContainer.className = "flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-full transition-colors pulse-red";
        } else {
            this.elements.timerContainer.className = "flex items-center gap-1 bg-slate-100 text-slate-700 px-3 py-1 rounded-full transition-colors";
        }
    },

    handleTimeout() {
        this.stopTimer();
        if (this.isAnswering) return;
        this.isAnswering = true;

        let messageText = "Tempo esgotado!";

        if (this.score > 0) {
            this.score = Math.max(0, this.score - 5);
            this.elements.scoreText.textContent = `Pontos: ${this.score}`;
            
            this.elements.scoreText.classList.add('text-red-500', 'font-bold');
            setTimeout(() => {
                this.elements.scoreText.classList.remove('text-red-500', 'font-bold');
            }, 800);
            
            messageText += " Você perdeu 5 pontos.";
        }

        const msgDiv = this.elements.timeoutMessage;
        msgDiv.querySelector('span').textContent = messageText;
        msgDiv.classList.remove('hidden');
        lucide.createIcons();

        const currentQ = this.currentQuiz.questions[this.currentQuestionIndex];
        const buttons = this.elements.optionsContainer.children;
        
        buttons[currentQ.answer].classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-700');
        
        Array.from(buttons).forEach(btn => btn.disabled = true);

        setTimeout(() => {
            msgDiv.classList.add('hidden'); 
            this.nextStep();
        }, 2500); 
    },

    renderQuestion() {
        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        
        this.elements.questionText.textContent = question.question;
        this.elements.scoreText.textContent = `Pontos: ${this.score}`;
        this.elements.progressText.textContent = `Questão ${this.currentQuestionIndex + 1} de ${this.currentQuiz.questions.length}`;
        
        const progressPercent = ((this.currentQuestionIndex) / this.currentQuiz.questions.length) * 100;
        this.elements.progressBar.style.width = `${progressPercent}%`;

        this.elements.optionsContainer.innerHTML = question.options.map((opt, index) => `
            <button onclick="app.handleAnswer(${index}, this)" 
                    class="option-btn w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-200 hover:bg-blue-50 bg-white text-slate-700 font-medium transition-colors">
                ${this.escapeHtml(opt)}
            </button>
        `).join('');
        
        this.isAnswering = false;
        this.startTimer(); 
    },

    handleAnswer(selectedIndex, btnElement) {
        if (this.isAnswering) return;
        
        this.stopTimer(); 
        this.isAnswering = true;

        const currentQ = this.currentQuiz.questions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === currentQ.answer;

        if (isCorrect) {
            this.score += 10;
            btnElement.classList.remove('border-slate-100', 'hover:border-blue-200', 'hover:bg-blue-50');
            btnElement.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-700');
        } else {
            btnElement.classList.remove('border-slate-100', 'hover:border-blue-200', 'hover:bg-blue-50');
            btnElement.classList.add('bg-red-100', 'border-red-500', 'text-red-700');
            
            const buttons = this.elements.optionsContainer.children;
            buttons[currentQ.answer].classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-700');
        }

        setTimeout(() => {
            this.nextStep();
        }, 1200);
    },

    nextStep() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.currentQuiz.questions.length) {
            this.renderQuestion();
        } else {
            this.showResults();
        }
    },

    showResults() {
        this.stopTimer();
        this.elements.quizView.classList.add('hidden');
        this.elements.resultView.classList.remove('hidden');
        this.elements.progressBar.style.width = '100%';

        const total = this.currentQuiz.questions.length * 10;
        const percent = (this.score / total) * 100;

        this.elements.finalScore.textContent = this.score;
        this.elements.totalQuestions.textContent = total;

        if (percent === 100) {
            this.elements.feedbackMessage.textContent = "Perfeito! Você domina esse assunto.";
        } else if (percent >= 70) {
            this.elements.feedbackMessage.textContent = "Muito bom! Você foi ótimo.";
        } else if (percent >= 40) {
            this.elements.feedbackMessage.textContent = "Bom esforço, mas dá para melhorar.";
        } else {
            this.elements.feedbackMessage.textContent = "Que tal estudar mais um pouco e tentar de novo?";
        }
    },

    restartQuiz() {
        this.startQuiz(this.currentQuiz.id);
    },

    showMenu() {
        this.renderMenu();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

window.app = app;