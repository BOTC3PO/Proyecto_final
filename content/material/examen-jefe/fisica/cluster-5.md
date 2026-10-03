# Examen jefe — [PENDIENTE #740]

> Logro #740. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: gravitacion-universal (25 preguntas)

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

## Sección: frecuencia (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "frecuencia_basica"
  nivel: "basico"
  tags: ["oscilaciones", "definicion"]

tipo: mc
opciones_explicitas: ["El tiempo que tarda en completarse una oscilación", "La cantidad de oscilaciones por unidad de tiempo", "La distancia máxima desde el punto de equilibrio", "La velocidad de un objeto en movimiento"]

respuesta: "La cantidad de oscilaciones por unidad de tiempo"

enunciado: "La frecuencia se define como ___."

explicacion: |
  La frecuencia mide cuántos ciclos o vueltas ocurren en un intervalo de tiempo determinado.
```

```
metadata:
  materia: "fisica"
  tema: "relacion_frecuencia_periodo"
  nivel: "basico"
  tags: ["periodo", "formula"]

variables:
  idx: uno_de([0, 1])
  datos: [["T = 2 s", "f = 0.5 Hz"], ["T = 0.5 s", "f = 2 Hz"]]

tipo: mc
opciones_explicitas: ["f = T", "f = 1 / T", "f = T * 2", "f = 1 / (2 * T)"]

respuesta: "f = 1 / T"

enunciado: "Si un fenómeno tiene un período de {datos[idx][0]}, su frecuencia es de {datos[idx][1]}."

explicacion: |
  La relación entre frecuencia (f) y período (T) es inversamente proporcional: f = 1/T.
```

```
metadata:
  materia: "fisica"
  tema: "unidades_frecuencia"
  nivel: "basico"
  tags: ["unidades", "herتz"]

tipo: completar
respuestas_validas:
  - "Hz"
  - "Hertz"

respuesta: "Hz"

enunciado: "La unidad de medida de la frecuencia en el Sistema Internacional es el ___."

explicacion: |
  El Hertz (Hz) equivale a 1 ciclo por segundo (1/s).
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_frecuencia"
  nivel: "basico"
  tags: ["conceptual"]

tipo: vf

respuesta: falso

enunciado: "Si el período de un péndulo aumenta, su frecuencia también aumenta."

explicacion: |
  Falso. Como la relación es inversa (f = 1/T), si el período aumenta, la frecuencia disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "calculo_frecuencia"
  nivel: "intermedio"
  tags: ["calculo", "ejercicio"]

variables:
  idx: uno_de([0, 1])
  datos: [[5, 0.2], [10, 0.1]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Un objeto realiza un ciclo completo cada {datos[idx][0]} segundos. ¿Cuál es su frecuencia en Hz?"

pasos:
  - "Identificar el período (T = {datos[idx][0]} s)"
  - "Aplicar la fórmula f = 1 / T"
  - "Calcular el resultado: 1 / {datos[idx][0]}"

respuesta: datos[idx][1]

explicacion: |
  Usando la fórmula f = 1 / T:
  f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["frecuencia", "periodo", "oscilaciones"]

respuesta: falso
tipo: vf

enunciado: "Si el período de una oscilación aumenta, la frecuencia de la misma también aumenta."

explicacion: |
  La frecuencia ($f$) es inversamente proporcional al período ($T$), según la fórmula $f = 1/T$. Si el tiempo que tarda un ciclo (período) es mayor, ocurren menos ciclos por segundo (frecuencia menor).
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_calculo"
  nivel: "basico"
  tags: ["frecuencia", "calculo"]

variables:
  periodo: 0.5

respuesta: 2.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un péndulo completa un ciclo cada {periodo} segundos. ¿Cuál es su frecuencia en Hz?"

pasos:
  - "Identificar el período: $T = {periodo}$ s"
  - "Aplicar la fórmula: $f = 1 / T$"
  - "Calcular: $f = 1 / 0.5 = 2.0$ Hz"

explicacion: |
  La frecuencia se calcula dividiendo 1 entre el período. En este caso, $1 / 0.5 = 2$ Hz.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_definicion"
  nivel: "basico"
  tags: ["definicion", "frecuencia"]

opciones_explicitas: ["Cantidad de ciclos por unidad de tiempo", "Tiempo que tarda un ciclo", "Distancia recorrida en un ciclo", "Velocidad de la oscilación"]
respuesta: "Cantidad de ciclos por unidad de tiempo"
tipo: mc

enunciado: "¿Cuál es la definición física de frecuencia?"

explicacion: |
  La frecuencia mide cuántas veces se repite un evento (u oscilación) en un intervalo de tiempo determinado (generalmente un segundo).
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_unidades"
  nivel: "intermedio"
  tags: ["unidades", "hercios"]

variables:
  f_valor: 50
  f_unid: "Hz"

respuesta: "50"
tipo: completar
respuestas_validas:
  - "50"

enunciado: "Si un objeto oscila con una frecuencia de {f_valor} {f_unid}, esto significa que realiza ___ oscilaciones por segundo."

explicacion: |
  El Hertz (Hz) es la unidad del Sistema Internacional para la frecuencia y equivale a $1/s$ (un ciclo por segundo).
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_inversa"
  nivel: "intermedio"
  tags: ["frecuencia", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.2, 5.0], [0.5, 2.0]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: [datos[idx][1]]

enunciado: "Si el período de un fenómeno es de {datos[idx][0]} segundos, ¿cuál es su frecuencia?"

pasos:
  - "Datos: $T = {datos[idx][0]}$ s"
  - "Fórmula: $f = 1 / T$"
  - "Resultado: $f = 1 / {datos[idx][0]} = {datos[idx][1]}$ Hz"

explicacion: |
  Usando la relación $f = 1/T$, para un período de {datos[idx][0]} s, la frecuencia es {datos[idx][1]} Hz.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["oscilaciones", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, "2.0"], [2.0, "0.5"]]

enunciado: "Si un objeto realiza una oscilación cada {datos[idx][0]} segundos (período), ¿cuál será su frecuencia en Hz?"

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5", "2.0", "1.0", "0.25"]

explicacion: |
  La frecuencia (f) es el inverso del período (T): f = 1/T. 
  Si T = {datos[idx][0]} s, entonces f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz.
```

```
metadata:
  materia: "fisica"
  tema: "unidades_frecuencia"
  nivel: "basico"
  tags: ["unidades", "hertz"]

respuesta: falso
tipo: vf

enunciado: "La unidad de medida de la frecuencia, el Hertz (Hz), representa el tiempo que tarda en completarse un ciclo completo."

