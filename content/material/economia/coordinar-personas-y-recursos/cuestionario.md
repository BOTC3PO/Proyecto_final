# Economia — Coordinar personas y recursos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Organización

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["definicion", "organizacion"]

respuesta: "coordinacion"
tipo: completar
respuestas_validas:
  - "coordinacion"

enunciado: "El proceso de integrar las actividades de diversos departamentos y asegurar que se dirijan hacia el cumplimiento de los objetivos organizacionales se denomina ___."

explicacion: |
  La coordinación es el proceso de asegurar que las actividades de los distintos miembros de una organización se realicen de manera armoniosa para alcanzar los objetivos comunes.
```

### 2 — Recursos de una Organización

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["recursos", "factores_produccion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["capital", "recursos financieros y maquinaria"], ["humanos", "conocimientos y habilidades de las personas"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["capital", "humanos", "tecnología", "materias primas"]

enunciado: "En el contexto de la coordinación de recursos, ¿qué factor se refiere a {datos[escenario_idx][1]}?"

explicacion: |
  Las organizaciones deben coordinar diversos recursos. El tipo seleccionado en este ejercicio es {datos[escenario_idx][0]}.
```

### 3 — División del Trabajo

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["division_trabajo", "eficiencia"]

respuesta: verdadero
tipo: vf

enunciado: "La división del trabajo consiste en descomponer una tarea compleja en tareas más pequeñas y especializadas para aumentar la eficiencia."

explicacion: |
  Efectivamente, la especialización mediante la división del trabajo es una herramienta fundamental para optimizar la productividad en la coordinación de equipos.
```

### 4 — Jerarquía de la Organización

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["estructura", "jerarquia"]

respuesta_orden: ["Planificación", "Organización", "Dirección", "Control"]
tipo: ordenar
opciones_explicitas: ["Planificación", "Organización", "Dirección", "Control"]

enunciado: "Ordene las cuatro funciones administrativas del proceso de gestión en el orden lógico de su ciclo de ejecución:"

explicacion: |
  El proceso administrativo clásico sigue la secuencia: primero se establece lo que se quiere hacer (Planificación), luego se asignan recursos (Organización), se guía a las personas (Dirección) y finalmente se verifica el cumplimiento (Control).
```

