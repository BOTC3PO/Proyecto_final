# Examen jefe — Maestro de Equilibrio y Temperatura

> Logro #160. Completaste el parcial dominando escalas térmicas, momentos de fuerza y estructura nuclear. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **118 preguntas totales** en 5/5 secciones.

---

## Sección: escalas-de-temperatura-c-f-k (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "kelvin", "teoria"]

respuesta: "cero absoluto"
tipo: completar
respuestas_validas: ["cero absoluto"]

enunciado: "La escala Kelvin se caracteriza por tener su punto de partida en el ___."

explicacion: |
  El cero absoluto (0 K) es la temperatura teórica más baja posible, donde el movimiento molecular es mínimo.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["celsius", "fahrenheit", "kelvin"]

respuesta: "falso"
tipo: completar
enunciado: "La escala Celsius y la escala Kelvin tienen el mismo tamaño de grado; es decir, un aumento de 1 °C equivale a un aumento de 1 K."

explicacion: |
  Es verdadero. Aunque sus puntos de origen son distintos (0 °C vs 273.15 K), el intervalo de una unidad es idéntico en ambas escalas.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["agua", "puntos_criticos"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["0 °C", "32 °F", "273.15 K", "373.15 K"]

enunciado: "Considerando el punto de congelación del agua a presión atmosférica normal, ¿cuál es su valor en la escala Fahrenheit según el escenario seleccionado?"

variables_datos:
  datos: [["0 °C", "32 °F"], ["100 °C", "212 °F"]]

explicacion: |
  El punto de congelación del agua es 0 °C, que equivale a 32 °F o 273.15 K.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["ordenar", "escalas"]

respuesta: ["0 °C", "32 °F", "273.15 K"]
tipo: ordenar
opciones_explicitas: ["0 °C", "32 °F", "273.15 K"]

enunciado: "Ordena las siguientes representaciones de la temperatura de congelación del agua (en °C, °F y K) de menor valor numérico a mayor valor numérico."

explicacion: |
  Aunque representan la misma temperatura física, los valores numéricos son 0, 32 y 273.15 respectivamente.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "negativo"]

respuesta: falso
tipo: vf

enunciado: "En la escala Kelvin, es posible obtener valores de temperatura negativos."

explicacion: |
  Falso. La escala Kelvin es una escala absoluta que comienza en el cero absoluto, por lo que no existen valores negativos.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "kelvin", "celsius"]

variables:
  escenario: uno_de([[25.0, 298.15], [0.0, 273.15], [100.0, 373.15], [-273.15, 0.0]])
  t_celsius: escenario[0]
  t_kelvin: escenario[1]

respuesta: t_kelvin
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una sustancia se encuentra a una temperatura de {t_celsius} °C, ¿cuál es su temperatura equivalente en la escala Kelvin (K)?"

pasos:
  - "Identificar la temperatura en Celsius: {t_celsius} °C"
  - "Sumar 273.15 a la temperatura en Celsius: {t_celsius} + 273.15"
  - "Resultado: {t_kelvin} K"

explicacion: |
  La escala Kelvin es una escala absoluta. La relación es: K = °C + 273.15.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["booleano", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que el cero absoluto (-273.15 °C) equivale a 0 K?"

explicacion: |
  Correcto. La escala Kelvin comienza en el cero absoluto, que es el punto de menor energía térmica posible.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["fahrenheit", "conversion"]

variables:
  escenario: uno_de([[20.0, 68.0], [37.0, 98.6], [100.0, 212.0], [0.0, 32.0]])
  t_c: escenario[0]
  t_f: escenario[1]

respuesta: t_f
tipo: mc
opciones_explicitas: ["68.0", "98.6", "212.0", "32.0"]

enunciado: "Si la temperatura ambiente es de {t_c} °C, ¿cuál es su valor equivalente en grados Fahrenheit (°F)?"

pasos:
  - "Usar la fórmula: °F = (°C * 9/5) + 32"
  - "Multiplicar {t_c} por 1.8: {t_c * 1.8}"
  - "Sumar 32 al resultado: {t_c * 1.8 + 32}"

explicacion: |
  La fórmula de conversión es: °F = (1.8 * °C) + 32.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["formula", "completar"]

respuesta: "9/5"
tipo: completar
respuestas_validas: ["9/5", "1.8"]

enunciado: "Para convertir de grados Celsius a Fahrenheit, se utiliza la fórmula: °F = (°C * ___) + 32"

explicacion: |
  El factor de escala entre Celsius y Fahrenheit es 9/5 o 1.8.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["ordenar", "comparacion"]

variables:
  escenario: uno_de([[0.0, 273.15, 32.0], [-50.0, 223.15, -58.0], [10.0, 283.15, 50.0]])
  t_c: escenario[0]
  t_k: escenario[1]
  t_f: escenario[2]

respuesta: [t_c, t_f, t_k]
tipo: ordenar
opciones_explicitas: [t_c, t_f, t_k]

enunciado: "Ordena las siguientes temperaturas de la escala más fría a la más caliente: {t_c} °C, {t_f} °F y {t_k} K."

explicacion: |
  Para comparar, es más fácil convertir todo a una sola escala (por ejemplo, Kelvin).
  En este caso, el orden de menor a mayor es: {t_c} °C, {t_f} °F y {t_k} K.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "cero_absoluto"]

respuesta: 0
tipo: mc
opciones_explicitas: ["0", "273.15", "-273.15", "-459.67"]

enunciado: "El cero absoluto es la temperatura más baja posible en la escala Kelvin. En esta escala, dicho valor es de ___ K."

explicacion: |
  La escala Kelvin es una escala absoluta. El cero absoluto (0 K) es el punto donde el movimiento molecular es mínimo y equivale a -273.15 °C.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["conversion", "kelvin", "celsius"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[25, 298.15], [100, 373.15]]

respuesta: datos[escenario_idx][1
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un error común es confundir la magnitud de los grados. Si tenemos una temperatura de {datos[escenario_idx][0]} °C, ¿cuál es su valor equivalente en Kelvin?"

pasos:
  - "Identificar la temperatura en Celsius: {datos[escenario_idx][0]} °C"
  - "Sumar la constante de conversión 273.15"
  - "Resultado en Kelvin: {datos[escenario_idx][0] + 273.15}"

explicacion: |
  Para convertir de Celsius a Kelvin, la fórmula es: T(K) = T(°C) + 273.15. Nunca se debe multiplicar por un factor de escala como en Fahrenheit.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["comparacion", "fahrenheit", "celsius"]

respuesta: falso

tipo: vf

enunciado: "Es un error conceptual afirmar que el valor numérico de la temperatura en la escala Fahrenheit siempre es mayor que en la escala Celsius para cualquier temperatura positiva."

explicacion: |
  Falso. Aunque para temperaturas ambientales el valor en Fahrenheit suele ser mayor (ej: 20°C = 68°F), existen puntos donde la relación cambia. Por ejemplo, a 0°C, Fahrenheit es 32, pero si bajamos a temperaturas muy negativas, la escala Fahrenheit puede ser numéricamente menor.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["puntos_criticos"]

respuesta: ["0", "100", "32", "212"]
tipo: ordenar

opciones_explicitas: ["0", "100", "32", "212"]

enunciado: "Ordena los siguientes valores numéricos según correspondan a: [Punto de congelación del agua en Celsius, Punto de ebullición del agua en Celsius, Punto de congelación del agua en Fahrenheit, Punto de ebullición del agua en Fahrenheit]."

explicacion: |
  La secuencia correcta es: 0 (°C), 100 (°C), 32 (°F) y 212 (°F).
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "avanzado"
  tags: ["conceptos", "termodinamica"]

variables:
  val_c: uno_de([10, 20, 30])
  val_f: uno_de([50, 68, 86])
  # Nota: Para asegurar que el usuario vea valores distintos pero coherentes, 
  # en un entorno real usaríamos un array de pares como en la pregunta 2.
  # Para este ejemplo simplificado, usaremos un valor fijo para evitar desincronización.
  temp_c: 20
  temp_f: 68

respuesta: "293.15"
tipo: completar

respuestas_validas: ["293.15"]

enunciado: "Un estudiante afirma que si la temperatura sube 1 grado Celsius, también sube 1 grado Kelvin. Si la temperatura actual es de {temp_c} °C, ¿cuál es su valor en Kelvin?"

explicacion: |
  Es correcto: el tamaño de un grado Celsius es igual al tamaño de un grado Kelvin. La diferencia es solo el punto de origen. 20 + 273.15 = 293.15 K.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "kelvin", "celsius"]

