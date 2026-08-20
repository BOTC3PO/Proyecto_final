# Informatica — Mantenimiento y deuda tecnica (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Deuda Técnica

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "deuda_tecnica"]

respuesta: "deuda_tecnica"
tipo: completar
respuestas_validas:
  - "deuda_tecnica"

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
  escenarios: [["corregir un error que causa un cierre inesperado", "correctivo"], ["añadir una nueva funcionalidad solicitada por el cliente", "evolutivo"]]

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

respuesta_orden: ["Detección del problema", "Análisis de la causa", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
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
  datos: [["Cambiar la estructura interna del código sin alterar su comportamiento externo", "refactorizar"], ["Añadir un nuevo módulo de seguridad al sistema", "extender"]]

respuesta: datos[valor_refactor][1]
tipo: mc
opciones_explicitas: ["refactorizar", "extender", "optimizar", "reparar"]

enunciado: "La acción de {datos[valor_refactor][0]} se define como ___."

explicacion: |
  La refactorización es la técnica principal para reducir la deuda técnica, mejorando la legibilidad y la estructura sin cambiar lo que el código hace para el usuario.
```

### 6 — El costo de la deuda técnica

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "mantenimiento"]

variables:
  es_mantenimiento_preventivo: falso

respuesta: es_mantenimiento_preventivo
tipo: completar
enunciado: "Si un equipo de desarrollo decide no refactorizar un módulo complejo para cumplir con una fecha de entrega, está acumulando deuda técnica. Esta acción, si no se paga pronto, aumenta el costo de mantenimiento futuro. ¿Es el refactorizado una forma de mantenimiento preventivo? {es_mantenimiento_preventivo}"

explicacion: |
  El refactorizado busca mejorar la estructura interna del código sin cambiar su comportamiento externo, lo cual es una actividad de mantenimiento preventivo para evitar la acumulación de deuda técnica.
```

### 7 — Identificación de deuda técnica

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["deuda_tecnica", "conceptos"]

opciones_explicitas: ["Código mal documentado", "Cambio de requerimientos", "Nueva funcionalidad", "Actualización de dependencias"]

respuesta: "Código mal documentado"
tipo: mc

enunciado: "Un desarrollador nota que el sistema funciona correctamente, pero la lógica de negocio está dispersa y no hay comentarios en las funciones críticas, lo que dificultará cambios futuros. ¿Cuál de estos es un ejemplo claro de deuda técnica?"

explicacion: |
  La falta de documentación y la mala estructura del código (código espagueti) son formas de deuda técnica que incrementan el esfuerzo necesario para realizar mantenimientos correctivos o evolutivos.
```

### 8 — Ciclo de vida del mantenimiento

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento", "tipos"]

tipo: ordenar
opciones_explicitas: ["Detectar error", "Corregir error", "Optimizar rendimiento", "Implementar nueva función", "Documentar sistema"]
respuesta_orden: ["Detectar error", "Corregir error", "Optimizar rendimiento", "Implementar nueva función", "Documentar sistema"]

enunciado: "Ordena las siguientes etapas típicas del ciclo de mantenimiento de un sistema de software, desde la detección de un problema hasta la documentación final."

explicacion: |
  El mantenimiento correctivo (detectar y corregir errores) suele preceder a las mejoras de rendimiento y a las nuevas funcionalidades; documentar los cambios es siempre el último paso.
```

### 9 — (Rehecha) Tipos de mantenimiento

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento", "tipos"]

respuesta: "perfectivo"
tipo: completar

enunciado: "Si el objetivo es mejorar la velocidad de una consulta SQL que tarda 10 segundos, estamos realizando un mantenimiento de tipo ___."

pasos:
  - "Identificar el cuello-de-bote en la base de datos."
  - "Aplicar índices o reescribir la consulta."

opciones_explicitas: ["correctivo", "evolutivo", "adaptativo", "perfectivo"]
respuestas_validas:
  - "perfectivo"

explicacion: |
  El mantenimiento perfectivo se encarga de mejorar el rendimiento o la eficiencia de un software que ya funciona correctamente.
  
  Tabla de referencia:
  [ ["correctivo", "correctivo"], ["evolutivo", "evolutivo"], ["adaptativo", "adaptativo"], ["perfectivo", "perfectivo"] ]
  *Nota: El ejemplo usa el índice para validar la respuesta correcta según el enunciado de optimización.*
```

### 10 — El impacto de la deuda técnica

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["deuda_tecnica", "costos"]

variables:
  caso_idx: uno_de([0, 1])

tipo: completar

enunciado: "En el caso seleccionado, el equipo decide ignorar las pruebas unitarias para lanzar una versión hoy. Esto genera una deuda técnica que se traduce en ___."

respuestas_validas:
  - "intereses"

explicacion: |
  La deuda técnica funciona como un préstamo financiero: el 'principal' es el tiempo ahorrado hoy, y los 'intereses' es el tiempo extra que se perderá mañana arreglando errores o lidiando con código complejo.

  Tabla de referencia:
  [["intereses", "intereses"], ["intereses", "intereses"]]
```

### 11 — Mantenimiento Adaptativo

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "adaptativo"]

