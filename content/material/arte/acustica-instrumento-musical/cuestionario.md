# Arte — Acustica instrumento musical (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Revisado manualmente: Q6 tenía un error aritmético real (110.44 en
> vez de 119.17 según su propio cálculo), Q9 usaba una secuencia de
> orden con etiquetas duplicadas, Q21 mal etiquetaba la madera de la
> caja como el elemento vibrante en vez de las cuerdas, Q22/Q24/Q10
> tenían `respuestas_validas` sobre-permisivas que aceptaban valores de
> cualquier rama del sorteo, Q25 tenía concordancia de género rota.

---

### 1 — El origen del sonido

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["acustica", "sonido", "vibracion"]

respuesta: "vibracion"
tipo: completar
respuestas_validas:
  - "vibracion"
  - "vibración"

enunciado: "El sonido en un instrumento musical se produce mediante la ________ de un cuerpo u objeto."

explicacion: |
  El sonido es una onda mecánica que se propaga a través de un medio (como el aire) y es originado por la vibración de un objeto.
```

### 2 — Clasificación de instrumentos

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["clasificacion", "instrumentos"]

variables:
  escenario: uno_de([["trompeta", "viento"], ["guitarra", "cuerda"], ["timbal", "percusion"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["viento", "cuerda", "percusion"]

enunciado: "Un instrumento de tipo {escenario[0]} se clasifica principalmente como un instrumento de ________."

explicacion: |
  La clasificación tradicional de instrumentos se basa en el elemento que produce la vibración: aire (viento), cuerdas (cuerda) o membranas/cuerpos sólidos (percusión).
```

### 3 — Propiedades del sonido

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["frecuencia", "tono"]

respuesta: verdadero
tipo: vf

enunciado: "¿La frecuencia de una onda sonora determina la percepción del tono (agudo o grave)?"

explicacion: |
  Verdadero. A mayor frecuencia, el sonido se percibe más agudo; a menor frecuencia, más grave.
```

### 4 — El proceso de resonancia

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["resonancia", "amplificacion"]

respuesta: "caja de resonancia"
tipo: completar
respuestas_validas:
  - "caja de resonancia"
  - "caja de resonancia acústica"

enunciado: "En una guitarra acústica, el sonido producido por la cuerda es amplificado por la ________."

explicacion: |
  La caja de resonancia es el componente diseñado para amplificar las vibraciones de las cuerdas mediante la resonancia del aire en su interior.
```

### 5 — El espectro del sonido

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["armonicos", "timbre"]

respuesta_orden: ["frecuencia fundamental", "armónicos"]
tipo: ordenar

opciones_explicitas: ["frecuencia fundamental", "armónicos"]

enunciado: "Ordena los componentes que conforman el espectro de un sonido complejo, desde el componente más básico al que define el timbre:"

pasos:
  - "Identificar la nota base."
  - "Identificar los sobretonos que le dan color."

explicacion: |
  El sonido de un instrumento no es una sola frecuencia, sino una combinación de la frecuencia fundamental (que determina la nota) y una serie de armónicos (que determinan el timbre).
```

### 6 — Frecuencia de una cuerda vibrante

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["fisica_musical", "cuerdas", "calculo"]

variables:
  L: 0.65
  tension: 120
  densidad_lineal: 0.005

respuesta: 119.17
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una cuerda de una guitarra tiene una longitud de {L} metros, una tensión de {tension} N y una densidad lineal de {densidad_lineal} kg/m. ¿Cuál es la frecuencia fundamental de vibración de la cuerda en Hz?"

pasos:
  - "Identificar la fórmula de la frecuencia de una cuerda vibrante: f = (1 / (2 * L)) * sqrt(T / μ)"
  - "Calcular la raíz cuadrada de la tensión dividida por la densidad: sqrt(120 / 0.005) = sqrt(24000) ≈ 154.92"
  - "Dividir por el doble de la longitud: 154.92 / (2 * 0.65) = 154.92 / 1.3 ≈ 119.17"

explicacion: |
  La frecuencia fundamental de una cuerda tensa depende de su longitud, su tensión y su masa por unidad de longitud. A mayor tensión o menor longitud, la frecuencia es mayor (sonido más agudo).
```

