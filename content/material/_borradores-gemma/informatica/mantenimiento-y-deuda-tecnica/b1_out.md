### 1 — Concepto de Deuda Técnica
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "deuda_tecnica"]

respuesta: "deuda_tecnica"
tipo: completar
respuestas_validas: ["deuda_tecnica"]

enunciado: "El concepto que describe el coste adicional de realizar cambios en el software debido a decisiones de diseño rápidas o deficientes se conoce como ___."

explicacion: |
  La deuda técnica es una metáfora que compara las decisiones de desarrollo apresuradas con la deuda financiera: si no se "paga" (refactorizando), los "intereses" (dificultad de mantenimiento) aumentan.
```

### 2 — Tipos de Mantenimiento
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "tipos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["corregir un error que causa un cierre inesperado", "correctivo"],
    ["añadir una nueva funcionalidad solicitada por el cliente", "evolutivo"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["correctivo", "adaptativo", "evolutivo", "preventivo"]

enunciado: "Se debe realizar un mantenimiento tipo {escenarios[escenario_idx][0]} cuando el objetivo es {escenarios[escenario_idx][0]}."

explicacion: |
  El mantenimiento correctivo busca arreglar fallos; el adaptativo ajusta el software a nuevos entornos; el evolutivo añade funciones y el preventivo busca evitar fallos futuros.
```

### 3 — Impacto de la Deuda Técnica
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["impacto", "calidad"]

respuesta: falso
tipo: vf

enunciado: "La presencia de deuda técnica en un proyecto de software siempre implica que el código es de mala calidad y no tiene utilidad."

explicacion: |
  Falso. A veces se toma deuda técnica de forma estratégica para cumplir con una fecha de lanzamiento crítica, con el plan de pagarla (refactorizar) más adelante.
```

### 4 — Ciclo de Vida del Mantenimiento
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta: ["Detección del problema", "Análisis de la causa", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
tipo: ordenar
opciones_explicitas: ["Detección del problema", "Análisis de la causa", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]

enunciado: "Ordena las etapas típicas de un proceso de mantenimiento correctivo:"

explicacion: |
  Un ciclo de mantenimiento debe seguir un orden lógico: primero se identifica el error, se entiende por qué ocurre, se planea el arreglo, se aplica y finalmente se verifica que no se haya roto nada más.
```

### 5 — Refactorización
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["refactorizacion", "calidad"]

variables:
  valor_refactor: uno_de([0, 1])
  datos: [
    ["Cambiar la estructura interna del código sin alterar su comportamiento externo", "refactorizar"],
    ["Añadir un nuevo módulo de seguridad al sistema", "extender"]
  ]

respuesta: datos[valor_refactor][1]
tipo: mc
opciones_explicitas: ["refactorizar", "extender", "optimizar", "reparar"]

enunciado: "La acción de {datos[valor_refactor][0]} se define como ___."

explicacion: |
  La refactorización es la técnica principal para reducir la deuda técnica, mejorando la legibilidad y la estructura sin cambiar lo que el código hace para el usuario.
```