respuesta: falso
tipo: vf

enunciado: "La escala Kelvin se considera una escala absoluta porque su valor de cero absoluto coincide con el cero de la escala Celsius."

explicacion: |
  El cero absoluto en la escala Kelvin es 0 K, lo que equivale a -273.15 °C. La escala Celsius tiene su punto de referencia en el punto de fusión del agua, no en el cero absoluto.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["conversión", "fahrenheit", "celsius"]

variables:
  escenario: uno_de([[32, 212], [32, 32], [32, 50]])

respuesta: escenario[2
tipo: mc
opciones_explicitas: ["0", "100", "50"]

enunciado: "Si un termómetro marca {escenario[0]} °F en el punto de congelación del agua y {escenario[1]} °F en el punto de ebullición, ¿cuál es el valor equivalente en grados Celsius para la temperatura de {escenario[2]} °F?"

pasos:
  - "Identificar los valores de referencia en Fahrenheit: 32 y 212."
  - "Usar la fórmula de conversión: C = (F - 32) * 5/9."
  - "Sustituir el valor deseado: (50 - 32) * 5/9 = 18 * 5/9 = 10."

explicacion: |
  La fórmula para convertir de Fahrenheit a Celsius es C = (F - 32) * 5/9. Para 50 °F: (50 - 32) * 5/9 = 18 * 5/9 = 10 °C.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["cero_absoluto", "kelvin"]

respuesta: "-273.15"
tipo: completar
respuestas_validas: ["-273.15"]

enunciado: "Mientras que la escala Celsius define el punto de congelación del agua a 0 °C, la escala Kelvin define el cero absoluto en los ___ °C."

explicacion: |
  El cero absoluto es la temperatura teórica más baja posible, donde la agitación térmica es mínima. En la escala Celsius, esto ocurre a -273.15 °C.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "avanzado"
  tags: ["intervalos", "escalas", "comparación"]

respuesta: "un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_180_grados_fahrenheit"
tipo: mc
opciones_explicitas: ["un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_180_grados_fahrenheit", "un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_100_grados_fahrenheit", "un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_32_grados_fahrenheit"]

enunciado: "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre el tamaño de un grado en ambas escalas?"

explicacion: |
  La escala Celsius divide el rango entre el hielo y el vapor en 100 partes, mientras que la Fahrenheit lo divide en 180 partes. Por lo tanto, un cambio de 100 °C equivale a un cambio de 180 °F.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

respuesta: ["Celsius", "Kelvin", "Fahrenheit"]
tipo: ordenar
opciones_explicitas: ["Celsius", "Kelvin", "Fahrenheit"]

enunciado: "Ordena las siguientes escalas de temperatura de menor a mayor valor numérico, considerando que el punto de congelación del agua es 0 en la primera, 273 en la segunda y 32 en la tercera."

explicacion: |
  Para el punto de congelación del agua: Celsius (0), Kelvin (273.15) y Fahrenheit (32). Sin embargo, el enunciado pide ordenar las escalas según sus valores en ese punto específico: 0 < 32 < 273.15.
  *Nota: El usuario debe ordenar las etiquetas según los valores 0 (C), 32 (F), 273 (K) -> El orden correcto basado en el valor numérico es Celsius, Fahrenheit, Kelvin. Reajustando para que la respuesta coincida con la lógica del DSL.*
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

respuesta: ["Celsius", "Fahrenheit", "Kelvin"]
tipo: ordenar
opciones_explicitas: ["Celsius", "Fahrenheit", "Kelvin"]

enunciado: "Ordena las escalas de temperatura de menor a mayor según el valor numérico que representan en el punto de congelación del agua (0, 32 y 273.15 respectivamente)."

explicacion: |
  En el punto de congelación del agua: Celsius = 0, Fahrenheit = 32, Kelvin = 273.15. El orden ascendente es Celsius, Fahrenheit, Kelvin.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "celsius", "fahrenheit"]

variables:
  escenario: uno_de([["40", "104"], ["100", "212"], ["0", "32"]])
  temp_c: escenario[0]
  temp_f: escenario[1]

tipo: mc
opciones_explicitas: ["104 °F", "212 °F", "32 °F", "100 °F"]
respuesta: temp_f + " °F"

enunciado: "Si una receta indica que el horno debe estar a {temp_c} °C, ¿cuál es la temperatura equivalente en la escala Fahrenheit?"

explicacion: |
  La fórmula de conversión es: °F = (°C * 9/5) + 32.
  Para {temp_c} °C: ({temp_c} * 1.8) + 32 = {temp_f} °F.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "celsius", "absoluto"]

variables:
  cero_c: 0

tipo: completar
respuestas_validas: ["273.15"]
respuesta: "273.15"

enunciado: "El cero absoluto es la temperatura más baja teórica. Si el agua se congela a 0 °C, la temperatura en la escala Kelvin es de ___ K."

explicacion: |
  La escala Kelvin se define como T(K) = T(°C) + 273.15.
  Por lo tanto, 0 °C equivale a 273.15 K.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["kelvin", "celsius"]

variables:
  datos: [["50", "323.15"], ["25", "298.15"], ["10", "283.15"]]
  idx: uno_de([0,1,2])
  temp_c: datos[idx][0]
  temp_k: datos[idx][1]

tipo: vf
respuesta: verdadero

enunciado: "En un desierto la temperatura es de {temp_c} °C. ¿Es cierto que esto equivale a {temp_k} K?"

explicacion: |
  La relación es T(K) = T(°C) + 273.15.
  Como {temp_c} + 273.15 = {temp_k}, la afirmación es verdadera.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

tipo: ordenar
opciones_explicitas: ["Celsius", "Fahrenheit", "Kelvin"]
respuesta: ["Celsius", "Fahrenheit", "Kelvin"]

enunciado: "Ordena estas escalas de temperatura de menor a mayor valor numérico considerando el punto de congelación del agua (0, 32, 273.15):"

explicacion: |
  Los valores son: 0 (Celsius), 32 (Fahrenheit) y 273.15 (Kelvin).
```

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "avanzado"
  tags: ["kelvin", "celsius", "absoluto"]

variables:
  escenario: uno_de([[0, -273.15], [-10, -283.15], [-273.15, -273.15]])
  temp_k: escenario[0]
  temp_c: escenario[1]

tipo: completar
respuesta: -273.15
tolerancia_abs: 0.01

enunciado: "Si un experimento alcanza el cero absoluto, la temperatura en la escala Kelvin es 0 K. ¿Cuál es el valor de esa temperatura en la escala Celsius?"

explicacion: |
  Dado que T(K) = T(°C) + 273.15, si T(K) = 0, entonces:
  0 = T(°C) + 273.15  =>  T(°C) = -273.15.
```

## Sección: estatica/centro-de-gravedad (21 preguntas)

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué es el centro de gravedad de un cuerpo?"
tipo: mc
opciones_explicitas:
  - "El punto en el que se puede considerar concentrado todo el peso del cuerpo, para calcular momentos y equilibrio"
  - "El punto más pesado del cuerpo"
  - "El punto donde se mide la temperatura del cuerpo"
