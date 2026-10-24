### 1 — El proceso de planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["gestion", "procesos"]

variables:
  escenario: uno_de([["establecer_objetivos", "definir_metas"], ["asignar_recursos", "distribuir_insumos"], ["determinar_plazos", "fijar_tiempos"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["definir_metas", "distribuir_insumos", "fijar_tiempos", "evaluar_desempeño"]

enunciado: "En el proceso de planificación, el primer paso fundamental consiste en ___."

explicacion: |
  La planificación comienza con la definición de objetivos o metas que la organización desea alcanzar.
```

### 2 — ¿Es planificación?
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La planificación administrativa implica decidir por adelantado qué se va a hacer, cómo se va a hacer y cuándo se va a hacer."

explicacion: |
  Correcto. La esencia de la planificación es la anticipación de acciones para alcanzar objetivos.
```

### 3 — Secuencia de la planificación estratégica
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

variables:
  pasos: [["Diagnóstico", "Objetivos", "Estrategias", "Control"], ["Situación actual", "Metas", "Acciones", "Evaluación"], ["Análisis", "Propósito", "Plan de acción", "Seguimiento"]]
  idx: uno_de([0, 1, 2])

respuesta: pasos[idx]
tipo: ordenar
opciones_explicitas: ["Diagnóstico", "Objetivos", "Estrategias", "Control"]

enunciado: "Ordene cronológicamente las etapas de un proceso de planificación estándar según el escenario seleccionado:"

explicacion: |
  La secuencia lógica siempre parte del análisis de la situación actual para luego proyectar metas y acciones.
```

### 4 — Elementos de la planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["componentes"]

variables:
  caso: uno_de([["recursos_humanos", "personal"], ["presupuesto", "dinero"], ["maquinaria", "equipos"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["personal", "dinero", "equipos"]

enunciado: "Para ejecutar el plan de producción, la empresa debe planificar la asignación de ___."

explicacion: |
  La planificación requiere la asignación de recursos (humanos, financieros o materiales) para que los planes sean realizables.
```

### 5 — El factor tiempo
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["tiempo", "cronograma"]

variables:
  datos: [["corto_plazo", "1 año"], ["mediano_plazo", "3 años"], ["largo_plazo", "5 años"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1 año", "3 años", "5 años", "10 años"]

enunciado: "Si una empresa está realizando una planificación de ___, su horizonte temporal suele ser de ___."

explicacion: |
  El horizonte temporal define si la planificación es operativa (corto), táctica (mediano) o estratégica (largo).
```