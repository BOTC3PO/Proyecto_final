# Física — Gravitación universal: Newton y Kepler (cuestionario, 25 preguntas VBLang)

> Tema: `F11`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué establece la ley de gravitación de Newton

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "basico"
  tags: ["gravitacion", "vocabulario"]

enunciado: "¿Qué establece la ley de gravitación universal de Newton?"
tipo: mc
opciones_explicitas:
  - "Que dos masas cualesquiera se atraen con una fuerza proporcional al producto de las masas e inversamente proporcional al cuadrado de la distancia entre ellas"
  - "Que sólo los planetas se atraen entre sí, no los objetos cotidianos"
  - "Que la fuerza gravitatoria es siempre la misma sin importar la distancia"
respuesta: "Que dos masas cualesquiera se atraen con una fuerza proporcional al producto de las masas e inversamente proporcional al cuadrado de la distancia entre ellas"

explicacion: |
  F = G × m₁ × m₂ / r², válida para cualquier par de masas, no sólo
  para cuerpos astronómicos.
```

### 2 — Completar: proporcionalidad con las masas

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion", "completar"]

tipo: completar
enunciado: "Completá: la fuerza gravitatoria es directamente proporcional al producto de las ___."
respuestas_validas:
  - "masas"

explicacion: |
  A mayor masa de cualquiera de los dos cuerpos, mayor la fuerza.
```

### 3 — Completar: proporcionalidad con la distancia

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion", "completar"]

tipo: completar
enunciado: "Completá: la fuerza gravitatoria es inversamente proporcional al ___ de la distancia entre las masas."
respuestas_validas:
  - "cuadrado"

explicacion: |
  Es una ley de "cuadrado inverso" — al duplicar la distancia, la
  fuerza no se reduce a la mitad sino a un cuarto.
```

### 4 — Si la distancia se duplica

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["gravitacion"]

respuesta: falso
tipo: vf

enunciado: "Si la distancia entre dos masas se duplica, la fuerza gravitatoria entre ellas se reduce a la mitad."

explicacion: |
  Se reduce a 1/2² = 1/4, no a la mitad — es inversamente proporcional
  al CUADRADO de la distancia.
```

### 5 — Problema: la distancia se triplica

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["gravitacion", "problema"]

