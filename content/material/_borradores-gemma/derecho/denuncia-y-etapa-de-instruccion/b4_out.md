### 1 — Inicio del proceso penal
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["proceso_penal", "denuncia"]

respuesta: "denuncia"
tipo: mc
opciones_explicitas: ["denuncia", "querella", "sentencia", "resolución"]

enunciado: "A diferencia de la querella, donde la víctima interviene activamente con abogado, la ___ es el acto mediante el cual se pone en conocimiento de la autoridad la comisión de un delito."

explicacion: |
  La denuncia es el acto de informar un hecho delictivo, mientras que la querella es una acción formal donde la víctima se constituye como parte en el proceso.
```

### 2 — Objeto de la etapa de instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["instruccion", "investigacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿El objetivo principal de la etapa de instrucción es la recolección de elementos de convicción para determinar si existe probabilidad de llevar a juicio a un imputado?"

explicacion: |
  Correcto. La instrucción busca reunir pruebas para decidir si se procede al juicio oral o se dicta el sobreseimiento.
```

### 3 — Diferencia entre denuncia y querella
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["querella", "denuncia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["denuncia", "noticia criminal"], ["querella", "acción penal privada/pública con legitimación"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["noticia criminal", "acción penal privada/pública con legitimación"]

enunciado: "En el escenario seleccionado, la diferencia fundamental es que la ___ se caracteriza por ser una {datos[escenario_idx][1]}."

explicacion: |
  La distinción radica en la legitimación y la participación procesal de la víctima.
```

### 4 — Orden de la secuencia procesal
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

respuesta: ["Noticia criminis", "Etapa de Instrucción", "Etapa de Juicio"]
tipo: ordenar
opciones_explicitas: ["Noticia criminis", "Etapa de Instrucción", "Etapa de Juicio"]

enunciado: "Ordene cronológicamente las etapas del proceso penal desde el hecho hasta la decisión final:"

explicacion: |
  Primero se recibe la noticia (denuncia/oficio), luego se investiga (instrucción) y finalmente se decide en juicio.
```

### 5 — El rol del Juez de Instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["juez", "instrucción"]

respuesta: "investigar"
tipo: completar
respuestas_validas: ["investigar", "sentenciar", "acusar"]

enunciado: "Mientras que el Tribunal de Juicio tiene la función de dictar sentencia, el Juez de Instrucción tiene la función primordial de ___ los hechos."

explicacion: |
  La instrucción es una fase preparatoria de investigación, no de decisión de culpabilidad o inocencia definitiva.
```