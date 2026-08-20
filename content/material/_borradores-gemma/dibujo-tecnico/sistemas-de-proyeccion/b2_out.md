### 1 — Proyección Ortogonal: El concepto de paralelismo
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["ortogonal", "proyecciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una proyección ortogonal, las líneas proyectantes (rayos proyectantes) son paralelas entre sí y son perpendiculares al plano de proyección."

explicacion: |
  Efectivamente. La característica fundamental de la proyección ortogonal es que los rayos son perpendiculares al plano, lo que garantiza que la forma de la cara proyectada sea fiel a la realidad sin distorsiones de perspectiva.
```

### 2 — Identificación de sistemas
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["axonométrica", "oblicua", "identificación"]

variables:
  escenario: uno_de([["una vista de un cubo donde las caras frontales se ven paralelas al plano", "axonométrica"], ["una vista donde la cara frontal no tiene deformación y las caras laterales se ven con ángulo", "oblicua"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["axonométrica", "oblicua"]

enunciado: "Si al observar un dibujo técnico vemos que la cara frontal del objeto no presenta deformación (se ve de frente) y las caras laterales se proyectan con un ángulo de inclinación, estamos ante una proyección: ___"

explicacion: |
  En la proyección oblicua, una de las caras se mantiene paralela al plano de proyección (sin deformación), mientras que las demás se proyectan con una inclinación para dar sensación de profundidad.

```

### 3 — Cálculo de ángulos en Axonometría
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["isométrica", "ángulos"]

variables:
  datos: [[120, "isométrica"], [90, "ortogonal"], [45, "oblicua"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["isométrica", "ortogonal", "oblicua"]

enunciado: "En una proyección isométrica (un tipo de axonometría), los tres ejes principales del objeto forman ángulos de ___ grados entre sí sobre el plano de proyección."

explicacion: |
  En la proyección isométrica, los tres ejes principales (x, y, z) están representados con el mismo ángulo de inclinación respecto a la horizontal, siendo 120 grados entre cada par de ejes.

```

### 4 — Secuencia de pasos para el trazado
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["proceso", "dibujo"]

respuesta: ["Trazar el plano de proyección", "Situar el objeto en el espacio", "Lanzar rayos proyectantes perpendiculares", "Dibujar la proyección resultante"]
tipo: ordenar
opciones_explicitas: ["Trazar el plano de proyección", "Situar el objeto en el espacio", "Lanzar rayos proyectantes perpendiculares", "Dibujar la proyección resultante"]

enunciado: "Ordena los pasos lógicos para realizar una proyección ortogonal de un objeto sobre un plano:"

explicacion: |
  Primero se define el plano, luego se posiciona el objeto, se establecen los rayos perpendiculares y finalmente se marca la intersección (la proyección) en el plano.
```

### 5 — Diferencia de escala
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["axonométrica", "escala"]

variables:
  caso: [[1.0, "isométrica"], [0.5, "oblicua"]]
  idx: uno_de([0, 1])

respuesta: caso[idx][0]
tipo: completar
respuestas_validas: ["1.0", "0.5"]

enunciado: "En una proyección isométrica, el coeficiente de reducción de las dimensiones en los tres ejes principales es de ___."

explicacion: |
  A diferencia de la proyección oblicua (donde las caras frontales mantienen escala 1:1), en la isométrica todas las dimensiones se reducen por igual para mantener la proporción visual de los tres ejes.
```