respuesta: redondear(1 / (3 ^ 2), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Si la distancia entre dos masas se triplica (y las masas no cambian), ¿a qué fracción de la fuerza original queda reducida la fuerza gravitatoria?"

pasos:
  - "F_nueva / F_original = 1 / (3²) = 1 / {3 ^ 2} = {redondear(1 / (3 ^ 2), 4)}"

explicacion: |
  Triplicar r divide la fuerza por 3² = 9.
```

### 6 — Problema: una masa se duplica

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion", "problema"]

respuesta: 2
tipo: input

enunciado: "Si una de las dos masas se duplica (la otra masa y la distancia no cambian), ¿cuántas veces mayor queda la fuerza gravitatoria?"

pasos:
  - "F es directamente proporcional a esa masa: duplicarla duplica F."

explicacion: |
  A diferencia de la distancia (que va al cuadrado), cada masa entra
  de forma lineal en la fórmula.
```

### 7 — Qué representa G

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "basico"
  tags: ["gravitacion", "vocabulario"]

enunciado: "¿Qué es G en la fórmula F = G × m₁ × m₂ / r²?"
tipo: mc
opciones_explicitas:
  - "La constante de gravitación universal, un número fijo extremadamente pequeño"
  - "La aceleración de la gravedad en la superficie terrestre (9,8 m/s²)"
  - "El peso de uno de los dos cuerpos"
respuesta: "La constante de gravitación universal, un número fijo extremadamente pequeño"

explicacion: |
  G ≈ 6,674×10⁻¹¹ N·m²/kg² — no depende del planeta ni de los cuerpos,
  a diferencia de g.
```

### 8 — G es la misma en todo el universo

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "La constante G tiene el mismo valor en cualquier parte del universo, a diferencia de g (que sí depende del planeta)."

explicacion: |
  Por eso se llama "universal": no depende de qué masas ni de dónde
  estén, siempre es el mismo número.
```

### 9 — Por qué no notamos la gravedad entre objetos cotidianos

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion"]

enunciado: "¿Por qué dos personas paradas una cerca de la otra no notan ninguna atracción gravitatoria entre sí?"
tipo: mc
opciones_explicitas:
  - "Porque G es un número tan pequeño que, con masas de unos pocos kilos, la fuerza resultante es prácticamente cero"
  - "Porque los seres humanos no generan gravedad"
  - "Porque la gravedad sólo existe entre planetas"
respuesta: "Porque G es un número tan pequeño que, con masas de unos pocos kilos, la fuerza resultante es prácticamente cero"

explicacion: |
  La fuerza existe, pero es tan chica que ningún sentido humano puede
  detectarla — hace falta una masa del tamaño de un planeta para que
  se vuelva relevante.
```

### 10 — Problema: fuerza gravitatoria entre dos objetos cotidianos

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["gravitacion", "problema"]

variables:
  m1: random(500, 2000)
  m2: random(500, 2000)
  r: random(1, 10)

respuesta: redondear(6.674e-11 * m1 * m2 / (r ^ 2) * 1e9, 2)
tipo: input
tolerancia_abs: 1

enunciado: "Dos objetos de {m1} kg y {m2} kg están a {r} m de distancia (G=6,674×10⁻¹¹ N·m²/kg²). ¿Cuál es la fuerza gravitatoria entre ellos, expresada en unidades de 10⁻⁹ N (es decir, el valor de F×10⁹)?"

pasos:
  - "F = G × m₁ × m₂ / r² = 6,674×10⁻¹¹ × {m1} × {m2} / {r}²"
  - "F × 10⁹ = {redondear(6.674e-11 * m1 * m2 / (r ^ 2) * 1e9, 2)}"

explicacion: |
  El resultado real (sin la escala ×10⁹) es un número con muchos ceros
  después de la coma — por eso se expresa multiplicado por 10⁹, para
  trabajar con un número más manejable.
```

### 11 — Primera ley de Kepler

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler", "vocabulario"]

enunciado: "¿Qué dice la primera ley de Kepler sobre la forma de las órbitas planetarias?"
tipo: mc
opciones_explicitas:
  - "Son elípticas, con el Sol en uno de los dos focos de la elipse"
  - "Son circulares perfectas, con el Sol en el centro"
  - "Son líneas rectas que el Sol desvía"
respuesta: "Son elípticas, con el Sol en uno de los dos focos de la elipse"

explicacion: |
  Antes de Kepler se asumía que eran círculos perfectos — fue una
  corrección real a partir de datos de observación.
```

### 12 — Las órbitas NO son círculos perfectos

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler"]

respuesta: falso
tipo: vf

enunciado: "Según Kepler, las órbitas de los planetas alrededor del Sol son círculos perfectos."

explicacion: |
  Son elipses (círculos "achatados"), aunque algunas sean casi
  circulares en la práctica.
```

### 13 — Segunda ley de Kepler

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler", "vocabulario"]

enunciado: "¿Qué dice la segunda ley de Kepler (ley de las áreas)?"
tipo: mc
opciones_explicitas:
  - "El segmento que une al Sol con el planeta barre áreas iguales en tiempos iguales"
  - "Todos los planetas tienen exactamente el mismo período orbital"
  - "El planeta siempre se mueve a velocidad constante"
respuesta: "El segmento que une al Sol con el planeta barre áreas iguales en tiempos iguales"

explicacion: |
  Consecuencia: el planeta acelera cerca del Sol y se frena lejos de
  él, para que el área barrida en un mismo intervalo de tiempo sea
  siempre igual.
```

### 14 — El planeta se mueve más rápido cerca del Sol

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler"]

respuesta: verdadero
tipo: vf

enunciado: "Un planeta se mueve más rápido cuando está más cerca del Sol (perihelio) que cuando está más lejos (afelio)."

explicacion: |
  Es la consecuencia directa de la ley de las áreas: para barrer la
  misma área en el mismo tiempo estando más cerca, tiene que moverse
  más rápido.
```

### 15 — Completar: punto más lejano de la órbita

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler", "completar"]

tipo: completar
enunciado: "Completá: el punto de la órbita más cercano al Sol se llama perihelio; el punto más lejano se llama ___."
respuestas_validas:
  - "afelio"

explicacion: |
  Perihelio (peri="cerca") y afelio (apo="lejos") son los dos extremos
  de la órbita elíptica.
```

### 16 — Tercera ley de Kepler

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["kepler", "vocabulario"]

enunciado: "¿Qué relación establece la tercera ley de Kepler (ley de los períodos)?"
tipo: mc
opciones_explicitas:
  - "El cuadrado del período orbital es proporcional al cubo del semieje mayor de la órbita (T² ∝ a³)"
  - "El período orbital es igual para todos los planetas"
  - "El período orbital es directamente proporcional a la distancia al Sol (sin exponentes)"
respuesta: "El cuadrado del período orbital es proporcional al cubo del semieje mayor de la órbita (T² ∝ a³)"

explicacion: |
  Con la misma constante de proporcionalidad para todos los planetas
  que orbitan el mismo Sol.
```

### 17 — Problema: tercera ley de Kepler con proporción

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["kepler", "problema"]

variables:
  factor: uno_de([2, 3, 4])

respuesta: redondear(factor ^ 1.5, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un planeta tiene un semieje mayor {factor} veces más grande que el de otro planeta que orbita la misma estrella. Según T² ∝ a³, ¿cuántas veces más grande es su período orbital?"

pasos:
  - "T²_nuevo / T²_viejo = (a_nuevo/a_viejo)³ = {factor}³"
  - "T_nuevo / T_viejo = raíz cuadrada de {factor ^ 3} = {factor}^1,5 = {redondear(factor ^ 1.5, 2)}"

explicacion: |
  Si el semieje mayor se multiplica por k, el período se multiplica
  por k^1,5 (la raíz cuadrada de k³).
```

### 18 — Kepler describe, no explica

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["kepler", "newton"]

respuesta: verdadero
tipo: vf

enunciado: "Las tres leyes de Kepler son observacionales (describen un patrón), pero por sí solas no explican POR QUÉ los planetas se mueven así."

explicacion: |
  La explicación causal (una fuerza de atracción entre masas) la dio
  Newton después, con F = G×m₁×m₂/r².
```

### 19 — Qué aportó Newton que Kepler no tenía

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["newton"]

enunciado: "¿Qué aportó Newton a lo que ya había observado Kepler?"
tipo: mc
opciones_explicitas:
  - "Una causa física (la fuerza de gravedad) de la que las tres leyes de Kepler se derivan matemáticamente"
  - "Datos de observación más precisos de las órbitas"
  - "La forma elíptica de las órbitas, que Kepler no había notado"
respuesta: "Una causa física (la fuerza de gravedad) de la que las tres leyes de Kepler se derivan matemáticamente"

explicacion: |
  Newton no corrigió los datos de Kepler, les dio un mecanismo: por
  qué tenían que ser así.
```

### 20 — Completar: el peso como caso particular

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["gravitacion", "completar"]

tipo: completar
enunciado: "Completá: el peso de un objeto en la superficie de un planeta es la fórmula de gravitación con m₁ = masa del planeta y r = el ___ del planeta."
respuestas_validas:
  - "radio"

explicacion: |
  peso = G × M_planeta × m / R_planeta², de ahí sale el valor de g de
  cada planeta.
```

### 21 — Misma fórmula para la Luna y para los planetas

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "La misma fórmula de gravitación explica tanto por qué la Luna orbita la Tierra como por qué los planetas orbitan el Sol."

explicacion: |
  Es "universal" precisamente porque aplica a cualquier par de masas,
  sin excepción.
```

### 22 — Ordenar: de Kepler a Newton

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["kepler", "newton", "ordenar"]

enunciado: "Ordená cronológica y lógicamente estos hechos, de la observación a la explicación."
tipo: ordenar
opciones_explicitas:
  - "Al combinar esa fuerza con la necesidad de una fuerza centrípeta para mantener una órbita, las tres leyes de Kepler quedan explicadas matemáticamente"
  - "Kepler observa los datos astronómicos y describe tres patrones (órbitas, áreas, períodos)"
  - "Newton propone que dos masas cualesquiera se atraen con F = G×m₁×m₂/r²"
respuesta_orden: ["Kepler observa los datos astronómicos y describe tres patrones (órbitas, áreas, períodos)", "Newton propone que dos masas cualesquiera se atraen con F = G×m₁×m₂/r²", "Al combinar esa fuerza con la necesidad de una fuerza centrípeta para mantener una órbita, las tres leyes de Kepler quedan explicadas matemáticamente"]
explicacion: |
  Primero el patrón, después la causa — un ejemplo clásico de cómo
  avanza la ciencia.
```

### 23 — Aplicación real: satélites artificiales

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "basico"
  tags: ["gravitacion", "aplicacion"]

enunciado: "¿Qué mantiene a un satélite artificial en órbita alrededor de la Tierra?"
tipo: mc
opciones_explicitas:
  - "La fuerza gravitatoria de la Tierra, que actúa como fuerza centrípeta de su órbita"
  - "Los motores del satélite, que empujan constantemente hacia la Tierra"
  - "La ausencia total de fuerzas sobre el satélite"
respuesta: "La fuerza gravitatoria de la Tierra, que actúa como fuerza centrípeta de su órbita"

explicacion: |
  Es la misma gravedad que hace caer una manzana, sólo que el satélite
  tiene la velocidad horizontal justa para que esa "caída" se convierta
  en una órbita.
```

### 24 — A mayor distancia del Sol, mayor período orbital

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más lejos esté un planeta del Sol, mayor es su período orbital (tarda más en completar una vuelta)."

explicacion: |
  Es consecuencia directa de T² ∝ a³: a mayor semieje mayor `a`, mayor
  período `T`. Por eso Neptuno tarda mucho más que Mercurio en dar una
  vuelta al Sol.
```

### 25 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la gravitación universal de Newton junto con las leyes de Kepler?"
tipo: mc
opciones_explicitas:
  - "Para entender no sólo QUÉ patrón siguen las órbitas, sino POR QUÉ tienen que seguirlo"
  - "Sólo sirve para calcular el peso en la Tierra"
  - "Sólo aplica a objetos que no tienen masa"
respuesta: "Para entender no sólo QUÉ patrón siguen las órbitas, sino POR QUÉ tienen que seguirlo"

explicacion: |
  Kepler dio el patrón; Newton, con una sola fórmula aplicable a
  cualquier par de masas, dio la causa.
```
