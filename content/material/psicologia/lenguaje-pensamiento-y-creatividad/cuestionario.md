# Psicologia — Lenguaje pensamiento y creatividad (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El carácter simbólico del lenguaje

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolismo", "semiotica"]

respuesta: "simbólico"
tipo: completar
respuestas_validas:
  - "simbólico"
  - "simbolico"

enunciado: "El lenguaje es un sistema de signos cuya función principal es representar la realidad de manera ___, permitiendo que el pensamiento se desprenda de la inmediatez de los objetos físicos."

explicacion: |
  El carácter simbólico permite que una palabra (significante) represente un concepto (significado) sin que exista una conexión física necesaria, permitiendo la abstracción.
```

### 2 — Hipótesis de Sapir-Whorf

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["relativismo_linguistico", "determinismo"]

respuesta: "el lenguaje determina el pensamiento"
tipo: mc
opciones_explicitas: ["el lenguaje determina el pensamiento", "el lenguaje influye en el pensamiento", "el lenguaje es un producto secundario del pensamiento", "no existe relación entre ambos"]

enunciado: "Según la versión fuerte del relativismo lingüístico (determinismo), la idea principal es que ___."

explicacion: |
  El determinismo lingüístico sostiene que la estructura de la lengua que hablamos determina y limita las categorías de nuestro pensamiento.
```

### 3 — Relación entre pensamiento y lenguaje

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["relacion_cognitiva"]

respuesta: verdadero
tipo: vf

enunciado: "El pensamiento puede ocurrir de forma independiente al lenguaje (por ejemplo, en la actividad mental de un recién nacido o en el pensamiento visual), aunque el lenguaje facilita su estructuración y complejidad."

explicacion: |
  Aunque están íntimamente ligados, existen procesos cognitivos (como la inteligencia espacial o el pensamiento pre-verbal) que operan sin necesidad de estructuras lingüísticas complejas.
```

### 4 — Componentes de la comunicación

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["semiotica", "signo"]

respuesta: "significante"
tipo: completar
respuestas_validas:
  - "significante"
  - "significado"

enunciado: "En la teoría del signo lingüístico, la forma física o acústica de la palabra se denomina ___, mientras que el concepto mental que evoca se denomina significado."

explicacion: |
  Saussure define el signo como la unión de un significante (la imagen acústica/escrita) y un significado (el concepto).
```

### 5 — Procesos de la creatividad

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["creatividad", "pensamiento_divergente"]

respuesta_orden: ["Pensamiento Divergente", "Pensamiento Convergente", "Producción Creativa"]
tipo: ordenar

opciones_explicitas: ["Pensamiento Divergente", "Pensamiento Convergente", "Producción Creativa"]

enunciado: "Ordene los procesos cognitivos según una secuencia lógica en un proceso de resolución creativa de problemas: primero se exploran múltiples soluciones posibles, luego se evalúa la mejor opción y finalmente se ejecuta la idea."

explicacion: |
  La creatividad suele implicar un movimiento desde la divergencia (generación de ideas) hacia la convergencia (selección y refinamiento) para llegar a un producto final.
```

### 6 — El papel de la palabra en la categorización

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["hipotesis_relativismo_linguistico", "categorizacion"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["Un hablante de un idioma que tiene una sola palabra para 'azul' y 'verde'", "restringe"], ["Un hablante de un idioma que distingue claramente entre 'azul' y 'celeste'", "potencia"]]

enunciado: "Según la hipótesis de Sapir-Whorf, si una persona pertenece al escenario '{escenarios[caso_idx][0]}', su capacidad para categorizar y recordar matices cromáticos estará influenciada por su estructura lingüística. Esto sugiere que el lenguaje ___ el pensamiento."

pasos:
  - "Analizar cómo la falta de términos específicos afecta la percepción de los límites de color."
  - "Relacionar la estructura gramatical con la organización mental de los estímulos."

opciones_explicitas: ["restringe", "no tiene", "potencia", "ignora"]
respuesta: escenarios[caso_idx][1]
tipo: "mc"

explicacion: |
  El relativismo lingüístico sugiere que las categorías lingüísticas actúan como filtros que estructuran la percepción y la memoria de los estímulos sensoriales.
```

### 7 — Verdad o Falso: Determinismo vs. Relativismo

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

### 8 — Proceso de resolución de problemas creativos

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["creatividad", "pensamiento_divergente"]

enunciado: "Para resolver un problema de pensamiento divergente, como encontrar usos alternativos para un ladrillo, el sujeto debe seguir una secuencia lógica de procesamiento creativo. Ordene los pasos desde el inicio hasta la producción de la idea original:"

opciones_explicitas: ["Preparación del problema", "Fluidez de ideas", "Incubación", "Evaluación de la respuesta"]
respuesta_orden: ["Preparación del problema", "Fluidez de ideas", "Incubación", "Evaluación de la respuesta"]
tipo: "ordenar"

explicacion: |
  El proceso creativo implica primero entender el reto (preparación), generar múltiples opciones sin juzgar (fluidez/divergencia), permitir un periodo de descanso mental (incubación) y finalmente seleccionar la mejor opción (evaluación).
