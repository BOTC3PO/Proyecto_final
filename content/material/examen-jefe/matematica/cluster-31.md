# Examen jefe — [PENDIENTE #631]

> Logro #631. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **129 preguntas totales** en 5/5 secciones.

---

## Sección: distribucion-exponencial (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "vocabulario"]

enunciado: "¿Qué modela la distribución exponencial?"
tipo: mc
opciones_explicitas:
  - "El tiempo que pasa hasta que ocurre el próximo evento, cuando los eventos suceden a una tasa promedio constante"
  - "La cantidad de eventos que ocurren en un intervalo fijo de tiempo"
  - "El promedio de un conjunto de datos ya medidos"
respuesta: "El tiempo que pasa hasta que ocurre el próximo evento, cuando los eventos suceden a una tasa promedio constante"

explicacion: |
  Como el tiempo hasta que llega el próximo colectivo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "vocabulario"]

enunciado: "En la distribución exponencial, ¿qué representa el parámetro λ (lambda)?"
tipo: mc
opciones_explicitas:
  - "La tasa promedio de eventos por unidad de tiempo"
  - "La cantidad total de eventos posibles"
  - "El tiempo máximo que se puede esperar"
respuesta: "La tasa promedio de eventos por unidad de tiempo"

explicacion: |
  Por ejemplo, 3 colectivos por hora → λ = 3/hora.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "completar"]

tipo: completar
enunciado: "Completá: el tiempo promedio de espera E(T) = 1 / ___."
respuestas_validas:
  - "λ"
  - "lambda"

explicacion: |
  El tiempo promedio de espera es el inverso de la tasa de eventos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([2, 3, 4, 6])

respuesta: redondear(1 / lambda, 3)
tipo: input
tolerancia_abs: 0.001
unidad: "horas"

enunciado: "En promedio llegan {lambda} colectivos por hora (λ = {lambda}/hora). ¿Cuál es el tiempo promedio de espera entre un colectivo y el siguiente, en horas?"

pasos:
  - "E(T) = 1/λ = 1/{lambda} = {redondear(1 / lambda, 3)} horas"

explicacion: |
  El tiempo promedio de espera es el inverso de la tasa de llegada.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "problema"]

variables:
  tiempo_promedio: uno_de([4, 5, 10, 20])

respuesta: redondear(1 / tiempo_promedio, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "El tiempo promedio entre fallas de una máquina es de {tiempo_promedio} días. ¿Cuál es la tasa λ de fallas por día?"

pasos:
  - "λ = 1/E(T) = 1/{tiempo_promedio} = {redondear(1 / tiempo_promedio, 3)} fallas por día"

explicacion: |
  λ y el tiempo promedio son inversos entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "completar"]

tipo: completar
enunciado: "Completá: P(T > t) = e^(−λ × ___)."
respuestas_validas:
  - "t"

explicacion: |
  Es la probabilidad de tener que esperar más de `t` unidades de
  tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([0.5, 1, 2])
  t: uno_de([1, 2])

respuesta: redondear(e ^ (-(lambda * t)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Los eventos ocurren con tasa λ = {lambda} por unidad de tiempo. ¿Cuál es la probabilidad de tener que esperar MÁS de {t} unidades de tiempo (P(T > {t}))?"

pasos:
  - "P(T > {t}) = e^(−{lambda}×{t}) = {redondear(e ^ (-(lambda * t)), 3)}"

explicacion: |
  Cuanto más grande el tiempo `t`, más chica esta probabilidad.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([0.5, 1, 2])
  t: uno_de([1, 2])

respuesta: redondear(1 - e ^ (-(lambda * t)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Los eventos ocurren con tasa λ = {lambda} por unidad de tiempo. ¿Cuál es la probabilidad de que el evento YA HAYA OCURRIDO para el tiempo {t} (P(T ≤ {t}))?"

pasos:
  - "P(T ≤ {t}) = 1 − e^(−{lambda}×{t}) = {redondear(1 - e ^ (-(lambda * t)), 3)}"

explicacion: |
  Es el complemento de P(T > t): juntas siempre suman 1.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial"]

respuesta: verdadero
tipo: vf

enunciado: "P(T ≤ t) y P(T > t) siempre suman exactamente 1, para cualquier valor de t."

explicacion: |
  Son eventos complementarios: o el evento ya ocurrió, o no.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "poisson"]

enunciado: "¿Cómo se relaciona la distribución exponencial con la distribución de Poisson?"
tipo: mc
opciones_explicitas:
  - "Si la CANTIDAD de eventos por intervalo sigue una Poisson, el TIEMPO entre esos eventos consecutivos sigue una exponencial con la misma tasa λ"
  - "No tienen ninguna relación, son distribuciones completamente independientes"
  - "La exponencial reemplaza a la Poisson, nunca se usan para el mismo problema"
respuesta: "Si la CANTIDAD de eventos por intervalo sigue una Poisson, el TIEMPO entre esos eventos consecutivos sigue una exponencial con la misma tasa λ"

explicacion: |
  Son dos caras de la misma situación: una cuenta eventos (discreta),
  la otra mide el tiempo entre ellos (continua).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución exponencial es una distribución continua, porque el tiempo puede tomar cualquier valor, no sólo números enteros."

explicacion: |
  A diferencia de la Poisson (discreta, que cuenta eventos enteros).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "aplicacion"]

enunciado: "Una lamparita dura en promedio 2.000 horas antes de quemarse, y las fallas ocurren al azar a una tasa constante. ¿Qué distribución conviene usar para modelar 'cuánto va a durar esta lamparita en particular'?"
tipo: mc
opciones_explicitas:
  - "La distribución exponencial, con λ = 1/2000 fallas por hora"
  - "La distribución binomial, con n=2000 intentos"
  - "La distribución de Poisson, contando lamparitas"
respuesta: "La distribución exponencial, con λ = 1/2000 fallas por hora"

explicacion: |
  Es exactamente "tiempo hasta que ocurre el próximo evento (la
  falla)", el caso central de la exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "clasificar"]

enunciado: "¿Cuál de estos dos escenarios se modela con la distribución EXPONENCIAL, y no con Poisson?"
tipo: mc
opciones_explicitas:
  - "El tiempo que pasa hasta que llega el próximo cliente a un local"
  - "La cantidad de clientes que llegan a un local en una hora"
respuesta: "El tiempo que pasa hasta que llega el próximo cliente a un local"

explicacion: |
  "Tiempo hasta" es exponencial (continua); "cantidad en un
  intervalo" es Poisson (discreta) — ver `../distribucion-de-poisson/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda_a: 1
  lambda_b: 3
  t: 1

respuesta: e ^ (-(lambda_a * t)) > e ^ (-(lambda_b * t))
tipo: vf

enunciado: "Sistema A tiene λ = {lambda_a} eventos por hora; Sistema B tiene λ = {lambda_b} eventos por hora (más eventos por hora que A). Para el mismo tiempo t = {t} hora, ¿P(T > {t}) del Sistema A es MAYOR que la del Sistema B?"

explicacion: |
  A menor tasa de eventos (λ), más probable es tener que esperar más
  tiempo — A tiene menos eventos por hora, así que su P(T>1) es mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es la tasa λ (más eventos ocurren por unidad de tiempo), menor es el tiempo promedio de espera hasta el próximo evento."

explicacion: |
  E(T) = 1/λ: si λ crece, 1/λ (el tiempo promedio) baja.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "problema"]

