### 1 — Sesgo de selección
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Se realiza una encuesta sobre hábitos de lectura solo en una biblioteca pública.", "muestreo_no_representativo"],
    ["Se entrevista a personas en un gimnasio sobre su consumo de azúcar.", "muestreo_no_representativo"]
  ]

enunciado: "Si un investigador utiliza el escenario '{escenarios[escenario_idx][0]}' para estudiar la población general, estamos ante un error de: ___"

respuestas_validas: ["muestreo_no_representativo"]

respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  El error radica en que la muestra no refleja la diversidad de la población objetivo, lo que introduce un sesgo de selección que invalida la generalización de los resultados.
```

### 2 — Validez vs. Confiabilidad
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["metodologia", "conceptos"]

enunciado: "Un instrumento de recolección de datos que produce resultados consistentes y estables en aplicaciones repetidas, pero que no mide lo que pretende medir, posee alta ___ pero baja ___."

opciones_explicitas: ["validez", "confiabilidad", "confiabilidad", "validez", "precisión", "exactitud"]

respuesta: "confiabilidad"
tipo: mc

explicacion: |
  La confiabilidad se refiere a la consistencia de la medida (si se repite, da lo mismo), mientras que la validez se refiere a si el instrumento realmente mide la variable de interés.
```

### 3 — El error del observador
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["observacion", "sesgo"]

enunciado: "¿Es verdadero que el 'efecto reactivo' ocurre cuando los sujetos de estudio modifican su comportamiento natural al saber que están siendo observados?"

respuesta: verdadero
tipo: vf

explicacion: |
  Exacto. La presencia del investigador puede alterar la conducta natural de los sujetos, lo que constituye un sesgo de reactividad que el investigador debe intentar mitigar.
```

### 4 — Pasos para la validación de un instrumento
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["procedimiento", "instrumentos"]

enunciado: "Ordene los pasos lógicos para asegurar la calidad de un instrumento de recolección de datos antes de su aplicación definitiva:"

opciones_explicitas: ["Diseño del instrumento", "Prueba piloto", "Validación por expertos", "Análisis de resultados de la prueba"]

respuesta: ["Diseño del instrumento", "Validación por expertos", "Prueba piloto", "Análisis de resultados de la prueba"]
tipo: ordenar

explicacion: |
  Primero se diseña, luego expertos validan el contenido, se realiza una prueba piloto para detectar errores de comprensión y finalmente se analiza esa prueba para ajustar el instrumento.
```

### 5 — Sesgo de respuesta (Deseabilidad social)
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["encuestas", "sesgo"]

variables:
  pregunta_tipo: uno_de([0, 1])
  casos: [
    ["¿Alguna vez ha mentido para evitar un conflicto?", "deseabilidad_social"],
    ["¿Qué tan importante es para usted la honestidad en el trabajo?", "deseabilidad_social"]
  ]

enunciado: "Cuando un encuestado responde de una manera que busca dar una buena imagen de sí mismo en lugar de decir la verdad, se produce un sesgo de: ___"

respuestas_validas: ["deseabilidad_social"]

respuesta: "deseabilidad_social"
tipo: completar

explicacion: |
  La deseabilidad social es un error común en encuestas donde el sujeto intenta ajustarse a las normas sociales percibidas, distorsionando la veracidad de los datos recolectados.
```