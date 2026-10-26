### 1 — El rol del Fiscal en la etapa de investigación
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["proceso_penal", "fiscalia", "investigacion"]

respuesta: "recaudar y presentar"
tipo: completar
respuestas_validas: ["recaudar y presentar", "decidir la culpabilidad", "dictar sentencia"]

enunciado: "En la etapa de investigación de un proceso penal, la función principal del Fiscal es ___ la evidencia necesaria para sustentar la acusación ante el juez."

explicacion: |
  El Fiscal es el director de la investigación y tiene la carga de la prueba; su rol no es juzgar, sino recolectar elementos de convicción para demostrar la existencia de un delito y la responsabilidad del imputado.
```

### 2 — Confusión sobre la carga de la prueba
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["carga_de_la_prueba", "presuncion_de_inocencia"]

respuesta: falso
tipo: vf

enunciado: "¿Es responsabilidad del imputado demostrar que es inocente durante la etapa de investigación?"

explicacion: |
  Falso. Debido al principio de presunción de inocencia, la carga de la prueba recae exclusivamente sobre la parte acusadora (el Fiscal). El imputado no tiene la obligación de probar su inocencia.
```

### 3 — Elementos de convicción vs. Prueba
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["elementos_de_conviccion", "etapa_previa"]

respuesta: "elementos de convicción"
tipo: mc
opciones_explicitas: ["elementos de convicción", "pruebas plenas", "sentencias anticipadas"]

enunciado: "En la etapa de investigación, los hallazgos recolectados por la fiscalía que aún no han sido sometidos al debate en juicio oral se denominan técnicamente:"

explicacion: |
  En la etapa de investigación se recolectan 'elementos de convicción'. Estos solo se transforman en 'pruebas' una vez que son producidos ante un tribunal en el juicio oral bajo los principios de contradicción e inmediación.
```

### 4 — Secuencia de la actividad fiscal
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["procedimiento", "secuencia_fiscal"]

respuesta: ["recolección", "preservación", "cadena_de_custodia", "presentación"]
tipo: ordenar
opciones_explicitas: ["recolección", "preservación", "cadena_de_custodia", "presentación"]

enunciado: "Para que la evidencia sea válida en un juicio, el fiscal y los peritos deben seguir un orden lógico de manejo de la evidencia. Ordene los pasos para asegurar la integridad de la prueba:"

explicacion: |
  El orden correcto es: 1. Recolección del elemento, 2. Preservación para evitar contaminación, 3. Mantenimiento de la cadena de custodia (registro de quién lo tuvo) y 4. Presentación ante el tribunal.
```

### 5 — El principio de oportunidad y la prueba
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["principio_oportunidad", "discrecionalidad"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["siempre debe acusar", "puede prescindir de la acción penal", "debe esperar siempre al juicio"]

tabla:
  - ["siempre debe acusar", "siempre debe acusar"]
  - ["puede prescindir de la acción penal", "puede prescindir de la acción penal"]

enunciado: "El principio de oportunidad permite que el Fiscal, ante ciertos supuestos de política criminal, ___"

explicacion: |
  El principio de oportunidad es una facultad de la fiscalía para no ejercer la acción penal en casos específicos (como delitos menores o cuando el daño es mínimo), optimizando los recursos del Estado.
```