### 7 — Tubos abiertos y armónicos

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["viento", "tubos", "armonicos"]

variables:
  v: 340
  L: 0.5
  idx: uno_de([0, 1])
  n_armonico: [1, 2][idx]
  tabla: ["340.0", "680.0"]

respuesta: tabla[idx]
tipo: mc
opciones_explicitas: ["170.0", "340.0", "510.0", "680.0"]

enunciado: "Un instrumento de viento funciona como un tubo abierto por ambos extremos con una longitud de {L} metros. Si la velocidad del sonido es de {v} m/s, ¿cuál es la frecuencia del {n_armonico}-ésimo armónico?"

explicacion: |
  Para un tubo abierto en ambos extremos, las frecuencias de los armónicos siguen la serie: f_n = n * (v / 2L).
  Si n=1 (fundamental): 340 / (2 * 0.5) = 340 Hz.
  Si n=2: 2 * 340 = 680 Hz.
```

### 8 — Relación de longitudes y octavas

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["percepcion", "octavas", "frecuencia"]

variables:
  f_original: 440

respuesta: falso
tipo: vf

enunciado: "Si duplicamos la longitud de una cuerda vibrante manteniendo la misma tensión y material, ¿la frecuencia resultante será el doble de la original (f_original * 2)?"

explicacion: |
  Falso. La frecuencia es inversamente proporcional a la longitud (f ∝ 1/L). Si la longitud se duplica, la frecuencia se reduce a la mitad (una octava más abajo).
```

### 9 — Formación de la onda sonora

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["ondas", "propiedades"]

respuesta_orden: ["Compresión", "Rarefacción"]
tipo: ordenar

enunciado: "Ordena las fases de las variaciones de presión en una onda longitudinal (como el sonido) desde el punto de máxima presión hasta el de mínima presión:"

opciones_explicitas: ["Compresión", "Rarefacción"]

explicacion: |
  El sonido es una onda mecánica longitudinal. Se propaga mediante ciclos de compresión (aumento de presión) y rarefacción (disminución de presión).
```

### 10 — El efecto de la columna de aire

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["tubos_cerrados", "armonicos"]

variables:
  v: 340
  L: 0.25
  idx: uno_de([0, 1])
  n_armonico: [1, 3][idx]
  tabla: ["340.0", "1020.0"]

respuesta: tabla[idx]
tipo: completar
respuestas_validas:
  - tabla[idx]

enunciado: "Un tubo cerrado en un extremo (como una flauta de pan o un clarinete en ciertas condiciones) de {L} metros. Para su {n_armonico}-ésimo armónico permitido, la frecuencia es de ___ Hz."

explicacion: |
  Para un tubo cerrado en un extremo, solo existen armónicos impares. La fórmula es f_n = n * v / (4 * L), donde n es 1, 3, 5...
  Si n=1: 340 / (4 * 0.25) = 340 Hz.
  Si n=3: 3 * 340 / (4 * 0.25) = 1020 Hz.
```

### 11 — El origen del sonido en instrumentos de cuerda

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["cuerdas", "vibracion", "mecanica"]

tipo: mc
opciones_explicitas: ["La vibración de la cuerda sola", "La vibración de la cuerda y la caja de resonancia", "La presión del aire en la habitación", "La tensión de los clavijas"]

enunciado: "Un error común es pensar que el sonido de una guitarra proviene únicamente de la vibración de sus cuerdas. Sin embargo, para que el sonido sea audible y con cuerpo, es fundamental la participación de la ___."

respuesta: "La vibración de la cuerda y la caja de resonancia"

explicacion: |
  La cuerda por sí sola mueve muy poco aire. La caja de resonancia actúa como un amplificador mecánico que acopla la vibración de la cuerda al aire circundante.
