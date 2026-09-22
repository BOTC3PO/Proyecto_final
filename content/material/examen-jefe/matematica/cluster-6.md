# Examen jefe — [PENDIENTE #606]

> Logro #606. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **136 preguntas totales** en 5/5 secciones.

---

## Sección: sistema-metrico-y-conversiones (32 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["sistema_metrico", "vocabulario"]

enunciado: "¿Qué es el sistema métrico decimal?"
tipo: mc
opciones_explicitas:
  - "Un sistema que organiza las unidades en múltiplos y submúltiplos de 10 de una unidad base"
  - "Un sistema que usa siempre la misma unidad para todo"
  - "Un sistema exclusivo para medir masa"
respuesta: "Un sistema que organiza las unidades en múltiplos y submúltiplos de 10 de una unidad base"

explicacion: |
  Por eso convertir siempre es multiplicar o dividir por una potencia de
  10: todo el sistema está armado alrededor del 10.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["sistema_metrico", "vocabulario"]

enunciado: "¿Cuál es la unidad base de LONGITUD en el sistema métrico?"
tipo: mc
opciones_explicitas:
  - "El metro"
  - "El gramo"
  - "El litro"
respuesta: "El metro"

explicacion: |
  Kilómetro, centímetro, milímetro: todas se definen a partir del metro.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["sistema_metrico", "vocabulario"]

enunciado: "¿Cuál es la unidad base de MASA en el sistema métrico?"
tipo: mc
opciones_explicitas:
  - "El gramo"
  - "El kilogramo"
  - "El metro"
respuesta: "El gramo"

explicacion: |
  El kilogramo (1000 g) es el que más se usa en la vida diaria, pero la
  unidad base del sistema es el gramo.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["sistema_metrico", "vocabulario"]

enunciado: "¿Cuál es la unidad base de CAPACIDAD en el sistema métrico?"
tipo: mc
opciones_explicitas:
  - "El litro"
  - "El metro"
  - "El gramo"
respuesta: "El litro"

explicacion: |
  Mililitro y kilolitro se definen a partir del litro.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos metros hay en 1 kilómetro?"

explicacion: |
  kilo- significa "mil veces": 1 km = 1000 m.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: 100
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos centímetros hay en 1 metro?"

explicacion: |
  centi- significa "un centésimo": entran 100 centímetros en 1 metro.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos milímetros hay en 1 metro?"

explicacion: |
  mili- significa "un milésimo": entran 1000 milímetros en 1 metro.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: 10
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos milímetros hay en 1 centímetro?"

explicacion: |
  1 cm = 10 mm.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

variables:
  km: random(1, 30)

respuesta: km * 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos metros equivalen {km} km?"

pasos:
  - "{km} × 1000 = {km * 1000}"

explicacion: |
  De una unidad más grande a una más chica, se multiplica por el factor.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "longitud"]

variables:
  km_original: random(1, 30)
  m: km_original * 1000

respuesta: km_original
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos kilómetros equivalen {m} m?"

pasos:
  - "{m} ÷ 1000 = {m / 1000}"

explicacion: |
  De una unidad más chica a una más grande, se divide por el factor.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

variables:
  m: random(1, 50)

respuesta: m * 100
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos centímetros equivalen {m} m?"

explicacion: |
  Se multiplica por 100.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "longitud"]

variables:
  m_original: random(1, 50)
  cm: m_original * 100

respuesta: m_original
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos metros equivalen {cm} cm?"

explicacion: |
  Se divide por 100.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

variables:
  cm: random(1, 80)

respuesta: cm * 10
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos milímetros equivalen {cm} cm?"

explicacion: |
  Se multiplica por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "avanzado"
  tags: ["conversion", "longitud"]

variables:
  km: random(1, 5)

respuesta: km * 100000
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos centímetros equivalen {km} km?"

pasos:
  - "{km} km × 1000 = {km * 1000} m. {km * 1000} m × 100 = {km * 100000} cm."

explicacion: |
  Conviene convertir en dos pasos: primero a metros, después a
  centímetros.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "masa"]

variables:
  kg: random(1, 40)

respuesta: kg * 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos gramos equivalen {kg} kg?"

explicacion: |
  1 kg = 1000 g.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "masa"]

variables:
  kg_original: random(1, 40)
  g: kg_original * 1000

respuesta: kg_original
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos kilogramos equivalen {g} g?"

explicacion: |
  Se divide por 1000.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "masa"]

variables:
  g: random(1, 60)

respuesta: g * 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos miligramos equivalen {g} g?"

explicacion: |
  1 g = 1000 mg.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "masa"]

variables:
  toneladas: random(1, 12)

respuesta: toneladas * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un camión transporta {toneladas} toneladas de carga. ¿Cuántos kilogramos son?"

explicacion: |
  1 tonelada = 1000 kg.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "capacidad"]

variables:
  l: random(1, 20)

respuesta: l * 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos mililitros equivalen {l} litros?"

explicacion: |
  1 l = 1000 ml.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "capacidad"]

variables:
  l_original: random(1, 20)
  ml: l_original * 1000

respuesta: l_original
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos litros equivalen {ml} ml?"

explicacion: |
  Se divide por 1000.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "capacidad", "problema"]

variables:
  botellas: random(2, 10)
  ml_por_botella: 500

respuesta: botellas * ml_por_botella / 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Hay {botellas} botellas de {ml_por_botella} ml cada una. ¿Cuántos litros son en total?"

pasos:
  - "{botellas} × {ml_por_botella} = {botellas * ml_por_botella} ml. {botellas * ml_por_botella} ÷ 1000 = {botellas * ml_por_botella / 1000} l."

explicacion: |
  Primero se calcula el total en ml, y después se convierte a litros.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "vocabulario"]

enunciado: "Al convertir de una unidad MÁS GRANDE a una MÁS CHICA (por ejemplo, de km a m), ¿se multiplica o se divide?"
tipo: mc
opciones_explicitas:
  - "Se multiplica"
  - "Se divide"
respuesta: "Se multiplica"

explicacion: |
  Si la unidad de destino es más chica, entran más veces: el número
  resultado es mayor, así que se multiplica.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "vocabulario"]

enunciado: "Al convertir de una unidad MÁS CHICA a una MÁS GRANDE (por ejemplo, de cm a m), ¿se multiplica o se divide?"
tipo: mc
opciones_explicitas:
  - "Se divide"
  - "Se multiplica"
respuesta: "Se divide"

explicacion: |
  Si la unidad de destino es más grande, entran menos veces: el número
  resultado es menor, así que se divide.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: verdadero
tipo: vf

enunciado: "1 km equivale a 1000 m."

