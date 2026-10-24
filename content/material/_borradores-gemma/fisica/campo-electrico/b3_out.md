### 1 — Representación de líneas de campo
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion", "lineas_de_campo"]

tipo: mc
opciones_explicitas: ["Las líneas de campo pueden cruzarse si las cargas son muy grandes", "Las líneas de campo nunca se cruzan", "Las líneas de campo son trayectorias reales de las cargas", "Las líneas de campo son líneas físicas de flujo de aire"]

enunciado: "Al representar el campo eléctrico mediante líneas de fuerza, ¿cuál de las siguientes afirmaciones es correcta respecto a su intersección?"

explicacion: |
  Las líneas de campo eléctrico representan la dirección del vector campo en cada punto. Si se cruzaran, el campo tendría dos direcciones distintas en un mismo punto, lo cual es físicamente imposible.
```

### 2 — Dirección del campo y signo de la carga
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["carga_electrica", "direccion"]

variables:
  idx: uno_de([0, 1])
  carga_tipo: uno_de(["positiva", "negativa"])
  direccion_linea: uno_de(["saliente", "entrante"])

enunciado: "Si colocamos una carga de tipo {carga_tipo} en el espacio, la dirección de las líneas de campo eléctrico será {direccion_linea}."

pasos:
  - "Identificar el signo de la carga"
  - "Recordar que las líneas salen de las cargas positivas y entran en las negativas"

respuesta: carga_tipo == "positiva" ? "saliente" : "entrante"
tipo: completar
respuestas_validas: ["saliente", "entrante"]

explicacion: |
  Por convención, las líneas de campo eléctrico se dibujan saliendo de las cargas positivas y entrando en las cargas negativas.
```

### 3 — Relación entre fuerza y campo
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza_electrica", "vector"]

tipo: vf

enunciado: "Si una carga eléctrica es colocada en un punto donde el campo eléctrico es nulo, la fuerza eléctrica que actúa sobre dicha carga será cero."

explicacion: |
  La relación está definida por la ecuación F = q * E. Si el vector campo eléctrico (E) es cero, el producto resultante (la fuerza F) también será cero, independientemente del valor de la carga q.
```

### 4 — Intensidad del campo y distancia
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["ley_coulomb", "intensidad"]

variables:
  distancia_relativa: uno_de([0.5, 2.0])
  factor_distancia: uno_de([4.0, 0.25])

enunciado: "Si la distancia entre una carga puntual y un punto en el espacio se duplica (se multiplica por 2), la magnitud del campo eléctrico en ese punto cambiará por un factor de ___."

pasos:
  - "Recordar que el campo eléctrico es inversamente proporcional al cuadrado de la distancia (E ∝ 1/r²)"
  - "Calcular (1 / 2²) para hallar el factor de cambio"

respuesta: factor_distancia
tipo: completar
respuestas_validas: ["4.0", "0.25"]

explicacion: |
  Dado que el campo eléctrico de una carga puntual sigue la ley de la inversa del cuadrado de la distancia, si la distancia aumenta por un factor de 2, el campo disminuye por un factor de 1/2² = 1/4 (0.25). Si la distancia se reduce a la mitad, el campo aumenta por un factor de 4.
```

### 5 — Concepto de campo eléctrico
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["definicion", "concepto"]

tipo: mc
opciones_explicitas: ["Es una fuerza física que actúa a distancia", "Es una propiedad del espacio que ejerce una carga sobre otras", "Es la velocidad de una carga en un campo", "Es la energía potencial de un sistema de cargas"]

enunciado: "¿Cuál es la definición más precisa de campo eléctrico en el contexto de la interacción entre cargas?"

explicacion: |
  El campo eléctrico no es una fuerza en sí misma, sino una perturbación o propiedad que el campo eléctrico 'imparte' al espacio circundante debido a la presencia de una carga, la cual se manifiesta como fuerza cuando otra carga se coloca en él.
```