```

### 12 — El fenómeno de la resonancia

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["resonancia", "frecuencia", "armonicos"]

tipo: vf
respuesta: verdadero

enunciado: "Si un instrumento musical tiene una frecuencia natural que coincide con la frecuencia de una onda sonora externa, se produce un aumento significativo en la amplitud de la vibración. ¿Es esto el fenómeno de la resonancia?"

explicacion: |
  Correcto. La resonancia ocurre cuando un sistema vibra con mayor amplitud al ser excitado por una frecuencia cercana a su frecuencia natural.
```

### 13 — La relación entre longitud y altura

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["longitud", "tono", "frecuencia"]

tipo: completar
respuestas_validas:
  - "más agudo"
  - "más grave"

enunciado: "En un instrumento de viento como una flauta, si el músico tapa más agujeros (acortando la columna de aire efectiva), el sonido resultante será ___."

respuesta: "más agudo"

explicacion: |
  Al acortar la columna de aire, la frecuencia fundamental aumenta, lo que percibimos como un tono más agudo.
```

### 14 — El proceso de producción sonora

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["orden", "proceso", "sonido"]

tipo: ordenar
opciones_explicitas: ["Excitación (vibración de la fuente)", "Filtrado (modificación por el cuerpo)", "Radiación (emisión al aire)"]

respuesta_orden: ["Excitación (vibración de la fuente)", "Filtrado (modificación por el cuerpo)", "Radiación (emisión al aire)"]

enunciado: "Ordena las etapas correctas de la cadena de producción de sonido en un instrumento musical:"

explicacion: |
  Primero se genera la vibración (cuerda, caña, aire), luego el cuerpo del instrumento moldea ese sonido (timbre) y finalmente se radia al ambiente.
```

### 15 — Amplitud vs Tono

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["amplitud", "volumen", "frecuencia"]

tipo: mc
opciones_explicitas: ["La frecuencia de la onda", "La amplitud de la onda", "La forma de la onda", "La velocidad del sonido"]

enunciado: "Un error frecuente es confundir el tono (agudo/grave) con el volumen. El volumen o intensidad de un sonido depende de la ___."

respuesta: "La amplitud de la onda"

explicacion: |
  La frecuencia determina el tono (pitch), mientras que la amplitud (la altura de la onda) determina la intensidad o volumen.
```

### 16 — El origen del sonido en cuerdas

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["cuerdas", "vibracion"]

enunciado: "En un instrumento de cuerda pulsada, como la guitarra, el sonido se produce por la vibración de la cuerda. Sin embargo, para que este sonido sea audible y tenga cuerpo, es necesario que la cuerda transmita su vibración a un componente que actúe como amplificador natural. Este componente es la ___."

respuestas_validas:
  - "caja de resonancia"
  - "caja de resonancia acústica"
tipo: completar

explicacion: |
  La cuerda por sí sola mueve muy poco aire. La caja de resonancia amplifica las vibraciones mecánicas convirtiéndolas en ondas de presión sonora más potentes.
```

### 17 — Diferencia entre tono y timbre

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["timbre", "armonicos"]

enunciado: "Si dos instrumentos diferentes (por ejemplo, un piano y un violín) tocan exactamente la misma nota con la misma intensidad, ¿por qué percibimos que su sonido es distinto?"

opciones_explicitas: ["Porque tienen diferentes frecuencias fundamentales", "Porque tienen diferentes contenidos de armónicos (timbre)", "Porque uno es más fuerte que el otro", "Porque uno es más agudo que el otro"]
tipo: mc

respuesta: "Porque tienen diferentes contenidos de armónicos (timbre)"

explicacion: |
  El timbre es la cualidad que nos permite distinguir fuentes sonoras. Se debe a la combinación de la frecuencia fundamental y los armónicos que acompañan al sonido.