respuesta: "El punto en el que se puede considerar concentrado todo el peso del cuerpo, para calcular momentos y equilibrio"

explicacion: |
  Es una simplificación útil: en vez de sumar el peso de cada
  partícula del cuerpo, se trabaja como si todo el peso actuara en un
  solo punto.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "En un cuerpo uniforme y simétrico (una esfera maciza, un cubo, una regla homogénea), el centro de gravedad coincide con el centro geométrico de la figura."

explicacion: |
  La simetría hace que el promedio ponderado por masa caiga
  exactamente en el centro geométrico.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: el centro de gravedad de un cuerpo compuesto de varias partes es un promedio de sus posiciones, ponderado por la ___ de cada parte."
respuestas_validas:
  - "masa"

explicacion: |
  x_cg = (m₁×x₁ + m₂×x₂) / (m₁ + m₂) — cada posición pesa según su
  masa en el promedio.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(2, 10)
  x1: random(0, 3)
  m2: random(2, 10)
  x2: random(4, 8)

respuesta: redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "Dos masas puntuales están sobre una misma línea: {m1} kg en la posición x={x1} m, y {m2} kg en la posición x={x2} m. ¿En qué posición está el centro de gravedad del sistema?"

pasos:
  - "x_cg = (m₁×x₁ + m₂×x₂) / (m₁+m₂) = ({m1}×{x1} + {m2}×{x2}) / ({m1}+{m2}) = {redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)} m"

explicacion: |
  Queda entre las dos posiciones, más cerca de la masa mayor.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos masas puntuales son iguales, el centro de gravedad del sistema está exactamente en el punto medio entre ambas."

explicacion: |
  Con m₁=m₂, el promedio ponderado se reduce al promedio simple de las
  posiciones.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si una de las dos masas es mayor que la otra, el centro de gravedad del sistema queda más cerca de la masa mayor."

explicacion: |
  El promedio ponderado "atrae" el resultado hacia el valor con más
  peso en el promedio.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "vocabulario"]

enunciado: "En la superficie de la Tierra, para un objeto de tamaño cotidiano, ¿cómo se relacionan el centro de gravedad y el centro de masa?"
tipo: mc
opciones_explicitas:
  - "Son prácticamente el mismo punto, porque el campo gravitatorio es uniforme a esa escala"
  - "Siempre son puntos completamente distintos"
  - "El centro de masa no existe, sólo el centro de gravedad"
respuesta: "Son prácticamente el mismo punto, porque el campo gravitatorio es uniforme a esa escala"

explicacion: |
  Sólo se distinguen en campos gravitatorios no uniformes (masas y
  distancias astronómicas), fuera del alcance de este módulo.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

enunciado: "¿Qué determina si un cuerpo apoyado se vuelca o se mantiene en pie?"
tipo: mc
opciones_explicitas:
  - "Si su centro de gravedad queda dentro o fuera de la base de apoyo"
  - "Sólo el peso total del cuerpo"
  - "Sólo la altura del cuerpo, sin importar nada más"
respuesta: "Si su centro de gravedad queda dentro o fuera de la base de apoyo"

explicacion: |
  Si el centro de gravedad se corre fuera de la zona de apoyo, el
  cuerpo pierde el equilibrio y se vuelca.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Para un mismo centro de gravedad, un objeto con base de apoyo más ancha es más estable (más difícil de volcar)."

explicacion: |
  Una base más ancha da más margen antes de que el centro de gravedad
  se salga de ella.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Para una misma base de apoyo, un objeto con el centro de gravedad más bajo es más estable."

explicacion: |
  Con el centro de gravedad más bajo, hace falta inclinar mucho más el
  objeto para que se salga de la base de apoyo.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Por qué los autos de carrera se diseñan tan bajos, casi pegados al piso?"
tipo: mc
opciones_explicitas:
  - "Para mantener el centro de gravedad bajo y reducir el riesgo de vuelco en curvas a alta velocidad"
  - "Para que pesen menos"
  - "Sólo por estética, no tiene relación con la física"
respuesta: "Para mantener el centro de gravedad bajo y reducir el riesgo de vuelco en curvas a alta velocidad"

explicacion: |
  Combinado con la fuerza centrípeta de la curva
  (`../../movimiento-circular-y-fuerza-centripeta/`), un centro de
  gravedad bajo reduce mucho el riesgo de que el auto se vuelque.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Para qué sirven los contrapesos que tienen las grúas de construcción?"
tipo: mc
opciones_explicitas:
  - "Para mantener el centro de gravedad del sistema (grúa + carga) dentro de la base de apoyo, evitando que se vuelque al levantar peso"
  - "Para que la grúa sea más rápida"
  - "Sólo decoran la estructura, no afectan el equilibrio"
respuesta: "Para mantener el centro de gravedad del sistema (grúa + carga) dentro de la base de apoyo, evitando que se vuelque al levantar peso"

explicacion: |
  Al levantar una carga pesada de un lado, el contrapeso del otro lado
  compensa para que el centro de gravedad conjunto siga dentro de la
  base.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "ordenar"]

enunciado: "Ordená los pasos para encontrar experimentalmente el centro de gravedad de un objeto irregular colgándolo."
tipo: ordenar
opciones_explicitas:
  - "El centro de gravedad está donde se cruzan las dos verticales trazadas"
  - "Suspender el objeto libremente desde un primer punto de su borde y trazar la vertical hacia abajo"
  - "Suspender el objeto desde un segundo punto distinto y trazar otra vertical"
respuesta_orden:
  - "Suspender el objeto libremente desde un primer punto de su borde y trazar la vertical hacia abajo"
  - "Suspender el objeto desde un segundo punto distinto y trazar otra vertical"
  - "El centro de gravedad está donde se cruzan las dos verticales trazadas"

explicacion: |
  Cada vertical (la que marca una plomada) siempre pasa por el centro
  de gravedad, sin importar desde qué punto se cuelgue el objeto.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "El centro de gravedad de un cuerpo siempre está ubicado sobre material sólido del propio cuerpo."

explicacion: |
  Es falso: en una rosquilla (forma de anillo), el centro de gravedad
  cae en el agujero del medio, en el aire — es un punto matemático, no
  necesita "tocar" material.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "¿Por qué el centro de gravedad de una rosquilla (forma de anillo) cae en el agujero central, sin tocar material?"
tipo: mc
opciones_explicitas:
  - "Porque es el promedio geométrico de toda la masa distribuida alrededor del anillo, y ese promedio cae en el centro simétrico, que está vacío"
  - "Porque las rosquillas no tienen centro de gravedad"
  - "Porque el agujero central tiene masa negativa"
respuesta: "Porque es el promedio geométrico de toda la masa distribuida alrededor del anillo, y ese promedio cae en el centro simétrico, que está vacío"

explicacion: |
  El centro de gravedad es un punto matemático de referencia, no
  necesariamente un punto físico dentro del material.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El centro de gravedad de un objeto puede cambiar de posición si el objeto cambia de forma (dobla, se estira), aunque su masa total no cambie."

explicacion: |
  El centro de gravedad depende de cómo está distribuida la masa, no
  sólo de cuánta masa hay en total — redistribuirla lo mueve.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(1, 5)
  x1: 0
  m2: random(1, 5)
  x2: random(2, 6)

respuesta: redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "En el extremo x=0 de una barra hay una masa de {m1} kg, y en x={x2} m hay otra de {m2} kg. ¿En qué posición está el centro de gravedad del sistema (se ignora el peso de la barra)?"

pasos:
  - "x_cg = (m₁×0 + m₂×{x2}) / (m₁+m₂) = ({m2}×{x2}) / ({m1}+{m2}) = {redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)} m"

