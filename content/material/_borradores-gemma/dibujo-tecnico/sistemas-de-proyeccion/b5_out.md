### 1 — Identificación de sistema de proyección
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["ortogonal", "proyeccion"]

variables:
  escenario: uno_de([["Una pieza mecánica representada con sus vistas frontal, superior y lateral sin distorsión de profundidad", "ortogonal"], ["Un dibujo de una pieza donde se ve el frente y el lateral con una profundidad inclinada", "oblicua"], ["Una representación de un objeto donde se ven tres caras con una escala de reducción constante", "axonométrica"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["ortogonal", "oblicua", "axonométrica"]

enunciado: "Si un técnico dibuja una pieza mostrando sus vistas principales (alzado, planta y perfil) de forma perpendicular a los planos de proyección, ¿qué sistema está utilizando? El caso actual es: {escenario[idx][0]}"

explicacion: |
  La proyección ortogonal se caracteriza por proyectar líneas perpendiculares a los planos de proyección, permitiendo obtener las vistas diédricas de un objeto sin distorsión de forma.
```

### 2 — Veracidad de la axonometría
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["verdad_falso", "axonometria"]

respuesta: verdadero
tipo: vf

enunciado: "¿En una proyección axonométrica, las dimensiones de los ejes se mantienen proporcionales entre sí, permitiendo visualizar la pieza en tres dimensiones en un solo dibujo?"

explicacion: |
  Verdadero. La axonometría permite representar un objeto tridimensional en un plano bidimensional manteniendo la proporción de los ejes (ya sea isométrica, dimétrica o trimétrica).
```

### 3 — Completar concepto de oblicua
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["oblicua", "terminologia"]

variables:
  datos: [["En la proyección oblicua, la cara frontal es paralela al plano y la profundidad se proyecta con un ángulo", "oblicua"], ["En la proyección ortogonal, las líneas de proyección son", "perpendiculares"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["oblicua", "perpendiculares"]

enunciado: "El sistema de proyección que se caracteriza por que la cara frontal no sufre distorsión pero las líneas de fuga tienen un ángulo respecto a la vertical es la proyección ___."

explicacion: |
  En la proyección oblicua, la cara frontal se mantiene paralela al plano de proyección (sin distorsión), mientras que las aristas de profundidad se dibujan con una inclinación determinada.
```

### 4 — Ordenar procesos de representación
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["proceso", "ordenar"]

respuesta: ["Definición de planos de proyección", "Determinación de la posición del objeto", "Trazado de líneas de proyección", "Representación de las vistas"]
tipo: ordenar
opciones_explicitas: ["Definición de planos de proyección", "Determinación de la posición del objeto", "Trazado de líneas de proyección", "Representación de las vistas"]

enunciado: "Ordene los pasos lógicos para realizar una proyección ortogonal de una pieza compleja:"

explicacion: |
  Para representar un objeto correctamente, primero se deben establecer los planos, luego posicionar el objeto respecto a ellos, trazar las líneas de visión y finalmente dibujar las vistas resultantes.
```

### 5 — Diferencias métricas (Cálculo de escala)
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["axonometria", "isometria"]

variables:
  caso: uno_de([[1, 1.0, "isométrica"], [1.2, 0.8, "dimétrica"], [1.5, 0.5, "trimétrica"]])
  idx: uno_de([0,1,2])

respuesta: caso[idx][0]
tipo: mc
opciones_explicitas: ["1.0", "1.2", "1.5"]

enunciado: "En una proyección isométrica, el coeficiente de reducción de los ejes es igual a {caso[idx][1]}. ¿Cuál es el valor del coeficiente de escala para este caso específico?"

pasos:
  - "Identificar el valor de la escala en la tabla de casos"
  - "Comparar con las opciones dadas"

explicacion: |
  En la proyección isométrica, todos los ejes tienen la misma inclinación y el coeficiente de reducción es igual a 1 (o el mismo para todos los ejes).
```