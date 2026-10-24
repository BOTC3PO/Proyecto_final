### 1 — Planificación vs. Control
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["procesos", "administracion"]

respuesta: falso
tipo: vf

enunciado: "La planificación es un proceso que ocurre exclusivamente después de la ejecución de las actividades para corregir errores."

explicacion: |
  La planificación es un proceso proactivo que se realiza antes de la acción. El proceso de comparar lo ejecutado con lo planificado es lo que se denomina 'control'.
```

### 2 — Elementos de la planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["elementos", "objetivos"]

variables:
  escenario: uno_de([
    ["definir el rumbo", "qué hacer"],
    ["establecer métodos", "cómo hacerlo"],
    ["fijar plazos", "cuándo hacerlo"]
  ])

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["qué hacer", "cómo hacerlo", "cuándo hacerlo"]

enunciado: "En la etapa de planificación, cuando una empresa decide establecer los procedimientos y recursos necesarios para alcanzar sus metas, está definiendo ___."

explicacion: |
  La planificación implica determinar las acciones (qué), los métodos (cómo) y los tiempos (cuándo).
```

### 3 — El error de la planificación rígida
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["flexibilidad", "errores"]

respuesta: "Planificación excesivamente rígida"
tipo: mc
opciones_explicitas: ["Planificación excesivamente rígida", "Falta de objetivos", "Exceso de control", "Delegación ineficiente"]

enunciado: "Un error común en la planificación es diseñar planes que no permiten ajustes ante cambios en el entorno, lo que se conoce como:"

explicacion: |
  Una planificación efectiva debe ser flexible para adaptarse a las contingencias del mercado sin perder de vista el objetivo final.
```

### 4 — Secuencia del proceso administrativo
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["procesos", "orden"]

respuesta: ["Planificación", "Organización", "Dirección", "Control"]
tipo: ordenar
opciones_explicitas: ["Planificación", "Organización", "Dirección", "Control"]

enunciado: "Ordene las etapas del proceso administrativo en su secuencia lógica estándar:"

explicacion: |
  El proceso administrativo comienza con la planificación (establecer metas), seguido de la organización (asignar recursos), la dirección (ejecutar/guiar) y el control (evaluar).
```

### 5 — La naturaleza de la planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "avanzado"
  tags: ["incertidumbre", "riesgo"]

variables:
  caso: uno_de([
    [0.85, "alta"],
    [0.40, "baja"],
    [0.10, "nula"]
  ])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["alta", "baja", "nula"]

enunciado: "Si una empresa planifica basándose en un entorno con una probabilidad de éxito del {caso[0]}, la incertidumbre asociada a su planificación es ___."

explicacion: |
  A mayor probabilidad de éxito o mayor control sobre las variables, menor es la incertidumbre. Sin embargo, la planificación siempre busca reducir la incertidumbre, pero nunca puede eliminarla por completo.
```