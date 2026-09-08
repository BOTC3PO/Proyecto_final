# Fisica — Campo electrico (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Campo Eléctrico

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["definicion", "electrostática"]

respuesta: "campo"
tipo: completar
respuestas_validas:
  - "campo"

enunciado: "La región del espacio que rodea a una carga eléctrica y en la cual una carga de prueba experimenta una fuerza eléctrica se denomina ___ eléctrico."

explicacion: |
  El campo eléctrico es una propiedad del espacio que permite transmitir la fuerza entre cargas a distancia.
```

### 2 — Representación de líneas de campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo", "representacion"]

variables:
  tipo_carga: uno_de(["positiva", "negativa"])

respuesta: "salen"
tipo: mc
opciones_explicitas: ["entran", "salen", "son paralelas", "son circulares"]

enunciado: "Si la carga que genera el campo es de tipo {tipo_carga}, las líneas de campo eléctrico se representan como líneas que ___ de la carga."

explicacion: |
  Las líneas de campo eléctrico siempre salen de las cargas positivas y entran en las cargas negativas.
```

### 3 — Relación Fuerza y Campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["fuerza", "relacion"]

respuesta: falso
tipo: vf

enunciado: "Si una carga eléctrica es colocada en una región donde el campo eléctrico es nulo, la fuerza eléctrica sobre dicha carga será distinta de cero."

explicacion: |
  La relación es F = q * E. Si el campo (E) es cero, la fuerza (F) también debe ser cero.
```

### 4 — Dirección de la fuerza

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza", "direccion"]

respuesta: "opuesta"
tipo: mc
opciones_explicitas: ["misma", "opuesta", "perpendicular"]

enunciado: "Considerando una carga de prueba negativa en un campo eléctrico dado, la dirección de la fuerza que experimenta la carga será ___ a la dirección del vector campo eléctrico."

pasos:
  - "Identificar el signo de la carga de prueba."
  - "Relacionar el signo con la dirección de la fuerza respecto al campo."

explicacion: |
  Para una carga negativa, el vector fuerza tiene la dirección opuesta al vector campo eléctrico. Para una carga positiva, tienen la misma dirección.
```

### 5 — Propiedades de las líneas de campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo", "propiedades"]

respuesta_orden: ["no se cruzan", "salen de carga positiva", "entran en carga negativa"]
tipo: ordenar
opciones_explicitas: ["salen de carga positiva", "entran en carga negativa", "no se cruzan"]

enunciado: "Ordena las siguientes propiedades de las líneas de campo eléctrico de mayor a menor importancia conceptual (según su definición geométrica y física):"

explicacion: |
  Las líneas de campo representan la dirección de la fuerza, no se cruzan nunca porque en un punto el campo tiene una dirección única, y su sentido depende del signo de la carga.
```

### 6 — Concepto de campo eléctrico

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El campo eléctrico es una perturbación en el espacio que rodea a una carga eléctrica y que ejerce una fuerza sobre otras cargas colocadas en su vecindad."

explicacion: |
  El campo eléctrico es una magnitud vectorial que describe la influencia que una carga ejerce sobre el espacio circundante.
```

### 7 — Representación de líneas de campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion", "lineas_de_campo"]

opciones_explicitas: ["Desde la carga hacia afuera", "Hacia la carga", "En círculos concéntricos"]
respuesta: "Desde la carga hacia afuera"
tipo: mc

enunciado: "Las líneas de campo eléctrico de una carga puntual positiva se representan siempre..."

explicacion: |
  Por convención, las líneas de campo salen de las cargas positivas y entran en las cargas negativas.
```

### 8 — Cálculo de la magnitud del campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["calculo", "punto_carga"]

variables:
  distancia: 0.05
  carga: 2.0e-6
  k: 8.99e9

pasos:
  - "Identificar la constante de Coulomb k ≈ 8.99e9 N·m²/C²."
  - "Aplicar la fórmula E = k * |q| / r²."
  - "Sustituir los valores: E = (8.99e9 * 2.0e-6) / (0.05)²."

respuesta: 7192000.0
tipo: completar
tolerancia_abs: 100.0

enunciado: "Calcular la magnitud del campo eléctrico producido por una carga puntual de {carga} C a una distancia de {distancia} m."

explicacion: |
  Usando la fórmula E = k * q / r², obtenemos:
  E = (8.99e9 * 2.0e-6) / (0.05)^2 = 17980 / 0.0025 = 7192000 N/C.
```

