### 1 — El papel de la palabra en la categorización
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["hipotesis_relativismo_linguistico", "categorizacion"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["Un hablante de un idioma que tiene una sola palabra para 'azul' y 'verde'", "color_unico"],
    ["Un hablante de un idioma que distingue claramente entre 'azul' y 'celeste'", "distincion_clara"]
  ]

enunciado: "Según la hipótesis de Sapir-Whorf, si una persona pertenece al escenario {escenarios[caso_idx][0]}, su capacidad para categorizar y recordar matices cromáticos estará influenciada por su estructura lingüística. Esto sugiere que el lenguaje ___ el pensamiento."

pasos:
  - "Analizar cómo la falta de términos específicos afecta la percepción de los límites de color."
  - "Relacionar la estructura gramatical con la organización mental de los estímulos."

opciones_explicitas: ["restringe", "no tiene", "potencia", "ignora"]
respuesta: "restringe"
tipo: "mc"

explicacion: |
  El relativismo lingüístico sugiere que las categorías lingüísticas actúan como filtros que estructuran la percepción y la memoria de los estímulos sensoriales.
```

### 2 — Verdad o Falso: Determinismo vs. Relativismo
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["determinismo_linguistico", "teoria"]

enunciado: "El determinismo lingüístico fuerte sostiene que el lenguaje determina absolutamente la forma en que pensamos, haciendo imposible pensar conceptos para los cuales no existen palabras."

respuesta: falso
tipo: "vf"

explicacion: |
  La psicología moderna distingue entre el determinismo (fuerte y hoy mayormente descartado) y el relativismo (débil), que postula que el lenguaje influye o facilita ciertos patrones de pensamiento, pero no los limita de forma absoluta.
```

### 3 — Proceso de resolución de problemas creativos
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["creatividad", "pensamiento_divergente"]

enunciado: "Para resolver un problema de pensamiento divergente, como encontrar usos alternativos para un ladrillo, el sujeto debe seguir una secuencia lógica de procesamiento creativo. Ordene los pasos desde el inicio hasta la producción de la idea original:"

opciones_explicitas: ["Fluidez de ideas", "Preparación del problema", "Evaluación de la respuesta", "Incubación"]
respuesta: ["Preparación del problema", "Fluidez de ideas", "Incubación", "Evaluación de la respuesta"]
tipo: "ordenar"

explicacion: |
  El proceso creativo implica primero entender el reto (preparación), generar múltiples opciones sin juzgar (fluidez/divergencia), permitir un periodo de descanso mental (incubación) y finalmente seleccionar la mejor opción (evaluación).
```

### 4 — El concepto de símbolo en el pensamiento
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["simbolismo", "representacion_mental"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [
    ["La palabra 'perro' representa al animal sin necesidad de verlo", "simbolo_abstracto"],
    ["El gesto de señalar un objeto para identificarlo", "gesto_referencial"]
  ]

enunciado: "En el desarrollo cognitivo, el paso hacia el pensamiento simbólico permite que el sujeto utilice un ___ para representar objetos ausentes. En el caso de '{ejemplos[ejemplo_idx][0]}', estamos ante una representación mental de alto nivel."

respuestas_validas: ["símbolo", "signo"]
tipo: "completar"

explicacion: |
  El pensamiento simbólico permite la representación mental de objetos, personas o eventos que no están presentes en el entorno inmediato, permitiendo el pensamiento abstracto y el lenguaje.
```

### 5 — Relación entre lenguaje y pensamiento
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["interaccion_lenguaje_pensamiento"]

variables:
  caso_tipo: uno_de([0, 1])
  casos: [
    ["El lenguaje es una herramienta que expresa pensamientos ya formados", "reflejo"],
    ["El lenguaje es un proceso que moldea la estructura del pensamiento", "moldeador"]
  ]

enunciado: "Si adoptamos la postura de que el lenguaje es un ___ de la cognición, entonces el pensamiento es previo al lenguaje. Si adoptamos la postura de que el lenguaje es un ___ de la cognición, entonces el lenguaje estructura el pensamiento."

pasos:
  - "Identificar la postura de 'reflejo' (el lenguaje solo comunica)."
  - "Identificar la postura de 'moldeador' (el lenguaje estructura)."

opciones_explicitas: ["reflejo, moldeador", "moldeador, reflejo", "reflejo, reflejo", "moldeador, moldeador"]
respuesta: "reflejo, moldeador"
tipo: "mc"

explicacion: |
  Existen dos corrientes principales: la que ve al lenguaje como un mero vehículo de comunicación de procesos mentales preexistentes (reflejo), y la que sostiene que la estructura del lenguaje condiciona la organización de esos procesos (moldeador).
```