### 1 — El papel del lenguaje en la percepción
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["hipotesis_relativismo", "linguistica", "cognicion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Un hablante de una lengua que tiene múltiples términos para distintos tipos de 'nieve', percibe diferencias sutiles en la textura del hielo de forma más rápida.", "percepción"],
    ["Un hablante de una lengua que solo usa la palabra 'nieve' para todo, requiere más tiempo de procesamiento para distinguir texturas de hielo.", "percepción"]
  ]

enunciado: "Según la hipótesis del relativismo lingüístico, la estructura del lenguaje de una persona puede influir en su {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["percepción", "memoria", "emoción", "motricidad"]

explicacion: |
  El relativismo lingüístico sugiere que las categorías lingüísticas que utilizamos actúan como marcos que facilitan o dificultan la distinción de ciertos aspectos del mundo físico.
```

### 2 — Categorización y conceptos
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["conceptos", "categorizacion"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [
    ["El concepto de 'perro' permite agrupar a un caniche, un labrador y un bulldog.", "perro"],
    ["El concepto de 'fruta' permite agrupar a una manzana, una pera y una uva.", "fruta"]
  ]

enunciado: "Cuando una persona utiliza una palabra para agrupar diversos objetos con características comunes, está utilizando un ___ para organizar su pensamiento."

respuesta: ejemplos[ejemplo_idx][1]
tipo: completar
respuestas_validas: ["concepto", "símbolo", "etiqueta"]

explicacion: |
  Los conceptos son representaciones mentales que nos permiten categorizar el mundo, ahorrando energía cognitiva al no tener que procesar cada objeto como algo totalmente nuevo.
```

### 3 — El pensamiento simbólico
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolismo", "representacion_mental"]

enunciado: "El lenguaje es una forma de representación simbólica porque los sonidos o grafemas utilizados no tienen una relación física directa con el objeto que representan."

respuesta: verdadero
tipo: vf

explicacion: |
  La arbitrariedad del signo lingüístico es una característica fundamental: la palabra "mesa" no se parece a una mesa; es una convención simbólica.
```

### 4 — Secuencia del proceso creativo
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "procesos_cognitivos"]

enunciado: "Ordene las etapas del proceso creativo según el modelo tradicional de Wallas:"

opciones_explicitas: ["Preparación", "Incubación", "Iluminación", "Verificación"]
respuesta: ["Preparación", "Incubación", "Iluminación", "Verificación"]
tipo: ordenar

explicacion: |
  El proceso creativo suele seguir una secuencia que va desde la inmersión en el problema (preparación), el procesamiento inconsciente (incubación), el momento del 'eureka' (iluminación) y la validación del resultado (verificación).
```

### 5 — Resolución de problemas y lenguaje
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["resolucion_problemas", "heuristicos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un arquitecto que usa planos para visualizar una estructura antes de construirla.", "representacion"],
    ["Un matemático que utiliza fórmulas para resolver una ecuación compleja.", "representacion"]
  ]

enunciado: "En el caso de {casos[caso_idx][0]}, el uso de símbolos y lenguaje técnico sirve como una herramienta de ___ mental para resolver problemas."

respuesta: representacion
tipo: mc
opciones_explicitas: ["representacion", "inhibicion", "impresion", "reaccion"]

explicacion: |
  El lenguaje permite la representación mental, lo que nos permite manipular ideas y objetos en nuestra mente sin necesidad de tenerlos presentes físicamente.
```