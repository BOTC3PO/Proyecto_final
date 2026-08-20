### 1 — El rol del Fiscal en la etapa de investigación
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["fiscalia", "investigacion", "proceso_penal"]

respuesta: "reunir elementos de convicción"
tipo: completar
respuestas_validas: ["reunir elementos de convicción", "dictar sentencia", "acusar al imputado", "defender al procesado"]

enunciado: "A diferencia del juez, cuya función es decidir sobre la aplicación de la ley, el rol principal del Fiscal durante la etapa de investigación es ___."

explicacion: |
  En el sistema acusatorio, el Fiscal es el director de la investigación y tiene la carga de la prueba, debiendo recolectar elementos de convicción para sustentar una acusación.
```

### 2 — Diferencia entre Prueba y Elemento de Convicción
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["prueba", "evidencia", "fiscalia"]

opciones_explicitas: ["La prueba es un elemento que se produce en el juicio oral, mientras que el elemento de convicción es el que se recaba en la etapa de investigación.", "La prueba y el elemento de convicción son términos sinónimos en cualquier etapa del proceso.", "El elemento de convicción solo lo puede recolectar el juez.", "La prueba es exclusiva de la defensa y el elemento de convicción de la fiscalía."]

respuesta: opciones_explicitas[0]
tipo: mc

enunciado: "¿Cuál es la distinción técnica fundamental entre un elemento de convicción y una prueba?"

explicacion: |
  Los elementos de convicción son indicios recolectados durante la investigación que sirven para sustentar la acusación, pero solo adquieren la categoría de 'prueba' cuando son producidos y controvertidos ante un juez en el juicio oral.
```

### 3 — La carga de la prueba y la presunción de inocencia
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["carga_de_la_prueba", "presuncion_de_inocencia"]

respuesta: falso

tipo: vf

enunciado: "Debido a la presunción de inocencia, el imputado tiene la obligación de demostrar que no cometió el delito durante la investigación."

explicacion: |
  Falso. La carga de la prueba recae exclusivamente en la parte acusadora (Fiscalía). El imputado no tiene que probar su inocencia; es el Estado quien debe destruir la presunción de inocencia mediante pruebas de cargo.
```

### 4 — Secuencia lógica de la actividad fiscal
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["procedimiento", "fiscalia", "investigacion"]

opciones_explicitas: ["Recolección de indicios", "Planteamiento de la acusación", "Solicitud de medidas cautelares", "Presentación de la teoría del caso"]

respuesta: ["Recolección de indicios", "Planteamiento de la acusación", "Presentación de la teoría del caso"]
tipo: ordenar

enunciado: "Ordene cronológicamente las acciones que un Fiscal realiza desde el inicio de la investigación hasta la etapa intermedia:"

explicacion: |
  Primero se recolectan los indicios (elementos de convicción), luego se estructura la acusación formal y finalmente se presenta la teoría del caso para sostener la pretensión punitiva.
```

### 5 — El Fiscal vs. El Juez de Control
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["fiscalia", "juez_de_control", "controversia"]

variables:
  idx: uno_de([0, 1])

datos:
  - ["El Fiscal es una parte procesal que busca la verdad histórica para acusar.", "El Juez de Control es un tercero imparcial que garantiza la legalidad de la investigación."]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["El Fiscal es una parte procesal que busca la verdad histórica para acusar.", "El Juez de Control es una parte procesal que busca la verdad histórica para acusar.", "El Fiscal es un tercero imparcial que controla la legalidad.", "El Juez de Control es una parte que busca la verdad para acusar."]

enunciado: "Para distinguir las funciones en el proceso penal, si consideramos que el Juez de Control es el garante de la legalidad, entonces el Fiscal es ___."

explicacion: |
  El Fiscal es una parte (sujeto procesal) con una función de persecución penal, mientras que el Juez es un tercero ajeno al conflicto que asegura que la investigación no vulnere derechos fundamentales.
```