variables:
  lambda_local_a: uno_de([2, 4])
  lambda_local_b: uno_de([1, 3])

respuesta: (1 / lambda_local_a) < (1 / lambda_local_b)
tipo: vf

enunciado: "Local A recibe clientes con tasa λ = {lambda_local_a} por hora; Local B recibe clientes con tasa λ = {lambda_local_b} por hora. ¿El tiempo promedio entre clientes del Local A es MENOR que el del Local B?"

explicacion: |
  Comparar 1/λ de cada local: mayor tasa de llegada implica menor
  tiempo promedio de espera entre clientes.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "aplicacion"]

enunciado: "Una fábrica quiere estimar la probabilidad de que una máquina funcione MÁS de 100 horas sin fallar, sabiendo que en promedio falla cada 500 horas. ¿Qué necesita calcular?"
tipo: mc
opciones_explicitas:
  - "P(T > 100) usando la exponencial con λ = 1/500"
  - "P(X = 100) usando la binomial con n = 500"
  - "El desvío estándar de 500 horas"
respuesta: "P(T > 100) usando la exponencial con λ = 1/500"

explicacion: |
  Es la pregunta central de la distribución exponencial aplicada a
  confiabilidad de componentes.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([1, 2, 4])
  t: 1 / lambda

respuesta: redondear(e ^ (-(lambda * t)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con λ = {lambda}, el tiempo promedio de espera es 1/{lambda}. ¿Cuál es la probabilidad de esperar MÁS que ese tiempo promedio (P(T > 1/λ))?"

pasos:
  - "P(T > 1/λ) = e^(−λ×1/λ) = e^(−1) ≈ {redondear(e ^ (-(lambda * t)), 3)}"

explicacion: |
  Este resultado (e^(−1) ≈ 0,368) es siempre el mismo, sin importar
  λ — casi el 37% de las veces se espera más que el promedio, porque
  la exponencial no es simétrica como la normal.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "clasificar"]

enunciado: "Un analista quiere calcular 'la probabilidad de que lleguen exactamente 5 clientes en la próxima hora'. ¿La distribución exponencial es la herramienta correcta para esta pregunta?"
tipo: mc
opciones_explicitas:
  - "No: esa pregunta es un CONTEO de eventos en un intervalo fijo, corresponde a la distribución de Poisson, no a la exponencial"
  - "Sí: cualquier pregunta sobre clientes se resuelve con la exponencial"
respuesta: "No: esa pregunta es un CONTEO de eventos en un intervalo fijo, corresponde a la distribución de Poisson, no a la exponencial"

explicacion: |
  La exponencial responde "cuánto tiempo hasta que pase algo", no
  "cuántos eventos van a pasar" — esa es la pregunta de Poisson.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la distribución exponencial?"
tipo: mc
opciones_explicitas:
  - "Para modelar el tiempo de espera hasta que ocurre un evento, cuando los eventos suceden al azar a una tasa promedio constante"
  - "Para contar cuántos eventos ocurren en un intervalo fijo de tiempo"
  - "Para calcular el promedio de un conjunto de datos ya medidos"
respuesta: "Para modelar el tiempo de espera hasta que ocurre un evento, cuando los eventos suceden al azar a una tasa promedio constante"

explicacion: |
  Es el caso continuo hermano de la distribución de Poisson (el
  módulo que sigue), que cuenta eventos en vez de medir tiempos.
```

## Sección: vectores-modulo-y-direccion (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una magnitud escalar y una vectorial?"
tipo: mc
opciones_explicitas:
  - "La escalar sólo tiene un número (magnitud); la vectorial también tiene una dirección"
  - "La escalar siempre es negativa; la vectorial siempre es positiva"
  - "No hay ninguna diferencia real entre ambas"
respuesta: "La escalar sólo tiene un número (magnitud); la vectorial también tiene una dirección"

explicacion: |
  La temperatura es escalar; la velocidad es vectorial.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cuál de estas es una magnitud escalar?"
tipo: mc
opciones_explicitas:
  - "La masa de un objeto"
  - "La velocidad de un auto"
  - "La fuerza aplicada sobre una caja"
respuesta: "La masa de un objeto"

explicacion: |
  La masa queda descripta con un solo número, sin ninguna dirección.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cuál de estas es una magnitud vectorial?"
tipo: mc
opciones_explicitas:
  - "La velocidad de un auto"
  - "La temperatura de una habitación"
  - "La edad de una persona"
respuesta: "La velocidad de un auto"

explicacion: |
  La velocidad necesita, además del número (rapidez), una dirección.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué son las componentes de un vector que va del origen al punto (x, y)?"
tipo: mc
opciones_explicitas:
  - "El par (x, y): cuánto avanza en horizontal y en vertical"
  - "El módulo del vector, expresado con dos decimales"
  - "El ángulo que forma con cada eje"
respuesta: "El par (x, y): cuánto avanza en horizontal y en vertical"

explicacion: |
  Es la misma idea de coordenadas, ahora interpretada como
  desplazamiento.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 8)
  x: 3 * k
  oy: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componentes ({x}, {oy}). ¿Cuál es su módulo?"

pasos:
  - "√({x}² + {oy}²) = √{(x * x) + (oy * oy)} = {5 * k}"

explicacion: |
  Es el teorema de Pitágoras aplicado a las componentes del vector.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 6)
  x: 5 * k
  oy: 12 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componentes ({x}, {oy}). ¿Cuál es su módulo?"

pasos:
  - "√({x}² + {oy}²) = {13 * k}"

explicacion: |
  Es la terna pitagórica 5-12-13 escalada.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  x: random(1, 15)
  oy: random(1, 15)

respuesta: redondear(sqrt((x * x) + (oy * oy)), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un vector tiene componentes ({x}, {oy}). ¿Cuál es su módulo? Redondeá a 2 decimales."

pasos:
  - "√({x}² + {oy}²) = {redondear(sqrt((x * x) + (oy * oy)), 2)}"

explicacion: |
  No siempre el módulo da un número exacto.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué es la dirección de un vector?"
tipo: mc
opciones_explicitas:
  - "El ángulo que forma con el eje x positivo, medido en sentido antihorario"
  - "La longitud total de la flecha que lo representa"
  - "El punto exacto donde termina el vector"
respuesta: "El ángulo que forma con el eje x positivo, medido en sentido antihorario"

explicacion: |
  El módulo es la longitud; la dirección es hacia dónde apunta.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Dos vectores con el mismo módulo y la misma dirección son considerados el mismo vector, aunque estén dibujados con distinto punto de origen en el plano."

explicacion: |
  Un vector "libre" se puede trasladar sin cambiar lo que representa.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué es un vector nulo?"
tipo: mc
opciones_explicitas:
  - "Un vector con módulo 0, sin dirección definida"
  - "Un vector con dirección hacia el eje x negativo"
  - "Un vector que apunta siempre hacia el origen"
respuesta: "Un vector con módulo 0, sin dirección definida"

explicacion: |
  Sin longitud, no hay ninguna dirección real que definir.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué es un vector unitario?"
tipo: mc
opciones_explicitas:
  - "Un vector con módulo exactamente 1"
  - "Un vector que sólo tiene una componente distinta de 0"
  - "Un vector que apunta siempre hacia arriba"
respuesta: "Un vector con módulo exactamente 1"

explicacion: |
  Se usa para representar sólo una dirección, sin peso en la magnitud.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "Un vector tiene componentes (0,6, 0,8). ¿Es un vector unitario?"

explicacion: |
  √(0,6² + 0,8²) = √(0,36 + 0,64) = √1 = 1: sí, es unitario.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 6)
  x: 8 * k
  modulo: 17 * k

respuesta: 15 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componente x = {x} y módulo {modulo}. ¿Cuál es su componente y (positiva)?"

pasos:
  - "{modulo}² − {x}² = {(modulo * modulo) - (x * x)}"
  - "√{(modulo * modulo) - (x * x)} = {15 * k}"

explicacion: |
  Se despeja la componente faltante invirtiendo Pitágoras, igual que
  hallar un cateto conociendo la hipotenusa y el otro cateto.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "El módulo de un vector nunca puede ser un número negativo."

explicacion: |
  Es una raíz cuadrada de una suma de cuadrados: siempre positiva o
  cero.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cómo se representa gráficamente un vector?"
tipo: mc
opciones_explicitas:
  - "Con una flecha, desde un punto de origen hasta un punto de extremo"
  - "Con un punto suelto, sin ninguna línea"
  - "Con un círculo alrededor del origen"
respuesta: "Con una flecha, desde un punto de origen hasta un punto de extremo"

explicacion: |
  La punta de la flecha marca el extremo, y también la dirección.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "En la flecha que representa un vector, ¿cuál es el 'extremo'?"
tipo: mc
opciones_explicitas:
  - "El punto de llegada, donde está la punta de la flecha"
  - "El punto de partida, donde empieza la flecha"
  - "El punto medio de la flecha"
respuesta: "El punto de llegada, donde está la punta de la flecha"

explicacion: |
  El punto de partida se llama origen (o "cola").
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "problema"]

variables:
  x: random(-10, 10)
  oy: random(-10, 10)

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "Un vector va desde el origen (0, 0) hasta el punto ({x}, {oy}). ¿Cuál es su componente horizontal?"

explicacion: |
  Es directamente la abscisa del punto de llegada.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  x1: random(1, 10)
  y1: random(1, 10)
  x2: x1 + random(2, 8)
  y2: y1 + random(2, 8)

respuesta: x2 - x1
tipo: input
tolerancia_abs: 0

enunciado: "Un vector va desde el punto ({x1}, {y1}) hasta el punto ({x2}, {y2}). ¿Cuál es su componente horizontal?"

pasos:
  - "{x2} − {x1} = {x2 - x1}"

explicacion: |
  Un vector entre dos puntos cualesquiera se calcula restando las
  coordenadas del punto de llegada menos las del punto de partida.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué relación tiene el módulo de un vector con la fórmula de distancia entre dos puntos?"
tipo: mc
opciones_explicitas:
  - "Son la misma fórmula: el módulo es la distancia entre el origen y el extremo del vector"
  - "No tienen ninguna relación"
  - "El módulo siempre es el doble de la distancia"
respuesta: "Son la misma fórmula: el módulo es la distancia entre el origen y el extremo del vector"

explicacion: |
  Por eso este módulo depende de `../distancia-entre-dos-puntos/`.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 6)
  x1: random(1, 5)
  y1: random(1, 5)
  x2: x1 + 3 * k
  y2: y1 + 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector va desde el punto ({x1}, {y1}) hasta el punto ({x2}, {y2}). ¿Cuál es su módulo?"

pasos:
  - "Componentes: ({x2 - x1}, {y2 - y1})"
  - "√({x2 - x1}² + {y2 - y1}²) = {5 * k}"

explicacion: |
  Primero se calculan las componentes (la diferencia de coordenadas), y
  recién después el módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "ordenar"]

enunciado: "Ordená los pasos para hallar el módulo de un vector, conociendo sus componentes (x, y)."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de esa suma"
  - "Elevar al cuadrado cada componente"
  - "Sumar los dos cuadrados"
respuesta_orden: ["Elevar al cuadrado cada componente", "Sumar los dos cuadrados", "Sacar raíz cuadrada de esa suma"]
explicacion: |
  Es el mismo procedimiento del teorema de Pitágoras.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Por convención, la dirección de un vector se mide como el ángulo respecto del eje x positivo, en sentido antihorario."

explicacion: |
  Es la misma convención usada para los cuadrantes del plano
  cartesiano.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  modulo: uno_de([10, 20, 30, 40])
  cos_30: 0.87
  sen_30: 0.5

respuesta: redondear(modulo * sen_30, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un vector tiene módulo {modulo} y dirección 30° (sen 30° = 0,5, cos 30° ≈ 0,87). ¿Cuál es su componente vertical (y)?"

pasos:
  - "{modulo} × 0,5 = {redondear(modulo * sen_30, 1)}"

explicacion: |
  y = módulo × sen(dirección).
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Por qué la fuerza que se aplica sobre una caja se describe con un vector, y no con un solo número?"
tipo: mc
opciones_explicitas:
  - "Porque importa tanto cuánta fuerza se aplica como en qué dirección se empuja"
  - "Porque las fuerzas siempre son negativas"
  - "En realidad la fuerza es una magnitud escalar, no vectorial"
respuesta: "Porque importa tanto cuánta fuerza se aplica como en qué dirección se empuja"

explicacion: |
  Empujar hacia arriba, hacia abajo o de costado da resultados muy
  distintos, aunque la magnitud de la fuerza sea la misma.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Dos vectores pueden tener exactamente el mismo módulo pero apuntar en direcciones completamente distintas."

explicacion: |
  El módulo y la dirección son dos datos independientes entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven los vectores?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier magnitud que combine una cantidad con una dirección: desplazamientos, velocidades, fuerzas"
  - "Sólo sirven para describir posiciones fijas en el plano"
  - "Sólo tienen aplicación en geometría pura, sin uso en Física"
respuesta: "Para describir cualquier magnitud que combine una cantidad con una dirección: desplazamientos, velocidades, fuerzas"

explicacion: |
  Es la base para sumarlos y combinarlos en los módulos siguientes.
```

## Sección: volumen-y-capacidad (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["volumen", "vocabulario"]

enunciado: "¿Qué es el volumen de un cuerpo?"
tipo: mc
opciones_explicitas:
  - "La medida del espacio que ocupa en tres dimensiones"
  - "La medida de su contorno"
  - "La cantidad de caras que tiene"
respuesta: "La medida del espacio que ocupa en tres dimensiones"

explicacion: |
  Se mide en unidades cúbicas: cm³, m³.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["volumen", "vocabulario"]

enunciado: "¿Qué es el cubo unitario que se usa para medir volumen?"
tipo: mc
opciones_explicitas:
  - "Un cubo de 1 unidad de lado, con volumen 1"
  - "Cualquier cubo, sin importar su tamaño"
  - "Un cubo con 6 caras cuadradas"
respuesta: "Un cubo de 1 unidad de lado, con volumen 1"

explicacion: |
  Medir un volumen es, en el fondo, contar cuántos cubos unitarios entran
  adentro del cuerpo.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["prisma_rectangular", "volumen"]

variables:
  l: random(2, 20)
  a: random(2, 15)
  h: random(2, 10)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el volumen de una caja de {l} cm de largo, {a} cm de ancho y {h} cm de alto?"

pasos:
  - "{l} × {a} × {h} = {l * a * h} cm³"

explicacion: |
  El volumen de un prisma rectangular es largo × ancho × alto.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["cubo", "volumen"]

variables:
  l: random(2, 15)

respuesta: l * l * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el volumen de un cubo de {l} cm de lado?"

pasos:
  - "{l} × {l} × {l} = {l * l * l} cm³"

explicacion: |
  El volumen del cubo es el lado elevado al cubo.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "volumen"]