### 5 — Coordinación vs. Control

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["control", "supervision"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["se detecta una desviación en la producción", "corregir la desviación"], ["se comparan los resultados con los objetivos", "verificar el desempeño"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["corregir la desviación", "verificar el desempeño", "asignar tareas", "contratar personal"]

enunciado: "Si en una empresa {casos[caso_idx][0]}, ¿cuál es la acción inmediata que corresponde a la función de control?"

explicacion: |
  El control implica comparar el desempeño real con los estándares planeados y, si hay diferencias, tomar medidas para corregirlas.
```

### 6 — El dilema de la asignación de tareas

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "basico"
  tags: ["gestion", "equipo"]

enunciado: "Una empresa de desarrollo de software tiene dos programadores (A y B) y dos tareas (X e Y). El programador A es más eficiente en la tarea X, mientras que el programador B es más eficiente en la tarea Y. Para maximizar la productividad total, la asignación óptima es que el programador ___ realice la tarea ___."

pasos:
  - "Identificar la especialización de cada recurso."
  - "Asignar cada tarea al recurso con mayor ventaja comparativa."

opciones_explicitas: ["A, X", "A, Y", "B, X", "B, Y"]
respuesta: "A, X"
tipo: "mc"

explicacion: |
  La coordinación eficiente busca la especialización. Si asignamos a cada persona la tarea donde su productividad es mayor, la producción total del equipo será máxima.
```

### 7 — Costo de oportunidad en la gestión

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "intermedio"
  tags: ["costo_oportunidad", "decision"]

enunciado: "Si una empresa decide utilizar todo su presupuesto disponible para contratar más personal de producción en lugar de invertir en publicidad, el costo de oportunidad es el ___ que se dejó de obtener."

respuestas_validas:
  - "beneficio de la publicidad"
  - "incremento de ventas"
  - "crecimiento de marca"
respuesta: "beneficio de la publicidad"
tipo: "completar"

explicacion: |
  El costo de oportunidad no es solo el dinero gastado, sino el valor de la mejor alternativa sacrificada al tomar una decisión de asignación.
```

### 8 — Escalabilidad y coordinación

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "intermedio"
  tags: ["rendimientos", "escala"]

enunciado: "Al duplicar la cantidad de trabajadores en una cocina pequeña sin aumentar el espacio físico ni el número de hornos, la producción total no se duplica, sino que aumenta de forma desproporcionada hacia abajo debido a la falta de coordinación y el exceso de gente en el mismo espacio. Este fenómeno se conoce como rendimientos decrecientes a escala."

respuesta: verdadero
tipo: "vf"

explicacion: |
  La coordinación de recursos físicos es tan importante como la de recursos humanos. Si los recursos físicos (capital) no crecen al mismo ritmo que el trabajo, la eficiencia cae.
```

### 9 — Proceso de producción de un mueble

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "basico"
  tags: ["flujo_trabajo", "procesos"]

enunciado: "Para coordinar la producción de una silla de madera, se deben seguir los pasos lógicos de transformación de recursos. Ordena los siguientes pasos desde la adquisición de insumos hasta el producto final:"

opciones_explicitas: ["Compra de madera y clavos", "Corte y ensamblado de piezas", "Lijado y barnizado", "Control de calidad y empaque"]
respuesta_orden: ["Compra de madera y clavos", "Corte y ensamblado de piezas", "Lijado y barnizado", "Control de calidad y empaque"]
tipo: ordenar

explicacion: |
  La coordinación de procesos requiere una secuencia lógica donde la salida de una etapa sea la entrada de la siguiente para evitar cuellos de botella.
```

### 10 — El impacto de la tecnología en la coordinación

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "avanzado"
  tags: ["tecnologia", "productividad"]

enunciado: "Una fábrica decide implementar un software de gestión para coordinar mejor sus turnos de trabajo. Si esta implementación reduce el tiempo de inactividad de los trabajadores en un 15%, la productividad laboral total de la empresa ___."

respuestas_validas:
  - "aumentará"
  - "disminuirá"
  - "se mantendrá igual"
respuesta: "aumentará"
tipo: "completar"

explicacion: |
  La tecnología actúa como un multiplicador de la coordinación. Al reducir los tiempos muertos (desperdicio de recursos), se produce más con la misma cantidad de insumos y horas hombre.
```

### 11 — El mito de la asignación perfecta

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["gestion", "recursos", "eficiencia"]

respuesta: "ineficiencia"
tipo: mc
opciones_explicitas: ["eficiencia", "ineficiencia", "especializacion", "productividad"]

enunciado: "Cuando un gestor asigna a un trabajador altamente capacitado a una tarea que requiere habilidades mínimas, ignorando el costo de oportunidad de su talento, está provocando una ___ en la organización."

explicacion: |
  La asignación ineficiente de recursos humanos (especialmente el talento especializado) genera un costo de oportunidad elevado, reduciendo la productividad global del equipo.
```

### 12 — Coordinación vs. Control

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["gestion", "procesos"]

respuesta: falso
tipo: vf

enunciado: "En la gestión de equipos, la coordinación se limita exclusivamente a la supervisión directa y el control de horarios de los empleados."

explicacion: |
  Falso. La coordinación implica también la sincronización de flujos de información, la alineación de objetivos y la gestión de la interdependencia entre tareas y recursos.
```

### 13 — Secuencia de organización de recursos

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "avanzado"
  tags: ["planificacion", "logistica"]

respuesta_orden: ["Identificar necesidades", "Asignar recursos", "Monitorear ejecución"]
tipo: ordenar
opciones_explicitas: ["Monitorear ejecución", "Identificar necesidades", "Asignar recursos"]

enunciado: "Para coordinar eficazmente un proyecto, se debe seguir un orden lógico de gestión de recursos. Ordene los siguientes pasos:"

pasos:
  - "Determinar qué materiales y personas se requieren para el objetivo."
  - "Distribuir los insumos y el personal a las tareas específicas."
  - "Verificar que el uso de los recursos coincida con lo planificado."

explicacion: |
  La planificación requiere primero el diagnóstico de necesidades, luego la distribución (asignación) y finalmente el control para corregir desviaciones.
```

### 14 — El dilema de la especialización

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["especializacion", "costos"]

respuesta: "exceso"
tipo: completar
respuestas_validas:
  - "exceso"

enunciado: "Si una empresa asigna demasiados trabajadores a una misma tarea de modo que se estorben entre sí, se produce un ___ de recursos humanos."

explicacion: |
  El exceso de recursos en una tarea específica genera rendimientos marginales decrecientes y aumenta los costos de coordinación.
```

### 15 — El rol de la información en la coordinación

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["informacion", "asimetria"]

respuesta: 56
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un equipo de 10 personas debe completar 200 unidades. Si la capacidad actual es de 7 unidades por persona al día, pero la coordinación falla y la productividad cae un 20% por falta de comunicación, ¿cuántas unidades producirá el equipo en un día?"

pasos:
  - "Calcular la producción teórica: 10 personas * 7 unidades = 70 unidades."
  - "Aplicar la reducción por falta de coordinación: 70 * (1 - 0.20) = 56."

explicacion: |
  La falta de coordinación actúa como una fricción que reduce la productividad real por debajo de la capacidad teórica de los recursos individuales.
```

### 16 — Coordinación vs. División del Trabajo

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "basico"
  tags: ["coordinacion", "division_trabajo"]

respuesta: "coordinacion"
tipo: "completar"
respuestas_validas:
  - "coordinacion"

enunciado: "Mientras que la división del trabajo se encarga de fragmentar una tarea compleja en actividades simples, la ___ es el proceso de asegurar que estas tareas fragmentadas se integren de manera coherente para alcanzar el objetivo común."

explicacion: |
  La división del trabajo aumenta la eficiencia mediante la especialización, pero genera la necesidad de la coordinación para evitar que los esfuerzos individuales se desvíen o choquen entre sí.
```

### 17 — El rol del Administrador

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["administracion", "recursos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un equipo de producción de automóviles", "gestionar la cadena de suministros"], ["una clínica médica", "coordinar turnos de especialistas"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["gestionar la cadena de suministros", "coordinar turnos de especialistas", "eliminar la necesidad de supervisión", "maximizar la autonomía individual sin control"]

enunciado: "En el escenario de {escenarios[escenario_idx][0]}, ¿cuál es la función principal de la coordinación de recursos?"

explicacion: |
  La coordinación busca sincronizar los recursos (humanos o materiales) con la demanda o el flujo de trabajo para evitar cuellos de botella.
```

### 18 — Eficiencia vs. Eficacia en la Coordinación

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["eficiencia", "eficacia"]

respuesta: verdadero

tipo: "vf"

enunciado: "Si un equipo logra alcanzar la meta de producción establecida (eficacia) pero utiliza el doble de la materia prima presupuestada debido a una mala organización de los recursos, se ha fallado en la eficiencia de la coordinación."

explicacion: |
  La eficacia se refiere al cumplimiento del objetivo, mientras que la eficiencia se refiere al uso óptimo de los recursos para alcanzar dicho objetivo.
```

### 19 — Fases de la Organización de un Equipo

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "avanzado"
  tags: ["procesos", "organizacion"]

respuesta_orden: ["identificar tareas", "asignar responsabilidades", "establecer mecanismos de control"]
tipo: "ordenar"
opciones_explicitas: ["identificar tareas", "asignar responsabilidades", "establecer mecanismos de control"]

enunciado: "Para coordinar eficazmente un equipo de trabajo, un gestor debe seguir este orden lógico de organización de recursos:"

explicacion: |
  Primero se descompone el trabajo (identificación), luego se distribuyen los roles (asignación) y finalmente se verifica el cumplimiento (control).
```

### 20 — Centralización vs. Descentralización

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["estructura", "decision"]

variables:
  tipo_estructura: uno_de(["centralizada", "descentralizada"])

respuesta: tipo_estructura
tipo: "mc"
opciones_explicitas: ["centralizada", "descentralizada"]

enunciado: "En una estructura organizacional {tipo_estructura}, la coordinación se logra mediante la jerarquía y la toma de decisiones concentrada en la parte superior, a diferencia de la estructura opuesta."

explicacion: |
  La centralización busca uniformidad y control estricto, mientras que la descentralización busca agilidad y empoderamiento en los niveles operativos.
```

### 21 — Optimización de recursos en producción

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["gestion", "recursos", "productividad"]

variables:
  escenario: uno_de([["La empresa A tiene 10 operarios y cada uno produce 5 unidades/hora.", 50], ["La empresa B tiene 12 operarios y cada uno produce 4 unidades/hora.", 48], ["La empresa C tiene 8 operarios y cada uno produce 6 unidades/hora.", 48]])
  valor_total: escenario[0]
  resultado_esperado: escenario[1]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa cuenta con {escenario[0]}, ¿cuál es la capacidad de producción total de unidades por hora?"

explicacion: |
  La capacidad total se calcula multiplicando el número de operarios por la productividad individual de cada uno.

respuesta: resultado_esperado
```

### 22 — Decisiones de contratación

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["costos", "decision"]

variables:
  idx: uno_de([0, 1])
  casos: ["El costo de contratar un nuevo empleado es de $500 y el aumento en ingresos es de $600.", "El costo de contratar un nuevo empleado es de $700 y el aumento en ingresos es de $650."]
  valores: [verdadero, falso]

respuesta: valores[idx]
tipo: vf

enunciado: "Si el costo marginal de contratar a un nuevo trabajador es menor al ingreso marginal que este genera, la decisión de contratar es rentable. En el escenario actual: {casos[idx]}"

explicacion: |
  En economía, una acción es rentable si el beneficio marginal es mayor al costo marginal.
```

### 23 — Flujo de trabajo en una línea de montaje

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

tipo: ordenar

opciones_explicitas: ["Planificación de tareas", "Asignación de recursos", "Ejecución del trabajo", "Control de calidad"]
respuesta_orden: ["Planificación de tareas", "Asignación de recursos", "Ejecución del trabajo", "Control de calidad"]

enunciado: "Ordene cronológicamente las etapas lógicas para coordinar un equipo de trabajo en una línea de producción:"

explicacion: |
  Para una coordinación eficiente, primero se debe planificar, luego asignar los recursos necesarios, ejecutar la tarea y finalmente controlar los resultados.
```

### 24 — Especialización del trabajo

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["productividad", "especializacion"]

tipo: mc

opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene igual"]

enunciado: "Considerando la teoría de la división del trabajo de Adam Smith, si aplicamos la especialización en un taller, ¿qué ocurre con la eficiencia?"

respuesta: "Aumenta"

explicacion: |
  La especialización permite que los trabajadores se vuelvan más hábiles en tareas específicas, reduciendo tiempos de transición y aumentando la productividad.
```

### 25 — Gestión de inventario y recursos

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "avanzado"
  tags: ["inventario", "recursos"]

variables:
  datos: [["El stock actual es de 150 unidades y el consumo diario es de 30 unidades. Faltan ___ días para agotar el stock.", "5"], ["El stock actual es de 200 unidades y el consumo diario es de 50 unidades. Faltan ___ días para agotar el stock.", "4"], ["El stock actual es de 100 unidades y el consumo diario de 10 unidades. Faltan ___ días para agotar el stock.", "10"]]
  idx: uno_de([0, 1, 2])

tipo: completar

respuestas_validas:
  - "5"
  - "4"
  - "10"
respuesta: datos[idx][1]

enunciado: "Si el stock actual es de {datos[idx][0]}, ¿cuántos días faltan para agotar el stock?"

explicacion: |
  El tiempo de agotamiento se calcula dividiendo el stock total disponible por la tasa de consumo diaria.
```