### 9 — Relación entre fuerza y campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza", "carga_de_prueba"]

variables:
  datos: [[1.5e-6, 3.0e-3], [2.0e-6, 4.0e-3]]
  idx: uno_de([0, 1])
  q: datos[idx][0]
  E: datos[idx][1]

respuesta: q * E
tipo: completar
tolerancia_abs: 1e-10

enunciado: "Si una carga de {q} C se coloca en un campo eléctrico de {E} N/C, la fuerza resultante sobre ella es de ___ N."

explicacion: |
  La relación es F = q * E.
  Para el caso seleccionado: F = {q} * {E} = {q * E} N.
```

### 10 — Orden de pasos para resolver un problema

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular la distancia r", "Identificar la carga q y la constante k", "Aplicar la fórmula E = k*q/r²", "Calcular el valor de E"]
respuesta_orden: ["Identificar la carga q y la constante k", "Calcular la distancia r", "Aplicar la fórmula E = k*q/r²", "Calcular el valor de E"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular la intensidad del campo eléctrico producido por una carga puntual en un punto determinado."

explicacion: |
  Primero se deben conocer los datos (carga y constante), luego asegurar la distancia, aplicar la fórmula matemática y finalmente obtener el resultado.
```

### 11 — Representación de líneas de campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion", "lineas_de_campo"]

tipo: mc
opciones_explicitas: ["Las líneas de campo pueden cruzarse si las cargas son muy grandes", "Las líneas de campo nunca se cruzan", "Las líneas de campo son trayectorias reales de las cargas", "Las líneas de campo son líneas físicas de flujo de aire"]
respuesta: "Las líneas de campo nunca se cruzan"

enunciado: "Al representar el campo eléctrico mediante líneas de fuerza, ¿cuál de las siguientes afirmaciones es correcta respecto a su intersección?"

explicacion: |
  Las líneas de campo eléctrico representan la dirección del vector campo en cada punto. Si se cruzaran, el campo tendría dos direcciones distintas en un mismo punto, lo cual es físicamente imposible.
```

### 12 — Dirección del campo y signo de la carga

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["carga_electrica", "direccion"]

variables:
  idx: uno_de([0, 1])
  carga_tipo: ["positiva", "negativa"][idx]
  direccion_linea: ["saliente", "entrante"][idx]

enunciado: "Si colocamos una carga de tipo {carga_tipo} en el espacio, la dirección de las líneas de campo eléctrico será {direccion_linea}."

pasos:
  - "Identificar el signo de la carga"
  - "Recordar que las líneas salen de las cargas positivas y entran en las negativas"

respuesta: ["saliente", "entrante"][idx]
tipo: completar
respuestas_validas:
  - "saliente"
  - "entrante"

explicacion: |
  Por convención, las líneas de campo eléctrico se dibujan saliendo de las cargas positivas y entrando en las negativas.
```

### 13 — Relación entre fuerza y campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza_electrica", "vector"]

tipo: vf

enunciado: "Si una carga eléctrica es colocada en un punto donde el campo eléctrico es nulo, la fuerza eléctrica que actúa sobre dicha carga será cero."

respuesta: verdadero

explicacion: |
  La relación está definida por la ecuación F = q * E. Si el vector campo eléctrico (E) es cero, el producto resultante (la fuerza F) también será cero, independientemente del valor de la carga q.
```

### 14 — Intensidad del campo y distancia

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["ley_coulomb", "intensidad"]

enunciado: "Si la distancia entre una carga puntual y un punto en el espacio se duplica (se multiplica por 2), la magnitud del campo eléctrico en ese punto cambiará por un factor de ___."

pasos:
  - "Recordar que el campo eléctrico es inversamente proporcional al cuadrado de la distancia (E ∝ 1/r²)"
  - "Calcular (1 / 2²) para hallar el factor de cambio"

respuesta: "0.25"
tipo: completar
respuestas_validas:
  - "0.25"

explicacion: |
  Dado que el campo eléctrico de una carga puntual sigue la ley de la inversa del cuadrado de la distancia, si la distancia aumenta por un factor de 2, el campo disminuye por un factor de 1/2² = 1/4 (0.25). Si la distancia se reduce a la mitad, el campo aumenta por un factor de 4.
```