variables:
  l: random(2, 10)
  a: random(2, 8)
  h: random(2, 10)
  volumen: l * a * h

respuesta: h
tipo: input
tolerancia_abs: 0.01

enunciado: "Una caja de {l} cm de largo y {a} cm de ancho tiene {volumen} cm³ de volumen. ¿Cuánto mide su altura?"

pasos:
  - "{volumen} ÷ ({l} × {a}) = {volumen / (l * a)} cm"

explicacion: |
  La altura se despeja dividiendo el volumen por el área de la base
  (largo × ancho).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "volumen"]

variables:
  l: random(2, 10)
  volumen: l * l * l

respuesta: l
tipo: input
tolerancia_abs: 0.01

enunciado: "Un cubo tiene {volumen} cm³ de volumen. ¿Cuánto mide su lado?"

pasos:
  - "raiz({volumen}, 3) = {raiz(volumen, 3)} cm"

explicacion: |
  El lado es la raíz cúbica del volumen (la operación inversa de
  elevarlo al cubo).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "vocabulario"]

enunciado: "¿Qué es la capacidad de un recipiente?"
tipo: mc
opciones_explicitas:
  - "Cuánto líquido puede contener"
  - "Cuánto pesa el recipiente vacío"
  - "El área de su superficie exterior"
