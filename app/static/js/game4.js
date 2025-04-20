// Estado del juego
const gameState = {
    score: 0,
    level: 1,
    combo: 0,
    correctAnswers: 0,
    startTime: null,
    timerInterval: null,
    currentQuestion: null,
    currentAnswer: null,
    isInversedMode: false,
    isAdvancedMode: false,
    isDiceMode: false,
    useFractionsDecimals: false,
    gameStarted: false,
    selectedDice: null,
    currentExpression: [],
    operatorsAllowed: [],
    minCorrectForDifficulty: 5,
    isDesafio: false,
    isAdvancedMode: false,
    minCorrectForInversedMode: 3,
    isDiceModeActive: false,
    minCorrectForDiceMode: 10,
    minCorrectForFractions: 15,
    isFractions: false,
    totalCorrectAnswers: 0,
    Dificulty: "facil",
    minRespuestas:10,
    levelScale:1.5,
    maxterms:5
};


 // Elementos DOM
 const elements = {
    minNumber: document.getElementById('minNumber'),
    maxNumber: document.getElementById('maxNumber'),
    startGameBtn: document.getElementById('startGameBtn'),
    scoreDisplay: document.getElementById('score'),
    levelDisplay: document.getElementById('level'),
    comboDisplay: document.getElementById('combo'),
    correctDisplay: document.getElementById('correct'),
    timerDisplay: document.getElementById('timer'),
    questionText: document.getElementById('questionText'),
    answerField: document.getElementById('answerField'),
    answerInput: document.getElementById('answer'),
    submitBtn: document.getElementById('submitBtn'),
    feedbackText: document.getElementById('feedback'),
    dicePanel: document.getElementById('dicePanel'),
    expressionBuilder: document.getElementById('expressionBuilder'),
    currentExpression: document.getElementById('currentExpression'),
    clearExpressionBtn: document.getElementById('clearExpressionBtn'),
    calculateExpressionBtn: document.getElementById('calculateExpressionBtn'),
    modeIndicator: document.getElementById('modeIndicator'),
    expressionDisplay: document.getElementById('expressionDisplay'),
    progressFill: document.getElementById('progressFill')
};

const operatorCheckboxes = {
    sumOp: document.getElementById('sumOp'),
    subOp: document.getElementById('subOp'),
    multOp: document.getElementById('multOp'),
    divOp: document.getElementById('divOp'),
    powOp: document.getElementById('powOp'),
    rootOp: document.getElementById('rootOp')
};

// Iniciar juego
elements.startGameBtn.addEventListener('click', startGame);




function startGame() {
       // Reiniciar estado del juego
       gameState.score = 0;
       gameState.level = 1;
       gameState.combo = 0;
       gameState.correctAnswers = 0;
       gameState.isInversedMode = false;
       gameState.isAdvancedMode = false;
       gameState.isDiceMode = false;
       gameState.useFractionsDecimals = false;
       gameState.gameStarted = true;
       gameState.Dificulty = "facil";

       gameState.operatorsAllowed = [];
       const operatorsConfig = {
        sum: sumOp.checked,
        subtract: subOp.checked,
        multiply: multOp.checked,
        divide: divOp.checked,
        power: powOp.checked,
        root: rootOp.checked
    };

    gameState.operatorsAllowed = [];
    if (operatorsConfig.sum) gameState.operatorsAllowed.push('+');
    if (operatorsConfig.subtract) gameState.operatorsAllowed.push('-');
    if (operatorsConfig.multiply) gameState.operatorsAllowed.push('*');
    if (operatorsConfig.divide) gameState.operatorsAllowed.push('/');
    if (operatorsConfig.power) gameState.operatorsAllowed.push('^');
    if (operatorsConfig.root) gameState.operatorsAllowed.push('√');
    
    if (gameState.operatorsAllowed.length === 0) {
        console.error("Debes seleccionar al menos un operador");
        resetGame();
        return;
    }

    generateQuestion();


}

