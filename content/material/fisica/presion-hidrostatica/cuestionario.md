# Fisica — Presion hidrostatica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de presión hidrostática

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["definicion", "fluido"]

respuesta: "presion"
tipo: "completar"
respuestas_validas:
  - "presion"

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

respuesta: "densidad"
tipo: "mc"
opciones_explicitas: ["densidad", "gravedad", "profundidad"]

enunciado: "En la fórmula de la presión hidrostática $P = \\rho \\cdot g \\cdot h$, la variable $\\rho$ representa la ________."

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

tipo: ordenar
opciones_explicitas: ["Densidad", "Gravedad", "Profundidad"]
respuesta_orden: ["Densidad", "Gravedad", "Profundidad"]

enunciado: "Ordena los factores que determinan la presión hidrostática según aparecen en la fórmula P = rho * g * h (de izquierda a derecha):"

explicacion: "La secuencia correcta es: Densidad (rho), Gravedad (g) y Profundidad (h)."
```

### 6 — Concepto de presión hidrostática

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

respuesta: "únicamente de la profundidad, la densidad y la gravedad"
tipo: "mc"
opciones_explicitas: ["únicamente de la profundidad, la densidad y la gravedad", "del área de la base del recipiente", "del volumen total del fluido", "de la forma del recipiente"]

enunciado: "La presión hidrostática en un fluido en reposo depende de la profundidad, la densidad del fluido y la aceleración de la gravedad. Si un recipiente tiene una forma irregular, la presión en el fondo dependerá de:"

pasos:
  - "Identificar que la presión hidrostática no depende de la forma del recipiente, sino de la altura de la columna de fluido."

explicacion: |
  La fórmula es P = ρ · g · h. Como puedes ver, la geometría del recipiente no aparece en la ecuación, solo importa la profundidad vertical (h).
```

### 7 — Cálculo de presión en el fondo

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["calculo", "hidrostatica"]

variables:
  escenario: uno_de([[1000, 10, 20, 200000], [800, 5, 10, 40000], [1260, 4, 5, 25200]])

respuesta: escenario[3]
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Calcula la presión hidrostática en el fondo de un tanque que contiene un fluido con densidad de {escenario[0]} kg/m³, a una profundidad de {escenario[1]} m. Considera la gravedad g = {escenario[2]} m/s²."

pasos:
  - "Identificar los datos: ρ = {escenario[0]} kg/m³, h = {escenario[1]} m, g = {escenario[2]} m/s²."
  - "Aplicar la fórmula: P = ρ · g · h."
  - "Calcular: {escenario[0]} * {escenario[2]} * {escenario[1]} = {escenario[3]} Pa."

explicacion: |
  El resultado es {escenario[3]} Pascales (Pa).
```

### 8 — Relación con la densidad

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["teoria", "relaciones"]

tipo: vf
respuesta: verdadero

enunciado: "Si sumergimos un objeto en un fluido y luego cambiamos ese fluido por uno de mayor densidad (manteniendo la profundidad constante), la presión hidrostática sobre el objeto aumentará."

explicacion: |
  Correcto. Como P = ρ · g · h, la presión es directamente proporcional a la densidad (ρ).
```

### 9 — Completar fórmula

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["formula"]

respuesta: "rho * g * h"
tipo: "completar"
respuestas_validas:
  - "rho * g * h"
  - "ρ * g * h"

enunciado: "La expresión matemática para calcular la presión hidrostática es P = ___."

explicacion: |
  La fórmula completa es el producto de la densidad (ρ), la gravedad (g) y la profundidad (h).
```

### 10 — Orden de magnitudes de presión

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["ordenar", "procedimiento"]

tipo: ordenar
opciones_explicitas: ["Identificar datos", "Calcular producto", "Verificar unidades"]
respuesta_orden: ["Identificar datos", "Calcular producto", "Verificar unidades"]

enunciado: "Ordena los pasos lógicos para resolver un problema de presión hidrostática:"

pasos:
  - "Primero extraemos la densidad, la profundidad y la gravedad."
  - "Luego multiplicamos los tres valores obtenidos."
  - "Finalmente nos aseguramos de que el resultado esté en Pascales (N/m²)."

explicacion: |
  Un procedimiento sistemático evita errores de cálculo y de unidades.
```

### 11 — El error de la presión absoluta

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion", "fluido", "conceptos_clave"]

enunciado: "Un buceador se encuentra a una profundidad de 10 metros bajo la superficie del mar. Si la presión atmosférica en la superficie es de 1 atm, la presión que experimenta el buceador es la suma de la presión atmosférica más la presión hidrostática. ¿La presión hidrostática depende de la presión atmosférica superficial?"

respuesta: falso
tipo: vf

