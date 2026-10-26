### 1 — El mito de la esencia fija
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["identidad", "proceso"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Juan cree que nació siendo tímido y que nunca podrá cambiar su forma de ser.", "es_fijo"], ["María piensa que su personalidad es una verdad absoluta que ya descubrió.", "es_fijo"]]

enunciado: "Un individuo afirma que su personalidad es una estructura inmutable que no puede ser modificada por la experiencia. Según la visión del autoconocimiento como proceso, esta afirmación es..."

opciones_explicitas: ["Verdadera", "Falsa"]
respuesta: escenarios[escenario_idx][1] == "es_fijo" ? "Falsa" : "Verdadera"
tipo: mc

explicacion: |
  El autoconocimiento no es un objeto que se encuentra, sino un proceso dinámico. Creer que la identidad es un dato fijo ignora la capacidad humana de transformación y aprendizaje continuo.
```

### 2 — El proceso de introspección
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["introspeccion", "cambio"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un joven que descubre nuevas pasiones a los 30 años", "evolucion"], ["Una persona que redefine sus valores tras un duelo", "evolucion"]]

enunciado: "Considerando el caso de {casos[caso_idx][0]}, el autoconocimiento se manifiesta como un proceso de ___."

respuestas_validas: ["evolución", "cambio"]
respuesta: "evolución"
tipo: completar

explicacion: |
  Los cambios vitales demuestran que el 'yo' se reconfigura constantemente, invalidando la idea de una identidad estática.
```

### 3 — La naturaleza del autoconocimiento
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["naturaleza", "verdad"]

enunciado: "¿Es el autoconocimiento un estado final de iluminación donde se llega a conocer todo sobre uno mismo?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Falso"
tipo: vf

explicacion: |
  Dado que el ser humano es un proyecto en constante construcción, el autoconocimiento es una búsqueda inacabada, no un destino final.
```

### 4 — Dimensiones del autoconocimiento
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dimensiones", "orden"]

enunciado: "Ordene las etapas de un proceso de autoconocimiento profundo, desde la percepción inicial hasta la integración:"

opciones_explicitas: ["Percepción de emociones", "Análisis de patrones", "Integración de la identidad"]
respuesta: ["Percepción de emociones", "Análisis de patrones", "Integración de la identidad"]
tipo: ordenar

explicacion: |
  El autoconocimiento requiere pasar de la simple sensación (emoción) al entendimiento (patrón) y finalmente a la asunción de esa identidad (integración).
```

### 5 — El error de la etiqueta
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["etiquetado", "esencia"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["'Soy una persona ansiosa' (como etiqueta definitiva)", "etiqueta"], ["'Siento ansiedad en este momento' (como estado temporal)", "estado"]]

enunciado: "Si una persona dice: '{ejemplos[ejemplo_idx][0]}', está cometiendo el error de confundir su ___ con su ___."

respuestas_validas: ["esencia", "estado"]
respuesta: "esencia"
tipo: completar

explicacion: |
  Confundir un estado transitorio con la esencia del ser es el principal obstáculo para entender el autoconocimiento como un proceso fluido.
```