```

### 9 — El concepto de símbolo en el pensamiento

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["simbolismo", "representacion_mental"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["La palabra 'perro' representa al animal sin necesidad de verlo", "simbolo_abstracto"], ["El gesto de señalar un objeto para identificarlo", "gesto_referencial"]]

enunciado: "En el desarrollo cognitivo, el paso hacia el pensamiento simbólico permite que el sujeto utilice un ___ para representar objetos ausentes. En el caso de '{ejemplos[ejemplo_idx][0]}', estamos ante una representación mental de alto nivel."

respuesta: "símbolo"
respuestas_validas:
  - "símbolo"
  - "signo"
tipo: "completar"

explicacion: |
  El pensamiento simbólico permite la representación mental de objetos, personas o eventos que no están presentes en el entorno inmediato, permitiendo el pensamiento abstracto y el lenguaje.
```

### 10 — Relación entre lenguaje y pensamiento

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["interaccion_lenguaje_pensamiento"]

variables:
  caso_tipo: uno_de([0, 1])
  casos: [["El lenguaje es una herramienta que expresa pensamientos ya formados", "reflejo"], ["El lenguaje es un proceso que moldea la estructura del pensamiento", "moldeador"]]

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

### 11 — ¿El lenguaje determina el pensamiento?

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["determinismo_linguistico", "hipotesis_sapir_whorf"]

respuesta: falso
tipo: vf

enunciado: "Según la versión fuerte de la hipótesis de Sapir-Whorf (determinismo lingüístico), el lenguaje determina de manera absoluta y restrictiva los límites del pensamiento humano."

explicacion: |
  Aunque el lenguaje influye en la percepción y la categorización (relativismo lingüístico), la psicología cognitiva moderna sostiene que el pensamiento puede ocurrir sin lenguaje (como en bebés o animales) y que el determinismo absoluto es una postura descartada.
```

### 12 — El papel de los símbolos en el pensamiento

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolos", "representacion_mental"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["el color rojo", "una señal de pare"], ["el concepto de justicia", "una balanza"]]

opciones_explicitas: ["Representación simbólica", "Percepción sensorial pura", "Reflejo instintivo"]

respuesta: "Representación simbólica"
tipo: mc

enunciado: "Cuando un individuo asocia {escenarios[escenario_idx][0]} con {escenarios[escenario_idx][1]}, ¿mediante qué proceso cognitivo está operando?"

pasos:
  - "Identificar el estímulo sensorial."
  - "Reconocer el significado arbitrario asignado por la cultura."
  - "Conectar el símbolo con el concepto mental."

explicacion: |
  El pensamiento simbólico permite que un estímulo (sonido, imagen, objeto) represente algo que no está presente, permitiendo la abstracción.
```

### 13 — Relación entre lenguaje y procesos cognitivos

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["procesos_cognitivos", "estructuracion"]

opciones_explicitas: ["El lenguaje es una consecuencia del pensamiento", "El lenguaje es el único motor del pensamiento", "El pensamiento y el lenguaje son procesos independientes que no se influyen"]

respuesta: "El lenguaje es una consecuencia del pensamiento"
tipo: mc

enunciado: "Desde una perspectiva constructivista, se argumenta que el lenguaje es una herramienta que ayuda a estructurar y dar forma a procesos de pensamiento que ya existen de manera pre-verbal."

explicacion: |
  Si bien el lenguaje estructura el pensamiento (facilitando la complejidad), el pensamiento precede al lenguaje en el desarrollo cognitivo temprano.
```

### 14 — Componentes de la comunicación simbólica

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["semiotica", "signo"]

respuestas_validas:
  - "significante"

respuesta: "significante"
tipo: completar

enunciado: "En la estructura del signo lingüístico, la forma física o acústica (el sonido de la palabra) se denomina ___ y el concepto mental que esta evoca se denomina significado."

explicacion: |
  Saussure definió el signo como la unión de una parte material (significante) y una parte conceptual (significado).
```

### 15 — Fases del proceso creativo

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "modelo_wallas"]

opciones_explicitas: ["Preparación", "Incubación", "Iluminación", "Verificación"]

respuesta_orden: ["Preparación", "Incubación", "Iluminación", "Verificación"]
tipo: ordenar

enunciado: "Ordene las fases del proceso creativo propuestas por Graham Wallas:"

explicacion: |
  El proceso creativo comienza con la inmersión en el problema (preparación), seguido de un periodo de procesamiento inconsciente (incubación), la aparición de la idea (iluminación) y finalmente la validación de la misma (verificación).
```

### 16 — El lenguaje como estructura

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["lenguaje", "pensamiento", "hipotesis_linguistica"]

respuesta: "hipotesis_linguistica"
tipo: completar
respuestas_validas:
  - "hipotesis_linguistica"
  - "determinismo_linguistico"

enunciado: "La teoría que sostiene que la estructura del lenguaje que hablamos determina o limita las categorías de nuestro pensamiento se conoce como ___."

explicacion: |
  La hipótesis de Sapir-Whorf (o determinismo lingüístico) sugiere que el lenguaje no solo comunica el pensamiento, sino que lo estructura y limita.
```