explicacion: |
  La presión hidrostática depende únicamente de la densidad del fluido ($\rho$), la gravedad ($g$) y la profundidad ($h$). La presión atmosférica es una presión externa que se suma para obtener la presión absoluta, pero no altera el valor de la presión hidrostática en sí misma.
```

### 12 — La confusión de la densidad

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["densidad", "presion", "fluido"]

variables:
  idx: uno_de([0, 1, 2])
  densidades: [1000, 800, 1300]
  nombres: ["agua", "aceite", "glicerina"]

enunciado: "Un recipiente contiene un fluido con densidad de {densidades[idx]} kg/m³ ({nombres[idx]}) y una profundidad de 2 metros. Si la gravedad es 9.8 m/s², ¿cuál es la presión hidrostática en el fondo del recipiente?"

pasos:
  - "Identificar la densidad del fluido: {densidades[idx]} kg/m³"
  - "Aplicar la fórmula P = ρ · g · h"
  - "Calcular: {densidades[idx]} * 9.8 * 2"

respuesta: redondear(densidades[idx] * 9.8 * 2, 2)
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  La presión hidrostática se calcula multiplicando la densidad por la gravedad por la profundidad. En este caso: {densidades[idx]} * 9.8 * 2 = {redondear(densidades[idx] * 9.8 * 2, 2)} Pa.
```

### 13 — ¿Qué influye en la presión?

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["conceptos", "variables"]

enunciado: "Un recipiente cilíndrico contiene un líquido en reposo. Si aumentamos la profundidad de un punto dentro del líquido sin cambiar la densidad del fluido ni la gravedad, la presión hidrostática en ese punto ___."

opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

respuesta: "aumenta"
tipo: mc

explicacion: |
  De acuerdo a la fórmula $P = \rho \cdot g \cdot h$, la presión es directamente proporcional a la profundidad ($h$). A mayor profundidad, mayor presión hidrostática.
```

### 14 — El error de la forma del recipiente

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["paradoja_hidrostatica", "forma_recipiente"]

enunciado: "Se tienen dos recipientes: uno es un cilindro recto y el otro es un cono invertido. Ambos están llenos de agua hasta la misma altura de 0.5 metros. ¿Cuál de los dos presenta mayor presión en el fondo debido únicamente a la presión hidrostática?"

opciones_explicitas: ["El cilindro", "El cono", "Ambos tienen la misma presión"]

respuesta: "Ambos tienen la misma presión"
tipo: mc

explicacion: |
  Este es un error común. La presión hidrostática depende de la profundidad y la densidad, NO de la forma del recipiente ni del volumen total de líquido. Como la altura ($h$) es la misma, la presión en el fondo es igual.
```

### 15 — Completar la fórmula

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["formula", "simbolos"]

enunciado: "En la expresión de la presión hidrostática $P = \\rho \\cdot g \\cdot h$, la variable $\\rho$ representa la ___ del fluido."

respuestas_validas:
  - "densidad"

respuesta: "densidad"
tipo: completar

explicacion: |
  En la fórmula de la presión hidrostática, $\rho$ (rho) es el símbolo utilizado para representar la densidad del fluido.
```

### 16 — Diferencia entre Presión y Fuerza

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion", "fuerza", "conceptos"]

enunciado: "La presión se define como la fuerza ejercida por unidad de ___."

respuestas_validas:
  - "área"
  - "superficie"

respuesta: "área"
tipo: completar

explicacion: |
  La presión es la magnitud escalar que mide la distribución de una fuerza sobre una superficie ($P = F/A$).
```

