### 1 — El vacío en el mercado de snacks saludables
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["mercado", "necesidad", "oportunidad"]

enunciado: "Un emprendedor observa que en un barrio con muchas oficinas, la mayoría de los locales venden comida rápida con alto contenido de sodio y azúcar, pero no hay opciones de ensaladas o snacks naturales. Este vacío representa una ___."

opciones_explicitas: ["amenaza", "oportunidad de negocio", "barrera de entrada", "pérdida de capital"]
respuesta: "oportunidad de negocio"
tipo: "mc"

explicacion: |
  Una oportunidad de negocio surge cuando se identifica una necesidad insatisfecha o un problema no resuelto en un segmento de mercado específico.
```

### 2 — Validación de la necesidad
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["validación", "encuesta", "cliente"]

variables:
  escenario: uno_de([
    ["¿Compraría este producto si estuviera disponible mañana?", "verdadero"],
    ["¿Cuánto pagaría por este servicio?", "falso"]
  ])

enunciado: "Para validar si la necesidad detectada es real, el emprendedor realiza una encuesta. Si la pregunta es '{escenario[0]}', el objetivo principal es validar la ___."

respuestas_validas: ["demanda", "rentabilidad", "ubicación"]
respuesta: "demanda"
tipo: "completar"

explicacion: |
  La validación de la demanda busca confirmar si existe un grupo de clientes dispuestos a pagar por la solución propuesta antes de invertir capital.
```

### 3 — Pasos para identificar una oportunidad
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: [
    "Lanzar el producto al mercado", 
    "Identificar una necesidad insatisfecha", 
    "Analizar la competencia y el segmento", 
    "Diseñar un prototipo o MVP"
]
respuesta: ["Identificar una necesidad insatisfecha", "Analizar la competencia y el segmento", "Diseñar un prototipo o MVP", "Lanzar el producto al mercado"]
tipo: "ordenar"

explicacion: |
  El proceso lógico comienza con la detección del problema, sigue con el análisis del entorno, la creación de una solución mínima viable y finalmente la salida al mercado.
```

### 4 — Análisis de la competencia
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["competencia", "ventaja_competitiva"]

enunciado: "Si un emprendedor detecta una necesidad insatisfecha, pero ya existen tres empresas ofreciendo exactamente lo mismo con el mismo precio y calidad, la probabilidad de que sea una oportunidad de negocio rentable es baja sin una ventaja competitiva clara."

respuesta: falso
tipo: "vf"

explicacion: |
  La saturación de un mercado con ofertas idénticas dificulta la entrada. Una oportunidad real requiere diferenciación o una mejora en la propuesta de valor.
```

### 5 — Cálculo de potencial de mercado
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["TAM", "SAM", "SOM"]

variables:
  datos: uno_de([
    [10000, 2000, 500],
    [5000, 1000, 200]
  ])

enunciado: "Si el mercado total (TAM) es de {datos[0]} personas, el mercado que puede alcanzar tu modelo de negocio (SAM) es de {datos[1]} personas, y tu capacidad real de captación (SOM) es de {datos[2]} personas, ¿cuál es el valor del SOM?"

respuesta: 500
tipo: "input"
tolerancia_abs: 0

explicacion: |
  El SOM (Serviceable Obtainable Market) representa la parte del mercado que realmente puedes capturar en el corto plazo con tus recursos actuales.
```