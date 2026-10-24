### 1 — El propósito de la documentación
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "propósito"]

respuesta: "transmitir información técnica de manera precisa y estandarizada para permitir la fabricación o implementación del diseño"
tipo: completar
respuestas_validas: ["transmitir información técnica de manera precisa y estandarizada para permitir la fabricación o implementación del diseño"]

enunciado: "El objetivo principal de la documentación técnica en ingeniería es ___."

explicacion: |
  La documentación no es solo un registro, es el medio para que otros puedan replicar, entender y ejecutar la solución diseñada sin ambigüedades.
```

### 2 — Elementos de un plano técnico
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "elementos"]

opciones_explicitas: ["Cotas y tolerancias", "Esquema de colores artísticos", "Biografía del diseñador", "Presupuesto de marketing"]
respuesta: "Cotas y tolerancias"
tipo: mc

enunciado: "En un plano técnico de ingeniería, ¿cuál de los siguientes elementos es fundamental para asegurar que la pieza sea fabricada con las dimensiones correctas?"

explicacion: |
  Las cotas definen las medidas y las tolerancias permiten el margen de error aceptable en la fabricación.
```

### 3 — Verdad o Falso: Presentaciones de diseño
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["presentaciones", "comunicacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que una presentación de diseño para clientes debe contener exclusivamente detalles matemáticos complejos y fórmulas, omitiendo la visualización del producto final?"

explicacion: |
  Falso. Una presentación efectiva debe equilibrar el rigor técnico con la claridad visual, permitiendo que los stakeholders entiendan la funcionalidad y el valor de la solución.
```

### 4 — El informe técnico
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "estructura"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Resumen Ejecutivo", "Introducción", "Metodología", "Resultados", "Conclusiones"],
    ["Objetivos", "Marco Teórico", "Desarrollo", "Análisis de Resultados", "Recomendaciones"]
  ]

respuesta: datos[escenario_idx][0]
tipo: completar
respuestas_validas: ["Resumen Ejecutivo", "Objetivos"]

enunciado: "En la estructura estándar de un informe técnico profesional, la sección que ofrece una visión general de todo el documento para una lectura rápida se denomina ___."

explicacion: |
  El Resumen Ejecutivo (o Abstract) es vital para que los tomadores de decisiones comprendan el alcance y los resultados sin leer todo el documento.
```

### 5 — Secuencia de presentación de un proyecto
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["presentacion", "orden"]

opciones_explicitas: ["Definición del problema", "Propuesta de solución", "Demostración/Pruebas", "Conclusión y próximos pasos"]
respuesta: ["Definición del problema", "Propuesta de solución", "Demostración/Pruebas", "Conclusión y próximos pasos"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos para realizar una presentación técnica efectiva ante un comité de revisión:"

explicacion: |
  Una presentación debe seguir una narrativa lógica: primero se establece el contexto (problema), luego la propuesta, se valida con evidencia (pruebas) y se cierra con la síntesis.
```