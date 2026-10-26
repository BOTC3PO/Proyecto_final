### 1 — Refactorización y Deuda Técnica
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["refactorizacion", "deuda_tecnica"]

variables:
  escenario: uno_de([
    ["El equipo decide ignorar la implementación de pruebas unitarias para cumplir con la fecha de entrega.", "deuda_tecnica"],
    ["El equipo decide reescribir un módulo complejo para mejorar su legibilidad sin cambiar su comportamiento.", "refactorizacion"],
    ["El equipo decide parchar un error crítico con un código temporal que no sigue los estándares.", "deuda_tecnica"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "En el escenario descrito: '{escenario[idx][0]}', la acción realizada se clasifica como: ___"

respuestas_validas: ["deuda_tecnica", "refactorizacion"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  La deuda técnica surge cuando se toman caminos de desarrollo rápidos o de baja calidad que facilitan la entrega inmediata pero aumentan el costo de mantenimiento futuro. La refactorización, en cambio, es una práctica deliberada para mejorar la estructura interna sin alterar la funcionalidad.
```

### 2 — Tipos de Mantenimiento
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento_correctivo", "mantenimiento_evolutivo"]

variables:
  caso: uno_de([
    ["Corregir un error que causa que la aplicación se cierre inesperadamente.", "correctivo"],
    ["Añadir una nueva funcionalidad de exportación a PDF que el cliente solicitó.", "evolutivo"],
    ["Optimizar el uso de memoria de una función existente para que sea más rápida.", "perfectivo"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Si el objetivo es '{caso[idx][0]}', estamos realizando un mantenimiento de tipo: ___"

respuestas_validas: ["correctivo", "evolutivo", "perfectivo"]
respuesta: caso[idx][1]
tipo: completar

explicacion: |
  El mantenimiento correctivo soluciona fallos; el evolutivo añade nuevas capacidades; y el perfectivo mejora aspectos no funcionales como el rendimiento o la eficiencia.
```

### 3 — Impacto de la Deuda Técnica
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["costo", "deuda_tecnica"]

variables:
  impacto: uno_de([
    ["Aumentar", "false"],
    ["Disminuir", "true"]
  ])
  idx: uno_de([0, 1])

enunciado: "A medida que la deuda técnica en un proyecto de software aumenta, el costo de implementar nuevos cambios tiende a ___."

opciones_explicitas: ["Aumentar", "Disminuir"]
respuesta: impacto[idx][0]
tipo: mc

explicacion: |
  La deuda técnica actúa como un interés compuesto: cuanto más se acumula, más difícil y costoso es trabajar sobre el código, ya que las dependencias y la complejidad no gestionada frenan el desarrollo.
```

### 4 — Ciclo de Vida del Mantenimiento
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["ciclo_de_vida"]

variables:
  orden: [
    "Detección del problema",
    "Análisis de la causa raíz",
    "Diseño de la solución",
    "Implementación del cambio",
    "Pruebas de regresión"
  ]

enunciado: "Ordene los pasos típicos de un proceso de mantenimiento correctivo, desde el inicio hasta la verificación final."

opciones_explicitas: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
respuesta: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
tipo: ordenar

explicacion: |
  Un proceso de mantenimiento estructurado requiere primero identificar el fallo, entender por qué sucede, planear la solución, aplicarla y, crucialmente, verificar que el cambio no haya roto otras partes del sistema (regresión).
```

### 5 — Calidad del Código
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["calidad", "mantenimiento"]

variables:
  estandar: uno_de([
    ["El código sigue las convenciones de estilo y es fácil de leer.", "verdadero"],
    ["El código funciona pero tiene múltiples funciones de 500 líneas sin comentarios.", "falso"]
  ])
  idx: uno_de([0, 1])

enunciado: "Si un software tiene un alto nivel de deuda técnica, es ___ que su código sea fácil de mantener a largo plazo."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: vf

explicacion: |
  La mantenibilidad es la facilidad con la que un sistema puede ser modificado. Una alta deuda técnica degrada la calidad del código, haciendo que la mantenibilidad sea baja.
```