explicacion: |
  kilo- significa mil veces la unidad base.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "masa"]

respuesta: falso
tipo: vf

enunciado: "1 kg equivale a 100 g."

explicacion: |
  Es un error común: 1 kg equivale a 1000 g, no a 100 g.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "capacidad"]

respuesta: verdadero
tipo: vf

enunciado: "1 litro equivale a 1000 ml."

explicacion: |
  1 l = 1000 ml.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: falso
tipo: vf

enunciado: "1 metro equivale a 10 cm."

explicacion: |
  1 metro equivale a 100 cm, no a 10 cm (que sería 1 decímetro).
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "capacidad", "volumen"]

respuesta: verdadero
tipo: vf

enunciado: "1 litro ocupa exactamente el mismo espacio que 1 decímetro cúbico (1 l = 1 dm³)."

explicacion: |
  Es la relación que conecta capacidad con volumen — se retoma en
  `../volumen-y-capacidad/`.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "completar"]

tipo: completar
enunciado: "Completá: el prefijo kilo- significa multiplicar la unidad base por ___."
respuestas_validas:
  - 1000

explicacion: |
  kilo- = mil veces.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "completar"]

tipo: completar
enunciado: "Completá: el prefijo mili- significa dividir la unidad base por ___."
respuestas_validas:
  - 1000

explicacion: |
  mili- = un milésimo.
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "longitud"]

variables:
  km: random_float(1, 9, 1)
  correcto: km * 1000

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - km * 100
  - km / 1000

enunciado: "¿Cuántos metros son {km} km?"

explicacion: |
  Se multiplica por 1000, no por 100 (eso confundiría con centímetros) ni
  se divide (eso sería para ir de m a km).
```

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "avanzado"
  tags: ["conversion", "orden", "longitud"]

tipo: ordenar
enunciado: "Ordená estas longitudes de menor a mayor: 500 mm, 2 m, 30 cm, 0,001 km."
opciones_explicitas:
  - "2 m"
  - "500 mm"
  - "0,001 km"
  - "30 cm"
respuesta_orden: ["30 cm", "500 mm", "0,001 km", "2 m"]

pasos:
  - "Todo pasado a cm: 30 cm; 500 mm = 50 cm; 0,001 km = 100 cm; 2 m = 200 cm."

explicacion: |
  Conviene pasar todas las medidas a la misma unidad antes de comparar:
  30 cm < 50 cm < 100 cm < 200 cm.
```

## Sección: correlacion-no-es-causalidad (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["correlacion", "vocabulario"]

enunciado: "¿Qué significa el principio 'correlación no implica causalidad'?"
tipo: mc
opciones_explicitas:
  - "Que dos variables correlacionadas (que se mueven juntas) no necesariamente significan que una cause a la otra"
  - "Que dos variables correlacionadas siempre están relacionadas por causalidad"
  - "Que la correlación y la causalidad son exactamente lo mismo"
respuesta: "Que dos variables correlacionadas (que se mueven juntas) no necesariamente significan que una cause a la otra"

explicacion: |
  Un coeficiente de correlación alto (`../regresion-lineal/`) no
  prueba causalidad por sí solo.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["tercera_variable", "aplicacion"]

enunciado: "Las ventas de helado y los ahogamientos en piletas están correlacionados: ambos suben en la misma época del año. ¿Cuál es la explicación real de esta correlación?"
tipo: mc
opciones_explicitas:
  - "Una tercera variable (el calor del verano) hace subir a ambas cosas a la vez, sin que ninguna cause a la otra"
  - "Comer helado causa directamente más ahogamientos"
  - "Los ahogamientos causan que suban las ventas de helado"
respuesta: "Una tercera variable (el calor del verano) hace subir a ambas cosas a la vez, sin que ninguna cause a la otra"

explicacion: |
  Es el ejemplo clásico de variable de confusión (tercera variable).
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["causalidad_inversa", "vocabulario"]

enunciado: "¿Qué es la 'causalidad inversa' como explicación alternativa a una correlación?"
tipo: mc
opciones_explicitas:
  - "Que la dirección real de la causa está invertida: no es que A cause B, sino que B cause A"
  - "Que ninguna de las dos variables está relacionada con la otra"
  - "Que la correlación calculada tiene un error de signo"
respuesta: "Que la dirección real de la causa está invertida: no es que A cause B, sino que B cause A"

explicacion: |
  Ejemplo: ¿sonreír causa felicidad, o la felicidad causa que la
  gente sonría más?
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["correlacion_espuria", "vocabulario"]

enunciado: "¿Qué es una correlación espuria (por coincidencia)?"
tipo: mc
opciones_explicitas:
  - "Una correlación fuerte entre dos variables que aparece por pura casualidad estadística, sin ningún mecanismo real que las conecte"
  - "Una correlación calculada con un método matemático incorrecto"
  - "Otro nombre para cualquier correlación negativa"
respuesta: "Una correlación fuerte entre dos variables que aparece por pura casualidad estadística, sin ningún mecanismo real que las conecte"

explicacion: |
  Como el consumo de queso mozzarella correlacionando con los
  doctorados en ingeniería civil — puro azar, sin relación real.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Dos variables pueden estar fuertemente correlacionadas sin que ninguna de las dos cause a la otra en absoluto."

explicacion: |
  Puede deberse a una tercera variable, a coincidencia, o a
  causalidad inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["tercera_variable", "problema"]

enunciado: "Las ventas de paraguas y la cantidad de accidentes de tránsito están correlacionadas: ambas suben los mismos días. ¿Cuál es la tercera variable más probable detrás de esta correlación?"
tipo: mc
opciones_explicitas:
  - "La lluvia: hace que más gente compre/use paraguas, y también que haya más accidentes (piso resbaladizo, menor visibilidad)"
  - "Los paraguas causan directamente los accidentes de tránsito"
  - "No existe ninguna explicación posible para esta correlación"
respuesta: "La lluvia: hace que más gente compre/use paraguas, y también que haya más accidentes (piso resbaladizo, menor visibilidad)"

explicacion: |
  Mismo patrón que el ejemplo de helados y ahogamientos: una tercera
  variable (el clima) mueve a ambas.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["experimento", "vocabulario"]

enunciado: "¿Cuál es la forma estándar de probar que A realmente CAUSA a B, más allá de una simple correlación?"
tipo: mc
opciones_explicitas:
  - "Un experimento controlado y aleatorizado, comparando un grupo que recibe el tratamiento contra un grupo de control"
  - "Calcular un coeficiente de correlación todavía más alto"
  - "No existe ninguna forma de probar causalidad de verdad"
