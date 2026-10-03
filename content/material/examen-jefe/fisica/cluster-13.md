# Examen jefe — [PENDIENTE #748]

> Logro #748. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **127 preguntas totales** en 5/5 secciones.

---

## Sección: tiro-vertical (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["velocidad"]

variables:
  v0: random(2, 10) * 5
  g: 10
  t: random(1, 3)

respuesta: v0 - g * t
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²). ¿Cuál es su velocidad en t={t} s?"

explicacion: |
  v(t) = {v0} − {g}×{t} = {v0 - g * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["velocidad", "verdadero_falso"]

variables:
  v0: random(4, 10) * 5
  g: 10
  t: random(1, 4)

respuesta: ((v0 - g * t) < 0)
tipo: vf

enunciado: "v₀={v0} m/s (g=10 m/s²). ¿Ya está bajando el objeto en t={t} s (o sea, v(t) es negativa)?"

explicacion: |
  v(t) = {v0}−{g}×{t} = {v0 - g * t} — negativa significa que ya pasó el
  punto más alto y está descendiendo.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["tiempo_subida"]

variables:
  g: 10
  t_sol: random(1, 8)
  v0: g * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²). ¿Cuánto tarda en llegar a la altura máxima?"

pasos:
  - "t_subida = v₀/g = {v0}/{g} = {t_sol}"

explicacion: |
  En la altura máxima, v=0 — se despeja el tiempo de esa condición.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["altura_maxima"]

variables:
  g: 10
  t_sol: random(1, 8)
  v0: g * t_sol

respuesta: (v0 ^ 2) / (2 * g)
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²), desde el nivel del piso. ¿Cuál es la altura máxima?"

pasos:
  - "y_max = v₀²/(2g) = {v0 ^ 2}/{2 * g} = {(v0 ^ 2) / (2 * g)}"

explicacion: |
  y_max = v₀²/(2g).
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["altura_maxima"]

variables:
  g: 10
  t_sol: random(1, 6)
  v0: g * t_sol
  y0: random(1, 20)

respuesta: y0 + (v0 ^ 2) / (2 * g)
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s desde una altura y₀={y0} m (g=10 m/s²). ¿Cuál es la altura máxima total?"

explicacion: |
  Se suma la altura inicial a lo que sube: y₀ + v₀²/(2g).
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["tiempo_vuelo"]

variables:
  g: 10
  t_subida: random(1, 8)
  v0: g * t_subida

respuesta: 2 * t_subida
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²), y vuelve al mismo nivel de partida. ¿Cuánto tiempo está en el aire en total?"

pasos:
  - "Por simetría, tiempo total = 2×tiempo de subida = 2×{t_subida} = {2 * t_subida}"

explicacion: |
  El tiempo de bajada es igual al de subida, si vuelve al mismo nivel.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  v0: random(10, 50)

respuesta: -v0
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s, y vuelve al mismo nivel de partida. ¿Cuál es su velocidad justo al volver?"

explicacion: |
  Misma magnitud que la inicial, pero de signo opuesto (ahora bajando):
  −{v0}.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["caida_libre"]

variables:
  g: 10
  t: random(1, 8)

respuesta: -g * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde el reposo (g=10 m/s²). ¿Cuál es su velocidad en t={t} s?"

explicacion: |
  v(t) = −gt = −{g}×{t} = {-g * t} (negativa: cae, hacia abajo).
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["caida_libre"]

variables:
  g: 10
  t: random(1, 6)