opciones_explicitas: ["Cambio de Sistema Operativo", "Arreglar un crash", "Añadir un botón", "Cambiar el color de la interfaz"]

respuesta: "Cambio de Sistema Operativo"
tipo: mc

enunciado: "Una aplicación de escritorio debe actualizarse para ser compatible con la nueva versión de Windows que salió este mes. ¿Qué tipo de mantenimiento es este?"

explicacion: |
  El mantenimiento adaptativo ocurre cuando el software debe ajustarse a cambios en su entorno (sistema operativo, hardware, bases de datos o leyes externas) para seguir siendo funcional.
```

### 12 — El costo de la deuda técnica

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "costo_software"]

variables:
  escenario: uno_de([["reparar_bug", "reparar un error crítico", "reparar un error crítico"], ["agregar_feature", "implementar una nueva funcionalidad", "implementar una nueva funcionalidad"], ["refactorizar", "refactorizar un módulo heredado", "refactorizar un módulo heredado"]])
  tipo_accion: escenario[0]
  descripcion_accion: escenario[1]
  respuesta_correcta: escenario[2]

tipo: mc
opciones_explicitas: ["reparar un error crítico", "implementar una nueva funcionalidad", "refactorizar un módulo heredado"]
respuesta: respuesta_correcta

enunciado: "Cuando la deuda técnica es muy alta, el tiempo dedicado a {descripcion_accion} suele aumentar drásticamente debido a la complejidad del código existente."

explicacion: |
  La deuda técnica actúa como un interés compuesto: cuanta más deuda se acumula, más tiempo y esfuerzo requiere cada nueva tarea (ya sea corregir errores o añadir funciones) debido a la fragilidad del sistema.
```

### 13 — ¿Es la deuda técnica siempre mala?

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

### 14 — Tipos de mantenimiento

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento_software"]

respuesta: "correctivo"
tipo: completar
respuestas_validas:
  - "correctivo"
  - "adaptativo"
  - "perfectivo"
  - "preventivo"

enunciado: "El tipo de mantenimiento que se realiza exclusivamente para corregir fallos detectados en el software ya en producción se denomina mantenimiento ___."

explicacion: |
  El mantenimiento correctivo se enfoca en solucionar errores (bugs) que impiden el funcionamiento correcto del sistema.
```

### 15 — Ciclo de vida de una deuda técnica

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["ciclo_vida", "deuda_tecnica"]

respuesta_orden: ["Implementación rápida", "Acumulación de deuda", "Aumento de complejidad", "Refactorización necesaria"]
tipo: ordenar
opciones_explicitas: ["Implementación rápida", "Acumulación de deuda", "Aumento de complejidad", "Refactorización necesaria"]

enunciado: "Ordene cronológicamente los eventos que describen el proceso de degradación de la calidad de software por deuda técnica no gestionada:"

explicacion: |
  El proceso comienza con una decisión de velocidad, lo que genera deuda; esto aumenta la complejidad del código y finalmente obliga a realizar refactorizaciones costosas para recuperar la mantenibilidad.
```