respuesta: "Un experimento controlado y aleatorizado, comparando un grupo que recibe el tratamiento contra un grupo de control"

explicacion: |
  La aleatorización reparte parejo cualquier tercera variable posible
  entre ambos grupos.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["experimento"]

respuesta: verdadero
tipo: vf

enunciado: "Un estudio puramente observacional (medir variables tal como ocurren, sin intervenir) no puede, por sí solo, probar causalidad — siempre queda abierta la posibilidad de una tercera variable o causalidad inversa."

explicacion: |
  Por eso los estudios científicos serios buscan, cuando es posible,
  complementar con experimentos controlados.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un titular dice: 'Un estudio encuentra que las personas que duermen con la luz prendida tienen más problemas de salud'. ¿Qué pregunta crítica conviene hacerse antes de aceptar que dormir con luz CAUSA problemas de salud?"
tipo: mc
opciones_explicitas:
  - "¿El estudio fue un experimento controlado, o sólo observó una correlación que podría explicarse por una tercera variable (por ejemplo, quienes ya tienen problemas de salud podrían dormir distinto por otras razones)?"
  - "Ninguna pregunta hace falta, un titular de un estudio siempre implica causalidad probada"
  - "Sólo importa cuántas personas participaron en el estudio, nada más"
respuesta: "¿El estudio fue un experimento controlado, o sólo observó una correlación que podría explicarse por una tercera variable (por ejemplo, quienes ya tienen problemas de salud podrían dormir distinto por otras razones)?"

explicacion: |
  Es la aplicación directa del pensamiento crítico de este módulo a
  una noticia real.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["causalidad_inversa", "problema"]

enunciado: "Un estudio encuentra que las personas con más amigos reportan sentirse más felices. Alguien concluye: 'tener más amigos causa felicidad'. ¿Qué explicación alternativa (causalidad inversa) también es plausible?"
tipo: mc
opciones_explicitas:
  - "Que ser feliz haga a alguien más sociable y agradable de tratar, y por eso termine consiguiendo más amigos (la felicidad causaría los amigos, no al revés)"
  - "No hay ninguna explicación alternativa posible en este caso"
  - "Los amigos y la felicidad no pueden estar relacionados de ninguna forma"
respuesta: "Que ser feliz haga a alguien más sociable y agradable de tratar, y por eso termine consiguiendo más amigos (la felicidad causaría los amigos, no al revés)"

explicacion: |
  La correlación sola no distingue cuál de las dos direcciones (o
  ambas a la vez) es la real.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["experimento", "vocabulario"]

enunciado: "¿Qué caracteriza a un ensayo controlado aleatorizado (RCT)?"
tipo: mc
opciones_explicitas:
  - "Los participantes se asignan AL AZAR a un grupo que recibe el tratamiento o a un grupo de control, para poder comparar el efecto real"
  - "Los participantes eligen ellos mismos si quieren recibir el tratamiento o no"
  - "No tiene grupo de control, sólo mide a quienes ya recibieron el tratamiento"
respuesta: "Los participantes se asignan AL AZAR a un grupo que recibe el tratamiento o a un grupo de control, para poder comparar el efecto real"

explicacion: |
  Si los participantes eligieran ellos mismos su grupo, podría
  aparecer sesgo del voluntario (`../muestreo-y-sesgo/`).
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["correlacion_espuria"]

respuesta: verdadero
tipo: vf

enunciado: "Cuantos más pares de variables se comparen al azar (sin ninguna hipótesis previa), más probable es encontrar correlaciones fuertes por pura coincidencia, sin ninguna relación real de por medio."

explicacion: |
  Es la razón matemática detrás de ejemplos absurdos como el consumo
  de mozzarella correlacionando con doctorados en ingeniería civil.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["correlacion_espuria", "aplicacion"]

enunciado: "El sitio 'Spurious Correlations' (Tyler Vigen) documenta con datos reales que el consumo per cápita de queso mozzarella en EE.UU. correlaciona fuertemente, año a año, con la cantidad de doctorados otorgados en ingeniería civil. ¿Qué explica esta correlación?"
tipo: mc
opciones_explicitas:
  - "Pura coincidencia estadística: no hay ningún mecanismo real que conecte el consumo de mozzarella con los doctorados en ingeniería"
  - "El consumo de mozzarella mejora el rendimiento académico en ingeniería civil"
  - "Los doctorados en ingeniería civil aumentan la producción de mozzarella"
respuesta: "Pura coincidencia estadística: no hay ningún mecanismo real que conecte el consumo de mozzarella con los doctorados en ingeniería"

explicacion: |
  Es el ejemplo clásico de correlación espuria, usado justamente para
  ilustrar este error de razonamiento de forma memorable.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["problema"]

enunciado: "¿Cuál de estos dos casos tiene MÁS evidencia a favor de causalidad real, más allá de la correlación simple?"
tipo: mc
opciones_explicitas:
  - "Fumar y cáncer de pulmón: además de la correlación observacional, hay experimentos en animales, mecanismos biológicos conocidos (sustancias cancerígenas del humo) y estudios longitudinales que refuerzan la causalidad"
  - "Ventas de helado y ahogamientos: sólo hay una correlación estacional, sin ningún mecanismo biológico que conecte comer helado con ahogarse"
respuesta: "Fumar y cáncer de pulmón: además de la correlación observacional, hay experimentos en animales, mecanismos biológicos conocidos (sustancias cancerígenas del humo) y estudios longitudinales que refuerzan la causalidad"

explicacion: |
  La causalidad se establece con evidencia ACUMULADA de varios tipos,
  no con una sola correlación aislada.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una correlación muy fuerte (r cercano a ±1) puede ser más llamativa que una débil, pero por sí sola sigue sin probar causalidad — las mismas explicaciones alternativas (tercera variable, causalidad inversa, coincidencia) siguen siendo posibles."

explicacion: |
  La fuerza de la correlación no cambia el tipo de evidencia que
  aporta.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["experimento", "aplicacion"]

enunciado: "¿Por qué un ensayo clínico serio siempre compara el tratamiento contra un grupo de control, en vez de sólo medir a quienes recibieron el tratamiento?"
tipo: mc
opciones_explicitas:
  - "Porque sin un grupo de control no hay forma de saber si la mejora observada se debe realmente al tratamiento, o hubiera pasado igual sin él"
  - "El grupo de control es sólo un formalismo sin ninguna utilidad real"
  - "Porque la ley obliga a tener siempre un grupo de control, sin ninguna razón científica"
respuesta: "Porque sin un grupo de control no hay forma de saber si la mejora observada se debe realmente al tratamiento, o hubiera pasado igual sin él"