respuesta: "Cuánto líquido puede contener"

explicacion: |
  Se mide en litros y sus derivados (ml).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "conversion"]

respuesta: verdadero
tipo: vf

enunciado: "1 litro equivale exactamente a 1 decímetro cúbico (1 dm³)."

explicacion: |
  Es la equivalencia central entre volumen y capacidad.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "conversion"]

respuesta: verdadero
tipo: vf

enunciado: "1 mililitro equivale exactamente a 1 centímetro cúbico (1 cm³)."

explicacion: |
  Es la misma equivalencia que 1 l = 1 dm³, pero a escala mil veces más
  chica.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "conversion"]

variables:
  cm3: random(50, 900)

respuesta: cm3
tipo: input
tolerancia_abs: 0

enunciado: "Un envase tiene un volumen de {cm3} cm³. ¿Cuántos ml de líquido le entran?"

explicacion: |
  1 cm³ = 1 ml: el número no cambia, sólo el nombre de la unidad.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "conversion"]

variables:
  litros: random(1, 9)
  cm3: litros * 1000

respuesta: litros
tipo: input
tolerancia_abs: 0.01

enunciado: "Un recipiente tiene un volumen de {cm3} cm³. ¿Cuántos litros le entran?"

pasos:
  - "{cm3} cm³ = {cm3} ml = {cm3 / 1000} l (porque 1 l = 1000 ml)"

explicacion: |
  Se convierte cm³ a ml (1 a 1) y después ml a litros (÷1000).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["capacidad", "conversion"]

variables:
  m3: random(1, 8)

respuesta: m3 * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un tanque tiene {m3} m³ de volumen. ¿Cuántos litros de agua puede contener?"

pasos:
  - "1 m³ = 1000 litros, así que {m3} × 1000 = {m3 * 1000} litros"

explicacion: |
  1 metro cúbico equivale a 1000 litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["prisma_rectangular", "capacidad", "problema"]

variables:
  l: random(20, 60)
  a: random(15, 40)
  h: random(15, 30)

respuesta: (l * a * h) / 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pecera con forma de caja mide {l} cm de largo, {a} cm de ancho y {h} cm de alto. ¿Cuántos litros de agua puede contener?"

pasos:
  - "Volumen: {l} × {a} × {h} = {l * a * h} cm³. Como 1000 cm³ = 1 litro, {l * a * h} ÷ 1000 = {(l * a * h) / 1000} litros."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros usando la
  equivalencia 1000 cm³ = 1 litro.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "problema"]

variables:
  l: random(25, 35)
  a: random(15, 20)
  h: random(10, 15)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "Una caja de zapatos mide {l} cm × {a} cm × {h} cm. ¿Cuál es su volumen?"

explicacion: |
  Se aplica directamente largo × ancho × alto.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "problema"]

variables:
  l: random(2, 6)
  a: random(2, 6)
  h: random(2, 6)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos cubos de 1 cm de lado entran en una caja de {l} cm × {a} cm × {h} cm, si se apilan sin dejar huecos?"

explicacion: |
  Cada cubo de 1 cm de lado ocupa 1 cm³, así que la cantidad de cubos
  coincide con el volumen de la caja en cm³.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  l1: random(2, 10)
  a1: random(2, 10)
  h1: random(2, 10)
  l2: random(2, 10)
  a2: random(2, 10)
  h2: random(2, 10)

restricciones:
  - (l1 * a1 * h1) != (l2 * a2 * h2)

