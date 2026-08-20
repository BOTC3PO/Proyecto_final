### 1 — La vibración de la cuerda
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["guitarra", "cuerdas", "vibracion"]

variables:
  escenario: uno_de([["guitarra_acustica", "madera"], ["violín", "cuerdas de metal"], ["arpa", "cuerdas de nylon"]])
  idx: uno_de([0, 1, 2])

enunciado: "En una {escenario[idx][0]}, el sonido se produce principalmente por la vibración de las {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: vf

explicacion: |
  El mecanismo de producción sonora depende del tipo de instrumento. En instrumentos de cuerda, la fuente primaria es la vibración de la cuerda.
```

### 2 — Resonancia en instrumentos de viento
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["flauta", "aire", "resonancia"]

variables:
  instrumento_aire: uno_de([["flauta dulce", "columna de aire"], ["saxofón", "caña de madera"], ["trompeta", "labios del músico"]])
  idx: uno_de([0, 1, 2])

enunciado: "Al soplar en un {instrumento_aire[idx][0]}, el sonido se genera mediante la vibración de la {instrumento_aire[idx][1]} dentro del tubo."

respuesta: instrumento_aire[idx][1]
tipo: completar
respuestas_validas: ["columna de aire", "caña de madera", "labios del músico"]

explicacion: |
  En los instrumentos de viento, la columna de aire que resuena dentro del tubo es la responsable de la amplificación y el tono.
```

### 3 — El proceso del sonido en un piano
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["piano", "mecanismo", "orden"]

enunciado: "Ordena el proceso de generación de sonido en un piano desde que se presiona la tecla hasta que el sonido sale al aire:"

opciones_explicitas: ["Presión de la tecla", "Golpe del martillo en la cuerda", "Vibración de la cuerda", "Resonancia en la caja de madera"]

respuesta: ["Presión de la tecla", "Golpe del martillo en la cuerda", "Vibración de la cuerda", "Resonancia en la caja de madera"]
tipo: ordenar

explicacion: |
  El piano es un instrumento de percusión de cuerda: la tecla activa un mecanismo que hace que un martillo golpee la cuerda, la cual vibra y transmite su energía a la caja de resonancia.
```

### 4 — Intensidad y amplitud
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["intensidad", "volumen", "fisica"]

variables:
  caso_volumen: uno_de([["tocar fuerte", "mayor"], ["tocar suave", "menor"]])
  idx: uno_de([0, 1])

enunciado: "Si un músico decide {caso_volumen[idx][0]} la nota, la amplitud de la onda sonora será ___ que la anterior."

respuesta: caso_volumen[idx][1]
tipo: completar
respuestas_validas: ["mayor", "menor"]

explicacion: |
  La intensidad del sonido (lo que percibimos como volumen) está directamente relacionada con la amplitud de la onda sonora.
```

### 5 — El cuerpo de un instrumento
```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["resonancia", "caja_armonica"]

variables:
  instrumento_caja: uno_de([["violonchelo", "caja de madera"], ["tambor", "parche de piel"], ["trompeta", "tubo de metal"]])
  idx: uno_de([0, 1, 2])

enunciado: "¿Es cierto que la {instrumento_caja[idx][0]} actúa como resonador para amplificar el sonido producido por la fuente vibratoria?"

respuesta: verdadero
tipo: vf

explicacion: |
  Casi todos los instrumentos musicales poseen un cuerpo resonador (caja de madera, parche o tubo) que amplifica las vibraciones para que sean audibles.
```