### 15 — Concepto de campo eléctrico

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["definicion", "concepto"]

tipo: mc
opciones_explicitas: ["Es una fuerza física que actúa a distancia", "Es una propiedad del espacio que ejerce una carga sobre otras", "Es la velocidad de una carga en un campo", "Es la energía potencial de un sistema de cargas"]
respuesta: "Es una propiedad del espacio que ejerce una carga sobre otras"

enunciado: "¿Cuál es la definición más precisa de campo eléctrico en el contexto de la interacción entre cargas?"

explicacion: |
  El campo eléctrico no es una fuerza en sí misma, sino una perturbación o propiedad que el campo eléctrico 'imparte' al espacio circundante debido a la presencia de una carga, la cual se manifiesta como fuerza cuando otra carga se coloca en él.
```

### 16 — Representación de líneas de campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["conceptos", "representacion"]

tipo: mc
opciones_explicitas: ["Las líneas de campo representan el movimiento real de los electrones.", "Las líneas de campo son construcciones visuales que indican la dirección y magnitud de la intensidad del campo.", "Las líneas de campo son trayectorias físicas que las cargas siguen obligatoriamente.", "Las líneas de campo muestran la distancia exacta entre dos cargas."]

respuesta: "Las líneas de campo son construcciones visuales que indican la dirección y magnitud de la intensidad del campo."

enunciado: "¿Qué representan fundamentalmente las líneas de campo eléctrico en un diagrama?"

explicacion: |
  Las líneas de campo son una herramienta matemática y visual para representar la dirección de la fuerza que actuaría sobre una carga de prueba positiva y la densidad de estas líneas indica la intensidad del campo. No son trayectorias físicas reales.
```

### 17 — Relación Fuerza-Campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["relacion", "fuerza"]

tipo: completar
respuestas_validas:
  - "hacia afuera"
  - "hacia adentro"

enunciado: "Si colocamos una carga de prueba positiva en un punto del campo, la dirección de la fuerza sobre ella será ___ de la carga que genera el campo."

respuesta: "hacia afuera"

explicacion: |
  La fuerza sobre una carga positiva tiene la misma dirección que el vector campo eléctrico en ese punto. Si la carga es negativa, la fuerza es opuesta. En este caso, la carga es positiva, por lo que la fuerza es hacia afuera.
```

### 18 — Campo vs Fuerza eléctrica

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["comparacion"]

tipo: vf

enunciado: "A diferencia de la fuerza eléctrica (que depende de la magnitud de la carga que se coloca en un punto), el campo eléctrico es una propiedad del espacio que existe independientemente de si hay una carga de prueba presente o no."

respuesta: verdadero

explicacion: |
  Correcto. El campo eléctrico es una propiedad intrínseca de la configuración de cargas presentes, mientras que la fuerza es una interacción que solo aparece cuando una segunda carga interactúa con dicho campo.
```

### 19 — Densidad de líneas de campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion"]

tipo: mc
opciones_explicitas: ["A mayor densidad de líneas, menor es la intensidad del campo.", "La densidad de líneas de campo es constante en todo el espacio.", "A mayor densidad de líneas de campo, mayor es la intensidad del campo eléctrico.", "La densidad de líneas no tiene relación con la magnitud del campo."]

respuesta: "A mayor densidad de líneas de campo, mayor es la intensidad del campo eléctrico."

enunciado: "Si observamos un diagrama de líneas de campo, ¿qué nos indica una zona donde las líneas están muy juntas (alta densidad) comparada con una zona donde están muy separadas?"

explicacion: |
  La densidad de las líneas de campo es proporcional a la magnitud del vector campo eléctrico E. Donde las líneas están más próximas, el campo es más intenso.