respuesta: (l1 * a1 * h1) > (l2 * a2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen una caja de {l1}×{a1}×{h1} cm, que otra de {l2}×{a2}×{h2} cm?"

pasos:
  - "Caja 1: {l1 * a1 * h1} cm³. Caja 2: {l2 * a2 * h2} cm³."

explicacion: |
  Se calcula el volumen de cada una y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El volumen se mide en unidades cúbicas, como cm³ o m³."

explicacion: |
  Es consecuencia de medir tres dimensiones a la vez (largo × ancho ×
  alto).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["vocabulario"]

respuesta: falso
tipo: vf

enunciado: "El volumen y el área miden exactamente lo mismo, sólo que con distinto nombre."

explicacion: |
  El área mide superficie (2 dimensiones, unidades cuadradas); el volumen
  mide espacio (3 dimensiones, unidades cúbicas). Son magnitudes
  distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un cubo es un caso particular de prisma rectangular, donde los tres lados son iguales."

explicacion: |
  Por eso su fórmula (l³) es la misma que largo×ancho×alto, con los tres
  valores iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["prisma_rectangular", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del volumen de un prisma rectangular?"
tipo: mc
opciones_explicitas:
  - "largo × ancho × alto"
  - "largo + ancho + alto"
  - "2 × (largo + ancho)"
respuesta: "largo × ancho × alto"

explicacion: |
  Se multiplican las tres dimensiones.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["cubo", "completar"]

variables:
  l: random(2, 12)

tipo: completar
enunciado: "Completá: el volumen de un cubo de lado {l} cm es ___ cm³."
respuestas_validas:
  - l * l * l

explicacion: |
  Volumen = lado³.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "completar"]

tipo: completar
enunciado: "Completá: 1 metro cúbico equivale a ___ litros."
respuestas_validas:
  - 1000

explicacion: |
  1 m³ = 1000 litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "verificacion"]

variables:
  l: random(2, 15)
  a: random(2, 12)
  h: random(2, 10)
  correcto: l * a * h
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de una caja de {l}×{a}×{h} cm es {mostrado} cm³."

explicacion: |
  Se recalcula largo × ancho × alto y se compara con lo mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["cubo", "capacidad", "problema"]

variables:
  l_m: random(1, 4)

respuesta: (l_m * l_m * l_m) * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un tanque cúbico mide {l_m} m de lado. ¿Cuántos litros de agua puede contener?"

pasos:
  - "Volumen: {l_m}³ = {l_m * l_m * l_m} m³. Como 1 m³ = 1000 litros, {l_m * l_m * l_m} × 1000 = {(l_m * l_m * l_m) * 1000} litros."

explicacion: |
  Primero se calcula el volumen en m³, y después se convierte a litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["cubo", "vocabulario"]

variables:
  l: random(2, 8)

respuesta: falso
tipo: vf

enunciado: "Si el lado de un cubo de {l} cm se duplica, su volumen también se duplica."

pasos:
  - "Volumen original: {l}³ = {l * l * l} cm³. Volumen con el lado doble: {2 * l}³ = {(2 * l) * (2 * l) * (2 * l)} cm³."

explicacion: |
  El volumen se multiplica por 2³ = 8, no por 2: al duplicar el lado, el
  volumen queda ocho veces más grande, no el doble.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["prisma_rectangular", "problema"]

variables:
  l_chica: random(2, 5)
  factor: random(2, 4)
  l_grande: l_chica * factor

respuesta: factor * factor * factor
tipo: input
tolerancia_abs: 0

enunciado: "Una caja cúbica grande mide {l_grande} cm de lado y una caja cúbica chica mide {l_chica} cm de lado. ¿Cuántas cajas chicas entran exactamente en la grande?"

pasos:
  - "Volumen grande: {l_grande}³ = {l_grande * l_grande * l_grande} cm³. Volumen chica: {l_chica}³ = {l_chica * l_chica * l_chica} cm³. {l_grande * l_grande * l_grande} ÷ {l_chica * l_chica * l_chica} = {(l_grande * l_grande * l_grande) / (l_chica * l_chica * l_chica)}."

explicacion: |
  Se divide el volumen grande por el volumen chico.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["comparacion"]

enunciado: "¿Cuál de estas capacidades es mayor?"
tipo: mc
opciones_explicitas:
  - "2000 ml"
  - "1 litro"
  - "500 ml"
respuesta: "2000 ml"

explicacion: |
  2000 ml = 2 litros, más que 1 litro o 500 ml.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["orden", "capacidad"]

tipo: ordenar
enunciado: "Ordená estas capacidades de menor a mayor: 3 litros, 250 ml, 1500 ml, 0,5 litros."
opciones_explicitas:
  - "3 litros"
  - "1500 ml"
  - "250 ml"
  - "0,5 litros"
respuesta_orden: ["250 ml", "0,5 litros", "1500 ml", "3 litros"]

pasos:
  - "En ml: 3 litros = 3000 ml; 250 ml; 1500 ml; 0,5 litros = 500 ml."

explicacion: |
  Conviene pasar todo a la misma unidad antes de comparar: 250 < 500 <
  1500 < 3000.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "capacidad"]

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un cubo de 1 metro de lado tiene un volumen de 1 m³. ¿A cuántos litros equivale eso?"

explicacion: |
  1 m³ = 1000 litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular cuántos litros de líquido entran en un recipiente es, en el fondo, calcular su volumen y después convertirlo a litros."

explicacion: |
  Volumen y capacidad son el mismo concepto físico, medido con distintas
  unidades — por eso 1 dm³ = 1 litro.