explicacion: |
  Falso. El Hertz (Hz) mide la cantidad de ciclos por segundo (1/s). 
  La unidad que mide el tiempo de un ciclo es el segundo (s), que corresponde al período.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_oscilaciones"
  nivel: "intermedio"
  tags: ["calculo", "tiempo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[10, 60], [5, 120]]

enunciado: "Un péndulo oscila con una frecuencia de {escenario[idx][0]} Hz. ¿Cuántas oscilaciones completará en un intervalo de tiempo de {escenario[idx][1]} segundos?"

respuesta: escenario[idx][0] * escenario[idx][1]
tipo: completar
tolerancia_abs: 0

pasos:
  - "Identificar la frecuencia (f) y el tiempo (t)."
  - "Multiplicar el número de ciclos por segundo por el tiempo total: N = f * t."

explicacion: |
  Para hallar el número total de oscilaciones, multiplicamos la frecuencia por el tiempo transcurrido.
  N = {escenario[idx][0]} Hz * {escenario[idx][1]} s = {escenario[idx][0] * escenario[idx][1]} oscilaciones.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["relacion_inversa"]

respuesta: "Si el período aumenta, la frecuencia disminuye"
tipo: mc
opciones_explicitas: ["Si el período aumenta, la frecuencia aumenta", "Si el período aumenta, la frecuencia disminuye", "Si el período aumenta, la frecuencia se mantiene igual"]

enunciado: "Considerando la relación f = 1/T, ¿cuál de las siguientes afirmaciones es correcta sobre el comportamiento de la frecuencia cuando el período se hace más largo?"

explicacion: |
  Debido a que la frecuencia es inversamente proporcional al período, si el denominador (T) crece, el resultado (f) se reduce.
```

```
metadata:
  materia: "fisica"
  tema: "metodologia_resolucion"
  nivel: "intermedio"
  tags: ["ordenar", "pasos"]

respuesta_orden: ["Identificar el período (T)", "Calcular el inverso (1/T)", "Asignar la unidad Hertz (Hz)"]
tipo: ordenar
opciones_explicitas: ["Identificar el período (T)", "Calcular el inverso (1/T)", "Asignar la unidad Hertz (Hz)"]

enunciado: "Ordena los pasos lógicos para convertir un período de 0.25 segundos a frecuencia en Hertz:"

explicacion: |
  1. Primero identificas el valor del período.
  2. Aplicas la fórmula matemática de la inversa.
  3. Expresas el resultado en la unidad de medida correcta.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["oscilaciones", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [["0.5", "2.0"], ["2.0", "0.5"]]

enunciado: "Si el período de un oscilador es de {datos[idx][0]} segundos, ¿cuál será su frecuencia en Hz?"

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5", "1.0", "2.0", "4.0"]

explicacion: |
  La frecuencia (f) es el inverso del período (T), es decir, f = 1/T. 
  Si T = 0.5 s, entonces f = 1 / 0.5 = 2.0 Hz.
  Si T = 2.0 s, entonces f = 1 / 2.0 = 0.5 Hz.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_definicion"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La frecuencia se define como la cantidad de ciclos o oscilaciones completas que ocurren en una unidad de tiempo."

explicacion: |
  Correcto. La frecuencia mide la rapidez con la que se repite un fenómeno periódico.
```

```
metadata:
  materia: "fisica"
  tema: "unidades_frecuencia"
  nivel: "basico"
  tags: ["unidades", "si_no"]

respuesta: "Hz"
tipo: completar
respuestas_validas:
  - "Hz"
  - "Hertz"

enunciado: "La unidad de medida de la frecuencia en el Sistema Internacional es el ___."

explicacion: |
  La unidad es el Hertz (Hz), que equivale a 1/s (ciclos por segundo).
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo_comparacion"
  nivel: "intermedio"
  tags: ["relacion_inversa"]

respuesta: "inversamente"
tipo: completar
respuestas_validas:
  - "inversamente"

enunciado: "Mientras que el período mide el tiempo de un solo ciclo, la frecuencia y el período tienen una relación ___."

explicacion: |
  Es una relación inversa: a mayor período (más tiempo por ciclo), menor frecuencia (menos ciclos por segundo).
```

```
metadata:
  materia: "fisica"
  tema: "magnitudes_periodicas"
  nivel: "basico"
  tags: ["identificacion"]

respuesta_orden: ["Amplitud", "Período", "Frecuencia"]
tipo: ordenar

opciones_explicitas: ["Período", "Frecuencia", "Amplitud"]

enunciado: "Un sistema oscilante tiene un período de 2 s, una frecuencia de 0.5 Hz y una amplitud de 5 m. Ordena estas tres magnitudes de mayor a menor según su valor numérico:"

explicacion: |
  Comparando los valores dados: Amplitud = 5, Período = 2, Frecuencia = 0.5.
  De mayor a menor: Amplitud, Período, Frecuencia.
  Nota: al ser magnitudes físicas distintas (metros, segundos y hertz) esta comparación es puramente numérica, no física.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["oscilaciones", "periodo"]

variables:
  periodo: uno_de([0.5, 2.0, 0.2])
  frecuencia: 1 / periodo

respuesta: frecuencia
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un péndulo de un reloj antiguo realiza un movimiento oscilatorio. Si el tiempo que tarda en completar una oscilación completa (período) es de {periodo} segundos, ¿cuál es la frecuencia de oscilación en Hz?"

pasos:
  - "Identificar el período T = {periodo} s"
  - "Aplicar la fórmula de la frecuencia: f = 1 / T"
  - "Calcular f = 1 / {periodo}"

explicacion: |
  La frecuencia (f) es el inverso del período (T). Si tarda {periodo} s en oscilar una vez, en un segundo realiza {frecuencia} oscilaciones.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "intermedio"
  tags: ["mecanica", "frecuencia"]

variables:
  motor_rpm: uno_de([1200, 3000, 600])
  f_valor: motor_rpm / 60

respuesta: f_valor
tipo: mc
opciones_explicitas: [20, 50, 10, 500]

enunciado: "Un motor de combustión interna realiza {motor_rpm} revoluciones por minuto (RPM). ¿Cuántas revoluciones (frecuencia) realiza por segundo (Hz)?"

explicacion: |
  Para convertir de RPM a Hz, debemos dividir la cantidad de revoluciones por 60, ya que un minuto tiene 60 segundos. {motor_rpm} / 60 = {f_valor} Hz.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["ondas", "radio"]

respuesta: verdadero
tipo: vf

enunciado: "Si una onda electromagnética tiene una frecuencia muy alta, su período de oscilación debe ser muy corto."

explicacion: |
  Es verdadero. Como f = 1/T, la frecuencia y el período son inversamente proporcionales. A mayor frecuencia, menor período.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["biologia_fisica", "frecuencia"]

variables:
  datos_ritmo: uno_de([60, 80, 100])
  periodo_calculado: 60 / datos_ritmo

respuesta: periodo_calculado
tipo: completar
respuestas_validas:
  - 1
  - 0.75
  - 0.6

enunciado: "Una persona tiene una frecuencia cardíaca de {datos_ritmo} latidos por minuto. El tiempo transcurrido entre cada latido (período) es de ___ segundos."

explicacion: |
  Si hay {datos_ritmo} latidos en 60 segundos, el tiempo por latido es 60 / {datos_ritmo} = {periodo_calculado} segundos.
```

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "intermedio"
  tags: ["ritmo", "orden"]

variables:
  f_val: 2.0
  t_val: 0.5

respuesta_orden: ["0.5", "1.0", "2.0"]
tipo: ordenar
opciones_explicitas: ["0.5", "1.0", "2.0"]

enunciado: "Un metrónomo marca una frecuencia de {f_val} Hz. Ordena los siguientes valores de período (en segundos) de menor a mayor:"

explicacion: |
  Si f = 2 Hz, el período es T = 1/2 = 0.5 s. Los períodos correspondientes a frecuencias de 2Hz, 1Hz y 0.5Hz son 0.5s, 1s y 2s respectivamente.
```

## Sección: momento-lineal (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["definicion", "cantidad_de_movimiento"]

respuesta: "p = m * v"
tipo: completar
respuestas_validas:
  - "p = m * v"
  - "p = m*v"
  - "p = m·v"

enunciado: "La expresión matemática que define la cantidad de movimiento (o momento lineal) de un objeto en función de su masa (m) y su velocidad (v) es ___."

explicacion: |
  El momento lineal es una magnitud vectorial que se define como el producto de la masa de un objeto por su velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["relacion", "proporcionalidad"]

variables:
  datos: [["se duplica", "aumenta"], ["se mantiene igual", "se mantiene igual"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

enunciado: "Si un objeto mantiene su velocidad constante pero su masa se duplica, su momento lineal ___."

explicacion: |
  Dado que $p = m \cdot v$, si la velocidad es constante, el momento es directamente proporcional a la masa. Al duplicar la masa, el momento también se duplica.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["vectorial", "escalar"]

respuesta: verdadero
tipo: vf

enunciado: "¿El momento lineal es una magnitud vectorial, ya que posee dirección y sentido?"

explicacion: |
  Correcto. Al ser el producto de un escalar (masa) por un vector (velocidad), el momento lineal resultante es un vector.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades", "si"]

respuesta: "kg·m/s"
tipo: completar
respuestas_validas:
  - "kg·m/s"
  - "kg m/s"
  - "kg*m/s"

enunciado: "En el Sistema Internacional de Unidades (SI), la unidad de medida del momento lineal es ___."

explicacion: |
  La unidad se deriva directamente de la fórmula: masa (kg) multiplicada por velocidad (m/s), resultando en kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["componentes"]

respuesta: "10"
tipo: completar
respuestas_validas:
  - "10"

enunciado: "Si un objeto tiene una masa de 5 kg y una velocidad de 2 m/s, su momento lineal es ___ kg·m/s."

explicacion: |
  Calculamos el producto: 5 kg * 2 m/s = 10 kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["definicion", "formula"]

respuesta: "m·v"
tipo: completar
respuestas_validas:
  - "m·v"
  - "m*v"
  - "p=m*v"

enunciado: "La cantidad de movimiento o momento lineal de un objeto se define matemáticamente como el producto de su masa por su ___."

explicacion: |
  El momento lineal ($p$) es una magnitud vectorial que se define como el producto de la masa ($m$) por la velocidad ($v$): $p = m \cdot v$.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([[10, 5], [20, 2], [5, 10]])

respuesta: escenario[0] * escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un objeto tiene una masa de {escenario[0]} kg y se desplaza con una velocidad constante de {escenario[1]} m/s. ¿Cuál es su momento lineal en kg·m/s?"

pasos:
  - "Identificar la masa: m = {escenario[0]} kg"
  - "Identificar la velocidad: v = {escenario[1]} m/s"
  - "Aplicar la fórmula: p = m * v = {escenario[0]} * {escenario[1]}"

explicacion: |
  El cálculo es: {escenario[0]} kg * {escenario[1]} m/s = {escenario[0] * escenario[1]} kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["proporcionalidad"]

respuesta: verdadero
tipo: vf
enunciado: "Si un objeto duplica su velocidad pero mantiene su masa constante, su momento lineal también se duplica."

explicacion: |
  Como $p = m \cdot v$, el momento es directamente proporcional a la velocidad. Si $v' = 2v$, entonces $p' = m \cdot (2v) = 2(m \cdot v) = 2p$.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  idx: uno_de([0, 1])
  b_vel: [2, 8]
  ganador: ["A", "B"]

respuesta: ganador[idx]
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Considera dos objetos: el Objeto A tiene 2 kg a 10 m/s. El Objeto B tiene 5 kg a {b_vel[idx]} m/s. ¿Cuál de ellos posee un mayor momento lineal?"

explicacion: |
  Calculamos ambos:
  p_A = 2 kg * 10 m/s = 20 kg·m/s.
  p_B = 5 kg * {b_vel[idx]} m/s = {5 * b_vel[idx]} kg·m/s.
  Por lo tanto, el objeto con mayor momento lineal es el {ganador[idx]}.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "A"
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Si el Objeto A tiene 2 kg a 10 m/s y el Objeto B tiene 5 kg a 2 m/s, ¿cuál tiene mayor momento lineal?"

explicacion: |
  p_A = 2 * 10 = 20 kg·m/s.
  p_B = 5 * 2 = 10 kg·m/s.
  Por lo tanto, el objeto A tiene mayor momento.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "kg·m/s"
tipo: completar
respuestas_validas:
  - "kg*m/s"
  - "kg m/s"
  - "kg·m/s"

enunciado: "En el Sistema Internacional (SI), la unidad de medida del momento lineal es ___."

explicacion: |
  Dado que el momento es masa (kg) multiplicado por velocidad (m/s), su unidad resultante es kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["conceptos_clave", "relacion_proporcional"]

variables:
  idx: uno_de([0, 1])
  datos: [[2.0, 5.0], [10.0, 2.0]]

enunciado: "Si un objeto tiene una masa de {datos[idx][0]} kg y una velocidad de {datos[idx][1]} m/s, su momento lineal es de ___ kg·m/s."

respuesta: datos[idx][0] * datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El momento lineal (p) se define como el producto de la masa por la velocidad (p = m · v). En este caso, el cálculo es {datos[idx][0]} * {datos[idx][1]} = {datos[idx][0] * datos[idx][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["errores_comunes", "conceptos"]

enunciado: "Un camión de gran masa se desplaza a una velocidad muy baja, mientras que una pelota de tenis se desplaza a una velocidad muy alta. ¿Es posible que ambos tengan el mismo momento lineal?"

opciones_explicitas:
  - "Sí, el momento depende de ambos factores y pueden compensarse."
  - "No, el camión siempre tendrá más momento por su gran masa."
  - "No, la velocidad de la pelota es siempre mayor que la del camión."
  - "Sí, siempre que la aceleración sea la misma."

respuesta: "Sí, el momento depende de ambos factores y pueden compensarse."
tipo: mc

explicacion: |
  Un error común es pensar que la masa es el único factor determinante. Sin embargo, como p = m · v, una masa muy grande con una velocidad muy pequeña puede resultar en el mismo momento que una masa muy pequeña con una velocidad muy grande.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["vectores", "direccion"]

enunciado: "Si consideramos que la dirección hacia la derecha es positiva, un objeto que se mueve hacia la izquierda con una masa de 5 kg y una velocidad de 3 m/s tiene un momento lineal de ___ kg·m/s."

respuestas_validas:
  - "-15"

tipo: completar

explicacion: |
  El momento lineal es una magnitud vectorial. Si el objeto se mueve hacia la izquierda (dirección negativa), el signo del momento debe ser negativo: p = 5 kg * (-3 m/s) = -15 kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["dinamica", "fuerza"]

enunciado: "Si la velocidad de un objeto aumenta mientras su masa permanece constante, ¿qué sucede con su momento lineal?"

opciones_explicitas:
  - "El momento lineal aumenta."
  - "El momento lineal disminuye."
  - "El momento lineal permanece constante."
  - "El momento lineal se vuelve cero."

respuesta: "El momento lineal aumenta."
tipo: mc

explicacion: |
  Dado que p = m · v, si la masa (m) es constante y la velocidad (v) aumenta, el producto resultante (p) debe aumentar proporcionalmente.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

enunciado: "La unidad resultante de multiplicar la unidad de masa (kg) por la unidad de velocidad (m/s) es:"

opciones_explicitas:
  - "kg·m/s"
  - "kg·m/s²"
  - "kg/m·s"
  - "N·m"

respuesta: "kg·m/s"
tipo: mc

explicacion: |
  Por definición de la fórmula p = m · v, las unidades se combinan multiplicando kilogramos (kg) por metros por segundo (m/s), resultando en kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: falso
tipo: vf

enunciado: "El momento lineal de un objeto depende únicamente de su masa, independientemente de su velocidad."

explicacion: |
  El momento lineal se define como el producto de la masa por la velocidad ($p = m \cdot v$). Por lo tanto, la velocidad es un factor determinante.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  idx: uno_de([0, 1])
  masas: [10, 5]
  velocidades: [2, 4]
  descripciones: ["un objeto A de 10 kg a 2 m/s", "un objeto B de 5 kg a 4 m/s"]

respuesta: masas[idx] * velocidades[idx]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcula el módulo del momento lineal para {descripciones[idx]}."

pasos:
  - "Identificar la masa (m) y la velocidad (v) del objeto."
  - "Multiplicar la masa por la velocidad (p = m · v)."

explicacion: |
  El momento lineal es una magnitud vectorial que depende tanto de la masa como de la velocidad. En el caso seleccionado, el resultado es {masas[idx] * velocidades[idx]} kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "cantidad de movimiento"
tipo: completar
respuestas_validas:
  - "cantidad de movimiento"
  - "cantidad de movimiento"

enunciado: "En muchos contextos académicos, el concepto de momento lineal es sinónimo de ___."

explicacion: |
  Tanto 'momento lineal' como 'cantidad de movimiento' se refieren a la misma magnitud física ($p = m \cdot v$).
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion", "dimensiones"]

respuesta: "vectorial"
tipo: mc
opciones_explicitas: ["escalar", "vectorial", "unidades de fuerza", "aceleración"]

enunciado: "A diferencia de la masa, que es una magnitud escalar, el momento lineal es una magnitud ___."

explicacion: |
  El momento lineal posee dirección y sentido (definidos por el vector velocidad), por lo que es una magnitud vectorial.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["teorema", "impulso"]

variables:
  caso: uno_de([["un choque de alta velocidad", "un objeto con gran masa en reposo"], ["un objeto con gran masa en reposo", "un choque de alta velocidad"]])

respuesta: "impulso"
tipo: completar
respuestas_validas:
  - "impulso"

enunciado: "El cambio en el momento lineal de un objeto es igual al ___ aplicado sobre dicho objeto."

explicacion: |
  Según el teorema del impulso, el cambio en la cantidad de movimiento ($\Delta p$) es igual al impulso ($J = F \cdot \Delta t$). En el caso de {caso[0]}, se observa este principio.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["cantidad_de_movimiento", "cinematica"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1500, 20, 30000], [1200, 10, 12000]]

enunciado: "Un vehículo de masa de {datos[escenario_idx][0]} kg se desplaza con una velocidad de {datos[escenario_idx][1]} m/s. ¿Cuál es su cantidad de movimiento (p, en kg·m/s)?"

opciones_explicitas: [30000, 12000, 25000, 45000]
respuesta: datos[escenario_idx][2]
tipo: mc

explicacion: |
  El momento lineal se calcula con la fórmula p = m · v.
  En este caso: {datos[escenario_idx][0]} kg * {datos[escenario_idx][1]} m/s = {datos[escenario_idx][2]} kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion", "masa", "velocidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[10, 5, 50], [5, 10, 50]]

enunciado: "Si un objeto A tiene masa {escenario[escenario_idx][0]} kg y velocidad {escenario[escenario_idx][1]} m/s, y un objeto B tiene la misma cantidad de movimiento que A, ¿cuál es su valor (en kg·m/s)?"

opciones_explicitas: [50, 10, 100, 25]
respuesta: escenario[escenario_idx][2]
tipo: mc

explicacion: |
  El momento lineal es el producto de la masa por la velocidad. 
  Para el escenario seleccionado: {escenario[escenario_idx][0]} * {escenario[escenario_idx][1]} = {escenario[escenario_idx][2]}.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["teoria", "concepto"]

enunciado: "Si un objeto con masa constante aumenta su velocidad, su cantidad de movimiento ___."

respuestas_validas:
  - "aumenta"
respuesta: "aumenta"
tipo: completar

explicacion: |
  Dado que p = m · v, si la masa (m) es constante y la velocidad (v) aumenta, el producto p debe aumentar proporcionalmente.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "avanzado"
  tags: ["calculo", "impacto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0.05, 400], [0.02, 600]]

enunciado: "Una bala de masa {datos[escenario_idx][0]} kg viaja a una velocidad de {datos[escenario_idx][1]} m/s. Al impactar un bloque, su velocidad se reduce a 5 m/s. ¿Cuál es la magnitud del cambio en su momento lineal (Δp)?"

pasos:
  - "Calcular el momento inicial: p_inicial = m * v_inicial"
  - "Calcular el momento final: p_final = m * v_final"
  - "Calcular la diferencia: Δp = p_inicial - p_final"

respuesta: datos[escenario_idx][0] * (datos[escenario_idx][1] - 5)
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Δp = m(v_i - v_f).
  Para este caso: {datos[escenario_idx][0]} * ({datos[escenario_idx][1]} - 5) = {datos[escenario_idx][0] * (datos[escenario_idx][1] - 5)}.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["verdadero_falso", "propiedades"]

enunciado: "Si dos objetos tienen la misma masa pero el doble de velocidad, el segundo objeto tiene el doble de cantidad de movimiento que el primero. ¿Es esto verdadero?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  Como p es directamente proporcional a la velocidad (p ∝ v), si la masa es constante y la velocidad se duplica, el momento lineal también se duplica.
```

## Sección: longitud-onda-velocidad-propagacion (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["onda", "definicion"]

tipo: mc
opciones_explicitas: ["La distancia entre dos crestas consecutivas", "La velocidad de la perturbación", "El tiempo que tarda una onda en pasar", "La amplitud máxima de la onda"]

respuesta: "La distancia entre dos crestas consecutivas"

enunciado: "En una onda transversal, la longitud de onda (λ) se define como ___."

explicacion: |
  La longitud de onda es la distancia física entre dos puntos equivalentes consecutivos de una onda, como dos crestas o dos valles.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["proporcionalidad", "formula"]

tipo: vf

enunciado: "Si la frecuencia de una onda se duplica y la velocidad de propagación se mantiene constante, la longitud de onda debe reducirse a la mitad."

respuesta: verdadero

explicacion: |
  De la fórmula v = λ · f, despejamos λ = v / f. Si la frecuencia aumenta, la longitud de onda disminuye inversamente.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["calculo", "velocidad"]

variables:
  escenario: uno_de([[0.5, 10], [2.0, 20], [5.0, 50]])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Una onda tiene una longitud de onda de {escenario[0]} metros y una frecuencia de {escenario[1]} Hz. ¿Cuál es su velocidad de propagación en m/s?"

pasos:
  - "Identificar la longitud de onda (λ): {escenario[0]} m"
  - "Identificar la frecuencia (f): {escenario[1]} Hz"
  - "Aplicar la fórmula v = λ * f"

respuesta: escenario[0] * escenario[1]

explicacion: |
  Usando la fórmula v = λ * f:
  v = {escenario[0]} m * {escenario[1]} Hz = {escenario[0] * escenario[1]} m/s.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

tipo: completar
respuestas_validas:
  - "m/s"

respuesta: "m/s"

enunciado: "En el Sistema Internacional, la unidad de la velocidad de propagación de una onda es ___."

explicacion: |
  La velocidad es la relación entre la distancia (metros, m) y el tiempo (segundos, s), por lo tanto, su unidad es m/s.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["ordenar", "partes_onda"]

tipo: ordenar
opciones_explicitas: ["Cresta", "Punto de equilibrio", "Valle", "Cresta"]

respuesta_orden: ["Cresta", "Punto de equilibrio", "Valle", "Cresta"]

enunciado: "Ordena las partes de una onda de forma descendente, desde el punto más alto hasta el punto más bajo, y vuelve a subir:"

explicacion: |
  La secuencia lógica desde el máximo es: Cresta (máximo) -> Punto de equilibrio (centro) -> Valle (mínimo) -> Cresta (regreso al máximo).
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "v = lambda * f"
tipo: completar
respuestas_validas:
  - "v = lambda * f"
  - "v = λ * f"
  - "v = lambda * f"

enunciado: "La velocidad de propagación de una onda ($v$) se define como el producto de la longitud de onda ($\\lambda$) por la ___."

explicacion: |
  La relación fundamental para ondas es $v = \lambda \cdot f$, donde $v$ es la velocidad, $\lambda$ la longitud de onda y $f$ la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["calculo"]

variables:
  escenario: uno_de([[5, 20], [10, 25], [8, 50]])

respuesta: escenario[0] * escenario[1]
tipo: mc
opciones_explicitas: [100, 250, 400, 500]

enunciado: "Una onda tiene una longitud de onda de {escenario[0]} m y una frecuencia de {escenario[1]} Hz. ¿Cuál es su velocidad de propagación (en m/s)?"

pasos:
  - "Identificar los datos: λ = {escenario[0]} m y f = {escenario[1]} Hz."
  - "Aplicar la fórmula: v = λ · f."
  - "Calcular: v = {escenario[0]} · {escenario[1]} = {escenario[0] * escenario[1]} m/s."

explicacion: |
  Usando la fórmula $v = \lambda \cdot f$, multiplicamos la longitud de onda por la frecuencia para obtener la velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["despeje"]

respuesta: 2.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una onda sonora viaja a una velocidad de $340$ m/s y su frecuencia es de $170$ Hz, ¿cuál es su longitud de onda en metros?"

pasos:
  - "Despejar la fórmula original: $\\lambda = v / f$."
  - "Sustituir valores: $\\lambda = 340 / 170$."
  - "Resultado: $\\lambda = 2$ m."

explicacion: |
  Al despejar la longitud de onda, la frecuencia pasa dividiendo al otro lado de la igualdad.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: falso

tipo: vf

enunciado: "Si la velocidad de una onda se mantiene constante (como en el vacío para la luz) y la frecuencia aumenta, la longitud de onda debe aumentar también."

explicacion: |
  Falso. Si $v$ es constante, $\lambda$ y $f$ son inversamente proporcionales ($\lambda = v/f$). Si la frecuencia aumenta, la longitud de onda disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["metodologia"]

respuesta_orden: ["identificar_datos", "seleccionar_formula", "sustituir_valores", "calcular_resultado"]
tipo: ordenar
opciones_explicitas: ["identificar_datos", "seleccionar_formula", "sustituir_valores", "calcular_resultado"]

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de velocidad de onda."

explicacion: |
  Para resolver problemas físicos, primero debemos extraer los datos, elegir la ecuación correcta, realizar la sustitución y finalmente operar matemáticamente.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["unidades", "conceptos_basicos"]

respuesta: "m/s"
tipo: completar
respuestas_validas:
  - "m/s"

enunciado: "Para calcular la velocidad de una onda usando la fórmula $v = \\lambda \\cdot f$, si la longitud de onda $\\lambda$ está en metros (m) y la frecuencia $f$ está en Hertz (Hz), la unidad resultante para la velocidad será ___."

pasos:
  - "Identificar las unidades de los componentes: $\\lambda$ [m] y $f$ [1/s]."
  - "Multiplicar las unidades: $m \\cdot (1/s) = m/s$."

explicacion: |
  El error común es confundir la unidad de velocidad con la de frecuencia o longitud. La velocidad es la distancia recorrida por la fase de la onda por unidad de tiempo, por lo tanto, se mide en metros por segundo (m/s).
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["relacion_inversa", "ondas"]

respuesta: verdadero
tipo: vf
enunciado: "En un medio donde la velocidad de propagación es constante, si la frecuencia de una onda se duplica, su longitud de onda se reduce a la mitad. ¿Es esto correcto?"

explicacion: |
  Dado que $v = \lambda \cdot f$ y $v$ es constante, la relación entre $\lambda$ y $f$ es inversamente proporcional. Si $f$ aumenta, $\lambda$ debe disminuir para mantener el producto constante.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["velocidad_fase", "error_comun"]

variables:
  v_onda: 340.0
  f_onda: 170.0

respuesta: "340"
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un estudiante afirma que si una onda tiene una frecuencia de {f_onda} Hz y una longitud de onda de 2 metros, su velocidad es de 340 m/s. ¿Cuál es el valor real de la velocidad en m/s?"

pasos:
  - "Aplicar la fórmula $v = \\lambda \\cdot f$."
  - "Calcular $2 \\cdot 170 = 340$."

explicacion: |
  En este caso, el estudiante tenía razón. El error común es olvidar que la velocidad depende de la frecuencia y la longitud de onda simultáneamente; si cambias una sin ajustar la otra, la velocidad cambia.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["simbolos", "definiciones"]

respuesta: "longitud de onda"
tipo: mc

opciones_explicitas: ["frecuencia", "longitud de onda", "amplitud", "periodo"]

enunciado: "En la ecuación de la velocidad de propagación de una onda, el símbolo $\\lambda$ representa la ___."

explicacion: |
  Es fundamental distinguir entre $\lambda$ (longitud de onda, distancia entre crestas consecutivas) y $A$ (amplitud, que es la altura de la cresta).
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["despeje", "algebra"]

respuesta_orden: ["v = lambda * f", "f = v / lambda", "lambda = v / f"]
tipo: ordenar

opciones_explicitas: ["v = lambda * f", "f = v / lambda", "lambda = v / f"]

enunciado: "Ordena las fórmulas para despejar cada variable de la ecuación fundamental de la onda, partiendo de la velocidad."

pasos:
  - "La fórmula original es $v = \\lambda \\cdot f$."
  - "Para despejar $f$, pasamos $\\lambda$ dividiendo: $f = v / \\lambda$."
  - "Para despejar $\\lambda$, pasamos $f$ dividiendo: $\\lambda = v / f$."

explicacion: |
  El error común es intentar despejar de forma incorrecta (por ejemplo, intentar pasar una frecuencia restando). Recuerda que en la fórmula original, la frecuencia y la longitud de onda se están multiplicando.
```

```
metadata:
  materia: "fisica"
  tema: "relacion_longitud_frecuencia"
  nivel: "basico"
  tags: ["ondas", "conceptos"]

respuesta: "inversamente"
tipo: completar
respuestas_validas:
  - "inversamente"
  - "inversa"

enunciado: "En una onda de velocidad constante, si la frecuencia aumenta, la longitud de onda debe variar de forma ___ a la frecuencia."

explicacion: |
  Como la velocidad de propagación es $v = \lambda \cdot f$, si la velocidad es constante, la longitud de onda ($\lambda$) y la frecuencia ($f$) son inversamente proporcionales. Si una sube, la otra baja.
```

```
metadata:
  materia: "fisica"
  tema: "velocidad_propagacion"
  nivel: "intermedio"
  tags: ["ondas", "velocidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[300, 10, 3000], [340, 500, 170000]]

respuesta: datos[escenario_idx][2]
tipo: mc
opciones_explicitas: [3000, 170000, 300, 340]

enunciado: "Considera el siguiente caso: una onda tiene una longitud de onda de {datos[escenario_idx][0]} metros y una frecuencia de {datos[escenario_idx][1]} Hz. ¿Cuál es su velocidad de propagación?"

pasos:
  - "Identificar la longitud de onda (λ): {datos[escenario_idx][0]} m"
  - "Identificar la frecuencia (f): {datos[escenario_idx][1]} Hz"
  - "Aplicar la fórmula v = λ · f"

explicacion: |
  Utilizando la fórmula $v = \lambda \cdot f$:
  Caso 1: $300 \cdot 10 = 3000$ m/s.
  Caso 2: $340 \cdot 500 = 170000$ m/s.
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_ondas"
  nivel: "basico"
  tags: ["conceptos", "velocidad"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la velocidad de propagación de una onda una propiedad que depende exclusivamente del medio por el cual se desplaza (y no de la frecuencia de la fuente) en un medio no dispersivo?"

explicacion: |
  En un medio no dispersivo (como el vacío para la luz), la velocidad de propagación es constante para todas las frecuencias. En medios dispersivos, la velocidad sí puede depender de la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "componentes_ecuacion"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas:
  - "frecuencia"

enunciado: "En la ecuación de la velocidad de propagación $v = \\lambda \\cdot f$, el término $f$ representa la ___."

explicacion: |
  La letra $f$ representa la frecuencia, que es el número de ciclos por unidad de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "relacion_magnitudes"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta_orden: ["longitud_onda", "velocidad", "frecuencia"]
tipo: ordenar
opciones_explicitas: ["frecuencia", "velocidad", "longitud_onda"]

enunciado: "Ordena las siguientes magnitudes de menor a mayor, considerando una onda de sonido en el aire con una frecuencia de 440 Hz (una nota musical):"

pasos:
  - "Estimar la frecuencia ($f$): 440 Hz"
  - "Estimar la velocidad ($v$): ~340 m/s"
  - "Estimar la longitud de onda ($\\lambda = v/f$): ~0.77 m"

explicacion: |
  Para una onda de sonido estándar:
  1. La frecuencia es 440 (valor numérico).
  2. La velocidad es ~340 m/s.
  3. La longitud de onda es ~0.77 m.
  *Nota: El orden se basa en la magnitud de los valores numéricos resultantes en unidades SI para este escenario específico.*
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["sonido", "frecuencia", "longitud_onda"]

variables:
  escenario: uno_de([[130, 0.5, 260], [440, 1.0, 440], [256, 2.0, 128]])
  v_sonido: 340

respuesta: v_sonido / escenario[0]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un músico toca una nota cuya frecuencia es de {escenario[0]} Hz. Si la velocidad del sonido en el aire es de {v_sonido} m/s, ¿cuál es la longitud de onda λ en metros?"

pasos:
  - "Identificar la fórmula de velocidad: v = λ · f"
  - "Despejar la longitud de onda: λ = v / f"
  - "Sustituir los valores: λ = {v_sonido} / {escenario[0]}"

explicacion: |
  La longitud de onda se calcula dividiendo la velocidad de propagación por la frecuencia: λ = v / f.
  Para este caso: {v_sonido} / {escenario[0]} = {redondear(v_sonido / escenario[0], 2)} m.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["radio", "electromagnetismo"]

variables:
  datos: [[100000000, 3.0e8, 3.0], [50000000, 3.0e8, 6.0], [1000000000, 3.0e8, 0.3]]
  idx: uno_de([0, 1, 2])
  frecuencia: datos[idx][0]
  velocidad: datos[idx][1]
  lambda_correcta: datos[idx][2]

respuesta: lambda_correcta
tipo: mc
opciones_explicitas: [0.3, 3.0, 6.0, 300.0]

enunciado: "Una antena de radio emite una señal con una frecuencia de {frecuencia} Hz. Si la señal viaja a la velocidad de la luz ({velocidad} m/s), ¿cuál es la longitud de onda de la radiación (en metros)?"

explicacion: |
  Usando λ = v / f:
  λ = {velocidad} / {frecuencia} = {lambda_correcta} m.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["ondas", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si la frecuencia de una onda aumenta pero su velocidad de propagación se mantiene constante, la longitud de onda λ debe disminuir."

explicacion: |
  Dado que v = λ · f, la frecuencia y la longitud de onda son inversamente proporcionales para una velocidad constante. Si f aumenta, λ disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["oceanografia", "calculo"]

variables:
  caso: uno_de([[0.5, 12, 24], [2.0, 10, 5], [0.2, 15, 75]])
  f_onda: caso[0]
  v_onda: caso[1]
  l_onda: caso[2]

respuesta: l_onda
tipo: completar
respuestas_validas:
  - 24.0
  - 5.0
  - 75.0

enunciado: "En un estudio oceanográfico se observa una onda con una frecuencia de {f_onda} Hz que se desplaza a una velocidad de {v_onda} m/s. La longitud de onda medida es de ___ m."

explicacion: |
  Aplicando la relación λ = v / f:
  λ = {v_onda} / {f_onda} = {l_onda} m.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["procedimiento", "metodologia"]

opciones_explicitas: ["Dividir la velocidad por la frecuencia", "Multiplicar la velocidad por la frecuencia", "Sumar la velocidad y la frecuencia", "Dividir la frecuencia por la velocidad"]

respuesta: "Dividir la velocidad por la frecuencia"
tipo: mc

enunciado: "Para hallar la longitud de onda (λ) conociendo la velocidad (v) y la frecuencia (f), el procedimiento matemático correcto es:"

explicacion: |
  Partiendo de la fórmula v = λ · f, despejamos λ pasando la frecuencia a dividir al otro lado de la igualdad: λ = v / f.
```

## Sección: impulso-cambio-momento (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "fuerza", "tiempo"]

respuesta: "J"
tipo: "completar"
respuestas_validas:
  - "J"
  - "impulso"

enunciado: "El producto de la fuerza aplicada sobre un objeto por el intervalo de tiempo durante el cual actúa se denomina ___."

explicacion: |
  El impulso (J) se define como el producto de la fuerza constante por el tiempo de aplicación: J = F · Δt.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teorema_impulso_momento"]

tipo: vf
respuesta: verdadero

enunciado: "Según el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es igual al cambio en su momento lineal (Δp)."

explicacion: |
  El teorema establece que J = Δp, lo que significa que el impulso aplicado es igual a la variación de la cantidad de movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["unidades", "SI"]

variables:
  opciones_correctas: ["N·s", "kg·m/s"]
  opciones_incorrectas: ["N/s"]
  opciones_validas: ["N·s", "kg·m/s", "N/s"]

respuesta: "N·s"
tipo: "mc"
opciones_explicitas: ["N·s", "kg·m/s", "N/s"]

enunciado: "En el Sistema Internacional, la unidad del impulso es ___ (nota: ambas son equivalentes, elige la que representa la definición directa de F·Δt)."

explicacion: |
  Tanto N·s como kg·m/s son unidades válidas para el impulso debido a la equivalencia dimensional.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["momento_lineal", "definicion"]

respuesta: "m * v"
tipo: "completar"
respuestas_validas:
  - "m * v"
  - "m*v"
  - "p = m*v"

enunciado: "La cantidad de movimiento o momento lineal de un objeto se define matemáticamente como el producto de su masa por su ___."

explicacion: |
  El momento lineal (p) es una magnitud vectorial definida como p = m · v.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["relacion_variables"]

respuesta: falso
tipo: vf

enunciado: "Si se mantiene constante la fuerza aplicada sobre un objeto, aumentar el tiempo de aplicación reducirá el cambio en el momento lineal."

explicacion: |
  Como J = Δp y J = F · Δt, si la fuerza es constante, el cambio en el momento es directamente proporcional al tiempo. A mayor tiempo, mayor cambio de momento.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "teoria"]

tipo: mc
opciones_explicitas: ["El cambio en el momento lineal", "La velocidad instantánea", "La masa del objeto", "La aceleración gravitatoria"]
respuesta: "El cambio en el momento lineal"

enunciado: "Según el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es igual a ___."

explicacion: |
  El teorema del impulso establece que el impulso (J = F·Δt) es igual a la variación de la cantidad de movimiento (Δp).
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["calculo", "fuerza", "tiempo"]

variables:
  fuerza: 15.0
  tiempo: 2.5

tipo: completar
tolerancia_abs: 0.01

enunciado: "Una fuerza constante de {fuerza} N se aplica sobre un cuerpo durante un intervalo de tiempo de {tiempo} s. ¿Cuál es el módulo del impulso aplicado?"

pasos:
  - "Identificar la fuerza aplicada: F = {fuerza} N"
  - "Identificar el intervalo de tiempo: Δt = {tiempo} s"
  - "Calcular el producto: J = F * Δt"

explicacion: |
  El impulso se calcula multiplicando la fuerza por el tiempo: J = 15.0 * 2.5 = 37.5 kg·m/s.

respuesta: 37.5
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["momento_lineal", "velocidad"]

variables:
  masa: 5.0
  v_inicial: 2.0
  v_final: 8.0

tipo: completar
respuestas_validas:
  - "30.0"

enunciado: "Un objeto de {masa} kg pasa de una velocidad de {v_inicial} m/s a una de {v_final} m/s. El cambio en su momento lineal (Δp) es de ___ kg·m/s."

explicacion: |
  El cambio de momento es Δp = m * (v_final - v_inicial).
  Δp = 5.0 * (8.0 - 2.0) = 5.0 * 6.0 = 30.0 kg·m/s.

respuesta: "30.0"
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

tipo: vf

enunciado: "¿Si un objeto recibe el mismo impulso (J), pero su masa es el doble, su cambio en la velocidad será la mitad que si la masa fuera la original?"

explicacion: |
  Verdadero. Como J = Δp = m * Δv, entonces Δv = J / m. Si la masa (m) se duplica, la variación de velocidad (Δv) se reduce a la mitad.

respuesta: verdadero
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["ordenar", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Calcular el cambio de momento lineal (Δp)", "Determinar la fuerza aplicada (F)", "Identificar los datos del problema"]

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide hallar la fuerza aplicada durante un tiempo determinado, conociendo la masa y el cambio de velocidad."

explicacion: |
  Para resolver problemas de este tipo, primero se extraen los datos, luego se calcula la variación de la cantidad de movimiento y finalmente se despeja la fuerza de la fórmula J = Δp.

respuesta_orden: ["Identificar los datos del problema", "Calcular el cambio de momento lineal (Δp)", "Determinar la fuerza aplicada (F)"]
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "momento_lineal"]

respuesta: "mismo"
tipo: mc
opciones_explicitas: ["mismo", "mayor", "menor", "inverso"]

enunciado: "Si una fuerza constante se aplica sobre un objeto durante un intervalo de tiempo determinado, el cambio en el momento lineal del objeto es ___ que el impulso aplicado."

explicacion: |
  Por el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es exactamente igual al cambio en su momento lineal.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["fuerza_media", "impulso"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10.0, 2.0, 20.0], [5.0, 4.0, 20.0]]

respuesta: datos[escenario_idx][2]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza media de {datos[escenario_idx][0]} N sobre un objeto durante un intervalo de tiempo de {datos[escenario_idx][1]} s. ¿Cuál es el cambio en el momento lineal (___) del objeto?"

pasos:
  - "Identificar la fuerza aplicada."
  - "Identificar el intervalo de tiempo."
  - "Calcular el impulso usando J = F * Delta t."

explicacion: |
  El cambio en el momento lineal es igual al impulso. 
  En el caso 1: 10 N * 2 s = 20 kg*m/s.
  En el caso 2: 5 N * 4 s = 20 kg*m/s.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["vector", "direccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si el cambio en el momento lineal de un objeto es un vector, ¿el impulso aplicado debe tener la misma dirección y sentido que el cambio de momento?"

explicacion: |
  Correcto. El impulso es una magnitud vectorial definida como J = Delta p, por lo tanto, ambos vectores son idénticos en magnitud, dirección y sentido.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["fuerza_media", "integral"]

respuesta: "fuerza"
tipo: completar

enunciado: "Cuando una fuerza no es constante en el tiempo, el impulso total se calcula como la integral de la ___ en el intervalo de tiempo dado."

respuestas_validas:
  - "fuerza"

explicacion: |
  Para fuerzas variables, el impulso es la integral temporal de la fuerza: J = integral de F(t) dt. El resultado de esa integral es el impulso (en N·s), no una fuerza; si se conoce el impulso J y la duración Δt, puede definirse una fuerza media equivalente como F_media = J / Δt.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["masa", "velocidad", "momento"]

respuesta: "Masa y velocidad"
tipo: mc

opciones_explicitas: ["Masa y velocidad", "Masa y temperatura", "Velocidad y color", "Temperatura y color"]

enunciado: "Para determinar el momento lineal (p = m · v) de un objeto, ¿qué dos magnitudes físicas son necesarias para realizar el cálculo?"

explicacion: |
  El momento lineal depende directamente de la masa del objeto y de su velocidad instantánea. La temperatura y el color no afectan el momento lineal.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "fuerza", "teoria"]

respuesta: "fuerza"
tipo: "mc"
opciones_explicitas: ["fuerza", "momento", "aceleracion", "velocidad"]

enunciado: "El impulso se define como el producto de una ___ aplicada sobre un objeto por el intervalo de tiempo durante el cual actúa."

explicacion: |
  El impulso (J) es el producto de la fuerza por el tiempo (J = F * Δt). Mientras que la fuerza es la causa inmediata del cambio de movimiento, el impulso describe el efecto acumulado de esa fuerza en un intervalo de tiempo determinado.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["teorema", "momento", "impulso"]

variables:
  escenario: uno_de([["un objeto gana velocidad", "aumenta"], ["un objeto frena", "disminuye"], ["un objeto mantiene velocidad", "es_cero"]])

respuesta: verdadero
tipo: "vf"

enunciado: "Si el impulso aplicado a un objeto es positivo (J > 0), el cambio en el momento lineal del objeto es positivo."

explicacion: |
  Según el teorema del impulso y la cantidad de movimiento, el impulso es igual al cambio en el momento lineal (J = Δp). Si el impulso es positivo, el momento final es mayor que el inicial, por lo tanto, el cambio es positivo (aumenta).
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

respuesta: "kg·m/s"
tipo: "completar"
respuestas_validas:
  - "kg·m/s"

enunciado: "El impulso puede expresarse en unidades de Newton-segundo (N·s) o en unidades de momento lineal, que son ___."

explicacion: |
  Ambas unidades son dimensionalmente equivalentes. Como F = kg·m/s² y t = s, entonces F·t = (kg·m/s²)·s = kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["vector", "direccion"]

respuesta_orden: ["Fuerza", "Tiempo", "Cambio de momento"]
tipo: "ordenar"
opciones_explicitas: ["Fuerza", "Tiempo", "Cambio de momento"]

enunciado: "Ordene los conceptos de izquierda a derecha según la relación causal: la ___ aplicada durante un ___ produce un ___."

explicacion: |
  La secuencia lógica es: la fuerza (causa) actúa durante un intervalo de tiempo (duración) y esto resulta en un cambio en el momento lineal (efecto).
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["grafico", "fuerza_tiempo"]

respuesta: "aumenta"
tipo: "mc"
opciones_explicitas: ["aumenta", "disminuye", "se_mantiene"]

enunciado: "Si una fuerza constante actúa sobre un objeto durante cierto tiempo, produciendo un impulso (cambio en el momento lineal), y el tiempo de aplicación se duplica manteniendo la fuerza constante, el cambio en el momento lineal..."

explicacion: |
  Dado que J = F * Δt, el impulso es directamente proporcional al tiempo. Si el tiempo se duplica manteniendo la fuerza constante, el cambio en el momento lineal también se duplica (aumenta).
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["impulso", "momento", "dinamica"]

variables:
  escenario: uno_de([[10.0, 5.0, 2.0], [20.0, 10.0, 4.0], [5.0, 2.5, 1.0]])
  fuerza: escenario[0]
  delta_t: escenario[1]
  masa: escenario[2]

respuesta: fuerza * delta_t
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un jugador de fútbol patea un balón de masa {masa} kg aplicando una fuerza constante de {fuerza} N durante un intervalo de tiempo de {delta_t} s. ¿Cuál es el módulo del impulso aplicado?"

pasos:
  - "Identificar la fuerza aplicada: F = {fuerza} N"
  - "Identificar el intervalo de tiempo: Δt = {delta_t} s"
  - "Calcular el impulso usando la fórmula J = F * Δt"

explicacion: |
  El impulso (J) se define como el producto de la fuerza aplicada por el tiempo durante el cual actúa. 
  J = {fuerza} N * {delta_t} s = {fuerza * delta_t} kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["momento_lineal", "velocidad"]

variables:
  caso: uno_de([[1, 10.0, 5.0], [2, 20.0, 10.0], [3, 5.0, 2.0]])
  m: caso[1]
  v_i: caso[2]
  v_f: 0.0

respuesta: m * (v_f - v_i)
tipo: mc
opciones_explicitas: [0.0, -50.0, -200.0, -10.0]

enunciado: "Un objeto de masa {m} kg se desplaza con una velocidad inicial de {v_i} m/s y se detiene por completo tras un choque. ¿Cuál es el cambio en su momento lineal (Δp)?"

explicacion: |
  El cambio en el momento lineal es Δp = m * (v_f - v_i).
  En este caso: {m} * (0.0 - {v_i}) = {m * (0.0 - v_i)}.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teoria", "impulso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el impulso aplicado a un objeto es nulo (J = 0), entonces el cambio en su momento lineal (Δp) también es nulo."

explicacion: |
  Según el teorema del impulso y la cantidad de movimiento, J = Δp. Si el impulso es cero, el cambio en el momento también lo es, lo que significa que el objeto mantiene su estado de movimiento original.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["impulso", "tiempo", "fuerza"]

variables:
  datos: [[100.0, 2.0], [50.0, 5.0], [200.0, 1.0]]
  idx: uno_de([0, 1, 2])
  impulse: datos[idx][0]
  tiempo: datos[idx][1]

respuesta: impulse / tiempo
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un astronauta de masa constante recibe un impulso de {impulse} kg·m/s durante un tiempo de {tiempo} s. ¿Cuál es la fuerza media aplicada, en N?"

pasos:
  - "Recordar que J = F_media * Δt"
  - "Despejar la fuerza: F_media = J / Δt"

explicacion: |
  Para hallar la fuerza media, dividimos el impulso por el tiempo: {impulse} / {tiempo} = {impulse / tiempo} N.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular Δp = m(v_f - v_i)", "Identificar datos (m, v_i, v_f)", "Igualar J = Δp", "Calcular J = F * Δt"]
respuesta_orden: ["Identificar datos (m, v_i, v_f)", "Calcular Δp = m(v_f - v_i)", "Igualar J = Δp", "Calcular J = F * Δt"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide hallar la fuerza media aplicada durante un choque, conociendo la masa y las velocidades inicial y final."

explicacion: |
  Para resolver problemas de dinámica de colisiones, primero se extraen los datos, luego se calcula el cambio de movimiento (Δp), se aplica la equivalencia con el impulso y finalmente se despeja la incógnita (fuerza).
```

