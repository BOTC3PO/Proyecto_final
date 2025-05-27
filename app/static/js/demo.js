
// Elementos del DOM
const elements = {
    score: document.getElementById('score'),
    correctAnswers: document.getElementById('correct-answers'),
    comboDisplay: document.getElementById('combo-display'),
    difficultyDisplay: document.getElementById('difficulty-display'),
    inverseModeIndicator: document.getElementById('inverse-mode-indicator'),
    decimalsEnabledIndicator: document.getElementById('decimals-enabled-indicator'),
    bonusModeIndicator: document.getElementById('bonus-mode-indicator'),
    configPanel: document.getElementById('config-panel'),
    toggleConfigBtn: document.getElementById('toggle-config-btn'),
    minNumInput: document.getElementById('min-num'),
    maxNumInput: document.getElementById('max-num'),
    randomBlankCheckbox: document.getElementById('random-blank'),
    inverseModeMessage: document.getElementById('inverse-mode-message'),
    equationDisplay: document.getElementById('equation-display'),
    termsInfo: document.getElementById('terms-info'),
    userAnswerInput: document.getElementById('user-answer'),
    submitAnswerBtn: document.getElementById('submit-answer-btn'),
    feedbackDisplay: document.getElementById('feedback-display'),
    maxComboDisplay: document.getElementById('max-combo-display'),
    nextMilestoneDisplay: document.getElementById('next-milestone-display'),
};

// Estado del juego
const config = {
    minNum: 1,
    maxNum: 10,
    operators: ['add', 'subtract'],
    randomBlank: true,
    calculateResult: false // Esta propiedad no se usa en el código React original, pero la mantengo como referencia
};

const gameState = {
    currentProblem: null,
    score: 0,
    correctAnswers: 0,
    combo: 0,
    maxCombo: 0,
    difficulty: 1,
    maxDifficulty: false,
    inverseMode: false,
    decimalsEnabled: false,
    fractionsEnabled: false, // No implementado en el React original, pero puede ser útil
    bonusMode: false
};

let userAnswer = '';
let showConfig = false;

// Configuración de dificultades
const difficultySettings = {
    1: { minNum: 1, maxNum: 10, operators: ['add', 'subtract'] },
    2: { minNum: 1, maxNum: 50, operators: ['add', 'subtract', 'multiply'] },
    3: { minNum: 1, maxNum: 100, operators: ['add', 'subtract', 'multiply', 'divide'] },
    4: { minNum: 10, maxNum: 500, operators: ['add', 'subtract', 'multiply', 'divide', 'power'] },
    5: { minNum: 100, maxNum: 9999, operators: ['add', 'subtract', 'multiply', 'divide', 'power', 'root'] }
};

// --- Funciones de Utilidad ---