### 17 — Diferencia entre lenguaje y comunicación

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["comunicacion", "lenguaje", "simbolismo"]

respuesta: verdadero
tipo: vf
enunciado: "Si una persona emite un grito de dolor para pedir ayuda, está realizando un acto de comunicación, pero no necesariamente un acto de lenguaje simbólico. ¿Es correcta esta afirmación?"

explicacion: |
  La comunicación es el intercambio de información (puede ser instintiva o gestual), mientras que el lenguaje implica el uso de sistemas de signos arbitrarios y simbólicos con reglas gramaticales.
```

### 18 — Componentes del pensamiento simbólico

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["simbolismo", "signo", "semiotica"]

variables:
  escenario: uno_de([["la palabra 'perro'", "significante"], ["la imagen mental de un perro", "significado"], ["el concepto abstracto de canino", "concepto"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["significante", "significado", "concepto"]

enunciado: "En el proceso de representación mental, la parte del signo que es la forma física (sonidos o letras) se denomina ___."

explicacion: |
  Según la semiótica, el signo se divide en significante (la forma material) y significado (el concepto mental).
```

### 19 — Procesos de la creatividad

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "pensamiento_divergente", "pensamiento_convergente"]

respuesta_orden: ["pensamiento_divergente", "pensamiento_convergente"]
tipo: ordenar

opciones_explicitas: ["pensamiento_divergente", "pensamiento_convergente"]

enunciado: "Ordene los siguientes procesos según la secuencia lógica de la resolución creativa de problemas: primero se generan múltiples ideas sin restricciones y luego se selecciona la mejor solución."

explicacion: |
  La creatividad suele seguir un flujo que va desde la divergencia (generación de opciones) hacia la convergencia (evaluación y selección).
```

### 20 — Relación lenguaje-pensamiento

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["cognicion", "lenguaje"]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "De acuerdo con las teorías cognitivas modernas, ¿es posible que existan procesos de pensamiento (como la rotación mental) que no dependan del lenguaje verbal?"

explicacion: |
  La evidencia sugiere que el pensamiento no es dependiente exclusivamente del lenguaje; existen procesos cognitivos no verbales, como la inteligencia visoespacial.
```

### 21 — El papel del lenguaje en la percepción

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["hipotesis_relativismo", "linguistica", "cognicion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un hablante de una lengua que tiene múltiples términos para distintos tipos de 'nieve', percibe diferencias sutiles en la textura del hielo de forma más rápida.", "percepción"], ["Un hablante de una lengua que solo usa la palabra 'nieve' para todo, requiere más tiempo de procesamiento para distinguir texturas de hielo.", "percepción"]]

enunciado: "Según la hipótesis del relativismo lingüístico, la estructura del lenguaje de una persona puede influir en su {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["percepción", "memoria", "emoción", "motricidad"]

explicacion: |
  El relativismo lingüístico sugiere que las categorías lingüísticas que utilizamos actúan como marcos que facilitan o dificultan la distinción de ciertos aspectos del mundo físico.
```

### 22 — Categorización y conceptos

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["conceptos", "categorizacion"]

enunciado: "Cuando una persona utiliza una palabra para agrupar diversos objetos con características comunes, está utilizando un ___ para organizar su pensamiento."

respuesta: "concepto"
tipo: completar
respuestas_validas:
  - "concepto"
  - "símbolo"
  - "etiqueta"

explicacion: |
  Los conceptos son representaciones mentales que nos permiten categorizar el mundo, ahorrando energía cognitiva al no tener que procesar cada objeto como algo totalmente nuevo.
```

### 23 — El pensamiento simbólico

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

### 24 — Secuencia del proceso creativo

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "procesos_cognitivos"]

enunciado: "Ordene las etapas del proceso creativo según el modelo tradicional de Wallas:"

opciones_explicitas: ["Preparación", "Incubación", "Iluminación", "Verificación"]
respuesta_orden: ["Preparación", "Incubación", "Iluminación", "Verificación"]
tipo: ordenar

explicacion: |
  El proceso creativo suele seguir una secuencia que va desde la inmersión en el problema (preparación), el procesamiento inconsciente (incubación), el momento del 'eureka' (iluminación) y la validación del resultado (verificación).
```

### 25 — Resolución de problemas y lenguaje

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["resolucion_problemas", "heuristicos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un arquitecto que usa planos para visualizar una estructura antes de construirla.", "representacion"], ["Un matemático que utiliza fórmulas para resolver una ecuación compleja.", "representacion"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el uso de símbolos y lenguaje técnico sirve como una herramienta de ___ mental para resolver problemas."

respuesta: "representacion"
tipo: mc
opciones_explicitas: ["representacion", "inhibicion", "impresion", "reaccion"]

explicacion: |
  El lenguaje permite la representación mental, lo que nos permite manipular ideas y objetos en nuestra mente sin necesidad de tenerlos presentes físicamente.
```
