### 1 — El carácter simbólico del lenguaje
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolismo", "semiotica"]

respuesta: "simbólico"
tipo: completar
respuestas_validas: ["simbólico", "simbolico"]

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

variables:
  escenario: uno_de([["el lenguaje determina el pensamiento", "el lenguaje influye en el pensamiento"], ["la estructura del lenguaje limita la cognición", "el lenguaje moldea la percepción"]])

respuesta: uno_de(escenario)
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
respuestas_validas: ["significante", "significado"]

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

respuesta: ["Pensamiento Divergente", "Pensamiento Convergente", "Producción Creativa"]
tipo: ordenar

opciones_explicitas: ["Pensamiento Divergente", "Pensamiento Convergente", "Producción Creativa"]

enunciado: "Ordene los procesos cognitivos según una secuencia lógica en un proceso de resolución creativa de problemas: primero se exploran múltiples soluciones posibles, luego se evalúa la mejor opción y finalmente se ejecuta la idea."

explicacion: |
  La creatividad suele implicar un movimiento desde la divergencia (generación de ideas) hacia la convergencia (selección y refinamiento) para llegar a un producto final.
```