// Generar número aleatorio en rango
function randomInRange(min, max, allowDecimals = false) {
    if (allowDecimals && gameState.decimalsEnabled) {
        return Math.round((Math.random() * (max - min) + min) * 100) / 100;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Obtener icono de operador (simulado con HTML/caracteres especiales)
function getOperatorSymbol(operator) {
    switch (operator) {
        case 'add': return '+';
        case 'subtract': return '−';
        case 'multiply': return '×';
        case 'divide': return '÷';
        case 'power': return '^';
        case 'root': return '√';
        default: return '';
    }
}

// --- Generación de Problemas ---

function generateAddition(cfg) {
    const a = randomInRange(cfg.minNum, cfg.maxNum, gameState.decimalsEnabled);
    const b = randomInRange(cfg.minNum, cfg.maxNum, gameState.decimalsEnabled);
    const result = a + b;

    const blanks = ['operand1', 'operand2', 'result'];
    const blankField = config.randomBlank ? blanks[Math.floor(Math.random() * blanks.length)] : 'result';

    return {
        type: 'addition',
        operand1: blankField === 'operand1' ? '?' : a,
        operand2: blankField === 'operand2' ? '?' : b,
        result: blankField === 'result' ? '?' : result,
        correctAnswer: blankField === 'operand1' ? a : blankField === 'operand2' ? b : result,
        operator: 'add',
        equation: `${blankField === 'operand1' ? '?' : a} + ${blankField === 'operand2' ? '?' : b} = ${blankField === 'result' ? '?' : result}`,
        terms: 'Suma: sumando + sumando = suma'
    };
}

function generateSubtraction(cfg) {
    const a = randomInRange(cfg.minNum, cfg.maxNum, gameState.decimalsEnabled);
    const b = randomInRange(cfg.minNum, Math.min(a, cfg.maxNum), gameState.decimalsEnabled); // Asegura b <= a
    const result = a - b;

    const blanks = ['operand1', 'operand2', 'result'];
    const blankField = config.randomBlank ? blanks[Math.floor(Math.random() * blanks.length)] : 'result';

    return {
        type: 'subtraction',
        operand1: blankField === 'operand1' ? '?' : a,
        operand2: blankField === 'operand2' ? '?' : b,
        result: blankField === 'result' ? '?' : result,
        correctAnswer: blankField === 'operand1' ? a : blankField === 'operand2' ? b : result,
        operator: 'subtract',
        equation: `${blankField === 'operand1' ? '?' : a} − ${blankField === 'operand2' ? '?' : b} = ${blankField === 'result' ? '?' : result}`,
        terms: 'Resta: minuendo − sustraendo = diferencia'
    };
}

function generateMultiplication(cfg) {
    const a = randomInRange(cfg.minNum, Math.min(cfg.maxNum, 20), gameState.decimalsEnabled);
    const b = randomInRange(cfg.minNum, Math.min(cfg.maxNum, 20), gameState.decimalsEnabled);
    const result = Math.round((a * b) * 100) / 100;

    const blanks = ['operand1', 'operand2', 'result'];
    const blankField = config.randomBlank ? blanks[Math.floor(Math.random() * blanks.length)] : 'result';

    return {
        type: 'multiplication',
        operand1: blankField === 'operand1' ? '?' : a,
        operand2: blankField === 'operand2' ? '?' : b,
        result: blankField === 'result' ? '?' : result,
        correctAnswer: blankField === 'operand1' ? a : blankField === 'operand2' ? b : result,
        operator: 'multiply',
        equation: `${blankField === 'operand1' ? '?' : a} × ${blankField === 'operand2' ? '?' : b} = ${blankField === 'result' ? '?' : result}`,
        terms: 'Multiplicación: multiplicando × multiplicador = producto'
    };
}

function generateDivision(cfg) {
    const b = randomInRange(2, Math.min(cfg.maxNum, 12), false); // Divisor no puede ser 0 o 1 en general
    const result = randomInRange(cfg.minNum, Math.min(cfg.maxNum, 50), false);
    const a = b * result; // Asegura una división exacta

    const blanks = ['operand1', 'operand2', 'result'];
    const blankField = config.randomBlank ? blanks[Math.floor(Math.random() * blanks.length)] : 'result';

    return {
        type: 'division',
        operand1: blankField === 'operand1' ? '?' : a,
        operand2: blankField === 'operand2' ? '?' : b,
        result: blankField === 'result' ? '?' : result,
        correctAnswer: blankField === 'operand1' ? a : blankField === 'operand2' ? b : result,
        operator: 'divide',
        equation: `${blankField === 'operand1' ? '?' : a} ÷ ${blankField === 'operand2' ? '?' : b} = ${blankField === 'result' ? '?' : result}`,
        terms: 'División: dividendo ÷ divisor = cociente'
    };
}

function generatePower(cfg) {
    const base = randomInRange(2, Math.min(cfg.maxNum, 10), false);
    const exp = randomInRange(2, 4, false); // Exponentes pequeños para evitar números gigantes
    const result = Math.pow(base, exp);

    const blanks = ['operand1', 'operand2', 'result'];
    const blankField = config.randomBlank ? blanks[Math.floor(Math.random() * blanks.length)] : 'result';

    return {
        type: 'power',
        operand1: blankField === 'operand1' ? '?' : base,
        operand2: blankField === 'operand2' ? '?' : exp,
        result: blankField === 'result' ? '?' : result,
        correctAnswer: blankField === 'operand1' ? base : blankField === 'operand2' ? exp : result,
        operator: 'power',
        equation: `${blankField === 'operand1' ? '?' : base}^${blankField === 'operand2' ? '?' : exp} = ${blankField === 'result' ? '?' : result}`,
        terms: 'Potenciación: base^exponente = potencia'
    };
}

function generateRoot(cfg) {
    const result = randomInRange(2, Math.min(cfg.maxNum, 15), false); // Raíz de 2 a 15
    const index = randomInRange(2, 3, false); // Solo raíz cuadrada o cúbica
    const radicand = Math.pow(result, index);

    const blanks = ['operand1', 'operand2', 'result'];
    const blankField = config.randomBlank ? blanks[Math.floor(Math.random() * blanks.length)] : 'result';

    // Para la raíz, el formato MathJax sería `\sqrt[indice]{radicando}`
    return {
        type: 'root',
        operand1: blankField === 'operand1' ? '?' : radicand, // Radicando es el número dentro de la raíz
        operand2: blankField === 'operand2' ? '?' : index,    // Índice es el pequeño número fuera de la raíz
        result: blankField === 'result' ? '?' : result,
        correctAnswer: blankField === 'operand1' ? radicand : blankField === 'operand2' ? index : result,
        operator: 'root',
        // Usamos un formato más simple aquí para no depender de MathJax para los iconos que no están
        equation: `${blankField === 'operand2' ? '?' : index}${getOperatorSymbol('root')}${blankField === 'operand1' ? '?' : radicand} = ${blankField === 'result' ? '?' : result}`,
        terms: 'Radicación: índice√radicando = raíz'
    };
}

function generateProblem() {
    const currentConfig = gameState.maxDifficulty ?
        difficultySettings[5] :
        { ...config, ...difficultySettings[gameState.difficulty] };

    const operators = currentConfig.operators;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let problem;
    switch (operator) {
        case 'add': problem = generateAddition(currentConfig); break;
        case 'subtract': problem = generateSubtraction(currentConfig); break;
        case 'multiply': problem = generateMultiplication(currentConfig); break;
        case 'divide': problem = generateDivision(currentConfig); break;
        case 'power': problem = generatePower(currentConfig); break;
        case 'root': problem = generateRoot(currentConfig); break;
        default: problem = generateAddition(currentConfig);
    }

    // Aplicar modo inverso si está activo (chance del 30%)
    if (gameState.inverseMode && Math.random() < 0.3) {
        problem.isInverse = true;
        problem.givenAnswer = problem.correctAnswer; // El resultado de la operación se convierte en la "respuesta dada"

        // Ocultar el primer operando para el modo inverso según tu React original
        problem.correctAnswer = problem.operand1; // La respuesta correcta ahora es el operando oculto
        problem.operand1 = '?'; // El operando se convierte en la incógnita
    }

    return problem;
}

// --- Lógica del Juego ---

function updateUI() {
    elements.score.textContent = gameState.score;
    elements.correctAnswers.textContent = `${gameState.correctAnswers} correctas`;

    if (gameState.combo > 1) {
        elements.comboDisplay.textContent = `Combo x${gameState.combo}`;
        elements.comboDisplay.classList.remove('hidden');
    } else {
        elements.comboDisplay.classList.add('hidden');
    }

    elements.difficultyDisplay.textContent = `Dificultad ${gameState.maxDifficulty ? 'MÁXIMA' : gameState.difficulty}`;

    elements.inverseModeIndicator.classList.toggle('hidden', !gameState.inverseMode);
    elements.decimalsEnabledIndicator.classList.toggle('hidden', !gameState.decimalsEnabled);
    elements.bonusModeIndicator.classList.toggle('hidden', !gameState.bonusMode);

    if (gameState.currentProblem) {
        if (gameState.currentProblem.isInverse) {
            elements.inverseModeMessage.textContent = `Modo Inverso: Encuentra el valor que da como resultado ${gameState.currentProblem.givenAnswer}`;
            elements.inverseModeMessage.classList.remove('hidden');
        } else {
            elements.inverseModeMessage.classList.add('hidden');
        }

        // Construir la ecuación visual
        let operatorSymbol = getOperatorSymbol(gameState.currentProblem.operator);
        let equationHTML = `
                    <span>${gameState.currentProblem.operand1}</span>
                    <span class="w-4 h-4">${operatorSymbol}</span>
                    <span>${gameState.currentProblem.operand2}</span>
                    <span>=</span>
                    <span>${gameState.currentProblem.result}</span>
                `;
        elements.equationDisplay.innerHTML = equationHTML;
        elements.termsInfo.textContent = gameState.currentProblem.terms;
    }

    elements.userAnswerInput.value = userAnswer;
    elements.feedbackDisplay.textContent = ''; // Limpiar feedback por defecto

    elements.maxComboDisplay.textContent = gameState.maxCombo;

    let nextMilestoneText;
    if (gameState.correctAnswers < 10) {
        nextMilestoneText = `${10 - gameState.correctAnswers} para Dificultad 2`;
    } else if (gameState.correctAnswers < 25) {
        nextMilestoneText = `${25 - gameState.correctAnswers} para Dificultad 3`;
    } else if (gameState.correctAnswers < 50) {
        nextMilestoneText = `${50 - gameState.correctAnswers} para Dificultad 4`;
    } else if (gameState.correctAnswers < 100) {
        nextMilestoneText = `${100 - gameState.correctAnswers} para Modo Máximo`;
    } else if (gameState.correctAnswers < 200) {
        nextMilestoneText = `${200 - gameState.correctAnswers} para Decimales y Bonus`;
    } else {
        nextMilestoneText = 'Nivel máximo alcanzado';
    }
    elements.nextMilestoneDisplay.textContent = `Próximo hito: ${nextMilestoneText}`;
}

function checkAnswer() {
    const answer = parseFloat(userAnswer);
    const problem = gameState.currentProblem;

    // Usar un margen de error para números decimales
    const correct = Math.abs(answer - problem.correctAnswer) < 0.01;

    let feedbackMessage = '';
    let isCorrect = false;

    if (correct) {
        const newCorrectAnswers = gameState.correctAnswers + 1;
        const newCombo = gameState.combo + 1;
        const maxCombo = Math.max(gameState.maxCombo, newCombo);

        let points = 10;
        if (newCombo > 1) points += newCombo * 5;
        if (gameState.bonusMode) points += 100;

        let newDifficulty = gameState.difficulty;
        let maxDifficulty = gameState.maxDifficulty;
        let inverseMode = gameState.inverseMode;
        let decimalsEnabled = gameState.decimalsEnabled;
        let bonusMode = gameState.bonusMode;

        if (newCorrectAnswers === 10 && newDifficulty < 2) newDifficulty = 2;
        if (newCorrectAnswers === 25 && newDifficulty < 3) newDifficulty = 3;
        if (newCorrectAnswers === 50 && newDifficulty < 4) newDifficulty = 4;
        if (newCorrectAnswers === 100) {
            maxDifficulty = true;
            inverseMode = true;
        }
        if (newCorrectAnswers === 200) {
            decimalsEnabled = true;
            bonusMode = true;
        }

        Object.assign(gameState, {
            score: gameState.score + points,
            correctAnswers: newCorrectAnswers,
            combo: newCombo,
            maxCombo: maxCombo,
            difficulty: newDifficulty,
            maxDifficulty: maxDifficulty,
            inverseMode: inverseMode,
            decimalsEnabled: decimalsEnabled,
            bonusMode: bonusMode
        });

        feedbackMessage = `¡Correcto! +${points} puntos ${newCombo > 1 ? `(Combo x${newCombo})` : ''}`;
        isCorrect = true;
    } else {
        gameState.combo = 0; // Resetear combo en caso de error
        feedbackMessage = `Incorrecto. La respuesta era ${problem.correctAnswer}`;
        isCorrect = false;
    }

    elements.feedbackDisplay.textContent = feedbackMessage;
    elements.feedbackDisplay.classList.remove('hidden');
    elements.feedbackDisplay.classList.remove('bg-green-100', 'text-green-700', 'bg-red-100', 'text-red-700');
    elements.feedbackDisplay.classList.add(isCorrect ? 'bg-green-100' : 'bg-red-100', isCorrect ? 'text-green-700' : 'text-red-700');

    userAnswer = ''; // Limpiar la respuesta del usuario
    updateUI(); // Actualizar el UI inmediatamente después de la respuesta

    setTimeout(() => {
        elements.feedbackDisplay.classList.add('hidden'); // Ocultar feedback
        generateNewProblem(); // Generar nueva pregunta
    }, 2000);
}

function generateNewProblem() {
    const problem = generateProblem();
    gameState.currentProblem = problem;
    updateUI(); // Actualizar UI después de generar un nuevo problema
    elements.userAnswerInput.focus(); // Enfocar el input
}

// --- Manejadores de Eventos ---

elements.toggleConfigBtn.addEventListener('click', () => {
    showConfig = !showConfig;
    elements.configPanel.classList.toggle('hidden', !showConfig);
});

elements.minNumInput.addEventListener('change', (e) => {
    config.minNum = parseInt(e.target.value);
    // Recargar el problema si la configuración cambia y el panel no está oculto
    if (!showConfig) generateNewProblem();
});

elements.maxNumInput.addEventListener('change', (e) => {
    config.maxNum = parseInt(e.target.value);
    if (!showConfig) generateNewProblem();
});

elements.randomBlankCheckbox.addEventListener('change', (e) => {
    config.randomBlank = e.target.checked;
    if (!showConfig) generateNewProblem();
});

elements.submitAnswerBtn.addEventListener('click', () => {
    if (userAnswer.trim() !== '') {
        checkAnswer();
    }
});

elements.userAnswerInput.addEventListener('input', (e) => {
    userAnswer = e.target.value;
});

elements.userAnswerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && userAnswer.trim() !== '') {
        checkAnswer();
    }
});

// Inicializar el juego al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    generateNewProblem(); // Genera el primer problema
    updateUI(); // Asegura que el estado inicial se refleje en el UI
});
