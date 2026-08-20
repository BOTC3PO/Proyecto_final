# Examen jefe — Maestro de los Complejos y Logaritmos

> Logro #64. Dominaste las fracciones, los números complejos en forma polar y las funciones exponenciales y logarítmicas para resolver el parcial. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **138 preguntas totales** en 5/5 secciones.

---

## Sección: esperanza-matematica-valor-esperado (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["esperanza", "vocabulario"]

enunciado: "¿Qué es el valor esperado E(X) de una variable aleatoria?"
tipo: mc
opciones_explicitas:
  - "Un promedio ponderado de los valores posibles, donde cada valor se pondera por su propia probabilidad de ocurrir"
  - "El valor más probable entre todos los posibles"
  - "El promedio simple de los valores posibles, sin considerar sus probabilidades"
respuesta: "Un promedio ponderado de los valores posibles, donde cada valor se pondera por su propia probabilidad de ocurrir"

explicacion: |
  A diferencia de la media simple, cada valor pesa según qué tan
  probable es.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "completar"]

tipo: completar
enunciado: "Completá: E(X) = x₁×P(x₁) + x₂×P(x₂) + ... + xₙ×___."
respuestas_validas:
  - "P(xₙ)"
  - "P(xn)"

explicacion: |
  Cada valor posible se multiplica por su propia probabilidad, y se
  suman todos los términos.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  v1: random(1, 3)
  v2: random(4, 6)
  v3: random(7, 9)

respuesta: redondear(0.3 * v1 + 0.5 * v2 + 0.2 * v3, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "X tiene distribución: P(X={v1})=0,3, P(X={v2})=0,5, P(X={v3})=0,2. ¿Cuánto vale E(X)?"

pasos:
  - "E(X) = {v1}×0,3 + {v2}×0,5 + {v3}×0,2"
  - "= {redondear(v1 * 0.3, 2)} + {redondear(v2 * 0.5, 2)} + {redondear(v3 * 0.2, 2)} = {redondear(0.3 * v1 + 0.5 * v2 + 0.2 * v3, 2)}"

explicacion: |
  Se multiplica cada valor por su probabilidad y se suman los
  resultados.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado E(X) no tiene por qué coincidir con ninguno de los valores que X puede tomar realmente — es un promedio a largo plazo, no un resultado posible puntual."

explicacion: |
  Por ejemplo, E(X)=4,7 aunque X sólo pueda valer 2, 5 u 8.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  costo: uno_de([50, 100])
  premio: uno_de([300, 500])
  p_ganar: uno_de([0.1, 0.15])

respuesta: redondear(premio * p_ganar - costo, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un juego cuesta ${costo} jugar y paga ${premio} con probabilidad {p_ganar} (y $0 el resto de las veces). ¿Cuál es el valor esperado de la GANANCIA neta de jugar (premio esperado menos el costo)?"

pasos:
  - "Premio esperado = {premio} × {p_ganar} = {redondear(premio * p_ganar, 2)}"
  - "Ganancia esperada = {redondear(premio * p_ganar, 2)} − {costo} = {redondear(premio * p_ganar - costo, 2)}"

explicacion: |
  Si el resultado es negativo, el juego es desfavorable en promedio
  para quien juega, aunque en una partida puntual se pueda ganar.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "aplicacion"]

enunciado: "Si el valor esperado de la ganancia de un juego de azar da negativo, ¿qué significa?"
tipo: mc
opciones_explicitas:
  - "Que, en promedio y a largo plazo, quien juega repetidamente pierde dinero — aunque una partida individual pueda ganar"
  - "Que es matemáticamente imposible ganar en ese juego"
  - "Que el juego siempre hace perder en cada partida, sin excepción"
respuesta: "Que, en promedio y a largo plazo, quien juega repetidamente pierde dinero — aunque una partida individual pueda ganar"

explicacion: |
  Es la lógica detrás de cualquier casino: el valor esperado del
  jugador es negativo, aunque partidas puntuales puedan ganar.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  premio_a: 1000
  p_a: 0.05
  premio_b: 200
  p_b: 0.3

respuesta: (premio_a * p_a) > (premio_b * p_b)
tipo: vf

enunciado: "Apuesta A paga ${premio_a} con probabilidad {p_a}. Apuesta B paga ${premio_b} con probabilidad {p_b}. Sin considerar el costo de entrada, ¿el valor esperado del premio de la Apuesta A es MAYOR que el de la Apuesta B?"

explicacion: |
  E(A) = {premio_a}×{p_a} = {premio_a * p_a}; E(B) = {premio_b}×{p_b}
  = {premio_b * p_b} — comparar el producto, no el premio ni la
  probabilidad por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "binomial"]

enunciado: "¿Qué relación tiene la fórmula E(X)=n×p de la distribución binomial con el valor esperado en general?"
tipo: mc
opciones_explicitas:
  - "Es el mismo promedio ponderado general, aplicado al caso particular de una variable que sólo puede tomar valores enteros de 0 a n"
  - "No tiene ninguna relación, son fórmulas completamente distintas"
  - "E(X)=n×p sólo aplica quando la variable es continua"
respuesta: "Es el mismo promedio ponderado general, aplicado al caso particular de una variable que sólo puede tomar valores enteros de 0 a n"

explicacion: |
  `../distribucion-binomial/` adelantó este resultado sin
  demostrarlo — es un caso particular de esta fórmula más general.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "problema"]

variables:
  valor1: uno_de([10, 20])
  p1: uno_de([0.4, 0.6])
  valor2: uno_de([50, 80])