//iniciar reloj :)
function startTimer() {
    gameState.startTime = new Date();
    
    gameState.timerInterval = setInterval(() => {
        const currentTime = new Date();
        const elapsedSeconds = Math.floor((currentTime - gameState.startTime) / 1000);
        
        const minutes = Math.floor(elapsedSeconds / 60).toString().padStart(2, '0');
        const seconds = (elapsedSeconds % 60).toString().padStart(2, '0');
        
        // En una interfaz real, actualizar el temporizador en pantalla
        const timerDisplay = `${minutes}:${seconds}`;
        console.log("Tiempo: " + timerDisplay);
        elements.timerDisplay.innerHTML = timerDisplay ;
    }, 1000);
}
//iniciar contrareloj :(
function startCountdown(durationInSeconds) {
    const endTime = new Date().getTime() + durationInSeconds * 1000;

    gameState.timerInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const remainingSeconds = Math.max(0, Math.floor((endTime - currentTime) / 1000));

        const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
        const seconds = (remainingSeconds % 60).toString().padStart(2, '0');

        const timerDisplay = `${minutes}:${seconds}`;
        console.log("Tiempo restante: " + timerDisplay);
        elements.timerDisplay.innerHTML = timerDisplay;

        if (remainingSeconds <= 0) {
            clearInterval(gameState.timerInterval);
            console.log("¡Tiempo terminado!");
            // Podés agregar aquí una función para manejar el final del juego
            // por ejemplo: endGame();
            resetGame();
        }
    }, 1000);
}


function updateDisplay() {
    // En una interfaz real, actualizar todos los elementos en pantalla
    console.log(`Puntaje: ${gameState.score}`);
    elements.scoreDisplay.innerHTML=gameState.score;
    console.log(`Nivel: ${gameState.level}`);
    elements.levelDisplay.innerHTML=gameState.level;
    console.log(`Combo: ${gameState.combo}x`);
    elements.comboDisplay.innerHTML = gameState.combo; 
    console.log(`Correctas: ${gameState.correctAnswers}`);
    elements.correctDisplay.innerHTML= gameState.totalCorrectAnswers;
    // Actualizar barra de progreso
    const nextLevel = getNextLevelThreshold();
    if (nextLevel) {
        const progress = (gameState.correctAnswers / getNextLevelThreshold()) * 100;
        console.log(`Progreso: ${Math.min(progress, 100)}%`);
        elements.progressFill.innerHTML = `${Math.min(progress, 100).toFixed(2)}%`;
    }
}

function getNextLevelThreshold() {
    return Math.floor(3 * Math.pow(gameState.levelScale, gameState.level - 1));
}

function setGameMode() {
    switch (gameState.Dificulty) {
        case "facil":
            gameState.levelScale = 1.2;
            break;
        case "normal":
            gameState.levelScale = 1.5;
            break;
        case "dificil":
            gameState.levelScale = 2.0;
            break;
        case "desafio":
            gameState.levelScale = 5.0;
            gameState.isAdvancedMode = true ;
        default:
            gameState.levelScale = 1.5;
    }
    console.log(`Modo de juego: ${gameState.Dificulty}, escala: ${gameState.levelScale}`);
}






function checkLevelUp() {
    const threshold = getNextLevelThreshold();
    if (gameState.correctAnswers >= threshold) {
        gameState.level += 1;
        gameState.correctAnswers = 0; // reinicio aquí
        console.log(`¡Nivel ${gameState.level} alcanzado!`);
        updateDisplay();
    }
}

// Manejar respuesta correcta
function onCorrectAnswer() {
    // Incrementar combo y puntuación
    gameState.combo++;
    gameState.correctAnswers++;
    gameState.totalCorrectAnswers ++;
    
    // Calcular puntuación basada en nivel y combo
    let points = 10 * gameState.level; // Puntos base
    points *= gameState.combo; // Multiplicador de combo
    
    // Bonus para modos especiales
    if (gameState.isInversedMode) points *= 1.5;
    if (gameState.isDiceMode) points *= 2;
    if (gameState.useFractionsDecimals) points += 100; // Bonus para fracciones/decimales
    
    gameState.score += Math.floor(points);
    
    // Feedback
    console.log(`¡Correcto! +${Math.floor(points)} puntos`);
    
    // Actualizar nivel si es necesario
    checkLevelUp();
    return Math.floor(points);
}

function resetGame() {
    gameState.gameStarted = false;
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
}


// Generar una nueva pregunta
function generateQuestion() {
    // Configurar rangos numéricos según nivel
    let min = 1;  // Valor por defecto o desde configuración
    let max = 10; // Valor por defecto o desde configuración

        // Decidir cuántos términos incluir (entre 2 y 5)
    // Posibilidad de aumentar términos con el nivel
    const maxTerms  = Math.min(2 + Math.floor(gameState.level / 2), gameState.maxterms);
    const numTerms = Math.floor(Math.random() * (maxTerms - 1)) + 2;


    // Ajustar rango según nivel
    if (gameState.level >= 2) {
        max = Math.max(max, 10);
    }
    if (gameState.level >= 3) {
        max = Math.max(max, 100);
    }
    if (gameState.isAdvancedMode) {
        max = Math.max(max, 1000);
    }
    
    // Si estamos en modo dados
    if (gameState.isDiceMode) {
        generateDiceModeQuestion(min, max);
        return;
    }

    

}