explicacion: |
  El grupo de control es el punto de comparación que aísla el efecto
  real del tratamiento.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["experimento", "vocabulario"]

enunciado: "¿Qué función cumple el grupo de control en un experimento?"
tipo: mc
opciones_explicitas:
  - "Sirve de punto de comparación: no recibe el tratamiento (o recibe un placebo), para poder medir qué hubiera pasado sin él"
  - "Recibe una dosis doble del tratamiento, para maximizar el efecto"
  - "Se elige siempre a mano, nunca al azar"
respuesta: "Sirve de punto de comparación: no recibe el tratamiento (o recibe un placebo), para poder medir qué hubiera pasado sin él"

explicacion: |
  Sin ese punto de comparación, no se puede aislar el efecto real del
  tratamiento.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["tercera_variable", "problema"]

enunciado: "En los incendios, se observa que a mayor cantidad de bomberos presentes, mayor es el monto de daños materiales del incendio. ¿Los bomberos CAUSAN más daños?"
tipo: mc
opciones_explicitas:
  - "No: la tercera variable es el TAMAÑO del incendio — los incendios más grandes necesitan más bomberos Y producen más daños, sin que unos causen los otros"
  - "Sí: enviar más bomberos causa directamente más daños materiales"
respuesta: "No: la tercera variable es el TAMAÑO del incendio — los incendios más grandes necesitan más bomberos Y producen más daños, sin que unos causen los otros"

explicacion: |
  Es un ejemplo clásico usado para ilustrar variables de confusión en
  cursos de estadística.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Al leer un estudio que reporta sólo una correlación (sin experimento controlado), ¿qué actitud es la más razonable?"
tipo: mc
opciones_explicitas:
  - "Tomarlo como una pista interesante que merece más investigación, sin aceptar automáticamente que una variable causa a la otra"
  - "Rechazar por completo cualquier estudio que no sea un experimento controlado"
  - "Aceptar automáticamente que la variable que aparece primero en el titular es la causa"
respuesta: "Tomarlo como una pista interesante que merece más investigación, sin aceptar automáticamente que una variable causa a la otra"

explicacion: |
  Los estudios observacionales tienen valor real (generan hipótesis a
  investigar), pero no alcanzan solos para probar causalidad.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["completar"]

tipo: completar
enunciado: "Completá: ante una correlación entre A y B, además de 'A causa B', las otras explicaciones posibles son causalidad ___, una tercera variable, o pura coincidencia."
respuestas_validas:
  - "inversa"

explicacion: |
  Las cuatro explicaciones posibles: A causa B, B causa A (inversa),
  una tercera variable causa a ambas, o coincidencia.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["experimento", "completar"]

tipo: completar
enunciado: "Completá: en un experimento aleatorizado, asignar los participantes al azar entre grupo de tratamiento y grupo de control reparte parejo cualquier ___ variable posible entre ambos grupos."
respuestas_validas:
  - "tercera"

explicacion: |
  Es la razón por la que un experimento aleatorizado permite concluir
  causalidad de una forma que un estudio observacional no puede.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve tener presente que 'correlación no implica causalidad'?"
tipo: mc
opciones_explicitas:
  - "Para leer con pensamiento crítico noticias, estudios y estadísticas, distinguiendo cuándo hay evidencia real de causalidad y cuándo sólo hay una correlación que podría explicarse de otra forma"
  - "Para rechazar automáticamente cualquier resultado estadístico, sin importar la evidencia"
  - "Sólo tiene aplicación en estudios médicos, no en otros campos"
respuesta: "Para leer con pensamiento crítico noticias, estudios y estadísticas, distinguiendo cuándo hay evidencia real de causalidad y cuándo sólo hay una correlación que podría explicarse de otra forma"

explicacion: |
  Cierra la cadena que empezó en `../regresion-lineal/`: ajustar una
  recta es sólo el primer paso, interpretarla con cuidado es el
  segundo.
