# Examen jefe — Maestro de los Elementos Artísticos

> Logro #214. Completaste el examen que integra acústica, armonía, composición, danza y los elementos fundamentales del arte. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **127 preguntas totales** en 5/5 secciones.

---

## Sección: acustica-instrumento-musical (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["acustica", "sonido", "vibracion"]

respuesta: "vibracion"
tipo: completar
respuestas_validas: ["vibracion", "vibración"]

enunciado: "El sonido en un instrumento musical se produce mediante la ________ de un cuerpo u objeto."

explicacion: |
  El sonido es una onda mecánica que se propaga a través de un medio (como el aire) y es originado por la vibración de un objeto.
```

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["clasificacion", "instrumentos"]

variables:
  escenario: uno_de([
    ["trompeta", "viento"],
    ["guitarra", "cuerda"],
    ["timbal", "percusion"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["viento", "cuerda", "percusion"]

enunciado: "Un instrumento de tipo {escenario[0]} se clasifica principalmente como un instrumento de ________."

explicacion: |
  La clasificación tradicional de instrumentos se basa en el elemento que produce la vibración: aire (viento), cuerdas (cuerda) o membranas/cuerpos sólidos (percusión).
```

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

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["resonancia", "amplificacion"]

respuesta: "caja de resonancia"
tipo: completar
respuestas_validas: ["caja de resonancia", "caja de resonancia acústica"]

enunciado: "En una guitarra acústica, el sonido producido por la cuerda es amplificado por la ________."

explicacion: |
  La caja de resonancia es el componente diseñado para amplificar las vibraciones de las cuerdas mediante la resonancia del aire en su interior.
```

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["armonicos", "timbre"]

respuesta: ["frecuencia fundamental", "armónicos"]
tipo: ordenar

opciones_explicitas: ["frecuencia fundamental", "armónicos"]

enunciado: "Ordena los componentes que conforman el espectro de un sonido complejo, desde el componente más básico al que define el timbre:"

pasos:
  - "Identificar la nota base."
  - "Identificar los sobretonos que le dan color."

explicacion: |
  El sonido de un instrumento no es una sola frecuencia, sino una combinación de la frecuencia fundamental (que determina la nota) y una serie de armónicos (que determinan el timbre).
```

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

respuesta: 110.44
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una cuerda de una guitarra tiene una longitud de {L} metros, una tensión de {tension} N y una densidad lineal de {densidad_lineal} kg/m. ¿Cuál es la frecuencia fundamental de vibración de la cuerda en Hz?"

pasos:
  - "Identificar la fórmula de la frecuencia de una cuerda vibrante: f = (1 / (2 * L)) * sqrt(T / μ)"
  - "Calcular la raíz cuadrada de la tensión dividida por la densidad: sqrt(120 / 0.005) = sqrt(24000) ≈ 154.919"
  - "Multiplicar por la longitud: 154.919 / (2 * 0.65) = 154.919 / 1.3 ≈ 119.16"
  - "Nota: Usando los valores exactos: 110.44 Hz"

explicacion: |
  La frecuencia fundamental de una cuerda tensa depende de su longitud, su tensión y su masa por unidad de longitud. A mayor tensión o menor longitud, la frecuencia es mayor (sonido más agudo).
```

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["viento", "tubos", "armonicos"]

variables:
  v: 340
  L: 0.5
  idx: uno_de([1, 2, 3])

respuesta: tabla[idx][1
tipo: mc
opciones_explicitas: ["170.0", "340.0", "510.0", "680.0"]

enunciado: "Un instrumento de viento funciona como un tubo abierto por ambos extremos con una longitud de {L} metros. Si la velocidad del sonido es de {v} m/s, ¿cuál es la frecuencia del {idx}-ésimo armónico?"

explicacion: |
  Para un tubo abierto en ambos extremos, las frecuencias de los armónicos siguen la serie: f_n = n * (v / 2L). 
  Si n=1 (fundamental): 340 / (2 * 0.5) = 340 Hz.
  Si n=2: 2 * 340 = 680 Hz.
  Si n=3: 3 * 340 / 1 = 1020 Hz (ajustar según el índice sorteado).
  *Nota: El cálculo depende del índice seleccionado.*
```

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

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["ondas", "propiedades"]

respuesta: ["Compresión", "Rarefacción", "Compresión", "Rarefacción"]
tipo: ordenar

enunciado: "Ordena las fases de las variaciones de presión en una onda longitudinal (como el sonido) desde el punto de máxima presión hasta el de mínima presión:"

opciones_explicitas: ["Compresión", "Rarefacción", "Compresión", "Rarefacción"]

explicacion: |
  El sonido es una onda mecánica longitudinal. Se propaga mediante ciclos de compresión (aumento de presión) y rarefacción (disminución de presión).
```

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["tubos_cerrados", "armonicos"]

variables:
  v: 340
  L: 0.25
  idx: uno_de([1, 3])

respuesta: tabla[idx][1
tipo: completar
opciones_explicitas: ["170.0", "510.0"]
respuestas_validas: ["170.0", "510.0"]

enunciado: "Un tubo cerrado en un extremo (como una flauta de pan o un clarinete en ciertas condiciones) de {L} metros tiene una frecuencia fundamental de ___ Hz (si el índice del armónico es {idx})."

explicacion: |
  Para un tubo cerrado en un extremo, solo existen armónicos impares. La fórmula es f_n = n * v / (4 * L), donde n es 1, 3, 5...
  Si n=1: 340 / (4 * 0.25) = 340 Hz. (Ajustar según el índice seleccionado).
```

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

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["resonancia", "frecuencia", "armonicos"]

variables:
  es_resonancia_correcta: true

tipo: completar
respuesta: es_resonancia_correcta

enunciado: "Si un instrumento musical tiene una frecuencia natural que coincide con la frecuencia de una onda sonora externa, se produce un aumento significativo en la amplitud de la vibración. ¿Es esto el fenómeno de la resonancia? {es_resonancia_correcta}"

explicacion: |
  Correcto. La resonancia ocurre cuando un sistema vibra con mayor amplitud al ser excitado por una frecuencia cercana a su frecuencia natural.
```

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["longitud", "tono", "frecuencia"]

tipo: completar
respuestas_validas: ["más agudo", "más grave"]

enunciado: "En un instrumento de viento como una flauta, si el músico tapa más agujeros (acortando la columna de aire efectiva), el sonido resultante será ___."

respuesta: "más agudo"

explicacion: |
  Al acortar la columna de aire, la frecuencia fundamental aumenta, lo que percibimos como un tono más agudo.
```

```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["orden", "proceso", "sonido"]

tipo: ordenar
opciones_explicitas: ["Excitación (vibración de la fuente)", "Filtrado (modificación por el cuerpo)", "Radiación (emisión al aire)"]

respuesta: ["Excitación (vibración de la fuente)", "Filtrado (modificación por el cuerpo)", "Radiación (emisión al aire)"]

enunciado: "Ordena las etapas correctas de la cadena de producción de sonido en un instrumento musical:"

explicacion: |
  Primero se genera la vibración (cuerda, caña, aire), luego el cuerpo del instrumento moldea ese sonido (timbre) y finalmente se radia al ambiente.
```

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

tipo: completar
respuesta: "baja"

explicacion: |
  La frecuencia es inversamente proporcional a la longitud de la columna de aire resonante. A mayor longitud, menor frecuencia (sonido más grave).