```

## Sección: suma-de-vectores-y-descomposicion (27 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "basico"
  tags: ["suma_vectores", "vocabulario"]

enunciado: "¿Cómo se suman dos vectores usando sus componentes?"
tipo: mc
opciones_explicitas:
  - "Se suman las componentes x entre sí, y por separado las componentes y entre sí"
  - "Se suman todas las componentes en un solo número"
  - "Se multiplican las componentes de un vector por las del otro"
respuesta: "Se suman las componentes x entre sí, y por separado las componentes y entre sí"

explicacion: |
  (x₁,y₁) + (x₂,y₂) = (x₁+x₂, y₁+y₂).
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "problema"]

variables:
  x1: random(1, 10)
  y1: random(1, 10)
  x2: random(1, 10)
  y2: random(1, 10)

respuesta: x1 + x2
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es la componente x del vector resultante?"

pasos:
  - "{x1} + {x2} = {x1 + x2}"

explicacion: |
  Se suman sólo las dos componentes x.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "problema"]

variables:
  x1: random(1, 10)
  y1: random(1, 10)
  x2: random(1, 10)
  y2: random(1, 10)

respuesta: y1 + y2
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es la componente y del vector resultante?"

pasos:
  - "{y1} + {y2} = {y1 + y2}"

explicacion: |
  Se suman sólo las dos componentes y.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["suma_vectores", "problema"]

variables:
  k: random(1, 6)
  x1: uno_de([1, 2, 3])
  y1: uno_de([1, 2])
  x2: (3 * k) - x1
  y2: (4 * k) - y1

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es el módulo del vector resultante?"

pasos:
  - "Suma: ({x1 + x2}, {y1 + y2})"
  - "√({x1 + x2}² + {y1 + y2}²) = {5 * k}"

explicacion: |
  Primero se suman las componentes, y recién con el resultado se aplica
  Pitágoras para hallar el módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "basico"
  tags: ["suma_vectores", "vocabulario"]

enunciado: "¿Cómo se restan dos vectores usando sus componentes?"
tipo: mc
opciones_explicitas:
  - "Se restan las componentes x entre sí, y por separado las componentes y entre sí"
  - "Se restan los módulos, sin tocar las componentes"
  - "No es posible restar vectores, sólo sumarlos"
respuesta: "Se restan las componentes x entre sí, y por separado las componentes y entre sí"

explicacion: |
  Es exactamente el mismo procedimiento que sumar, con resta en vez de
  suma.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "problema"]

variables:
  x1: random(10, 20)
  y1: random(10, 20)
  x2: random(1, 9)
  y2: random(1, 9)

respuesta: x1 - x2
tipo: input
tolerancia_abs: 0

enunciado: "Se resta el vector ({x2}, {y2}) al vector ({x1}, {y1}). ¿Cuál es la componente x del resultado?"

pasos:
  - "{x1} − {x2} = {x1 - x2}"

explicacion: |
  Se restan sólo las componentes x, en el orden dado.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué le pasa a un vector si se lo multiplica por un escalar k > 1?"
tipo: mc
opciones_explicitas:
  - "Se alarga (su módulo aumenta), sin cambiar de dirección"
  - "Se acorta"
  - "Cambia de dirección, apuntando al lado opuesto"
respuesta: "Se alarga (su módulo aumenta), sin cambiar de dirección"

explicacion: |
  Cada componente queda multiplicada por k, que es mayor a 1.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué le pasa a un vector si se lo multiplica por un escalar k, con 0 < k < 1?"
tipo: mc
opciones_explicitas:
  - "Se acorta (su módulo disminuye), sin cambiar de dirección"
  - "Se alarga"
  - "Se vuelve el vector nulo"
respuesta: "Se acorta (su módulo disminuye), sin cambiar de dirección"

explicacion: |
  Cada componente queda multiplicada por un número menor a 1.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué le pasa a un vector si se lo multiplica por un escalar negativo?"
tipo: mc
opciones_explicitas:
  - "Cambia de dirección, quedando apuntando exactamente al lado opuesto"
  - "Se vuelve el vector nulo automáticamente"
  - "No cambia nada, sólo el módulo se hace negativo"
respuesta: "Cambia de dirección, quedando apuntando exactamente al lado opuesto"

explicacion: |
  El módulo (que nunca es negativo) puede cambiar, pero la dirección
  gira 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "problema"]

variables:
  x: random(2, 10)
  oy: random(2, 10)
  k: uno_de([2, 3, 4])

respuesta: x * k
tipo: input
tolerancia_abs: 0

enunciado: "Se multiplica el vector ({x}, {oy}) por el escalar {k}. ¿Cuál es la componente x del resultado?"

pasos:
  - "{x} × {k} = {x * k}"

explicacion: |
  Cada componente se multiplica por el mismo escalar.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué es el vector opuesto de v?"
tipo: mc
opciones_explicitas:
  - "El vector -v: mismo módulo, dirección exactamente contraria (180°)"
  - "Un vector con módulo 0"
  - "Un vector perpendicular a v"
respuesta: "El vector -v: mismo módulo, dirección exactamente contraria (180°)"

explicacion: |
  Se obtiene multiplicando v por el escalar -1.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El vector opuesto de v tiene exactamente el mismo módulo que v."

explicacion: |
  Multiplicar por -1 sólo cambia la dirección, no la longitud.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar"]

respuesta: falso
tipo: vf

enunciado: "El vector opuesto de v tiene exactamente la misma dirección que v."

explicacion: |
  Tiene dirección opuesta (girada 180°), no la misma.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "vocabulario"]

enunciado: "En el método gráfico para sumar vectores, ¿cómo se dibuja el segundo vector respecto del primero?"
tipo: mc
opciones_explicitas:
  - "Empezando justo donde termina el primero (uniendo punta con cola)"
  - "Superpuesto exactamente sobre el primero"
  - "Siempre partiendo del origen, sin importar el primero"
respuesta: "Empezando justo donde termina el primero (uniendo punta con cola)"

explicacion: |
  El vector suma va desde el origen del primero hasta el extremo del
  segundo.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores"]

respuesta: verdadero
tipo: vf

enunciado: "El método gráfico (punta con cola) y el método por componentes dan exactamente el mismo vector suma."

explicacion: |
  Son dos formas distintas de llegar al mismo resultado; el de
  componentes es más preciso para calcular.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["descomposicion", "vocabulario"]

enunciado: "¿Qué es descomponer un vector?"
tipo: mc
opciones_explicitas:
  - "Hallar sus componentes x e y, a partir de su módulo y su dirección"
  - "Dividir su módulo por 2"
  - "Convertirlo en dos vectores nulos"
respuesta: "Hallar sus componentes x e y, a partir de su módulo y su dirección"

explicacion: |
  Es el proceso inverso a calcular módulo y dirección a partir de las
  componentes.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["descomposicion", "completar"]

tipo: completar
enunciado: "Completá: componente x = módulo × ___(dirección)."
respuestas_validas:
  - "cos"
  - "coseno"

explicacion: |
  La componente y usa seno en cambio.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["descomposicion", "completar"]

tipo: completar
enunciado: "Completá: componente y = módulo × ___(dirección)."
respuestas_validas:
  - "sen"
  - "seno"

explicacion: |
  La componente x usa coseno en cambio.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "problema"]

variables:
  modulo: uno_de([10, 20, 40])
  cos_30: 0.87

respuesta: redondear(modulo * cos_30, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Una fuerza tiene módulo {modulo} N y dirección 30° (cos 30° ≈ 0,87). ¿Cuál es su componente horizontal?"

pasos:
  - "{modulo} × 0,87 = {redondear(modulo * cos_30, 1)} N"

explicacion: |
  x = módulo × cos(dirección).
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "problema"]

variables:
  modulo: uno_de([10, 20, 40])
  sen_60: 0.87

respuesta: redondear(modulo * sen_60, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Una fuerza tiene módulo {modulo} N y dirección 60° (sen 60° ≈ 0,87). ¿Cuál es su componente vertical?"

pasos:
  - "{modulo} × 0,87 = {redondear(modulo * sen_60, 1)} N"

explicacion: |
  y = módulo × sen(dirección).
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "ordenar"]

enunciado: "Ordená los pasos para sumar dos vectores que no están alineados con los ejes (cada uno con su propio módulo y dirección)."
tipo: ordenar
opciones_explicitas:
  - "Calcular el módulo del vector resultante con esas componentes sumadas"
  - "Descomponer cada vector en sus componentes x e y"
  - "Sumar todas las componentes x entre sí, y todas las componentes y entre sí"
respuesta_orden: ["Descomponer cada vector en sus componentes x e y", "Sumar todas las componentes x entre sí, y todas las componentes y entre sí", "Calcular el módulo del vector resultante con esas componentes sumadas"]
explicacion: |
  Sin descomponer primero, no se pueden sumar directamente dos vectores
  con direcciones distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["suma_vectores", "problema"]

variables:
  k: random(1, 5)
  x1: uno_de([1, 2])
  y1: uno_de([1, 2, 3])
  x2: (5 * k) - x1
  y2: (12 * k) - y1

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es el módulo del vector resultante?"

pasos:
  - "Suma: ({x1 + x2}, {y1 + y2})"
  - "√({x1 + x2}² + {y1 + y2}²) = {13 * k}"

explicacion: |
  Es la terna pitagórica 5-12-13 aplicada al resultado de la suma.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar vectores por componentes funciona siempre, sin importar en qué dirección apunte cada uno."

explicacion: |
  A diferencia del método gráfico (que depende de dibujar bien), el
  método por componentes es puramente numérico y siempre da el
  resultado correcto.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Por qué hace falta descomponer las fuerzas antes de sumarlas, cuando dos personas empujan un mismo objeto desde ángulos distintos?"
tipo: mc
opciones_explicitas:
  - "Porque no se pueden sumar directamente dos vectores con direcciones distintas sin pasar por sus componentes"
  - "Porque las fuerzas nunca se pueden sumar entre sí"
  - "No hace falta descomponer nada, alcanza con sumar los módulos"
respuesta: "Porque no se pueden sumar directamente dos vectores con direcciones distintas sin pasar por sus componentes"

explicacion: |
  Sumar los módulos directamente (sin descomponer) da un resultado
  incorrecto, salvo que ambos vectores tengan la misma dirección.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "problema"]

variables:
  fx1: uno_de([10, 20])
  fx2: uno_de([5, 15])

respuesta: fx1 + fx2
tipo: input
tolerancia_abs: 0

enunciado: "Dos fuerzas actúan sobre un objeto. Al descomponerlas, la primera tiene componente horizontal {fx1} N, y la segunda {fx2} N. ¿Cuál es la componente horizontal de la fuerza neta (la suma de ambas)?"

pasos:
  - "{fx1} + {fx2} = {fx1 + fx2} N"

explicacion: |
  Las componentes horizontales de cada fuerza se suman entre sí, por
  separado de las verticales.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["suma_vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar el vector nulo a cualquier otro vector no cambia nada: da el mismo vector original."

explicacion: |
  (x, y) + (0, 0) = (x, y): el vector nulo es el "cero" de la suma de
  vectores.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber sumar y descomponer vectores?"
tipo: mc
opciones_explicitas:
  - "Para calcular el efecto neto de varias magnitudes vectoriales (fuerzas, velocidades) que actúan juntas, incluso en direcciones distintas"
  - "Sólo sirve para vectores que ya están alineados con los ejes"
  - "No tiene aplicación fuera de la matemática pura"
respuesta: "Para calcular el efecto neto de varias magnitudes vectoriales (fuerzas, velocidades) que actúan juntas, incluso en direcciones distintas"

explicacion: |
  Es el paso que conecta directamente con las leyes de Newton en
  Física.
```