```

## Sección: analisis-dimensional (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

enunciado: "¿Qué es el análisis dimensional?"
tipo: mc
opciones_explicitas:
  - "Revisar las unidades de una fórmula o resultado para verificar que tengan sentido"
  - "Contar cuántos dígitos tiene un número"
  - "Medir el tamaño de una figura con una regla"
respuesta: "Revisar las unidades de una fórmula o resultado para verificar que tengan sentido"

explicacion: |
  Sirve para detectar errores de planteo antes de mirar los números.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

enunciado: "¿Para qué sirve principalmente el análisis dimensional?"
tipo: mc
opciones_explicitas:
  - "Para detectar errores en una fórmula, aunque los números parezcan cerrar"
  - "Para hacer las cuentas más rápido"
  - "Para redondear resultados"
respuesta: "Para detectar errores en una fórmula, aunque los números parezcan cerrar"

explicacion: |
  Si las unidades no coinciden con lo esperado, hay un error en el
  planteo.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Se pueden sumar directamente 3 metros más 5 segundos, porque son sólo números."

explicacion: |
  Metros y segundos son magnitudes distintas (longitud y tiempo): no se
  pueden combinar con suma o resta.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Se pueden sumar 3 metros más 5 metros, porque tienen la misma unidad."

explicacion: |
  Con la misma unidad, la suma tiene sentido: 3 m + 5 m = 8 m.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la suma, sí se pueden multiplicar o dividir magnitudes con unidades distintas (por ejemplo, distancia dividido tiempo)."

explicacion: |
  De ahí nacen las unidades derivadas: velocidad (m/s), área (m²),
  densidad (kg/m³).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "La velocidad se calcula como distancia ÷ tiempo. ¿Cuál de estas es una unidad válida de velocidad?"
tipo: mc
opciones_explicitas:
  - "km/h"
  - "kg/h"
  - "m²"
respuesta: "km/h"

explicacion: |
  Distancia (km) dividido tiempo (h) da km/h.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "El área se calcula multiplicando dos longitudes. Si ambas están en metros, ¿en qué unidad queda el área?"
tipo: mc
opciones_explicitas:
  - "m²"
  - "m"
  - "m³"
respuesta: "m²"

explicacion: |
  Longitud × longitud = m × m = m² (metro cuadrado).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "El volumen se calcula multiplicando tres longitudes. Si las tres están en metros, ¿en qué unidad queda el volumen?"
tipo: mc
opciones_explicitas:
  - "m³"
  - "m²"
  - "m"
respuesta: "m³"

explicacion: |
  Longitud × longitud × longitud = m³ (metro cúbico).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "La densidad se calcula como masa ÷ volumen. ¿Cuál de estas es una unidad válida de densidad?"
tipo: mc
opciones_explicitas:
  - "kg/m³"
  - "kg·m³"
  - "m/kg²"
respuesta: "kg/m³"

explicacion: |
  Masa (kg) dividido volumen (m³) da kg/m³.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "La aceleración se calcula como velocidad ÷ tiempo. Si la velocidad está en m/s y el tiempo en s, ¿en qué unidad queda la aceleración?"
tipo: mc
opciones_explicitas:
  - "m/s²"
  - "m/s"
  - "s/m"
respuesta: "m/s²"

explicacion: |
  (m/s) ÷ s = m/s² — "metros por segundo, por segundo".
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

enunciado: "¿Cuál de estas operaciones NO tiene sentido dimensionalmente?"
tipo: mc
opciones_explicitas:
  - "5 metros + 3 segundos"
  - "5 metros × 3 metros"
  - "10 km ÷ 2 horas"
respuesta: "5 metros + 3 segundos"

explicacion: |
  Sumar longitud con tiempo no tiene sentido; multiplicar o dividir
  magnitudes distintas sí (da una unidad derivada).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si en una fórmula las unidades de ambos lados de la igualdad no coinciden, la fórmula tiene un error."

explicacion: |
  Es justo la base del análisis dimensional: usar las unidades como
  chequeo antes de confiar en los números.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

enunciado: "Una fórmula calcula el área de un rectángulo como base + altura (sumando, no multiplicando), con base y altura en metros. ¿Qué unidad da ese resultado?"
tipo: mc
opciones_explicitas:
  - "m (no m², así que la fórmula está mal para calcular un área)"
  - "m² (está bien)"
  - "m³ (está bien)"
respuesta: "m (no m², así que la fórmula está mal para calcular un área)"

explicacion: |
  Sumar dos longitudes da otra longitud (m), no un área (m²): el
  análisis dimensional detecta que la fórmula "base + altura" no puede
  ser el área.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "problema"]

variables:
  distancia_km: random(60, 400)
  horas: random(2, 8)

respuesta: distancia_km / horas
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {distancia_km} km en {horas} horas. ¿Cuál es su velocidad, en km/h?"

pasos:
  - "{distancia_km} km ÷ {horas} h = {distancia_km / horas} km/h"

explicacion: |
  Distancia (km) dividido tiempo (h) da directamente la unidad esperada,
  km/h — eso confirma que la fórmula está bien planteada.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "problema"]

variables:
  masa_kg: random(1, 5)
  volumen_cm3: random(200, 900)

respuesta: (masa_kg * 1000) / volumen_cm3
tipo: input
tolerancia_abs: 0.01

enunciado: "Un objeto tiene {masa_kg} kg de masa y ocupa {volumen_cm3} cm³. Para calcular la densidad en g/cm³, primero hay que convertir la masa a gramos. ¿Cuál es la densidad, en g/cm³?"

pasos:
  - "{masa_kg} kg = {masa_kg * 1000} g. {masa_kg * 1000} g ÷ {volumen_cm3} cm³ = {(masa_kg * 1000) / volumen_cm3} g/cm³."

explicacion: |
  Antes de dividir, ambas magnitudes tienen que quedar en unidades
  compatibles con lo que se pide (g y cm³, no kg y cm³) — es la conexión
  directa con `../sistema-metrico-y-conversiones/`.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si un cálculo que debía dar un área termina en una unidad como m/s, eso es una señal clara de que hay un error en el planteo."

explicacion: |
  m/s no es una unidad de área (que debería ser m²): el resultado avisa
  que algo está mal antes de mirar el número.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "El caudal de una canilla se calcula como volumen de agua ÷ tiempo. Si el volumen está en litros y el tiempo en minutos, ¿en qué unidad queda el caudal?"
tipo: mc
opciones_explicitas:
  - "l/min"
  - "min/l"
  - "l · min"
respuesta: "l/min"

explicacion: |
  Volumen (l) dividido tiempo (min) da l/min — litros por minuto.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "completar"]

tipo: completar
enunciado: "Completá: si un área se calcula multiplicando dos longitudes en centímetros, la unidad del resultado es cm___ (con el número del exponente)."
respuestas_validas:
  - 2

explicacion: |
  cm × cm = cm² (centímetro cuadrado).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "completar"]

tipo: completar
enunciado: "Completá: si un volumen se calcula multiplicando tres longitudes en centímetros, la unidad del resultado es cm___ (con el número del exponente)."
respuestas_validas:
  - 3

explicacion: |
  cm × cm × cm = cm³ (centímetro cúbico).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "orden"]

tipo: ordenar
enunciado: "Ordená los pasos para verificar una fórmula por análisis dimensional."
opciones_explicitas:
  - "Si no coinciden, revisar la fórmula: algo está mal planteado"
  - "Identificar las unidades de cada variable de la fórmula"
  - "Comparar la unidad resultante con la unidad esperada"
  - "Combinar esas unidades con las mismas operaciones (× o ÷) que usa la fórmula"
respuesta_orden: ["Identificar las unidades de cada variable de la fórmula", "Combinar esas unidades con las mismas operaciones (× o ÷) que usa la fórmula", "Comparar la unidad resultante con la unidad esperada", "Si no coinciden, revisar la fórmula: algo está mal planteado"]
explicacion: |
  Es el mismo procedimiento en todos los casos: seguir las unidades a
  través de las operaciones, no sólo los números.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que las unidades de una fórmula cierren no garantiza que el número esté bien calculado: sólo descarta un tipo de error (el de planteo), no errores aritméticos."

explicacion: |
  Una fórmula puede tener las unidades correctas y aun así tener un error
  de cuenta (por ejemplo, un factor mal multiplicado) — el análisis
  dimensional es un chequeo más, no el único.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Revisar las unidades de una fórmula antes de confiar en el resultado numérico es una forma rápida de detectar errores de planteo."

explicacion: |
  Es la idea central de todo el módulo: las unidades cuentan una historia
  que los números solos no cuentan.
```

## Sección: angulos (34 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

enunciado: "¿Qué es un ángulo?"
tipo: mc
opciones_explicitas:
  - "La abertura entre dos semirrectas que comparten un mismo origen"
  - "La distancia entre dos puntos"
  - "El área encerrada por un polígono"
respuesta: "La abertura entre dos semirrectas que comparten un mismo origen"

explicacion: |
  Ese punto de origen común es el vértice; las dos semirrectas son los
  lados del ángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

enunciado: "¿En qué unidad se mide un ángulo, y con qué instrumento?"
tipo: mc
opciones_explicitas:
  - "En grados, con el transportador"
  - "En metros, con una regla"
  - "En litros, con una probeta"
respuesta: "En grados, con el transportador"

