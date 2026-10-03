# Examen jefe — [PENDIENTE #904]

> Logro #904. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **132 preguntas totales** en 5/5 secciones.

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
respuestas_validas:
  - "vibracion"
  - "vibración"

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
  escenario: uno_de([["trompeta", "viento"], ["guitarra", "cuerda"], ["timbal", "percusion"]])

respuesta: escenario[1]
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
respuestas_validas:
  - "caja de resonancia"
  - "caja de resonancia acústica"

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

respuesta_orden: ["Compresión", "Rarefacción"]
tipo: ordenar

enunciado: "Ordena las fases de las variaciones de presión en una onda longitudinal (como el sonido) desde el punto de máxima presión hasta el de mínima presión:"

opciones_explicitas: ["Compresión", "Rarefacción"]

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

tipo: vf
respuesta: verdadero

enunciado: "Si un instrumento musical tiene una frecuencia natural que coincide con la frecuencia de una onda sonora externa, se produce un aumento significativo en la amplitud de la vibración. ¿Es esto el fenómeno de la resonancia?"

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
respuestas_validas:
  - "más agudo"
  - "más grave"

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

respuesta_orden: ["Excitación (vibración de la fuente)", "Filtrado (modificación por el cuerpo)", "Radiación (emisión al aire)"]

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

respuestas_validas:
  - "caja de resonancia"
  - "caja de resonancia acústica"
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

respuesta_orden: ["Columna de aire en movimiento", "Vibración de la lengüeta o bisel", "Modificación del tono mediante los agujeros", "Proyección del sonido por la campana"]

explicacion: |
  El flujo de aire genera la vibración inicial, la cual se modula al cambiar la longitud de la columna de aire y finalmente se proyecta.