respuesta: (g * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde el reposo (g=10 m/s²). ¿Qué distancia cayó en t={t} s?"

explicacion: |
  distancia = ½gt² = {g}×{t}²/2 = {(g * t ^ 2) / 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["caida_libre"]

variables:
  g: 10
  t_sol: random(1, 2) * 2
  y0: (g * t_sol ^ 2) / 2

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde {y0} m de altura (g=10 m/s²). ¿Cuánto tarda en llegar al piso?"

pasos:
  - "{y0} = ½×{g}×t² → t² = {2 * y0 / g} → t = {t_sol}"

explicacion: |
  Se despeja t de la fórmula de caída libre.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el punto más alto de un tiro vertical, la velocidad vertical del objeto es 0."

explicacion: |
  Es el instante exacto en que deja de subir y empieza a bajar.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En el punto más alto, tanto la velocidad como la aceleración del objeto son 0."

explicacion: |
  Sólo la velocidad es 0 ahí — la aceleración de la gravedad sigue
  actuando todo el tiempo, incluido ese instante.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El tiempo de subida y el tiempo total de vuelo (hasta volver al punto de partida) son siempre el mismo número."

explicacion: |
  El tiempo total es el DOBLE del tiempo de subida (por la simetría
  subida/bajada), no el mismo número.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El tiro vertical es exactamente un MRUV, con a=−g."

explicacion: |
  Usa las mismas fórmulas de `../mruv/`, con la aceleración fija en −g.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la convención 'arriba positivo', la aceleración de la gravedad se escribe con signo negativo (−g)."

explicacion: |
  La gravedad siempre tira hacia abajo, en sentido contrario a la
  convención elegida como positiva.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  g: 10
  t_sol: random(1, 8)
  v0: g * t_sol
  real: (v0 ^ 2) / (2 * g)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Se lanza un objeto con v₀={v0} m/s (g=10 m/s²). ¿Es correcto que la altura máxima sea {propuesto} m?"

explicacion: |
  La altura máxima correcta es v₀²/(2g) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["posicion"]

variables:
  g: 10
  v0: random(20, 60)
  t: random(1, 3)

respuesta: v0 * t - (g * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s desde el piso (g=10 m/s²). ¿A qué altura está en t={t} s?"

pasos:
  - "y(t) = {v0}t − ½×{g}t² = {v0 * t} − {(g * t ^ 2) / 2}"

explicacion: |
  Se usa la fórmula completa de posición del MRUV, con a=−g.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto en tiro vertical pasa por la misma altura dos veces (una subiendo, otra bajando), con la misma rapidez (magnitud de velocidad) en las dos, pero sentidos opuestos."

explicacion: |
  Es una consecuencia de la simetría del movimiento respecto al punto
  más alto.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula t_total=2v₀/g sólo vale si el objeto vuelve exactamente al mismo nivel desde el que se lanzó — si cae más abajo (o más arriba), hay que resolver la ecuación cuadrática completa."

explicacion: |
  El atajo de la simetría no aplica cuando el punto de llegada es
  distinto del de partida.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  g: 10
  k: random(1, 5)
  v0: g * k
  subida: (v0 ^ 2) / (2 * g)
  altura_balcon: random(5, 30)

respuesta: subida + (subida + altura_balcon)
tipo: input
tolerancia_abs: 0

enunciado: "Desde un balcón de {altura_balcon} m se lanza un objeto hacia arriba con v₀={v0} m/s. Sube, y después cae hasta el piso (nivel 0). ¿Qué distancia TOTAL recorrió (subida + bajada), sumando ambos tramos?"

pasos:
  - "Sube {subida} m hasta el punto más alto"
  - "Desde ahí baja {subida}+{altura_balcon} m hasta el piso (el punto más alto queda a {subida}+{altura_balcon} m del piso)"
  - "Total: {subida} + ({subida}+{altura_balcon}) = {subida + (subida + altura_balcon)}"

explicacion: |
  La distancia TOTAL recorrida suma los dos tramos por separado — no es
  lo mismo que el desplazamiento neto (balcón hasta el piso), que sería
  sólo {altura_balcon} m.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  v0: random(10, 50)

respuesta: verdadero
tipo: vf

enunciado: "Si se lanza un objeto hacia arriba con v₀={v0} m/s y vuelve a pasar por el punto de lanzamiento, su rapidez en ese instante vuelve a ser {v0} m/s (aunque el sentido sea el opuesto)."

explicacion: |
  La energía se conserva en ausencia de rozamiento — la rapidez al
  volver al mismo nivel es igual a la inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  g: 10
  t: random(1, 6)
  real: (g * t ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Un objeto cae libremente durante {t} s (g=10 m/s²). ¿Es correcto que cayó {propuesto} m?"

explicacion: |
  La distancia correcta es ½gt² = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En ausencia de resistencia del aire, dos objetos de distinta masa soltados desde la misma altura llegan al piso al mismo tiempo."

explicacion: |
  La aceleración de la gravedad no depende de la masa del objeto — es
  el mismo g para cualquiera.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  g: 10
  t_subida: random(1, 6)
  v0: g * t_subida

respuesta: 2 * t_subida
tipo: input
tolerancia_abs: 0

enunciado: "Una pelota pateada hacia arriba con v₀={v0} m/s vuelve al mismo nivel del piso. ¿Cuánto tiempo estuvo en el aire?"

explicacion: |
  Mismo cálculo de siempre: t_total = 2v₀/g.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  v0_a: random(10, 30)
  v0_b: random(31, 60)

respuesta: ((v0_b ^ 2) > (v0_a ^ 2))
tipo: vf

enunciado: "Un objeto se lanza con v₀={v0_a} m/s, y otro con v₀={v0_b} m/s. ¿Alcanza mayor altura el segundo?"

explicacion: |
  La altura máxima crece con el CUADRADO de v₀ — mayor velocidad
  inicial siempre da mayor altura.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber en qué instante(s) un objeto en tiro vertical pasa por una altura específica (que no sea la máxima), hay que resolver una ecuación cuadrática en t, que en general tiene dos soluciones (subiendo y bajando)."

explicacion: |
  y(t)=y₀+v₀t−½gt² es cuadrática en t — la fórmula resolvente de
  `../../matematica/ecuacion-cuadratica/` da las dos soluciones (dos
  instantes distintos a la misma altura).
```

## Sección: circuitos-en-paralelo (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["electricidad", "voltaje"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito en paralelo, todos los componentes conectados a las mismas ramas mantienen la misma tensión."

explicacion: |
  En un circuito en paralelo, la diferencia de potencial (tensión o voltaje) es la misma para todas las ramas que están conectadas directamente a los terminales de la fuente.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "equivalente"]

variables:
  r1: 10
  r2: 20
  r_eq: 1 / (1/r1 + 1/r2)

respuesta: r_eq
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si tenemos dos resistencias en paralelo con valores de {r1} Ω y {r2} Ω, ¿cuál es el valor de la resistencia equivalente (en Ω)?"

pasos:
  - "Calcular la conductancia de la primera rama: 1/r1"
  - "Calcular la conductancia de la segunda rama: 1/r2"
  - "Sumar las conductancias: G_total = 1/r1 + 1/r2"
  - "La resistencia equivalente es el inverso de la conductancia total: R_eq = 1/G_total"

explicacion: |
  La fórmula para dos resistencias en paralelo es: 1/R_eq = 1/R1 + 1/R2. En este caso: 1/10 + 1/20 = 3/20, por lo tanto R_eq = 20/3 ≈ 6.67 Ω.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["corriente", "ley_de_kochl"]

opciones_explicitas: ["se divide", "se suma", "se mantiene igual"]

respuesta: "se divide"
tipo: mc

enunciado: "En un circuito en paralelo, la corriente total que sale de la fuente ___ entre las distintas ramas del circuito."

explicacion: |
  De acuerdo con la Ley de Corrientes de Kirchhoff, la corriente total es la suma de las corrientes que pasan por cada rama. Por lo tanto, la corriente se reparte o divide entre ellas.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["componentes", "nodos"]

respuestas_validas:
  - "fuente"
  - "cables"
  - "cargas"

respuesta: ["fuente", "cables", "cargas"]
tipo: completar

enunciado: "Para armar un circuito básico en paralelo se requiere una ___ de energía, ___ de conexión y las ___ que queremos alimentar."

explicacion: |
  Un circuito requiere una fuente para proporcionar la diferencia de potencial, cables para permitir el flujo de electrones y cargas (resistencias, bombillas, etc.) para consumir la energía.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "comparacion"]

variables:
  r_base: 100
  r_paralelo: 50

respuesta: "menor"
tipo: mc

opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Si añadimos una resistencia adicional en paralelo a una resistencia ya existente, la resistencia total del circuito será ___ que la original."

explicacion: |
  Al añadir una rama en paralelo, se ofrecen más caminos para que fluyan los electrones, lo que reduce la oposición total al paso de la corriente. Por lo tanto, la resistencia equivalente siempre disminuye al agregar resistencias en paralelo.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["resistencia", "paralelo"]

variables:
  r1: 10.0
  r2: 10.0

respuestas_validas:
  - 5.0
respuesta: 5.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si tenemos dos resistencias en paralelo, una de {r1} Ω y otra de {r2} Ω, ¿cuál es el valor de la resistencia equivalente (Req)?"

pasos:
  - "Utilizar la fórmula para dos resistencias: 1/Req = 1/R1 + 1/R2"
  - "Calcular: 1/Req = 1/10 + 1/10 = 2/10"
  - "Invertir el resultado: Req = 10/2 = 5 Ω"

explicacion: |
  En un circuito en paralelo, la resistencia equivalente siempre es menor que la resistencia más pequeña del circuito. En este caso, 1/Req = 1/10 + 1/10 = 0.2, por lo tanto Req = 1/0.2 = 5 Ω.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["tensión", "voltaje"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito de corriente continua con dos o más resistencias conectadas en paralelo, la diferencia de potencial (tensión) es la misma para todas las resistencias."

explicacion: |
  Correcto. Una de las propiedades fundamentales de los circuitos en paralelo es que todos los componentes están conectados a los mismos dos nodos, por lo tanto, la tensión es idéntica para todos.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_kirchhoff"]

variables:
  v_total: 12.0
  r1: 4.0
  r2: 6.0
  i_total: 4.0
  i1: 2.0
  i2: 1.3333

respuesta: "3 A"
tipo: mc

opciones_explicitas: ["3 A", "2 A", "5 A"]

enunciado: "Se tiene una fuente de {v_total}V conectada a dos resistencias en paralelo: R1 = {r1} Ω y R2 = {r2} Ω. ¿Cuál es la corriente que circula por la rama de la resistencia R1?"

pasos:
  - "Calcular la corriente en la rama 1 usando la Ley de Ohm: I1 = V / R1"
  - "I1 = 12V / 4 Ω = 3A"
  - "Calcular la corriente en la rama 2: I2 = 12V / 6 Ω = 2A"
  - "Verificar la corriente total: I_total = 3A + 2A = 5A"

explicacion: |
  La corriente total se divide entre las ramas. Usando I = V/R, la corriente en la primera rama es 12/4 = 3A.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente_total", "resistencia_equivalente"]

variables:
  r1: 12.0
  r2: 6.0
  v: 12.0
  r_eq: 4.0
  i_total: 3.0

respuesta: 3.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un circuito tiene dos resistencias en paralelo de {r1} Ω y {r2} Ω. Si se aplica una tensión de {v}V, ¿cuál es la corriente total suministrada por la fuente?"

pasos:
  - "Calcular la resistencia equivalente: 1/Req = 1/12 + 1/6 = 1/12 + 2/12 = 3/12, entonces Req = 4 Ω"
  - "Calcular la corriente total con la Ley de Ohm: I_total = V / Req"
  - "I_total = 12V / 4 Ω = 3A"

explicacion: |
  Primero hallamos la Req que es 4 Ω. Luego, aplicamos I = V/R, resultando en 12/4 = 3A.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "avanzado"
  tags: ["procedimiento", "metodología"]

opciones_explicitas: ["Calcular R_eq", "Calcular I_total", "Calcular tensiones"]

respuesta_orden: ["Calcular R_eq", "Calcular I_total", "Calcular tensiones"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar la corriente que circula por una rama específica en un circuito de resistencias en paralelo con una fuente de tensión conocida:"

explicacion: |
  Para resolver circuitos en paralelo, el orden lógico es: 1. Hallar la resistencia equivalente de la red para entender el sistema, 2. Calcular la corriente total de la fuente, 3. Usar la tensión (que es constante) para hallar la corriente de cada rama individual.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["resistencia", "paralelo", "error_comun"]

respuesta: "menor"
tipo: "mc"
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Al conectar dos resistencias en paralelo, la resistencia equivalente del circuito es ___ que la resistencia más pequeña del conjunto."

explicacion: |
  En un circuito en paralelo, siempre se ofrecen más caminos para que la corriente fluya, lo que reduce la resistencia total. Por lo tanto, la resistencia equivalente es siempre menor que la menor de las resistencias individuales.
```

```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "basico"
  tags: ["tension", "voltaje", "paralelo"]

respuesta: falso
tipo: "vf"

enunciado: "En un circuito de corriente continua con dos resistencias conectadas en paralelo a una fuente de voltaje, la tensión en la primera resistencia es distinta a la tensión en la segunda."

explicacion: |
  Una de las propiedades fundamentales de los circuitos en paralelo es que todos los componentes conectados a los mismos nodos comparten la misma diferencia de potencial (tensión).
```

```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "intermedio"
  tags: ["ley_de_ohm", "corriente", "paralelo"]

variables:
  escenario: uno_de([[12.0, 2.0, 4.0], [24.0, 6.0, 3.0], [9.0, 3.0, 9.0]])
  v: escenario[0]
  r1: escenario[1]
  r2: escenario[2]
  r_eq: (r1 * r2) / (r1 + r2)

respuesta: v / r_eq
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se tiene una fuente de tensión de {v} V conectada a dos resistencias en paralelo de {r1} Ω y {r2} Ω. Calcule la corriente total suministrada por la fuente en Amperes (A)."

pasos:
  - "Calcular la resistencia equivalente: Req = (R1 · R2) / (R1 + R2)"
  - "Aplicar la Ley de Ohm: I_total = V / Req"

explicacion: |
  Req = ({r1} · {r2}) / ({r1} + {r2}) = {r_eq} Ω.
  I_total = {v} / {r_eq} = {v / r_eq} A.
```

```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "resistencia", "paralelo"]

respuesta: "mayor"
tipo: "completar"
respuestas_validas:
  - "mayor"
  - "menor"
  - "igual"

enunciado: "Si en un circuito en paralelo se añade una tercera resistencia en paralelo a las dos ya existentes, la corriente total que sale de la fuente será ___ que la corriente del circuito original."

explicacion: |
  Al añadir una resistencia en paralelo, la resistencia equivalente total disminuye. Según la Ley de Ohm ($I = V/R$), si la tensión $V$ es constante y $R$ disminuye, la corriente total $I$ debe aumentar.
```

```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "intermedio"
  tags: ["analisis", "pasos", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Calcular R equivalente", "Calcular corriente total", "Calcular corrientes individuales", "Calcular tensión en cada rama"]
respuesta_orden: ["Calcular R equivalente", "Calcular corriente total", "Calcular corrientes individuales", "Calcular tensión en cada rama"]

enunciado: "Para analizar un circuito con una fuente de tensión y tres resistencias en paralelo, ordene los pasos lógicos para determinar la corriente que circula por la rama de mayor resistencia:"

explicacion: |
  Para resolver circuitos complejos, primero se simplifica el circuito (calculando la resistencia equivalente o la corriente total) y luego se desglosa la información hacia las ramas individuales para hallar los valores específicos.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["electricidad", "tension"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito en paralelo, la diferencia de potencial (tensión) entre dos puntos es la misma para todas las ramas en comparación con un circuito en serie donde la tensión se divide entre los componentes."

explicacion: |
  En un circuito en paralelo, todos los componentes están conectados a los mismos dos nodos, por lo que la tensión es idéntica para todos. En serie, la tensión total se reparte entre los componentes.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "ley_de_ohm"]

variables:
  escenario: uno_de([[10.0, 5.0], [20.0, 10.0], [30.0, 15.0]])

respuesta: escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si tenemos dos resistencias idénticas en paralelo, cada una con un valor de {escenario[0]} Ω, ¿cuál es el valor de la resistencia equivalente del sistema?"

pasos:
  - "Identificar que para dos resistencias iguales en paralelo, la resistencia equivalente es la mitad de una de ellas."
  - "Aplicar fórmula: 1/Req = 1/R1 + 1/R2."

explicacion: |
  La resistencia equivalente en paralelo siempre es menor que la resistencia más pequeña del circuito. Para R = {escenario[0]} Ω, Req = {escenario[0]} / 2 = {escenario[1]} Ω.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_kirchhoff"]

respuesta: "se divide"
tipo: completar
respuestas_validas:
  - "se divide"
  - "se reparte"
  - "se fragmenta"

enunciado: "A diferencia de un circuito en serie donde la corriente es la misma en todos los puntos, en un circuito en paralelo la corriente total se ___ entre las distintas ramas."

explicacion: |
  Según la Ley de Corrientes de Kirchhoff, la corriente que entra a un nodo debe ser igual a la suma de las corrientes que salen de él, lo que significa que la corriente se reparte por las ramas disponibles.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["resistencia", "comparacion"]

respuesta: "menor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Al añadir una nueva resistencia en paralelo a un circuito ya existente, la resistencia total del circuito es ___ que la resistencia que había antes."

explicacion: |
  Añadir una rama en paralelo es como ofrecer un camino adicional para el flujo de carga; esto facilita el paso de la corriente y, por lo tanto, disminuye la resistencia total.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "avanzado"
  tags: ["corriente", "resistencia"]

tipo: ordenar
opciones_explicitas: ["corriente total", "corriente en la resistencia de 2 Ω", "corriente en la resistencia de 5 Ω"]
respuesta_orden: ["corriente total", "corriente en la resistencia de 2 Ω", "corriente en la resistencia de 5 Ω"]

enunciado: "En un circuito en paralelo con una fuente de tensión de 10 V y dos resistencias de 2 Ω y 5 Ω, ordena estas magnitudes de MAYOR a MENOR corriente:"

explicacion: |
  1. La corriente total es la suma de las corrientes de las ramas, por lo tanto es la mayor.
  2. A menor resistencia, mayor corriente (I = V/R): la rama de 2 Ω tiene más corriente que la de 5 Ω.
  3. Orden: corriente total, luego la rama de 2 Ω, luego la rama de 5 Ω.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "paralelo", "calculo"]

variables:
  datos: [[10.0, 5.0], [20.0, 6.666666666666667], [30.0, 15.0]]
  idx: uno_de([0, 1, 2])
  R1: datos[idx][0]
  R_eq: datos[idx][1]

enunciado: "En una instalación eléctrica doméstica, dos resistencias se conectan en paralelo. Si la primera resistencia es de {R1} $\\Omega$ y la resistencia equivalente del circuito es de {R_eq} $\\Omega$, ¿cuál es el valor de la segunda resistencia?"

respuesta: (R1 * R_eq) / (R1 - R_eq)
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Para resistencias en paralelo, la fórmula es: 1/R_eq = 1/R1 + 1/R2.
  Despejando R2: R2 = (R1 * R_eq) / (R1 - R_eq).
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["tensión", "voltaje"]

variables:
  V_fuente: 220.0
  V_componente: 220.0

enunciado: "Si conectamos una lámpara a una batería de {V_fuente} V en un circuito en paralelo, la tensión en la lámpara será de {V_componente} V."

respuesta: verdadero
tipo: vf

explicacion: |
  En un circuito en paralelo, todos los componentes conectados a los mismos nodos mantienen la misma diferencia de potencial (tensión).
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_ohm"]

variables:
  datos: [[12.0, 3.0, "4.0 A"], [24.0, 6.0, "4.0 A"], [10.0, 5.0, "2.0 A"]]
  idx: uno_de([0, 1, 2])
  V: datos[idx][0]
  R: datos[idx][1]

enunciado: "En un circuito en paralelo con una fuente de {V} V, una de las ramas tiene una resistencia de {R} $\\Omega$. ¿Cuál es la intensidad de corriente que circula por esa rama específica?"

opciones_explicitas: ["0.5 A", "2.0 A", "4.0 A", "6.0 A"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  Usando la Ley de Ohm: I = V / R. En este caso, {V} / {R} = {datos[idx][2]}.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["corriente", "conceptos"]

variables:
  I_total: 10.0
  I1: 4.0
  I2: 6.0

enunciado: "En un circuito con dos resistencias en paralelo, si la corriente que atraviesa la rama 1 es de {I1} A y la corriente en la rama 2 es de {I2} A, la corriente total suministrada por la fuente es de ___ A."

opciones_explicitas: ["2.0", "4.0", "6.0", "10.0"]
respuesta: "10.0"
tipo: completar

explicacion: |
  Por la Ley de Corrientes de Kirchhoff, la corriente total es la suma de las corrientes de cada rama: I_total = I1 + I2.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

opciones_explicitas: ["Calcular la resistencia equivalente", "Identificar las tensiones de cada rama", "Sumar las corrientes de cada rama para obtener la total"]

respuesta_orden: ["Identificar las tensiones de cada rama", "Calcular la resistencia equivalente", "Sumar las corrientes de cada rama para obtener la total"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para analizar un circuito en paralelo y hallar la corriente total si conocemos las resistencias y el voltaje de la fuente:"

explicacion: |
  1. Primero verificas que la tensión sea la misma en todas las ramas.
  2. Calculas la resistencia equivalente o las corrientes individuales.
  3. Sumas las corrientes para obtener la corriente total del sistema.
```

## Sección: circuitos-en-serie (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie", "conceptos"]

tipo: mc
opciones_explicitas: ["La suma de las resistencias individuales", "La inversa de la suma de las resistencias", "La media de las resistencias", "La resta de las resistencias"]
respuesta: "La suma de las resistencias individuales"

enunciado: "En un circuito en serie, la resistencia total o equivalente es igual a ___."

explicacion: |
  En un circuito en serie, las resistencias se conectan una tras otra, por lo que la resistencia total es la suma algebraica de todas las resistencias del circuito.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "intensidad"]

tipo: vf
respuesta: verdadero

enunciado: "En un circuito en serie, la intensidad de corriente que circula por cada uno de los componentes es la misma."

explicacion: |
  Al haber un único camino para el flujo de electrones, la carga no tiene otra vía para circular, por lo tanto, la intensidad es constante en todos los puntos del circuito.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tension", "voltaje", "ley_de_kirchhoff"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["12V", "24V"], ["10V", "20V"]]
  componentes: [["R1=2Ω, R2=4Ω", "R1=5Ω, R2=5Ω"], ["R1=10Ω, R2=10Ω", "R1=2Ω, R2=8Ω"]]

tipo: completar
respuestas_validas:
  - "12V"
  - "24V"
  - "10V"
  - "20V"
respuesta: datos[escenario_idx][0]

enunciado: "Si tenemos un circuito con una fuente de tensión de {datos[escenario_idx][0]} y dos resistencias, la suma de las caídas de tensión en cada resistencia debe ser igual a ___."

explicacion: |
  Según la Ley de Kirchhoff de tensiones, la suma de las caídas de potencial en un lazo cerrado es igual a la tensión total suministrada por la fuente.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["vocabulario", "componentes"]

tipo: ordenar
opciones_explicitas: ["Fuente de tensión", "Interruptor", "Resistencias", "Cables de conexión"]
respuesta_orden: ["Fuente de tensión", "Interruptor", "Resistencias", "Cables de conexión"]

enunciado: "Ordena los elementos de un circuito básico desde la fuente de energía hasta el receptor, pasando por el control y la conducción:"

explicacion: |
  Un circuito típico comienza con la fuente de energía, sigue por el dispositivo de control (interruptor), los elementos de carga (resistencias/receptores) y el conductor (cables).
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie"]

tipo: mc
opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene igual", "Se vuelve cero"]
respuesta: "Aumenta"

enunciado: "Si añadimos una resistencia adicional a un circuito que ya está en serie, la resistencia total del circuito ___."

explicacion: |
  Como la resistencia total en serie es la suma de todas las resistencias ($R_t = R_1 + R_2 + ... + R_n$), añadir más elementos siempre incrementará el valor de la resistencia total.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie"]

variables:
  r1: 10.0
  r2: 20.0
  r3: 30.0

respuesta: r1 + r2 + r3
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se conectan tres resistencias en serie con valores de {r1} $\\Omega$, {r2} $\\Omega$ y {r3} $\\Omega$. ¿Cuál es el valor de la resistencia total del circuito?"

pasos:
  - "Identificar las resistencias: R1 = 10, R2 = 20, R3 = 30"
  - "En un circuito en serie, la resistencia total es la suma de las resistencias individuales: R_total = R1 + R2 + R3"
  - "Calcular: 10 + 20 + 30 = 60"

explicacion: |
  En un circuito en serie, la resistencia total es siempre la suma algebraica de todas las resistencias presentes en la rama.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "ley_de_ohm"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito de corriente continua con resistencias conectadas en serie, ¿la intensidad de corriente es la misma en todos los puntos del circuito?"

explicacion: |
  Verdadero. En un circuito en serie solo existe un camino para el flujo de electrones, por lo que la carga que pasa por una resistencia es la misma que pasa por las demás.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tension", "voltaje"]

variables:
  v_total: 24.0
  r1: 4.0
  r2: 8.0
  r3: 4.0
  idx: uno_de([0, 1])
  resistencia_label: ["R1", "R2"]
  resultados_texto: ["6.0 V", "12.0 V"]

respuesta: resultados_texto[idx]
tipo: mc
opciones_explicitas: ["6.0 V", "12.0 V", "8.0 V", "16.0 V"]

enunciado: "Un circuito en serie tiene una fuente de {v_total} V y tres resistencias: R1 = {r1} Ω, R2 = {r2} Ω y R3 = {r3} Ω. Si calculamos la caída de tensión en la resistencia {resistencia_label[idx]}, ¿cuál es el valor obtenido?"

explicacion: |
  R_total = R1 + R2 + R3 = 16 Ω.
  La caída de tensión en cada resistencia es proporcional a su valor: V = V_total * (R / R_total).
  Para {resistencia_label[idx]}: V = {resultados_texto[idx]}.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["ley_de_ohm", "corriente"]

variables:
  v_fuente: 12.0
  r_total: 4.0

respuesta: 3.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito en serie tiene una resistencia total de {r_total} $\\Omega$ y se alimenta con una fuente de {v_fuente} V. ¿Cuál es la intensidad de corriente total que circula por el circuito?"

pasos:
  - "Aplicar la Ley de Ohm: I = V / R"
  - "Sustituir valores: I = 12 / 4"
  - "Resultado: I = 3 A"

explicacion: |
  La corriente se calcula dividiendo la tensión total por la resistencia equivalente del circuito.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular la resistencia total sumando las resistencias", "Calcular la corriente total usando la Ley de Ohm", "Calcular las caídas de tensión individuales"]
respuesta_orden: ["Calcular la resistencia total sumando las resistencias", "Calcular la corriente total usando la Ley de Ohm", "Calcular las caídas de tensión individuales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar la tensión en una resistencia específica dentro de un circuito en serie dado el voltaje total y las resistencias."

explicacion: |
  Primero necesitas la resistencia total para hallar la corriente. Una vez que tienes la corriente, puedes hallar la tensión en cualquier componente usando V = I * R.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie", "ley_de_ohm"]

variables:
  r1: 10
  r2: 20
  r3: 30

respuesta: r1 + r2 + r3
tipo: completar
tolerancia_abs: 0.01

enunciado: "En un circuito en serie con tres resistencias de {r1} Ω, {r2} Ω y {r3} Ω, ¿cuál es el valor de la resistencia total (equivalente) del circuito?"

pasos:
  - "Identificar que en un circuito en serie, la resistencia total es la suma de las resistencias individuales."
  - "Sumar los valores: {r1} + {r2} + {r3}."

explicacion: |
  En una configuración en serie, la resistencia total es siempre la suma aritmética de todas las resistencias presentes en la rama.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "intensidad"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito en serie, la intensidad de corriente que circula por cada uno de los componentes es la misma."

explicacion: |
  Verdadero. Al haber un solo camino para el flujo de electrones, la carga debe pasar por todos los componentes en la misma cantidad, por lo que la corriente es constante en todo el circuito.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tension", "voltaje", "ley_de_kirchhoff"]

variables:
  v_total: 12
  r1: 5
  r2: 7

respuesta_orden: ["V2", "V1"]
tipo: ordenar

opciones_explicitas: ["V1", "V2"]

enunciado: "Si tenemos dos resistencias en serie con una tensión total de {v_total}V, donde la primera resistencia consume {r1}V y la segunda consume {r2}V, ordena los componentes según el orden en que se reparte la tensión total (de mayor a menor consumo)."

explicacion: |
  En un circuito en serie, la tensión total se reparte entre los componentes. La suma de las caídas de tensión en cada resistencia debe ser igual a la tensión de la fuente.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["resistencia", "paralelo_vs_serie"]

variables:
  r1: 10
  r2: 10

respuesta: "La resistencia total disminuye"
tipo: mc

opciones_explicitas: ["La resistencia total aumenta", "La resistencia total disminuye", "La resistencia total permanece igual"]

enunciado: "Si añadimos una segunda resistencia de {r1} Ω en serie a una resistencia ya existente de {r1} Ω, ¿qué sucede con la resistencia total del circuito?"

explicacion: |
  Al añadir componentes en serie, se incrementa la oposición total al paso de la corriente, por lo tanto, la resistencia total aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "avanzado"
  tags: ["corriente", "ley_de_ohm", "calculo"]

variables:
  v_fuente: 24
  r1: 4
  r2: 8

respuesta: 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito tiene una fuente de {v_fuente}V conectada a dos resistencias en serie de {r1} Ω y {r2} Ω. ¿Cuál es la intensidad de corriente que circula por el circuito?"

pasos:
  - "Calcular la resistencia total: R_total = {r1} + {r2}."
  - "Usar la Ley de Ohm: I = V / R_total."

explicacion: |
  Primero sumamos las resistencias: 4 + 8 = 12 Ω. Luego aplicamos la Ley de Ohm: I = 24V / 12Ω = 2A.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie"]

variables:
  datos: [[10, 20, 30], [5, 15, 25], [8, 12, 20]]
  idx: uno_de([0, 1, 2])
  r1: datos[idx][0]
  r2: datos[idx][1]
  r3: datos[idx][2]

respuestas_validas:
  - r1 + r2 + r3
respuesta: r1 + r2 + r3
tipo: completar
tolerancia_abs: 0.01

enunciado: "En un circuito en serie con tres resistencias de {r1} Ω, {r2} Ω y {r3} Ω, ¿cuál es el valor de la resistencia equivalente total?"

explicacion: |
  En un circuito en serie, la resistencia total es la suma aritmética de todas las resistencias individuales: R_total = R1 + R2 + ... + Rn.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "comparacion"]

opciones_explicitas: ["Es la misma en todos los puntos del circuito", "Se divide entre las distintas resistencias", "Es mayor en las resistencias más grandes"]

respuesta: "Es la misma en todos los puntos del circuito"
tipo: mc

enunciado: "Al comparar un circuito en serie con uno en paralelo, ¿cuál es la característica fundamental de la intensidad de corriente en un circuito en serie?"

explicacion: |
  A diferencia de los circuitos en paralelo donde la corriente se divide, en un circuito en serie la corriente es la misma en cualquier punto del circuito porque solo hay un camino para las cargas.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tension", "voltaje"]

variables:
  idx: uno_de([0, 1])
  datos: [["se reparte entre los componentes", "es la misma para todos los componentes"], ["se divide entre las distintas ramas", "es la misma en todas las ramas"]]

respuesta: datos[idx][0]
tipo: completar
enunciado: "En un circuito en serie con múltiples receptores, la tensión total de la fuente ___."

explicacion: |
  En un circuito en serie, la tensión total es la suma de las caídas de tensión en cada componente (la tensión se reparte). En un circuito en paralelo, la tensión es la misma en todos los componentes.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["corriente", "comparacion"]

opciones_explicitas: ["La corriente disminuye al aumentar la resistencia total", "La corriente aumenta al aumentar la resistencia total", "La corriente permanece constante sin importar la resistencia"]

respuesta: "La corriente disminuye al aumentar la resistencia total"
tipo: mc

enunciado: "Si añadimos una resistencia adicional en serie a un circuito ya existente, ¿qué sucede con la intensidad de corriente total (asumiendo voltaje constante)?"

explicacion: |
  Según la Ley de Ohm (I = V/R), si la resistencia total aumenta debido a la conexión en serie, la intensidad de corriente disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "avanzado"
  tags: ["resistencia", "comparacion"]

tipo: ordenar
opciones_explicitas: ["Resistencia en serie", "Resistencia en paralelo"]
respuesta_orden: ["Resistencia en serie", "Resistencia en paralelo"]

enunciado: "Ordena los conceptos de mayor a menor valor de resistencia equivalente, considerando que tenemos dos resistencias de 10 Ω y 20 Ω conectadas de forma distinta."

explicacion: |
  Para R1=10 y R2=20:
  En serie: R_eq = 10 + 20 = 30 Ω.
  En paralelo: R_eq = (10 * 20) / (10 + 20) = 200 / 30 = 6.66 Ω.
  Por lo tanto, la resistencia en serie es mayor que la resistencia en paralelo.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie"]

variables:
  datos: [[10.0, 5.0, 2.0], [20.0, 15.0, 10.0], [5.0, 3.0, 2.0]]
  idx: uno_de([0, 1, 2])
  r1: datos[idx][0]
  r2: datos[idx][1]
  r3: datos[idx][2]

respuestas_validas:
  - r1 + r2 + r3
respuesta: r1 + r2 + r3
tipo: completar
tolerancia_abs: 0.01

enunciado: "En un circuito en serie, se conectan tres resistencias con valores de {r1} Ω, {r2} Ω y {r3} Ω. ¿Cuál es la resistencia total del circuito?"

pasos:
  - "Identificar que en un circuito en serie la resistencia total es la suma de las resistencias individuales."
  - "Sumar los valores: {r1} + {r2} + {r3}."

explicacion: |
  La resistencia equivalente en un circuito en serie se calcula sumando todas las resistencias: R_total = R1 + R2 + R3.
  En este caso: {r1} + {r2} + {r3} = {r1 + r2 + r3} Ω.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "ley_de_ohm"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito en serie con múltiples resistencias, ¿la intensidad de corriente que circula por cada una de las resistencias es la misma?"

explicacion: |
  Verdadero. En un circuito en serie solo existe un camino para la carga eléctrica, por lo tanto, la corriente (I) es constante en todos los puntos del circuito.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tensión", "voltaje"]

variables:
  datos: [[12.0, 4.0, 8.0], [24.0, 12.0, 12.0], [9.0, 3.0, 6.0]]
  idx: uno_de([0, 1, 2])
  v_total: datos[idx][0]
  r1: datos[idx][1]
  r2: datos[idx][2]
  r_total: r1 + r2
  i: v_total / r_total
  v1: i * r1

respuesta: "4.0 V"
tipo: mc

opciones_explicitas: ["4.0 V", "8.0 V", "12.0 V", "24.0 V"]

enunciado: "Se tiene una fuente de tensión de {v_total} V conectada a dos resistencias en serie de {r1} Ω y {r2} Ω. ¿Cuál es la caída de tensión (voltaje) en la primera resistencia ({r1} Ω)?"

pasos:
  - "Calcular la resistencia total: R_total = {r1} + {r2} = {r_total} Ω."
  - "Calcular la corriente total usando Ley de Ohm: I = V_total / R_total = {v_total} / {r_total} A."
  - "Calcular la tensión en R1: V1 = I * R1."

explicacion: |
  Primero hallamos la resistencia total: {r_total} Ω. Luego la corriente: {i} A. Finalmente, el voltaje en R1 es: {v1} V.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular resistencia total", "Calcular corriente total", "Calcular voltajes parciales"]
respuesta_orden: ["Calcular resistencia total", "Calcular corriente total", "Calcular voltajes parciales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para hallar la tensión en una resistencia específica dentro de un circuito en serie con una fuente de voltaje conocida."

explicacion: |
  Para resolver circuitos en serie, el orden estándar es: 1. Sumar resistencias, 2. Hallar la corriente con la Ley de Ohm, 3. Usar la corriente para hallar voltajes individuales.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["completar", "resistencia"]

variables:
  escenario: [[100.0, 60.0], [50.0, 25.0], [30.0, 15.0]]
  idx: uno_de([0, 1, 2])
  r_total: escenario[idx][0]
  r1: escenario[idx][1]

respuestas_validas:
  - r_total - r1
respuesta: r_total - r1
tipo: completar

enunciado: "Si la resistencia total de un circuito en serie es de {r_total} Ω y una de las resistencias es de {r1} Ω, la otra resistencia debe ser de ___ Ω."

explicacion: |
  En serie: R_total = R1 + R2. Por lo tanto, R2 = R_total - R1.
  En este caso: {r_total} - {r1} = {r_total - r1}.
```

## Sección: potencia-electrica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "potencia"
tipo: "completar"
respuestas_validas:
  - "potencia"
  - "Potencia"

enunciado: "La rapidez con la que un dispositivo consume o transforma energía eléctrica en otro tipo de energía se denomina ___."

explicacion: |
  La potencia eléctrica mide la tasa de transferencia de energía por unidad de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades", "vatios"]

opciones_explicitas: ["Voltio (V)", "Amperio (A)", "Vatio (W)", "Ohmio (Ω)"]
respuesta: "Vatio (W)"
tipo: "mc"

enunciado: "En el Sistema Internacional de Unidades, la unidad de potencia eléctrica es el:"

explicacion: |
  El vatio (W) se define como el trabajo realizado por una fuerza de un Newton a lo largo de un metro en un segundo, o equivalentemente, la potencia de un dispositivo que consume 1 Joule por segundo.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["relacion_variables", "formula"]

variables:
  voltajes: [12, 220, 10]
  corrientes: [2, 5, 0.5]
  resultados: [24, 1100, 5]
  idx: uno_de([0, 1, 2])
  v: voltajes[idx]
  i: corrientes[idx]
  p: resultados[idx]

respuesta: p
tipo: "input"
tolerancia_abs: 0

enunciado: "Si un dispositivo tiene un voltaje de {v} V y una intensidad de {i} A, ¿cuál es su potencia eléctrica en vatios?"

pasos:
  - "Identificar el voltaje (V) y la intensidad (I)."
  - "Aplicar la fórmula P = V · I."

explicacion: |
  Usando la fórmula P = V · I:
  P = {v}V · {i}A = {p}W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["teoria", "verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que la potencia eléctrica es directamente proporcional a la resistencia cuando el voltaje se mantiene constante?"

explicacion: |
  Falso. Según la fórmula P = V²/R, si el voltaje (V) es constante, la potencia es inversamente proporcional a la resistencia (R). A mayor resistencia, menor potencia.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["formulas", "ley_ohm"]

opciones_explicitas: ["P = I · R", "P = V / R", "P = I² · R", "P = V² / R"]
respuesta: "P = I² · R"
tipo: "mc"

enunciado: "Combinando la Ley de Ohm (V = I · R) con la definición de potencia (P = V · I), obtenemos que la potencia también puede expresarse como:"

explicacion: |
  Sustituyendo V por (I · R) en la fórmula de potencia:
  P = (I · R) · I = I² · R.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["formula", "calculo"]

variables:
  datos: [[12, 2], [24, 3], [10, 5], [220, 2]]
  idx: uno_de([0,1,2,3])
  v: datos[idx][0]
  i: datos[idx][1]
  p: v * i

respuesta: p
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una fuente de alimentación entrega un voltaje de {v} V y una corriente de {i} A. ¿Cuál es la potencia eléctrica consumida por el dispositivo?"

pasos:
  - "Identificar los valores de voltaje (V) y corriente (I)."
  - "Aplicar la fórmula de la potencia eléctrica: P = V · I."
  - "Multiplicar el voltaje por la corriente: {v} * {i} = {p}."

explicacion: |
  La potencia eléctrica (P) se define como el producto del voltaje (V) por la intensidad de corriente (I). En este caso, la potencia es de {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "formula"]

variables:
  datos: [[10, 5], [20, 10], [5, 2], [15, 3]]
  idx: uno_de([0,1,2,3])
  i: datos[idx][0]
  r: datos[idx][1]
  p: i * i * r

respuesta: "P = I² · R"
tipo: mc
opciones_explicitas: ["P = V · I", "P = I² · R", "P = V / R", "P = I / R"]

enunciado: "Si conocemos la intensidad de corriente (I) que circula por un conductor y su resistencia (R), ¿cuál es la expresión correcta para calcular la potencia eléctrica (P) disipada?"

explicacion: |
  Cuando se conoce la corriente y la resistencia, la fórmula derivada de P = V · I (sustituyendo V = I · R) es P = I² · R.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "resistencia"]

variables:
  datos: [[100, 20], [200, 50], [12, 4], [220, 110]]
  idx: uno_de([0,1,2,3])
  v: datos[idx][0]
  r: datos[idx][1]
  p: (v * v) / r

respuesta: p
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω y se conecta a una fuente de {v} V. Calcula la potencia disipada en el componente."

pasos:
  - "Elevar el voltaje al cuadrado: {v}^2."
  - "Dividir el resultado por la resistencia: ({v}^2) / {r}."

explicacion: |
  Utilizando la variante de la fórmula que relaciona voltaje y resistencia: P = V² / R. El cálculo es ({v}^2) / {r} = {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "En el Sistema Internacional de Unidades, la unidad de potencia eléctrica es el Vatio (W), que equivale a un Julio por segundo (J/s)."
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["completar", "formula"]

respuestas_validas:
  - "V * I"
  - "V*I"
  - "V·I"
respuesta: "V * I"
tipo: completar

enunciado: "La fórmula fundamental para calcular la potencia eléctrica (P) en un circuito de corriente continua es P = ___."

explicacion: |
  La potencia eléctrica es el producto de la diferencia de potencial (Voltaje) por la intensidad de corriente.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["potencia", "voltaje", "corriente"]

respuesta: "aumenta"
tipo: completar
respuestas_validas:
  - "aumenta"

enunciado: "Si mantenemos la resistencia de un componente constante y aumentamos el voltaje aplicado, la potencia eléctrica consumida por dicho componente ___."

explicacion: |
  De la fórmula $P = V^2 / R$, se observa que la potencia es directamente proporcional al cuadrado del voltaje. Si el voltaje aumenta, la potencia aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "serie", "potencia"]

variables:
  escenario: uno_de([["R1", "R2", "R3", "R1+R2+R3"], ["10", "20", "30", "60"]])

respuesta: "R1+R2+R3"
tipo: mc
opciones_explicitas: ["R1", "R2", "R3", "R1+R2+R3"]

enunciado: "En un circuito en serie con tres resistencias, la resistencia equivalente que determina la potencia total entregada por la fuente es ___."

explicacion: |
  En un circuito en serie, la resistencia total es la suma de las resistencias individuales. La potencia total se calcula usando esta resistencia equivalente.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["booleano", "corriente", "potencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la resistencia de un conductor se mantiene constante y la corriente eléctrica se duplica, la potencia disipada en el conductor se cuadruplica."

explicacion: |
  Usando la fórmula $P = I^2 \cdot R$, si la corriente se multiplica por 2, la potencia se multiplica por $2^2 = 4$. Por lo tanto, es verdadero.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_ohm"]

variables:
  datos: uno_de([[12, 2], [220, 5], [12, 0.5]])

respuesta: datos[0] * datos[1]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un dispositivo eléctrico está conectado a una fuente de {datos[0]} V y por él circula una corriente de {datos[1]} A. ¿Cuál es su potencia eléctrica en Watts?"

pasos:
  - "Identificar el voltaje (V) y la corriente (I)."
  - "Aplicar la fórmula P = V * I."

explicacion: |
  La potencia se calcula multiplicando el voltaje por la intensidad: $P = V \cdot I$.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["procedimiento", "resistencia", "voltaje"]

opciones_explicitas: ["Calcular la corriente usando Ohm", "Multiplicar voltaje por corriente", "Calcular potencia final"]
respuesta_orden: ["Calcular la corriente usando Ohm", "Multiplicar voltaje por corriente", "Calcular potencia final"]
tipo: ordenar

enunciado: "Si conoces el voltaje (V) y la resistencia (R) de una bombilla, pero no la corriente (I), ¿cuál es el orden lógico para hallar la potencia usando P = V · I?"

explicacion: |
  Primero debes hallar la incógnita faltante ($I = V/R$) y luego aplicar la fórmula de potencia.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["conceptos_base", "potencia"]

respuesta: "potencia"
tipo: "mc"
opciones_explicitas: ["energía", "potencia", "voltaje", "corriente"]

enunciado: "Mientras que la energía eléctrica es la cantidad total de trabajo realizado por una carga en un tiempo determinado, la ___ es la rapidez con la que dicho trabajo se realiza."

explicacion: |
  La potencia (P) mide la tasa de transferencia de energía por unidad de tiempo (P = dE/dt).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["ley_de_joule", "resistencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[2, 5, "mayor"], [4, 2, "menor"]]

respuesta: datos[escenario_idx][2]
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Si mantenemos el voltaje constante en un circuito, un componente con una resistencia de {datos[escenario_idx][0]} $\\Omega$ disipará una potencia ___ que uno con una resistencia de {datos[escenario_idx][1]} $\\Omega$."

explicacion: |
  Usando la fórmula $P = V^2 / R$, la potencia es inversamente proporcional a la resistencia cuando el voltaje es constante.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "avanzado"
  tags: ["ley_de_joule", "corriente"]

variables:
  corriente_inicial: 2.0
  corriente_final: 4.0
  resistencia: 10.0

respuesta: verdadero
tipo: vf

enunciado: "Si la corriente que atraviesa una resistencia de {resistencia} ohmios se duplica de {corriente_inicial} A a {corriente_final} A, la potencia disipada se cuadruplica."

explicacion: |
  Según la fórmula P = I^2 * R, la potencia depende del cuadrado de la intensidad. Si la corriente se multiplica por 2, la potencia se multiplica por 2^2 = 4.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

tipo: ordenar
opciones_explicitas: ["vatio", "voltio", "amperio", "ohmio"]
respuesta_orden: ["vatio", "voltio", "amperio", "ohmio"]

enunciado: "Ordena las siguientes magnitudes de mayor a menor según su símbolo en el Sistema Internacional (W, V, A, Ω):"

explicacion: |
  El orden solicitado es: W (vatio), V (voltio), A (amperio) y Ω (ohmio).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_joule"]

variables:
  escenario_idx: uno_de([0, 1])
  valores: [[12, 2], [24, 3]]

respuesta: valores[escenario_idx][0] * valores[escenario_idx][0] * valores[escenario_idx][1]
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un dispositivo eléctrico tiene una resistencia de {valores[escenario_idx][1]} $\\Omega$ y es atravesado por una corriente de {valores[escenario_idx][0]} A. ¿Cuál es su potencia eléctrica en Watts?"

pasos:
  - "Identificar la corriente (I) y la resistencia (R)."
  - "Aplicar la fórmula $P = I^2 \\cdot R$."
  - "Calcular el resultado final."

explicacion: |
  Aplicando $P = I^2 \cdot R$:
  P = {valores[escenario_idx][0]}² · {valores[escenario_idx][1]} = {valores[escenario_idx][0] * valores[escenario_idx][0] * valores[escenario_idx][1]} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["potencia", "voltaje", "corriente"]

variables:
  escenario: uno_de([[12, 2, 24], [220, 5, 1100], [12, 10, 120]])
  v: escenario[0]
  i: escenario[1]
  p: escenario[2]

respuesta: p
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una bombilla se conecta a una fuente de tensión de {v} V y por ella circula una corriente de {i} A. ¿Cuál es la potencia eléctrica consumida por la bombilla?"

pasos:
  - "Identificar el voltaje (V) y la corriente (I)."
  - "Aplicar la fórmula de potencia: P = V * I."

explicacion: |
  La potencia eléctrica se calcula multiplicando la diferencia de potencial por la intensidad de corriente: P = V * I.
  En este caso: {v} V * {i} A = {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "potencia", "ley_de_joule"]

variables:
  escenario: uno_de([[10, 5], [20, 4], [5, 10]])
  r: escenario[0]
  i: escenario[1]
  p: escenario[1] * escenario[1] * escenario[0]

respuesta: p
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω. Si circula una corriente de {i} A a través de él, ¿cuánta potencia se disipa en forma de calor?"

pasos:
  - "Utilizar la variante de la fórmula de potencia: P = I² * R."
  - "Elevar la corriente al cuadrado: {i} * {i}."
  - "Multiplicar por la resistencia: {i} * {i} * {r}."

explicacion: |
  Para calcular la potencia disipada por una resistencia conociendo la corriente, usamos P = I² * R.
  Cálculo: ({i} A)² * {r} Ω = {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["comparacion", "potencia"]

variables:
  escenario: uno_de([[50, 1000], [500, 50], [10, 2000]])
  p: escenario[0]
  limite: escenario[1]

respuesta: p > limite
tipo: vf
enunciado: "Un dispositivo consume una potencia de {p} W. Si el límite de seguridad de la instalación es de {limite} W, ¿se ha superado el límite de seguridad?"

explicacion: |
  Comparamos la potencia consumida ({p} W) con el límite establecido ({limite} W). 
  Si {p} > {limite}, la respuesta es verdadero.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "resistencia", "corriente"]

variables:
  escenario: uno_de([[120, 10], [230, 100], [12, 10]])
  v: escenario[0]
  r: escenario[1]
  i: escenario[0] / escenario[1]

respuesta: i
tipo: mc

opciones_explicitas: [12.0, 2.3, 1.2, 0.5]

enunciado: "Un calefactor tiene una resistencia interna de {r} Ω y se conecta a una toma de corriente de {v} V. ¿Qué intensidad de corriente circulará por el circuito (en amperios)?"

explicacion: |
  Usamos la relación derivada de la ley de Ohm y la potencia: P = V²/R, pero para hallar la corriente usamos I = V / R.
  Cálculo: {v} V / {r} Ω = {i} A.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

opciones_explicitas: ["Medir voltaje y corriente", "Multiplicar V por I", "Calcular el resultado en Watts"]

respuesta_orden: ["Medir voltaje y corriente", "Multiplicar V por I", "Calcular el resultado en Watts"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar la potencia eléctrica de un electrodoméstico desconocido usando un multímetro en serie y paralelo."

explicacion: |
  Para hallar la potencia P = V * I, primero debemos obtener los valores de la tensión (V) y la intensidad (I) mediante mediciones, luego realizar la multiplicación matemática y finalmente expresar el resultado en la unidad de potencia (W).
```

## Sección: circuitos-mixtos (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["resistencia", "equivalente", "conceptos"]

respuesta: "resistencia equivalente"
tipo: completar
respuestas_validas:
  - "resistencia equivalente"

enunciado: "En un circuito complejo que combina tramos en serie y en paralelo, la única resistencia que permite simplificar todo el sistema a un solo componente es la ___."

explicacion: |
  La resistencia equivalente es el valor de una resistencia única que puede sustituir a todo el conjunto de resistencias de un circuito, manteniendo la misma corriente y voltaje.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["serie", "corriente", "voltaje"]

respuesta: verdadero
tipo: vf

enunciado: "En un tramo de un circuito que está conectado en serie, la corriente eléctrica que circula por cada una de las resistencias es la misma."

explicacion: |
  Verdadero. En una conexión en serie, al haber un único camino para la carga, la intensidad de corriente (I) es constante en todos los puntos del tramo.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["paralelo", "nodos", "voltaje"]

respuesta: "voltaje"
tipo: mc
opciones_explicitas: ["voltaje", "corriente", "resistencia", "potencia"]

enunciado: "En un tramo de un circuito conectado en paralelo, la propiedad que se mantiene constante en cada rama es el ___."

explicacion: |
  En una conexión en paralelo, todos los terminales de las resistencias están conectados a los mismos dos puntos (nodos), por lo que el voltaje es el mismo para todas.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["metodologia", "resolucion"]

respuesta_orden: ["identificar", "simplificar", "calcular"]
tipo: ordenar
opciones_explicitas: ["identificar", "simplificar", "calcular"]

enunciado: "Ordena los pasos lógicos para resolver un circuito mixto complejo:"

pasos:
  - "Identificar qué partes están en serie y cuáles en paralelo."
  - "Simplificar los tramos mediante el cálculo de resistencias equivalentes parciales."
  - "Calcular la resistencia total y las variables finales (I, V, R)."

explicacion: |
  Para resolver circuitos mixtos, primero se debe analizar la topología para separar tramos, luego reducir cada tramo a una resistencia equivalente y finalmente resolver el circuito simplificado.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["serie", "calculo"]

variables:
  idx: uno_de([0, 1])
  escenarios: [[10, 5, 15], [20, 30, 50]]

respuesta: escenarios[idx][2]
tipo: completar
tolerancia_abs: 0

enunciado: "Si tenemos un tramo de un circuito mixto con dos resistencias en serie de {escenarios[idx][0]} Ω y {escenarios[idx][1]} Ω, ¿cuál es su resistencia equivalente?"

pasos:
  - "Identificar que las resistencias están en serie."
  - "Sumar los valores de las resistencias: Req = R1 + R2."

explicacion: |
  En una conexión en serie, la resistencia total es la suma aritmética de las resistencias individuales.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["resistencia", "paralelo"]

variables:
  R1: 10
  R2: 40

respuesta: 8.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Dos resistencias, una de {R1} Ω y otra de {R2} Ω, se encuentran conectadas en paralelo. ¿Cuál es el valor de la resistencia equivalente (Req)?"

pasos:
  - "Calcular la resistencia equivalente usando la fórmula: 1/Req = 1/R1 + 1/R2"
  - "O la fórmula directa para dos resistencias: Req = (R1 · R2) / (R1 + R2)"
  - "Req = (10 · 40) / (10 + 40) = 400 / 50 = 8"

explicacion: |
  En una conexión en paralelo, la resistencia equivalente siempre es menor que la menor de las resistencias individuales. En este caso, 8 < 10.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["conceptos", "serie_paralelo"]

respuesta: "serie"
tipo: mc
opciones_explicitas: ["serie", "paralelo", "mixto"]

enunciado: "Si dos resistencias están conectadas una tras otra, de modo que la corriente que pasa por la primera debe pasar obligatoriamente por la segunda, estamos ante una conexión en ___."

explicacion: |
  En una conexión en serie, no hay caminos alternativos para la corriente; todos los componentes comparten la misma intensidad de corriente.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["calculo", "mixto"]

variables:
  idx: uno_de([0, 1])
  R_s: [6, 5]
  R_p: [4, 10]
  R_eq: [8, 10]

respuesta: R_eq[idx]
tipo: completar
tolerancia_abs: 0.1

enunciado: "En un circuito mixto, una resistencia de {R_s[idx]} Ω está en serie con un bloque en paralelo compuesto por dos resistencias de {R_p[idx]} Ω y {R_p[idx]} Ω. ¿Cuál es la resistencia equivalente total?"

pasos:
  - "Primero calculamos la resistencia del bloque en paralelo: Rp_eq = (Rp · Rp) / (Rp + Rp)"
  - "Luego sumamos la resistencia en serie: Req = Rs + Rp_eq"

explicacion: |
  Para resolver circuitos mixtos, primero se simplifican las partes en paralelo para convertirlas en una resistencia equivalente, y luego se suma con las resistencias que están en serie.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["leyes", "teoria"]

respuesta: falso
tipo: vf

enunciado: "En un circuito mixto, la corriente total que sale de la fuente es igual a la suma de las corrientes que pasan por cada una de las ramas en paralelo."

explicacion: |
  Falso. La corriente total es la suma de las corrientes de las ramas en paralelo, pero esto solo se cumple si la fuente está en serie con el bloque paralelo. La afirmación es una generalización incorrecta de la Ley de Corrientes de Kirchhoff aplicada a cualquier punto del circuito.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["metodologia", "ordenar"]

opciones_explicitas: ["Identificar ramas en paralelo", "Simplificar ramas en paralelo", "Sumar resistencias en serie", "Calcular resistencia equivalente total"]
respuesta_orden: ["Identificar ramas en paralelo", "Simplificar ramas en paralelo", "Sumar resistencias en serie", "Calcular resistencia equivalente total"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver la resistencia equivalente de un circuito mixto complejo:"

explicacion: |
  El orden correcto implica simplificar de lo más interno (paralelos) hacia lo más externo (series) para reducir el circuito a una sola resistencia equivalente.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["resistencia", "paralelo", "error_comun"]

variables:
  r1: 10
  r2: 10

respuesta: 5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un error común es pensar que la resistencia equivalente de dos resistencias en paralelo es la suma de sus valores. Si tenemos dos resistencias de {r1} $\\Omega$ y {r2} $\\Omega$ conectadas en paralelo, la resistencia equivalente es de ___ $\\Omega$."

pasos:
  - "Identificar que las resistencias están en paralelo."
  - "Aplicar la fórmula: 1 / Req = 1 / r1 + 1 / r2"
  - "Calcular: Req = (r1 * r2) / (r1 + r2)"

explicacion: |
  En un circuito en paralelo, la resistencia equivalente siempre es MENOR que la resistencia más pequeña del conjunto. En este caso, (10 * 10) / (10 + 10) = 100 / 20 = 5 $\Omega$.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["voltaje", "serie", "concepto"]

respuesta: falso
tipo: vf

enunciado: "En un tramo de un circuito mixto donde dos resistencias están conectadas en serie, la diferencia de potencial (voltaje) es la misma para ambas resistencias."

explicacion: |
  Falso. En una conexión en serie, la corriente es la misma, pero el voltaje total se reparte entre las resistencias (según la Ley de Ohm, V = I * R). El voltaje es igual solo si las resistencias son idénticas, pero la afirmación general es falsa.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["corriente", "paralelo", "concepto"]

respuesta: "se divide"
tipo: completar
respuestas_validas:
  - "se divide"
  - "se mantiene"
  - "aumenta"

enunciado: "En un circuito mixto, cuando la corriente llega a un nodo donde el camino se divide en dos ramas en paralelo, la corriente total ___ en las ramas."

explicacion: |
  En un circuito en paralelo, la corriente total se divide entre las ramas disponibles. La suma de las corrientes de cada rama es igual a la corriente que entra al nodo.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "avanzado"
  tags: ["resolucion", "pasos", "metodo"]

variables:
  casos: [[10, 5, 2, "serie-paralelo"], [20, 20, 10, "paralelo-serie"], [15, 30, 5, "serie-paralelo"]]
  idx: uno_de([0, 1, 2])
  r_serie: casos[idx][0]
  r_paralelo: casos[idx][1]
  r_extra: casos[idx][2]
  r_correcto: verdadero

respuesta: r_correcto
tipo: vf

enunciado: "Para resolver un circuito mixto complejo, se debe seguir un orden lógico de simplificación. Dado un circuito donde una resistencia {r_serie} está en serie con un bloque paralelo compuesto por {r_paralelo} y {r_extra}, ¿es correcto resolver primero el bloque paralelo y luego sumar la resistencia en serie?"

explicacion: |
  Primero se debe resolver la parte más interna o el bloque más simple (en este caso el paralelo) y luego sumar la resistencia que está en serie con ese bloque.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["resistencia", "serie", "error_comun"]

variables:
  r_a: 5
  r_b: 15

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene", "es cero"]

enunciado: "Al añadir una resistencia adicional en serie a un tramo de un circuito mixto, la resistencia equivalente de ese tramo ___."

explicacion: |
  En una conexión en serie, las resistencias se suman (Req = R1 + R2 + ...). Por lo tanto, añadir más resistencias en serie siempre aumenta la resistencia total del tramo.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["resistencia", "corriente", "voltaje"]

tipo: mc
opciones_explicitas: ["La corriente es la misma en todos los componentes", "El voltaje es el mismo en todos los componentes", "La resistencia total disminuye al añadir componentes", "La corriente se divide entre las ramas"]

enunciado: "En un circuito en serie, a diferencia de un circuito en paralelo, la característica principal que se mantiene constante en todos los componentes es la ___."

respuesta: "La corriente es la misma en todos los componentes"

explicacion: |
  En un circuito en serie, solo existe un camino para la corriente, por lo que la intensidad es igual en todos los puntos. En paralelo, lo que se mantiene constante es el voltaje.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["resistencia_equivalente", "paralelo"]

tipo: vf
enunciado: "En un circuito mixto que contiene una sección en paralelo, la resistencia equivalente de esa sección siempre será menor que la resistencia de cada uno de los componentes individuales en dicha sección."

respuesta: verdadero

explicacion: |
  Verdadero. En una configuración en paralelo, la resistencia equivalente siempre es menor que la menor de las resistencias individuales, ya que se ofrecen más caminos para el flujo de carga.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["calculo", "resistencia"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 20], [30, 60]]
  resultados_texto: ["20", "60"]

tipo: completar
respuesta: resultados_texto[idx]

enunciado: "Si tenemos un circuito compuesto por una resistencia de {datos[idx][0]} Ω en serie con un bloque en paralelo formado por dos resistencias de {datos[idx][1]} Ω cada una, la resistencia equivalente total es de ___ Ω."

pasos:
  - "Calcular la resistencia equivalente de la sección en paralelo: Rp = (R2 * R3) / (R2 + R3)"
  - "Sumar la resistencia en serie a la resistencia equivalente obtenida: Rtotal = R1 + Rp"

explicacion: |
  Para este caso: Rp = {datos[idx][1]}*{datos[idx][1]} / ({datos[idx][1]}+{datos[idx][1]}). Total = {resultados_texto[idx]} Ω.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["calculo", "resistencia"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 20], [30, 60]]

tipo: completar
respuestas_validas:
  - 20
  - 60

enunciado: "Si tenemos un circuito compuesto por una resistencia de {datos[idx][0]} Ω en serie con un bloque en paralelo formado por dos resistencias de {datos[idx][1]} Ω cada una, la resistencia equivalente total es de ___ Ω."

pasos:
  - "Calcular la resistencia equivalente de la sección en paralelo: Rp = (R2 * R3) / (R2 + R3)"
  - "Sumar la resistencia en serie a la resistencia equivalente obtenida: Rtotal = R1 + Rp"

respuesta: datos[idx][0] + (datos[idx][1] / 2)

explicacion: |
  La resistencia en paralelo de dos iguales es la mitad de una. Luego se suma la serie.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["metodologia", "resolucion"]

tipo: ordenar
opciones_explicitas: ["Identificar tramos en paralelo", "Calcular resistencias equivalentes de cada tramo", "Sumar las resistencias en serie para el total"]

enunciado: "Para resolver un circuito mixto, ¿cuál es el orden lógico de simplificación?"

respuesta_orden: ["Identificar tramos en paralelo", "Calcular resistencias equivalentes de cada tramo", "Sumar las resistencias en serie para el total"]

explicacion: |
  Primero se deben simplificar las partes más complejas (paralelos) para convertir el circuito en una cadena de componentes en serie, facilitando el cálculo final.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "avanzado"
  tags: ["corriente", "ley_de_kirchhoff"]

tipo: mc
opciones_explicitas: ["La corriente se divide en las ramas en paralelo", "La corriente es la misma en todas las ramas", "La corriente aumenta en las ramas en paralelo", "La corriente es cero en las ramas en paralelo"]

enunciado: "Al pasar de un tramo en serie a un tramo en paralelo dentro de un circuito mixto, la corriente total del circuito ___."

respuesta: "La corriente se divide en las ramas en paralelo"

explicacion: |
  En un tramo en paralelo, la corriente total se bifurca, repartiéndose entre las distintas ramas según la resistencia de cada una (Ley de Corrientes de Kirchhoff).
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["resistencia", "serie", "paralelo"]

variables:
  escenario: uno_de([[10, 5, 2], [20, 10, 4], [5, 5, 5]])
  R1: escenario[0]
  R2: escenario[1]
  R3: escenario[2]

enunciado: "En una linterna, la resistencia R1 está en serie con un bloque en paralelo formado por R2 y R3. ¿Cuál es la resistencia equivalente total del circuito?"

pasos:
  - "Primero, calcula la resistencia equivalente del tramo en paralelo: Rp = 1 / (1/R2 + 1/R3)"
  - "Luego, suma la resistencia R1 al resultado anterior: Req = R1 + Rp"

respuesta: R1 + 1 / (1 / R2 + 1 / R3)
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La resistencia equivalente de un tramo en paralelo se calcula como Rp = (R2 * R3) / (R2 + R3). 
  Al estar en serie con R1, la fórmula final es Req = R1 + Rp.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_ohm"]

variables:
  datos: [[12, 2, 4, 4], [24, 3, 6, 6], [6, 2, 2, 2]]
  V: datos[0][0]
  R1: datos[0][1]
  R2: datos[0][2]
  R3: datos[0][3]

enunciado: "Si aplicamos un voltaje de {V}V a un circuito donde R1 está en serie con el paralelo de R2 y R3, y sabiendo que R2 = {R2}Ω y R3 = {R3}Ω, ¿la corriente total que sale de la fuente será mayor que si R2 y R3 estuvieran en serie?"

respuesta: verdadero
tipo: vf
explicacion: |
  Al poner R2 y R3 en paralelo, la resistencia equivalente del bloque disminuye en comparación con ponerlas en serie. 
  Al disminuir la resistencia total, la corriente total (I = V/Req) aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["conceptos", "serie_paralelo"]

enunciado: "En un circuito mixto, si dos resistencias están conectadas de tal forma que la corriente que pasa por una es la misma que pasa por la otra, decimos que están en ___."

respuestas_validas:
  - "serie"
  - "paralelo"
respuesta: "serie"
tipo: completar

explicacion: |
  En una conexión en serie, no hay bifurcaciones, por lo que la intensidad de corriente es constante en todos los puntos del tramo.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "avanzado"
  tags: ["voltaje", "ley_de_kirchhoff"]

variables:
  config: [[10, 2, 4, 3], [20, 5, 5, 5], [12, 4, 2, 2]]
  V_total: config[0][0]
  R1: config[0][1]
  R2: config[0][2]
  R3: config[0][3]
  R_par: 1 / (1 / R2 + 1 / R3)

enunciado: "En un circuito con una fuente de {V_total}V, una resistencia R1 está en serie con un paralelo de R2 y R3. ¿Cuál es el voltaje que cae exclusivamente en el bloque paralelo (R2 y R3)?"

pasos:
  - "Calcula la resistencia equivalente total: Req = R1 + Rp"
  - "Calcula la corriente total: I_total = V_total / Req"
  - "Calcula el voltaje en el paralelo: Vp = I_total * Rp"

respuesta: (V_total / (R1 + 1 / (1 / R2 + 1 / R3))) * (1 / (1 / R2 + 1 / R3))
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El voltaje en el bloque paralelo es igual a la corriente total multiplicada por la resistencia equivalente de ese bloque.
```

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Para resolver un circuito mixto complejo, ¿cuál es el orden lógico de simplificación de los componentes?"

opciones_explicitas: ["Identificar tramos en paralelo", "Simplificar tramos en paralelo a una resistencia equivalente", "Sumar resistencias en serie", "Calcular resistencia total"]
respuesta_orden: ["Identificar tramos en paralelo", "Simplificar tramos en paralelo a una resistencia equivalente", "Sumar resistencias en serie", "Calcular resistencia total"]
tipo: ordenar

explicacion: |
  El método estándar consiste en reducir el circuito por partes, empezando por los nodos más internos (paralelos) para convertir el circuito en uno de serie simple.
```

