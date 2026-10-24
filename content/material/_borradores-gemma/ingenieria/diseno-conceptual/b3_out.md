### 1 — El momento del diseño conceptual
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["metodologia", "etapas_proyecto"]

respuesta: "detalles_tecnicos"
tipo: mc
opciones_explicitas: ["detalles_tecnicos", "materiales_especificos", "costos_de_fabricacion", "planos_de_ensamblaje"]

enunciado: "Un error común en la gestión de proyectos es saltar directamente a la definición de {detalles_tecnicos} sin haber consolidado primero la idea general de la solución. ¿Qué etapa se está omitiendo?"

explicacion: |
  El diseño conceptual debe establecer la arquitectura y funcionalidad general. Si se salta directamente a los detalles técnicos (como dimensiones exactas o materiales específicos), se corre el riesgo de optimizar componentes de una solución que podría ser inherentemente errónea para el problema original.
```

### 2 — Alcance del diseño conceptual
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["errores_comunes", "definicion"]

variables:
  es_tecnico: uno_de([verdadero, falso])

respuesta: es_tecnico
tipo: vf

enunciado: "Si el diseño conceptual se centra en la selección de tornillos, aleaciones específicas y tolerancias de fabricación, ¿se está cumpliendo estrictamente con la fase de diseño conceptual? (Respuesta: verdadero o falso)"

explicacion: |
  Falso. El diseño conceptual debe responder al 'qué' y al 'por qué' de la solución a nivel macro. La selección de componentes específicos y tolerancias pertenece al diseño detallado.
```

### 3 — La confusión entre concepto y prototipo
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["prototipado", "confusion"]

respuesta: "el_concepto_es_la_solucion"
tipo: completar
respuestas_validas: ["el_concepto_es_la_solucion"]

enunciado: "Un error conceptual frecuente es creer que un prototipo funcional de baja fidelidad es lo mismo que el diseño conceptual. Sin embargo, el diseño conceptual es ___."

explicacion: |
  El diseño conceptual es una representación abstracta o lógica de la solución, mientras que el prototipo es una realización física o digital para validar hipótesis. No son sinónimos.
```

### 4 — Secuencia lógica del desarrollo
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["flujo_trabajo"]

respuesta: ["identificacion_problema", "diseno_conceptual", "diseno_detallado", "fabricacion"]
tipo: ordenar

opciones_explicitas: ["identificacion_problema", "diseno_conceptual", "diseno_detallado", "fabricacion", "pruebas_de_usuario"]

enunciado: "Ordene las etapas de un proceso de ingeniería de la más general a la más específica, evitando el error de saltar pasos críticos."

explicacion: |
  El flujo lógico requiere primero entender el problema, luego idear la solución general (conceptual), luego definir sus componentes exactos (detallado) y finalmente producirlo.
```

### 5 — El riesgo de la solución prematura
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["riesgo", "optimizacion"]

variables:
  escenario: uno_de([0, 1])

respuesta: "optimizar_detalles"
tipo: mc
opciones_explicitas: ["optimizar_detalles", "validar_requisitos", "definir_presupuesto", "analizar_competencia"]

enunciado: "En la fase de diseño conceptual, el mayor riesgo de error es intentar {escenario_texto} antes de haber validado si la idea general satisface las necesidades del usuario."

variables:
  escenario_texto: uno_de(["optimizar_detalles", "validar_requisitos", "definir_presupuesto", "analizar_competencia"])

explicacion: |
  Intentar optimizar detalles técnicos (como reducir el peso de una pieza en gramos) cuando la arquitectura general del sistema aún no es válida es una pérdida de recursos conocida como 'optimización prematura'.
```