### 17 — Dependencia de la forma del recipiente

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["paradoja_de_pascal", "presion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[40, 100], [50, 150]]
  factor_idx: uno_de([0, 1, 2])
  factores: ["área", "volumen", "forma"]

enunciado: "Considerando un recipiente con un área de base de {datos[escenario_idx][0]} cm² y una profundidad de {datos[escenario_idx][1]} cm, la presión hidrostática en el fondo depende únicamente de la densidad del fluido, la gravedad y la profundidad, siendo independiente del {factores[factor_idx]} del recipiente."

opciones_explicitas: ["área", "volumen", "forma"]

respuesta: factores[factor_idx]
tipo: mc

explicacion: |
  De acuerdo con la ecuación de la presión hidrostática $P = \rho \cdot g \cdot h$, la forma del recipiente o el área de la base no afectan la presión en un punto determinado a una profundidad $h$ constante.
```

### 18 — Presión Atmosférica vs Hidrostática

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

### 19 — Comparación de densidades

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

respuesta: "mayor"
tipo: mc

explicacion: |
  Dado que $P$ es directamente proporcional a la densidad $\rho$, a mayor densidad, mayor presión hidrostática para una misma profundidad.
```

### 20 — Relación entre profundidad y presión

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["profundidad", "relacion"]

enunciado: "Si la profundidad de un buzo aumenta al doble, la presión hidrostática ejercida por el agua sobre él será exactamente el ___ de la presión inicial (asumiendo densidad y gravedad constantes)."

respuestas_validas:
  - "doble"

respuesta: "doble"
tipo: completar

explicacion: |
  La presión hidrostática es directamente proporcional a la profundidad ($P \propto h$). Si la profundidad se duplica, la presión también.
```

### 21 — Presión en un buzo

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["fluidos", "presion"]

variables:
  idx: uno_de([0, 1, 2])
  profundidades: [15, 10, 5]

respuesta: 1000 * 9.8 * profundidades[idx]
tipo: completar
tolerancia_abs: 1

enunciado: "Un buzo se encuentra sumergido en agua dulce (densidad = 1000 kg/m³) a una profundidad de {profundidades[idx]} metros. ¿Cuál es la presión hidrostática que soporta (en Pascales)?"

pasos:
  - "Identificar la densidad del fluido (ρ = 1000 kg/m³)."
  - "Identificar la profundidad (h)."
  - "Multiplicar ρ * g * h (usando g = 9.8 m/s²)."

explicacion: |
  La presión hidrostática se calcula con la fórmula P = ρ · g · h.
  Para este caso: 1000 * 9.8 * {profundidades[idx]} = {1000 * 9.8 * profundidades[idx]} Pa.
```

### 22 — Comparación de presiones

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["comparacion", "fluidos"]

variables:
  nombres: [["agua dulce", "agua salada"], ["agua dulce", "mercurio"], ["agua dulce", "aceite"]]
  densidades: [[1000, 1030], [1000, 13600], [1000, 800]]
  idx: uno_de([0, 1, 2])
  nombre1: nombres[idx][0]
  rho1: densidades[idx][0]
  nombre2: nombres[idx][1]
  rho2: densidades[idx][1]

respuesta: rho1 < rho2
tipo: vf
enunciado: "Si dos recipientes iguales están llenos con {nombre1} (densidad {rho1} kg/m³) y {nombre2} (densidad {rho2} kg/m³) respectivamente, y se miden a la misma profundidad, ¿la presión en el recipiente con {nombre1} es menor que en el de {nombre2}?"

explicacion: |
  La presión hidrostática es directamente proporcional a la densidad del fluido. Comparando: {nombre1} tiene {rho1} kg/m³ y {nombre2} tiene {rho2} kg/m³.
```

### 23 — El misterio del tanque

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["completar", "fluidos"]

variables:
  idx: uno_de([0, 1, 2])
  profundidades: [5, 10, 2]
  rho: 1000
  g: 9.8
  h: profundidades[idx]
  p_calc: redondear(rho * g * h, 0)

respuesta: h
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un tanque con un fluido de densidad 1000 kg/m³ tiene una profundidad de ___ metros. Si la presión hidrostática en el fondo es de {p_calc} Pa (con g = 9.8 m/s²), ¿cuál es la profundidad?"

explicacion: |
  Despejando la fórmula P = ρ · g · h para la profundidad (h):
  h = P / (ρ · g)
  En este caso: {p_calc} / (1000 * 9.8) ≈ {h} m.
```

### 24 — Profundidad y presión

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["mc", "fluidos"]

variables:
  escenarios: [["10000", "10300"], ["25000", "26500"], ["50000", "52000"]]
  idx: uno_de([0, 1, 2])
  p_base: escenarios[idx][0]
  p_sal: escenarios[idx][1]

respuesta: "Presión en agua salada"
tipo: mc
opciones_explicitas: ["Presión en agua dulce", "Presión en agua salada"]

enunciado: "Si comparamos un objeto a la misma profundidad en agua dulce (densidad 1000 kg/m³) y agua salada (densidad 1030 kg/m³), ¿en qué fluido la presión será de aproximadamente {p_sal} Pa?"

explicacion: |
  A mayor densidad, mayor presión hidrostática. El agua salada es más densa, por lo tanto ejerce una presión mayor ({p_sal} Pa) que el agua dulce ({p_base} Pa).
```

### 25 — Orden de presiones

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatic"
  nivel: "intermedio"
  tags: ["ordenar", "fluidos"]

variables:
  niveles: [["1m", "5m", "10m"], ["10m", "2m", "5m"], ["20m", "10m", "30m"]]
  idx: uno_de([0, 1, 2])

respuesta_orden: ["1m", "5m", "10m"]
tipo: ordenar
opciones_explicitas: ["1m", "5m", "10m"]

enunciado: "Ordena las profundidades de un buzo de menor a mayor presión hidrostática (asumiendo el mismo fluido):"

explicacion: |
  La presión hidrostática aumenta linealmente con la profundidad. Por lo tanto, el orden de menor a mayor presión corresponde al orden de menor a mayor profundidad.
```