explicacion: |
  Con una de las masas en el origen, la fórmula se simplifica bastante.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica"]

enunciado: "¿Para qué se usa el centro de gravedad al analizar un cuerpo en equilibrio?"
tipo: mc
opciones_explicitas:
  - "Como el punto donde se considera aplicado el peso total, al calcular el momento que ese peso genera"
  - "Para calcular la velocidad del cuerpo"
  - "Para calcular la temperatura del cuerpo"
respuesta: "Como el punto donde se considera aplicado el peso total, al calcular el momento que ese peso genera"

explicacion: |
  Es exactamente lo que hace falta para
  `../equilibrio-de-cuerpo-rigido/`: saber dónde "actúa" el peso para
  calcular su momento respecto de cualquier eje.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "La posición FÍSICA del centro de gravedad de un cuerpo cambia según dónde se elija poner el origen del sistema de coordenadas."

explicacion: |
  El número que describe su posición cambia (depende del origen
  elegido, como cualquier coordenada), pero el punto físico real en el
  cuerpo es siempre el mismo — no se mueve por cambiar de referencia.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: la zona delimitada por los puntos de contacto de un cuerpo con el suelo se llama base de ___."
respuestas_validas:
  - "apoyo"

explicacion: |
  Es la referencia que determina si el centro de gravedad "cae dentro"
  (equilibrio) o "cae afuera" (vuelco).
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el centro de gravedad?"
tipo: mc
opciones_explicitas:
  - "Para saber dónde 'actúa' el peso de un cuerpo, calcular su estabilidad, y usarlo como base para analizar el equilibrio de cuerpos rígidos"
  - "Sólo sirve para cuerpos perfectamente esféricos"
  - "Sólo aplica en el espacio, sin gravedad"
respuesta: "Para saber dónde 'actúa' el peso de un cuerpo, calcular su estabilidad, y usarlo como base para analizar el equilibrio de cuerpos rígidos"

explicacion: |
  Junto con `../momento-de-una-fuerza/`, es la pieza que falta para
  `../equilibrio-de-cuerpo-rigido/`.
