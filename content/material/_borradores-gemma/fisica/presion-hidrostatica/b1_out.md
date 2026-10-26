### 1 — Definición de presión hidrostática
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["definicion", "fluido"]

respuesta: "presion"
tipo: "completar"
respuestas_validas: ["presion"]

enunciado: "La ________ es la presión que ejerce un fluido en reposo sobre las paredes del recipiente que lo contiene y sobre cualquier cuerpo sumergido en él."

explicacion: |
  La presión hidrostática es la presión que ejerce un fluido en reposo debido al peso de la columna de fluido que tiene encima.
```

### 2 — Dependencia de la profundidad
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["relaciones", "profundidad"]

opciones_explicitas: ["aumenta", "disminuye", "se mantiene constante"]
respuesta: "aumenta"
tipo: "mc"

enunciado: "Si nos sumergimos en un lago y descendemos hacia el fondo, la presión hidrostática sobre nuestro cuerpo ________."

explicacion: |
  A mayor profundidad (mayor $h$), mayor es el peso de la columna de fluido sobre nosotros, por lo tanto, la presión aumenta.
```

### 3 — Factores de la presión hidrostática
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["variables", "formula"]

respuesta: verdadero
tipo: "vf"

enunciado: "La presión hidrostática depende de la densidad del fluido y de la profundidad, pero no depende de la forma del recipiente."

explicacion: |
  Correcto. La fórmula $P = \rho \cdot g \cdot h$ muestra que la presión solo depende de la densidad ($\rho$), la gravedad ($g$) y la profundidad ($h$), no de la geometría del contenedor.
```

### 4 — Variables de la ecuación
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["variables", "formula"]

variables:
  datos: [[1000, "densidad", "kg/m^3"], [9.8, "gravedad", "m/s^2"], [5, "profundidad", "m"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["densidad", "gravedad", "profundidad"]

enunciado: "En la fórmula de la presión hidrostática $P = \rho \cdot g \cdot h$, la variable $\rho$ representa la ________."

explicacion: |
  La letra griega $\rho$ (rho) se utiliza convencionalmente en física para representar la densidad de una sustancia.
```

### 5 — Orden de componentes de la presión
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["conceptos", "orden"]

opciones_explicitas: ["Densidad", "Gravedad", "Profundidad"]
respuesta: ["Densidad", "Gravedad", "Profundidad"]
tipo: "ordenar"

enunciado: "Ordena los factores que determinan la presión hidrostática según aparecen en la fórmula $P = \rho \cdot g \cdot h$ (de izquierda a derecha):"

explicacion: |
  La secuencia correcta es: Densidad ($\rho$), Gravedad ($g$) y Profundidad ($h$).
```