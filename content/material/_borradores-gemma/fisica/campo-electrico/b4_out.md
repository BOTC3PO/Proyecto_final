### 1 — Representación de líneas de campo
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

### 2 — Relación Fuerza-Campo
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["relacion", "fuerza"]

variables:
  escenario: uno_de([
    ["carga_positiva", "hacia afuera"],
    ["carga_negativa", "hacia adentro"]
  ])

tipo: completar
respuestas_validas: ["hacia afuera", "hacia adentro"]

enunciado: "Si colocamos una carga de prueba positiva en un punto del campo, la dirección de la fuerza sobre ella será ___ de la carga que genera el campo."

respuesta: escenario[0][1]

explicacion: |
  La fuerza sobre una carga positiva tiene la misma dirección que el vector campo eléctrico en ese punto. Si la carga es negativa, la fuerza es opuesta. En este caso, la carga es positiva, por lo que la fuerza es {escenario[0][1]}.
```

### 3 — Campo vs Fuerza eléctrica
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

### 4 — Densidad de líneas de campo
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
  La densidad de las líneas de campo es proporcional a la magnitud del vector campo eléctrico $\vec{E}$. Donde las líneas están más próximas, el campo es más intenso.
```

### 5 — Pasos para determinar la dirección de la fuerza
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["procedimiento"]

tipo: ordenar
opciones_explicitas: ["Identificar el signo de la carga de prueba.", "Determinar la dirección del campo eléctrico en el punto.", "Dibujar el vector fuerza resultante."]

respuesta: ["Identificar el signo de la carga de prueba.", "Determinar la dirección del campo eléctrico en el punto.", "Dibujar el vector fuerza resultante."]

enunciado: "Ordena los pasos lógicos para determinar la dirección de la fuerza eléctrica que actúa sobre una carga de prueba en un punto dado."

explicacion: |
  Para hallar la fuerza $\vec{F} = q \cdot \vec{E}$, primero debemos conocer el signo de $q$ (para saber si la fuerza sigue o se opone al campo) y la dirección de $\vec{E}$ en ese punto específico.
```