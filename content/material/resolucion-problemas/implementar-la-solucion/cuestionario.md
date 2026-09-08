# Resolucion Problemas — Implementar la solucion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Implementación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["definicion", "etapas"]

respuesta: "implementar"
tipo: completar
respuestas_validas:
  - "implementar"

enunciado: "La etapa de ___ consiste en llevar a la práctica la solución que ha sido seleccionada tras el proceso de evaluación de alternativas."

explicacion: |
  La implementación es la fase donde se ejecutan las acciones planificadas para resolver el problema original.
```

### 2 — El rol de la planificación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["planificacion", "recursos"]

respuesta: verdadero
tipo: vf
enunciado: "¿Es necesario realizar una asignación de recursos y una planificación de tareas antes de iniciar la implementación de una solución?"

pasos:
  - "Identificar los recursos necesarios (tiempo, personas, herramientas)."
  - "Establecer un cronograma de actividades."

explicacion: |
  Para que la implementación sea exitosa, es fundamental contar con una hoja de ruta que defina qué, cuándo y con qué se ejecutará la solución.
```

### 3 — Identificación de obstáculos

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["riesgos", "monitoreo"]

variables:
  escenario: uno_de([["imprevistos", "ajustar la solución"], ["éxito total", "finalizar el proceso"], ["falta de recursos", "replanificar"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["ajustar la solución", "finalizar el proceso", "replanificar"]

enunciado: "Durante la implementación, si se detectan {escenario[0]}, la acción inmediata debe ser ___."

explicacion: |
  La implementación no es un proceso estático; requiere flexibilidad para adaptarse a los cambios o dificultades que surjan en el entorno.
```

### 4 — Secuencia de la implementación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["orden", "proceso"]

respuesta_orden: ["asignar", "ejecutar", "monitorear", "evaluar"]
tipo: ordenar
opciones_explicitas: ["asignar", "ejecutar", "monitorear", "evaluar"]

enunciado: "Ordene cronológicamente las acciones típicas de un proceso de implementación de una solución técnica:"

explicacion: |
  Primero se asignan los recursos, luego se ejecuta la acción, se monitorea el progreso y finalmente se evalúa el resultado obtenido.
```

### 5 — El concepto de monitoreo

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["monitoreo", "control"]

variables:
  tipo_monitoreo: uno_de([["proactivo", "prevenir errores"], ["reactivo", "corregir errores"]])
  dato: tipo_monitoreo[1]

respuesta: dato
tipo: mc
opciones_explicitas: ["prevenir errores", "corregir errores"]

enunciado: "Si el monitoreo se realiza de forma {tipo_monitoreo[0]}, el objetivo principal es ___."

explicacion: |
  El monitoreo puede ser proactivo (para anticiparse a fallos) o reactivo (para responder cuando el fallo ya ocurrió).
```

### 6 — El paso crítico de la implementación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Una vez que se ha diseñado una solución teórica para un problema de logística, el siguiente paso fundamental para llevarla a la práctica es la ___."

pasos:
  - "Comparar el diseño con los recursos disponibles"
  - "Ejecutar la solución en el entorno real"

respuestas_validas:
  - "ejecución"
  - "implementación"
tipo: completar

explicacion: |
  La implementación es la fase donde la solución diseñada se pone en marcha para transformar la situación actual en la situación deseada.
```

### 7 — Recursos para la implementación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["recursos", "planificacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["software", "desarrollo de código", "programador"], ["manual", "guía de procedimientos", "escritor de procesos"]]

respuestas_validas:
  - datos[idx][2]
respuesta: datos[idx][2]
tipo: completar
tolerancia_abs: 0

enunciado: "En un proyecto de optimización de tiempos, si la solución elegida es de tipo {datos[idx][1]}, el recurso principal necesario es el ___."

explicacion: |
  Cada tipo de solución requiere un perfil de ejecutor distinto: talento técnico para software o documentación para procesos manuales.
```

### 8 — Verificación de la solución

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["evaluacion", "control"]

enunciado: "Durante la implementación de un nuevo protocolo de seguridad en una fábrica, se observa que el tiempo de respuesta es mayor al previsto en el diseño. ¿Cuál es la acción correcta según la metodología de resolución de problemas?"

opciones_explicitas: ["Ignorar la desviación si la solución funciona", "Ajustar la solución al entorno real", "Volver al paso de identificación del problema", "Descartar la solución por completo"]
tipo: mc
respuesta: "Ajustar la solución al entorno real"

explicacion: |
  La implementación no es un proceso estático; requiere ajustes iterativos basados en la retroalimentación del entorno real.
```

### 9 — Secuencia de implementación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["secuencia", "logica"]

enunciado: "Ordene los pasos lógicos para implementar una nueva política de reciclaje en una empresa:"

opciones_explicitas: ["Comunicar la nueva política a los empleados", "Instalar los contenedores de reciclaje", "Capacitar al personal sobre la separación de residuos", "Monitorear la efectividad del sistema"]
tipo: ordenar

respuesta_orden: ["Comunicar la nueva política a los empleados", "Instalar los contenedores de reciclaje", "Capacitar al personal sobre la separación de residuos", "Monitorear la efectividad del sistema"]

explicacion: |
  Primero se informa (comunicación), luego se provee la infraestructura (instalación), se enseña a usarla (capacitación) y finalmente se controla (monitoreo).
```

### 10 — Factibilidad de la solución

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["viabilidad", "logica"]

enunciado: "Si una solución propuesta requiere un presupuesto de $10.000 pero la empresa solo dispone de $5.000, ¿es la implementación de esa solución viable en este momento?"

tipo: mc
opciones_explicitas: [falso, verdadero]
respuesta: falso

explicacion: |
  La viabilidad económica es un factor crítico; si los recursos son insuficientes, la implementación no puede llevarse a cabo según el plan original.
```

### 11 — El salto del diseño a la implementación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["planificacion", "errores"]

respuesta: falso
tipo: vf

enunciado: "Es recomendable pasar directamente de la fase de diseño de la solución a la implementación técnica sin realizar una validación previa de la lógica del plan."

explicacion: |
  Saltar la validación del diseño aumenta el riesgo de implementar una solución que es técnicamente correcta pero que no resuelve el problema original.
```

### 12 — La trampa de la implementación prematura

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["errores", "gestion"]

variables:
  escenario: uno_de([["un desarrollador escribe código sin haber definido los requisitos", "falta de definición"], ["un equipo construye una herramienta antes de probar el prototipo", "falta de prototipado"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["falta de definición", "falta de prototipado", "exceso de documentación", "falta de recursos"]

enunciado: "Si un equipo comienza la construcción de una herramienta compleja sin haber validado la funcionalidad mediante un modelo simplificado, ¿qué error de implementación está cometiendo?"

explicacion: |
  La implementación prematura sin prototipado suele derivar en un alto costo de corrección de errores estructurales.
```

### 13 — El proceso de implementación correcto

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta_orden: ["Definir recursos", "Ejecutar la solución", "Monitorear resultados", "Evaluar efectividad"]
tipo: ordenar

opciones_explicitas: ["Definir recursos", "Ejecutar la solución", "Monitorear resultados", "Evaluar efectividad"]

enunciado: "Ordene las etapas lógicas de la fase de implementación, desde la preparación hasta la evaluación final."

explicacion: |
  La implementación no termina con la ejecución; requiere un monitoreo constante y una evaluación para asegurar que el objetivo se cumplió.
```

### 14 — El error de la solución incompleta

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["calidad", "errores"]

variables:
  caso: uno_de([["El sistema funciona para el caso ideal pero falla con datos atípicos", "error de robustez"], ["La solución resuelve el problema pero es demasiado costosa para el presupuesto", "error de viabilidad"]])

respuesta: caso[1]
tipo: completar

enunciado: "En un escenario donde '{caso[0]}', decimos que la implementación presenta un: ___"

explicacion: |
  Una implementación exitosa debe ser robusta, es decir, capaz de manejar variaciones y casos borde, no solo el camino feliz.
```

### 15 — Documentación en la implementación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "mantenimiento"]

respuesta: "Documentación técnica"
tipo: completar
respuestas_validas:
  - "Documentación técnica"
  - "Manual de usuario"
  - "Código fuente"

enunciado: "Para asegurar que la solución implementada pueda ser mantenida o replicada en el futuro, es indispensable generar la ___."

explicacion: |
  Sin documentación, la implementación queda aislada y se vuelve extremadamente difícil de escalar o reparar por otros miembros del equipo.
```

### 16 — Implementación vs. Ideación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["conceptos", "fases"]

respuesta: "implementar"
tipo: "completar"
respuestas_validas:
  - "implementar"
  - "implementación"

enunciado: "Mientras que la fase de ideación se centra en la generación de múltiples alternativas de solución, la fase de ___ se enfoca en la ejecución técnica y puesta en marcha de la alternativa seleccionada."

explicacion: |
  La ideación es un proceso creativo de divergencia, mientras que la implementación es un proceso de acción y ejecución de la solución elegida.
```

### 17 — Implementación vs. Planificación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["diferencias", "gestion"]

opciones_explicitas: ["La planificación define el 'cómo' y los recursos, mientras que la implementación es la ejecución real de dicho plan.", "La planificación es el resultado final, mientras que la implementación es el proceso de diseño."]

respuesta: "La planificación define el 'cómo' y los recursos, mientras que la implementación es la ejecución real de dicho plan."
tipo: "mc"

enunciado: "En el ciclo de resolución de problemas, ¿cuál es la distinción fundamental entre la planificación y la implementación?"

explicacion: |
  La planificación es el diseño de la estrategia (el mapa), mientras que la implementación es el acto de seguir ese mapa para alcanzar el objetivo.
```

### 18 — Implementación y su naturaleza

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["verificacion", "naturaleza"]

respuesta: falso
tipo: "vf"

enunciado: "La implementación de una solución es un proceso estático que no requiere ajustes una vez que se ha comenzado la ejecución."

explicacion: |
  Falso. La implementación suele ser iterativa; la retroalimentación durante la ejecución a menudo requiere realizar ajustes en la solución original.
```

### 19 — Pasos para la implementación exitosa

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

opciones_explicitas: ["Asignación de recursos", "Ejecución de tareas", "Monitoreo de resultados"]

respuesta_orden: ["Asignación de recursos", "Ejecución de tareas", "Monitoreo de resultados"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente las etapas lógicas para llevar a la práctica una solución técnica:"

explicacion: |
  Primero se deben disponer los medios (recursos), luego realizar el trabajo (ejecución) y finalmente verificar si funciona (monitoreo).
```

### 20 — Implementación vs. Evaluación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["evaluacion", "comparacion"]

enunciado: "Si la implementación se define como el proceso de 'hacer', la evaluación de la solución se distingue por ser el proceso de ___."

respuestas_validas:
  - "medir"
  - "evaluar"
  - "verificar"
tipo: "completar"

explicacion: |
  La implementación busca la acción, mientras que la evaluación busca determinar la efectividad y calidad de dicha acción mediante métricas.
```

### 21 — Implementación de un algoritmo de búsqueda

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["algoritmos", "implementacion"]

variables:
  idx: uno_de([0, 1])
  algoritmos: ["búsqueda lineal", "búsqueda binaria"]
  listas: [[10, 20, 30, 40, 50], [5, 15, 25, 35, 45]]
  algoritmo: algoritmos[idx]
  lista: listas[idx]

respuesta: lista[3]
tipo: completar
tolerancia_abs: 0

enunciado: "Se ha diseñado una solución para encontrar un elemento en una lista ordenada. Si implementamos una {algoritmo} en el array {lista}, ¿cuál es el valor del elemento en la posición con índice 3?"

pasos:
  - "Identificar el algoritmo según el escenario."
  - "Localizar el índice 3 en la lista proporcionada."

explicacion: |
  En el escenario seleccionado, el valor en la posición 3 (cuarto elemento) de la lista es {lista[3]}.
```

### 22 — Validación de tipos de datos en la implementación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["tipos_de_datos", "validación"]

variables:
  caso: uno_de([[1, "string", "texto"], [2, "int", "numero"]])

respuesta: caso[2] == "numero"
tipo: vf
enunciado: "Al implementar la solución, el sistema recibe un dato de tipo {caso[1]}. ¿Es correcto afirmar que el tipo de dato es 'int'?"

explicacion: |
  En este caso, el tipo es {caso[1]}, por lo tanto, la afirmación de que es 'int' es {caso[2] == "numero"}.
```

### 23 — Flujo de ejecución de la solución

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["flujo", "pasos"]

variables:
  idx: uno_de([0, 1])
  nombres: ["desarrollo de software (E-P-S)", "ciclo de programación"]
  pasos_proceso: [["Entrada", "Procesamiento", "Salida"], ["Diseño", "Codificación", "Pruebas"]]
  nombre: nombres[idx]
  pasos_orden: pasos_proceso[idx]

respuesta_orden: pasos_orden
tipo: ordenar

opciones_explicitas: pasos_orden

enunciado: "Para llevar a la práctica la solución elegida, se debe seguir un orden lógico de implementación. Ordene los pasos correspondientes al proceso de {nombre}."

explicacion: |
  El orden correcto para el proceso de {nombre} es: {pasos_orden}.
```

### 24 — Manejo de errores en la implementación

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["errores", "excepciones"]

respuesta: "Error de Índice"
tipo: completar

enunciado: "Durante la implementación, el programa falla al intentar acceder a una posición inexistente en un array. Este error se clasifica como: ___"

explicacion: |
  El error de acceso a un índice inexistente se conoce como Error de Índice.
```

### 25 — Selección de la estructura de datos adecuada

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["estructuras", "decisión"]

variables:
  escenario: uno_de([["una lista de tareas pendientes", "Lista"], ["un diccionario de usuarios con sus IDs", "Diccionario"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["Lista", "Diccionario", "Árbol", "Grafo"]

enunciado: "Para implementar la solución de un sistema de gestión de {escenario[0]}, la estructura de datos más eficiente es un:"

explicacion: |
  Para gestionar {escenario[0]}, la estructura más adecuada es un {escenario[1]}: una lista de tareas se recorre en orden, mientras que un conjunto de usuarios con IDs se busca por clave, lo cual encaja mejor con un diccionario.
```
