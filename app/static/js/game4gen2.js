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
    minRespuestas: 10,
    levelScale: 1.5,
    maxterms: 5,
    maxlevel: 10,
    HP: 100,
    HPerror: 0,
    endTime: 30000,
    tiempofactor: 1,
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
            }*/
            break;
        default:
            break;
    }
}





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