explicacion: |
  Ver `../magnitud-unidad-instrumento/`: el grado es la unidad, el
  transportador el instrumento.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

respuesta: 360
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos grados mide una vuelta completa?"

explicacion: |
  360° es el ángulo completo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

variables:
  medida: random(1, 89)

enunciado: "Un ángulo mide {medida}°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Agudo"
  - "Obtuso"
  - "Recto"
respuesta: "Agudo"

explicacion: |
  Mide menos de 90°: es agudo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

enunciado: "Un ángulo mide 90°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Recto"
  - "Agudo"
  - "Obtuso"
respuesta: "Recto"

explicacion: |
  Exactamente 90°: es recto.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

variables:
  medida: random(91, 179)

enunciado: "Un ángulo mide {medida}°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Obtuso"
  - "Agudo"
  - "Llano"
respuesta: "Obtuso"

explicacion: |
  Mide más de 90° y menos de 180°: es obtuso.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

enunciado: "Un ángulo mide 180°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Llano"
  - "Obtuso"
  - "Completo"
respuesta: "Llano"

explicacion: |
  Exactamente 180°: sus dos lados forman una línea recta.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "clasificacion"]

variables:
  medida: random(181, 359)

enunciado: "Un ángulo mide {medida}°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Reflejo"
  - "Obtuso"
  - "Completo"
respuesta: "Reflejo"

explicacion: |
  Mide más de 180° y menos de 360°: es reflejo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "complementarios", "vocabulario"]

enunciado: "¿Cuándo dos ángulos son complementarios?"
tipo: mc
opciones_explicitas:
  - "Cuando sus medidas suman 90°"
  - "Cuando sus medidas suman 180°"
  - "Cuando miden exactamente lo mismo"
respuesta: "Cuando sus medidas suman 90°"

explicacion: |
  30° y 60° son complementarios, por ejemplo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "complementarios"]

variables:
  a: random(10, 80)

respuesta: 90 - a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el complemento de un ángulo de {a}°?"

pasos:
  - "90 − {a} = {90 - a}°"

explicacion: |
  El complemento es lo que le falta a un ángulo para llegar a 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "complementarios"]

variables:
  a: random(10, 80)
  b: uno_de([90 - a, random(10, 80)])

respuesta: (a + b == 90)
tipo: vf

enunciado: "¿Son complementarios un ángulo de {a}° y otro de {b}°?"

pasos:
  - "{a} + {b} = {a + b}"

explicacion: |
  Son complementarios sólo si la suma da exactamente 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "suplementarios", "vocabulario"]

enunciado: "¿Cuándo dos ángulos son suplementarios?"
tipo: mc
opciones_explicitas:
  - "Cuando sus medidas suman 180°"
  - "Cuando sus medidas suman 90°"
  - "Cuando uno es el doble del otro"
respuesta: "Cuando sus medidas suman 180°"

explicacion: |
  110° y 70° son suplementarios, por ejemplo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "suplementarios"]

variables:
  a: random(10, 170)

respuesta: 180 - a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el suplemento de un ángulo de {a}°?"

pasos:
  - "180 − {a} = {180 - a}°"

explicacion: |
  El suplemento es lo que le falta a un ángulo para llegar a 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "suplementarios"]

variables:
  a: random(10, 170)
  b: uno_de([180 - a, random(10, 170)])

respuesta: (a + b == 180)
tipo: vf

enunciado: "¿Son suplementarios un ángulo de {a}° y otro de {b}°?"

pasos:
  - "{a} + {b} = {a + b}"

explicacion: |
  Son suplementarios sólo si la suma da exactamente 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "adyacentes", "vocabulario"]

enunciado: "¿Cuándo dos ángulos son adyacentes?"
tipo: mc
opciones_explicitas:
  - "Cuando comparten el vértice y un lado, quedando uno al lado del otro"
  - "Cuando están opuestos por el vértice"
  - "Cuando miden exactamente lo mismo"
respuesta: "Cuando comparten el vértice y un lado, quedando uno al lado del otro"

explicacion: |
  No se superponen: quedan "pegados" por un lado en común.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "adyacentes"]

variables:
  a: random(20, 160)

respuesta: 180 - a
tipo: input
tolerancia_abs: 0

enunciado: "Dos ángulos adyacentes forman entre los dos un ángulo llano (180°). Si uno mide {a}°, ¿cuánto mide el otro?"

pasos:
  - "180 − {a} = {180 - a}°"

explicacion: |
  Cuando dos ángulos adyacentes forman un llano, también son
  suplementarios entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "opuestos_por_el_vertice", "vocabulario"]

enunciado: "Cuando dos rectas se cruzan, ¿cómo se llaman los ángulos que quedan enfrentados en diagonal?"
tipo: mc
opciones_explicitas:
  - "Opuestos por el vértice"
  - "Adyacentes"
  - "Complementarios"
respuesta: "Opuestos por el vértice"

explicacion: |
  Se forman cuando dos rectas se cortan; quedan uno frente al otro, en
  diagonal.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "opuestos_por_el_vertice"]

respuesta: verdadero
tipo: vf

enunciado: "Los ángulos opuestos por el vértice siempre son iguales entre sí."

explicacion: |
  Es una propiedad que se cumple siempre, sin importar el ángulo que
  formen las dos rectas.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "opuestos_por_el_vertice", "problema"]

variables:
  a: random(20, 160)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "Dos rectas se cruzan y uno de los cuatro ángulos formados mide {a}°. ¿Cuánto mide el ángulo opuesto por el vértice a ese?"

explicacion: |
  Los ángulos opuestos por el vértice son iguales: mide lo mismo,
  {a}°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "adyacentes", "problema"]

variables:
  a: random(20, 160)

respuesta: 180 - a
tipo: input
tolerancia_abs: 0

enunciado: "Dos rectas se cruzan y uno de los cuatro ángulos formados mide {a}°. ¿Cuánto mide cualquiera de los dos ángulos ADYACENTES a ese (los que están a su lado, no el opuesto)?"

pasos:
  - "180 − {a} = {180 - a}°, porque son suplementarios (juntos forman un ángulo llano)."

explicacion: |
  Los ángulos adyacentes al cruce son suplementarios del ángulo dado.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los ángulos formados alrededor de un mismo punto (sin superponerse) suman en total 360°."

explicacion: |
  Es una vuelta completa repartida entre todos esos ángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "problema"]

variables:
  a: random(60, 120)
  b: random(60, 120)
  c: random(60, 120)

respuesta: 360 - (a + b + c)
tipo: input
tolerancia_abs: 0

