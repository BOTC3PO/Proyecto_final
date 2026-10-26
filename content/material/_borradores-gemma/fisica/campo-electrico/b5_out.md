### 1 — El sensor de proximidad
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["electrostática", "sensores"]

variables:
  escenario: uno_de([["una carga de prueba positiva", "hacia afuera de la carga"], ["una carga de prueba negativa", "hacia adentro de la carga"]])
  idx: uno_de([0, 1])

enunciado: "En un sensor de proximidad industrial, se utiliza una carga de prueba para detectar la presencia de un objeto cargado. Si la carga de prueba es {escenario[idx][0]}, la dirección de la fuerza eléctrica sobre ella será {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["hacia afuera de la carga", "hacia adentro de la carga"]

explicacion: |
  El campo eléctrico define la dirección de la fuerza sobre una carga de prueba. Si la carga es positiva, la fuerza tiene la misma dirección que el campo. Si es negativa, la fuerza es opuesta a la dirección del campo.
```

### 2 — Representación visual
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo"]

enunciado: "Al observar las líneas de campo eléctrico de una carga puntual positiva, se puede afirmar que las líneas siempre comienzan en la carga y se dirigen hacia el ___."

respuesta: infinito
tipo: completar
respuestas_validas: ["infinito", "el infinito"]

explicacion: |
  Las líneas de campo eléctrico son representaciones conceptuales. Para una carga positiva, las líneas son radiales y salen de la carga hacia el infinito.
```

### 3 — Fuerza en un dispositivo de filtrado
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza_electrica", "calculo"]

variables:
  datos: [["1.5", "0.05"], ["2.0", "0.08"], ["0.5", "0.02"]]
  idx: uno_de([0, 1, 2])

enunciado: "En un proceso de filtrado de partículas cargadas, una partícula con carga de {datos[idx][0]} C se encuentra dentro de un campo eléctrico uniforme de 1 N/C. La magnitud de la fuerza eléctrica que actúa sobre la partícula es de ___ N."

pasos:
  - "Identificar la carga (q)"
  - "Identificar la intensidad del campo (E)"
  - "Aplicar la fórmula F = q * E"

respuesta: datos[idx][1]
tipo: input
tolerancia_abs: 0.001

explicacion: |
  La magnitud de la fuerza eléctrica se calcula mediante el producto de la carga por la intensidad del campo: F = q * E.
```

### 4 — Propiedades de las líneas de campo
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

### 5 — Secuencia de análisis de campo
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "avanzado"
  tags: ["metodologia", "analisis"]

enunciado: "Para determinar el vector campo eléctrico en un punto dado, un estudiante debe seguir este orden lógico de análisis:"

opciones_explicitas: ["Determinar la carga de la fuente", "Calcular la dirección del vector campo", "Calcular la magnitud del campo", "Evaluar la fuerza sobre una carga de prueba"]
respuesta: ["Determinar la carga de la fuente", "Calcular la magnitud del campo", "Calcular la dirección del vector campo", "Evaluar la fuerza sobre una carga de prueba"]
tipo: ordenar

explicacion: |
  Primero se conocen las fuentes (cargas), luego se calcula la magnitud y dirección del campo en un punto, y finalmente se usa ese campo para hallar la fuerza sobre otra carga.
```