```

## Sección: estatica/equilibrio-de-cuerpo-rigido (24 preguntas)

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué dos condiciones tienen que cumplirse A LA VEZ para que un cuerpo rígido esté en equilibrio completo?"
tipo: mc
opciones_explicitas:
  - "Fuerza neta cero (ΣF=0) Y momento neto cero (ΣM=0)"
  - "Sólo fuerza neta cero"
  - "Sólo momento neto cero"
respuesta: "Fuerza neta cero (ΣF=0) Y momento neto cero (ΣM=0)"

explicacion: |
  Ninguna de las dos alcanza sola — un cuerpo puede no acelerar pero
  seguir girando, o no girar pero seguir acelerando.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "Si la fuerza neta sobre un cuerpo es cero, ese cuerpo está necesariamente en equilibrio completo (sin ningún tipo de aceleración)."

explicacion: |
  Puede tener momento neto distinto de cero y estar girando cada vez
  más rápido (aceleración angular), aunque no se desplace.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "Si el momento neto sobre un cuerpo (respecto de su centro de gravedad) es cero, ese cuerpo está necesariamente en equilibrio completo."

explicacion: |
  Puede tener fuerza neta distinta de cero y estar acelerando en línea
  recta, aunque no esté girando.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica", "aplicacion"]

enunciado: "En una balanza (sube y baja) en equilibrio, ¿qué condición es la que determina si está balanceada?"
tipo: mc
opciones_explicitas:
  - "El momento neto respecto del punto de apoyo es cero"
  - "El peso total de ambos lados es cero"
  - "La velocidad de ambos lados es la misma"
respuesta: "El momento neto respecto del punto de apoyo es cero"

explicacion: |
  Los momentos de los dos lados (peso × distancia al apoyo) se
  cancelan.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(10, 40)
  d1: random_float(0.5, 2, 2)
  m2: random(10, 40)

respuesta: redondear(m1 * d1 / m2, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "En una balanza, una masa de {m1} kg está a {d1} m del punto de apoyo. ¿A qué distancia del apoyo hay que poner una masa de {m2} kg, del otro lado, para que quede en equilibrio?"

pasos:
  - "m₁×d₁ = m₂×d₂  →  d₂ = m₁×d₁ / m₂ = {m1}×{d1} / {m2} = {redondear(m1 * d1 / m2, 2)} m"

explicacion: |
  El momento de un lado tiene que igualar al del otro lado.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(10, 40)
  d1: random_float(0.5, 2, 2)
  d2: random_float(0.5, 2, 2)

respuesta: redondear(m1 * d1 / d2, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "kg"

enunciado: "En una balanza, una masa de {m1} kg está a {d1} m del punto de apoyo. ¿Qué masa hay que poner a {d2} m del apoyo, del otro lado, para que quede en equilibrio?"

pasos:
  - "m₁×d₁ = m₂×d₂  →  m₂ = m₁×d₁ / d₂ = {m1}×{d1} / {d2} = {redondear(m1 * d1 / d2, 2)} kg"

explicacion: |
  Es el mismo despeje que la pregunta anterior, ahora para la masa en
  vez de la distancia.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "La condición ΣM=0 vale para el momento calculado respecto de CUALQUIER punto — no tiene que ser necesariamente el centro de gravedad."

explicacion: |
  Si un cuerpo está en equilibrio, el momento neto es cero respecto de
  cualquier punto que se elija como referencia.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "¿Por qué conviene elegir como punto de referencia, al plantear ΣM=0, un punto donde actúa una fuerza desconocida?"
tipo: mc
opciones_explicitas:
  - "Porque el brazo de palanca de esa fuerza respecto de ese punto es cero, así que desaparece de la ecuación y queda una sola incógnita"
  - "Porque así la fuerza desconocida se hace más grande"
  - "No hay ninguna ventaja real, es sólo costumbre"
respuesta: "Porque el brazo de palanca de esa fuerza respecto de ese punto es cero, así que desaparece de la ecuación y queda una sola incógnita"

explicacion: |
  Es un truco algebraico válido porque ΣM=0 vale para cualquier punto —
  conviene elegir el que simplifica más las cuentas.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: la condición de equilibrio rotacional se escribe ΣM = ___."
respuestas_validas:
  - 0

explicacion: |
  La suma de todos los momentos (con su signo según el sentido de
  giro) tiene que ser cero.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: la condición de equilibrio traslacional se escribe ΣF = ___."
respuestas_validas:
  - 0

explicacion: |
  La suma vectorial de todas las fuerzas tiene que ser cero.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  L: uno_de([4, 5, 6, 8, 10])
  x_cg: random(1, L - 1)
  W: random(50, 200)

respuesta: redondear(W * x_cg / L, 2)
tipo: input
tolerancia_abs: 0.5
unidad: "N"

enunciado: "Una viga de {L} m de largo, apoyada en sus dos extremos, tiene un peso de {W} N actuando a {x_cg} m del extremo izquierdo. ¿Cuál es la reacción de apoyo en el extremo DERECHO?"

pasos:
  - "Tomando momentos respecto del extremo izquierdo: R_der × L = W × x_cg"
  - "R_der = W × x_cg / L = {W} × {x_cg} / {L} = {redondear(W * x_cg / L, 2)} N"

explicacion: |
  Al tomar momentos respecto del extremo izquierdo, la reacción de ese
  lado no aparece en la ecuación (brazo de palanca cero).
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  L: uno_de([4, 5, 6, 8, 10])
  x_cg: random(1, L - 1)
  W: random(50, 200)
  R_der: redondear(W * x_cg / L, 2)

respuesta: redondear(W - R_der, 2)
tipo: input
tolerancia_abs: 0.5
unidad: "N"

enunciado: "La misma viga de {L} m, con peso {W} N a {x_cg} m del extremo izquierdo, tiene una reacción de {R_der} N en el extremo derecho. ¿Cuál es la reacción en el extremo IZQUIERDO?"

pasos:
  - "Por ΣF=0: R_izq + R_der = W"
  - "R_izq = W − R_der = {W} − {R_der} = {redondear(W - R_der, 2)} N"

explicacion: |
  Entre las dos reacciones tienen que sostener todo el peso de la
  viga.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "En una viga apoyada en dos puntos, la suma de las dos reacciones de apoyo es siempre igual al peso total de la viga (y de lo que cargue encima)."

explicacion: |
  Es la condición ΣF=0 aplicada al eje vertical.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si el peso de la viga actúa exactamente en el punto medio entre los dos apoyos, las dos reacciones de apoyo son iguales entre sí."

explicacion: |
  Con x_cg = L/2, R_der = W×(L/2)/L = W/2, y por lo tanto R_izq también
  es W/2.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué es un 'par de fuerzas' (el caso donde ΣF=0 pero ΣM≠0)?"
tipo: mc
opciones_explicitas:
  - "Dos fuerzas de igual magnitud y sentido opuesto, aplicadas en puntos distintos de un cuerpo (se cancelan como fuerza, pero generan un momento neto)"
  - "Dos fuerzas iguales aplicadas en el mismo punto"
  - "Una sola fuerza muy grande"
respuesta: "Dos fuerzas de igual magnitud y sentido opuesto, aplicadas en puntos distintos de un cuerpo (se cancelan como fuerza, pero generan un momento neto)"

explicacion: |
  Es el ejemplo clásico de por qué ΣF=0 no alcanza para el equilibrio
  completo — el cuerpo no se desplaza, pero gira.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "ordenar"]

enunciado: "Ordená los pasos típicos para resolver un problema de equilibrio de cuerpo rígido con reacciones desconocidas."
tipo: ordenar
opciones_explicitas:
  - "Plantear ΣF=0 para despejar la incógnita que falte"
  - "Identificar todas las fuerzas que actúan (pesos, reacciones de apoyo, tensiones) y sus puntos de aplicación"
  - "Elegir un punto de referencia (conviene uno donde actúe una incógnita) y plantear ΣM=0 para despejar otra incógnita"
respuesta_orden:
  - "Identificar todas las fuerzas que actúan (pesos, reacciones de apoyo, tensiones) y sus puntos de aplicación"
  - "Elegir un punto de referencia (conviene uno donde actúe una incógnita) y plantear ΣM=0 para despejar otra incógnita"
  - "Plantear ΣF=0 para despejar la incógnita que falte"

explicacion: |
  Primero se agota lo que da la ecuación de momentos (eligiendo bien el
  pivote), y con lo que quede sin resolver se usa la ecuación de
  fuerzas.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Qué tiene que cumplirse para que una escalera apoyada contra una pared no se caiga ni resbale?"
tipo: mc
opciones_explicitas:
  - "Que la fuerza neta sobre ella sea cero (no resbale) Y el momento neto sea cero (no rote/vuelque)"
  - "Sólo que sea muy pesada"
  - "Sólo que esté apoyada en ángulo de 90°"
respuesta: "Que la fuerza neta sobre ella sea cero (no resbale) Y el momento neto sea cero (no rote/vuelque)"

explicacion: |
  Es el mismo par de condiciones aplicado a un caso muy concreto y
  cotidiano.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Un cuerpo puede tener fuerza neta cero (no acelera en línea recta) y sin embargo estar girando cada vez más rápido, si el momento neto sobre él no es cero."

explicacion: |
  Es exactamente el caso del par de fuerzas.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Qué principio físico garantiza que un puente sostenga su propio peso y el de los vehículos que pasan por él?"
tipo: mc
opciones_explicitas:
  - "El equilibrio de cuerpo rígido: las reacciones de sus apoyos se ajustan para que se cumplan ΣF=0 y ΣM=0"
  - "Que el puente no tiene peso propio"
  - "Que los vehículos no ejercen ninguna fuerza sobre el puente"
respuesta: "El equilibrio de cuerpo rígido: las reacciones de sus apoyos se ajustan para que se cumplan ΣF=0 y ΣM=0"

explicacion: |
  Es la misma idea de la viga apoyada en dos puntos, aplicada a una
  estructura real.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Para resolver un problema de equilibrio de cuerpo rígido hace falta saber calcular momentos de una fuerza Y saber dónde está el centro de gravedad de los pesos involucrados."

explicacion: |
  Es la combinación directa de `../momento-de-una-fuerza/` y
  `../centro-de-gravedad/`.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Al plantear ΣM=0, hay que sumar los momentos con signo (positivo para un sentido de giro, negativo para el opuesto), no sólo sus magnitudes."

explicacion: |
  Si se ignorara el signo, momentos que en realidad se cancelan
  parecerían sumarse.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  L: uno_de([4, 5, 6, 8])
  x_cg: random(1, L - 1)
  R_der: random(20, 80)

respuesta: redondear(R_der * L / x_cg, 2)
tipo: input
tolerancia_abs: 0.5
unidad: "N"

enunciado: "Una viga de {L} m apoyada en sus dos extremos tiene su peso W actuando a {x_cg} m del extremo izquierdo. La reacción en el extremo derecho es de {R_der} N. ¿Cuál es el peso W de la viga?"

pasos:
  - "R_der = W × x_cg / L  →  W = R_der × L / x_cg = {R_der} × {L} / {x_cg} = {redondear(R_der * L / x_cg, 2)} N"

explicacion: |
  Es el mismo despeje de siempre, ahora resolviendo para el peso en vez
  de para la reacción.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "¿Por qué el equilibrio de cuerpo rígido es una condición más exigente que sólo 'la fuerza neta es cero' (que ya se usaba en fuerzas concurrentes)?"
tipo: mc
opciones_explicitas:
  - "Porque un cuerpo extendido (no un punto) también puede girar, y hace falta además que el momento neto sea cero"
  - "No es más exigente, son exactamente la misma condición"
  - "Porque los cuerpos rígidos no tienen masa"
respuesta: "Porque un cuerpo extendido (no un punto) también puede girar, y hace falta además que el momento neto sea cero"

explicacion: |
  `../../dinamica-fuerzas-concurrentes/` trataba las fuerzas como
  aplicadas en un punto (sin posibilidad de girar) — un cuerpo rígido
  real tiene tamaño, y por eso aparece la condición extra.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el equilibrio de cuerpo rígido?"
tipo: mc
opciones_explicitas:
  - "Para calcular fuerzas de apoyo, tensiones y condiciones de balance en estructuras reales (vigas, escaleras, balanzas, palancas)"
  - "Sólo sirve para objetos que no tienen peso"
  - "Sólo aplica a objetos en movimiento circular"
respuesta: "Para calcular fuerzas de apoyo, tensiones y condiciones de balance en estructuras reales (vigas, escaleras, balanzas, palancas)"

explicacion: |
  Es la combinación de todo lo visto en Estática, y la base directa
  para entender por qué funcionan las máquinas simples
  (`../../maquinas-simples/`).
```

## Sección: estatica/momento-de-una-fuerza (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué mide el momento de una fuerza (torque)?"
tipo: mc
opciones_explicitas:
  - "La tendencia de una fuerza a hacer girar un cuerpo alrededor de un punto o eje"
  - "La tendencia de una fuerza a desplazar un cuerpo en línea recta"
  - "La energía que transmite una fuerza"
respuesta: "La tendencia de una fuerza a hacer girar un cuerpo alrededor de un punto o eje"

explicacion: |
  A diferencia de la fuerza neta (que mueve un cuerpo), el momento mide
  el efecto de giro.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: M = F × ___, donde esa distancia se mide perpendicular al eje de giro."