```

### 20 — Pasos para determinar la dirección de la fuerza

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["procedimiento"]

tipo: ordenar
opciones_explicitas: ["Identificar el signo de la carga de prueba.", "Determinar la dirección del campo eléctrico en el punto.", "Dibujar el vector fuerza resultante."]

respuesta_orden: ["Identificar el signo de la carga de prueba.", "Determinar la dirección del campo eléctrico en el punto.", "Dibujar el vector fuerza resultante."]

enunciado: "Ordena los pasos lógicos para determinar la dirección de la fuerza eléctrica que actúa sobre una carga de prueba en un punto dado."

explicacion: |
  Para hallar la fuerza F = q · E, primero debemos conocer el signo de q (para saber si la fuerza sigue o se opone al campo) y la dirección de E en ese punto específico.
```

### 21 — El sensor de proximidad

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["electrostática", "sensores"]

variables:
  datos: [["una carga de prueba positiva", "hacia afuera de la carga"], ["una carga de prueba negativa", "hacia adentro de la carga"]]
  idx: uno_de([0, 1])

enunciado: "En un sensor de proximidad industrial, se utiliza una carga de prueba para detectar la presencia de un objeto cargado. Si la carga de prueba es {datos[idx][0]}, la dirección de la fuerza eléctrica sobre ella será {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["hacia afuera de la carga", "hacia adentro de la carga"]

explicacion: |
  El campo eléctrico define la dirección de la fuerza sobre una carga de prueba. Si la carga es positiva, la fuerza tiene la misma dirección que el campo. Si es negativa, la fuerza es opuesta a la dirección del campo.
```

### 22 — Representación visual

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo"]

enunciado: "Al observar las líneas de campo eléctrico de una carga puntual positiva, se puede afirmar que las líneas siempre comienzan en la carga y se dirigen hacia ___."

respuesta: "el infinito"
tipo: completar
respuestas_validas:
  - "el infinito"
  - "infinito"

explicacion: |
  Las líneas de campo eléctrico son representaciones conceptuales. Para una carga positiva, las líneas son radiales y salen de la carga hacia el infinito.
```

### 23 — Fuerza en un dispositivo de filtrado

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza_electrica", "calculo"]

variables:
  datos: [[1.5, 1.5], [2.0, 2.0], [0.5, 0.5]]
  idx: uno_de([0, 1, 2])

enunciado: "En un proceso de filtrado de partículas cargadas, una partícula con carga de {datos[idx][0]} C se encuentra dentro de un campo eléctrico uniforme de 1 N/C. La magnitud de la fuerza eléctrica que actúa sobre la partícula es de ___ N."

pasos:
  - "Identificar la carga (q)"
  - "Identificar la intensidad del campo (E)"
  - "Aplicar la fórmula F = q * E"

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  La magnitud de la fuerza eléctrica se calcula mediante el producto de la carga por la intensidad del campo: F = q * E.
```

### 24 — Propiedades de las líneas de campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo"]

enunciado: "¿Es correcto afirmar que dos líneas de campo eléctrico pueden cruzarse en un punto del espacio?"

respuesta: falso
tipo: vf

explicacion: |
  Las líneas de campo eléctrico nunca se cruzan, ya que en cada punto del espacio el campo eléctrico tiene una única dirección y magnitud resultante.
```

### 25 — Secuencia de análisis de campo

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "avanzado"
  tags: ["metodologia", "analisis"]

enunciado: "Para determinar el vector campo eléctrico en un punto dado, un estudiante debe seguir este orden lógico de análisis:"

opciones_explicitas: ["Determinar la carga de la fuente", "Calcular la dirección del vector campo", "Calcular la magnitud del campo", "Evaluar la fuerza sobre una carga de prueba"]
respuesta_orden: ["Determinar la carga de la fuente", "Calcular la magnitud del campo", "Calcular la dirección del vector campo", "Evaluar la fuerza sobre una carga de prueba"]
tipo: ordenar

explicacion: |
  Primero se conocen las fuentes (cargas), luego se calcula la magnitud y dirección del campo en un punto, y finalmente se usa ese campo para hallar la fuerza sobre otra carga.
```