enunciado: "Alrededor de un punto hay 4 ángulos que no se superponen. Tres de ellos miden {a}°, {b}° y {c}°. ¿Cuánto mide el cuarto?"

pasos:
  - "360 − ({a} + {b} + {c}) = {360 - (a + b + c)}°"

explicacion: |
  Los 4 ángulos alrededor de un punto suman 360° en total.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

respuesta: falso
tipo: vf

enunciado: "Un ángulo recto (90°) se clasifica como agudo."

explicacion: |
  El recto es su propia categoría (exactamente 90°): no es agudo (menos
  de 90°) ni obtuso (más de 90°).
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "complementarios"]

respuesta: verdadero
tipo: vf

enunciado: "El complemento de cualquier ángulo agudo (entre 0° y 90°) siempre es también un ángulo agudo."

explicacion: |
  Si el ángulo original mide entre 0° y 90°, 90° menos ese valor da otro
  número entre 0° y 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "suplementarios"]

respuesta: verdadero
tipo: vf

enunciado: "El suplemento de un ángulo puede ser agudo, recto u obtuso, dependiendo de cuánto mida el ángulo original."

explicacion: |
  Si el original es obtuso, el suplemento es agudo (y viceversa); si el
  original mide 90°, el suplemento también mide 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "comparacion"]

variables:
  a: random(10, 170)
  b: random(10, 170)

restricciones:
  - a != b

respuesta: a > b
tipo: vf

enunciado: "¿Es mayor un ángulo de {a}° que uno de {b}°?"

explicacion: |
  Se comparan directamente los valores en grados.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "comparacion"]

variables:
  a: random(10, 89)
  b: random(91, 179)

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "¿Cuál de estos dos ángulos es mayor: {a}° o {b}°?"

explicacion: |
  Se comparan los valores directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "completar"]

variables:
  a: random(10, 80)

tipo: completar
enunciado: "Completá: el complemento de un ángulo de {a}° es ___°."
respuestas_validas:
  - 90 - a

explicacion: |
  90° menos el ángulo dado.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "completar"]

variables:
  a: random(10, 170)

tipo: completar
enunciado: "Completá: el suplemento de un ángulo de {a}° es ___°."
respuestas_validas:
  - 180 - a

explicacion: |
  180° menos el ángulo dado.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "orden"]

tipo: ordenar
enunciado: "Ordená estos ángulos de menor a mayor: 120°, 45°, 90°, 15°."
opciones_explicitas:
  - "90°"
  - "15°"
  - "120°"
  - "45°"
respuesta_orden: ["15°", "45°", "90°", "120°"]

explicacion: |
  Se comparan directamente los valores en grados.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "verificacion"]

variables:
  medida: random(91, 179)
  clasificacion_mostrada: uno_de(["obtuso", "obtuso", "obtuso", "agudo"])

respuesta: (clasificacion_mostrada == "obtuso")
tipo: vf

enunciado: "¿Está bien esta clasificación? Un ángulo de {medida}° es {clasificacion_mostrada}."

explicacion: |
  Entre 90° y 180° (sin llegar a 180°), el ángulo es obtuso.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando dos rectas se cruzan formando ángulos rectos (90°), se dice que son perpendiculares."

explicacion: |
  Es la definición de perpendicularidad en términos de ángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "problema"]

variables:
  horas: uno_de([3, 6, 9])

respuesta: (horas / 12) * 360
tipo: input
tolerancia_abs: 0

enunciado: "En un reloj analógico, las 12 horas están repartidas en 360° a su alrededor. ¿Cuántos grados recorre el minutero desde las 12 hasta marcar las {horas} en punto (pensando la esfera del reloj completa, no la posición del horario)?"

pasos:
  - "({horas} ÷ 12) × 360 = {(horas / 12) * 360}°"

explicacion: |
  Cada hora representa 360° ÷ 12 = 30° del total de la esfera del reloj.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Conocer las relaciones entre ángulos (complementarios, suplementarios, opuestos por el vértice) permite calcular la medida de un ángulo sin necesidad de medirlo con el transportador."

explicacion: |
  Es la utilidad central de este módulo, y la base para
  `../triangulos/`.
