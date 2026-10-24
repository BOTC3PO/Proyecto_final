### 1 — Inicio del proceso penal
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["procedimiento", "denuncia"]

tipo: mc
opciones_explicitas: ["Denuncia", "Sentencia", "Fallo", "Recurso"]

enunciado: "El acto mediante el cual se pone en conocimiento de la autoridad judicial la existencia de un hecho presuntamente delictivo se denomina:"

respuesta: "Denuncia"

explicacion: |
  La denuncia es el acto procesal que da inicio a la investigación penal al informar un posible delito.
```

### 2 — El rol de la instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["instruccion", "investigacion"]

tipo: vf

enunciado: "El objetivo principal de la etapa de instrucción es determinar si existe mérito para llevar a juicio a una persona."

respuesta: falso

explicacion: |
  La instrucción tiene como fin la investigación de la verdad real y la recolección de pruebas para determinar si hay elementos suficientes para el juicio.
```

### 3 — Elementos de la investigación
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["pruebas", "instruccion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["testimonio", "pericia"], ["allanamiento", "interrogatorio"]]

enunciado: "Durante la etapa de instrucción, el fiscal o el juez pueden ordenar un {datos[escenario_idx][0]} para obtener evidencia física o técnica."

pasos:
  - "Se identifica el hecho delictivo."
  - "Se recolectan las evidencias mediante medidas de prueba."

respuesta: "pericia"

tipo: completar
respuestas_validas: ["pericia"]

explicacion: |
  La pericia es un medio de prueba técnico fundamental en la etapa de instrucción para esclarecer hechos complejos.
```

### 4 — Orden cronológico del proceso
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["etapas", "orden_procesal"]

tipo: ordenar
opciones_explicitas: ["Denuncia", "Instrucción", "Juicio Oral", "Sentencia"]

enunciado: "Ordene cronológicamente las etapas del proceso penal desde el inicio hasta la resolución final:"

respuesta: ["Denuncia", "Instrucción", "Juicio Oral", "Sentencia"]

explicacion: |
  El proceso comienza con la denuncia, sigue con la investigación (instrucción), la etapa de debate (juicio) y finaliza con la sentencia.
```

### 5 — El imputado en la instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["sujeto_procesal", "imputado"]

tipo: mc
opciones_explicitas: ["Imputado", "Querellante", "Testigo", "Juez"]

enunciado: "La persona sobre la cual recae la sospecha de haber cometido un delito durante la etapa de instrucción es el:"

respuesta: "Imputado"

explicacion: |
  El imputado es el sujeto pasivo de la acción penal en la fase de investigación.
```