```

### 18 — El mecanismo de la madera

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

### 19 — El proceso de producción sonora

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "avanzado"
  tags: ["proceso_sonoro", "orden"]

enunciado: "Ordena los pasos que ocurren en un instrumento de viento cuando un músico sopla para producir un sonido:"

opciones_explicitas: ["Columna de aire en movimiento", "Vibración de la lengüeta o bisel", "Modificación del tono mediante los agujeros", "Proyección del sonido por la campana"]
tipo: ordenar

respuesta_orden: ["Columna de aire en movimiento", "Vibración de la lengüeta o bisel", "Modificación del tono mediante los agujeros", "Proyección del sonido por la campana"]

explicacion: |
  El flujo de aire genera la vibración inicial, la cual se modula al cambiar la longitud de la columna de aire y finalmente se proyecta.
```

### 20 — Resonancia y longitud

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["frecuencia", "longitud"]

enunciado: "En un instrumento de viento, si el músico tapa más agujeros (aumentando la longitud efectiva de la columna de aire), la frecuencia del sonido resultante ___."

tipo: completar
respuesta: "baja"

explicacion: |
  La frecuencia es inversamente proporcional a la longitud de la columna de aire resonante. A mayor longitud, menor frecuencia (sonido más grave).
```

### 21 — La vibración de la cuerda

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["guitarra", "cuerdas", "vibracion"]

variables:
  datos: [["guitarra acústica", "cuerdas de acero"], ["violín", "cuerdas de metal"], ["arpa", "cuerdas de nylon"]]
  idx: uno_de([0, 1, 2])

enunciado: "En una {datos[idx][0]}, el sonido se produce principalmente por la vibración de las {datos[idx][1]}."

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
explicacion: |
  El mecanismo de producción sonora depende del tipo de instrumento. En instrumentos de cuerda, la fuente primaria es la vibración de la cuerda.
```

### 22 — Resonancia en instrumentos de viento

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["flauta", "aire", "resonancia"]

variables:
  datos: [["flauta dulce", "columna de aire"], ["saxofón", "caña de madera"], ["trompeta", "labios del músico"]]
  idx: uno_de([0, 1, 2])

enunciado: "Al soplar en un {datos[idx][0]}, el sonido se genera mediante la vibración de la {datos[idx][1]} dentro del tubo."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  En los instrumentos de viento, la columna de aire que resuena dentro del tubo es la responsable de la amplificación y el tono.
```

### 23 — El proceso del sonido en un piano

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["piano", "mecanismo", "orden"]

enunciado: "Ordena el proceso de generación de sonido en un piano desde que se presiona la tecla hasta que el sonido sale al aire:"

opciones_explicitas: ["Presión de la tecla", "Golpe del martillo en la cuerda", "Vibración de la cuerda", "Resonancia en la caja de madera"]

respuesta_orden: ["Presión de la tecla", "Golpe del martillo en la cuerda", "Vibración de la cuerda", "Resonancia en la caja de madera"]
tipo: ordenar

explicacion: |
  El piano es un instrumento de percusión de cuerda: la tecla activa un mecanismo que hace que un martillo golpee la cuerda, la cual vibra y transmite su energía a la caja de resonancia.
```

### 24 — Intensidad y amplitud

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["intensidad", "volumen", "fisica"]

variables:
  datos: [["tocar fuerte", "mayor"], ["tocar suave", "menor"]]
  idx: uno_de([0, 1])

enunciado: "Si un músico decide {datos[idx][0]} la nota, la amplitud de la onda sonora será ___ que la anterior."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  La intensidad del sonido (lo que percibimos como volumen) está directamente relacionada con la amplitud de la onda sonora.
```

### 25 — El cuerpo de un instrumento

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["resonancia", "caja_armonica"]

variables:
  datos: [["violonchelo", "caja de madera"], ["tambor", "parche de piel"], ["trompeta", "tubo de metal"]]
  idx: uno_de([0, 1, 2])

enunciado: "¿Es cierto que un instrumento como {datos[idx][0]} posee un cuerpo resonador (en este caso, {datos[idx][1]}) que amplifica el sonido producido por su fuente vibratoria?"

respuesta: verdadero
tipo: vf

explicacion: |
  Casi todos los instrumentos musicales poseen un cuerpo resonador (caja de madera, parche o tubo) que amplifica las vibraciones para que sean audibles.
```
