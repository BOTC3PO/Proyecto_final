### 1 — El origen del sonido en cuerdas
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["cuerdas", "vibracion"]

enunciado: "En un instrumento de cuerda pulsada, como la guitarra, el sonido se produce por la vibración de la cuerda. Sin embargo, para que este sonido sea audible y tenga cuerpo, es necesario que la cuerda transmita su vibración a un componente que actúe como amplificador natural. Este componente es la ___."

respuestas_validas: ["caja de resonancia", "caja de resonancia acústica"]
tipo: completar

explicacion: |
  La cuerda por sí sola mueve muy poco aire. La caja de resonancia amplifica las vibraciones mecánicas convirtiéndolas en ondas de presión sonora más potentes.
```

### 2 — Diferencia entre tono y timbre
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["timbre", "armonicos"]

variables:
  es_mismo_tono: falso

enunciado: "Si dos instrumentos diferentes (por ejemplo, un piano y un violín) tocan exactamente la misma nota con la misma intensidad, ¿por qué percibimos que su sonido es distinto?"

opciones_explicitas: ["Porque tienen diferentes frecuencias fundamentales", "Porque tienen diferentes contenidos de armónicos (timbre)", "Porque uno es más fuerte que el otro", "Porque uno es más agudo que el otro"]
tipo: mc

respuesta: "Porque tienen diferentes contenidos de armónicos (timbre)"

explicacion: |
  El timbre es la cualidad que nos permite distinguir fuentes sonoras. Se debe a la combinación de la frecuencia fundamental y los armónicos que acompañan al sonido.
```

### 3 — El mecanismo de la madera
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["viento", "madera"]

enunciado: "¿Es correcto afirmar que la clasificación de un instrumento como 'madera' (como el clarinete) depende exclusivamente del material físico del cual está construido?"

opciones_explicitas: ["verdadero", "falso"]
tipo: vf

respuesta: falso

explicacion: |
  Falso. La clasificación en la familia de viento-madera depende del mecanismo de producción del sonido (uso de lengüeta o de un bisel) y no del material. Por ejemplo, un flautín de metal es un instrumento de viento-madera.
```

### 4 — El proceso de producción sonora
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "avanzado"
  tags: ["proceso_sonoro", "orden"]

enunciado: "Ordena los pasos que ocurren en un instrumento de viento cuando un músico sopla para producir un sonido:"

opciones_explicitas: ["Columna de aire en movimiento", "Vibración de la lengüeta o bisel", "Modificación del tono mediante los agujeros", "Proyección del sonido por la campana"]
tipo: ordenar

respuesta: ["Columna de aire en movimiento", "Vibración de la lengüeta o bisel", "Modificación del tono mediante los agujeros", "Proyección del sonido por la campana"]

explicacion: |
  El flujo de aire genera la vibración inicial, la cual se modula al cambiar la longitud de la columna de aire y finalmente se proyecta.
```

### 5 — Resonancia y longitud
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["frecuencia", "longitud"]

variables:
  idx: uno_de([0, 1])
  datos: [["Si la longitud de la columna de aire aumenta, la frecuencia disminuye.", "Si la longitud de la columna de aire disminuye, la frecuencia aumenta."], ["baja", "sube"]]

enunciado: "En un instrumento de viento, si el músico tapa más agujeros (aumentando la longitud efectiva de la columna de aire), la frecuencia del sonido resultante ___."

tipo: input
respuesta: "baja"

explicacion: |
  La frecuencia es inversamente proporcional a la longitud de la columna de aire resonante. A mayor longitud, menor frecuencia (sonido más grave).
```