### 1 — Concepto de Campo Eléctrico
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["definicion", "electrostática"]

respuesta: "campo"
tipo: completar
respuestas_validas: ["campo"]

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

variables:
  caso: uno_de([0, 1])

respuesta: tabla[caso][1]
tipo: mc
opciones_explicitas: ["misma", "opuesta", "perpendicular"]

enunciado: "Considerando una carga de prueba negativa en un campo eléctrico dado, la dirección de la fuerza que experimenta la carga será ___ a la dirección del vector campo eléctrico."

pasos:
  - "Identificar el signo de la carga de prueba."
  - "Relacionar el signo con la dirección de la fuerza respecto al campo."

explicacion: |
  Para una carga negativa, el vector fuerza tiene la dirección opuesta al vector campo eléctrico. Para una carga positiva, tienen la misma dirección.

variables_tabla:
  tabla: [["misma", "opuesta"], ["opuesta", "misma"]]
```

### 5 — Propiedades de las líneas de campo
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo", "propiedades"]

respuesta: ["no se cruzan", "salen de carga positiva", "entran en carga negativa"]
tipo: ordenar
opciones_explicitas: ["salen de carga positiva", "entran en carga negativa", "no se cruzan"]

enunciado: "Ordena las siguientes propiedades de las líneas de campo eléctrico de mayor a menor importancia conceptual (según su definición geométrica y física):"

explicacion: |
  Las líneas de campo representan la dirección de la fuerza, no se cruzan nunca porque en un punto el campo tiene una dirección única, y su sentido depende del signo de la carga.
```