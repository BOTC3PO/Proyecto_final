### 1 — ¿El lenguaje determina el pensamiento?
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

### 2 — El papel de los símbolos en el pensamiento
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolos", "representacion_mental"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["el color rojo", "una señal de pare"], ["el concepto de justicia", "una balanza"]]]

opciones_explicitas: ["Representación simbólica", "Percepción sensorial pura", "Reflejo instintivo"]

respuesta: "Representación simbólica"
tipo: mc

enunciado: "Cuando un individuo asocia {escenarios[escenario_idx][0]} con {escenarios[escenario_idx][1]}, está operando mediante una {respuesta_tipo}."

pasos:
  - "Identificar el estímulo sensorial."
  - "Reconocer el significado arbitrario asignado por la cultura."
  - "Conectar el símbolo con el concepto mental."

explicacion: |
  El pensamiento simbólico permite que un estímulo (sonido, imagen, objeto) represente algo que no está presente, permitiendo la abstracción.
```

### 3 — Relación entre lenguaje y procesos cognitivos
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

### 4 — Componentes de la comunicación simbólica
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["semiotica", "signo"]

respuestas_validas: ["significante", "significado"]

respuesta: ["significante", "significado"]
tipo: completar

enunciado: "En la estructura del signo lingüístico, la forma física o acústica (el sonido de la palabra) se denomina ___ y el concepto mental que esta evoca se denomina ___."

explicacion: |
  Saussure definió el signo como la unión de una parte material (significante) y una parte conceptual (significado).
```

### 5 — Fases del proceso creativo
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "modelo_wallas"]

opciones_explicitas: ["Preparación", "Incubación", "Iluminación", "Verificación"]

respuesta: ["Preparación", "Incubación", "Iluminación", "Verificación"]
tipo: ordenar

enunciado: "Ordene las fases del proceso creativo propuestas por Graham Wallas:"

explicacion: |
  El proceso creativo comienza con la inmersión en el problema (preparación), seguido de un periodo de procesamiento inconsciente (incubación), la aparición de la idea (iluminación) y finalmente la validación de la misma (verificación).
```