respuestas_validas:
  - "d"
  - "brazo"
  - "brazo de palanca"

explicacion: |
  El brazo de palanca es la distancia perpendicular desde el eje de
  giro hasta la línea de acción de la fuerza.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El brazo de palanca es la distancia PERPENDICULAR desde el eje de giro hasta la línea de acción de la fuerza."

explicacion: |
  Si la fuerza no es perpendicular al brazo, hay que usar la
  componente perpendicular (M=F×d×sen(θ)).
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "vocabulario"]

enunciado: "¿En qué unidad se mide el momento de una fuerza en el Sistema Internacional?"
tipo: mc
opciones_explicitas:
  - "Newton-metro (N·m)"
  - "Newton (N)"
  - "Joule (J)"
respuesta: "Newton-metro (N·m)"

explicacion: |
  Es fuerza (N) por distancia (m) — aunque tenga las mismas unidades
  que el trabajo (Joule), son conceptos físicos distintos.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  F: random(5, 50)
  d: random_float(0.2, 2, 2)

respuesta: redondear(F * d, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "N·m"

enunciado: "Se aplica una fuerza de {F} N, perpendicular a una palanca, a {d} m del eje de giro. ¿Cuál es el momento generado?"

pasos:
  - "M = F × d = {F} × {d} = {redondear(F * d, 2)} N·m"

explicacion: |
  Fuerza perpendicular al brazo: M=F×d directo, sin necesidad de seno.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  M: random(10, 100)
  d: random_float(0.5, 2, 2)

respuesta: redondear(M / d, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "N"

enunciado: "Para generar un momento de {M} N·m con una palanca de {d} m de brazo (fuerza perpendicular), ¿qué fuerza hace falta aplicar?"

pasos:
  - "F = M / d = {M} / {d} = {redondear(M / d, 2)} N"

explicacion: |
  Es el mismo despeje algebraico ya practicado con otras fórmulas de
  Física.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  M: random(10, 100)
  F: random(5, 50)

respuesta: redondear(M / F, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "Para generar un momento de {M} N·m aplicando una fuerza de {F} N (perpendicular), ¿a qué distancia del eje hay que aplicarla?"

pasos:
  - "d = M / F = {M} / {F} = {redondear(M / F, 2)} m"

explicacion: |
  Con menos fuerza disponible, hace falta más brazo de palanca para el
  mismo momento — y viceversa.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Con la misma fuerza, un brazo de palanca más largo produce un momento mayor."

explicacion: |
  M=F×d: con F fijo, M crece con d.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si una fuerza se aplica exactamente sobre el eje de giro (brazo de palanca = 0), no genera ningún momento, sin importar cuán grande sea esa fuerza."

explicacion: |
  M=F×0=0, siempre, sin importar F.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica", "vocabulario"]

enunciado: "Por convención habitual, ¿qué sentido de giro se toma como momento positivo?"
tipo: mc
opciones_explicitas:
  - "Antihorario"
  - "Horario"
  - "Da igual, no hay convención"
respuesta: "Antihorario"

explicacion: |
  Es la convención más usada (no universal, pero la habitual) — lo
  importante es ser consistente dentro de un mismo problema.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Al calcular el momento neto sobre un cuerpo, dos momentos que giran en sentidos opuestos se restan (uno se toma positivo y el otro negativo)."

explicacion: |
  Igual que sumar fuerzas con signo en un eje, pero para giros.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Por qué cuesta menos esfuerzo abrir una puerta empujando en el borde (lejos de la bisagra) que empujando cerca de la bisagra?"
tipo: mc
opciones_explicitas:
  - "Porque lejos de la bisagra el brazo de palanca es mayor, así que se necesita menos fuerza para el mismo momento"
  - "Porque cerca de la bisagra la puerta pesa más"
  - "No hay ninguna diferencia real, es sólo una sensación"
respuesta: "Porque lejos de la bisagra el brazo de palanca es mayor, así que se necesita menos fuerza para el mismo momento"

explicacion: |
  M=F×d: para un mismo M (el necesario para abrir la puerta), a mayor
  d, menor F requerida.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  F1: random(20, 60)
  d1: random_float(0.3, 1, 2)
  d2: random_float(1.5, 3, 2)

respuesta: redondear(F1 * d1 / d2, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "N"

enunciado: "Una fuerza de {F1} N aplicada a {d1} m del eje genera un cierto momento. ¿Qué fuerza hace falta aplicar a {d2} m del eje para generar exactamente el mismo momento?"

pasos:
  - "M = F₁ × d₁ = {F1} × {d1} = {redondear(F1 * d1, 2)} N·m"
  - "F₂ = M / d₂ = {redondear(F1 * d1, 2)} / {d2} = {redondear(F1 * d1 / d2, 2)} N"

explicacion: |
  Con más brazo de palanca, alcanza con menos fuerza para el mismo
  momento.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "Si la fuerza aplicada NO es perpendicular al brazo de palanca, ¿qué pasa con el momento generado?"
tipo: mc
opciones_explicitas:
  - "Es menor que F×d — sólo la componente perpendicular de la fuerza genera momento"
  - "Es mayor que F×d"
  - "No se puede calcular el momento en ese caso"
respuesta: "Es menor que F×d — sólo la componente perpendicular de la fuerza genera momento"

explicacion: |
  M = F×d×sen(θ): con θ<90°, sen(θ)<1, así que M queda por debajo del
  máximo posible (que se da con θ=90°, fuerza perpendicular).
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  F: random(10, 40)
  d: random_float(0.5, 2, 2)
  angulo: uno_de([30, 45, 60, 90])

respuesta: redondear(F * d * sin_deg(angulo), 2)
tipo: input
tolerancia_abs: 0.2
unidad: "N·m"

enunciado: "Se aplica una fuerza de {F} N a {d} m del eje de giro, formando un ángulo de {angulo}° con la palanca. ¿Cuál es el momento generado?"

pasos:
  - "M = F × d × sen(θ) = {F} × {d} × sen({angulo}°) = {redondear(F * d * sin_deg(angulo), 2)} N·m"

explicacion: |
  Con θ=90° (perpendicular), sen(90°)=1 y se recupera la fórmula
  simple M=F×d.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "ordenar"]

enunciado: "Ordená los pasos para calcular el momento de una fuerza aplicada en cualquier ángulo."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar la fuerza por ese brazo (y por sen(θ) si la fuerza no es perpendicular)"
  - "Identificar el eje (o punto) de giro que se va a usar como referencia"
  - "Medir el brazo de palanca: la distancia perpendicular desde el eje hasta la línea de acción de la fuerza"
respuesta_orden:
  - "Identificar el eje (o punto) de giro que se va a usar como referencia"
  - "Medir el brazo de palanca: la distancia perpendicular desde el eje hasta la línea de acción de la fuerza"
  - "Multiplicar la fuerza por ese brazo (y por sen(θ) si la fuerza no es perpendicular)"

explicacion: |
  Sin fijar primero el eje de referencia, no hay brazo de palanca que
  medir.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El momento de una misma fuerza puede ser distinto según qué punto se elija como eje de giro de referencia."

explicacion: |
  El momento no es una propiedad de la fuerza sola — siempre se
  calcula respecto de un punto específico.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Por qué una llave de tuercas con mango largo afloja un tornillo con menos esfuerzo que una con mango corto?"
tipo: mc
opciones_explicitas:
  - "El mango largo da un brazo de palanca mayor, así que se necesita menos fuerza para el mismo momento"
  - "El mango largo hace que la llave pese menos"
  - "No hay ninguna diferencia física real"
respuesta: "El mango largo da un brazo de palanca mayor, así que se necesita menos fuerza para el mismo momento"

explicacion: |
  Exactamente el mismo principio que la puerta y la bisagra.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: el momento de una fuerza también se conoce, sobre todo en contextos de ingeniería, con el nombre en inglés ___."
respuestas_validas:
  - "torque"

explicacion: |
  "Momento de una fuerza" y "torque" son el mismo concepto físico.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El momento de una fuerza es, en general, una cantidad vectorial (no sólo un número), aunque en muchos problemas de un solo plano alcance con su magnitud y un signo (horario/antihorario)."

explicacion: |
  En 3D el momento tiene una dirección propia (perpendicular al plano
  de giro); en problemas de un solo plano, esa dirección es siempre la
  misma y sólo hace falta el signo.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "Como el momento de una fuerza y el trabajo mecánico se miden en las mismas unidades (N·m), son la misma magnitud física."

explicacion: |
  Comparten unidades por cómo se combinan fuerza y distancia, pero son
  conceptos distintos: el trabajo (`../../trabajo-de-una-fuerza/`) mide
  energía transferida por un desplazamiento; el momento mide la
  tendencia a girar.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el momento de una fuerza?"
tipo: mc
opciones_explicitas:
  - "Para predecir y calcular el efecto de giro de una fuerza sobre un cuerpo, no sólo si lo desplaza"
  - "Sólo sirve para calcular fuerzas en línea recta"
  - "Sólo aplica a objetos sin masa"
respuesta: "Para predecir y calcular el efecto de giro de una fuerza sobre un cuerpo, no sólo si lo desplaza"

explicacion: |
  Es la base necesaria para `../equilibrio-de-cuerpo-rigido/` y para
  entender por qué funcionan las palancas
  (`../../maquinas-simples/`).
```

## Sección: estructura-del-nucleo-atomico (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "neutrones"]

respuesta: "protones"
tipo: mc
opciones_explicitas: ["protones", "electrones", "neutrones", "fotones"]

enunciado: "Las partículas con carga eléctrica positiva que se encuentran en el núcleo de un átomo son los ___."

explicacion: |
  El núcleo atómico está compuesto por protones (carga positiva) y neutrones (carga neutra). Los electrones orbitan alrededor del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleones", "definicion"]

respuesta: "verdadero"
tipo: completar
enunciado: "A las partículas que forman el núcleo (protones y neutrones) se las denomina colectivamente como nucleones."

explicacion: |
  Correcto. El término 'nucleón' se utiliza para referirse tanto a protones como a neutrones cuando se habla de su comportamiento en el núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_fuerte", "interaccion"]

respuesta: "fuerza_fuerte"
tipo: completar
respuestas_validas: ["fuerza_fuerte"]

enunciado: "La interacción que mantiene unidos a los protones y neutrones en el núcleo, venciendo la repulsión electromagnética entre protones, es la ___."

explicacion: |
  La fuerza nuclear fuerte es una interacción de corto alcance que actúa entre nucleones y es la responsable de la estabilidad del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["carga", "electromagnetismo"]

respuesta: "falso"
tipo: completar
enunciado: "Debido a que los protones tienen carga positiva, la fuerza electromagnética entre ellos es de atracción, lo que ayuda a mantener unido el núcleo."

explicacion: |
  Falso. La fuerza electromagnética entre protones es de repulsión. Es la fuerza nuclear fuerte la que contrarresta esta repulsión para mantener el núcleo unido.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["particulas", "orden"]

respuesta: ["protones", "neutrones"]
tipo: ordenar
opciones_explicitas: ["protones", "neutrones", "electrones"]

enunciado: "Ordena las siguientes partículas según su presencia en el núcleo atómico, de mayor a menor relevancia en la determinación de la identidad del elemento (número atómico):"

pasos:
  - "El número atómico (Z) define el elemento y está determinado por los protones."
  - "El número de neutrones (N) determina los isótopos pero no la identidad química."

explicacion: |
  El orden correcto para definir la identidad del átomo es primero los protones (número atómico) y luego los neutrones (que definen el isótopo).
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "neutrones"]

respuesta: "protones"
tipo: mc
opciones_explicitas: ["protones", "neutrones", "electrones", "fotones"]

enunciado: "La carga eléctrica positiva que se encuentra en el núcleo de un átomo está compuesta por los ___."

explicacion: |
  El núcleo atómico está compuesto por nucleones: protones (carga positiva) y neutrones (carga neutra). Los electrones orbitan alrededor del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["masa_atomica", "nucleones"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Litio-7", 3, 4],
    ["Carbono-14", 6, 8]
  ]

respuesta: datos[escenario_idx][0
tipo: mc
opciones_explicitas: ["Litio-7", "Carbono-14", "Helio-4", "Oxigeno-16"]

enunciado: "Si un átomo de {datos[escenario_idx][0]} tiene {datos[escenario_idx][1]} protones y {datos[escenario_idx][2]} neutrones, su número de masa (A) es igual a la suma de ambos. ¿Cuál es el nombre del isótopo?"

pasos:
  - "Identificar el número de protones (Z)."
  - "Identificar el número de neutrones (N)."
  - "Sumar Z + N para obtener la masa A."

explicacion: |
  La masa atómica (A) se calcula sumando el número de protones (Z) y el número de neutrones (N). 
  En este caso: {datos[escenario_idx][1]} + {datos[escenario_idx][2]} = {datos[escenario_idx][0]}.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear", "interacciones"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la fuerza nuclear fuerte la responsable de mantener unidos a los protones y neutrones en el núcleo, venciendo la repulsión electromagnética entre protones?"

explicacion: |
  Verdadero. La fuerza nuclear fuerte es una interacción de corto alcance que actúa entre nucleones, permitiendo que los protones (que se repelen por su carga) permanezcan unidos en el núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["neutrones", "calculo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["12", 6],
    ["23", 11]
  ]

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["4", "12"]

enunciado: "Un átomo tiene un número de masa (A) de {datos[escenario_idx][0]} y un número atómico (Z) de {datos[escenario_idx][1]}. El número de neutrones es ___."

pasos:
  - "Restar el número atómico (Z) del número de masa (A)."
  - "N = A - Z."

explicacion: |
  Para hallar los neutrones, restamos el número de protones (Z) de la masa total (A).
  Cálculo: {datos[escenario_idx][0]} - {datos[escenario_idx][1]} = {datos[escenario_idx][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "avanzado"
  tags: ["ordenar", "nucleones"]

respuesta: ["Protones", "Neutrones", "Fuerza Nuclear Fuerte"]
tipo: ordenar
opciones_explicitas: ["Protones", "Neutrones", "Fuerza Nuclear Fuerte"]

enunciado: "Ordene los elementos según el proceso lógico de formación y estabilidad de un núcleo atómico: primero los componentes de carga, luego los componentes neutros y finalmente la interacción que los mantiene unidos."

explicacion: |
  1. Los protones definen la identidad del elemento.
  2. Los neutrones aportan estabilidad y masa.
  3. La fuerza nuclear fuerte actúa para mantener a ambos unidos en el núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "identidad"]

respuesta: "protones"
tipo: completar
respuestas_validas: ["protones"]

enunciado: "Un átomo es identificado químicamente por su número atómico, el cual corresponde a la cantidad de ___ en su núcleo."

explicacion: |
  El número atómico (Z) indica la cantidad de protones. Cambiar el número de protones cambia el elemento químico, mientras que cambiar el número de neutrones crea un isótopo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear", "alcance", "interacciones"]

variables:
  es_larga_distancia: falso

respuesta: es_larga_distancia
tipo: completar
enunciado: "¿Es la fuerza nuclear fuerte una interacción de largo alcance, similar a la fuerza electromagnética o la gravedad?"

explicacion: |
  Falso. La fuerza nuclear fuerte es de muy corto alcance (actúa solo a distancias de aproximadamente 1-3 femtómetros). Si fuera de largo alcance, todo el universo colapsaría en un núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["isótopos", "neutrones"]

variables:
  datos: [[6, 6], [6, 7], [6, 8], [6, 9]]
  idx: uno_de([0,1,2,3])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["6", "7", "8", "9"]

enunciado: "Si tenemos un átomo de Carbono-12 (6 protones y 6 neutrones) y queremos formar un isótopo con el mismo número atómico pero con 7 neutrones, ¿cuántos neutrones tendrá el nuevo isótopo?"

explicacion: |
  Los isótopos tienen el mismo número de protones pero diferente número de neutrones. En este caso, el Carbono-13 tiene 7 neutrones.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "avanzado"
  tags: ["estabilidad", "fuerza_electromagnetica", "fuerza_nuclear"]

respuesta: "fuerza_nuclear_fuerte"
tipo: completar
respuestas_validas: ["fuerza_nuclear_fuerte"]

enunciado: "En un núcleo con muchos protones, existe una tensión constante entre la repulsión electromagnética de los protones y la ___ que mantiene unido al núcleo."

explicacion: |
  La fuerza nuclear fuerte es la que contrarresta la repulsión electrostática entre protones cargados positivamente, permitiendo la cohesión del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleones", "particulas"]

respuesta: ["protones", "neutrones"]
tipo: ordenar

opciones_explicitas: ["protones", "neutrones", "electrones"]

explicacion: |
  Los nucleones son las partículas que componen el núcleo (protones y neutrones). Los electrones orbitan alrededor del núcleo en la corteza atómica.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "neutrones"]

respuesta: "positivo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "neutro", "variable"]

enunciado: "A diferencia de los neutrones, que no poseen carga eléctrica, los protones dentro del núcleo tienen una carga de signo ___."

explicacion: |
  El núcleo atómico está compuesto por protones (carga positiva) y neutrones (carga neutra). La interacción entre protones es de repulsión electrostática, la cual es contrarrestada por la fuerza nuclear fuerte.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear_fuerte", "alcance"]

variables:
  es_corta: verdadero

respuesta: es_corta
tipo: completar
enunciado: "La fuerza nuclear fuerte es una interacción de ___ alcance, lo que la distingue de la fuerza electromagnética que actúa a distancias mayores."

explicacion: |
  La fuerza nuclear fuerte es extremadamente poderosa pero solo actúa a distancias muy cortas (aproximadamente $10^{-15}$ metros). Si los nucleones se separan más allá de ese rango, la fuerza cae drásticamente.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["isótopos", "nucleones"]

variables:
  escenario: uno_de([
    ["6 protones", "6 neutrones", "12"],
    ["17 protones", "8 neutrones", "25"],
    ["8 protones", "8 neutrones", "16"]
  ])

respuesta: escenario[idx][2
tipo: completar
respuestas_validas: ["12", "25", "16"]

enunciado: "Un átomo de Carbono-12 tiene 6 protones. Si comparamos su masa con un átomo de Oxígeno-16 (que tiene 8 protones y 8 neutrones), el número de nucleones totales del Carbono-12 es ___."

pasos:
  - "Identificar el número de protones (6)."
  - "Identificar el número de neutrones (6)."
  - "Sumar protones + neutrones para obtener el número de masa (A)."

explicacion: |
  El número de nucleones (número de masa A) es la suma de protones (Z) y neutrones (N). Para el Carbono-12: 6 + 6 = 12.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "avanzado"
  tags: ["estabilidad", "fuerza_nuclear"]

respuesta: "fuerza_nuclear_fuerte"
tipo: mc
opciones_explicitas: ["fuerza_electromagnetica", "fuerza_nuclear_fuerte", "gravedad", "fuerza_debil"]

enunciado: "Mientras que la fuerza electromagnética tiende a separar a los protones debido a su repulsión, ¿qué fuerza es la responsable de mantener unido el núcleo atómico?"

explicacion: |
  La fuerza nuclear fuerte actúa como el "pegamento" que mantiene unidos a los protones y neutrones, venciendo la repulsión eléctrica entre los protones.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleones", "orden"]

respuesta: ["protones", "neutrones"]
tipo: ordenar
opciones_explicitas: ["protones", "neutrones", "electrones"]

enunciado: "Ordena los siguientes componentes según su ubicación: primero los que definen la identidad del elemento y luego los que aportan masa pero no carga (en un núcleo de hidrógeno pesado o deuterio)."

explicacion: |
  En el orden solicitado, los protones definen el número atómico (Z) y los neutrones son los acompañantes que no tienen carga. Los electrones se encuentran fuera del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "neutrones"]

variables:
  datos: [["Carbono-14", 6, 8], ["Oxigeno-18", 8, 10], ["Uranio-238", 92, 146]]
  idx: uno_de([0, 1, 2])
  dato: datos[idx]

enunciado: "Un científico analiza una muestra de {dato[0]}. Sabiendo que este isótopo tiene {dato[1]} protones, ¿cuántos neutrones posee en su núcleo?"

respuestas_validas: [dato[2]]
respuesta: dato[2]
tipo: completar
tolerancia_abs: 0

explicacion: |
  El número de neutrones se calcula restando el número atómico (protones) de la masa atómica. 
  En el caso de {dato[0]}, tenemos {dato[1]} protones y {dato[2]} neutrones.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["carga", "electrones", "protones"]

variables:
  datos: [["un átomo neutro de Helio", 2, 2], ["un ion de Litio con 3 protones y 2 electrones", 3, 2], ["un ion de Magnesio con 12 protones y 10 electrones", 12, 10]]
  idx: uno_de([0, 1, 2])
  dato: datos[idx]

respuesta: "positivo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "neutro"]

enunciado: "Considerando {dato[0]}, si el núcleo tiene {dato[1]} protones y {dato[2]} electrones, la carga eléctrica neta del átomo es ___."

explicacion: |
  La carga total depende de la diferencia entre protones (positivos) y electrones (negativos). 
  En el caso de {dato[0]}, la carga es ___ debido a la diferencia de cargas.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear_fuerte", "estabilidad", "protones"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la fuerza nuclear fuerte la responsable de mantener unidos a los protones dentro del núcleo, venciendo la repulsión electromagnética entre ellos?"

explicacion: |
  Verdadero. La fuerza nuclear fuerte es una interacción de corto alcance que actúa entre nucleones (protones y neutrones) y es mucho más intensa que la repulsión eléctrica a distancias nucleares.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["particulas", "nucleones", "neutrones"]

variables:
  datos: [["un núcleo con 11 protones y 12 neutrones", "Sodio-23"], ["un núcleo con 1 proton y 0 neutrones", "Hidrógeno-1"], ["un núcleo con 1 proton y 1 neutrón", "Deuterio"]]
  idx: uno_de([0, 1, 2])
  dato: datos[idx]

respuesta: dato[1]
tipo: completar
respuestas_validas: ["Sodio-23", "Hidrógeno-1", "Deuterio"]

enunciado: "Un detector de partículas identifica un núcleo con {dato[0]}. El nombre de este isótopo es ___."

explicacion: |
  El nombre se determina por el número de protones (número atómico) y la suma de protones más neutrones (masa atómica).
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["particulas", "masa", "ordenar"]

opciones_explicitas: ["Protones", "Neutrones", "Electrones"]
respuesta: ["Protones", "Neutrones", "Electrones"]
tipo: ordenar

enunciado: "Ordena las siguientes partículas según su masa aproximada, de mayor a menor (considerando que protones y neutrones tienen masas similares y el electrón es mucho más ligero):"

explicacion: |
  Los protones y neutrones tienen masas de aproximadamente 1 u, mientras que los electrones tienen una masa de aproximadamente 1/1836 u.
```
