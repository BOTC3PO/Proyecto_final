### 1 — Observación vs. Encuesta
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["metodos", "observacion", "encuesta"]

enunciado: "A diferencia de la encuesta, donde el investigador interactúa con los sujetos para obtener respuestas declarativas, la observación se caracteriza por ser un método donde el investigador registra el comportamiento de los sujetos sin ___."

respuestas_validas: ["intervenir", "interactuar", "influir"]
tipo: completar

explicacion: |
  La observación busca captar la realidad tal cual ocurre, evitando el sesgo de la reactividad que puede producirse cuando el sujeto sabe que está siendo evaluado o cuando el investigador interviene en el entorno.
```

### 2 — Datos Primarios vs. Secundarios
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["fuentes", "datos_primarios", "datos_secundarios"]

variables:
  escenario: uno_de([["un investigador realiza entrevistas para un nuevo estudio", "primarios"], ["un investigador analiza censos nacionales ya existentes", "secundarios"]])

enunciado: "Si un investigador utiliza el {escenario[0]} para su estudio, los datos obtenidos se clasifican como datos {escenario[1]}."

opciones_explicitas: ["primarios", "secundarios"]
respuesta: "primarios"
tipo: mc

explicacion: |
  Los datos primarios son recolectados de primera mano por el investigador para un propósito específico, mientras que los secundarios son datos que ya existen y fueron recolectados por otros para otros fines.
```

### 3 — Validez vs. Confiabilidad
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["calidad_datos", "validez", "confiabilidad"]

enunciado: "En el contexto de la calidad de la recolección de datos, si un instrumento de medición arroja resultados consistentes y estables en aplicaciones repetidas, decimos que tiene alta confiabilidad. Sin embargo, que el instrumento sea consistente no garantiza que mida lo que pretende medir; esa propiedad se denomina ___."

respuestas_validas: ["validez"]
tipo: completar

explicacion: |
  La confiabilidad se refiere a la consistencia de la medida (si se repite, ¿da lo mismo?), mientras que la validez se refiere a la exactitud (¿estoy midiendo realmente la variable que digo medir?).
```

### 4 — Sesgo de Selección
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo", "errores"]

enunciado: "¿Es correcto afirmar que un error de muestreo ocurre cuando la muestra no es representativa de la población debido a una falla en el diseño de la recolección?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: vf

explicacion: |
  El sesgo de selección es un error sistemático que ocurre cuando algunos miembros de la población tienen una probabilidad menor o mayor de ser seleccionados, invalidando la representatividad de la muestra.
```

### 5 — Pasos para una recolección confiable
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

opciones_explicitas: ["Definir el instrumento", "Recolectar los datos", "Analizar los resultados"]
respuesta: ["Definir el instrumento", "Recolectar los datos", "Analizar los resultados"]
tipo: ordenar

enunciado: "Para asegurar la confiabilidad en la investigación, es fundamental seguir un orden lógico en el proceso de recolección. Ordene las siguientes etapas:"

explicacion: |
  No se pueden recolectar datos sin haber diseñado primero la herramienta (encuesta, guía de entrevista, etc.), y el análisis es una fase posterior a la obtención de la información.
```