```

## Sección: cifras-significativas-y-error (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "vocabulario"]

enunciado: "¿Qué son las cifras significativas de un número medido?"
tipo: mc
opciones_explicitas:
  - "Los dígitos que aportan información real sobre la precisión de la medición"
  - "Todos los dígitos, incluidos los que sólo ubican la coma"
  - "Sólo el primer dígito del número"
respuesta: "Los dígitos que aportan información real sobre la precisión de la medición"

explicacion: |
  No incluyen los ceros que sólo sirven para ubicar la coma decimal.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "vocabulario"]

enunciado: "¿Para qué sirve expresar un resultado con la cantidad correcta de cifras significativas?"
tipo: mc
opciones_explicitas:
  - "Para no inventar precisión que el instrumento no tiene, ni desperdiciar la que sí se logró"
  - "Para que el número se vea más largo"
  - "Para redondear siempre a números enteros"
respuesta: "Para no inventar precisión que el instrumento no tiene, ni desperdiciar la que sí se logró"

explicacion: |
  Es la forma de ser honesto sobre cuánto se sabe realmente.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 305?"

explicacion: |
  Los tres dígitos son significativos: el 0 está ENTRE dos dígitos
  distintos de cero.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 0,0042?"

explicacion: |
  Los ceros a la izquierda del 4 no cuentan (sólo ubican la coma): las
  cifras significativas son 4 y 2.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 3,40?"

explicacion: |
  El cero final después de la coma SÍ es significativo: indica que se
  midió hasta el centésimo. Cifras: 3, 4 y 0.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "reglas"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 0,00500?"

explicacion: |
  Los ceros a la izquierda del 5 no cuentan; los dos ceros a la derecha
  del 5 sí (después de la coma). Cifras: 5, 0 y 0.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "reglas"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 100,0?"

explicacion: |
  Con la coma decimal presente, todos los ceros cuentan: 1, 0, 0 y 0.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "reglas"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 1200 (entero, sin coma decimal, sin ninguna aclaración extra)?"

explicacion: |
  Por convención escolar, los ceros finales de un entero sin coma se
  toman como no significativos (ambiguos): cuentan sólo el 1 y el 2.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Los ceros a la izquierda del primer dígito distinto de cero nunca son cifras significativas."

explicacion: |
  Sólo sirven para ubicar la coma decimal, como en 0,0042.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Los ceros ubicados entre dos dígitos distintos de cero siempre son cifras significativas."

explicacion: |
  Como el 0 en 305 o en 1004.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Los ceros al final de un número, después de la coma decimal, sí son cifras significativas."

explicacion: |
  Indican que se logró medir con esa precisión (por ejemplo, el 0 en
  3,40).
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["error", "vocabulario"]

enunciado: "¿Cómo se calcula el error absoluto de una medición?"
tipo: mc
opciones_explicitas:
  - "El valor absoluto de la diferencia entre el valor medido y el valor real"
  - "El valor medido dividido el valor real"
  - "La suma del valor medido y el valor real"
respuesta: "El valor absoluto de la diferencia entre el valor medido y el valor real"

explicacion: |
  Error absoluto = |medido − real|.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "calculo"]

variables:
  real: random(50, 200)
  diferencia: random(1, 10)
  medido: real + diferencia

respuesta: abs(medido - real)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se mide un objeto y da {medido} cm. El valor real es {real} cm. ¿Cuál es el error absoluto?"

pasos:
  - "|{medido} − {real}| = {abs(medido - real)} cm"

explicacion: |
  Se resta y se toma el valor absoluto (el error no es negativo).
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "vocabulario"]

enunciado: "¿Cómo se calcula el error relativo de una medición?"
tipo: mc
opciones_explicitas:
  - "Error absoluto dividido el valor real"
  - "Error absoluto multiplicado por el valor real"
  - "Valor real dividido el error absoluto"
respuesta: "Error absoluto dividido el valor real"

explicacion: |
  Error relativo = error absoluto ÷ valor real. Es un número sin unidad.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "calculo"]

variables:
  real: random(50, 200)
  diferencia: random(1, 10)
  medido: real + diferencia

respuesta: redondear(abs(medido - real) / real, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Se mide un objeto y da {medido} cm. El valor real es {real} cm. ¿Cuál es el error relativo? Redondeá a 4 decimales."

pasos:
  - "Error absoluto: {abs(medido - real)} cm. Error relativo: {abs(medido - real)} ÷ {real} = {redondear(abs(medido - real) / real, 4)}"

explicacion: |
  Se divide el error absoluto por el valor real.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["error", "calculo"]

variables:
  real: random(50, 200)
  diferencia: random(1, 10)
  medido: real + diferencia

respuesta: redondear((abs(medido - real) / real) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se mide un objeto y da {medido} cm. El valor real es {real} cm. ¿Cuál es el error porcentual? Redondeá a 2 decimales."

pasos:
  - "Error relativo: {redondear(abs(medido - real) / real, 4)}. Error porcentual: {redondear(abs(medido - real) / real, 4)} × 100 = {redondear((abs(medido - real) / real) * 100, 2)}%"

explicacion: |
  El error porcentual es el error relativo expresado como porcentaje.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El error relativo es un número sin unidad (una proporción), a diferencia del error absoluto."

explicacion: |
  Por eso permite comparar la calidad de mediciones de magnitudes
  distintas (por ejemplo, un error en una longitud contra un error en una
  masa).
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["error", "comparacion"]

variables:
  real1: random(50, 200)
  error1: random(1, 5)
  real2: random(500, 2000)
  error2: random(5, 20)

restricciones:
  - (error1 / real1) != (error2 / real2)

respuesta: (error1 / real1) < (error2 / real2)
tipo: vf

enunciado: "Una medición de {real1} cm tuvo un error absoluto de {error1} cm; otra de {real2} cm tuvo un error absoluto de {error2} cm. ¿Es la primera medición más precisa (menor error relativo) que la segunda?"

pasos:
  - "Error relativo 1: {error1} ÷ {real1} = {redondear(error1 / real1, 4)}. Error relativo 2: {error2} ÷ {real2} = {redondear(error2 / real2, 4)}."

explicacion: |
  Aunque el error absoluto de la segunda sea mayor en números, hay que
  comparar el error RELATIVO (proporcional al tamaño de lo medido) para
  saber cuál midió con más precisión.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["error", "instrumento"]

respuesta: verdadero
tipo: vf

enunciado: "El error absoluto de una medición nunca puede ser menor que la mitad de la división más chica del instrumento usado."

explicacion: |
  Es el límite físico de lo que el instrumento puede distinguir, ya
  adelantado en `../magnitud-unidad-instrumento/`.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si se cuentan 24 alumnos en un aula (un conteo exacto, no una medición con instrumento), ese número no tiene incertidumbre: la idea de \"cifras significativas\" no le aplica de la misma forma que a una medida."

explicacion: |
  Las cifras significativas son un concepto de MEDICIÓN (con margen de
  error); un conteo exacto de unidades discretas no tiene ese margen.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "comparacion"]

enunciado: "¿Cuál de estos números tiene MÁS cifras significativas?"
tipo: mc
opciones_explicitas:
  - "20,50"
  - "0,02"
  - "2000"
respuesta: "20,50"

explicacion: |
  20,50 tiene 4 cifras significativas (2, 0, 5, 0 — con coma, los ceros
  cuentan); 0,02 tiene 1; 2000 se toma como 1 (ambiguo, sin coma).
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "completar"]

tipo: completar
enunciado: "Completá: los ceros a la ___ del primer dígito distinto de cero NO son cifras significativas."
respuestas_validas:
  - "izquierda"

explicacion: |
  Sólo ubican la coma decimal, no aportan precisión.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "completar"]

tipo: completar
enunciado: "Completá: el error porcentual es el error relativo multiplicado por ___."
respuestas_validas:
  - 100

explicacion: |
  Es la misma idea que pasar de decimal a porcentaje (ver
  `../porcentaje/`).
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de MENOS a MÁS cifras significativas: 3,40; 0,002; 0,042; 100,0."
opciones_explicitas:
  - "0,042"
  - "100,0"
  - "0,002"
  - "3,40"
respuesta_orden: ["0,002", "0,042", "3,40", "100,0"]
pasos:
  - "0,002 tiene 1; 0,042 tiene 2; 3,40 tiene 3; 100,0 tiene 4."

explicacion: |
  Se cuentan las cifras significativas de cada uno aplicando las reglas
  antes de poder ordenarlos: 1 < 2 < 3 < 4.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "verificacion"]

variables:
  real: random(50, 200)
  diferencia: random(2, 10)
  medido: real + diferencia
  correcto: abs(medido - real)
  error_mostrado: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error_mostrado

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? Se midió {medido} cm, el valor real es {real} cm, y se dice que el error absoluto es {mostrado} cm."

explicacion: |
  Se recalcula |medido − real| y se compara con el valor mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "error", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cifras significativas y el error de una medición son dos formas de expresar la misma idea: ningún instrumento mide con precisión infinita."

explicacion: |
  Es el hilo conductor de todo el módulo, que se retoma en
  `../error-sistematico-vs-aleatorio/`.
```