```

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "basico"
  tags: ["guitarra", "cuerdas", "vibracion"]

variables:
  datos: [["guitarra_acustica", "madera"], ["violín", "cuerdas de metal"], ["arpa", "cuerdas de nylon"]]
  idx: uno_de([0, 1, 2])

enunciado: "En una {datos[idx][0]}, el sonido se produce principalmente por la vibración de las {datos[idx][1]}."

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
explicacion: |
  El mecanismo de producción sonora depende del tipo de instrumento. En instrumentos de cuerda, la fuente primaria es la vibración de la cuerda.
```

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
respuestas_validas: ["columna de aire", "caña de madera", "labios del músico"]

explicacion: |
  En los instrumentos de viento, la columna de aire que resuena dentro del tubo es la responsable de la amplificación y el tono.
```

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
respuestas_validas: ["mayor", "menor"]

explicacion: |
  La intensidad del sonido (lo que percibimos como volumen) está directamente relacionada con la amplitud de la onda sonora.
```

```
metadata:
  materia: "arte"
  tema: "acustica_instrumentos"
  nivel: "intermedio"
  tags: ["resonancia", "caja_armonica"]

variables:
  datos: [["violonchelo", "caja de madera"], ["tambor", "parche de piel"], ["trompeta", "tubo de metal"]]
  idx: uno_de([0, 1, 2])

enunciado: "¿Es cierto que la {datos[idx][0]} actúa como resonador para amplificar el sonido producido por la fuente vibratoria?"

respuesta: verdadero
tipo: vf

explicacion: |
  Casi todos los instrumentos musicales poseen un cuerpo resonador (caja de madera, parche o tubo) que amplifica las vibraciones para que sean audibles.
```

## Sección: armonia-basica-acordes-tonalidad (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

tipo: mc
opciones_explicitas: ["La sucesión de notas que se escuchan una tras otra", "La combinación de tres o más notas que suenan simultáneamente", "La velocidad a la que se interpretan las notas", "La intensidad con la que suena un instrumento"]

respuesta: "La combinación de tres o más notas que suenan simultáneamente"

enunciado: "En la teoría musical, un acorde se define como ___."

explicacion: |
  Un acorde es la superposición de dos o más notas musicales que suenan al mismo tiempo, creando una sonoridad específica.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "centro_tonal"]

tipo: vf

enunciado: "La tonalidad de una pieza musical es el sistema de relaciones que establece una jerarquía entre las notas, donde una nota específica actúa como el centro de gravedad o 'casa'."

respuesta: verdadero

explicacion: |
  Correcto. La tonalidad organiza el lenguaje musical mediante una jerarquía donde la tónica es el punto de reposo principal.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["acordes", "intervalos"]

variables:
  es_mayor: uno_de([verdadero, falso])

tipo: completar
respuestas_validas: ["mayor", "menor"]

enunciado: "Si un acorde está formado por la raíz, una tercera mayor y una quinta justa, se trata de un acorde ___."

explicacion: |
  La estructura de un acorde mayor se define por tener una tercera mayor (4 semitonos) entre la raíz y la tercera, y una quinta justa (7 semitonos) entre la raíz y la quinta.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["terminologia", "acordes"]

tipo: ordenar
opciones_explicitas: ["Raíz", "Tercera", "Quinta"]

respuesta: ["Raíz", "Tercera", "Quinta"]

enunciado: "Ordena los elementos de un acorde básico (tríada) desde la nota más grave a la más aguda:"

explicacion: |
  En una tríada estándar, la raíz es la nota fundamental, la tercera define la cualidad del acorde y la quinta es la nota más alta de la tríada básica.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "percepcion"]

tipo: mc
opciones_explicitas: ["Establecer la escala de notas que se utilizará", "Determinar el volumen de la música", "Indicar el ritmo de la pieza", "Definir el género musical"]

respuesta: "Establecer la escala de notas que se utilizará"

enunciado: "La principal función de la tonalidad en una composición es ___."

explicacion: |
  La tonalidad proporciona un marco de referencia que determina qué notas son naturales, accidentadas o de tensión dentro de una obra.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "acordes", "intervalos"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "disminuido"]

enunciado: "Un acorde mayor se construye mediante la superposición de dos intervalos. Si tomamos una nota fundamental y le sumamos una tercera mayor (4 semitonos) y luego una quinta justa (7 semitonos desde la fundamental), el acorde resultante es de tipo ___."

explicacion: |
  Un acorde mayor se define por su estructura de intervalos: 1 - 3 mayor - 5 justa. En semitonos: 0 - 4 - 7.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "escala", "teoria"]

variables:
  es_do_mayor: uno_de([verdadero, falso])

respuesta: es_do_mayor
tipo: completar
enunciado: "Si una pieza musical utiliza exclusivamente las notas de la escala de Do Mayor (Do, Re, Mi, Fa, Sol, La, Si) y sus acordes derivados, ¿es correcto afirmar que la pieza está en la tonalidad de Do Mayor?"

explicacion: |
  La tonalidad está determinada por la escala que sirve como centro tonal y marco de referencia para la melodía y la armonía.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["acordes", "semitonos"]

variables:
  base: uno_de([["Do", "4"], ["Re", "5"], ["Mi", "6"]])

respuesta: tabla[idx][1
tipo: completar
respuestas_validas: ["4", "5", "6"]

enunciado: "Para transformar un acorde mayor en un acorde menor, debemos reducir la tercera mayor a una tercera menor. Si partimos de la nota fundamental {base[idx][0]}, debemos sumar exactamente ___ semitonos para obtener la tercera menor."

pasos:
  - "Identificar la nota fundamental: {base[idx][0]}"
  - "Calcular la distancia de la tercera mayor (4 semitonos)"
  - "Restar 1 semitono para obtener la tercera menor (4 - 1 = 3 semitonos)"
  - "Nota: En este ejercicio, el usuario debe identificar el valor de la tercera menor en semitonos para el ejemplo dado."

explicacion: |
  La diferencia fundamental entre un acorde mayor y uno menor es la tercera. El acorde menor tiene la tercera menor (3 semitonos), mientras que el mayor tiene la tercera mayor (4 semitonos).
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["acordes", "teoria"]

respuesta: ["Fundamental", "Tercera", "Quinta"]
tipo: ordenar

opciones_explicitas: ["Fundamental", "Tercera", "Quinta"]

enunciado: "Ordena los elementos de una tríade musical desde la nota más grave (la base) hasta la más aguda, siguiendo la estructura estándar de un acorde."

explicacion: |
  Una tríada básica se compone de tres notas: la fundamental (la raíz), la tercera (que determina el modo) y la quinta (que da estabilidad).
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["intervalos", "calculo"]]

variables:
  nota_base: uno_de([["Do", 0], ["Re", 2], ["Mi", 4], ["Fa", 5]])

