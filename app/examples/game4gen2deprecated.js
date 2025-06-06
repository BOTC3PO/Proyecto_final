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
    allowBlanks: false,
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
    minCorrectForDiceMode: 10,
    minCorrectForFractions: 15,
    isFractions: false,
    totalCorrectAnswers: 0,
    Dificulty: "facil",
    minRespuestas: 10,
    levelScale: 1.5,
    maxterms: 5,
    maxlevel: 10,
    HP: 100,
    HPerror: 0,
    endTime: 30000,
    tiempofactor: 1,
        // Propiedades adicionales para el generador:
    // Estos arrays se llenarán dinámicamente según la dificultad/nivel.
    operadoresGenerados: [], // Array de operadores para la pregunta actual
    numerosGenerados: [], // Matriz de números para la pregunta actual
    exponentesGenerados: [], // Array de exponentes para la pregunta actual
    parentesisGenerados: [], // Array de probabilidades de paréntesis
};

//probabilidad de generar un termino dentro de un parentesis
const advancedmodetems = [50, 25, 15, 8, 4, 2, 1];
//probabilidad de generar un termino dentro de un parentesis dentro de otro parentesis
const advancedsubterms = [25, 16, 12, 8, 4, 2, 1];
//probabilida de que ese parentesis tenga otra operacion
const advancedoperation = [50, 25, 12, 6, 3, 2, 1];
//cantidad de terminos que tiene la operacion generada 
const advancedoperationterms = [1, 2, 3];

const Bonustime = [
    // Modo 0: facil
    [10, 12, 15, 17, 19, 21, 24, 27, 30, 30],
    // Modo 1: medio
    [5, 5, 5, 6, 7, 7, 8, 9, 10, 12],
    // Modo 2: dificil
    [6, 6, 6, 7, 8, 8, 9, 10, 10, 10],
    // Modo 3: desafío
    [55, 34, 21, 13, 8, 5, 3, 2, 1, 1],
];

const DificultyDescription = [
    {
        level: "Fácil",
        description: "Un modo de escalado simple. Ideal para quienes están comenzando o quieren una experiencia relajada."
    },
    {
        level: "Normal",
        description: "Escalado balanceado que ofrece una progresión justa entre dificultad y jugabilidad."
    },
    {
        level: "Difícil",
        description: "Un modo exigente enfocado únicamente en el escalado. Cada nivel representa un reto creciente."
    },
    {
        level: "Desafío",
        description: "Modo impredecible y desafiante. Las partidas son únicas: operadores aleatorios, menos tiempo al avanzar y modificadores distintos en cada nivel, junto con una variedad cambiante de términos."
    }
];



