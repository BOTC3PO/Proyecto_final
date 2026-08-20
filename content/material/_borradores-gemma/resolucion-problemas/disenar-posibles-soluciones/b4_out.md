### 1 — Divergencia vs Convergencia
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["pensamiento_creativo", "procesos"]

respuesta: "divergencia"
tipo: "completar"
respuestas_validas: ["divergencia"]

enunciado: "Mientras que el pensamiento convergente busca una única solución correcta a un problema, el pensamiento ___ se enfoca en la generación de múltiples alternativas y posibilidades."

explicacion: |
  La fase de diseño requiere pensamiento divergente para expandir el abanico de opciones antes de pasar a la fase de selección (convergencia).
```

### 2 — El rol de la lluvia de ideas
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["brainstorming", "metodologia"]

variables:
  es_critica: uno_de([true, false])

respuesta: es_critica
tipo: "vf"

enunciado: "En una sesión de lluvia de ideas (brainstorming) para diseñar soluciones, la evaluación crítica de las ideas debe realizarse de forma inmediata para descartar las que parezcan poco viables. ¿Es esto correcto?"

explicacion: |
  No. Para maximizar la creatividad, primero se debe fomentar la cantidad de ideas (divergencia) sin juicios, y solo en una etapa posterior se realiza la evaluación crítica.
```

### 3 — Diferencia entre solución y opción
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "una opción es una alternativa posible, mientras que una solución es la respuesta definitiva al problema"
tipo: "mc"
opciones_explicitas: ["una opción es una alternativa posible, mientras que una solución es la respuesta definitiva al problema", "una opción es un error de diseño, mientras que una solución es el objetivo", "una opción es un recurso, mientras que una solución es un proceso", "no hay diferencia entre ambos términos"]

enunciado: "Al diseñar posibles soluciones, ¿cuál es la distinción fundamental entre generar 'opciones' y encontrar la 'solución'?"

explicacion: |
  Generar opciones es parte del proceso de exploración; la solución es el resultado final tras evaluar y seleccionar la mejor opción.
```

### 4 — Secuencia del proceso de diseño
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta: ["Identificación del problema", "Generación de alternativas", "Evaluación de opciones", "Selección de la solución"]
tipo: "ordenar"
opciones_explicitas: ["Identificación del problema", "Generación de alternativas", "Evaluación de opciones", "Selección de la solución"]

enunciado: "Ordena los pasos lógicos para un proceso de diseño de soluciones efectivo:"

explicacion: |
  No se puede evaluar lo que no se ha generado, y no se puede seleccionar sin haber comparado las alternativas previamente identificadas.
```

### 5 — El sesgo de la primera idea
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "avanzado"
  tags: ["sesgos", "cognicion"]

variables:
  caso_estudio: uno_de([0, 1])

respuesta: "sesgo de anclaje"
tipo: "completar"
respuestas_validas: ["sesgo de anclaje"]

enunciado: "Cuando un equipo de diseño se queda estancado en la primera idea que surge, ignorando otras alternativas más efectivas, está cayendo en el ___."

explicacion: |
  El sesgo de anclaje ocurre cuando la primera información o idea recibida tiene un peso desproporcionado en la toma de decisiones, limitando la exploración de soluciones alternativas.
```