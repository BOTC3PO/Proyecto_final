### 1 — Inicio del proceso penal
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["proceso_penal", "denuncia"]

respuesta: "denuncia"
tipo: completar
respuestas_validas: ["denuncia", "querella"]

enunciado: "El proceso penal puede iniciarse de diversas formas; cuando un ciudadano comunica un hecho presuntamente delictivo ante la autoridad, el acto formal se denomina ___."

explicacion: |
  La denuncia es el acto mediante el cual se pone en conocimiento de la autoridad la comisión de un hecho presuntamente delictivo. La querella, en cambio, requiere la constitución de la parte como querellante en el proceso.
```

### 2 — Naturaleza de la etapa de instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["instruccion", "investigacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es la etapa de instrucción una fase de debate y juicio donde se determina la culpabilidad o inocencia del imputado?"

explicacion: |
  Falso. La etapa de instrucción es una fase de investigación preparatoria donde el objetivo es reunir elementos de convicción para determinar si existe causa para abrir un juicio, pero no es la etapa de debate oral y público.
```

### 3 — Diferencia entre denuncia y querella
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["querella", "denuncia"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["La denuncia requiere la participación activa de la víctima como parte procesal, mientras que la querella es un mero aviso.", "La querella implica la constitución de la víctima como parte en el proceso, mientras que la denuncia es un deber ciudadano de informar."]

enunciado: "Según la doctrina procesal, ¿cuál es la diferencia fundamental entre la denuncia y la querella?"

explicacion: |
  La diferencia radica en la legitimación y la participación: el querellante es parte activa en el proceso y puede proponer medidas, mientras que el denunciante simplemente informa el hecho.
```

### 4 — Secuencia del proceso penal
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["etapas_procesales", "orden"]

respuesta: ["Notitia criminis", "Instrucción", "Juicio Oral"]
tipo: ordenar
opciones_explicitas: ["Juicio Oral", "Instrucción", "Notitia criminis"]

enunciado: "Ordene cronológicamente las etapas del proceso penal, partiendo desde la noticia del delito:"

explicacion: |
  El orden correcto es: 1. Notitia criminis (noticia del delito), 2. Instrucción (investigación), 3. Juicio Oral (debate y sentencia).
```

### 5 — El rol del Fiscal en la instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["fiscalia", "investigacion"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["El Fiscal tiene la carga de la prueba y dirige la investigación para esclarecer los hechos.", "El Fiscal es el encargado de dictar la sentencia definitiva tras la etapa de instrucción."]

enunciado: "En el sistema acusatorio moderno, ¿cuál es la función principal del Ministerio Público durante la etapa de instrucción?"

explicacion: |
  El Fiscal dirige la investigación y recolecta pruebas para determinar si hay elementos suficientes para acusar, pero la sentencia es competencia exclusiva de un Juez.
```