```

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
respuesta_orden: ["Dividir el espacio de la obra en una cuadrícula de 3×3, con dos líneas horizontales y dos verticales", "Identificar el elemento de mayor interés de la escena", "Ubicar ese elemento sobre una línea, o en una de las cuatro intersecciones"]
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

## Sección: origen-del-arte (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "paleolitico", "simbolismo"]

respuesta: "Paleolítico"
tipo: completar
respuestas_validas:
  - "Paleolítico"

enunciado: "El arte rupestre se asocia con la aparición del pensamiento simbólico durante el periodo ___."

explicacion: |
  El paso del pensamiento concreto al simbólico permitió al Homo sapiens representar su realidad en las paredes de las cuevas durante el Paleolítico.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["arte_rupestre", "pintura_cavernica"]

enunciado: "En las pinturas rupestres del Paleolítico, ¿cuál es uno de los motivos más frecuentes que se representa?"

respuesta: "animales"
tipo: mc
opciones_explicitas: ["animales", "paisajes urbanos", "deidades griegas", "geometría abstracta"]

explicacion: |
  Aunque existen otros elementos, la fauna (bisontes, caballos, ciervos) y las manos (en negativo o positivo) son los motivos predominantes.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["cronologia", "prehistoria"]

variables:
  orden_correcta: ["Paleolítico", "Mesolítico", "Neolítico"]

respuesta_orden: ["Paleolítico", "Mesolítico", "Neolítico"]
tipo: ordenar
opciones_explicitas: ["Paleolítico", "Mesolítico", "Neolítico"]

enunciado: "Ordena cronológicamente los periodos de la prehistoria, desde el surgimiento del arte rupestre más temprano hasta el desarrollo de la agricultura:"

explicacion: |
  El arte rupestre surge en el Paleolítico, se mantiene en el Mesolítico y adquiere nuevas formas en el Neolítico con el sedentarismo.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["simbolismo", "antropologia"]

respuesta: verdadero
tipo: vf
enunciado: "¿Es cierto que la capacidad de crear arte rupestre implica que el ser humano ya posee la capacidad de abstracción y pensamiento simbólico?"

explicacion: |
  El arte no es solo una copia de la realidad, sino una representación que requiere que el individuo pueda pensar en algo que no está presente físicamente.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["tecnologia_prehistorica", "pigmentos"]

enunciado: "Para realizar sus pinturas, los artistas del Paleolítico utilizaban pigmentos naturales como el óxido de hierro (ocre)."

respuesta: "óxido de hierro"
tipo: mc
opciones_explicitas: ["óxido de hierro", "azul de ultramar", "tinta china", "acrílico"]

explicacion: |
  El uso de minerales como el ocre (óxido de hierro) y el carbón permitió la fijación de colores rojos, negros y amarillos en las paredes de las cuevas.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "ritual"]

tipo: mc
opciones_explicitas: ["Decoración estética", "Magia de caza", "Registro de eventos históricos", "Expresión de identidad"]

enunciado: "Se cree que muchas pinturas rupestres de animales no tenían un fin decorativo, sino que formaban parte de un ritual para asegurar el éxito en la obtención de alimento. ¿Qué función describe mejor esta creencia?"

respuesta: "Magia de caza"

explicacion: |
  La teoría de la 'magia simpática' sugiere que pintar al animal era un acto ritual para controlarlo y facilitar la caza real.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["registro", "comunicación"]

tipo: completar
respuestas_validas:
  - "registrar eventos sociales"

enunciado: "Si un grupo de homínidos utilizaba el arte para dejar constancia de lo ocurrido en su comunidad, el arte estaría cumpliendo la función de ___."

respuesta: "registrar eventos sociales"

explicacion: |
  El arte también funcionó como un sistema de registro para preservar la memoria de eventos o la identidad de quienes habitaban un lugar.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["identidad", "social"]

tipo: mc
opciones_explicitas: ["Identidad grupal", "Uso utilitario", "Ritual de fertilidad", "Decoración de refugio"]

enunciado: "El uso de símbolos o marcas específicas en las cuevas que permitían a diferentes bandas reconocer el territorio de otros sugiere una función de:"

respuesta: "Identidad grupal"

explicacion: |
  Los símbolos compartidos ayudan a fortalecer la cohesión del grupo y a diferenciar la identidad de una comunidad frente a otra.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["teoria", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Ritual/Magia", "Registro de eventos", "Expresión de identidad", "Estética pura"]

respuesta_orden: ["Ritual/Magia", "Registro de eventos", "Expresión de identidad", "Estética pura"]

enunciado: "Ordena las siguientes teorías sobre la evolución de la función del arte, desde la más ligada a la supervivencia inmediata hasta la más abstracta/contemplativa:"

explicacion: |
  Históricamente, se debate si el arte comenzó con propósitos mágicos-supervivencia, pasó a ser un registro social y finalmente se convirtió en un objeto de contemplación estética.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["magia", "supervivencia"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si el arte rupestre se utilizaba para realizar un ritual de fertilidad de la fauna, su función principal era asegurar la ___."

respuesta: "supervivencia"

explicacion: |
  Al intentar influir en la naturaleza mediante el arte, el ser humano primitivo buscaba asegurar la continuidad de su propia subsistencia.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["escultura", "prehistoria"]

respuesta: "Venus de Willendorf"
tipo: completar
respuestas_validas:
  - "Venus de Willendorf"

enunciado: "Una de las esculturas más famosas del Paleolítico Superior, que destaca por enfatizar la fertilidad, es la ___."

explicacion: |
  Las Venus paleolíticas son pequeñas estatuillas femeninas que suelen presentar rasgos sexuales muy exagerados, lo que sugiere un simbolismo relacionado con la fertilidad o la maternidad.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["musica", "prehistoria"]

variables:
  escenario: uno_de([["una flauta de hueso de ave", "hueso"], ["un ritmo de percusión con piedras", "piedra"], ["un silbato de concha marina", "concha"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["hueso", "piedra", "concha", "madera"]

enunciado: "En el registro arqueológico, se han encontrado restos que sugieren el uso de {escenario[0]} como primer instrumento musical."

explicacion: |
  Se han hallado flautas hechas de hueso de animales (como buitres o ciervos) en yacimientos como la cueva de Hohle Fels, lo que demuestra que la música es una expresión artística muy temprana.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["ornamento", "joyeria"]

respuesta: "collares"
tipo: mc
opciones_explicitas: ["collares", "cuadros", "estatuas", "murales"]

enunciado: "El uso de conchas, dientes de animales o piedras perforadas para crear ___ es una de las formas más antiguas de expresión estética personal."

explicacion: |
  La ornamentación personal indica no solo una función estética, sino también la construcción de identidad y estatus dentro de los grupos humanos primitivos.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["secuencia", "prehistoria"]

respuesta_orden: ["pintura rupestre", "escultura pequeña", "instrumentos musicales"]
tipo: ordenar
opciones_explicitas: ["pintura rupestre", "escultura pequeña", "instrumentos musicales"]

enunciado: "Ordena las siguientes manifestaciones artísticas según su aparición o prevalencia en el registro arqueológico temprano (de la más antigua/difusa a la más compleja):"

pasos:
  - "Identifica la manifestación más primitiva"
  - "Ubica la escultura de pequeña escala"
  - "Considera la especialización de instrumentos"

explicacion: |
  Aunque el arte es un proceso complejo, la arqueología muestra una transición desde la expresión simbólica en paredes (pintura), pasando por objetos portátiles (escultura/Venus), hasta la especialización de herramientas sonoras.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["escultura", "materiales"]

respuesta: 12.5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una pequeña estatuilla de piedra pesa 12.5 gramos y se encuentra en un yacimiento donde el 50% de los objetos son de este material, ¿cuántos gramos de piedra representan el total de la muestra analizada de 25 gramos?"

pasos:
  - "Identificar el peso del objeto (12.5g)"
  - "Calcular el peso total de la muestra (25g)"
  - "Determinar la parte proporcional de la piedra"

explicacion: |
  El estudio del peso y la densidad de los materiales es crucial para que los arqueólogos determinen el origen de las piezas escultóricas.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["evolucion", "cognicion", "simbolismo"]

respuesta: "simbólico"
tipo: completar
respuestas_validas:
  - "simbólico"

enunciado: "El arte requiere la capacidad de realizar un salto ___ para representar algo que no está presente físicamente en el entorno inmediato."

explicacion: |
  Representar un objeto ausente (como un animal en una cueva) requiere que el cerebro humano procese conceptos abstractos y símbolos, marcando un hito en la evolución cognitiva.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["cognicion", "evolucion"]

tipo: vf
respuesta: verdadero

enunciado: "La aparición de representaciones pictóricas en el registro arqueológico es evidencia de una capacidad cognitiva avanzada. ¿Es esto cierto?"

explicacion: |
  La capacidad de proyectar una imagen mental sobre una superficie física demuestra que el Homo sapiens ya poseía pensamiento simbólico.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["abstraccion", "evolucion"]

variables:
  escenario: uno_de(["un bisonte", "un paisaje", "una herramienta de piedra"])

respuesta: "ausente"
tipo: mc
opciones_explicitas: ["ausente", "presente", "en movimiento"]

enunciado: "Si un artista prehistórico pinta {escenario}, está demostrando la capacidad de representar algo que está ___ en el momento de crear la obra."

explicacion: |
  El arte no es solo imitación, es la capacidad de traer a la mente un objeto ausente para darle un significado nuevo.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["procesos_mentales", "abstraccion"]

respuesta_orden: ["Percepción del objeto real", "Procesamiento mental/abstracción", "Representación simbólica en soporte"]
tipo: ordenar
opciones_explicitas: ["Percepción del objeto real", "Procesamiento mental/abstracción", "Representación simbólica en soporte"]

enunciado: "Ordena cronológicamente los procesos cognitivos necesarios para que un humano primitivo cree una pintura rupestre:"

explicacion: |
  Primero se percibe el mundo, luego el cerebro abstrae la esencia del objeto y finalmente se ejecuta la acción de representar ese concepto.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["simbolismo", "evolucion"]

respuesta: "representar ideas o entidades ausentes"
tipo: completar
respuestas_validas:
  - "representar ideas o entidades ausentes"

enunciado: "El objetivo principal del arte como fenómeno cognitivo es ___."

explicacion: |
  El arte permite que la mente humana trascienda el "aquí y ahora", permitiendo la comunicación de ideas, mitos y conceptos abstractos a través del tiempo.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "pintura"]

respuesta: "pintura rupestre"
tipo: mc
opciones_explicitas: ["pintura rupestre", "escultura megalitica", "grabado"]

enunciado: "Se han encontrado restos de pigmentos rojos y negros aplicados sobre las paredes de una cueva profunda. ¿A qué forma de arte corresponde esta descripción?"

explicacion: |
  La descripción corresponde a la pintura rupestre: pigmentos aplicados directamente sobre la roca de una cueva.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["escultura", "paleolitico"]

respuesta: "Venus"
tipo: mc
opciones_explicitas: ["Venus", "Zoomorfos", "Manos"]

enunciado: "Se descubre una pequeña estatuilla de piedra que enfatiza la fertilidad mediante formas redondeadas. Se trata de una ___."

explicacion: |
  Las pequeñas figuras femeninas con rasgos sexuales muy acentuados se denominan Venus paleolíticas.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["cronologia", "periodos"]

variables:
  orden_correcto: ["Paleolítico", "Mesolítico", "Neolítico"]

respuesta_orden: ["Paleolítico", "Mesolítico", "Neolítico"]
tipo: ordenar
opciones_explicitas: ["Paleolítico", "Mesolítico", "Neolítico"]

enunciado: "Ordena cronológicamente los periodos de la prehistoria, desde el más antiguo al más reciente:"

explicacion: |
  El orden correcto es: {orden_correcto[0]}, luego {orden_correcto[1]} y finalmente {orden_correcto[2]}.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["tecnica", "materiales"]

respuesta: "grabado"
tipo: completar
respuestas_validas:
  - "grabado"

enunciado: "En arqueología, cuando la decoración consiste en incidir líneas o diseños sobre un soporte duro (piedra, hueso o madera), la técnica se denomina genéricamente ___."

explicacion: |
  El término genérico es "grabado", sin importar si el soporte es piedra, hueso o madera.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["teoria", "prehistoria"]

variables:
  datos: [["magia", "ritual"], ["comunicación", "lenguaje"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ritual", "estética", "lenguaje"]

enunciado: "Muchos arqueólogos sostienen que el arte en el Paleolítico no era decorativo, sino que tenía una función de ___."

explicacion: |
  Se cree que su función principal era el {datos[idx][1]}.
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
respuesta_orden: ["Dibujar el contorno de la forma con líneas", "Definir de qué lado viene la luz, y sombrear el lado opuesto con valores más oscuros", "Agregar un pequeño brillo (el valor más claro) en el punto donde la luz pega directo"]
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

## Sección: principios-de-diseno (30 preguntas)

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["principios", "vocabulario"]

enunciado: "¿Qué son los principios de diseño, a diferencia de los elementos del arte?"
tipo: mc
opciones_explicitas:
  - "Las reglas de organización que indican CÓMO combinar los elementos del arte dentro de una obra"
  - "Los materiales físicos con los que se hace una obra"
  - "Otro nombre para los mismos 7 elementos del arte"
respuesta: "Las reglas de organización que indican CÓMO combinar los elementos del arte dentro de una obra"

explicacion: |
  Los elementos (`../elementos-del-arte/`) son el vocabulario; los
  principios son las reglas de uso de ese vocabulario.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["contraste", "vocabulario"]

enunciado: "¿Qué es el contraste, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "Una diferencia marcada entre elementos (color, tamaño, forma, textura) que genera interés visual"
  - "El uso de un solo color en toda la obra"
  - "La repetición exacta de un mismo elemento"
respuesta: "Una diferencia marcada entre elementos (color, tamaño, forma, textura) que genera interés visual"

explicacion: |
  Puede ser de color, tamaño, forma o textura.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["contraste"]

respuesta: verdadero
tipo: vf

enunciado: "Sin ningún contraste entre sus elementos, una obra tiende a verse plana o monótona."

explicacion: |
  El contraste es lo que genera puntos de interés dentro de la
  composición.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["equilibrio", "vocabulario"]

enunciado: "¿Qué es el equilibrio, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "La distribución del 'peso visual' de los elementos dentro de la obra"
  - "El uso de la misma cantidad de cada color"
  - "Que la obra tenga exactamente el mismo tamaño que su marco"
respuesta: "La distribución del 'peso visual' de los elementos dentro de la obra"

explicacion: |
  Puede lograrse de varias formas, no sólo con simetría exacta.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["equilibrio", "vocabulario"]

enunciado: "¿Cuáles son los tres tipos de equilibrio en una composición?"
tipo: mc
opciones_explicitas:
  - "Simétrico, asimétrico y radial"
  - "Cálido, frío y neutro"
  - "Primario, secundario y terciario"
respuesta: "Simétrico, asimétrico y radial"

explicacion: |
  Cada uno logra el balance visual de una forma distinta.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["equilibrio", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo típico de equilibrio radial?"
tipo: mc
opciones_explicitas:
  - "Un rosetón, organizado alrededor de un centro"
  - "Un retrato con la cara exactamente en el medio, mirando de frente"
  - "Una foto con un objeto grande a la izquierda y varios chicos a la derecha"
respuesta: "Un rosetón, organizado alrededor de un centro"

explicacion: |
  El equilibrio radial se organiza alrededor de un punto central, como
  en `../rosetones-y-simetria/`.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["proporcion", "vocabulario"]

enunciado: "¿Qué es la proporción, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "La relación de tamaño entre las partes de la obra, ajustada para que se vea coherente"
  - "La cantidad total de elementos usados"
  - "El costo relativo de los materiales usados"
respuesta: "La relación de tamaño entre las partes de la obra, ajustada para que se vea coherente"

explicacion: |
  Ya se presentó en `../composicion-y-proporcion/`; acá se retoma como
  herramienta activa de diseño.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["ritmo", "vocabulario"]

enunciado: "¿Qué es el ritmo, como principio de diseño visual?"
tipo: mc
opciones_explicitas:
  - "La repetición de elementos de forma que crea una sensación de movimiento organizado"
  - "La velocidad a la que se hizo la obra"
  - "El uso exclusivo de líneas curvas"
respuesta: "La repetición de elementos de forma que crea una sensación de movimiento organizado"

explicacion: |
  Es la misma idea del ritmo musical, trasladada al espacio visual.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["ritmo"]

respuesta: verdadero
tipo: vf

enunciado: "El ritmo visual se logra repitiendo una línea, forma o color con cierta regularidad."

explicacion: |
  Sin repetición no hay ritmo, de la misma forma que no hay ritmo
  musical sin patrón temporal.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["unidad", "vocabulario"]

enunciado: "¿Qué es la unidad, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "La sensación de que todos los elementos de la obra pertenecen juntos, formando un todo coherente"
  - "El uso de un único elemento en toda la obra"
  - "Que la obra mida exactamente 1 metro por lado"
respuesta: "La sensación de que todos los elementos de la obra pertenecen juntos, formando un todo coherente"

explicacion: |
  Sin unidad, la obra se ve como piezas sueltas sin relación entre sí.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["enfasis", "vocabulario"]

enunciado: "¿Qué es el énfasis, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "Destacar una parte de la obra como la más importante"
  - "Repetir el mismo elemento varias veces"
  - "Usar sólo colores oscuros"
respuesta: "Destacar una parte de la obra como la más importante"

explicacion: |
  Se logra con contraste, posición o tamaño.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["enfasis"]

respuesta: verdadero
tipo: vf

enunciado: "El énfasis, como principio de diseño, está directamente relacionado con el concepto de punto focal."

explicacion: |
  Ambos apuntan a lo mismo: qué parte de la obra capta primero la
  atención.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["movimiento", "vocabulario"]

enunciado: "¿Qué es el movimiento, como principio de diseño en una obra estática (como una pintura)?"
tipo: mc
opciones_explicitas:
  - "La sensación de acción, o la forma en que la composición guía la mirada a través de la obra"
  - "Un movimiento físico real de la obra"
  - "El desplazamiento del artista mientras trabaja"
respuesta: "La sensación de acción, o la forma en que la composición guía la mirada a través de la obra"

explicacion: |
  En una obra estática, el movimiento es sugerido, no real.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["movimiento"]

respuesta: falso
tipo: vf

enunciado: "El movimiento, como principio de diseño, siempre implica que la obra tenga animación real (como un video)."

explicacion: |
  En una pintura o foto estática, el movimiento es sugerido por líneas,
  disposición de elementos o dirección de las miradas.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["patron", "vocabulario"]

enunciado: "¿Qué es un patrón, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "La repetición regular de un elemento o motivo"
  - "Un solo elemento único, sin repetir"
  - "La mezcla de todos los colores primarios"
respuesta: "La repetición regular de un elemento o motivo"

explicacion: |
  Como un empapelado, un mosaico o un estampado de tela.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "avanzado"
  tags: ["patron"]

respuesta: verdadero
tipo: vf

enunciado: "Un patrón visual es el mismo concepto que la traslación repetida (ver `../../matematica/transformaciones-geometricas/traslacion/`), aplicado como recurso de diseño."

explicacion: |
  El mismo motivo se repite deslizándose siempre el mismo vector.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["variedad", "vocabulario"]

enunciado: "¿Qué es la variedad, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "El uso de elementos diferentes entre sí, para evitar la monotonía"
  - "La cantidad total de colores disponibles en una paleta"
  - "Otro nombre para el contraste"
respuesta: "El uso de elementos diferentes entre sí, para evitar la monotonía"

explicacion: |
  Funciona en tensión directa con la unidad.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "avanzado"
  tags: ["unidad", "variedad"]

respuesta: verdadero
tipo: vf

enunciado: "La unidad y la variedad están en tensión: un diseño efectivo tiene que balancear ambas, no maximizar una a costa de la otra."

explicacion: |
  Demasiada unidad sin variedad aburre; demasiada variedad sin unidad
  se ve caótico.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["escala", "vocabulario"]

enunciado: "¿Qué es la escala, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "El tamaño de un elemento en relación con otros elementos o con el espectador"
  - "La cantidad de veces que se repite un elemento"
  - "El tamaño físico total de la obra, sin comparar con nada más"
respuesta: "El tamaño de un elemento en relación con otros elementos o con el espectador"

explicacion: |
  Es siempre una comparación, no un tamaño absoluto.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["escala", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo de usar la escala deliberadamente para llamar la atención?"
tipo: mc
opciones_explicitas:
  - "Dibujar un objeto cotidiano (como una taza) mucho más grande de lo esperado"
  - "Usar siempre el mismo tamaño para todos los elementos"
  - "Elegir un formato de obra cuadrado"
respuesta: "Dibujar un objeto cotidiano (como una taza) mucho más grande de lo esperado"

explicacion: |
  Romper la escala esperada de algo genera un efecto visual fuerte.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "avanzado"
  tags: ["equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "El equilibrio simétrico se basa en el mismo concepto de reflexión (eje de simetría) ya visto en geometría."

explicacion: |
  Los elementos de un lado del eje son, en esencia, el reflejo de los
  del otro lado.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "avanzado"
  tags: ["equilibrio", "ordenar"]

enunciado: "Ordená los pasos para lograr un equilibrio asimétrico (sin usar simetría exacta) en una composición."
tipo: ordenar
opciones_explicitas:
  - "Revisar que ningún lado 'pese' visualmente mucho más que el otro"
  - "Ubicar un elemento grande o de mucho contraste de un lado de la composición"
  - "Compensarlo con varios elementos más chicos, o con espacio negativo, del otro lado"
respuesta_orden: ["Ubicar un elemento grande o de mucho contraste de un lado de la composición", "Compensarlo con varios elementos más chicos, o con espacio negativo, del otro lado", "Revisar que ningún lado 'pese' visualmente mucho más que el otro"]
explicacion: |
  El equilibrio no exige espejo exacto: exige que el peso visual total
  quede balanceado.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["unidad", "variedad"]

respuesta: verdadero
tipo: vf

enunciado: "Una obra con mucha unidad pero sin nada de variedad tiende a verse aburrida o monótona."

explicacion: |
  Es el extremo opuesto de una obra caótica por exceso de variedad sin
  unidad.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["unidad", "variedad"]

respuesta: verdadero
tipo: vf

enunciado: "Una obra con mucha variedad pero sin ninguna unidad tiende a verse caótica o desordenada."

explicacion: |
  El diseño efectivo busca el balance entre ambos extremos.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["patron", "completar"]

tipo: completar
enunciado: "Completá: la repetición regular de un elemento o motivo se llama ___."
respuestas_validas:
  - "patrón"
  - "patron"

explicacion: |
  Es distinto del ritmo, que es la sensación de movimiento que genera
  esa repetición.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "avanzado"
  tags: ["ritmo", "patron", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre ritmo y patrón?"
tipo: mc
opciones_explicitas:
  - "El patrón es la repetición en sí; el ritmo es la sensación de movimiento que esa repetición genera"
  - "Son exactamente lo mismo, dos nombres para un solo concepto"
  - "El ritmo sólo aplica a la música, nunca a las artes visuales"
respuesta: "El patrón es la repetición en sí; el ritmo es la sensación de movimiento que esa repetición genera"

explicacion: |
  Están relacionados, pero no son lo mismo: uno es la estructura, el
  otro es el efecto que produce.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["enfasis", "contraste"]

respuesta: verdadero
tipo: vf

enunciado: "Uno de los recursos para lograr énfasis en una composición es usar contraste (de color, tamaño o forma) en la zona que se quiere destacar."

explicacion: |
  Contraste y énfasis suelen trabajar juntos.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["principios"]

respuesta: verdadero
tipo: vf

enunciado: "Los 10 principios de diseño se pueden aplicar tanto a una pintura como a un afiche, una interfaz digital o un video."

explicacion: |
  Son principios generales de organización visual, no exclusivos de
  ninguna técnica.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["principios"]

respuesta: 10
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos principios de diseño distintos se presentan en este módulo?"

explicacion: |
  Contraste, equilibrio, proporción, ritmo, unidad, énfasis, movimiento,
  patrón, variedad y escala.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve conocer los principios de diseño?"
tipo: mc
opciones_explicitas:
  - "Para tener herramientas concretas con las que describir, evaluar y aplicar la composición en cualquier obra visual"
  - "Sólo sirven para criticar el trabajo de otros artistas"
  - "Sólo aplican si la obra ya tiene los 7 elementos del arte presentes"
respuesta: "Para tener herramientas concretas con las que describir, evaluar y aplicar la composición en cualquier obra visual"

explicacion: |
  Cualquier decisión de diseño se puede analizar en términos de estos
  10 principios.
```

