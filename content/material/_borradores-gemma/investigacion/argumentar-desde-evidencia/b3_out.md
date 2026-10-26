### 1 — Evidencia vs. Opinión
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["argumentacion", "metodologia"]

tipo: mc
opciones_explicitas: ["Una opinión basada en la experiencia personal", "Un dato estadístico derivado de un muestreo representativo", "Una afirmación sin respaldo verificable", "Una creencia compartida por la comunidad científica"]

enunciado: "En el contexto de la investigación científica, ¿cuál de las siguientes opciones constituye una evidencia sólida para defender una conclusión?"

explicacion: |
  La evidencia científica debe ser reproducible y estar respaldada por datos obtenidos mediante métodos sistemáticos, no puede basarse únicamente en la subjetividad o la experiencia anecdótica.
```

### 2 — El error de la correlación
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["errores_logicos", "correlacion"]

tipo: vf
respuesta: falso

enunciado: "Si un estudio muestra que dos variables aumentan simultáneamente (correlación), esto es evidencia suficiente para afirmar que una variable causa la otra (causalidad)."

explicacion: |
  La correlación no implica causalidad. Que dos eventos ocurran al mismo tiempo no significa que uno sea la causa del otro; puede haber una tercera variable influyendo en ambos o ser una coincidencia estadística.
```

### 3 — Respuesta ante la objeción
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["debate", "defensa_conclusion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El investigador presenta un gráfico con tendencia clara y valores de p < 0.05", "El investigador repite su conclusión sin mostrar nuevos datos"],
    ["El investigador utiliza una muestra de 1000 sujetos con control de variables", "El investigador utiliza una muestra de 5 sujetos sin grupo de control"]
  ]
  respuestas: [
    "Es una defensa válida mediante evidencia cuantitativa", "Es una falacia de autoridad o repetición"]

tipo: completar
respuestas_validas: ["Es una defensa válida mediante evidencia cuantitativa", "Es una falacia de autoridad o repetición"]
respuesta: escenarios[escenario_idx][1]

enunciado: "Ante una objeción científica, si el investigador actúa como en el escenario {escenarios[escenario_idx][0]}, su respuesta es: ___"

explicacion: |
  Para defender una conclusión, no basta con insistir en la idea; se requiere aportar datos que refuten la objeción o que fortalezcan la validez del hallazgo original.
```

### 4 — Pasos para la validación
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Recopilar datos mediante observación o experimento", "Analizar los datos para encontrar patrones", "Formular una conclusión basada en la evidencia", "Contrastar la conclusión con la objeción recibida"]

enunciado: "Ordene los pasos lógicos para construir un argumento científico sólido que responda a una duda sobre un hallazgo:"

explicacion: |
  El proceso debe seguir un orden lógico: primero se obtiene la información, luego se procesa, se llega a una conclusión y finalmente se usa esa estructura para responder a críticas.
```

### 5 — La importancia del contraejemplo
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["falsacion", "evidencia"]

tipo: input
tolerancia_abs: 0

enunciado: "Si una conclusión científica es 'Todos los elementos X presentan la propiedad Y', y un crítico presenta un elemento X que NO tiene la propiedad Y, ¿qué ha presentado el crítico?"

pasos:
  - "Identificar si el dato presentado invalida la generalización"
  - "Determinar si el dato es un contraejemplo"

explicacion: |
  Un solo contraejemplo basado en evidencia empírica es suficiente para refutar una generalización universal, obligando al investigador a revisar su conclusión o sus premisas.
```