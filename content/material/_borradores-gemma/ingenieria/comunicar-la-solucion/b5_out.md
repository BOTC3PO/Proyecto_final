### 1 — Formato de planos técnicos
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "documentacion"]

variables:
  escenario: uno_de([
    ["Un plano de conjunto de una pieza mecánica", "ISO"],
    ["Un esquema de un circuito electrónico", "IEC"],
    ["Un diagrama de flujo de un proceso químico", "ANSI"]
  ])

enunciado: "Para asegurar la interoperabilidad internacional, un ingeniero debe seguir la normativa {escenario[0]} al presentar el diseño de {escenario[0]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["ISO", "IEC", "ANSI", "DIN"]

explicacion: |
  La normativa seleccionada para {escenario[0]} es {escenario[1]}. Es fundamental utilizar el estándar correcto para evitar errores de fabricación o interpretación en proyectos globales.
```

### 2 — Veracidad de documentación técnica
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "veracidad"]

variables:
  caso: uno_de([
    ["Un informe técnico que incluye datos experimentales sin citar la fuente de los instrumentos", falso],
    ["Un manual de usuario que especifica las tolerancias de montaje según el fabricante", verdadero]
  ])

enunciado: "En el contexto de la documentación de ingeniería, ¿es correcto afirmar que: {caso[0]}?"

respuesta: caso[1]
tipo: vf

explicacion: |
  La veracidad y la trazabilidad son pilares de la ingeniería. {caso[1]} es la respuesta correcta porque {caso[0]} es {caso[1]}.
```

### 3 — Secuencia de un informe de diseño
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "estructura"]

enunciado: "Ordene los elementos de un informe técnico de diseño final de la forma más lógica y profesional:"

pasos:
  - "Resumen ejecutivo"
  - "Cuerpo del diseño (cálculos y especificaciones)"
  - "Conclusiones y recomendaciones"
  - "Anexos (planos y hojas de datos)"

opciones_explicitas: ["Resumen ejecutivo", "Cuerpo del diseño (cálculos y especificaciones)", "Conclusiones y recomendaciones", "Anexos (planos y hojas de datos)"]
respuesta: ["Resumen ejecutivo", "Cuerpo del diseño (cálculos y especificaciones)", "Conclusiones y recomendaciones", "Anexos (planos y hojas de datos)"]
tipo: ordenar

explicacion: |
  Un informe profesional debe fluir desde una visión general (resumen) hacia el detalle técnico (cuerpo), cerrar con el juicio del ingeniero (conclusiones) y terminar con el soporte documental (anexos).
```

### 4 — Componentes de una presentación técnica
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "avanzado"
  tags: ["presentaciones", "comunicacion"]

variables:
  presentacion: uno_de([
    ["Presentación ante un comité de inversión", "costos"],
    ["Presentación ante un equipo de mantenimiento", "operación"],
    ["Presentación ante un equipo de fabricación", "tolerancias"]
  ])

enunciado: "Al realizar una presentación para {presentacion[0]}, el enfoque principal de la comunicación debe centrarse en {presentacion[1]}."

respuesta: presentación[1]
tipo: completar
respuestas_validas: ["costos", "operación", "tolerancias"]

explicacion: |
  El enfoque de la comunicación técnica debe adaptarse a la audiencia. Para {presentacion[0]}, lo crítico es discutir {presentacion[1]}.
```

### 5 — Integridad de la documentación
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "control_de_revisiones"]

variables:
  revision: uno_de([
    ["El plano muestra la versión 'Rev. 02' pero el índice del informe dice 'Rev. 01'", falso],
    ["El plano y el informe coinciden en la fecha y el número de revisión", verdadero]
  ])

enunciado: "En un proceso de auditoría de diseño, se detecta que: {revision[0]}"

respuesta: revision[1]
tipo: vf

explicacion: |
  La consistencia entre planos e informes es vital. Si hay discrepancias como en el caso {revision[0]}, la documentación se considera no válida. Por tanto, la afirmación es {revision[1]}.
```