### 16 — Impacto en la mantenibilidad

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenibilidad", "calidad_software"]

variables:
  impacto: uno_de(["bajo", "medio", "alto"])

respuesta: impacto
tipo: mc
opciones_explicitas: ["bajo", "medio", "alto"]

enunciado: "Si un módulo tiene una alta complejidad ciclomática y falta de documentación, el esfuerzo requerido para realizar mantenimiento sobre él será {impacto}."

explicacion: |
  La falta de estándares y la complejidad excesiva aumentan la carga cognitiva de los desarrolladores, elevando el esfuerzo de mantenimiento.
```

### 17 — Mantenimiento vs Evolución

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "ciclo_de_vida"]

respuesta: "evolución"
tipo: "completar"
respuestas_validas:
  - "evolución"
  - "evolucion"

enunciado: "Mientras que el mantenimiento correctivo se enfoca en reparar errores, el proceso de añadir nuevas funcionalidades o adaptar el software a nuevos entornos se denomina ___."

explicacion: |
  El mantenimiento correctivo busca solucionar fallos existentes, mientras que la evolución (o mantenimiento evolutivo) busca expandir las capacidades del sistema para satisfacer nuevas necesidades del usuario.
```

### 18 — Deuda Técnica y Calidad

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "calidad"]

variables:
  datos: [["decidir tomar un atajo en el diseño para cumplir con una fecha de entrega inmediata", "Aumento de la velocidad de entrega inicial"], ["ignorar las pruebas unitarias para acelerar el despliegue", "Aumento de la velocidad de entrega inicial"]]
  escenario_idx: uno_de([0, 1])

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["Aumento de la velocidad de entrega inicial", "Reducción del costo de mantenimiento", "Mejora de la legibilidad del código", "Reducción de la complejidad ciclomática"]

enunciado: "En el escenario de {datos[escenario_idx][0]}, la principal consecuencia a largo plazo es:"

explicacion: |
  La deuda técnica suele ser una decisión consciente (o no) para ganar velocidad de entrega a corto plazo, pero genera un "interés" en forma de mayor dificultad para realizar cambios en el futuro.
```

### 19 — Tipos de Mantenimiento

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "tipos"]

respuesta: "preventivo"
tipo: "mc"
opciones_explicitas: ["correctivo", "evolutivo", "preventivo", "adaptativo"]

enunciado: "Si un equipo de desarrollo realiza una refactorización para mejorar la estructura interna del código sin cambiar su comportamiento externo, está realizando mantenimiento ___."

explicacion: |
  El mantenimiento preventivo busca mejorar la estructura del software para evitar problemas futuros (como la degradación por deuda técnica), sin alterar la funcionalidad actual.
```

### 20 — El concepto de Interés de la Deuda

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "costo"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que la deuda técnica se diferencia de la mala calidad de software en que la deuda suele ser una decisión estratégica para acelerar el desarrollo?"

explicacion: |
  Exacto. La mala calidad es un error o descuido, mientras que la deuda técnica es a menudo una decisión deliberada de "pedir prestado" tiempo de diseño para ganar tiempo de mercado.
```

### 21 — Ciclo de vida del Refactorizado

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["refactorizacion", "deuda_tecnica"]

tipo: ordenar

opciones_explicitas: ["Identificar deuda técnica", "Escribir pruebas unitarias", "Ejecutar refactorización", "Verificar integridad"]

respuesta_orden: ["Identificar deuda técnica", "Escribir pruebas unitarias", "Ejecutar refactorización", "Verificar integridad"]

enunciado: "Ordena los pasos lógicos para abordar una deuda técnica mediante refactorización de forma segura:"

explicacion: |
  Para refactorizar sin introducir nuevos errores, primero se debe identificar el problema, asegurar la existencia de pruebas (test suite) para garantizar el comportamiento actual, realizar el cambio y finalmente verificar que todo siga funcionando.
```

