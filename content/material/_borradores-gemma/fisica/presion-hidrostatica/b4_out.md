### 1 — Diferencia entre Presión y Fuerza
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion", "fuerza", "conceptos"]

enunciado: "Mientras que la fuerza es una interacción que puede ser vectorial y depender del área de contacto, la presión se define como la ___ ejercida por una superficie sobre un objeto."

respuestas_validas: ["fuerza"]

respuesta: "fuerza"
tipo: completar

explicacion: |
  La presión es la magnitud escalar que mide la distribución de una fuerza sobre una superficie ($P = F/A$).
```

### 2 — Dependencia de la forma del recipiente
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["paradoja_de_pascal", "presion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[40, 100, 200], [50, 150, 250]]

enunciado: "Considerando un recipiente con un área de base de {datos[escenario_idx][0]} cm² y una profundidad de {datos[escenario_idx][1]} cm, la presión hidrostática en el fondo depende únicamente de la densidad del fluido, la gravedad y la profundidad, siendo independiente del {datos[escenario_idx][2]} del recipiente."

opciones_explicitas: ["área", "volumen", "forma"]

respuesta: uno_de(["área", "volumen", "forma"])
tipo: mc

explicacion: |
  De acuerdo con la ecuación de la presión hidrostática $P = \rho \cdot g \cdot h$, la forma del recipiente o el área de la base no afectan la presión en un punto determinado a una profundidad $h$ constante.
```

### 3 — Presión Atmosférica vs Hidrostática
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion_atmosferica", "presion_total"]

enunciado: "¿Es correcto afirmar que la presión total en el fondo de un tanque con fluido es igual a la suma de la presión atmosférica más la presión hidrostática?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: mc

explicacion: |
  La presión absoluta o total es la suma de la presión manométrica (hidrostática) y la presión ambiental (atmosférica).
```

### 4 — Comparación de densidades
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["densidad", "comparacion"]

variables:
  fluido_idx: uno_de([0, 1])
  fluidos: [[1000, 800], [800, 1000]]

enunciado: "Si tenemos dos columnas de igual radio y misma altura $h$, pero una contiene un fluido de densidad {fluidos[fluido_idx][0]} kg/m³ y la otra uno de {fluidos[fluido_idx][1]} kg/m³, la presión en la base de la columna con mayor densidad será ___ que la otra."

opciones_explicitas: ["mayor", "menor", "igual"]

respuesta: uno_de(["mayor", "menor", "igual"])
tipo: mc

explicacion: |
  Dado que $P$ es directamente proporcional a la densidad $\rho$, a mayor densidad, mayor presión hidrostática para una misma profundidad.
```

### 5 — Relación entre profundidad y presión
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["profundidad", "relacion"]

enunciado: "Si la profundidad de un buzo aumenta al doble, la presión hidrostática ejercida por el agua sobre él será exactamente el ___ de la presión inicial (asumiendo densidad y gravedad constantes)."

respuestas_validas: ["doble", "cuádruple", "mitad"]

respuesta: "doble"
tipo: completar

explicacion: |
  La presión hidrostática es directamente proporcional a la profundidad ($P \propto h$). Si la profundidad se duplica, la presión también.
```