## Sección: cuerpos-redondos-y-poliedros/cilindros (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

enunciado: "¿Qué es un cilindro?"
tipo: mc
opciones_explicitas:
  - "Un cuerpo redondo con dos bases circulares iguales unidas por una superficie curva"
  - "Un poliedro con caras triangulares"
  - "Un cuerpo con una sola base circular terminada en punta"
respuesta: "Un cuerpo redondo con dos bases circulares iguales unidas por una superficie curva"

explicacion: |
  Es el equivalente "redondo" de un prisma: base circular en vez de
  polígono.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

enunciado: "¿Cuáles son los dos datos que definen el tamaño de un cilindro?"
tipo: mc
opciones_explicitas:
  - "El radio de la base y la altura"
  - "El perímetro y el área"
  - "La cantidad de caras y de vértices"
respuesta: "El radio de la base y la altura"

explicacion: |
  Con el radio (r) y la altura (h) alcanza para calcular volumen y
  superficie.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula del volumen de un cilindro?"
tipo: mc
opciones_explicitas:
  - "π × r² × h"
  - "π × r × h"
  - "2 × π × r × h"
respuesta: "π × r² × h"

explicacion: |
  Área de la base circular (π × r²) por la altura.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 15)
  h: random(3, 20)

respuesta: redondear(pi * r * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³"

explicacion: |
  Se aplica π × r² × h directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  d: random(4, 30)
  h: random(3, 20)
  r: d / 2

respuesta: redondear(pi * r * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cilindro de diámetro {d} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "Radio: {d} ÷ 2 = {r} cm. Volumen: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³."

explicacion: |
  Primero hay que pasar de diámetro a radio (dividir por 2) antes de
  aplicar la fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: pi * r * r * h

respuesta: redondear(h, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cilindro de radio {r} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su altura?"

pasos:
  - "{redondear(volumen, 2)} ÷ (π × {r}²) = {redondear(volumen / (pi * r * r), 2)} cm"

explicacion: |
  Se despeja la altura dividiendo el volumen por el área de la base
  circular (π × r²).
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: pi * r * r * h

respuesta: redondear(r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cilindro de altura {h} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su radio?"

pasos:
  - "sqrt({redondear(volumen, 2)} ÷ (π × {h})) = {redondear(sqrt(volumen / (pi * h)), 2)} cm"

explicacion: |
  Se despeja: primero se divide el volumen por (π × altura), y después
  se saca la raíz cuadrada (porque el radio está al cuadrado).
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie"]

variables:
  r: random(2, 12)
  h: random(3, 20)

respuesta: redondear(2 * pi * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de la superficie lateral (curva) de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "2 × π × {r} × {h} = {redondear(2 * pi * r * h, 2)} cm²"

explicacion: |
  Es la circunferencia de la base (2πr) multiplicada por la altura —
  como "desenrollar" la parte curva en un rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "superficie"]

variables:
  r: random(2, 10)
  h: random(3, 15)

respuesta: redondear((2 * pi * r * h) + (2 * pi * r * r), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área total (lateral + las dos bases) de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "Lateral: 2 × π × {r} × {h} = {redondear(2 * pi * r * h, 2)} cm². Bases: 2 × π × {r}² = {redondear(2 * pi * r * r, 2)} cm². Total: {redondear((2 * pi * r * h) + (2 * pi * r * r), 2)} cm²."

explicacion: |
  Se suma el área lateral más las dos bases circulares.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "capacidad", "problema"]

variables:
  r: random(3, 6)
  h: random(8, 15)

respuesta: redondear((pi * r * r * h) / 1000, 3)
tipo: input
tolerancia_abs: 0.005

enunciado: "Una lata cilíndrica tiene {r} cm de radio y {h} cm de altura. ¿Cuántos litros de líquido puede contener? Redondeá a 3 decimales."

pasos:
  - "Volumen: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. En litros: {redondear(pi * r * r * h, 2)} ÷ 1000 = {redondear((pi * r * r * h) / 1000, 3)}."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros (1000 cm³ = 1
  litro).
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El cilindro NO es un poliedro, porque tiene una superficie curva (no todas sus caras son planas)."

explicacion: |
  Prismas y pirámides son poliedros (todas sus caras son polígonos
  planos); el cilindro tiene una superficie lateral curva, así que se
  clasifica como cuerpo redondo.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un cilindro tiene dos bases circulares, iguales y paralelas."

explicacion: |
  Es la misma idea que las dos bases de un prisma, pero circulares en
  vez de poligonales.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El volumen del cilindro se calcula con la misma lógica que el de un prisma (área de la base por altura), sólo que la base es un círculo."

explicacion: |
  V = π×r²×h es exactamente área de la base (π×r²) por altura, igual
  patrón que `../prismas/`.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 8)
  h: random(3, 12)

respuesta: falso
tipo: vf

enunciado: "Si el radio de un cilindro de {r} cm y altura {h} cm se duplica (manteniendo la misma altura), su volumen también se duplica."

pasos:
  - "Volumen original: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. Con el radio doble: π × {2 * r}² × {h} = {redondear(pi * (2 * r) * (2 * r) * h, 2)} cm³."

explicacion: |
  Como el radio está al cuadrado en la fórmula, duplicarlo multiplica el
  volumen por 4, no por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 8)
  h: random(3, 12)

respuesta: verdadero
tipo: vf

enunciado: "Si la altura de un cilindro de radio {r} cm y altura {h} cm se duplica (manteniendo el mismo radio), su volumen también se duplica."

pasos:
  - "Volumen original: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. Con la altura doble: π × {r}² × {2 * h} = {redondear(pi * r * r * (2 * h), 2)} cm³."

explicacion: |
  A diferencia del radio, la altura NO está al cuadrado en la fórmula:
  duplicarla sí duplica el volumen.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "comparacion"]

variables:
  r1: random(2, 10)
  h1: random(3, 15)
  r2: random(2, 10)
  h2: random(3, 15)

restricciones:
  - (r1 * r1 * h1) != (r2 * r2 * h2)

respuesta: (r1 * r1 * h1) > (r2 * r2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen un cilindro de radio {r1} cm y altura {h1} cm, que otro de radio {r2} cm y altura {h2} cm?"

pasos:
  - "Como ambos multiplican por π, alcanza con comparar r² × h: {r1}² × {h1} = {r1 * r1 * h1} contra {r2}² × {h2} = {r2 * r2 * h2}."

explicacion: |
  Se puede comparar sin calcular π × r² × h completo, porque el factor π
  es el mismo en los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie", "vocabulario"]

enunciado: "¿Cuál es la fórmula del área lateral (curva) de un cilindro?"
tipo: mc
opciones_explicitas:
  - "2 × π × r × h"
  - "π × r²"
  - "π × r² × h"
respuesta: "2 × π × r × h"

explicacion: |
  Es la circunferencia de la base (2πr) por la altura — como
  "desenrollar" la superficie curva en un rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si se \"desenrolla\" la superficie lateral de un cilindro, queda un rectángulo cuyo largo es la circunferencia de la base y cuyo ancho es la altura del cilindro."

explicacion: |
  Se retoma en detalle en `../desarrollo-plano/`.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "completar"]

tipo: completar
enunciado: "Completá: el volumen del cilindro es π por el radio al cuadrado, por la ___."
respuestas_validas:
  - "altura"

explicacion: |
  V = π × r² × h.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "completar"]