### 22 — Refactorización y Deuda Técnica

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["refactorizacion", "deuda_tecnica"]

variables:
  escenario: uno_de([["El equipo decide ignorar la implementación de pruebas unitarias para cumplir con la fecha de entrega.", "deuda_tecnica"], ["El equipo decide reescribir un módulo complejo para mejorar su legibilidad sin cambiar su comportamiento.", "refactorizacion"], ["El equipo decide parchar un error crítico con un código temporal que no sigue los estándares.", "deuda_tecnica"]])

enunciado: "En el escenario descrito: '{escenario[0]}', la acción realizada se clasifica como: ___"

respuestas_validas:
  - "deuda_tecnica"
  - "refactorizacion"
respuesta: escenario[1]
tipo: completar

explicacion: |
  La deuda técnica surge cuando se toman caminos de desarrollo rápidos o de baja calidad que facilitan la entrega inmediata pero aumentan el costo de mantenimiento futuro. La refactorización, en cambio, es una práctica deliberada para mejorar la estructura interna sin alterar la funcionalidad.
```

### 23 — Tipos de Mantenimiento

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento_correctivo", "mantenimiento_evolutivo"]

variables:
  caso: uno_de([["Corregir un error que causa que la aplicación se cierre inesperadamente.", "correctivo"], ["Añadir una nueva funcionalidad de exportación a PDF que el cliente solicitó.", "evolutivo"], ["Optimizar el uso de memoria de una función existente para que sea más rápida.", "perfectivo"]])

enunciado: "Si el objetivo es '{caso[0]}', estamos realizando un mantenimiento de tipo: ___"

respuestas_validas:
  - "correctivo"
  - "evolutivo"
  - "perfectivo"
respuesta: caso[1]
tipo: completar

explicacion: |
  El mantenimiento correctivo soluciona fallos; el evolutivo añade nuevas capacidades; y el perfectivo mejora aspectos no funcionales como el rendimiento o la eficiencia.
```

### 24 — Impacto de la Deuda Técnica

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["costo", "deuda_tecnica"]

variables:
  impacto: uno_de([["Aumentar", "false"], ["Disminuir", "true"]])

enunciado: "A medida que la deuda técnica en un proyecto de software aumenta, el costo de implementar nuevos cambios tiende a {impacto[0]}."

opciones_explicitas: ["Aumentar", "Disminuir"]
respuesta: impacto[0]
tipo: mc

explicacion: |
  La deuda técnica actúa como un interés compuesto: cuanto más se acumula, más difícil y costoso es trabajar sobre el código, ya que las dependencias y la complejidad no gestionada frenan el desarrollo.
```

### 25 — Ciclo de Vida del Mantenimiento

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["ciclo_de_vida"]

variables:
  orden: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]

enunciado: "Ordene los pasos típicos de un proceso de mantenimiento correctivo, desde el inicio hasta la verificación final."

opciones_explicitas: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
respuesta_orden: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
tipo: ordenar

explicacion: |
  Un proceso de mantenimiento estructurado requiere primero identificar el fallo, entender por qué sucede, planear la solución, aplicarla y, crucialmente, verificar que el cambio no haya roto otras partes del sistema (regresión).
```

### 26 — Calidad del Código

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["calidad", "mantenimiento"]

variables:
  estandar: uno_de([["El código sigue las convenciones de estilo y es fácil de leer.", "verdadero"], ["El código funciona pero tiene múltiples funciones de 500 líneas sin comentarios.", "falso"]])
  idx: uno_de([0, 1])

enunciado: "Si un software tiene un alto nivel de deuda técnica, es ___ que su código sea fácil de mantener a largo plazo."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: completar
explicacion: |
  La mantenibilidad es la facilidad con la que un sistema puede ser modificado. Una alta deuda técnica degrada la calidad del código, haciendo que la mantenibilidad sea baja.
```