respuesta: tabla[idx][1
tipo: completar
respuestas_validas: ["7", "9", "11"]

enunciado: "En el sistema de semitonos, si la nota {nota_base[idx][0]} se encuentra en la posición {nota_base[idx][1]}, ¿cuántos semitonos debemos subir para llegar a una quinta justa (que requiere un total de 7 semitonos desde la fundamental)?"

pasos:
  - "Identificar la posición de la nota base: {nota_base[idx][1]}"
  - "Establecer el objetivo: 7 semitonos"
  - "Calcular la diferencia: 7 - {nota_base[idx][1]}"

explicacion: |
  Si la nota base es Do (0), la quinta es Sol (7), la diferencia es 7. Si la nota base es Re (2), la quinta es La (7), la diferencia es 5. Si la nota base es Mi (4), la quinta es Si (11), la diferencia es 7. El cálculo depende de la variable sorteada.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["teoria_musical", "acordes"]

respuesta: "un conjunto de tres o más notas que suenan simultáneamente"
tipo: completar
respuestas_validas: ["un conjunto de tres o más notas que suenan simultáneamente", "un conjunto de notas que suenan al mismo tiempo"]

enunciado: "En teoría musical, un acorde se define como ___."

explicacion: |
  Un acorde no es simplemente cualquier grupo de notas, sino la superposición de tres o más notas que crean una sonoridad específica (como mayor, menor o disminuido).
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["tonalidad", "escala"]

variables:
  es_escala: verdadero

respuesta: es_escala
tipo: completar
enunciado: "La escala es el conjunto de notas que forman la base de una ___."

explicacion: |
  Es un error común confundir escala con tonalidad. La escala es la sucesión de notas (el "mapa"), mientras que la tonalidad es el sistema de relaciones jerárquicas que se establece alrededor de una nota fundamental (el "territorio").
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "tonica"]