variables:
  r: random(2, 8)
  h: random(3, 12)

tipo: completar
enunciado: "Completá: el volumen de un cilindro de radio {r} cm y altura {h} cm es ___ cm³ (redondeado a 2 decimales)."
respuestas_validas:
  - redondear(pi * r * r * h, 2)

explicacion: |
  V = π × r² × h.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "prisma", "problema"]

variables:
  r: random(3, 10)
  h: random(3, 15)

respuesta: (r * r) * h
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma de base cuadrada tiene {r} cm de lado y {h} cm de altura. ¿Cuál es su volumen?"

explicacion: |
  Volumen del prisma cuadrado: lado² × altura — sirve como referencia
  para comparar con un cilindro de radio equivalente en el próximo
  ejercicio.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "verificacion"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  correcto: redondear(pi * r * r * h, 1)
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de un cilindro de radio {r} cm y altura {h} cm es {mostrado} cm³ (redondeado a 1 decimal)."

explicacion: |
  Se recalcula π × r² × h y se compara con el valor mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "comparacion"]

enunciado: "¿Cuál de estos cilindros tiene mayor volumen: uno de radio 4 cm y altura 10 cm, o uno de radio 5 cm y altura 6 cm?"
tipo: mc
opciones_explicitas:
  - "Radio 4 cm y altura 10 cm"
  - "Radio 5 cm y altura 6 cm"
respuesta: "Radio 4 cm y altura 10 cm"

pasos:
  - "r²×h: 4² × 10 = 160 contra 5² × 6 = 150."

explicacion: |
  Aunque el segundo tiene mayor radio, el primero gana porque el radio
  al cuadrado no compensa la diferencia de altura en este caso.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "orden"]

tipo: ordenar
enunciado: "Ordená estos cilindros de menor a mayor volumen (comparando r²×h, ya que todos comparten el factor π): radio 2 y altura 20; radio 5 y altura 2; radio 3 y altura 8; radio 4 y altura 6."
opciones_explicitas:
  - "Radio 3 y altura 8"
  - "Radio 2 y altura 20"
  - "Radio 4 y altura 6"
  - "Radio 5 y altura 2"
respuesta_orden: ["Radio 5 y altura 2", "Radio 3 y altura 8", "Radio 2 y altura 20", "Radio 4 y altura 6"]
pasos:
  - "r²×h: 2²×20=80; 5²×2=50; 3²×8=72; 4²×6=96."

explicacion: |
  Se calcula r²×h para cada uno (el factor π es común a todos, así que
  no hace falta calcularlo) y se ordena: 50 < 72 < 80 < 96.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La fórmula del volumen del cilindro usa el diámetro al cuadrado, no el radio al cuadrado."

explicacion: |
  Usa el RADIO al cuadrado (V = π × r² × h). Si sólo se conoce el
  diámetro, hay que dividirlo por 2 primero para obtener el radio.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo lo que hace falta saber para calcular el volumen o la superficie de un cilindro es el radio de su base circular y su altura."

explicacion: |
  Con esos dos datos alcanza para aplicar todas las fórmulas del cilindro
  vistas en este módulo.
```