respuesta: redondear(valor1 * p1 + valor2 * (1 - p1), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "X toma el valor {valor1} con probabilidad {p1}, y el valor {valor2} con la probabilidad restante. ¿Cuánto vale E(X)?"

pasos:
  - "P({valor2}) = 1 − {p1} = {redondear(1 - p1, 2)}"
  - "E(X) = {valor1}×{p1} + {valor2}×{redondear(1 - p1, 2)} = {redondear(valor1 * p1 + valor2 * (1 - p1), 2)}"

explicacion: |
  Con sólo dos valores posibles, sus probabilidades deben sumar 1.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["esperanza", "aplicacion"]

enunciado: "¿Cómo usa una aseguradora el valor esperado para decidir cuánto cobrar por una póliza?"
tipo: mc
opciones_explicitas:
  - "Calcula el valor esperado del siniestro (costo posible × probabilidad de que ocurra) y cobra por encima de ese valor, para tener ganancia en promedio"
  - "Cobra siempre el mismo monto fijo, sin ningún cálculo de probabilidad"
  - "El valor esperado no tiene ninguna aplicación en seguros"
respuesta: "Calcula el valor esperado del siniestro (costo posible × probabilidad de que ocurra) y cobra por encima de ese valor, para tener ganancia en promedio"

explicacion: |
  Es la misma lógica de `../../economia/valor-esperado-riesgo/`,
  aplicada a seguros en particular.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  ganancia: uno_de([200, 300])
  p_ganancia: 0.4
  perdida: uno_de([100, 150])
  p_perdida: 0.5

respuesta: redondear(ganancia * p_ganancia - perdida * p_perdida, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una inversión da una ganancia de ${ganancia} con probabilidad {p_ganancia}, una pérdida de ${perdida} con probabilidad {p_perdida}, y queda igual el resto de las veces (probabilidad {redondear(1 - p_ganancia - p_perdida, 2)}, resultado $0). ¿Cuál es el valor esperado del resultado?"

pasos:
  - "E(X) = {ganancia}×{p_ganancia} + (−{perdida})×{p_perdida} + 0×{redondear(1 - p_ganancia - p_perdida, 2)}"
  - "= {redondear(ganancia * p_ganancia, 2)} − {redondear(perdida * p_perdida, 2)} = {redondear(ganancia * p_ganancia - perdida * p_perdida, 2)}"

explicacion: |
  Los valores negativos (pérdidas) se ponderan igual que los
  positivos: por su propia probabilidad.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la media simple de `../media-mediana-y-moda/` (que pesa todos los datos por igual), el valor esperado pesa cada resultado posible según su propia probabilidad de ocurrir."

explicacion: |
  Es la diferencia central entre 'promedio de datos ya medidos' y
  'promedio ponderado de resultados posibles antes de que ocurran'.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  costo_siniestro: 10000
  p_siniestro: uno_de([0.02, 0.05])

respuesta: redondear(costo_siniestro * p_siniestro, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un siniestro cuesta en promedio ${costo_siniestro}, y ocurre con probabilidad {p_siniestro} en un año. ¿Cuál es el valor esperado del costo anual del siniestro (lo mínimo que debería cobrar la aseguradora, sin ganancia)?"

pasos:
  - "E(costo) = {costo_siniestro} × {p_siniestro} = {redondear(costo_siniestro * p_siniestro, 2)}"

explicacion: |
  Cualquier prima por debajo de este valor haría perder dinero a la
  aseguradora, en promedio, a largo plazo.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular el valor esperado de una variable aleatoria con muchos valores posibles, hay que sumar TODOS los términos (cada valor por su probabilidad), no sólo el valor más probable."

explicacion: |
  Ignorar los demás valores posibles subestima o distorsiona el
  promedio real.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "problema"]

respuesta: redondear((1 + 2 + 3 + 4 + 5 + 6) / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un dado de 6 caras tiene la misma probabilidad (1/6) para cada resultado del 1 al 6. ¿Cuál es el valor esperado del resultado de un tiro?"

pasos:
  - "E(X) = 1×1/6 + 2×1/6 + 3×1/6 + 4×1/6 + 5×1/6 + 6×1/6"
  - "= (1+2+3+4+5+6)/6 = {redondear((1 + 2 + 3 + 4 + 5 + 6) / 6, 3)}"

explicacion: |
  Cuando todos los resultados tienen la misma probabilidad, el valor
  esperado coincide con el promedio simple.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["esperanza", "aplicacion"]

enunciado: "¿Cómo ayuda el valor esperado a decidir entre dos inversiones de riesgo distintas?"
tipo: mc
opciones_explicitas:
  - "Comparando el promedio ponderado del retorno posible de cada una, aunque también haga falta mirar la dispersión (riesgo) alrededor de ese promedio"
  - "El valor esperado garantiza el resultado exacto de la inversión, sin ningún riesgo"
  - "El valor esperado no sirve para decisiones financieras"
respuesta: "Comparando el promedio ponderado del retorno posible de cada una, aunque también haga falta mirar la dispersión (riesgo) alrededor de ese promedio"

explicacion: |
  Es exactamente el enfoque de `../../economia/valor-esperado-riesgo/`:
  valor esperado Y dispersión, no sólo uno de los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  v1: 100
  p1: 0.7
  v2: 500
  p2: 0.25
  v3: 2000
  p3: 0.05

respuesta: redondear(v1 * p1 + v2 * p2 + v3 * p3, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un premio de lotería da ${v1} con probabilidad {p1}, ${v2} con probabilidad {p2}, y ${v3} con probabilidad {p3}. ¿Cuál es el valor esperado del premio?"

pasos:
  - "E(X) = {v1}×{p1} + {v2}×{p2} + {v3}×{p3}"
  - "= {redondear(v1 * p1, 2)} + {redondear(v2 * p2, 2)} + {redondear(v3 * p3, 2)} = {redondear(v1 * p1 + v2 * p2 + v3 * p3, 2)}"

explicacion: |
  Aunque el premio grande (${v3}) sea llamativo, su probabilidad
  chica ({p3}) hace que aporte relativamente poco al valor esperado
  total.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado describe el promedio a largo plazo de MUCHAS repeticiones, no predice el resultado de una única repetición puntual del experimento."

explicacion: |
  Por eso un juego con valor esperado negativo puede, en una partida
  puntual, dar ganancia igual.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  costo: 20
  p_ganar: 0.2

respuesta: costo / p_ganar
tipo: input

enunciado: "Un juego cuesta ${costo} jugar y sólo paga premio (y nada más) con probabilidad {p_ganar}. ¿Cuánto debería ser el premio para que el juego sea 'justo' (valor esperado de la ganancia neta = 0)?"

pasos:
  - "premio × {p_ganar} − {costo} = 0"
  - "premio = {costo} / {p_ganar} = {costo / p_ganar}"

explicacion: |
  Un juego 'justo' es aquel donde, en promedio, ni la casa ni el
  jugador ganan ni pierden dinero.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el valor esperado?"
tipo: mc
opciones_explicitas:
  - "Para tomar decisiones racionales bajo incertidumbre, resumiendo en un solo número el resultado promedio esperado de una situación azarosa"
  - "Para predecir con certeza el resultado de un único evento futuro"
  - "Sólo se usa en juegos de casino, sin otras aplicaciones"
respuesta: "Para tomar decisiones racionales bajo incertidumbre, resumiendo en un solo número el resultado promedio esperado de una situación azarosa"

explicacion: |
  Es la base de seguros, inversiones y cualquier decisión que
  involucre azar y consecuencias medibles.
```

## Sección: expresiones-equivalentes (36 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (3 * x + 5 * x) == (8 * x)
tipo: vf

enunciado: "¿Son equivalentes 3x + 5x y 8x? Con x = {x}: 3×{x}+5×{x} = {3*x+5*x}; 8×{x} = {8*x}."

explicacion: |
  Se suman los coeficientes de términos semejantes: 3x + 5x = 8x.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (2 * x + 3 * x - x) == (4 * x)
tipo: vf

enunciado: "¿Son equivalentes 2x + 3x − x y 4x? Con x = {x}: 2×{x}+3×{x}−{x} = {2*x+3*x-x}; 4×{x} = {4*x}."

explicacion: |
  Sumando y restando coeficientes: 2 + 3 − 1 = 4.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (x + x + x) == (3 * x)
tipo: vf

enunciado: "¿Son equivalentes x + x + x y 3x? Con x = {x}: {x}+{x}+{x} = {x+x+x}; 3×{x} = {3*x}."

explicacion: |
  Sumar el mismo valor 3 veces es lo mismo que multiplicarlo por 3.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (4 * x - x) == (3 * x)
tipo: vf

enunciado: "¿Son equivalentes 4x − x y 3x? Con x = {x}: 4×{x}−{x} = {4*x-x}; 3×{x} = {3*x}."

explicacion: |
  4x − x es 4x − 1x = 3x (el término "x" solo tiene coeficiente 1).
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (2 * (x + 3)) == (2 * x + 6)
tipo: vf

enunciado: "¿Son equivalentes 2(x + 3) y 2x + 6? Con x = {x}: 2×({x}+3) = {2*(x+3)}; 2×{x}+6 = {2*x+6}."

explicacion: |
  El 2 se distribuye a los dos términos de adentro: 2·x + 2·3 = 2x + 6.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (5 * (x - 2)) == (5 * x - 10)
tipo: vf

enunciado: "¿Son equivalentes 5(x − 2) y 5x − 10? Con x = {x}: 5×({x}−2) = {5*(x-2)}; 5×{x}−10 = {5*x-10}."

explicacion: |
  El 5 distribuye a los dos términos: 5·x − 5·2 = 5x − 10.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "signos", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (-(x - 3)) == (-x + 3)
tipo: vf

enunciado: "¿Son equivalentes −(x − 3) y −x + 3? Con x = {x}: −({x}−3) = {-(x-3)}; −{x}+3 = {-x+3}."

explicacion: |
  El signo negativo distribuye cambiando el signo de los dos términos:
  −x − (−3) = −x + 3.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["asociativa", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (3 * (2 * x)) == (6 * x)
tipo: vf

enunciado: "¿Son equivalentes 3(2x) y 6x? Con x = {x}: 3×(2×{x}) = {3*(2*x)}; 6×{x} = {6*x}."

explicacion: |
  Multiplicar por 3 y después por 2 (o al revés) es lo mismo que
  multiplicar directamente por 6.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["conmutativa", "dos_variables", "verdadero_falso"]

variables:
  x: random(1, 30)
  y: random(1, 30)

respuesta: (2 * x + 3 * y) == (3 * y + 2 * x)
tipo: vf

enunciado: "¿Son equivalentes 2x + 3y y 3y + 2x? Con x = {x}, y = {y}: {2*x+3*y} y {3*y+2*x}."

explicacion: |
  El orden en que se suman dos términos no cambia el resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["identidad", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (x * 1) == (x)
tipo: vf

enunciado: "¿Son equivalentes x × 1 y x? Con x = {x}: {x*1} y {x}."

explicacion: |
  Multiplicar por 1 no cambia el valor de una expresión.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "error_comun", "verdadero_falso"]

variables:
  x: random(2, 30)

respuesta: (3 * x + 5) == (8 * x)
tipo: vf

enunciado: "¿Son equivalentes 3x + 5 y 8x? Con x = {x}: 3×{x}+5 = {3*x+5}; 8×{x} = {8*x}."

explicacion: |
  3x y 5 no son términos semejantes (uno tiene x, el otro no) — no se
  pueden combinar en un solo término.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "error_comun", "verdadero_falso"]

variables:
  x: random(2, 30)

respuesta: (2 * (x + 3)) == (2 * x + 3)
tipo: vf

enunciado: "¿Son equivalentes 2(x + 3) y 2x + 3? Con x = {x}: 2×({x}+3) = {2*(x+3)}; 2×{x}+3 = {2*x+3}."

explicacion: |
  Falta distribuir el 2 al 3: la forma correcta es 2x + 6, no 2x + 3.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "signos", "error_comun", "verdadero_falso"]

variables:
  x: random(2, 30)

respuesta: (-(x - 3)) == (-x - 3)
tipo: vf

enunciado: "¿Son equivalentes −(x − 3) y −x − 3? Con x = {x}: −({x}−3) = {-(x-3)}; −{x}−3 = {-x-3}."

explicacion: |
  El signo del segundo término también cambia: −(x−3) = −x+3, no −x−3.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "avanzado"
  tags: ["error_comun", "verdadero_falso"]

variables:
  x: random(2, 20)

respuesta: (3 * x * (2 * x)) == (6 * x)
tipo: vf

enunciado: "¿Son equivalentes 3x × 2x y 6x? Con x = {x}: (3×{x})×(2×{x}) = {3*x*(2*x)}; 6×{x} = {6*x}."

explicacion: |
  3x × 2x = 6x² (se multiplican también las x), no 6x — multiplicar
  términos no es lo mismo que sumarlos.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["error_comun", "verdadero_falso"]

variables:
  x: random(2, 20)

respuesta: (x + x) == (x ^ 2)
tipo: vf

enunciado: "¿Son equivalentes x + x y x²? Con x = {x}: {x+x} y {x^2}."

explicacion: |
  x + x es 2x (sumar el valor dos veces), no x² (multiplicarlo por sí
  mismo) — son operaciones distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "error_comun", "verdadero_falso"]

variables:
  x: random(2, 30)

respuesta: (2 * (x - 1)) == (2 * x - 1)
tipo: vf

enunciado: "¿Son equivalentes 2(x − 1) y 2x − 1? Con x = {x}: 2×({x}−1) = {2*(x-1)}; 2×{x}−1 = {2*x-1}."

explicacion: |
  La forma correcta es 2x − 2 (el 2 distribuye también al 1), no 2x − 1.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "avanzado"
  tags: ["terminos_semejantes", "error_comun", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: ((x + 3) - (x - 3)) == (0)
tipo: vf

enunciado: "¿Son equivalentes (x + 3) − (x − 3) y 0? Con x = {x}: ({x}+3)−({x}−3) = {(x+3)-(x-3)}."

explicacion: |
  (x+3)−(x−3) = x+3−x+3 = 6: las x se cancelan, pero el resultado es la
  constante 6, no 0.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "avanzado"
  tags: ["distributiva", "signos", "error_comun", "verdadero_falso"]

variables:
  x: random(1, 10)

respuesta: (10 - (x - 4)) == (6 - x)
tipo: vf

enunciado: "¿Son equivalentes 10 − (x − 4) y 6 − x? Con x = {x}: 10−({x}−4) = {10-(x-4)}; 6−{x} = {6-x}."

explicacion: |
  10 − (x − 4) = 10 − x + 4 = 14 − x, no 6 − x — el signo del −4 también
  cambia al distribuir el menos de afuera.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "opcion_multiple"]

variables:
  x: random(1, 30)

respuesta: 3 * x + 6
tipo: mc
opciones_explicitas:
  - 3 * x + 6
  - 3 * x + 2
  - x + 6

enunciado: "¿Cuál expresión es equivalente a 3(x + 2), para x = {x}?"

explicacion: |
  3(x+2) = 3x + 6: el 3 distribuye a los dos términos.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "opcion_multiple"]

variables:
  x: random(2, 30)

respuesta: 2 * x
tipo: mc
opciones_explicitas:
  - 2 * x
  - 2 * x ^ 2
  - 6 * x

enunciado: "¿Cuál expresión es equivalente a 4x − 2x, para x = {x}?"

explicacion: |
  4x − 2x = 2x (se restan los coeficientes). 2x² confunde restar con
  elevar al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "signos", "opcion_multiple"]

variables:
  x: random(3, 20)

respuesta: -2 * x + 5
tipo: mc
opciones_explicitas:
  - -2 * x + 5
  - -2 * x - 5
  - 2 * x - 5

enunciado: "¿Cuál expresión es equivalente a −(2x − 5), para x = {x}?"

explicacion: |
  El menos de afuera cambia el signo de los dos términos: −2x + 5.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "opcion_multiple"]

variables:
  x: random(2, 20)

respuesta: 4 * x
tipo: mc
opciones_explicitas:
  - 4 * x
  - x ^ 4
  - 4 * x ^ 2

enunciado: "¿Cuál expresión es equivalente a x + x + x + x, para x = {x}?"

explicacion: |
  Sumar x cuatro veces es 4x. x⁴ y 4x² confunden sumar repetido con
  elevar a una potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "opcion_multiple"]

variables:
  x: random(2, 30)

respuesta: 4 * x
tipo: mc
opciones_explicitas:
  - 4 * x
  - 5
  - 4

enunciado: "¿Cuál expresión es equivalente a 5x − x, para x = {x}?"

explicacion: |
  "x" solo vale coeficiente 1, así que 5x − x = 5x − 1x = 4x. No se
  "cancela" la x dejando sólo un número.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["asociativa", "opcion_multiple"]

variables:
  x: random(1, 30)

respuesta: 6 * x
tipo: mc
opciones_explicitas:
  - 6 * x
  - 5 * x
  - 3 * x + 2

enunciado: "¿Cuál expresión es equivalente a 2(3x), para x = {x}?"

explicacion: |
  2(3x) = (2×3)x = 6x.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "avanzado"
  tags: ["terminos_semejantes", "dos_variables", "opcion_multiple"]

variables:
  x: random(1, 20)
  y: random(21, 40)

respuesta: 4 * x + 2 * y
tipo: mc
opciones_explicitas:
  - 4 * x + 2 * y
  - 5 * x + 2 * y
  - 3 * x + 3 * y

enunciado: "¿Cuál expresión es equivalente a 3x + 2y + x, para x = {x}, y = {y}?"

explicacion: |
  Los dos términos con x se combinan: 3x + x = 4x. El término con y no
  se toca porque no es semejante.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "opcion_multiple"]

variables:
  x: random(1, 30)

respuesta: 2 * x + 5
tipo: mc
opciones_explicitas:
  - 2 * x + 5
  - 2 * x + 6
  - x + 5

enunciado: "¿Cuál expresión es equivalente a (x + 2) + (x + 3), para x = {x}?"

explicacion: |
  Se combinan las x (x+x=2x) y los números sueltos (2+3=5): 2x + 5.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "avanzado"
  tags: ["distributiva", "signos", "opcion_multiple"]

variables:
  x: random(1, 10)

respuesta: 14 - x
tipo: mc
opciones_explicitas:
  - 14 - x
  - 6 - x
  - x - 14

enunciado: "¿Cuál expresión es equivalente a 10 − (x − 4), para x = {x}?"

explicacion: |
  10 − (x − 4) = 10 − x + 4 = 14 − x.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "opcion_multiple"]

variables:
  x: random(2, 30)

respuesta: 3 * x
tipo: mc
opciones_explicitas:
  - 3 * x
  - 3 * x ^ 2
  - 5 * x

enunciado: "¿Cuál expresión es equivalente a x + 2x, para x = {x}?"

explicacion: |
  x + 2x = 3x (coeficiente 1 + coeficiente 2). 3x² confunde sumar con
  elevar al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "evaluar"]

variables:
  x: random(1, 40)

respuesta: 4 * x + 3 * x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 4x + 3x, si x = {x}?"

explicacion: |
  4x + 3x = 7x — combinar antes de multiplicar ahorra la cuenta.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "evaluar"]

variables:
  x: random(1, 40)

respuesta: 10 * x - 4 * x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 10x − 4x, si x = {x}?"

explicacion: |
  10x − 4x = 6x.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "evaluar"]

variables:
  x: random(1, 30)

respuesta: 2 * (x + 5)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 2(x + 5), si x = {x}?"

pasos:
  - "Distribuir: 2×{x} + 2×5 = {2*x} + 10 = {2*(x+5)}"

explicacion: |
  2(x+5) = 2x + 10.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "evaluar"]

variables:
  x: random(1, 30)

respuesta: 3 * (x - 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 3(x − 2), si x = {x}?"

explicacion: |
  3(x−2) = 3x − 6.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "evaluar"]

variables:
  x: random(1, 30)

respuesta: 5 * x + 2 * x - x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 5x + 2x − x, si x = {x}?"

explicacion: |
  5x + 2x − x = 6x.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "signos", "evaluar"]

variables:
  x: random(1, 30)

respuesta: -(x + 4)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale −(x + 4), si x = {x}?"

explicacion: |
  −(x+4) = −x − 4.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["dos_variables", "evaluar"]

variables:
  x: random(1, 30)
  y: random(1, 30)

respuesta: 2 * x + 3 * y
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 2x + 3y, si x = {x} e y = {y}?"

explicacion: |
  Cada término se evalúa por separado y después se suman.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "evaluar"]

variables:
  x: random(1, 40)

respuesta: x + x + x + x + x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale x + x + x + x + x, si x = {x}?"

explicacion: |
  Sumar x cinco veces es lo mismo que 5x.
```

## Sección: familias-exponencial-logaritmica (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  n: random(1, 6)

respuesta: 10 ^ n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = 10^x. ¿Cuánto vale f({n})?"

explicacion: |
  10^{n} = {10 ^ n}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  a: random(2, 10)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}^x. ¿Cuánto vale f(0)?"

explicacion: |
  Cualquier base elevada a 0 da 1, sin importar cuál sea la base.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  a: random(2, 8)
  n: random(1, 5)

respuesta: a ^ n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}^x. ¿Cuánto vale f({n})?"

explicacion: |
  {a}^{n} = {a ^ n}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["exponencial", "decaimiento"]

variables:
  base_inv: uno_de([2, 5])
  n: random(1, 4)

respuesta: 1 / (base_inv ^ n)
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (1/{base_inv})^x. ¿Cuánto vale f({n})?"

pasos:
  - "(1/{base_inv})^{n} = 1/{base_inv}^{n} = 1/{base_inv ^ n} = {1 / (base_inv ^ n)}"

explicacion: |
  Con base entre 0 y 1, la función decae en vez de crecer.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["logaritmica"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: log10(x)
tipo: input
tolerancia_abs: 0

enunciado: "g(x) = log₁₀(x). ¿Cuánto vale g({x})?"

explicacion: |
  log₁₀({x}) = {n}, porque 10^{n} = {x}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["logaritmica"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "g(x) = log₁₀(x). ¿Cuánto vale g(1)?"

explicacion: |
  El logaritmo de 1 siempre da 0, sin importar la base.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["logaritmica"]

variables:
  n: random(1, 5)
  x: 10 ^ n * 10

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "g(x) = log₁₀(x). ¿Cuánto vale g({x})?"

explicacion: |
  {x} = 10^{n + 1}, así que g({x}) = {n + 1}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["inversa", "verdadero_falso"]

variables:
  n: random(1, 6)

respuesta: (log10(10 ^ n) == n)
tipo: vf

enunciado: "f(x) = 10^x, g(x) = log₁₀(x). ¿g(f({n})) da de vuelta {n}?"

explicacion: |
  Es la definición de funciones inversas: una deshace lo que hace la
  otra.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["inversa", "verdadero_falso"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: ((10 ^ log10(x)) == x)
tipo: vf

enunciado: "f(x) = 10^x, g(x) = log₁₀(x). ¿f(g({x})) da de vuelta {x}?"

explicacion: |
  Aplicar la exponencial después del logaritmo también devuelve el
  valor original.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de cualquier función exponencial f(x) = aˣ son todos los números reales."

explicacion: |
  Cualquier exponente (entero, fraccionario, negativo) tiene sentido.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El dominio de la función logarítmica también son todos los reales, igual que la exponencial."

explicacion: |
  El dominio del logaritmo es sólo x > 0 — no se puede sacar logaritmo
  de 0 ni de un número negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "imagen", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La imagen de cualquier función exponencial f(x) = aˣ (con a>0) es y > 0."

explicacion: |
  Una potencia con base positiva nunca da 0 ni negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "imagen", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La imagen de la función logarítmica son todos los números reales."

explicacion: |
  A diferencia del dominio (restringido a x>0), la imagen del logaritmo
  cubre todos los reales — el dominio y la imagen se invierten entre
  exponencial y logarítmica.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Existe algún valor de x para el cual 10^x da exactamente 0."

explicacion: |
  Nunca — la exponencial se acerca a 0 (asíntota horizontal) pero jamás
  lo toca.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de una función exponencial tiene una asíntota horizontal en y=0."

explicacion: |
  La curva se acerca cada vez más al eje x sin tocarlo nunca.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de una función logarítmica tiene una asíntota vertical en x=0."

explicacion: |
  Cuando x se acerca a 0 por la derecha, el logaritmo se va hacia menos
  infinito sin llegar nunca a x=0 (que ni siquiera está en el dominio).
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "A la larga, cualquier función exponencial con base mayor que 1 termina superando a cualquier función lineal, sin importar cuán grande sea la pendiente de esta última."

explicacion: |
  El crecimiento exponencial multiplica en cada paso; el lineal suma
  siempre lo mismo — a la larga, multiplicar gana.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  m: random(50, 200)
  n: random(10, 15)

respuesta: ((2 ^ n) > (m * n))
tipo: vf

enunciado: "f(x) = 2^x (exponencial) y g(x) = {m}x (lineal, con pendiente grande). ¿f({n}) ya supera a g({n})?"

explicacion: |
  Aunque {m} es una pendiente grande, el crecimiento exponencial termina
  superándola para un x suficientemente grande.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "decaimiento", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Con base entre 0 y 1 (por ejemplo, f(x) = (1/2)ˣ), la función decrece en vez de crecer."

explicacion: |
  A diferencia de a>1, con 0<a<1 cada paso multiplica por un número
  menor a 1, así que el valor disminuye.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["exponencial", "decaimiento"]

variables:
  base_inv: random(2, 5)
  n: random(1, 4)

respuesta: base_inv ^ n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (1/{base_inv})^x. ¿Cuánto vale f(−{n})?"

pasos:
  - "(1/{base_inv})^(−{n}) = {base_inv}^{n} = {base_inv ^ n}"

explicacion: |
  Un exponente negativo con base fraccionaria "da vuelta" la fracción,
  volviendo a crecer.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La función logarítmica es la función inversa de la exponencial de la misma base."

explicacion: |
  Una deshace lo que hace la otra — mismo concepto ya visto en
  `../funcion-inversa-composicion/`.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los gráficos de una función exponencial y su logaritmo inverso son reflejos uno del otro respecto a la recta y=x."

explicacion: |
  Es una propiedad general de cualquier par de funciones inversas.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 5)
  real: 10 ^ n
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = 10^x. ¿Es correcto que f({n}) sea {propuesto}?"

explicacion: |
  El valor correcto es 10^{n} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 6)
  x: 10 ^ n
  error: uno_de([0, 0, 1, -1])
  propuesto: n + error

respuesta: (propuesto == n)
tipo: vf

enunciado: "g(x) = log₁₀(x). ¿Es correcto que g({x}) sea {propuesto}?"

explicacion: |
  El valor correcto es log₁₀({x}) = {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  poblacion_inicial: random(100, 1000)
  tasa: random(2, 4)
  anios: random(1, 4)

respuesta: poblacion_inicial * tasa ^ anios
tipo: input
tolerancia_abs: 0

enunciado: "Una población se duplica (o se multiplica por {tasa}) cada año: P(t) = {poblacion_inicial}×{tasa}^t. ¿Cuál es la población después de {anios} años?"

explicacion: |
  Es una función exponencial: el crecimiento multiplica, no suma, en
  cada paso.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "log₁₀(x) y ln(x) son exactamente la misma función, sólo con otro nombre."

explicacion: |
  Son logaritmos de distinta base: log₁₀ es base 10, ln es logaritmo
  natural (base e) — dan resultados distintos para el mismo x (ver
  `../logaritmos/` de Tronco 1).
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "log₁₀(−5) da un número real negativo."

explicacion: |
  No está definido: −5 no pertenece al dominio del logaritmo (x tiene
  que ser mayor que 0).
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["exponencial", "logaritmica"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "10^x = {x}. ¿Cuánto vale x?"

pasos:
  - "x = log₁₀({x}) = {n}"

explicacion: |
  Despejar un exponente es, exactamente, aplicar el logaritmo — la
  operación inversa.
```

## Sección: forma-polar-complejos (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["modulo"]

variables:
  k: random(1, 15)
  a: 3 * k
  b: 4 * k

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

pasos:
  - "|z| = √({a}² + {b}²) = √({a ^ 2} + {b ^ 2}) = √{a ^ 2 + b ^ 2} = {sqrt(a ^ 2 + b ^ 2)}"

explicacion: |
  El módulo es la distancia al origen, calculada con Pitágoras.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["modulo"]

variables:
  k: random(1, 10)
  a: 5 * k
  b: 12 * k

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

explicacion: |
  √({a}² + {b}²) = {sqrt(a ^ 2 + b ^ 2)}.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["modulo"]

variables:
  k: random(1, 8)
  a: 8 * k
  b: 15 * k

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

explicacion: |
  √({a}² + {b}²) = {sqrt(a ^ 2 + b ^ 2)}.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["modulo"]

variables:
  k: random(1, 8)
  a: 7 * k
  b: 24 * k

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

explicacion: |
  √({a}² + {b}²) = {sqrt(a ^ 2 + b ^ 2)}.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "avanzado"
  tags: ["modulo"]

variables:
  k: random(1, 6)
  a: 20 * k
  b: 21 * k

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

explicacion: |
  √({a}² + {b}²) = {sqrt(a ^ 2 + b ^ 2)}.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["modulo", "signos"]

variables:
  k: random(1, 15)
  signo_a: uno_de([1, -1])
  signo_b: uno_de([1, -1])
  a: 3 * k * signo_a
  b: 4 * k * signo_b

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

explicacion: |
  El signo no afecta al módulo: se eleva al cuadrado antes de sumar, así
  que siempre da positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["argumento"]

variables:
  a: random(1, 30)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el argumento (en grados) de {a} (un real positivo puro)?"

explicacion: |
  Está sobre el eje real positivo: argumento 0°.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["argumento"]

variables:
  b: random(1, 30)

respuesta: 90
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el argumento (en grados) de {b}i (un imaginario positivo puro)?"

explicacion: |
  Está sobre el eje imaginario positivo: argumento 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["argumento"]

variables:
  a: random(1, 30)

respuesta: 180
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el argumento (en grados) de −{a} (un real negativo puro)?"

explicacion: |
  Está sobre el eje real negativo: argumento 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["argumento"]

variables:
  b: random(1, 30)

respuesta: 270
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el argumento (en grados) de −{b}i (un imaginario negativo puro)?"

explicacion: |
  Está sobre el eje imaginario negativo: argumento 270°.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["modulo"]

variables:
  a: random(1, 40)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de −{a}?"

explicacion: |
  El módulo es siempre positivo: |−{a}| = {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["modulo"]

variables:
  b: random(1, 40)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de −{b}i?"

explicacion: |
  |−{b}i| = {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion_polar"]

variables:
  r1: random(2, 15)
  r2: random(2, 15)
  t1: uno_de([0, 90, 180, 270])
  t2: uno_de([0, 90, 180, 270])

respuesta: r1 * r2
tipo: input
tolerancia_abs: 0

enunciado: "z₁ tiene módulo {r1} y argumento {t1}°. z₂ tiene módulo {r2} y argumento {t2}°. ¿Cuál es el módulo de z₁×z₂?"

explicacion: |
  Los módulos se multiplican: {r1}×{r2} = {r1 * r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion_polar"]

variables:
  r1: random(2, 15)
  r2: random(2, 15)
  t1: uno_de([0, 90, 180, 270])
  t2: uno_de([0, 90, 180, 270])

respuesta: t1 + t2
tipo: input
tolerancia_abs: 0

enunciado: "z₁ tiene módulo {r1} y argumento {t1}°. z₂ tiene módulo {r2} y argumento {t2}°. ¿Cuál es el argumento de z₁×z₂ (sin normalizar a menos de 360°)?"

explicacion: |
  Los argumentos se suman: {t1}° + {t2}° = {t1 + t2}°.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["division_polar"]

variables:
  r2: random(2, 10)
  k: random(2, 8)
  r1: r2 * k
  t1: uno_de([0, 90, 180, 270])
  t2: uno_de([0, 90, 180, 270])

respuesta: r1 / r2
tipo: input
tolerancia_abs: 0

enunciado: "z₁ tiene módulo {r1} y argumento {t1}°. z₂ tiene módulo {r2} y argumento {t2}°. ¿Cuál es el módulo de z₁/z₂?"

explicacion: |
  Los módulos se dividen: {r1}/{r2} = {r1 / r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["division_polar"]

variables:
  r1: random(2, 15)
  r2: random(2, 15)
  t1: uno_de([180, 270])
  t2: uno_de([0, 90])

respuesta: t1 - t2
tipo: input
tolerancia_abs: 0

enunciado: "z₁ tiene módulo {r1} y argumento {t1}°. z₂ tiene módulo {r2} y argumento {t2}°. ¿Cuál es el argumento de z₁/z₂?"

explicacion: |
  Los argumentos se restan: {t1}° − {t2}° = {t1 - t2}°.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El módulo de un número complejo es la distancia desde el origen hasta el punto (a, b) en el plano complejo."

explicacion: |
  Se calcula con el teorema de Pitágoras: √(a²+b²).
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El módulo de un número complejo nunca puede dar negativo."

explicacion: |
  Es una distancia, y las distancias no son negativas — además, sale de
  una raíz cuadrada de una suma de cuadrados, siempre ≥ 0.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar dos números complejos en forma polar es más simple que en forma binómica: sólo hace falta multiplicar módulos y sumar argumentos."

explicacion: |
  En forma binómica hay que distribuir y usar i²=−1; en forma polar es
  sólo una multiplicación y una suma.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al multiplicar dos complejos en forma polar, los argumentos se multiplican entre sí, igual que los módulos."

explicacion: |
  Los módulos se multiplican, pero los argumentos se SUMAN — son reglas
  distintas para cada parte.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La forma polar z = r(cos θ + i sen θ) usa el módulo r y el argumento θ para describir el mismo número que a + bi."

explicacion: |
  Son dos formas distintas de nombrar el mismo punto del plano complejo.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular el argumento sólo con arctan(b/a), sin fijarse en qué cuadrante cae el punto, puede dar un ángulo equivocado."

explicacion: |
  arctan por sí solo no distingue todos los cuadrantes — hay que ajustar
  el resultado según los signos de a y b.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(1, 15)
  a: 3 * k
  b: 4 * k
  real: sqrt(a ^ 2 + b ^ 2)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "¿Es correcto que el módulo de {a} + {b}i sea {propuesto}?"

explicacion: |
  El módulo correcto es √({a}²+{b}²) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El módulo de un número real puro (b=0) es simplemente su valor absoluto."

explicacion: |
  √(a²+0²) = √(a²) = |a|.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "avanzado"
  tags: ["multiplicacion_polar"]

variables:
  r: random(2, 8)
  t: uno_de([0, 90, 180, 270])

respuesta: r * r * r
tipo: input
tolerancia_abs: 0

enunciado: "z tiene módulo {r} y argumento {t}°. ¿Cuál es el módulo de z³ (z×z×z)?"

explicacion: |
  Cada multiplicación multiplica los módulos: {r}×{r}×{r} = {r * r * r}.
```

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "avanzado"
  tags: ["multiplicacion_polar"]

variables:
  r: random(2, 8)
  t: uno_de([30, 45, 60, 90])

respuesta: t * 3
tipo: input
tolerancia_abs: 0

enunciado: "z tiene módulo {r} y argumento {t}°. ¿Cuál es el argumento de z³ (sin normalizar), sumando el argumento tres veces?"

explicacion: |
  Cada multiplicación suma el argumento: {t}°×3 = {t * 3}°.
```

## Sección: fracciones (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

enunciado: "En la fracción 3/4, ¿qué representa el 3 (el numerador)?"
tipo: mc
opciones_explicitas:
  - "Cuántas partes se toman"
  - "En cuántas partes se dividió el todo"
  - "El resultado de la división"
respuesta: "Cuántas partes se toman"

explicacion: |
  El numerador dice cuántas partes del todo se están tomando.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

enunciado: "En la fracción 3/4, ¿qué representa el 4 (el denominador)?"
tipo: mc
opciones_explicitas:
  - "En cuántas partes iguales se dividió el todo"
  - "Cuántas partes se toman"
  - "El resultado de la división"
respuesta: "En cuántas partes iguales se dividió el todo"

explicacion: |
  El denominador dice en cuántas partes iguales se dividió el entero.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c: a * k
  d: b * k

respuesta: (a * d == b * c)
tipo: vf

enunciado: "¿Son equivalentes las fracciones {a}/{b} y {c}/{d}?"

pasos:
  - "Producto cruzado: {a} × {d} = {a * d}. {b} × {c} = {b * c}. ¿Son iguales?"

explicacion: |
  Dos fracciones son equivalentes si el producto cruzado da lo mismo de
  los dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: falso
tipo: vf

enunciado: "¿Son equivalentes las fracciones {a}/{b} y {c}/{d}?"

explicacion: |
  El producto cruzado no da igual de los dos lados: no son equivalentes.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "amplificar"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 9)

respuesta: a * k
tipo: input
tolerancia_abs: 0

enunciado: "Para amplificar {a}/{b} multiplicando por {k}, ¿cuál queda el nuevo numerador?"

pasos:
  - "{a} × {k} = {a * k} (y el denominador queda {b} × {k} = {b * k})"

explicacion: |
  Amplificar es multiplicar numerador y denominador por el mismo número,
  para llegar a una fracción equivalente.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  num: divisor_comun * random(2, 9)
  den: divisor_comun * random(2, 9)
  simplificador: mcd(num, den)

restricciones:
  - num != den

respuesta: num / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar {num}/{den} al máximo (dividiendo por su MCD), ¿cuál queda el numerador?"

pasos:
  - "MCD({num}, {den}) = {simplificador}. {num} ÷ {simplificador} = {num / simplificador}"

explicacion: |
  Simplificar al máximo es dividir numerador y denominador por su MCD.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "simplificar"]

variables:
  a: random(1, 20)
  b: a + 1

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}/{b} una fracción irreducible (que ya no se puede simplificar más)?"

explicacion: |
  Como {a} y {b} son números consecutivos, su MCD es 1: no se pueden
  simplificar más.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "comparacion"]

variables:
  b: random(5, 20)
  a: random(1, b - 1)
  c: random(1, b - 1)

restricciones:
  - a != c

respuesta: (a > c)
tipo: vf

enunciado: "¿Es {a}/{b} mayor que {c}/{b}?"

explicacion: |
  Con el mismo denominador, alcanza con comparar los numeradores.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "comparacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: (a * d > b * c)
tipo: vf

enunciado: "¿Es {a}/{b} mayor que {c}/{d}?"

pasos:
  - "Producto cruzado: {a} × {d} = {a * d}. {b} × {c} = {b * c}."

explicacion: |
  Con distinto denominador, se compara el producto cruzado: a/b es mayor
  que c/d si a×d es mayor que b×c.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  b: random(2, 9)
  a: random(1, b - 1)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}/{b} una fracción propia (menor que 1 entero)?"

explicacion: |
  Como el numerador es menor que el denominador, la fracción vale menos
  que un entero completo.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  b: random(2, 9)
  a: b + random(1, 9)

respuesta: falso
tipo: vf

enunciado: "¿Es {a}/{b} una fracción propia (menor que 1 entero)?"

explicacion: |
  Como el numerador es mayor que el denominador, esta fracción es
  impropia: vale 1 entero o más.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "numero_mixto"]

variables:
  b: random(2, 9)
  entero: random(1, 5)
  resto: random(1, b - 1)
  a: b * entero + resto

respuesta: entero
tipo: input
tolerancia_abs: 0

enunciado: "Al convertir la fracción impropia {a}/{b} a número mixto, ¿cuál es la parte entera?"

pasos:
  - "{a} ÷ {b} da cociente {entero} (y resto {resto})"

explicacion: |
  La parte entera es el cociente de dividir el numerador por el
  denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "numero_mixto"]

variables:
  b: random(2, 9)
  entero: random(1, 5)
  resto: random(1, b - 1)
  a: b * entero + resto

respuesta: resto
tipo: input
tolerancia_abs: 0

enunciado: "Al convertir {a}/{b} a número mixto, ¿cuál queda el numerador de la parte fraccionaria (sobre el mismo denominador {b})?"

pasos:
  - "El resto de {a} ÷ {b} es {resto}: el número mixto queda {entero} entero(s) y {resto}/{b}"

explicacion: |
  La parte fraccionaria es el resto de la división, sobre el mismo
  denominador original.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "numero_mixto"]

variables:
  entero: random(1, 6)
  b: random(2, 9)
  resto: random(1, b - 1)

respuesta: entero * b + resto
tipo: input
tolerancia_abs: 0

enunciado: "El número mixto es {entero} entero(s) y {resto}/{b}. ¿Cuál es el numerador de la fracción impropia equivalente (sobre el mismo denominador {b})?"

pasos:
  - "{entero} × {b} + {resto} = {entero * b + resto}"

explicacion: |
  Se multiplica la parte entera por el denominador y se suma el
  numerador de la parte fraccionaria.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "orden"]

tipo: ordenar
enunciado: "Ordená estas fracciones de menor a mayor (todas tienen el mismo denominador)."
opciones_explicitas:
  - "5/8"
  - "1/8"
  - "6/8"
  - "3/8"
respuesta_orden: ["1/8", "3/8", "5/8", "6/8"]

explicacion: |
  Con el mismo denominador, alcanza con ordenar los numeradores.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)

respuesta: a * k
tipo: mc
opciones_explicitas:
  - a * k
  - a * k + 1
  - a + k

enunciado: "¿Cuál es el numerador de una fracción equivalente a {a}/{b}, con denominador {b * k}?"

explicacion: |
  Si el denominador se multiplicó por {k}, el numerador también tiene que
  multiplicarse por {k} para que la fracción siga valiendo lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)
  equivalente: a * k
  no_equivalente: equivalente + 1

respuesta: no_equivalente
tipo: mc
opciones_explicitas:
  - equivalente
  - no_equivalente

enunciado: "¿Cuál de estos dos numeradores NO forma una fracción equivalente a {a}/{b}, con denominador {b * k}?"

explicacion: |
  Sólo {a} × {k} = {equivalente} mantiene la misma proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "problema"]

variables:
  porciones: random(4, 12)
  comidas: random(1, porciones - 1)

respuesta: comidas
tipo: input
tolerancia_abs: 0

enunciado: "Una pizza se cortó en {porciones} porciones iguales. Si te comiste {comidas} porciones, ¿cuál es el numerador de la fracción de pizza que comiste (sobre {porciones})?"

explicacion: |
  La cantidad de porciones comidas es, directamente, el numerador de la
  fracción sobre el total de porciones.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "verificacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c_correcto: a * k
  error: uno_de([0, 0, 0, 1, -1])
  c_mostrado: c_correcto + error
  d: b * k

respuesta: (a * d == c_mostrado * b)
tipo: vf

enunciado: "¿Es {c_mostrado}/{d} equivalente a {a}/{b}?"

explicacion: |
  Se verifica con el producto cruzado: si no coincide, no son
  equivalentes.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  num: divisor_comun * random(2, 9)
  den: divisor_comun * random(2, 9)
  simplificador: mcd(num, den)

restricciones:
  - num != den

respuesta: den / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar {num}/{den} al máximo, ¿cuál queda el denominador?"

explicacion: |
  Se divide también el denominador por el mismo MCD que se usó en el
  numerador.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "comparacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: (a * d > b * c)
tipo: mc
opciones_explicitas:
  - verdadero
  - falso

enunciado: "¿Es cierto que {a}/{b} es mayor que {c}/{d}?"

explicacion: |
  Se compara con el producto cruzado.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  n: random(2, 20)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n}/{n} representa exactamente 1 entero?"

explicacion: |
  Cuando el numerador y el denominador son iguales, la fracción vale 1: el
  todo entero se dividió en n partes y se tomaron las n.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  n: random(2, 20)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que 0/{n} vale 0?"

explicacion: |
  No tomar ninguna parte (numerador 0) de cualquier cantidad de partes
  vale 0.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una fracción no puede tener 0 como denominador."

explicacion: |
  Dividir por 0 no está definido (ver la teoría de división): el
  denominador siempre tiene que ser distinto de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "avanzado"
  tags: ["fracciones", "comparacion"]

variables:
  b: random(6, 12)
  a: random(1, b - 1)
  c: random(1, b - 1)
  e: random(1, b - 1)

restricciones:
  - a != c
  - a != e
  - c != e

respuesta: max(a, c, e)
tipo: mc
opciones_explicitas:
  - a
  - c
  - e

enunciado: "Entre {a}/{b}, {c}/{b} y {e}/{b} (mismo denominador), ¿cuál numerador corresponde a la fracción mayor?"

explicacion: |
  Con el mismo denominador, la fracción mayor es la que tiene el
  numerador más grande.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)

tipo: completar
enunciado: "Completá: {a}/{b} = ___/{b * k} (fracciones equivalentes)."
respuestas_validas:
  - a * k

explicacion: |
  El numerador que falta tiene que guardar la misma proporción: se
  multiplica {a} por el mismo {k} que multiplicó al denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "avanzado"
  tags: ["fracciones", "problema"]

variables:
  total: random(10, 40)
  parte_a: random(1, total - 1)

respuesta: total - parte_a
tipo: input
tolerancia_abs: 0

enunciado: "Un grupo de {total} personas se divide en dos: {parte_a} van a un lado. ¿Cuántas personas quedan del otro lado (el numerador de la fracción complementaria, sobre {total})?"

explicacion: |
  Las dos partes complementarias siempre suman el total: si una fracción
  es {parte_a}/{total}, la otra es ({total} - {parte_a})/{total}.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una fracción representa una parte de un todo dividido en partes iguales."

explicacion: |
  Es la idea central de toda esta unidad: numerador y denominador,
  equivalencia, comparación — todo se apoya en esta definición.
```
