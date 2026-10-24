### 1 — El costo de la deuda técnica
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "costo_software"]

variables:
  escenario: uno_de([
    ["reparar_bug", "reparar un error crítico", "reparar un error crítico"],
    ["agregar_feature", "implementar una nueva funcionalidad", "implementar una nueva funcionalidad"],
    ["refactorizar", "refactorizar un módulo heredado", "refactorizar un módulo heredado"]
  ])

respuesta: escenario[idx][2]
tipo: mc
opciones_explicitas: ["reparar un error crítico", "implementar una nueva funcionalidad", "refactorizar un módulo heredado"]

enunciado: "Cuando la deuda técnica es muy alta, el tiempo dedicado a {escenario[idx][1]} suele aumentar drásticamente debido a la complejidad del código existente."

explicacion: |
  La deuda técnica actúa como un interés compuesto: cuanta más deuda se acumula, más tiempo y esfuerzo requiere cada nueva tarea (ya sea corregir errores o añadir funciones) debido a la fragilidad del sistema.
```

### 2 — ¿Es la deuda técnica siempre mala?
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_proyectos"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda técnica es siempre un error de programación que debe evitarse a toda costa desde el primer día del proyecto."

explicacion: |
  Falso. La deuda técnica puede ser una decisión estratégica (deuda consciente) para acelerar el lanzamiento al mercado (Time-to-Market), siempre que se planifique su posterior pago.
```

### 3 — Tipos de mantenimiento
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento_software"]

respuesta: "correctivo"
tipo: completar
respuestas_validas: ["correctivo", "adaptativo", "perfectivo", "preventivo"]

enunciado: "El tipo de mantenimiento que se realiza exclusivamente para corregir fallos detectados en el software ya en producción se denomina mantenimiento ___."

explicacion: |
  El mantenimiento correctivo se enfoca en solucionar errores (bugs) que impiden el funcionamiento correcto del sistema.
```

### 4 — Ciclo de vida de una deuda técnica
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["ciclo_vida", "deuda_tecnica"]

respuesta: ["Implementación rápida", "Acumulación de deuda", "Aumento de complejidad", "Refactorización necesaria"]
tipo: ordenar
opciones_explicitas: ["Implementación rápida", "Acumulación de deuda", "Aumento de complejidad", "Refactorización necesaria"]

enunciado: "Ordene cronológicamente los eventos que describen el proceso de degradación de la calidad de software por deuda técnica no gestionada:"

explicacion: |
  El proceso comienza con una decisión de velocidad, lo que genera deuda; esto aumenta la complejidad del código y finalmente obliga a realizar refactorizaciones costosas para recuperar la mantenibilidad.
```

### 5 — Impacto en la mantenibilidad
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenibilidad", "calidad_software"]

variables:
  impacto: uno_de([
    ["bajo", "bajo", "bajo"],
    ["medio", "medio", "medio"],
    ["alto", "alto", "alto"]
  ])

respuesta: impacto[idx][2]
tipo: mc
opciones_explicitas: ["bajo", "medio", "alto"]

enunciado: "Si un módulo tiene una alta complejidad ciclomática y falta de documentación, el esfuerzo requerido para realizar mantenimiento sobre él será ___."

explicacion: |
  La falta de estándares y la complejidad excesiva aumentan la carga cognitiva de los desarrolladores, elevando el esfuerzo de mantenimiento.
```