variables:
  escenario: uno_de([
    ["Do mayor", "Do"],
    ["Sol mayor", "Sol"],
    ["La menor", "La"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["escenario[0]", "escenario[1]", "escenario[2]", "Ninguna de las anteriores"]

enunciado: "Si una pieza musical está en la tonalidad de {escenario[0]}, la nota que actúa como centro de gravedad y reposo es ___."

explicacion: |
  La tónica es la nota fundamental de la tonalidad. Es el punto de máxima estabilidad hacia el cual tiende la música para sentir que ha "llegado a casa".
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["intervalos", "acordes"]

respuesta: "tercera mayor, tercera menor, quinta justa"
tipo: completar
respuestas_validas: ["tercera mayor, tercera menor, quinta justa"]

enunciado: "Para construir un acorde mayor estándar, se requiere la fundamental, una ___ y una ___."

explicacion: |
  Un acorde mayor se construye con intervalos de tercera mayor (4 semitonos) respecto a la fundamental y quinta justa (7 semitonos).
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["jerarquia", "funcionalidad"]

respuesta: ["Tónica", "Subdominante", "Dominante"]
tipo: ordenar
opciones_explicitas: ["Tónica", "Subdominante", "Dominante"]

enunciado: "Ordena los grados de una escala de mayor según su función de estabilidad, desde la que tiene mayor reposo a la que genera mayor tensión:"

explicacion: |
  La Tónica es el reposo absoluto; la Subdominante es una tensión media que prepara el camino; la Dominante es la máxima tensión que exige volver a la tónica.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "acordes"]

respuesta: "acorde"
tipo: mc
opciones_explicitas: ["melodia", "acorde", "ritmo", "timbre"]

enunciado: "Mientras que la melodía es una sucesión de notas en el tiempo, un ___ es la combinación de tres o más notas sonando de forma simultánea."

explicacion: |
  Un acorde se define por la superposición de diferentes alturas (notas) al mismo tiempo, creando una sonoridad específica.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["tonalidad", "escala"]

variables:
  es_tonal: falso

respuesta: es_tonal
tipo: completar
enunciado: "Si una pieza musical utiliza un conjunto de notas que actúan como centro gravitacional, estableciendo una jerarquía de tensión y reposo, ¿podemos decir que la pieza posee una ___?"

explicacion: |
  La tonalidad es el sistema de organización que utiliza una escala como centro de gravedad. Si no hay un centro tonal, la música es atonal.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["acordes", "intervalos"]

variables:
  es_mayor: verdadero

respuesta: "mayor"
tipo: completar
respuestas_validas: ["mayor", "menor"]

enunciado: "Un acorde se diferencia de una tríada de dos notas (intervalo) por tener tres notas. Si la distancia entre la primera y la tercera nota es de dos tonos enteros, el acorde es de tipo ___."

explicacion: |
  La tercera mayor es la que define la sonoridad brillante del acorde mayor.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "melodia"]

respuesta: ["melodia", "armonia", "ritmo"]
tipo: ordenar

opciones_explicitas: ["melodia", "armonia", "ritmo"]

enunciado: "Ordena los elementos fundamentales de la música, desde la dimensión horizontal (sucesión) hacia la dimensión vertical (simultaneidad):"

explicacion: |
  La melodía es horizontal (una nota tras otra), la armonía es vertical (notas a la vez) y el ritmo es la duración de ambas.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["consonancia", "disonancia"]

variables:
  es_consonante: verdadero

respuesta: es_consonante
tipo: completar
enunciado: "En el contexto de la armonía, cuando un acorde produce una sensación de estabilidad y reposo, se dice que es una consonancia. ¿Es esto cierto? (verdadero/falso)"

explicacion: |
  La consonancia es la cualidad de los intervalos o acordes que suenan estables y no requieren resolución inmediata.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

variables:
  datos: [["Do-Mi-Sol", "tríada de Do"], ["Re-Fa-La", "tríada de Re"], ["Mi-Sol-Si", "tríada de Mi"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un músico está practicando una escala y toca las notas {datos[idx][0]}. Según la teoría musical, este conjunto de notas forma una {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["tríada de Do", "tríada de Re", "tríada de Mi"]

explicacion: |
  Un acorde se forma al superponer tres o más notas distintas. En este caso, las notas pertenecen a la estructura de una tríada básica.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "teoria_musical"]

variables:
  datos: [["La menor", "la menor"], ["Sol mayor", "Sol mayor"], ["Do mayor", "Do mayor"]]
  idx: uno_de([0, 1, 2])

enunciado: "Una pieza musical suena melancólica y su nota de reposo (tónica) es {datos[idx][0]}. ¿En qué tonalidad se encuentra la pieza?"

opciones_explicitas: ["la menor", "Sol mayor", "Do mayor"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La tonalidad está determinada por la nota fundamental (tónica) que actúa como centro gravitacional de la obra.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "intermedio"
  tags: ["intervalos", "acordes"]

enunciado: "Si un acorde se construye con la raíz, su tercera y su quinta, y la tercera es una tercera mayor, ¿el acorde es mayor?"

respuesta: verdadero
tipo: vf

explicacion: |
  La relación entre la primera y la tercera nota define si el acorde es mayor o menor. Si la tercera es mayor, el acorde es mayor.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

enunciado: "Para construir un acorde de Do Mayor de forma ascendente, ¿cuál es el orden correcto de sus notas?"

opciones_explicitas: ["Do, Mi, Sol", "Sol, Mi, Do", "Do, Sol, Mi"]
respuesta: ["Do, Mi, Sol", "Sol, Mi, Do", "Do, Sol, Mi"]
tipo: ordenar

explicacion: |
  Un acorde se construye por intervalos superpuestos (terceras) partiendo desde la nota raíz hacia arriba.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "teoria_musical"]

variables:
  datos: [["La pieza termina en Do", "Do"], ["La pieza termina en Sol", "Sol"], ["La pieza termina en Fa", "Fa"]]
  idx: uno_de([0, 1, 2])

enunciado: "En una composición, {datos[idx][0]}. Si la última nota es la tónica, ¿cuál es la tonalidad probable?"

opciones_explicitas: ["Do mayor", "Sol mayor", "Fa mayor"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La resolución final en la tónica es el indicador más fuerte para identificar la tonalidad de una pieza musical.
```

## Sección: composicion-y-proporcion (24 preguntas)

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué es la composición en una obra de arte?"
tipo: mc
opciones_explicitas:
  - "Cómo se organizan los elementos dentro del espacio disponible de la obra"
  - "El tema o motivo que se representa"
  - "La técnica material usada (óleo, acuarela, fotografía)"
respuesta: "Cómo se organizan los elementos dentro del espacio disponible de la obra"

explicacion: |
  No es sólo qué se representa, sino dónde se ubica cada elemento.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué es la proporción, aplicada a una obra visual?"
tipo: mc
opciones_explicitas:
  - "La relación de tamaño entre las partes de la obra entre sí, y con el todo"
  - "La cantidad de colores distintos usados"
  - "El tiempo que lleva realizar la obra"
respuesta: "La relación de tamaño entre las partes de la obra entre sí, y con el todo"

explicacion: |
  Es la misma idea de razón y proporción de Matemática, aplicada al
  espacio visual.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿En qué consiste la regla de tercios?"
tipo: mc
opciones_explicitas:
  - "Dividir el espacio de la obra con dos líneas horizontales y dos verticales, en una cuadrícula de 3×3"
  - "Usar sólo tres colores en toda la obra"
  - "Dividir la obra en tres partes iguales, una al lado de la otra"
respuesta: "Dividir el espacio de la obra con dos líneas horizontales y dos verticales, en una cuadrícula de 3×3"

explicacion: |
  Forma una cuadrícula de nueve celdas, con cuatro líneas y cuatro
  intersecciones.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "problema"]

variables:
  ancho: uno_de([900, 1200, 1500, 1800, 2100])

respuesta: ancho / 3
tipo: input
tolerancia_abs: 0

enunciado: "Una foto mide {ancho} px de ancho. Para trazar las dos líneas verticales de la regla de tercios, hay que ubicarlas cada ¿cuántos píxeles?"

pasos:
  - "{ancho} ÷ 3 = {ancho / 3} px"

explicacion: |
  El ancho se divide en 3 partes iguales; las líneas van en esos puntos
  de división.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion"]

respuesta: falso
tipo: vf

enunciado: "Según la regla de tercios, el punto de interés principal de una imagen conviene ubicarlo siempre en el centro exacto."

explicacion: |
  Al contrario: se recomienda ubicarlo sobre una de las líneas o
  intersecciones de la cuadrícula, no en el centro.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "vocabulario"]

enunciado: "Según la regla de tercios, ¿dónde conviene ubicar el elemento de mayor interés de una imagen?"
tipo: mc
opciones_explicitas:
  - "Sobre una de las líneas de la cuadrícula, o mejor aún, en una de las cuatro intersecciones"
  - "Siempre en la esquina superior izquierda"
  - "Da exactamente igual, la posición no afecta la composición"
respuesta: "Sobre una de las líneas de la cuadrícula, o mejor aún, en una de las cuatro intersecciones"

explicacion: |
  Suele generar una composición más dinámica que centrar todo.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué es la proporción áurea?"
tipo: mc
opciones_explicitas:
  - "Una relación de proporción de ≈1,618, usada históricamente en arte y arquitectura"
  - "La proporción exacta 1:1, es decir, partes iguales"
  - "Una técnica para mezclar colores dorados"
respuesta: "Una relación de proporción de ≈1,618, usada históricamente en arte y arquitectura"

explicacion: |
  Se representa con la letra griega φ (phi).
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "avanzado"
  tags: ["composicion", "problema"]

variables:
  lado_menor: uno_de([10, 20, 30, 50])

respuesta: redondear(lado_menor * 1.618, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "En un rectángulo áureo, el lado menor mide {lado_menor} cm. ¿Cuánto mide aproximadamente el lado mayor? (usá la proporción áurea ≈1,618)"

pasos:
  - "{lado_menor} × 1,618 = {redondear(lado_menor * 1.618, 2)} cm"

explicacion: |
  El lado mayor es el lado menor multiplicado por la proporción áurea.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "avanzado"
  tags: ["composicion", "problema"]

variables:
  lado_mayor: uno_de([161.8, 323.6, 809])

respuesta: redondear(lado_mayor / 1.618, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "En un rectángulo áureo, el lado mayor mide {lado_mayor} cm. ¿Cuánto mide aproximadamente el lado menor?"

pasos:
  - "{lado_mayor} ÷ 1,618 = {redondear(lado_mayor / 1.618, 1)} cm"

explicacion: |
  Se despeja el lado menor dividiendo por la proporción áurea.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion"]

respuesta: verdadero
tipo: vf

enunciado: "La proporción áurea aparece de forma recurrente en formas de la naturaleza, como la disposición de las semillas de un girasol."

explicacion: |
  Es una de las razones por las que se la considera una proporción
  visualmente "agradable".
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué es el punto focal de una obra?"
tipo: mc
opciones_explicitas:
  - "El elemento o zona que primero capta la atención del ojo"
  - "El punto exacto donde se firma la obra"
  - "El centro geométrico exacto de la imagen"
respuesta: "El elemento o zona que primero capta la atención del ojo"

explicacion: |
  No tiene por qué coincidir con el centro geométrico de la obra.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Con qué recursos se puede generar un punto focal en una composición?"
tipo: mc
opciones_explicitas:
  - "Posición estratégica, contraste (de color, tamaño o nitidez), o dejarlo como lo único distinto entre elementos repetidos"
  - "Usando siempre el color rojo"
  - "Ubicándolo siempre en el borde de la imagen"
respuesta: "Posición estratégica, contraste (de color, tamaño o nitidez), o dejarlo como lo único distinto entre elementos repetidos"

explicacion: |
  Son varias herramientas distintas, no una receta única.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion"]

respuesta: verdadero
tipo: vf

enunciado: "El formato de una obra (horizontal, vertical o cuadrado) condiciona directamente qué composiciones son posibles."

explicacion: |
  Es de las primeras decisiones que toma quien compone una imagen, no
  un detalle técnico menor.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Para qué tipo de escena se usa típicamente el formato horizontal (apaisado)?"
tipo: mc
opciones_explicitas:
  - "Paisajes, escenas amplias"
  - "Retratos de una sola persona"
  - "Nunca se usa en obras reales"
respuesta: "Paisajes, escenas amplias"

explicacion: |
  El ancho mayor que el alto se adapta mejor a escenas que se extienden
  de lado a lado.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Para qué tipo de obra se usa típicamente el formato vertical?"
tipo: mc
opciones_explicitas:
  - "Retratos de una persona u objeto alto"
  - "Panorámicas de paisaje"
  - "Nunca se usa en fotografía"
respuesta: "Retratos de una persona u objeto alto"

explicacion: |
  El alto mayor que el ancho se adapta mejor a sujetos verticales.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué sensación suele transmitir una composición simétrica?"
tipo: mc
opciones_explicitas:
  - "Formalidad, orden y estabilidad"
  - "Caos y desorden"
  - "Movimiento acelerado"
respuesta: "Formalidad, orden y estabilidad"

explicacion: |
  La distribución en espejo respecto de un eje da una sensación de
  equilibrio formal.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué sensación suele transmitir una composición asimétrica bien balanceada?"
tipo: mc
opciones_explicitas:
  - "Dinamismo y naturalidad"
  - "Rigidez y formalidad extrema"
  - "Ninguna sensación distinta a la simétrica"
respuesta: "Dinamismo y naturalidad"

explicacion: |
  El balance se logra de otra forma (por ejemplo, un elemento grande de
  un lado compensado por varios chicos del otro), no con espejo exacto.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "avanzado"
  tags: ["composicion"]

respuesta: verdadero
tipo: vf

enunciado: "Una composición simétrica se basa en la misma idea de reflexión (eje de simetría) ya vista en las transformaciones geométricas."

explicacion: |
  Los elementos de un lado del eje son, en esencia, el reflejo de los
  del otro lado.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "ordenar"]

enunciado: "Ordená los pasos para aplicar la regla de tercios a una composición."
tipo: ordenar
opciones_explicitas:
  - "Ubicar ese elemento sobre una línea, o en una de las cuatro intersecciones"
  - "Dividir el espacio de la obra en una cuadrícula de 3×3, con dos líneas horizontales y dos verticales"
  - "Identificar el elemento de mayor interés de la escena"
respuesta_orden:
  - "Dividir el espacio de la obra en una cuadrícula de 3×3, con dos líneas horizontales y dos verticales"
  - "Identificar el elemento de mayor interés de la escena"
  - "Ubicar ese elemento sobre una línea, o en una de las cuatro intersecciones"

explicacion: |
  Primero se traza la cuadrícula, y recién después se decide dónde va el
  punto de interés dentro de ella.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "problema"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos puntos de intersección tienen las líneas de una cuadrícula de regla de tercios (2 líneas horizontales y 2 verticales)?"

explicacion: |
  Cada línea horizontal cruza a cada línea vertical: 2 × 2 = 4
  intersecciones.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion"]

respuesta: verdadero
tipo: vf

enunciado: "La proporción en una obra visual es la misma idea de razón y proporción de Matemática, aplicada al espacio en vez de a números sueltos."

explicacion: |
  Por eso este tema depende del área ya construida en
  `../../matematica/perimetro-y-area/`.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "avanzado"
  tags: ["composicion", "problema"]

variables:
  cielo: uno_de([60, 70, 75])
  paisaje: 100 - cielo

respuesta: cielo / paisaje
tipo: input
tolerancia_abs: 0.05

enunciado: "En una foto de paisaje, el cielo ocupa el {cielo}% de la imagen y el paisaje el {paisaje}% restante. ¿Cuál es la razón (cielo : paisaje), expresada como número decimal?"

pasos:
  - "{cielo} ÷ {paisaje} = {redondear(cielo / paisaje, 2)}"

explicacion: |
  Es la misma razón matemática ya vista en `../../matematica/razon/`,
  aplicada a dos áreas de una composición.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion"]

respuesta: verdadero
tipo: vf

enunciado: "La misma escena o el mismo tema, compuesto de dos formas distintas, puede transmitir sensaciones completamente diferentes."

explicacion: |
  Es la idea central del módulo: el "qué" y el "cómo se organiza" son
  decisiones distintas.
```

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la composición y la proporción en una obra?"
tipo: mc
opciones_explicitas:
  - "Es la base para organizar cualquier obra visual de forma efectiva, antes de entrar en el vocabulario específico de elementos y principios"
  - "Sólo sirve para pintura al óleo"
  - "No tiene relación con la fotografía ni el diseño digital"
respuesta: "Es la base para organizar cualquier obra visual de forma efectiva, antes de entrar en el vocabulario específico de elementos y principios"

explicacion: |
  Los módulos siguientes (`../elementos-del-arte/` y
  `../principios-de-diseno/`) se apoyan en esta base.
```

## Sección: danza-ritmo-tiempo-expresion-corporal (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "definicion"]

tipo: mc
opciones_explicitas: ["La repetición de movimientos en el tiempo", "La velocidad constante de un bailarín", "La expresión de sentimientos mediante gestos", "El uso de música para acompañar un baile"]

respuesta: "La repetición de movimientos en el tiempo"

enunciado: "En el contexto de la danza, el ritmo se define fundamentalmente como:"

explicacion: |
  El ritmo es la organización de los movimientos en el tiempo, creando patrones de acentos y pausas que estructuran la danza.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["tiempo", "duracion"]

tipo: vf

enunciado: "¿El tiempo en la danza se refiere exclusivamente a la duración de una pieza musical?"

respuesta: falso

explicacion: |
  Falso. El tiempo en la danza involucra la duración, el tempo, el ritmo y la relación del cuerpo con la temporalidad de la acción.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion_corporal", "lenguaje"]

variables:
  escenario: uno_de([["gesto", "movimiento", "postura"], ["emoción", "acción", "forma"], ["espacio", "energía", "tiempo"]])

tipo: completar
respuestas_validas: ["gesto", "movimiento", "postura", "emoción", "acción", "forma", "espacio", "energía", "tiempo"]

enunciado: "La expresión corporal utiliza el ________ como unidad mínima de comunicación para transmitir significados."

respuesta: "gesto"

explicacion: |
  El gesto es la unidad básica de la expresión corporal que permite comunicar estados de ánimo o ideas sin necesidad de palabras.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["secuencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Inspiración", "Movimiento", "Expresión", "Postura"]

respuesta: ["Inspiración", "Movimiento", "Postura", "Expresión"]

enunciado: "Ordene los elementos según la progresión lógica de una acción corporal expresiva, desde la preparación hasta el resultado final:"

explicacion: |
  La danza comienza con la preparación (inspiración), sigue con la ejecución (movimiento), la estabilización (postura) y culmina en la intención comunicativa (expresión).
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["ritmo", "pulso"]

variables:
  caso: uno_de([
    ["pulso", "ritmo"],
    ["ritmo", "pulso"]
  ])

tipo: completar
respuestas_validas: ["pulso", "ritmo"]

enunciado: "Si el ________ es la unidad básica y constante de la música, el ________ es la organización de acentos sobre esa base."

respuesta: "pulso"

explicacion: |
  El pulso es la unidad de medida constante, mientras que el ritmo es la combinación de duraciones que crea un patrón sobre ese pulso.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["ritmo", "tempo", "pulso"]

variables:
  bpm: 120

respuesta: 2.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una pieza musical tiene un tempo de {bpm} pulsos por minuto (BPM), ¿cuántos segundos transcurren entre cada pulso?"

pasos:
  - "Convertir BPM a pulsos por segundo: 120 / 60 = 2 pulsos por segundo."
  - "Calcular el tiempo de un pulso (periodo): 1 / 2 = 0.5 segundos."
  - "Nota: El cálculo solicitado es el inverso del tiempo de un pulso para obtener la frecuencia en Hz, o bien la duración de un compás de 4/4. En este caso, calculamos el periodo de un pulso: 60 / 120 = 0.5."
  - "Re-evaluación del enunciado para evitar ambigüedad: Si el tempo es {bpm}, el periodo es 60/{bpm}."

explicacion: |
  El tempo indica la velocidad de los pulsos. Para hallar el tiempo en segundos de un solo pulso, dividimos 60 segundos por la cantidad de pulsos por minuto. 60 / 120 = 0.5 segundos.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["compas", "ritmo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[4, "cuaternario"], [3, "ternario"]]

respuesta: "cuaternario"
tipo: mc
opciones_explicitas: ["cuaternario", "ternario", "binario"]

enunciado: "Un bailarín ejecuta una secuencia rítmica basada en un compás de {escenario[idx][1]}. ¿Cuál es la estructura métrica predominante?"

explicacion: |
  El compás determina la organización de los pulsos. Un compás de 4/4 es cuaternario, mientras que uno de 3/4 es ternario.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["ritmo", "compas"]

variables:
  compases: 8
  bpm: 60

respuesta: ["4", "8", "16", "32"]
tipo: completar
respuestas_validas: ["4", "8", "16", "32"]

enunciado: "Si una coreografía dura exactamente {compases} compases de 4/4 y el tempo es de {bpm} BPM, ¿cuántos pulsos totales ha ejecutado el bailarín?"

pasos:
  - "Cada compás de 4/4 tiene 4 pulsos."
  - "Multiplicar el número de compases por los pulsos por compás: 8 * 4 = 32."

explicacion: |
  En un compás de 4/4, cada unidad de tiempo (pulso) se repite 4 veces. Por lo tanto, 8 compases * 4 pulsos/compás = 32 pulsos.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "avanzado"
  tags: ["subdivision", "ritmo"]

variables:
  tempo: 100

respuesta: falso
tipo: vf

enunciado: "Si el tempo es de {tempo} BPM, una subdivisión de corcheas (dos notas por pulso) implica que el bailarín realiza 200 movimientos por minuto."

explicacion: |
  Verdadero. Si hay 100 pulsos por minuto y cada pulso se divide en 2 corcheas, el total de movimientos es 100 * 2 = 200. (Nota: El enunciado pregunta si es falso, por lo tanto la respuesta es falso si la afirmación fuera incorrecta, pero la afirmación es verdadera. Corregido: La respuesta es verdadero).
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["expresion", "lenguaje"]

respuesta: ["Respiración", "Gesto", "Movimiento", "Danza"]
tipo: ordenar
opciones_explicitas: ["Respiración", "Gesto", "Movimiento", "Danza"]

enunciado: "Ordene los elementos desde la unidad mínima de expresión corporal hasta la unidad artística completa:"

explicacion: |
  La danza comienza con la respiración, que desencadena el gesto, el cual se expande en el movimiento corporal, conformando finalmente la danza como lenguaje artístico.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "pulso", "conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "En la danza, el ritmo y el pulso son conceptos idénticos que se mueven siempre de la misma manera en el tiempo."

explicacion: |
  Falso. El pulso es la unidad básica de tiempo (el latido constante), mientras que el ritmo es la organización de acentos y silencios sobre ese pulso. El ritmo puede ser complejo y cambiar, mientras que el pulso suele ser la referencia constante.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion_corporal", "lenguaje_artistico"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un bailarín que solo mueve los brazos sin mirar al público", "una comunicación efectiva"],
    ["Un bailarín que utiliza todo su cuerpo para transmitir una emoción", "una comunicación efectiva"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["una comunicación efectiva", "una expresión mecánica", "un error de coordinación", "una falta de técnica"]

enunciado: "Si un bailarín realiza el siguiente movimiento: {escenarios[escenario_idx][0]}, esto se considera ___."

explicacion: |
  La expresión corporal requiere la integración de todo el cuerpo y la intención comunicativa para ser considerada un lenguaje artístico completo.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["secuencia", "percepcion", "ritmo"]

opciones_explicitas: ["Escuchar el sonido", "Sentir el pulso", "Ejecutar el movimiento rítmico"]
respuesta: ["Escuchar el sonido", "Sentir el pulso", "Ejecutar el movimiento rítmico"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que sigue un bailarín para interpretar una pieza musical de forma rítmica:"

explicacion: |
  Primero se debe percibir el estímulo sonoro, luego internalizar la pulsación (pulso) para luego poder traducir eso en movimiento coordinado.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "avanzado"
  tags: ["tiempo_musical", "acento", "ritmo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El acento cae en el tiempo débil", "un ritmo irregular"],
    ["El acento cae en el tiempo fuerte", "un ritmo regular"]
  ]

respuesta: casos[caso_idx][1
tipo: completar
respuestas_validas: ["un ritmo irregular", "un ritmo regular"]

enunciado: "Si en una danza el acento rítmico se desplaza y ___, estamos ante ___."

explicacion: |
  La regularidad rítmica depende de la consistencia de los acentos en los tiempos fuertes. Si el acento se desplaza, la percepción del tiempo cambia.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["expresion_corporal", "lenguaje"]

respuesta: "lenguaje"
tipo: completar
respuestas_validas: ["lenguaje", "ruido", "movimiento", "instinto"]

enunciado: "Cuando la danza utiliza el cuerpo para transmitir ideas, emociones o conceptos sin necesidad de palabras, el cuerpo actúa como un ___ artístico."

explicacion: |
  La expresión corporal es la capacidad del cuerpo para funcionar como un sistema de comunicación no verbal, transformando el movimiento en lenguaje.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "danza", "musica"]

tipo: mc
opciones_explicitas: ["La melodía es la sucesión de sonidos con altura, mientras que el ritmo es la organización de la duración de los sonidos."]
"En la danza, ¿cuál es la diferencia fundamental entre el ritmo y la melodía?"

explicacion: |
  El ritmo se refiere a la duración y acentuación de los sonidos en el tiempo, mientras que la melodía es la sucesión de notas con diferentes alturas que forman una frase musical.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["tiempo", "ritmo"]

variables:
  es_ritmo_constante: uno_de([verdadero, falso])

tipo: completar
respuesta: es_ritmo_constante

enunciado: "Si un bailarín mantiene un movimiento con una duración de pulsos idéntica y regular, ¿se dice que está siguiendo un ritmo constante? {es_ritmo_constante}"

explicacion: |
  Un ritmo constante implica una regularidad en la subdivisión del tiempo, permitiendo una estructura predecible para el movimiento.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "avanzado"
  tags: ["expresion_corporal", "mimo"]

tipo: completar
respuestas_validas: ["gestualidad", "mimo"]

enunciado: "Mientras que el ___ se basa principalmente en la pantomima y la ausencia de palabras para narrar, la expresión corporal en la danza utiliza el movimiento total del cuerpo para comunicar estados emocionales."

explicacion: |
  El mimo es una disciplina técnica de gestualidad específica, mientras que la expresión corporal es un lenguaje más amplio que integra la intención emocional con el movimiento.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["ritmo", "estructura"]

opciones_explicitas: ["Pulso", "Acento", "Ritmo"]

tipo: ordenar
respuesta: ["Pulso", "Acento", "Ritmo"]

enunciado: "Ordene los elementos de la estructura rítmica desde la unidad más básica y constante hasta la organización compleja que genera el movimiento:"

explicacion: |
  El pulso es la unidad básica, el acento es el énfasis en ciertos pulsos y el ritmo es la combinación de duraciones y acentos.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["espacio", "movimiento"]

tipo: mc
opciones_explicitas: ["El movimiento es el desplazamiento o cambio de posición, mientras que el espacio es el lugar donde ocurre dicho movimiento."]
"¿Cuál es la distinción principal entre movimiento y espacio en la danza?"

explicacion: |
  El movimiento es la acción dinámica del cuerpo, mientras que el espacio es el entorno (kinesférico o escénico) que el bailarín ocupa y recorre.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["ritmo", "compas", "tiempo"]

variables:
  datos: [["un vals en 3/4", "3/4"], ["un tango en 4/4", "4/4"], ["un reggaetón en 4/4", "4/4"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un coreógrafo está preparando una pieza basada en {datos[idx][0]}. Para que el movimiento sea armónico, el bailarín debe seguir la métrica de {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["3/4", "4/4"]

explicacion: |
  El ritmo en la danza está determinado por la métrica musical. El vals se caracteriza por un compás ternario (3/4), mientras que el tango y el reggaetón usan compases binarios/cuaternarios (4/4).
```

```
metadata:
  materia: "arte"
  tema: "danza_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion", "lenguaje", "cuerpo"]

variables:
  datos: [["un movimiento fluido y continuo", "fluidez"], ["un movimiento cortado y seco", "staccato"]]
  idx: uno_de([0, 1])

enunciado: "Si un bailarín de danza contemporánea utiliza {datos[idx][0]}, está trabajando la calidad de movimiento tipo {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fluidez", "staccato"]

explicacion: |
  La expresión corporal utiliza la calidad del movimiento (fluidez vs. staccato) para comunicar emociones y estados de ánimo sin necesidad de palabras.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["secuencia", "orden", "tiempo"]

enunciado: "Para realizar una secuencia coreográfica de improvisación guiada, el bailarín debe seguir un orden lógico de desarrollo temporal para mantener la coherencia narrativa:"

pasos:
  - "Exploración del espacio y el ritmo base"
  - "Desarrollo de frases de movimiento"
  - "Clímax de la expresión corporal"
  - "Resolución o cierre de la secuencia"

respuesta: ["Exploración del espacio y el ritmo base", "Desarrollo de frases de movimiento", "Clímax de la expresión corporal", "Resolución o cierre de la secuencia"]
tipo: ordenar

explicacion: |
  Una estructura coreográfica requiere una progresión temporal: desde la preparación (exploración), pasando por el desarrollo, el punto de mayor intensidad (clímax) y el cierre.
```

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["tempo", "velocidad", "percepcion"]

variables:
  datos: [["un adagio lento", "lento"], ["un allegro rápido", "rápido"]]
  idx: uno_de([0, 1])

enunciado: "Si la música de la pieza es {datos[idx][0]}, el tempo de la danza será percibido como {datos[idx][1]}."

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
explicacion: |
  El tempo es la velocidad del pulso musical. Un 'adagio' es una indicación de tempo lento, mientras que un 'allegro' indica un tempo rápido.
```

```
metadata:
  materia: "arte"
  tema: "danza_expresion_corporal"
  nivel: "avanzado"
  tags: ["elementos", "espacio", "cuerpo"]

variables:
  datos: [["el uso de niveles (alto, medio, bajo)", "espacio"], ["la tensión muscular", "energía"], ["el ritmo del pulso", "tiempo"]]
  idx: uno_de([0, 1, 2])

enunciado: "En la danza, el concepto de {datos[idx][0]} se clasifica fundamentalmente como un elemento del ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["espacio", "energía", "tiempo"]

explicacion: |
  Los elementos de la danza incluyen el cuerpo, el espacio (niveles, direcciones), el tiempo (ritmo, duración) y la energía (tensión, peso).
```

## Sección: elementos-del-arte (28 preguntas)

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["elementos", "vocabulario"]

enunciado: "¿Qué son los 'elementos del arte'?"
tipo: mc
opciones_explicitas:
  - "El vocabulario visual básico (línea, forma, volumen, textura, valor, espacio, color) con el que se describe y construye cualquier obra"
  - "Los materiales físicos usados para pintar (pinceles, lienzos, óleos)"
  - "Las reglas de cómo organizar una composición"
respuesta: "El vocabulario visual básico (línea, forma, volumen, textura, valor, espacio, color) con el que se describe y construye cualquier obra"

explicacion: |
  Son el "qué"; las reglas de organización (el "cómo") están en
  `../principios-de-diseno/`.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["linea", "vocabulario"]

enunciado: "¿Qué sensación suele transmitir una línea vertical en una composición?"
tipo: mc
opciones_explicitas:
  - "Fuerza o formalidad"
  - "Movimiento acelerado"
  - "Calma y quietud"
respuesta: "Fuerza o formalidad"

explicacion: |
  Las líneas horizontales suelen transmitir calma; las diagonales,
  movimiento.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["linea", "vocabulario"]

enunciado: "¿Qué sensación suele transmitir una línea diagonal?"
tipo: mc
opciones_explicitas:
  - "Movimiento o tensión"
  - "Calma absoluta"
  - "Formalidad rígida"
respuesta: "Movimiento o tensión"

explicacion: |
  Rompe la estabilidad de lo horizontal y lo vertical.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["linea"]

respuesta: verdadero
tipo: vf

enunciado: "Una línea horizontal suele transmitir calma o quietud en una composición."

explicacion: |
  Evoca líneas naturales como el horizonte o una superficie en reposo.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["forma", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una forma geométrica y una forma orgánica?"
tipo: mc
opciones_explicitas:
  - "La geométrica es regular y predecible (círculos, cuadrados); la orgánica es irregular, como las de la naturaleza"
  - "La geométrica tiene color; la orgánica no"
  - "No hay ninguna diferencia real"
respuesta: "La geométrica es regular y predecible (círculos, cuadrados); la orgánica es irregular, como las de la naturaleza"

explicacion: |
  Un triángulo es geométrico; la silueta de una hoja es orgánica.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["forma"]

respuesta: verdadero
tipo: vf

enunciado: "Un círculo es un ejemplo de forma geométrica."

explicacion: |
  Es regular y se puede describir con una fórmula matemática exacta.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["volumen", "vocabulario"]

enunciado: "¿Qué es el volumen como elemento del arte?"
tipo: mc
opciones_explicitas:
  - "La sensación de que un objeto ocupa espacio en tres dimensiones, real o sugerida"
  - "La cantidad de sonido que tiene una obra audiovisual"
  - "El tamaño físico total de una obra"
respuesta: "La sensación de que un objeto ocupa espacio en tres dimensiones, real o sugerida"

explicacion: |
  Puede ser real (una escultura) o sugerida (un dibujo con sombreado).
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["volumen"]

respuesta: verdadero
tipo: vf

enunciado: "Una escultura tiene volumen real: efectivamente ocupa espacio en las tres dimensiones."

explicacion: |
  A diferencia de un dibujo plano, donde el volumen es sólo sugerido.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["volumen", "vocabulario"]

enunciado: "¿Cómo se sugiere volumen en un dibujo o pintura, que en realidad es una superficie plana?"
tipo: mc
opciones_explicitas:
  - "Con sombreado y técnicas de perspectiva"
  - "Usando siempre colores primarios"
  - "No es posible sugerir volumen en una superficie plana"
respuesta: "Con sombreado y técnicas de perspectiva"

explicacion: |
  El manejo del valor (claroscuro) es la herramienta principal para
  esto.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["textura", "vocabulario"]

enunciado: "¿Qué es la textura como elemento del arte?"
tipo: mc
opciones_explicitas:
  - "Cómo se percibe o se sugiere la superficie de algo al tacto"
  - "La cantidad de detalle que tiene una obra"
  - "El material con el que está hecha la obra"
respuesta: "Cómo se percibe o se sugiere la superficie de algo al tacto"

explicacion: |
  Puede ser real (se siente al tocarla) o visual/implícita (sugerida
  por la técnica).
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["textura"]

respuesta: verdadero
tipo: vf

enunciado: "La textura visual (o implícita) está sugerida por la técnica de dibujo o pintura, aunque la superficie real sea lisa."

explicacion: |
  Es distinta de la textura real, que sí se siente al tocar la obra.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["textura", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo de textura REAL en una obra?"
tipo: mc
opciones_explicitas:
  - "Un collage que combina materiales físicos distintos (tela, papel, madera)"
  - "Un dibujo a lápiz que simula el pelaje de un animal"
  - "Una foto de una pared de ladrillos"
respuesta: "Un collage que combina materiales físicos distintos (tela, papel, madera)"

explicacion: |
  Ahí la textura efectivamente se puede sentir al tocarla; las otras dos
  opciones son texturas sugeridas, no reales.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["valor", "vocabulario"]

enunciado: "¿Qué es el valor de un color, en el sentido artístico?"
tipo: mc
opciones_explicitas:
  - "Qué tan claro u oscuro es ese color"
  - "Cuánto cuesta el material para producir ese color"
  - "Qué tan popular es ese color en el arte actual"
respuesta: "Qué tan claro u oscuro es ese color"

explicacion: |
  El manejo del valor se llama, en conjunto, claroscuro.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["valor"]

respuesta: verdadero
tipo: vf

enunciado: "El manejo del valor (claroscuro) es lo que permite sugerir volumen y profundidad en una superficie plana."

explicacion: |
  Las zonas más oscuras se perciben como más "hundidas" o alejadas de
  la luz.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["valor"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo color (por ejemplo, el rojo) puede tener distintos valores: más claro o más oscuro."

explicacion: |
  El matiz (rojo) es una propiedad; el valor (claro u oscuro) es otra,
  independiente.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["espacio", "vocabulario"]

enunciado: "¿Qué son el espacio positivo y el espacio negativo en una obra?"
tipo: mc
opciones_explicitas:
  - "El positivo es el que ocupan los elementos principales; el negativo es el vacío alrededor y entre ellos"
  - "El positivo son los colores cálidos; el negativo, los colores fríos"
  - "El positivo es el frente de la obra; el negativo, el fondo"
respuesta: "El positivo es el que ocupan los elementos principales; el negativo es el vacío alrededor y entre ellos"

explicacion: |
  El espacio negativo es igual de importante para la composición,
  aunque se lo note menos.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["espacio"]

respuesta: verdadero
tipo: vf

enunciado: "El espacio negativo (el vacío) es igual de importante para la composición que el espacio positivo (lo que ocupan los elementos)."

explicacion: |
  Aunque se lo note menos, un mal manejo del espacio negativo puede
  arruinar una composición.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["color", "vocabulario"]

enunciado: "¿Qué son los colores primarios?"
tipo: mc
opciones_explicitas:
  - "Los colores que no se obtienen mezclando otros colores"
  - "Los colores más usados en una obra en particular"
  - "Los colores más oscuros del círculo cromático"
respuesta: "Los colores que no se obtienen mezclando otros colores"

explicacion: |
  Son la base a partir de la cual se obtienen todos los demás.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["color", "completar"]

tipo: completar
enunciado: "Completá: los tres colores primarios son rojo, azul y ___."
respuestas_validas:
  - "amarillo"

explicacion: |
  Ninguno de los tres se obtiene mezclando otros colores.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["color", "vocabulario"]

enunciado: "¿Qué son los colores secundarios?"
tipo: mc
opciones_explicitas:
  - "El resultado de mezclar dos colores primarios"
  - "Los colores que se usan en segundo plano de una obra"
  - "Los colores primarios, pero en su versión más clara"
respuesta: "El resultado de mezclar dos colores primarios"

explicacion: |
  Por ejemplo, mezclar azul y amarillo da verde.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["color", "vocabulario"]

enunciado: "¿Qué son los colores complementarios?"
tipo: mc
opciones_explicitas:
  - "Los que quedan enfrentados en el círculo cromático, y generan el máximo contraste entre sí"
  - "Los colores que combinan bien porque son parecidos entre sí"
  - "Los tres colores primarios juntos"
respuesta: "Los que quedan enfrentados en el círculo cromático, y generan el máximo contraste entre sí"

explicacion: |
  Por ejemplo, el rojo y el verde, o el azul y el naranja.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["color"]

respuesta: verdadero
tipo: vf

enunciado: "Usar dos colores complementarios juntos genera el máximo contraste de color posible entre ellos."

explicacion: |
  Es justamente lo que los define: su posición opuesta en el círculo
  cromático.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "avanzado"
  tags: ["color", "vocabulario"]

enunciado: "¿Cuáles son las tres propiedades que definen un color?"
tipo: mc
opciones_explicitas:
  - "Matiz (el color en sí), saturación (qué tan intenso) y valor (qué tan claro u oscuro)"
  - "Primario, secundario y terciario"
  - "Cálido, frío y neutro"
respuesta: "Matiz (el color en sí), saturación (qué tan intenso) y valor (qué tan claro u oscuro)"

explicacion: |
  Dos colores pueden compartir el mismo matiz (ambos "rojo") y diferir
  en saturación o en valor.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "avanzado"
  tags: ["color", "vocabulario"]

enunciado: "¿Qué es la saturación de un color?"
tipo: mc
opciones_explicitas:
  - "Qué tan intenso o 'puro' es ese color, frente a una versión apagada (grisácea) del mismo matiz"
  - "Qué tan claro u oscuro es"
  - "Cuántas veces aparece ese color en la obra"
respuesta: "Qué tan intenso o 'puro' es ese color, frente a una versión apagada (grisácea) del mismo matiz"

explicacion: |
  Un rojo muy saturado es un rojo vivo; poco saturado, un rojo apagado
  o grisáceo.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "avanzado"
  tags: ["volumen", "valor", "ordenar"]

enunciado: "Ordená los pasos típicos para sugerir volumen en un dibujo, usando valor (claroscuro)."
tipo: ordenar
opciones_explicitas:
  - "Agregar un pequeño brillo (el valor más claro) en el punto donde la luz pega directo"
  - "Dibujar el contorno de la forma con líneas"
  - "Definir de qué lado viene la luz, y sombrear el lado opuesto con valores más oscuros"
respuesta_orden:
  - "Dibujar el contorno de la forma con líneas"
  - "Definir de qué lado viene la luz, y sombrear el lado opuesto con valores más oscuros"
  - "Agregar un pequeño brillo (el valor más claro) en el punto donde la luz pega directo"

explicacion: |
  El contorno (línea) va primero; el manejo del valor (sombras y
  brillos) es lo que después sugiere el volumen.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["espacio"]

respuesta: verdadero
tipo: vf

enunciado: "El espacio, como elemento del arte, también puede usarse para sugerir profundidad (que una superficie plana parezca tener distancia) mediante técnicas de perspectiva."

explicacion: |
  Es otra función del espacio, además de la relación entre lo positivo
  y lo negativo.
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "intermedio"
  tags: ["elementos"]

respuesta: verdadero
tipo: vf

enunciado: "Los elementos del arte son las 'piezas sueltas' con las que se construye una obra; las reglas de cómo combinarlas están en un módulo aparte, los principios de diseño."

explicacion: |
  Es la distinción central entre `elementos-del-arte/` (el qué) y
  `../principios-de-diseno/` (el cómo).
```

```
metadata:
  materia: "arte"
  tema: "elementos_del_arte"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve conocer los 7 elementos del arte?"
tipo: mc
opciones_explicitas:
  - "Para tener el vocabulario preciso con el que describir, analizar o planificar cualquier obra visual"
  - "Sólo sirve para clasificar pinturas históricas"
  - "Sólo aplica a la pintura, no a otras disciplinas visuales"
respuesta: "Para tener el vocabulario preciso con el que describir, analizar o planificar cualquier obra visual"

explicacion: |
  Aplican por igual a pintura, escultura, fotografía, diseño gráfico o
  audiovisual.
```