//valor descripcion dificultad recomendada exepto desafio
const descripcionclases = [
    { value: "001", descripcion: "Introducción a la suma básica.", dificultad: "fácil" },
    { value: "002", descripcion: "Ejercicios para sumar números de dos cifras.", dificultad: "fácil" },
    { value: "003", descripcion: "Suma de números de tres cifras.", dificultad: "normal" },
    { value: "004", descripcion: "Suma de números en el rango de los miles.", dificultad: "normal" },
    { value: "005", descripcion: "Desafíos con sumas de números grandes.", dificultad: "difícil" },

    { value: "006", descripcion: "Introducción a la resta básica.", dificultad: "fácil" },
    { value: "007", descripcion: "Ejercicios para restar números de dos cifras.", dificultad: "fácil" },
    { value: "008", descripcion: "Resta de números de tres cifras.", dificultad: "normal" },
    { value: "009", descripcion: "Resta con números en el rango de los miles.", dificultad: "normal" },
    { value: "010", descripcion: "Desafíos con restas de números grandes.", dificultad: "difícil" },

    { value: "011", descripcion: "Introducción a la multiplicación básica.", dificultad: "fácil" },
    { value: "012", descripcion: "Multiplicación de números de dos cifras.", dificultad: "normal" },
    { value: "013", descripcion: "Multiplicación de números de tres cifras.", dificultad: "normal" },
    { value: "014", descripcion: "Multiplicaciones grandes con miles.", dificultad: "difícil" },
    { value: "015", descripcion: "Desafíos con multiplicaciones extensas.", dificultad: "difícil" },

    { value: "016", descripcion: "Introducción a la división básica.", dificultad: "fácil" },
    { value: "017", descripcion: "Divisiones con números de dos cifras.", dificultad: "normal" },
    { value: "018", descripcion: "División con números de tres cifras.", dificultad: "normal" },
    { value: "019", descripcion: "Divisiones grandes con miles.", dificultad: "difícil" },
    { value: "020", descripcion: "Desafíos con divisiones extensas.", dificultad: "difícil" },

    { value: "021", descripcion: "Aprende qué es una potencia y cómo se representa.", dificultad: "fácil" },
    { value: "022", descripcion: "Ejemplos de potencias de uso frecuente.", dificultad: "normal" },
    { value: "023", descripcion: "Exploración de potencias base 10.", dificultad: "normal" },
    { value: "024", descripcion: "Exploración de potencias base 2.", dificultad: "normal" },
    { value: "025", descripcion: "Descubre patrones en el crecimiento de potencias.", dificultad: "difícil" },

    { value: "026", descripcion: "Introducción al concepto de raíz.", dificultad: "fácil" },
    { value: "027", descripcion: "Aprende qué es y cómo calcular una raíz cuadrada.", dificultad: "normal" },
    { value: "028", descripcion: "Descubre cómo funcionan las raíces cúbicas.", dificultad: "normal" },
    { value: "029", descripcion: "Trabaja con raíces que no resultan en enteros exactos.", dificultad: "difícil" },
//dificultad obligatoria desafio
    { value: "333", descripcion: "Nivel oculto: pon a prueba todo lo aprendido.", dificultad: "desafío" },
    { value: "666", descripcion: "Un reto avanzado para mentes curiosas.", dificultad: "desafío" },
    { value: "999", descripcion: "El gran cierre de este viaje matemático.", dificultad: "desafío" },
    { value: "1001", descripcion: "El reto más grande: domina todas las operaciones.", dificultad: "desafío" }
];


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
//chechbox dom
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

    // generateQuestion();


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
        elements.timerDisplay.innerHTML = timerDisplay;
    }, 1000);
}
//iniciar contrareloj :(
function startCountdown(durationInSeconds) {
    gameState.endTime = new Date().getTime() + durationInSeconds * 1000;

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
//add time
function agregarTiempo() {
    if (gameState.endTime) {
        gameState.endTime += gameState.tiempofactor * 1000;
        console.log(`⏱ Tiempo extra añadido: +${gameState.tiempofactor} segundos`);
    }
}

function updateDisplay() {
    // En una interfaz real, actualizar todos los elementos en pantalla
    console.log(`Puntaje: ${gameState.score}`);
    elements.scoreDisplay.innerHTML = gameState.score;
    console.log(`Nivel: ${gameState.level}`);
    elements.levelDisplay.innerHTML = gameState.level;
    console.log(`Combo: ${gameState.combo}x`);
    elements.comboDisplay.innerHTML = gameState.combo;
    console.log(`Correctas: ${gameState.correctAnswers}`);
    elements.correctDisplay.innerHTML = gameState.totalCorrectAnswers;
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
            gameState.levelScale = 1.1;
            gameState.isAdvancedMode = true;
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

/*
function generador() {
    switch (gameState.Dificulty) {
        case "facil":
            switch (gameState.level) {
                case 1:

                    break;

                default:
                    break;
            }
            break;
        case "desafio":
            if (gameState.combo) {
                gameState.levelScale += gameState.level * 0.08;
            } else {
                gameState.levelScale = Math.max(1.1, gameState.levelScale - 0.1);
            }
            
            gameState.HPerror = 5+((33.33-5)/(10-1))*(gameState.level-1);

            /*

            switch (gameState.level) {
                case 1:
                    gameState.maxterms = 2;
                  
                    break;
                case 2:
                    //maxterms aleatorio
                    mostrarDadosEntreNiveles()
                    gameState.HPerror = ;
                    break;
                case 3:

                    break;
                case 4:

                    break;
                case 5:

                    break;
                case 6:

                    break;
                case 7:
                    //maxterm aleatorio++ 
                    break;
                case 8:

                    break;
                case 9:

                    break;
                case 10:

                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}
*/

/*generador*/

function generador() {
    gameState.isInversedMode = false;
    gameState.isAdvancedMode = false;
    gameState.allowBlanks = false;
    gameState.isFractions = false;

    gameState.maxterms = Math.min(gameState.maxlevel, Math.max(2, Math.floor(gameState.level / 2) + 1));
    gameState.HPerror = 5 + ((33.33 - 5) / (gameState.maxlevel - 1)) * (gameState.level - 1);
    gameState.HPerror = Math.min(33.33, Math.max(5, gameState.HPerror));

    /* 
    if (gameState.totalCorrectAnswers >= gameState.minCorrectForFractions) {
        gameState.useFractionsDecimals = true;
    }
    if (gameState.totalCorrectAnswers >= gameState.minCorrectForInversedMode) {
        // Probability for inverse mode. Increases with level or combo.
        if (Math.random() < (0.15 + (gameState.level * 0.01))) { // Example: 15% base + 1% per level
            gameState.isInversedMode = true;
        }
    }
    if (gameState.totalCorrectAnswers >= gameState.minCorrectForDiceMode) {
        // Probability for dice mode. Can be tied to a specific level or occurrence.
        if (Math.random() < 0.1) { // Example: 10% chance
            gameState.isDiceMode = true;
            // When dice mode activates, it takes precedence for `maxterms`
            // and possibly other parameters based on the dice roll.
            mostrarDadosEntreNiveles();
            // The actual question generation will wait for the dice roll to complete
            return; // Exit here and let `mostrarDadosEntreNiveles` call `generateQuestion`
        }
    }

    */
 switch (gameState.Dificulty) {
        case "facil":
            gameState.maxterms = Math.min(3, gameState.level + 1);
            gameState.minNumber = 1;
            gameState.maxNumber = 10 * gameState.level; 
            gameState.isAdvancedMode = false; 
            gameState.isFractions = false; 
            gameState.allowBlanks = false; 
            break;

        case "normal":
            gameState.maxterms = Math.min(4, Math.floor(gameState.level / 2) + 2); 
            gameState.minNumber = 5;
            gameState.maxNumber = 20 * gameState.level;
            if (gameState.level >= 3 && Math.random() < 0.1) {
                gameState.isAdvancedMode = true;
            }
            gameState.isFractions = false; 
            gameState.allowBlanks = false; 
            break;

        case "dificil":
            gameState.maxterms = Math.min(5, gameState.level + 1); 
            gameState.minNumber = 10;
            gameState.maxNumber = 50 * gameState.level;
            gameState.isAdvancedMode = true; 
            if (Math.random() < 0.25) {
                gameState.isInversedMode = true;
            }
            if (gameState.level >= 5 && Math.random() < 0.15) { 
                gameState.isFractions = true;
            }
            gameState.allowBlanks = false; 
            break;

        case "desafio":
            gameState.isDesafio = true;
            if (gameState.combo > 0) {
                gameState.levelScale += gameState.combo * 0.02; 
            } else {
                gameState.levelScale = Math.max(1.1, gameState.levelScale - 0.05); 
            }
            gameState.isDiceMode = true; 
            mostrarDadosEntreNiveles(); 
            return; 

        default:
            // Default to normal if no difficulty is set
            console.warn("Dificultad no reconocida, estableciendo a 'normal'.");
            gameState.Dificulty = "normal";
            generador(); 
            return;
    }


}


/*ia generated*/
function generador() {
    // Reset transient states for the new question/level
    gameState.isInversedMode = false;
    gameState.isAdvancedMode = false;
    gameState.allowBlanks = false; // Se resetea en cada chequeo
    gameState.isFractions = false; // Se resetea si no está globalmente activado
    // gameState.isFractions = false; // This might be persistent once unlocked or tied to level

    // Adjust `maxterms` and `HPerror` dynamically based on difficulty and level
    // These values can be further refined based on playtesting
    gameState.maxterms = Math.min(gameState.maxlevel, Math.max(2, Math.floor(gameState.level / 2) + 1));
    gameState.HPerror = 5 + ((33.33 - 5) / (gameState.maxlevel - 1)) * (gameState.level - 1);
    gameState.HPerror = Math.min(33.33, Math.max(5, gameState.HPerror)); // Cap HP error

    // Determine if certain game modes should activate based on total correct answers
    // These thresholds can be adjusted
    if (gameState.totalCorrectAnswers >= gameState.minCorrectForFractions) {
        gameState.useFractionsDecimals = true;
    }
    if (gameState.totalCorrectAnswers >= gameState.minCorrectForInversedMode) {
        // Probability for inverse mode. Increases with level or combo.
        if (Math.random() < (0.15 + (gameState.level * 0.01))) { // Example: 15% base + 1% per level
            gameState.isInversedMode = true;
        }
    }
    if (gameState.totalCorrectAnswers >= gameState.minCorrectForDiceMode) {
        // Probability for dice mode. Can be tied to a specific level or occurrence.
        if (Math.random() < 0.1) { // Example: 10% chance
            gameState.isDiceMode = true;
            // When dice mode activates, it takes precedence for `maxterms`
            // and possibly other parameters based on the dice roll.
            mostrarDadosEntreNiveles();
            // The actual question generation will wait for the dice roll to complete
            return; // Exit here and let `mostrarDadosEntreNiveles` call `generateQuestion`
        }
    }


    // Specific logic for different difficulty settings
    switch (gameState.Dificulty) {
        case "facil":
            // Easy mode: simpler operations, fewer terms, basic numbers
            gameState.maxterms = Math.min(3, gameState.level + 1); // Max 3 terms initially, grows with level
            gameState.minNumber = 1;
            gameState.maxNumber = 10 * gameState.level; // Numbers grow with level
            gameState.isAdvancedMode = false; // No advanced mode in easy
            gameState.isFractions = false; // No fractions in easy
            gameState.allowBlanks = false; // No blanks in easy
            break;

        case "normal":
            // Normal mode: more terms, wider number range, occasional advanced features
            gameState.maxterms = Math.min(4, Math.floor(gameState.level / 2) + 2); // Max 4 terms, grows faster
            gameState.minNumber = 5;
            gameState.maxNumber = 20 * gameState.level;
            // Small chance for advanced mode after some levels
            if (gameState.level >= 3 && Math.random() < 0.1) {
                gameState.isAdvancedMode = true;
            }
            gameState.isFractions = false; // Still no fractions in normal, unless unlocked globally
            gameState.allowBlanks = false; // No blanks in normal
            break;

        case "dificil":
            // Difficult mode: focuses on scaling complexity
            gameState.maxterms = Math.min(5, gameState.level + 1); // Up to 5 terms, scales aggressively
            gameState.minNumber = 10;
            gameState.maxNumber = 50 * gameState.level;
            gameState.isAdvancedMode = true; // Advanced mode more likely
            // Higher chance for inverse mode as well
            if (Math.random() < 0.25) {
                gameState.isInversedMode = true;
            }
            if (gameState.level >= 5 && Math.random() < 0.15) { // Small chance for fractions at higher levels
                gameState.isFractions = true;
            }
            gameState.allowBlanks = false; // No blanks by default
            break;

        case "desafio":
            // Challenge mode: highly unpredictable and dynamic
            gameState.isDesafio = true; // Mark as challenge mode for specific behaviors

            // Combo affects level scale, making it harder or easier
            if (gameState.combo > 0) {
                gameState.levelScale += gameState.combo * 0.02; // Combo makes it scale faster
            } else {
                gameState.levelScale = Math.max(1.1, gameState.levelScale - 0.05); // No combo makes it slightly easier
            }

            // Dice roll determines `maxterms` and activates modifiers.
            // `mostrarDadosEntreNiveles` is called here.
            // The `generateQuestion` function should then be called after the dice roll animation.
            gameState.isDiceMode = true; // Ensure dice mode is active for this.
            mostrarDadosEntreNiveles(); // This function will set gameState.maxterms and other modes
            return; // Exit here; the next question will be generated after the dice roll resolves.

        default:
            // Default to normal if no difficulty is set
            console.warn("Dificultad no reconocida, estableciendo a 'normal'.");
            gameState.Dificulty = "normal";
            generador(); // Re-call with default
            return;
    }

    // After setting game parameters, generate the actual question.
    // This is a placeholder for your actual question generation logic.
    generateQuestion();
}


function generateQuestion() {
    let questionExpression = "";
    let finalAnswer;
    let numbersForEvaluation = []; // Para construir la expresión real para evaluar
    let expressionPartsForDisplay = []; // Para construir la expresión para mostrar, con X o ?

    // Paso 1: Construir la expresión matemática (y sus componentes para posterior manipulación)
    // Esta parte es crucial y requiere un algoritmo robusto para expresiones complejas.
    // Para simplificar, asumiremos una estructura que nos permite extraer los operandos fácilmente.

    // Ejemplo simplificado de construcción de una expresión lineal:
    // Asumimos que `gameState.numerosGenerados` contiene arrays como `[[8], [3]]`
    // y `gameState.operadoresGenerados` como `['/']`
    // y `gameState.parentesisGenerados` como `[false, true]`
    // que llevarían a una expresión como "80 / (3 + x)"

    let originalOperandos = []; // Para almacenar los valores originales de los números.
    let fullExpressionString = ""; // La expresión completa antes de cualquier modificación visual.

    // Construcción de la expresión y extracción de operandos
    let currentTermIndex = 0;
    for (let i = 0; i < gameState.numerosGenerados.length; i++) {
        let currentNumbersInPart = gameState.numerosGenerados[i];
        let termString = "";

        if (gameState.parentesisGenerados[i]) { // Si hay paréntesis en este término
            termString += "(";
            for (let j = 0; j < currentNumbersInPart.length; j++) {
                termString += currentNumbersInPart[j];
                originalOperandos.push(currentNumbersInPart[j]); // Guardar el número original
                if (j < currentNumbersInPart.length - 1) {
                    termString += ` ${gameState.operatorsAllowed[0] || '+'} `; // Usar un operador simple para el ejemplo
                }
            }
            termString += ")";
        } else { // Sin paréntesis
            termString += currentNumbersInPart[0];
            originalOperandos.push(currentNumbersInPart[0]); // Guardar el número original
        }

        // Añadir exponente si aplica (simplificado)
        if (gameState.exponentesGenerados[i] > 1) {
            termString = `${termString}^{${gameState.exponentesGenerados[i]}}`;
        }

        expressionPartsForDisplay.push(termString);

        if (i < gameState.operadoresGenerados.length) {
            expressionPartsForDisplay.push(gameState.operadoresGenerados[i]);
        }
    }

    fullExpressionString = expressionPartsForDisplay.join(' ');

    // Paso 2: Calcular el resultado de la expresión original
    try {
        // La función `evaluateExpression` debe ser robusta para manejar paréntesis y exponentes
        finalAnswer = evaluateExpression(fullExpressionString);

        // **Prevenir división por cero o resultados no finitos (ej. Infinity, NaN)**
        // y también división con resultado 0, como pediste.
        if (fullExpressionString.includes('/') && (finalAnswer === 0 || !isFinite(finalAnswer))) {
             console.warn("División por cero o resultado no válido (0/Infinity/NaN). Regenerando pregunta.");
             generador();
             return;
        }

    } catch (error) {
        console.error("Error al evaluar la expresión:", error);
        generador(); // Regenerar en caso de error de evaluación
        return;
    }

    // Paso 3: Aplicar lógica de `isInversedMode` o `allowBlanks` o Normal
    let questionDisplayString = "";
    let actualAnswerForPlayer; // La respuesta que el jugador debe ingresar

    if (gameState.isInversedMode) {
        // Modo "Despeje de Incógnitas": Se oculta un operando por 'x' y se muestra el resultado
        // Se elige un operando al azar para ocultar.
        const randomIndexToHide = Math.floor(Math.random() * originalOperandos.length);
        const hiddenValue = originalOperandos[randomIndexToHide];

        // Sustituir el valor oculto por 'x' en la expresión para mostrar
        // Esto es **COMPLEJO** para expresiones anidadas con `replace` simple.
        // Lo ideal sería reconstruir la expresión visualmente.
        let tempDisplayParts = [...expressionPartsForDisplay]; // Clonar para modificar visualmente

        // Identificar dónde está el número a ocultar en `expressionPartsForDisplay`
        // y reemplazarlo por 'x'. Esto es una simplificación.
        // Un enfoque más robusto implicaría un recorrido del árbol de la expresión.
        let foundAndReplaced = false;
        for (let i = 0; i < tempDisplayParts.length; i++) {
            // Buscamos si la parte es un número (o una sub-expresión que contenga el número)
            // y si corresponde al índice que queremos ocultar.
            // Para este ejemplo, solo buscaremos la primera ocurrencia del número oculto.
            if (tempDisplayParts[i].includes(hiddenValue.toString()) && originalOperandos[randomIndexToHide] === hiddenValue && !foundAndReplaced) {
                // Aquí deberías ser más inteligente para reemplazar dentro de paréntesis si es necesario.
                // Por ahora, solo reemplazaremos el número directamente si es una parte simple.
                if (tempDisplayParts[i].toString() === hiddenValue.toString()) {
                    tempDisplayParts[i] = "x";
                    foundAndReplaced = true;
                } else if (tempDisplayParts[i].includes(`(${hiddenValue})`)) { // Para casos con paréntesis simples
                    tempDisplayParts[i] = tempDisplayParts[i].replace(new RegExp(`\\b${hiddenValue}\\b`), "x");
                    foundAndReplaced = true;
                }
            }
        }
        // Si no se encontró o reemplazó bien, se puede simplificar al final o generar sin `x`.
        if (!foundAndReplaced) { // Si la sustitución fue demasiado compleja, revertir a modo normal.
             console.warn("No se pudo ocultar 'x' de forma robusta. Volviendo a modo normal.");
             gameState.isInversedMode = false; // Desactivar este modo para la pregunta actual
             // La lógica siguiente de `else if (gameState.allowBlanks)` o `else` se aplicará.
             questionDisplayString = `${fullExpressionString} = ?`;
             actualAnswerForPlayer = finalAnswer;
        } else {
             questionDisplayString = `${tempDisplayParts.join(' ')} = ${finalAnswer}`;
             actualAnswerForPlayer = hiddenValue; // El jugador debe encontrar el valor oculto
        }


    } else if (gameState.allowBlanks) {
        // Modo "Espacios en Blanco" general: Se oculta un operando por '_' y se pide el resultado
        const randomIndexToHide = Math.floor(Math.random() * originalOperandos.length);
        const hiddenValue = originalOperandos[randomIndexToHide];

        let tempDisplayParts = [...expressionPartsForDisplay];
        let foundAndReplaced = false;
        for (let i = 0; i < tempDisplayParts.length; i++) {
            if (tempDisplayParts[i].includes(hiddenValue.toString()) && originalOperandos[randomIndexToHide] === hiddenValue && !foundAndReplaced) {
                 if (tempDisplayParts[i].toString() === hiddenValue.toString()) {
                    tempDisplayParts[i] = "\\_";
                    foundAndReplaced = true;
                } else if (tempDisplayParts[i].includes(`(${hiddenValue})`)) {
                    tempDisplayParts[i] = tempDisplayParts[i].replace(new RegExp(`\\b${hiddenValue}\\b`), "\\_");
                    foundAndReplaced = true;
                }
            }
        }
        if (!foundAndReplaced) {
            console.warn("No se pudo ocultar '_' de forma robusta. Volviendo a modo normal.");
            gameState.allowBlanks = false;
            questionDisplayString = `${fullExpressionString} = ?`;
            actualAnswerForPlayer = finalAnswer;
        } else {
            questionDisplayString = `${tempDisplayParts.join(' ')} = ?`;
            actualAnswerForPlayer = finalAnswer; // En este modo, el jugador busca el resultado de la expresión con el blanco
        }


    } else {
        // Modo Normal: Calcular el resultado de la expresión
        questionDisplayString = `${fullExpressionString} = ?`;
        actualAnswerForPlayer = finalAnswer;
    }

    // Paso 4: Actualizar DOM y MathJax
    elements.questionText.innerHTML = `\\(${questionDisplayString}\\)`;
    gameState.currentQuestion = questionDisplayString; // Guarda la pregunta visual
    gameState.currentAnswer = actualAnswerForPlayer; // Guarda la respuesta esperada

    elements.answerInput.value = '';
    elements.feedbackText.textContent = '';
    elements.answerField.focus();

    if (window.MathJax) {
        MathJax.typeset();
    }

    console.log("Pregunta generada (LaTeX):", `\\(${questionDisplayString}\\)`);
    console.log("Respuesta esperada (para el jugador):", gameState.currentAnswer);
}





// --- Funciones Auxiliares (PLACEHOLDERS, requieren implementación robusta) ---

// `evaluateExpression(expr)`: DEBE ser una función segura y precisa.
// NO USAR `eval()` en producción. Considera librerías como Math.js.
// Ejemplo MUY SIMPLIFICADO de evaluación (no apto para producción compleja):
function evaluateExpression(expr) {
    // Esto es un placeholder. Para expresiones complejas con paréntesis y orden de operaciones,
    // necesitarías un parser y evaluador real (ej. algoritmo Shunting-yard y RPN).
    // Para potencias (a^b) necesitas convertir a Math.pow(a,b) o a**b si el entorno lo soporta.
    // Para raíces (√a) necesitas convertir a Math.sqrt(a).
    // Asegúrate de que los operadores y paréntesis se manejen correctamente.

    // Ejemplo para `80 / (3 + x)`:
    // Si la expresión original es "80 / (3 + 5)", `evaluateExpression("80 / (3 + 5)")` debería dar 10.
    let cleanedExpr = expr.replace(/\^\{(\d+)\}/g, '**$1'); // LaTeX power to JS power
    cleanedExpr = cleanedExpr.replace(/√(\d+)/g, 'Math.sqrt($1)'); // Basic LaTeX root to JS sqrt

    try {
        // MUCHO CUIDADO con eval. Solo para prototipos muy controlados.
        const result = eval(cleanedExpr);
        return result;
    } catch (e) {
        console.error("Error durante la evaluación de la expresión:", e);
        throw new Error("Expresión inválida para evaluación.");
    }
}
/*fin ia generated*/

function mostrarDadosEntreNiveles() {
    const modal = document.getElementById("diceModal");
    const diceContainerD6 = document.getElementById("diceContainerD6");
    const diceContainerD10 = document.getElementById("diceContainerD10");
    const diceD6 = document.getElementById("diceD6");
    const diceD10 = document.getElementById("diceD10");
    const diceResult = document.getElementById("diceResult");
    const progressBarFill = document.getElementById("progressBarFill");
    const statusMessage = document.getElementById("statusMessage");

    // Determinar nivel actual y qué dado usar
    const nivelActual = gameState.currentLevel || 1;
    const usarD10 = nivelActual >= 5;

    // Mostrar el contenedor apropiado según el nivel
    diceContainerD6.classList.toggle("hidden", usarD10);
    diceContainerD10.classList.toggle("hidden", !usarD10);

    // Si estamos usando D10, actualizar el signo de interrogación
    if (usarD10) {
        const d10NumberElement = document.querySelector('.d10-number');
        if (d10NumberElement) {
            d10NumberElement.textContent = "?";
        }
    }

    // Mostrar el modal
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100");

    // La clase scale-90 se aplica por defecto, al activar el modal quitamos esta clase
    modal.querySelector("div").classList.remove("scale-90");
    modal.querySelector("div").classList.add("scale-100");

    diceResult.textContent = "?";
    progressBarFill.style.width = "0%";

    // Iniciar la animación de la barra de progreso
    setTimeout(() => {
        progressBarFill.style.width = "100%";
    }, 100);

    // Configurar los dados para que muestren un número aleatorio
    setTimeout(() => {
        // Definir el máximo según qué dado estamos usando
        const max = usarD10 ? 10 : 6;
        const min = 2; // Mínimo de 2 términos

        // Lanzar dado principal (cantidad de términos)
        const cantidadTerminos = lanzarDado(min, max);

        if (usarD10) {
            // Para el D10 simplificado, solo iniciamos la animación
            diceD10.classList.add("dice-rolling-d10");
        } else {
            // Configuración para D6
            const rotacionesD6 = {
                1: { x: "0deg", y: "0deg", z: "0deg" },
                2: { x: "180deg", y: "0deg", z: "0deg" },
                3: { x: "0deg", y: "-90deg", z: "0deg" },
                4: { x: "0deg", y: "90deg", z: "0deg" },
                5: { x: "-90deg", y: "0deg", z: "0deg" },
                6: { x: "90deg", y: "0deg", z: "0deg" }
            };
            // Aplicar la rotación final al D6
            diceD6.style.setProperty('--finalX', rotacionesD6[cantidadTerminos].x);
            diceD6.style.setProperty('--finalY', rotacionesD6[cantidadTerminos].y);
            diceD6.style.setProperty('--finalZ', rotacionesD6[cantidadTerminos].z);

            // Iniciar la animación de lanzamiento del D6
            diceD6.classList.add("dice-rolling-d6");

        }

        // Lanzar probabilidades para modificadores
        gameState.maxterms = cantidadTerminos;
        console.log(cantidadTerminos);
        gameState.isAdvancedMode = Math.random() < 0.25;
        gameState.isInversedMode = Math.random() < 0.15;
        gameState.isFractions = Math.random() < 0.2;

        // Actualizar mensaje durante la animación
        statusMessage.textContent = "Calculando probabilidades...";

        // Mostrar el resultado después de la animación
        setTimeout(() => {
            // Si estamos usando D10, actualizar la cara del D10
            if (usarD10) {
                const d10NumberElement = document.querySelector('.d10-number');
                if (d10NumberElement) {
                    d10NumberElement.textContent = cantidadTerminos;
                    d10NumberElement.classList.add('result-flash');

                    // Remover la clase después de la animación
                    setTimeout(() => {
                        d10NumberElement.classList.remove('result-flash');
                    }, 500);
                }
            }

            diceResult.textContent = cantidadTerminos;
            diceResult.classList.add('result-flash');

            // Remover la clase después de la animación
            setTimeout(() => {
                diceResult.classList.remove('result-flash');
            }, 500);

            // Configurar mensaje final
            let modoText = [];
            if (gameState.isAdvancedMode) modoText.push("Modo avanzado");
            if (gameState.isInversedMode) modoText.push("Modo inverso");
            if (gameState.isFractions) modoText.push("Fracciones");

            statusMessage.textContent = modoText.length > 0
                ? `Modos activados: ${modoText.join(", ")}`
                : "¡Listo para empezar!";

            // Cerrar el modal después de un tiempo
            setTimeout(() => {
                if (usarD10) {
                    diceD10.classList.remove("dice-rolling-d10");
                } else {
                    diceD6.classList.remove("dice-rolling-d6");
                }

                // Restaurar las clases originales del modal para ocultarlo
                modal.classList.remove("opacity-100");
                modal.classList.add("opacity-0", "pointer-events-none");

                // Restaurar la escala original
                modal.querySelector("div").classList.remove("scale-100");
                modal.querySelector("div").classList.add("scale-90");


            }, 1500);
        }, 1500);
    }, 500);
}

function lanzarDado(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Código para probar la animación (para desarrollo)
// Definir un objeto gameState para pruebas


// Función para probar la animación
function testAnimation(level) {
    gameState.currentLevel = level;
    mostrarDadosEntreNiveles(() => {
        console.log("Animación completada para nivel " + level);
        console.log("Estado del juego:", gameState);
    });
}

// Función para probar ambas animaciones secuencialmente
function testBothAnimations() {
    // Primero probar D6 (nivel 1)
    testAnimation(1);

    // Después de 5 segundos, probar D10 (nivel 5)
    setTimeout(() => {
        testAnimation(5);
    }, 5000);
}

// Descomenta para probar la animación
testAnimation(1); // Prueba con dado D6 (nivel < 5)
// testAnimation(5); // Prueba con dado D10 (nivel >= 5)
//testBothAnimations(); // Prueba ambos dados secuencialmente


//visual modo de juego

const select = document.getElementById("Dificultad");
const descripcion = document.getElementById("descripcion");
const contenedor = document.getElementById("contenedor");


select.addEventListener("change", () => {
  const seleccion = select.value;
  const data = DificultyDescription.find(item => item.level === seleccion);
  descripcion.textContent = data ? data.description : "Selecciona una dificultad.";

  descripcion.classList.remove("desafio-texto");
  contenedor.classList.remove("temblor");

  if (seleccion === "Desafío") {
    void descripcion.offsetWidth; // reiniciar animación
    descripcion.classList.add("desafio-texto");
    contenedor.classList.add("temblor");
    elements.startGameBtn.classList.add("bg-red-500");
    elements.startGameBtn.classList.add("hover:bg-red-600");
    elements.startGameBtn.classList.remove("bg-green-500");
    elements.startGameBtn.classList.remove("hover:bg-green-600");
  }else{
    elements.startGameBtn.classList.remove("bg-red-500");
    elements.startGameBtn.classList.remove("hover:bg-red-600");
    elements.startGameBtn.classList.add("bg-green-500");
    elements.startGameBtn.classList.add("hover:bg-green-600");
  }
});